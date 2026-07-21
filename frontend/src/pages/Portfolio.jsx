import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import stockList from "../companies.js";
import "./Portfolio.css";

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

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [holdings, setHoldings] = useState([]);
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [query, setQuery] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [priceLoading, setPriceLoading] = useState(false);
  const [tradeType, setTradeType] = useState("buy");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    document.title = "Portfolio | Kreo";
  }, []);

  useEffect(() => {
    if (activeTab === "portfolio") fetchHoldings();
    else if (activeTab === "history") fetchTrades();
  }, [activeTab]);

  const fetchHoldings = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/portfolio`, {
        headers: { Authorization: `Bearer ${token()}` },
      });
      setHoldings(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTrades = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/portfolio/trades`, {
        headers: { Authorization: `Bearer ${token()}` },
      });
      setTrades(res.data);
    } catch (err) {
      console.error(err);
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
    setPrice("");
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
      const p = res.data.price;
      setCurrentPrice(p);
      setPrice(p != null ? String(p) : "");
    } catch (err) {
      console.error(err);
    } finally {
      setPriceLoading(false);
    }
  };

  const totalInvestment = holdings.reduce(
    (sum, h) => sum + h.avg_price * h.quantity,
    0
  );
  const currentValue = holdings.reduce(
    (sum, h) => sum + h.current_price * h.quantity,
    0
  );
  const totalPnl = currentValue - totalInvestment;
  const totalPnlPercent = totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;

  const formatCurrency = (val) =>
    "₹" + Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handlePlaceTrade = async () => {
    if (!selectedStock || !quantity || !price) return;
    setMessage(null);
    try {
      await axios.post(
        `${API_BASE}/portfolio/trade`,
        {
          symbol: selectedStock.symbol,
          name: selectedStock.name,
          trade_type: tradeType,
          quantity: parseInt(quantity, 10),
          price: parseFloat(price),
        },
        { headers: { Authorization: `Bearer ${token()}` } }
      );
      setMessage({ type: "success", text: "Trade placed successfully!" });
      setQuery("");
      setSelectedStock(null);
      setCurrentPrice(null);
      setQuantity("");
      setPrice("");
      setTradeType("buy");
    } catch (err) {
      const detail = err.response?.data?.detail || err.message;
      setMessage({ type: "error", text: `Trade failed: ${detail}` });
    }
  };

  const total = (parseInt(quantity, 10) || 0) * (parseFloat(price) || 0);

  const tabs = [
    { key: "portfolio", label: "Portfolio" },
    { key: "history", label: "Trade History" },
    { key: "place", label: "Place Trade" },
  ];

  return (
    <div className="container portfolio-page">
      <h1 className="page-heading">Paper Trading</h1>

      <div className="portfolio-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "portfolio" && (
        <div className="tab-content">
          {holdings.length > 0 && (
            <div className="summary-bar">
              <div className="summary-item">
                <span className="summary-label">Total Investment</span>
                <span className="summary-value">{formatCurrency(totalInvestment)}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Current Value</span>
                <span className="summary-value">{formatCurrency(currentValue)}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total P&L</span>
                <span className={`summary-value ${totalPnl >= 0 ? "positive" : "negative"}`}>
                  {totalPnl >= 0 ? "+" : ""}{formatCurrency(totalPnl)}
                </span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total P&L %</span>
                <span className={`summary-value ${totalPnlPercent >= 0 ? "positive" : "negative"}`}>
                  {totalPnlPercent >= 0 ? "+" : ""}{totalPnlPercent.toFixed(2)}%
                </span>
              </div>
            </div>
          )}

          {loading ? (
            <div className="loading-state">
              <span className="loader" /> Loading holdings...
            </div>
          ) : holdings.length > 0 ? (
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Avg Price</th>
                    <th>Current Price</th>
                    <th>Invested</th>
                    <th>Current Value</th>
                    <th>P&L</th>
                    <th>P&L%</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((h) => (
                    <tr key={h.symbol}>
                      <td className="cell-symbol">{h.symbol}</td>
                      <td className="cell-name">{h.name}</td>
                      <td>{h.quantity}</td>
                      <td>{formatCurrency(h.avg_price)}</td>
                      <td>{formatCurrency(h.current_price)}</td>
                      <td>{formatCurrency(h.avg_price * h.quantity)}</td>
                      <td>{formatCurrency(h.current_price * h.quantity)}</td>
                      <td className={h.pnl >= 0 ? "positive" : "negative"}>
                        {h.pnl >= 0 ? "+" : ""}{formatCurrency(h.pnl)}
                      </td>
                      <td className={h.pnl_percent >= 0 ? "positive" : "negative"}>
                        {h.pnl_percent >= 0 ? "+" : ""}{h.pnl_percent.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <h3>No holdings yet. Start trading!</h3>
              <p>Use the Place Trade tab to buy your first stock.</p>
              <button className="btn-primary" onClick={() => setActiveTab("place")}>
                Go to Place Trade
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === "history" && (
        <div className="tab-content">
          {loading ? (
            <div className="loading-state">
              <span className="loader" /> Loading trade history...
            </div>
          ) : trades.length > 0 ? (
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date/Time</th>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {trades.map((t, i) => (
                    <tr key={i}>
                      <td>{new Date(t.timestamp).toLocaleString("en-IN")}</td>
                      <td className="cell-symbol">{t.symbol}</td>
                      <td className="cell-name">{t.name}</td>
                      <td>
                        <span className={`trade-badge ${t.trade_type}`}>
                          {t.trade_type === "buy" ? "Buy" : "Sell"}
                        </span>
                      </td>
                      <td>{t.quantity}</td>
                      <td>{formatCurrency(t.price)}</td>
                      <td>{formatCurrency(t.price * t.quantity)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <h3>No trades yet</h3>
              <p>Your trade history will appear here once you start trading.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === "place" && (
        <div className="tab-content">
          <div className="trade-form-card">
            <h3>Place a Trade</h3>

            <div className="form-group">
              <label>Search Stock</label>
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search by name or symbol..."
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
                <span className="selected-symbol">{selectedStock.symbol}</span>
                <span className="selected-name">{selectedStock.name}</span>
                {priceLoading ? (
                  <span className="price-loading">
                    <span className="loader-sm" /> Fetching price...
                  </span>
                ) : currentPrice != null ? (
                  <span className="current-price">Current Price: {formatCurrency(currentPrice)}</span>
                ) : null}
              </div>
            )}

            <div className="form-group">
              <label>Trade Type</label>
              <div className="radio-group">
                <label className={`radio-label ${tradeType === "buy" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="tradeType"
                    value="buy"
                    checked={tradeType === "buy"}
                    onChange={() => setTradeType("buy")}
                  />
                  Buy
                </label>
                <label className={`radio-label ${tradeType === "sell" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="tradeType"
                    value="sell"
                    checked={tradeType === "sell"}
                    onChange={() => setTradeType("sell")}
                  />
                  Sell
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 10"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Price (₹)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="e.g. 1500.50"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            {quantity && price && (
              <div className="total-display">
                Total: <strong>{formatCurrency(total)}</strong>
              </div>
            )}

            <button
              className="btn-primary place-trade-btn"
              disabled={!selectedStock || !quantity || !price}
              onClick={handlePlaceTrade}
            >
              Place Trade
            </button>

            {message && (
              <div className={`trade-message ${message.type}`}>
                {message.text}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
