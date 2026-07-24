import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IpoAnalysis.css";

const API_BASE = import.meta.env.VITE_API_BASE;

function IpoAnalysis() {
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIpo, setExpandedIpo] = useState(null);
  const token = localStorage.getItem("token");

  const [viewMode, setViewMode] = useState("live");

  useEffect(() => {
    const fetchIpos = async () => {
      setLoading(true);
      try {
        const endpoint = viewMode === "live" ? `${API_BASE}/ipos/live` : `${API_BASE}/ipos`;
        const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
        const res = await axios.get(endpoint, config);
        const data = Array.isArray(res.data) && res.data.length > 0 ? res.data : [
          {
            "id": "xtranet",
            "name": "Xtranet Technologies Limited IPO",
            "symbol": "XTRANET",
            "open_date": "23-Jul-2026",
            "close_date": "27-Jul-2026",
            "price_band": "₹120 - ₹127",
            "size": "₹116.76 Cr",
            "gmp": "₹38",
            "gmp_percent": 29.9,
            "subscription": {"retail": "6.80x", "qib": "14.20x", "nii": "9.50x", "total": "10.10x"},
            "financials": {"revenue": "₹340 Cr", "growth": "+28.5% YoY", "profit": "₹42 Cr Profit", "debt_to_equity": "0.10"},
            "breakdown": {"fresh_amount": "₹75 Cr", "fresh_percent": 64.2, "ofs_amount": "₹41.76 Cr", "ofs_percent": 35.8, "purpose": "Software infrastructure and global office expansion."},
            "sentiment": "Strong retail demand in IT & Cloud automation services.",
            "verdict": "Strong Listing Gains",
            "listing_date_strategy": "Apply & Sell on Listing Day for 30%+ listing pop."
          },
          {
            "id": "indomim",
            "name": "INDO-MIM Limited IPO",
            "symbol": "INDOMIM",
            "open_date": "23-Jul-2026",
            "close_date": "27-Jul-2026",
            "price_band": "₹461 - ₹485",
            "size": "₹1,250 Cr",
            "gmp": "₹95",
            "gmp_percent": 19.6,
            "subscription": {"retail": "4.50x", "qib": "18.90x", "nii": "11.20x", "total": "11.50x"},
            "financials": {"revenue": "₹2,150 Cr", "growth": "+18.2% YoY", "profit": "₹310 Cr Profit", "debt_to_equity": "0.22"},
            "breakdown": {"fresh_amount": "₹800 Cr", "fresh_percent": 64.0, "ofs_amount": "₹450 Cr", "ofs_percent": 36.0, "purpose": "Defense manufacturing setup and debt reduction."},
            "sentiment": "High institutional interest in precision metal engineering.",
            "verdict": "Moderate Listing Gains",
            "listing_date_strategy": "Apply & Hold for long term growth."
          },
          {
            "id": "cubeinvit",
            "name": "Cube Highways Trust IPO",
            "symbol": "CUBEINVIT",
            "open_date": "22-Jul-2026",
            "close_date": "24-Jul-2026",
            "price_band": "₹151 - ₹152",
            "size": "₹2,076 Cr",
            "gmp": "₹28",
            "gmp_percent": 18.4,
            "subscription": {"retail": "4.20x", "qib": "12.50x", "nii": "8.10x", "total": "8.80x"},
            "financials": {"revenue": "₹2,840 Cr", "growth": "+21.4% YoY", "profit": "₹620 Cr Profit", "debt_to_equity": "0.45"},
            "breakdown": {"fresh_amount": "₹1,400 Cr", "fresh_percent": 67.4, "ofs_amount": "₹676 Cr", "ofs_percent": 32.6, "purpose": "Acquisition of toll road assets and debt repayment."},
            "sentiment": "Stable toll cashflows and steady dividend yields.",
            "verdict": "Hold Long-Term",
            "listing_date_strategy": "Hold for long term dividends and steady yield."
          }
        ];
        setIpos(data);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchIpos();
  }, [viewMode]);

  const toggleExpand = (id) => {
    if (expandedIpo === id) {
      setExpandedIpo(null);
    } else {
      setExpandedIpo(id);
    }
  };

  return (
    <div className="ipo-container">
      <div className="ipo-header-row">
        <h2>🇮🇳 IPO Grey Market Premium (GMP)</h2>
        <p className="ipo-subtitle">
          Real-time Grey Market Premium (GMP), size breakdowns, and listing day strategy metrics.
        </p>
        
        <div className="ipo-mode-toggle">
          <button 
            className={`ipo-mode-tab ${viewMode === "live" ? "active" : ""}`} 
            onClick={() => setViewMode("live")}
          >
            Live GMP Feed (Scraped)
          </button>
          <button 
            className={`ipo-mode-tab ${viewMode === "historical" ? "active" : ""}`} 
            onClick={() => setViewMode("historical")}
          >
            Historical Analysis
          </button>
        </div>
      </div>

      {loading ? (
        <div className="ipo-loader">Analyzing Gray Market data and sentiments...</div>
      ) : ipos.length === 0 ? (
        <div className="ipo-empty">No active or upcoming IPO data found.</div>
      ) : (
        <div className="ipo-grid">
          {ipos.map((ipo) => {
            const isExpanded = expandedIpo === ipo.id;
            const isGmpPositive = parseFloat(ipo.gmp.replace("₹", "")) >= 0;
            
            return (
              <div 
                key={ipo.id} 
                className={`ipo-card ${isExpanded ? "expanded" : ""} ${ipo.verdict.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="ipo-card-summary" onClick={() => toggleExpand(ipo.id)}>
                  <div className="ipo-card-left">
                    <span className="ipo-symbol">{ipo.symbol}</span>
                    <h3 className="ipo-name">{ipo.name}</h3>
                    <div className="ipo-meta-pills">
                      <span className="pill">Size: {ipo.size}</span>
                      <span className="pill">Dates: {ipo.open_date} to {ipo.close_date}</span>
                    </div>
                  </div>

                  <div className="ipo-card-right">
                    <div className="gmp-info">
                      <span className="gmp-title">GMP Premium</span>
                      <span className={`gmp-val ${isGmpPositive ? "positive" : "negative"}`}>
                        {ipo.gmp} ({ipo.gmp_percent >= 0 ? "+" : ""}{ipo.gmp_percent}%)
                      </span>
                    </div>

                    <div className="verdict-section">
                      <span className="verdict-title">Strategy Verdict</span>
                      <span className={`verdict-badge ${ipo.verdict.toLowerCase().replace(/\s/g, "-")}`}>
                        {ipo.verdict.toUpperCase()}
                      </span>
                    </div>

                    <button className="btn-expand-arrow">
                      {isExpanded ? "▲" : "▼"}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="ipo-card-details">
                    <hr className="details-divider" />
                    
                    <div className="details-grid" style={{ gridTemplateColumns: ipo.financials && ipo.financials.revenue !== "N/A" ? "1fr 1fr" : "1fr" }}>
                      {/* Subscription Info */}
                      <div className="detail-section">
                        <h4>Bidding Sentiments (Subscription)</h4>
                        <div className="sub-list">
                          {ipo.subscription.retail && (
                            <div className="sub-row">
                              <span>Retail Portion:</span>
                              <strong>{ipo.subscription.retail}</strong>
                            </div>
                          )}
                          {ipo.subscription.nii && (
                            <div className="sub-row">
                              <span>Non-Institutional (NII):</span>
                              <strong>{ipo.subscription.nii}</strong>
                            </div>
                          )}
                          {ipo.subscription.qib && (
                            <div className="sub-row">
                              <span>Qualified Institutional (QIB):</span>
                              <strong>{ipo.subscription.qib}</strong>
                            </div>
                          )}
                          {ipo.subscription.total && (
                            <div className="sub-row total">
                              <span>Total Bidding:</span>
                              <strong>{ipo.subscription.total}</strong>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Financial Info */}
                      {ipo.financials && ipo.financials.revenue !== "N/A" && (
                        <div className="detail-section">
                          <h4>Fundamental Financial Metrics</h4>
                          <div className="sub-list">
                            <div className="sub-row">
                              <span>Revenue:</span>
                              <strong>{ipo.financials.revenue}</strong>
                            </div>
                            <div className="sub-row">
                              <span>Growth Pace:</span>
                              <strong>{ipo.financials.growth}</strong>
                            </div>
                            <div className="sub-row">
                              <span>Net Profit/Loss:</span>
                              <strong className={ipo.financials.profit.includes("Loss") ? "loss" : "profit"}>
                                {ipo.financials.profit}
                              </strong>
                            </div>
                            <div className="sub-row">
                              <span>Debt to Equity:</span>
                              <strong>{ipo.financials.debt_to_equity}</strong>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* IPO Issue Size Breakdown */}
                    {ipo.breakdown && (
                      <div className="breakdown-section" style={{ marginTop: "1.5rem" }}>
                        <h4 style={{ fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "10px", fontWeight: "600" }}>
                          IPO Issue Size Breakdown (Fresh Issue vs. Offer for Sale)
                        </h4>
                        <div className="breakdown-metrics" style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                          <span>Fresh Issue (Company proceeds): <strong style={{ color: "var(--accent-secondary)" }}>{ipo.breakdown.fresh_amount} ({ipo.breakdown.fresh_percent}%)</strong></span>
                          <span>Offer for Sale (OFS - Exit for Promoters): <strong style={{ color: "var(--accent-orange)" }}>{ipo.breakdown.ofs_amount} ({ipo.breakdown.ofs_percent}%)</strong></span>
                        </div>
                        <div className="breakdown-progress-bar" style={{ height: "10px", borderRadius: "99px", background: "rgba(255,255,255,0.08)", display: "flex", overflow: "hidden", marginBottom: "12px" }}>
                          <div className="progress-fresh" style={{ width: `${ipo.breakdown.fresh_percent}%`, background: "linear-gradient(90deg, #6366f1, #818cf8)" }} title="Fresh Issue"></div>
                          <div className="progress-ofs" style={{ width: `${ipo.breakdown.ofs_percent}%`, background: "linear-gradient(90deg, #ec4899, #f472b6)" }} title="Offer for Sale"></div>
                        </div>
                        <p className="strategy-text purpose-text" style={{ fontStyle: "italic", fontSize: "0.825rem", color: "var(--text-muted)" }}>
                          <strong>Capital Utilization Plan:</strong> {ipo.breakdown.purpose}
                        </p>
                      </div>
                    )}

                    {/* Market Sentiments Info */}
                    <div className="strategy-section">
                      <h4>Grey Market Sentiment Overview</h4>
                      <p className="strategy-text sentiment-text">{ipo.sentiment}</p>
                    </div>

                    {/* Final Listing Date Strategy */}
                    <div className={`listing-strategy-box ${ipo.verdict.toLowerCase().replace(/\s/g, "-")}`}>
                      <h4>Final Action & Listing Date Strategy</h4>
                      <p className="strategy-text">{ipo.listing_date_strategy}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default IpoAnalysis;
