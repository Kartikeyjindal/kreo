import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stockList from "../companies.js";
import "./SectorHeatmap.css";

const STOCK_SECTOR_MAP = {
  "RELIANCE": "Energy & Utilities",
  "TCS": "IT & Tech",
  "HDFCBANK": "Banking & Finance",
  "ICICIBANK": "Banking & Finance",
  "INFY": "IT & Tech",
  "HINDUNILVR": "FMCG & Consumer",
  "ITC": "FMCG & Consumer",
  "SBIN": "Banking & Finance",
  "BHARTIARTL": "Telecom & Services",
  "KOTAKBANK": "Banking & Finance",
  "WIPRO": "IT & Tech",
  "LT": "Industrials & Infra",
  "AXISBANK": "Banking & Finance",
  "BAJFINANCE": "Banking & Finance",
  "MARUTI": "Automobile",
  "SUNPHARMA": "Pharma & Healthcare",
  "TATAMOTORS": "Automobile",
  "NTPC": "Energy & Utilities",
  "ONGC": "Energy & Utilities",
  "POWERGRID": "Energy & Utilities",
  "ULTRACEMCO": "Industrials & Infra",
  "HCLTECH": "IT & Tech",
  "TATASTEEL": "Metals & Mining",
  "ADANIENT": "Energy & Utilities",
  "M&M": "Automobile",
  "TITAN": "FMCG & Consumer",
  "ASIANPAINT": "FMCG & Consumer",
  "NESTLEIND": "FMCG & Consumer",
  "BAJAJFINSV": "Banking & Finance",
  "JSWSTEEL": "Metals & Mining",
  "HAL": "Industrials & Infra",
  "BEL": "Industrials & Infra",
  "TRENT": "FMCG & Consumer",
  "DMART": "FMCG & Consumer",
  "ZOMATO": "IT & Tech",
  "TCIEXP": "Industrials & Infra",
  "COALINDIA": "Energy & Utilities",
  "IOC": "Energy & Utilities",
  "BPCL": "Energy & Utilities",
  "BRITANNIA": "FMCG & Consumer",
  "ADANIPORTS": "Industrials & Infra",
  "GRASIM": "Industrials & Infra",
  "EICHERMOT": "Automobile",
  "CIPLA": "Pharma & Healthcare",
  "DRREDDY": "Pharma & Healthcare",
  "HEROMOTOCO": "Automobile",
  "TVSMOTOR": "Automobile",
  "DIVISLAB": "Pharma & Healthcare",
  "PIDILITIND": "FMCG & Consumer",
  "HINDALCO": "Metals & Mining",
};

function SectorHeatmap({ stockPrices = {} }) {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  // Group stocks by sector
  const sectors = {};

  Object.keys(STOCK_SECTOR_MAP).forEach((symbol) => {
    const sectorName = STOCK_SECTOR_MAP[symbol];
    if (!sectors[sectorName]) {
      sectors[sectorName] = [];
    }
    const company = stockList.find((c) => c.symbol === symbol);
    const priceData = stockPrices[symbol] || { price: 1000, change: 0 };
    sectors[sectorName].push({
      symbol,
      name: company?.name || symbol,
      price: priceData.price,
      change: priceData.change || 0,
    });
  });

  // Calculate sector summary averages
  const sectorList = Object.keys(sectors).map((sectorName) => {
    const stocks = sectors[sectorName];
    const avgChange =
      stocks.reduce((acc, curr) => acc + curr.change, 0) / (stocks.length || 1);
    return {
      name: sectorName,
      stocks,
      avgChange,
    };
  });

  const getHeatmapColor = (change) => {
    if (change >= 2.5) return "#15803d"; // deep green
    if (change >= 1.0) return "#22c55e"; // green
    if (change > 0) return "#16a34a"; // light green
    if (change === 0) return "#475569"; // neutral slate
    if (change > -1.0) return "#dc2626"; // light red
    if (change > -2.5) return "#b91c1c"; // red
    return "#991b1b"; // deep red
  };

  const filteredSectors =
    selectedFilter === "ALL"
      ? sectorList
      : sectorList.filter((s) => s.name === selectedFilter);

  return (
    <div className="heatmap-card">
      <div className="heatmap-header">
        <div>
          <h3 className="heatmap-title">Indian Sector Heatmap</h3>
          <p className="heatmap-subtitle">Visual market performance across Indian industry sectors</p>
        </div>

        <div className="heatmap-filters">
          <button
            className={`filter-chip ${selectedFilter === "ALL" ? "active" : ""}`}
            onClick={() => setSelectedFilter("ALL")}
          >
            All Sectors
          </button>
          {sectorList.map((s) => (
            <button
              key={s.name}
              className={`filter-chip ${selectedFilter === s.name ? "active" : ""}`}
              onClick={() => setSelectedFilter(s.name)}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="heatmap-grid">
        {filteredSectors.map((sector) => (
          <div key={sector.name} className="sector-group">
            <div className="sector-group-header">
              <span className="sector-name">{sector.name}</span>
              <span
                className={`sector-avg ${
                  sector.avgChange >= 0 ? "positive" : "negative"
                }`}
              >
                {sector.avgChange >= 0 ? "+" : ""}
                {sector.avgChange.toFixed(2)}%
              </span>
            </div>

            <div className="sector-tiles-grid">
              {sector.stocks.map((stock) => {
                const color = getHeatmapColor(stock.change);
                return (
                  <div
                    key={stock.symbol}
                    className="heatmap-tile"
                    style={{ backgroundColor: color }}
                    onClick={() => navigate(`/stock/${stock.symbol}`)}
                    title={`${stock.name}: ₹${stock.price} (${stock.change >= 0 ? "+" : ""}${stock.change.toFixed(2)}%)`}
                  >
                    <span className="tile-symbol">{stock.symbol}</span>
                    <span className="tile-price">₹{stock.price}</span>
                    <span className="tile-change">
                      {stock.change >= 0 ? "+" : ""}
                      {stock.change.toFixed(2)}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectorHeatmap;
