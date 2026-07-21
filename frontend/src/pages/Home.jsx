import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import stockList from "../companies.js";
import WatchlistStar from "../components/WatchlistStar";
import IndicesBar from "../components/IndicesBar";
import "./Home.css";

const API_BASE = import.meta.env.VITE_API_BASE;

const fuse = new Fuse(stockList, {
  keys: [
    { name: "name", weight: 0.6 },
    { name: "symbol", weight: 0.4 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
  minMatchCharLength: 1,
});

const MAJOR_STOCKS = [
  "RELIANCE", "TCS", "HDFCBANK", "ICICIBANK", "INFY",
  "HINDUNILVR", "ITC", "SBIN", "BHARTIARTL", "KOTAKBANK",
  "WIPRO", "LT", "AXISBANK", "BAJFINANCE", "MARUTI",
  "SUNPHARMA", "TATAMOTORS", "NTPC", "ONGC", "POWERGRID",
  "ULTRACEMCO", "HCLTECH", "TATASTEEL", "ADANIENT", "M&M",
  "TITAN", "ASIANPAINT", "NESTLEIND", "BAJAJFINSV", "JSWSTEEL",
  "HAL", "BEL", "TRENT", "DMART", "ZOMATO",
  "TCIEXP", "COALINDIA", "IOC", "BPCL", "BRITANNIA",
  "ADANIPORTS", "GRASIM", "EICHERMOT", "CIPLA", "DRREDDY",
  "HEROMOTOCO", "TVSMOTOR", "DIVISLAB", "PIDILITIND", "HINDALCO",
];

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [prices, setPrices] = useState(() => {
    const initial = {};
    MAJOR_STOCKS.forEach((s) => {
      initial[s] = { price: 1250, change: 0.5 };
    });
    return initial;
  });
  const [loading, setLoading] = useState(false);

  // Search Bar State
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery).map((r) => r.item).slice(0, 8);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigate(`/stock/${suggestions[0].symbol}`);
      setSearchQuery("");
      setShowSuggestions(false);
    } else if (searchQuery.trim()) {
      navigate(`/stock/${searchQuery.trim().toUpperCase()}`);
      setSearchQuery("");
      setShowSuggestions(false);
    }
  };

  const fetchPrices = useCallback(async () => {
    try {
      const res = await axios.post(
        `${API_BASE}/prices/bulk`,
        { symbols: MAJOR_STOCKS },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data && res.data.prices) {
        setPrices(res.data.prices);
      }
    } catch (err) {
      console.error("Failed to fetch prices:", err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    document.title = "Kreo — Market Dashboard";
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  const stockList = MAJOR_STOCKS.map((s) => ({ symbol: s, ...(prices[s] || { price: 1500, change: 0 }) }));
  
  const gainers = [...stockList]
    .filter((s) => s.price != null)
    .sort((a, b) => (b.change || 0) - (a.change || 0))
    .slice(0, 5);

  const losers = [...stockList]
    .filter((s) => s.price != null)
    .sort((a, b) => (a.change || 0) - (b.change || 0))
    .slice(0, 5);

  return (
    <div className="home">
      <IndicesBar />

      <div className="home-header">
        <div className="home-header-title">
          <h1>Market Dashboard</h1>
          <p className="home-subtitle">Live prices of top Indian stocks</p>
        </div>

        <div className="dashboard-search-wrapper" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="dashboard-search-form">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search company or symbol to view financials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
              className="dashboard-search-input"
            />
            <button type="submit" className="dashboard-search-btn">
              Analyze Financials
            </button>
          </form>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="dashboard-suggestions-dropdown">
              {suggestions.map((item) => (
                <li
                  key={item.symbol}
                  onClick={() => {
                    setShowSuggestions(false);
                    setSearchQuery("");
                    navigate(`/stock/${item.symbol}`);
                  }}
                  className="dashboard-suggestion-item"
                >
                  <span className="stock-sym-badge">{item.symbol}</span>
                  <span className="stock-company-name">{item.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-summary">
        <div className="summary-card gainers">
          <h3>Top Gainers</h3>
          {loading ? (
            <p className="na-text">Loading market gainers...</p>
          ) : (
            <ul>
              {gainers.map((s) => (
                <li key={s.symbol} onClick={() => navigate(`/stock/${s.symbol}`)}>
                  <span className="sym">{s.symbol}</span>
                  <span className="val">₹{s.price}</span>
                  <span className={`chg ${s.change >= 0 ? "positive" : "negative"}`}>
                    {s.change >= 0 ? "+" : ""}{s.change?.toFixed(2)}%
                  </span>
                  <WatchlistStar symbol={s.symbol} name={s.symbol} size={16} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="summary-card losers">
          <h3>Top Losers</h3>
          {loading ? (
            <p className="na-text">Loading market losers...</p>
          ) : (
            <ul>
              {losers.map((s) => (
                <li key={s.symbol} onClick={() => navigate(`/stock/${s.symbol}`)}>
                  <span className="sym">{s.symbol}</span>
                  <span className="val">₹{s.price}</span>
                  <span className={`chg ${s.change <= 0 ? "negative" : "positive"}`}>
                    {s.change >= 0 ? "+" : ""}{s.change?.toFixed(2)}%
                  </span>
                  <WatchlistStar symbol={s.symbol} name={s.symbol} size={16} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-grid">
        {loading ? (
          <div className="home-loader"><div className="spinner" /></div>
        ) : (
          MAJOR_STOCKS.map((symbol) => {
            const data = prices[symbol];
            return (
              <div
                key={symbol}
                className="stock-card"
                onClick={() => navigate(`/stock/${symbol}`)}
              >
                <div className="stock-card-top">
                  <span className="sc-symbol">{symbol}</span>
                  <WatchlistStar symbol={symbol} name={symbol} size={17} />
                </div>
                {data?.price != null ? (
                  <div className="sc-price-group">
                    <span className="sc-price">₹{data.price}</span>
                    <span className={`sc-change ${(data.change || 0) >= 0 ? "positive" : "negative"}`}>
                      {(data.change || 0) >= 0 ? "+" : ""}{data.change?.toFixed(2)}%
                    </span>
                  </div>
                ) : (
                  <span className="sc-na">—</span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
