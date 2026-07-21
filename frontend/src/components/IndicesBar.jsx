import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IndicesBar.css";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function IndicesBar() {
  const [indices, setIndices] = useState([
    { name: "NIFTY 50", symbol: "^NSEI", value: 24350.25, change: 125.4, change_pct: 0.52 },
    { name: "SENSEX", symbol: "^BSESN", value: 80120.5, change: 380.15, change_pct: 0.48 },
    { name: "NIFTY BANK", symbol: "^NSEBANK", value: 52180.1, change: -145.2, change_pct: -0.28 },
    { name: "NIFTY IT", symbol: "^CNXIT", value: 38940.75, change: 290.6, change_pct: 0.75 },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIndices();
    const timer = setInterval(fetchIndices, 30000);
    return () => clearInterval(timer);
  }, []);

  const fetchIndices = async () => {
    try {
      const res = await axios.get(`${API_BASE}/indices`);
      if (res.data && Array.isArray(res.data) && res.data.length > 0) {
        setIndices(res.data);
      }
    } catch (err) {
      console.error("Failed to fetch market indices:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (val) =>
    Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="indices-ticker-bar">
      <div className="indices-container">
        <span className="market-status-pill">
          <span className="pulse-dot" /> LIVE MARKET
        </span>
        <div className="indices-grid">
          {indices.map((idx) => {
            const isPos = idx.change >= 0;
            return (
              <div key={idx.symbol} className="index-card">
                <span className="index-name">{idx.name}</span>
                <span className="index-val">₹{formatNumber(idx.value)}</span>
                <span className={`index-chg-badge ${isPos ? "positive" : "negative"}`}>
                  {isPos ? "▲ +" : "▼ "}
                  {formatNumber(Math.abs(idx.change))} ({isPos ? "+" : ""}
                  {idx.change_pct.toFixed(2)}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
