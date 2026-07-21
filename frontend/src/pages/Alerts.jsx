import React, { useEffect, useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import stockList from "../companies.js";
import "./Alerts.css";

const API_BASE = import.meta.env.VITE_API_BASE;
const token = () => localStorage.getItem("token");

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

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'active', 'triggered'

  const [query, setQuery] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [priceLoading, setPriceLoading] = useState(false);
  const [targetPrice, setTargetPrice] = useState("");
  const [alertType, setAlertType] = useState("above");
  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    document.title = "Price Alerts | Kreo";
  }, []);

  useEffect(() => {
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchAlerts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/alerts`, {
        headers: { Authorization: `Bearer ${token()}` },
      });
      setAlerts(res.data || []);
    } catch (err) {
      console.error("Failed to fetch alerts:", err);
    } finally {
      setLoading(false);
    }
  };

  const getSuggestions = (input) => {
    if (!input.trim()) return [];
    return fuse.search(input).map((r) => r.item);
  };
  const suggestions = getSuggestions(query);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSelectedStock(null);
    setCurrentPrice(null);
    setShowSuggestions(true);
  };

  const handleSelect = async (stock) => {
    setQuery(stock.name);
    setSelectedStock(stock);
    setShowSuggestions(false);
    setPriceLoading(true);
    setCurrentPrice(null);
    try {
      const res = await axios.get(`${API_BASE}/recommend/${stock.symbol}`, {
        headers: { Authorization: `Bearer ${token()}` },
      });
      if (res.data && res.data.price) {
        setCurrentPrice(res.data.price);
        // Default target price to +5% above
        setTargetPrice((res.data.price * 1.05).toFixed(2));
        setAlertType("above");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPriceLoading(false);
    }
  };

  const applyPreset = (pct, type) => {
    if (!currentPrice) return;
    const calculated = (currentPrice * (1 + pct / 100)).toFixed(2);
    setTargetPrice(calculated);
    setAlertType(type);
  };

  const handleCreateAlert = async () => {
    if (!selectedStock || !targetPrice) return;
    setMessage(null);
    setCreating(true);
    try {
      const res = await axios.post(
        `${API_BASE}/alerts`,
        {
          symbol: selectedStock.symbol,
          name: selectedStock.name,
          target_price: parseFloat(targetPrice),
          alert_type: alertType,
          initial_price: currentPrice,
        },
        { headers: { Authorization: `Bearer ${token()}` } }
      );
      if (res.data.success) {
        setMessage({ type: "success", text: "Price alert created successfully!" });
        setQuery("");
        setSelectedStock(null);
        setCurrentPrice(null);
        setTargetPrice("");
        setAlertType("above");
        fetchAlerts();
      }
    } catch (err) {
      const detail = err.response?.data?.detail || err.message;
      setMessage({ type: "error", text: `Failed to create alert: ${detail}` });
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteAlert = async (alertId) => {
    try {
      await axios.delete(`${API_BASE}/alerts/${alertId}`, {
        headers: { Authorization: `Bearer ${token()}` },
      });
      setAlerts((prev) => prev.filter((a) => (a.id || a._id) !== alertId));
    } catch (err) {
      console.error(err);
    }
  };

  const formatCurrency = (val) =>
    "₹" + Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const activeAlertsCount = alerts.filter((a) => !a.triggered).length;
  const triggeredAlertsCount = alerts.filter((a) => a.triggered).length;

  const filteredAlerts = alerts.filter((a) => {
    if (activeTab === "active") return !a.triggered;
    if (activeTab === "triggered") return a.triggered;
    return true;
  });

  return (
    <div className="container alerts-page">
      <div className="alerts-header-row">
        <div>
          <h1 className="page-heading">Price Alerts</h1>
          <p className="subheading">Get instant in-app notifications when stocks hit your target price</p>
        </div>
      </div>

      <div className="alerts-form-card">
        <h3>Create New Alert</h3>

        <div className="form-group">
          <label>Search Stock</label>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Type company name or ticker symbol (e.g. RELIANCE, TCS)..."
              value={query}
              onChange={handleInputChange}
              onFocus={() => query && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="search-input"
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((stock) => (
                  <li
                    key={stock.symbol}
                    className={`suggestion-item ${
                      selectedStock?.symbol === stock.symbol ? "selected" : ""
                    }`}
                    onClick={() => handleSelect(stock)}
                  >
                    <span className="stock-name">{stock.name}</span>
                    <span className="stock-symbol">{stock.symbol}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {selectedStock && (
          <div className="selected-stock-info">
            <div className="stock-meta">
              <span className="selected-symbol">{selectedStock.symbol}</span>
              <span className="selected-name">{selectedStock.name}</span>
            </div>
            {priceLoading ? (
              <span className="price-loading">
                <span className="loader-sm" /> Fetching live price...
              </span>
            ) : currentPrice != null ? (
              <div className="current-price-badge">
                <span className="price-label">Live Price:</span>
                <span className="price-value">{formatCurrency(currentPrice)}</span>
              </div>
            ) : null}
          </div>
        )}

        <div className="form-group">
          <label>Target Price (₹)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 2500.00"
            value={targetPrice}
            onChange={(e) => setTargetPrice(e.target.value)}
            className="form-input"
          />

          {currentPrice != null && (
            <div className="presets-container">
              <span className="presets-label">Quick Presets:</span>
              <div className="presets-buttons">
                <button
                  type="button"
                  className="preset-btn positive"
                  onClick={() => applyPreset(5, "above")}
                >
                  +5% (₹{(currentPrice * 1.05).toFixed(2)})
                </button>
                <button
                  type="button"
                  className="preset-btn positive"
                  onClick={() => applyPreset(10, "above")}
                >
                  +10% (₹{(currentPrice * 1.1).toFixed(2)})
                </button>
                <button
                  type="button"
                  className="preset-btn negative"
                  onClick={() => applyPreset(-5, "below")}
                >
                  -5% (₹{(currentPrice * 0.95).toFixed(2)})
                </button>
                <button
                  type="button"
                  className="preset-btn negative"
                  onClick={() => applyPreset(-10, "below")}
                >
                  -10% (₹{(currentPrice * 0.9).toFixed(2)})
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Trigger Condition</label>
          <div className="radio-group">
            <label className={`radio-label ${alertType === "above" ? "active above" : ""}`}>
              <input
                type="radio"
                name="alertType"
                value="above"
                checked={alertType === "above"}
                onChange={() => setAlertType("above")}
              />
              Price Rises Above (≥)
            </label>
            <label className={`radio-label ${alertType === "below" ? "active below" : ""}`}>
              <input
                type="radio"
                name="alertType"
                value="below"
                checked={alertType === "below"}
                onChange={() => setAlertType("below")}
              />
              Price Drops Below (≤)
            </label>
          </div>
        </div>

        <button
          className="btn-primary create-btn"
          disabled={!selectedStock || !targetPrice || creating}
          onClick={handleCreateAlert}
        >
          {creating ? (
            <>
              <span className="loader" /> Creating Alert...
            </>
          ) : (
            "Set Price Alert"
          )}
        </button>

        {message && (
          <div className={`alert-message ${message.type}`}>
            {message.text}
          </div>
        )}
      </div>

      <div className="alerts-list-section">
        <div className="alerts-section-header">
          <h2 className="section-heading">Your Price Alerts</h2>
          <div className="alerts-tabs">
            <button
              className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All ({alerts.length})
            </button>
            <button
              className={`tab-btn ${activeTab === "active" ? "active" : ""}`}
              onClick={() => setActiveTab("active")}
            >
              Active ({activeAlertsCount})
            </button>
            <button
              className={`tab-btn ${activeTab === "triggered" ? "active" : ""}`}
              onClick={() => setActiveTab("triggered")}
            >
              Triggered ({triggeredAlertsCount})
            </button>
          </div>
        </div>

        {loading ? (
          <div className="loading-state">
            <span className="loader" /> Fetching latest alert statuses...
          </div>
        ) : filteredAlerts.length > 0 ? (
          <div className="alerts-grid">
            {filteredAlerts.map((alert) => {
              const alertId = alert.id || alert._id;
              const isTriggered = alert.triggered;
              const livePrice = alert.current_price;
              const distPct = alert.distance_pct;
              const progPct = alert.progress_pct || 0;

              return (
                <div
                  key={alertId}
                  className={`alert-card ${isTriggered ? "triggered" : "active-card"}`}
                >
                  <div className="alert-card-header">
                    <div className="alert-stock-title">
                      <span className="alert-symbol">{alert.symbol}</span>
                      {alert.name && <span className="alert-company-name">{alert.name}</span>}
                    </div>
                    <span className={`alert-type-badge ${alert.alert_type}`}>
                      {alert.alert_type === "above" ? "Rises Above ↑" : "Drops Below ↓"}
                    </span>
                  </div>

                  <div className="alert-prices-row">
                    <div className="price-item">
                      <span className="price-item-label">Target Price</span>
                      <span className="price-item-value target">{formatCurrency(alert.target_price)}</span>
                    </div>

                    <div className="price-item align-right">
                      <span className="price-item-label">Live Price</span>
                      <span className="price-item-value live">
                        {livePrice != null ? formatCurrency(livePrice) : "—"}
                        {alert.price_change != null && (
                          <span className={`mini-chg ${alert.price_change >= 0 ? "positive" : "negative"}`}>
                            {alert.price_change >= 0 ? "+" : ""}{alert.price_change.toFixed(2)}%
                          </span>
                        )}
                      </span>
                    </div>
                  </div>

                  {!isTriggered && livePrice != null && (
                    <div className="progress-section">
                      <div className="progress-label-row">
                        <span className="dist-label">
                          {distPct != null ? `${distPct}% away` : "Tracking"}
                        </span>
                        <span className="prog-val">{progPct}% to target</span>
                      </div>
                      <div className="progress-track">
                        <div
                          className={`progress-fill ${alert.alert_type}`}
                          style={{ width: `${Math.min(100, Math.max(5, progPct))}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="alert-card-footer">
                    <span className={`alert-status-tag ${isTriggered ? "triggered" : "active"}`}>
                      {isTriggered ? (
                        <>Triggered at {formatCurrency(alert.triggered_price || alert.target_price)}</>
                      ) : (
                        <>Tracking Live</>
                      )}
                    </span>

                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteAlert(alertId)}
                      title="Delete alert"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No alerts found</h3>
            <p>{activeTab === "all" ? "Create your first price alert above!" : `No ${activeTab} price alerts right now.`}</p>
          </div>
        )}
      </div>
    </div>
  );
}
