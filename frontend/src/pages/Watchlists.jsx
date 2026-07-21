import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import stockList from "../companies.js";
import "./Watchlists.css";
import trashIcon from "../assets/trash.svg";
import Select from "react-select";

const API_BASE = import.meta.env.VITE_API_BASE;
const fuse = new Fuse(stockList, {
  keys: [
    { name: "name", weight: 0.6 },
    { name: "symbol", weight: 0.4 },
  ],
  threshold: 0.2,
  ignoreLocation: true,
  minMatchCharLength: 2,
  tokenize: true,
  matchAllTokens: false,
  includeScore: true,
});

function Watchlists() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [watchlists, setWatchlists] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);
  const [newName, setNewName] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [error, setError] = useState(null);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [renameName, setRenameName] = useState("");
  const [renameError, setRenameError] = useState(null);
  const [renameId, setRenameId] = useState(null);

  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [stocksData, setStocksData] = useState({});
  const [loadingData, setLoadingData] = useState(false);

  const [gradingConfig, setGradingConfig] = useState(() => {
    const saved = localStorage.getItem("smartstocks_grading_config");
    return saved ? JSON.parse(saved) : { pe: 15, pb: 2.5, roe: 20, roce: 20 };
  });
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [tempConfig, setTempConfig] = useState({ ...gradingConfig });
  const [showVerdictModal, setShowVerdictModal] = useState(false);
  const [verdictFilterTab, setVerdictFilterTab] = useState("all");

  const suggestionsRef = useRef(null);

  const getSmartSuggestions = (input) => {
    if (!input.trim()) return [];
    return fuse.search(input).map((r) => r.item);
  };

  const fetchLists = async () => {
    const res = await axios.get(`${API_BASE}/watchlists`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setWatchlists(res.data);
    if (!selectedListId && res.data.length > 0) {
      setSelectedListId(res.data[0].id);
    }
  };

  const createList = async () => {
    const trimmedName = newName.trim();

    if (!trimmedName) {
      setError("Name cannot be empty.");
      return;
    }

    const duplicate = watchlists.some(
      (wl) => wl.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (duplicate) {
      setError("A watchlist with this name already exists.");
      return;
    }

    try {
      await axios.post(
        `${API_BASE}/watchlists`,
        { name: trimmedName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewName("");
      setError(null); // clear any previous error
      setShowModal(false);
      fetchLists();
    } catch (err) {
      console.error(err);
      setError("Failed to create watchlist.");
    }
  };

  const renameList = (id) => {
  const list = watchlists.find((wl) => wl.id === id);
  if (!list) return;
  setRenameName(list.name);
  setRenameError(null);
  setRenameId(id);
  setShowRenameModal(true);
};

const submitRename = async () => {
  const trimmed = renameName.trim();
  if (!trimmed) {
    setRenameError("Name cannot be empty.");
    return;
  }

  const duplicate = watchlists.some(
    (wl) =>
      wl.name.toLowerCase() === trimmed.toLowerCase() &&
      wl.id !== renameId
  );

  if (duplicate) {
    setRenameError("A watchlist with this name already exists.");
    return;
  }

  try {
    await axios.put(
      `${API_BASE}/watchlists/${renameId}`,
      { name: trimmed },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setShowRenameModal(false);
    fetchLists();
  } catch (err) {
    console.error(err);
    setRenameError("Rename failed.");
  }
};


  const deleteList = async (id) => {
    await axios.delete(`${API_BASE}/watchlists/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchLists();
    setSelectedListId(null);
  };

  const removeStock = async (wid, symbol) => {
    await axios.delete(`${API_BASE}/watchlists/${wid}/stocks/${symbol}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchLists();
  };

  const addStock = async (symbol) => {
    if (!selectedListId || !symbol) return;

    try {
      await axios.post(
        `${API_BASE}/watchlists/${currentList.id}/stocks`,
        {
          symbol: selectedStock.symbol,
          name: selectedStock.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setQuery("");
      setSuggestions([]);
      await fetchLists();
    } catch (err) {
      console.error("Failed to add stock:", err);
    }
  };

  useEffect(() => {
    document.title = "Watchlists | Kreo";
  }, []);

  useEffect(() => {
    fetchLists();
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const results = fuse.search(query).map((r) => r.item);
      setSuggestions(results);
    } else setSuggestions([]);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentList = watchlists.find((wl) => wl.id === selectedListId);

  const exportWatchlistCSV = () => {
    if (!currentList || !currentList.stocks || currentList.stocks.length === 0) return;
    
    const headers = ["Symbol", "Company Name", "Current Price (INR)", "Change (%)", "Verdict", "Score"];
    const rows = currentList.stocks.map((stock) => {
      const details = stocksData[stock.symbol] || {};
      const evalData = details.evaluated || {};
      return [
        `"${stock.symbol}"`,
        `"${stock.name || stock.symbol}"`,
        details.price != null ? details.price : "N/A",
        details.change != null ? `${details.change >= 0 ? "+" : ""}${details.change.toFixed(2)}%` : "N/A",
        `"${evalData.verdict || "HOLD"}"`,
        evalData.final_score != null ? evalData.final_score.toFixed(1) : "N/A"
      ].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${(currentList.name || "Watchlist").replace(/\s+/g, "_")}_Export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setSelectedSymbols([]);
  }, [selectedListId]);

  useEffect(() => {
    if (!currentList || currentList.stocks.length === 0) return;
    
    const fetchMetrics = async () => {
      setLoadingData(true);
      const updatedData = { ...stocksData };
      let changed = false;
      
      for (const s of currentList.stocks) {
        try {
          const res = await axios.get(`${API_BASE}/recommend/${s.symbol}`, {
            params: {
              pe: gradingConfig.pe,
              pb: gradingConfig.pb,
              roe: gradingConfig.roe,
              roce: gradingConfig.roce
            },
            headers: { Authorization: `Bearer ${token}` }
          });
          updatedData[s.symbol] = res.data;
          changed = true;
        } catch (err) {
          console.error(err);
        }
      }
      
      if (changed) {
        setStocksData(updatedData);
      }
      setLoadingData(false);
    };
    
    setStocksData({});
    fetchMetrics();
  }, [currentList, gradingConfig]);

  const exportToCSV = () => {
    if (!currentList || currentList.stocks.length === 0) return;
    const headers = "Symbol,Name\n";
    const rows = currentList.stocks.map(s => `"${s.symbol}","${s.name}"`).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${currentList.name}_watchlist.csv`);
    link.click();
  };

  const handleImportCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      const text = evt.target.result;
      const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
      const importedSymbols = [];
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(",").map(c => c.replace(/"/g, "").trim());
        if (cols[0]) importedSymbols.push(cols[0]);
      }
      
      let addedCount = 0;
      for (const sym of importedSymbols) {
        const matched = stockList.find(s => s.symbol.toUpperCase() === sym.toUpperCase());
        if (matched) {
          try {
            await axios.post(
              `${API_BASE}/watchlists/${currentList.id}/stocks`,
              matched,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            addedCount++;
          } catch (err) {
            console.error(`Failed to add ${sym}`, err);
          }
        }
      }
      if (addedCount > 0) {
        fetchLists();
        alert(`Successfully imported ${addedCount} stocks!`);
      } else {
        alert("No matching stocks found in the import file.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const toggleSelectStock = (symbol) => {
    setSelectedSymbols(prev => 
      prev.includes(symbol) ? prev.filter(s => s !== symbol) : [...prev, symbol]
    );
  };

  const activeStocks = currentList?.stocks.map(s => stocksData[s.symbol]).filter(Boolean) || [];
  const pes = activeStocks.map(s => s["P/E"]).filter(pe => pe != null);
  const avgPe = pes.length > 0 ? (pes.reduce((a, b) => a + b, 0) / pes.length).toFixed(2) : "N/A";
  
  const roes = activeStocks.map(s => s["ROE"]).filter(roe => roe != null);
  const avgRoe = roes.length > 0 ? (roes.reduce((a, b) => a + b, 0) / roes.length).toFixed(2) + "%" : "N/A";

  const verdicts = activeStocks.map(s => s["verdict"]).filter(Boolean);
  const distribution = verdicts.reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});

  const getVerdictCategory = (v) => {
    if (!v) return "neutral";
    const lower = v.toLowerCase();
    if (lower.includes("buy")) return "buy";
    if (lower.includes("hold") || lower.includes("neutral")) return "hold";
    if (lower.includes("sell") || lower.includes("avoid")) return "sell";
    return "hold";
  };

  const buyStocks = activeStocks.filter(s => getVerdictCategory(s.verdict) === "buy");
  const holdStocks = activeStocks.filter(s => getVerdictCategory(s.verdict) === "hold");
  const avoidStocks = activeStocks.filter(s => getVerdictCategory(s.verdict) === "sell");

  const options = watchlists.map((wl) => ({
    value: wl.id,
    label: wl.name,
  }));
  const selectedOption =
    options.find((opt) => opt.value === selectedListId) || null;

  return (
    <div className="watchlists">
      <div className="watchlists-title-row">
        <h2>Your Watchlists</h2>
        <button className="btn-settings-gear" onClick={() => { setTempConfig({ ...gradingConfig }); setShowConfigModal(true); }} title="Grading System Settings">
          Config Rules
        </button>
      </div>
      <div className="watchlist-select">
        <label htmlFor="listSelect">watchlist:</label>
        <Select
          inputId="listSelect"
          options={options}
          value={selectedOption}
          onChange={(option) => setSelectedListId(option?.value)}
          placeholder="Select a watchlist"
          styles={{
            container: (base) => ({
              ...base,
              width: "100%",
              maxWidth: "300px", // fixed width
            }),
            control: (base, state) => ({
              ...base,
              backgroundColor: "var(--bg-secondary)",
              borderColor: state.isFocused ? "var(--accent-primary)" : "var(--border-medium)",
              boxShadow: state.isFocused
                ? "0 0 0 2px rgba(99, 102, 241, 0.2)"
                : "none",
              "&:hover": {
                borderColor: "var(--accent-primary)",
              },
              borderRadius: "8px",
              minHeight: "40px",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "var(--text-primary)",
            }),
            singleValue: (base) => ({
              ...base,
              color: "var(--text-primary)",
              fontWeight: 500,
            }),
            placeholder: (base) => ({
              ...base,
              color: "var(--text-muted)",
              fontWeight: 400,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "var(--border-medium)"
                : state.isFocused
                ? "var(--bg-glass)"
                : "var(--bg-secondary)",
              color: "var(--text-primary)",
              fontWeight: state.isSelected ? 700 : 500,
              padding: "10px 12px",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-medium)",
              borderRadius: "8px",
              boxShadow: "var(--shadow-md)",
              overflow: "hidden",
              marginTop: "4px",
            }),
            dropdownIndicator: (base, state) => ({
              ...base,
              color: "var(--text-muted)",
              transition: "transform 0.2s",
              transform: state.selectProps.menuIsOpen
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }),
            indicatorSeparator: () => ({ display: "none" }),
          }}
        />

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Create New
        </button>
        {selectedListId && (
          <>
            <button
              className="btn btn-primary"
              onClick={() => renameList(selectedListId)}
            >
              Rename
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteList(selectedListId)}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary"
              onClick={exportWatchlistCSV}
              disabled={!currentList || !currentList.stocks || currentList.stocks.length === 0}
              title="Export Watchlist to CSV Excel file"
            >
              Export CSV
            </button>
          </>
        )}
        {selectedSymbols.length >= 2 && (
          <button
            className="btn btn-primary btn-compare"
            onClick={() => navigate(`/compare?symbols=${selectedSymbols.join(",")}`)}
          >
            Compare Selected ({selectedSymbols.length})
          </button>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create New Watchlist</h3>
            <input
              type="text"
              placeholder="Enter name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            {error && <div className="error-text">{error}</div>}
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={createList}>
                Create
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowModal(false);
                  setError(null);
                  setNewName("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showRenameModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Rename Watchlist</h3>
            <input
              type="text"
              placeholder="Enter new name"
              value={renameName}
              onChange={(e) => {
                setRenameName(e.target.value);
                setRenameError(null);
              }}
            />
            {renameError && <div className="error-text">{renameError}</div>}
            <div className="modal-actions">
              <button
                className="btn btn-primary"
                onClick={submitRename}
              >
                Save
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowRenameModal(false);
                  setRenameError(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {currentList ? (
        <>
          {currentList.stocks.length === 0 && (
            <div className="empty-card">
              <h3>No stocks in "{currentList.name}"</h3>
              <p>Add companies to this list to track them here.</p>
            </div>
          )}

          {currentList.stocks.length > 0 && (
            <div className="analytics-summary-card">
              <div className="analytics-header" onClick={() => setShowSummary(!showSummary)}>
                <span className="summary-title">Watchlist Analytics Summary {loadingData && "(Loading metrics...)"}</span>
                <button className="btn-toggle-summary">{showSummary ? "Hide" : "Show"}</button>
              </div>
              {showSummary && (
                <div className="analytics-content">
                  {activeStocks.length === 0 ? (
                    <p className="loading-text">Fetching live financials and scoring metrics...</p>
                  ) : (
                    <div className="analytics-grid">
                      <div className="metric-box">
                        <strong>Avg PE Ratio</strong>
                        <span>{avgPe}</span>
                      </div>
                      <div className="metric-box">
                        <strong>Avg ROE</strong>
                        <span>{avgRoe}</span>
                      </div>
                      <div
                        className="metric-box verdict-dist clickable-metric"
                        onClick={() => {
                          setVerdictFilterTab("all");
                          setShowVerdictModal(true);
                        }}
                        title="Click to view detailed Buy vs Do Not Buy breakdown"
                      >
                        <div className="verdict-dist-header">
                          <strong>Verdicts Distribution</strong>
                          <span className="click-hint">Details →</span>
                        </div>
                        <div className="dist-tags">
                          {Object.entries(distribution).map(([v, count]) => (
                            <span key={v} className={`dist-tag ${v.replace(/\s/g, "-").toLowerCase()}`}>
                              {v}: {count}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="add-stock">
            <input
              type="text"
              placeholder="Search & add stock (e.g. TCS)"
              value={query}
              onChange={(e) => {
                const val = e.target.value;
                setQuery(val);
                if (val.trim()) setSuggestions(getSmartSuggestions(val));
                else setSuggestions([]);
              }}
              onBlur={() => setTimeout(() => setSuggestions([]), 150)}
              className="search-input"
            />

            <button
              className="btn btn-primary"
              style={{ marginLeft: "8px" }}
              disabled={!selectedStock}
              onClick={() => {
                if (selectedStock) {
                  addStock(selectedStock.symbol);
                  setQuery("");
                  setSelectedStock(null);
                }
              }}
            >
              Add
            </button>

            {suggestions.length > 0 && (
              <ul className="suggestions-list" ref={suggestionsRef}>
                {suggestions.map((stock) => (
                  <li
                    key={stock.symbol}
                    onClick={() => {
                      setQuery(stock.name);
                      setSelectedStock(stock);
                      setSuggestions([]);
                    }}
                    className="suggestion-item"
                  >
                    <div className="stock-name">{stock.name}</div>
                    <div className="stock-symbol">{stock.symbol}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {currentList.stocks.length > 0 && (
            <ul className="watchlist-box">
              {currentList.stocks.map((stock) => {
                const stockDetails = stocksData[stock.symbol];
                const hasPrice = stockDetails && stockDetails.price != null;
                const change = stockDetails ? stockDetails.change : 0;
                
                return (
                  <li key={stock.symbol}>
                    <div className="stock-info-wrapper">
                      <div
                        className="stock-info"
                        onClick={() => navigate(`/stock/${stock.symbol}?pe=${gradingConfig.pe}&pb=${gradingConfig.pb}&roe=${gradingConfig.roe}&roce=${gradingConfig.roce}`)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="stock-name">{stock.symbol}</span>
                        <span className="company-name"> — {stock.name}</span>
                      </div>
                    </div>
                    
                    {hasPrice && (
                      <div className="price-badge-container">
                        <span className="price-val">₹{stockDetails.price}</span>
                        <span className={`price-change ${change >= 0 ? "positive" : "negative"}`}>
                          {change >= 0 ? "+" : ""}{change.toFixed(2)}%
                        </span>
                      </div>
                    )}
                    
                    <button
                      className="btn-remove"
                      onClick={() => removeStock(currentList.id, stock.symbol)}
                      aria-label={`Remove ${stock.symbol}`}
                    >
                      <img className="deleteIcon" src={trashIcon} alt="delete" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      ) : (
        <p className="empty">
          No watchlists selected. Select or create new above!
        </p>
      )}
      {showConfigModal && (
        <div className="modal-overlay">
          <div className="modal config-modal">
            <h3>Grading System Thresholds</h3>
            <p className="modal-desc">Adjust baseline parameters to customize stock evaluation metrics.</p>
            
            <div className="config-form" style={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Max P/E Threshold: <strong style={{ color: "var(--accent-secondary)" }}>{tempConfig.pe}</strong></label>
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  step="1"
                  value={tempConfig.pe}
                  onChange={(e) => setTempConfig(prev => ({ ...prev, pe: parseFloat(e.target.value) }))}
                  style={{ width: "100%", accentColor: "var(--accent-primary)" }}
                />
              </div>
              <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Max P/B Threshold: <strong style={{ color: "var(--accent-secondary)" }}>{tempConfig.pb}</strong></label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="10" 
                  step="0.1"
                  value={tempConfig.pb}
                  onChange={(e) => setTempConfig(prev => ({ ...prev, pb: parseFloat(e.target.value) }))}
                  style={{ width: "100%", accentColor: "var(--accent-primary)" }}
                />
              </div>
              <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Min ROE % Threshold: <strong style={{ color: "var(--accent-secondary)" }}>{tempConfig.roe}%</strong></label>
                <input 
                  type="range" 
                  min="5" 
                  max="40" 
                  step="1"
                  value={tempConfig.roe}
                  onChange={(e) => setTempConfig(prev => ({ ...prev, roe: parseFloat(e.target.value) }))}
                  style={{ width: "100%", accentColor: "var(--accent-primary)" }}
                />
              </div>
              <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Min ROCE % Threshold: <strong style={{ color: "var(--accent-secondary)" }}>{tempConfig.roce}%</strong></label>
                <input 
                  type="range" 
                  min="5" 
                  max="40" 
                  step="1"
                  value={tempConfig.roce}
                  onChange={(e) => setTempConfig(prev => ({ ...prev, roce: parseFloat(e.target.value) }))}
                  style={{ width: "100%", accentColor: "var(--accent-primary)" }}
                />
              </div>
            </div>

            <div className="modal-actions" style={{ display: "flex", gap: "10px", marginTop: "20px", justifyContent: "flex-end" }}>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  setGradingConfig(tempConfig);
                  localStorage.setItem("smartstocks_grading_config", JSON.stringify(tempConfig));
                  setShowConfigModal(false);
                }}
              >
                Apply Custom Rules
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  const defaults = { pe: 15, pb: 2.5, roe: 20, roce: 20 };
                  setGradingConfig(defaults);
                  localStorage.setItem("smartstocks_grading_config", JSON.stringify(defaults));
                  setShowConfigModal(false);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
      {showVerdictModal && (
        <div className="modal-overlay" onClick={() => setShowVerdictModal(false)}>
          <div className="modal modal-content verdict-modal" onClick={(e) => e.stopPropagation()}>
            <div className="verdict-modal-header">
              <div>
                <h3>Watchlist Recommendation Breakdown</h3>
                <p className="modal-subtitle">Categorized breakdown of stocks to Buy vs Avoid</p>
              </div>
              <button className="btn-close-modal" onClick={() => setShowVerdictModal(false)}>✕</button>
            </div>

            <div className="verdict-summary-cards">
              <div
                className={`v-sum-card buy-card ${verdictFilterTab === "buy" ? "selected" : ""}`}
                onClick={() => setVerdictFilterTab("buy")}
              >
                <div className="v-card-text">
                  <span className="v-card-count">{buyStocks.length}</span>
                  <span className="v-card-label">Stocks to BUY</span>
                </div>
              </div>

              <div
                className={`v-sum-card hold-card ${verdictFilterTab === "hold" ? "selected" : ""}`}
                onClick={() => setVerdictFilterTab("hold")}
              >
                <div className="v-card-text">
                  <span className="v-card-count">{holdStocks.length}</span>
                  <span className="v-card-label">Stocks to HOLD</span>
                </div>
              </div>

              <div
                className={`v-sum-card avoid-card ${verdictFilterTab === "sell" ? "selected" : ""}`}
                onClick={() => setVerdictFilterTab("sell")}
              >
                <div className="v-card-text">
                  <span className="v-card-count">{avoidStocks.length}</span>
                  <span className="v-card-label">DO NOT BUY</span>
                </div>
              </div>
            </div>

            <div className="verdict-tabs">
              <button
                className={`v-tab ${verdictFilterTab === "all" ? "active" : ""}`}
                onClick={() => setVerdictFilterTab("all")}
              >
                All ({activeStocks.length})
              </button>
              <button
                className={`v-tab buy-tab ${verdictFilterTab === "buy" ? "active" : ""}`}
                onClick={() => setVerdictFilterTab("buy")}
              >
                Buy ({buyStocks.length})
              </button>
              <button
                className={`v-tab hold-tab ${verdictFilterTab === "hold" ? "active" : ""}`}
                onClick={() => setVerdictFilterTab("hold")}
              >
                Hold ({holdStocks.length})
              </button>
              <button
                className={`v-tab sell-tab ${verdictFilterTab === "sell" ? "active" : ""}`}
                onClick={() => setVerdictFilterTab("sell")}
              >
                Do Not Buy ({avoidStocks.length})
              </button>
            </div>

            <div className="verdict-stock-list">
              {(verdictFilterTab === "all" ? activeStocks :
                verdictFilterTab === "buy" ? buyStocks :
                verdictFilterTab === "hold" ? holdStocks : avoidStocks).length === 0 ? (
                <div className="empty-verdict-list">
                  <p>No stocks in this category.</p>
                </div>
              ) : (
                (verdictFilterTab === "all" ? activeStocks :
                 verdictFilterTab === "buy" ? buyStocks :
                 verdictFilterTab === "hold" ? holdStocks : avoidStocks).map((s) => {
                  const cat = getVerdictCategory(s.verdict);
                  return (
                    <div key={s.symbol} className={`verdict-stock-item ${cat}`}>
                      <div className="v-stock-left">
                        <span className="v-stock-symbol">{s.symbol}</span>
                        <span className="v-stock-name">{s.name || s.symbol}</span>
                      </div>

                      <div className="v-stock-mid">
                        <span className={`verdict-pill ${cat}`}>
                          {s.verdict || "N/A"}
                        </span>
                        {s.final_score != null && (
                          <span className="score-pill">Score: {s.final_score.toFixed(0)}/100</span>
                        )}
                      </div>

                      <div className="v-stock-right">
                        {s.price != null && (
                          <div className="v-stock-price-group">
                            <span className="v-stock-price">₹{s.price}</span>
                            <span className={`v-stock-change ${(s.change || 0) >= 0 ? "positive" : "negative"}`}>
                              {(s.change || 0) >= 0 ? "+" : ""}{s.change?.toFixed(2)}%
                            </span>
                          </div>
                        )}
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => {
                            setShowVerdictModal(false);
                            navigate(`/stock/${s.symbol}`);
                          }}
                        >
                          View Analysis →
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="verdict-modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowVerdictModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlists;
