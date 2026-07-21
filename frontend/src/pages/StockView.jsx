import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import stockList from "../companies.js";
import WatchlistStar from "../components/WatchlistStar";
import "./StockView.css";
import TrendChart from "../components/TrendChart";

const API_BASE = import.meta.env.VITE_API_BASE;

function StockView() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [result, setResult] = useState(null);
  
  const [thesis, setThesis] = useState("");
  const [loadingThesis, setLoadingThesis] = useState(true);
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [peers, setPeers] = useState(null);
  const [loadingPeers, setLoadingPeers] = useState(true);

  const token = localStorage.getItem("token");

  const queryParams = new URLSearchParams(location.search);
  const pe = queryParams.get("pe") || 15;
  const pb = queryParams.get("pb") || 2.5;
  const roe = queryParams.get("roe") || 20;
  const roce = queryParams.get("roce") || 20;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_BASE}/recommend/${symbol}`, {
        params: { pe, pb, roe, roce },
        headers: { Authorization: `Bearer ${token}` },
      });
      const lookup = stockList.find((s) => s.symbol == symbol);
      const name = lookup?.name || res.data.symbol;
      setResult({ ...res.data, name });
    } catch (err) {
      console.error(err);
      setResult({ error: "Failed to fetch data" });
    }
  };

  const fetchThesisAndNews = async () => {
    setLoadingThesis(true);
    setLoadingNews(true);
    try {
      const thesisRes = await axios.get(`${API_BASE}/ai-thesis/${symbol}`, {
        params: { pe, pb, roe, roce },
        headers: { Authorization: `Bearer ${token}` }
      });
      setThesis(thesisRes.data.thesis);
    } catch (err) {
      console.error(err);
      setThesis("Failed to fetch investment thesis for this stock.");
    } finally {
      setLoadingThesis(false);
    }

    try {
      const newsRes = await axios.get(`${API_BASE}/news/${symbol}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNews(newsRes.data);
    } catch (err) {
      console.error(err);
      setNews([]);
    } finally {
      setLoadingNews(false);
    }
  };

  const fetchPeers = async () => {
    setLoadingPeers(true);
    try {
      const res = await axios.get(`${API_BASE}/stocks/${symbol}/peers`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPeers(res.data);
    } catch (err) {
      console.error(err);
      setPeers(null);
    } finally {
      setLoadingPeers(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchThesisAndNews();
    fetchPeers();
  }, [symbol, location.search]);

  useEffect(() => {
    document.title = symbol ? `${symbol.toUpperCase()} | Kreo` : "Kreo";
  }, [symbol]);
  


  return (
    <div className="container">
      <div className="button-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Watchlists
      </button>
      <button className="export-button" onClick={() => window.print()}>
        Export PDF Report
      </button>
      </div>
      <div className="result-container">
        {!result && (
          <p className="loading">Loading stock details...</p>
        )
} 
        {result && (
          <div className="result-box">
            {result.error ? (
              <p className="error-text">{result.error}</p>
            ) : (
              <>
                {/* 1) Header Row: title + verdict */}
                <div className="result-header">
                  <div className="stock-title-price-group">
                    <h2 className="result-name">{result.name}</h2>
                    <WatchlistStar symbol={symbol} name={result.name} size={22} />
                    {result.price != null && (
                      <div className="detail-price-badge">
                        <span className="detail-price">₹{result.price}</span>
                        <span className={`detail-change ${result.change >= 0 ? "positive" : "negative"}`}>
                          {result.change >= 0 ? "+" : ""}{result.change.toFixed(2)}%
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`recommendation-box ${result.verdict
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    Recommendation: {result.verdict}
                  </div>
                </div>
                <h3 className="fundamentals-heading">Fundamentals:</h3>
                {/* 2) Fundamentals grid */}
                <div className="result-grid">
                  <div>
                    <strong>Market Cap:</strong>{" "}
                    {result.MARKET_CAP != null ? (
                      result.MARKET_CAP_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Enterprise Value:</strong>{" "}
                    {result.ENTERPRISE_VALUE != null ? (
                      result.ENTERPRISE_VALUE_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>No. of Shares:</strong>{" "}
                    {result.NO_OF_SHARES != null ? (
                      result.NO_OF_SHARES_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Face Value:</strong>{" "}
                    {result.FACE_VALUE != null ? (
                      result.FACE_VALUE_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Cash:</strong>{" "}
                    {result.CASH != null ? (
                      result.CASH_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Debt:</strong>{" "}
                    {result.DEBT != null ? (
                      result.DEBT_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Promoter Holding:</strong>{" "}
                    {result.PROMOTER_HOLDING != null ? (
                      result.PROMOTER_HOLDING_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>PE Ratio:</strong>{" "}
                    {result["P/E"] != null ? (
                      result["P/E_raw"]
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>PB Ratio:</strong>{" "}
                    {result["P/B"] != null ? (
                      result["P/B_raw"]
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>ROE:</strong>{" "}
                    {result.ROE != null ? (
                      result.ROE_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>ROCE:</strong>{" "}
                    {result.ROCE != null ? (
                      result.ROCE_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>EPS:</strong>{" "}
                    {result.EPS_TTM != null ? (
                      result.EPS_TTM_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Dividend Yield:</strong>{" "}
                    {result["DIV._YIELD"] != null ? (
                      result["DIV._YIELD_raw"]
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Sales Growth:</strong>{" "}
                    {result.SALES_GROWTH != null ? (
                      result.SALES_GROWTH_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Profit Growth:</strong>{" "}
                    {result.PROFIT_GROWTH != null ? (
                      result.PROFIT_GROWTH_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                </div>

                {/* Peer Comparison Section */}
                <div className="peer-comparison-card">
                  {loadingPeers ? (
                    <div className="peer-loader">Loading peer comparison data...</div>
                  ) : peers && peers.sector ? (
                    <>
                      <h4 className="card-title">Peer Comparison (Sector: {peers.sector})</h4>
                      {peers.peers && peers.peers.length > 0 ? (
                        <div className="table-wrapper">
                          <table className="peer-table">
                            <thead>
                              <tr>
                                <th>Symbol</th>
                                <th>P/E</th>
                                <th>ROE%</th>
                                <th>ROCE%</th>
                                <th>Verdict</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              {peers.peers.map((peer, idx) => (
                                <tr key={idx} className={peer.symbol === symbol ? "current-stock-row" : ""}>
                                  <td>
                                    <span className="peer-symbol-link" onClick={() => navigate(`/stock/${peer.symbol}`)}>
                                      {peer.symbol}
                                    </span>
                                  </td>
                                  <td className="value-cell">{peer.pe != null ? peer.pe : <span className="na">N/A</span>}</td>
                                  <td className="value-cell">{peer.roe != null ? `${peer.roe}%` : <span className="na">N/A</span>}</td>
                                  <td className="value-cell">{peer.roce != null ? `${peer.roce}%` : <span className="na">N/A</span>}</td>
                                  <td>
                                    <span className={`recommendation-box ${peer.verdict ? peer.verdict.toLowerCase().replace(/\s/g, "-") : ""}`}>
                                      {peer.verdict || "N/A"}
                                    </span>
                                  </td>
                                  <td className="score-cell">{peer.final_score != null ? peer.final_score : <span className="na">N/A</span>}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="peer-empty">No peer companies found in this sector.</p>
                      )}
                    </>
                  ) : null}
                </div>

                <TrendChart
                  symbol={symbol}
                  currentPe={result["P/E"]}
                  currentRoe={result["ROE"]}
                  currentRoce={result["ROCE"]}
                />

                {/* AI Investment Thesis */}
                <div className="ai-thesis-card">
                  <h4 className="card-title">AI-Generated Investment Thesis</h4>
                  {loadingThesis ? (
                    <div className="thesis-loader">Generating investment summary...</div>
                  ) : (
                    <p className="thesis-text">{thesis}</p>
                  )}
                </div>

                {/* News Feed */}
                <div className="news-feed-card">
                  <h4 className="card-title">Recent Company News</h4>
                  {loadingNews ? (
                    <div className="news-loader">Fetching latest news headlines...</div>
                  ) : news.length === 0 ? (
                    <p className="news-empty">No recent news headlines found for this company.</p>
                  ) : (
                    <div className="news-list">
                      {news.map((item, idx) => (
                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="news-item-link">
                          <div className="news-item-content">
                            <span className="news-source">{item.source}</span>
                            <h5 className="news-title">{item.title}</h5>
                            <span className="news-date">{new Date(item.pubDate).toLocaleDateString()}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default StockView;
