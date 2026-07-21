import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Compare.css";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function Compare() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const [compareData, setCompareData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract symbols from URL query
  const queryParams = new URLSearchParams(location.search);
  const symbols = queryParams.get("symbols")?.split(",") || [];

  useEffect(() => {
    if (symbols.length === 0) {
      setError("No stocks selected for comparison.");
      setLoading(false);
      return;
    }

    const fetchAllData = async () => {
      setLoading(true);
      try {
        const promises = symbols.map(sym =>
          axios.get(`${API_BASE}/recommend/${sym}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
        );
        const results = await Promise.all(promises);
        setCompareData(results.map(r => r.data));
      } catch (err) {
        console.error(err);
        setError("Failed to fetch comparison details for some stocks.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [location.search]);

  // Clean formatting helper
  const formatVal = (val, isPercentage = false) => {
    if (val == null) return <span className="na">N/A</span>;
    return isPercentage ? `${val}%` : val;
  };

  return (
    <div className="compare-page">
      <div className="button-container">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Watchlists
        </button>
      </div>

      <div className="compare-container">
        <h2 className="page-heading">Compare Stocks Side-by-Side</h2>
        <p className="subheading">Analyze and rank company fundamentals side-by-side</p>

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Fetching comparative fundamental reports...</p>
          </div>
        ) : error ? (
          <div className="error-box">
            <p className="error-text">{error}</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="sticky-col">Parameter</th>
                  {compareData.map((stock, idx) => (
                    <th key={idx} className="stock-col">
                      <div className="stock-header">
                        <span className="stock-sym">{stock.symbol || symbols[idx]}</span>
                        <span className="stock-fullname">{stock.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="verdict-row">
                  <td className="sticky-col font-bold">Verdict Rating</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx}>
                      <span className={`recommendation-box ${stock.verdict ? stock.verdict.toLowerCase().replace(/\s/g, "-") : ""}`}>
                        {stock.verdict || "N/A"}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">Market Cap</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx}>{stock.MARKET_CAP || <span className="na">N/A</span>}</td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">Enterprise Value</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx}>{stock.ENTERPRISE_VALUE || <span className="na">N/A</span>}</td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">P/E Ratio</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx} className={stock["P/E"] != null ? "value-cell" : ""}>
                      {formatVal(stock["P/E"])}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">P/B Ratio</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx} className={stock["P/B"] != null ? "value-cell" : ""}>
                      {formatVal(stock["P/B"])}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">ROE %</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx} className={stock["ROE"] != null ? "value-cell" : ""}>
                      {formatVal(stock["ROE"], true)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">ROCE %</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx} className={stock["ROCE"] != null ? "value-cell" : ""}>
                      {formatVal(stock["ROCE"], true)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">Face Value</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx}>{stock.FACE_VALUE || <span className="na">N/A</span>}</td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">Cash</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx}>{stock.CASH || <span className="na">N/A</span>}</td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">Debt</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx}>{stock.DEBT || <span className="na">N/A</span>}</td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">Sales Growth</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx}>{stock.SALES_GROWTH || <span className="na">N/A</span>}</td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky-col font-bold">Profit Growth</td>
                  {compareData.map((stock, idx) => (
                    <td key={idx}>{stock.PROFIT_GROWTH || <span className="na">N/A</span>}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
