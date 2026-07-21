import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WatchlistStar from "../components/WatchlistStar";
import "./Screener.css";

const API_BASE = import.meta.env.VITE_API_BASE;

const SECTORS_LIST = [
  "All", "IT", "BANKING", "AUTO", "PHARMA", "FMCG", "OIL_GAS",
  "METALS", "POWER", "TELECOM", "CONSTRUCTION", "RETAIL",
  "REALTY", "MEDIA", "DIVERSIFIED", "OTHER"
];

const MARKET_CAP_OPTIONS = [
  { label: "Any", value: 0 },
  { label: "₹100Cr", value: 100 },
  { label: "₹500Cr", value: 500 },
  { label: "₹1000Cr", value: 1000 },
  { label: "₹5000Cr", value: 5000 },
  { label: "₹10000Cr", value: 10000 },
  { label: "₹50000Cr", value: 50000 },
];

const formatMarketCap = (val) => {
  if (val == null) return "—";
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)}Cr`;
  if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
  return `₹${val.toLocaleString()}`;
};

function Screener() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [stocks, setStocks] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sectors, setSectors] = useState([]);

  const [filters, setFilters] = useState({
    min_pe: 0,
    max_pe: 999,
    min_roe: 0,
    min_market_cap: 0,
    sector: "All",
  });

  useEffect(() => {
    document.title = "Stock Screener | Kreo";
  }, []);

  const applyPreset = (preset) => {
    let updated = { min_pe: 0, max_pe: 999, min_roe: 0, min_market_cap: 0, sector: "All" };
    if (preset === "undervalued") {
      updated = { min_pe: 0, max_pe: 22, min_roe: 15, min_market_cap: 1000, sector: "All" };
    } else if (preset === "growth") {
      updated = { min_pe: 0, max_pe: 45, min_roe: 20, min_market_cap: 5000, sector: "All" };
    } else if (preset === "largecap") {
      updated = { min_pe: 0, max_pe: 30, min_roe: 12, min_market_cap: 50000, sector: "All" };
    }
    setFilters(updated);
    setPage(1);
    fetchResultsWithFilters(updated, 1);
  };

  const fetchResultsWithFilters = async (f, p = 1) => {
    setLoading(true);
    try {
      const params = {
        min_pe: f.min_pe,
        max_pe: f.max_pe,
        min_roe: f.min_roe,
        min_market_cap: f.min_market_cap,
        sector: f.sector === "All" ? "" : f.sector,
        page: p,
        limit: 20,
      };
      const res = await axios.get(`${API_BASE}/screener`, {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
      setStocks(res.data.stocks);
      setTotal(res.data.total);
      setPage(res.data.page);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.error(err);
      setStocks([]);
      setTotal(0);
      setPage(1);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const res = await axios.get(`${API_BASE}/stocks/sectors`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const available = Object.keys(res.data);
        setSectors(["All", ...available.filter((s) => s !== "All")]);
      } catch {
        setSectors(SECTORS_LIST);
      }
    };
    fetchSectors();
  }, []);

  const fetchResults = async (p = 1) => {
    setLoading(true);
    try {
      const params = {
        min_pe: filters.min_pe,
        max_pe: filters.max_pe,
        min_roe: filters.min_roe,
        min_market_cap: filters.min_market_cap,
        sector: filters.sector === "All" ? "" : filters.sector,
        page: p,
        limit: 20,
      };
      const res = await axios.get(`${API_BASE}/screener`, {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
      setStocks(res.data.stocks);
      setTotal(res.data.total);
      setPage(res.data.page);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.error(err);
      setStocks([]);
      setTotal(0);
      setPage(1);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults(1);
  }, []);

  const handleApply = () => {
    setPage(1);
    fetchResults(1);
  };

  const handlePrev = () => {
    if (page > 1) fetchResults(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) fetchResults(page + 1);
  };

  const getVerdictClass = (verdict) => {
    if (!verdict) return "";
    return verdict.toLowerCase().replace(/\s+/g, "-");
  };

  const formatScore = (score) => {
    if (score == null) return "—";
    return score.toFixed(1);
  };

  return (
    <div className="screener">
      <div className="screener-header">
        <h2>Stock Screener</h2>
        <p className="screener-subtitle">Filter Indian stocks by fundamental metrics & valuation</p>

        <div className="screener-presets">
          <span className="presets-title">Quick Screener Presets:</span>
          <div className="preset-pills">
            <button className="screener-preset-pill" onClick={() => applyPreset('undervalued')}>
              Undervalued Bargains (P/E &lt; 22, ROE &gt; 15%)
            </button>
            <button className="screener-preset-pill" onClick={() => applyPreset('growth')}>
              High-Growth Stars (ROE &gt; 20%)
            </button>
            <button className="screener-preset-pill" onClick={() => applyPreset('largecap')}>
              Safe Havens (Large Cap &gt; ₹50,000 Cr)
            </button>
            <button className="screener-preset-pill reset" onClick={() => applyPreset('all')}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <div className="screener-filters">
        <div className="filter-group">
          <label>Sector</label>
          <select
            value={filters.sector}
            onChange={(e) => setFilters((f) => ({ ...f, sector: e.target.value }))}
          >
            {(sectors.length > 0 ? sectors : SECTORS_LIST).map((s) => (
              <option key={s} value={s}>{s.replace(/_/g, " ")}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>P/E Range</label>
          <div className="filter-range">
            <input
              type="number"
              min="0"
              value={filters.min_pe}
              onChange={(e) => setFilters((f) => ({ ...f, min_pe: +e.target.value }))}
              placeholder="Min"
            />
            <span className="range-sep">to</span>
            <input
              type="number"
              min="0"
              value={filters.max_pe}
              onChange={(e) => setFilters((f) => ({ ...f, max_pe: +e.target.value }))}
              placeholder="Max"
            />
          </div>
        </div>

        <div className="filter-group">
          <label>Min ROE</label>
          <div className="filter-input-suffix">
            <input
              type="number"
              min="0"
              max="100"
              value={filters.min_roe}
              onChange={(e) => setFilters((f) => ({ ...f, min_roe: +e.target.value }))}
              placeholder="0"
            />
            <span className="suffix">%</span>
          </div>
        </div>

        <div className="filter-group">
          <label>Min Market Cap</label>
          <select
            value={filters.min_market_cap}
            onChange={(e) => setFilters((f) => ({ ...f, min_market_cap: +e.target.value }))}
          >
            {MARKET_CAP_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="filter-actions">
          <button className="btn btn-primary" onClick={handleApply}>
            Apply Filters
          </button>
        </div>
      </div>

      <div className="screener-results">
        <div className="results-header">
          {!loading && (
            <span className="results-count">Showing {stocks.length} of {total} stocks</span>
          )}
        </div>

        {loading ? (
          <div className="screener-loader">
            <div className="spinner" />
            <span>Filtering stocks...</span>
          </div>
        ) : stocks.length === 0 ? (
          <div className="screener-empty">
            <h3>No stocks found</h3>
            <p>Try adjusting your filter criteria to see more results.</p>
          </div>
        ) : (
          <>
            <div className="screener-table-wrapper">
              <table className="screener-table">
                <thead>
                  <tr>
                    <th style={{ width: "36px" }}></th>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Sector</th>
                    <th>P/E</th>
                    <th>ROE</th>
                    <th>Mkt Cap</th>
                    <th>Verdict</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.map((s) => (
                    <tr
                      key={s.symbol}
                      onClick={() => navigate(`/stock/${s.symbol}`)}
                    >
                      <td className="cell-star">
                        <WatchlistStar symbol={s.symbol} name={s.name} size={16} />
                      </td>
                      <td className="cell-symbol">{s.symbol}</td>
                      <td className="cell-name">{s.name}</td>
                      <td>{s.sector?.replace(/_/g, " ")}</td>
                      <td className="cell-num">{s.pe != null ? s.pe.toFixed(1) : "—"}</td>
                      <td className="cell-num">{s.roe != null ? `${s.roe.toFixed(1)}%` : "—"}</td>
                      <td className="cell-num">{formatMarketCap(s.market_cap)}</td>
                      <td>
                        {s.verdict ? (
                          <span className={`verdict-badge ${getVerdictClass(s.verdict)}`}>
                            {s.verdict}
                          </span>
                        ) : "—"}
                      </td>
                      <td className="cell-num">{formatScore(s.final_score)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="screener-pagination">
              <button
                className="btn btn-secondary"
                disabled={page <= 1}
                onClick={handlePrev}
              >
                Previous
              </button>
              <span className="page-info">Page {page} of {totalPages}</span>
              <button
                className="btn btn-secondary"
                disabled={page >= totalPages}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Screener;
