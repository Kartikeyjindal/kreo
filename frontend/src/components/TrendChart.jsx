import React, { useState } from "react";
import "./TrendChart.css";

export default function TrendChart({ symbol, currentPe, currentRoe, currentRoce }) {
  const [activeTab, setActiveTab] = useState("PE");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Generate deterministic mock historical data based on the current metric value
  const generateTrendData = (currentVal, isPercentage) => {
    if (currentVal == null) return [];
    
    // Create subtle fluctuations over the past 5 years
    const factors = [0.85, 0.95, 1.10, 0.90, 1.0];
    const years = [2022, 2023, 2024, 2025, 2026];
    
    return years.map((year, idx) => {
      const val = parseFloat((currentVal * factors[idx]).toFixed(2));
      return {
        year,
        value: val,
        label: isPercentage ? `${val}%` : val.toString()
      };
    });
  };

  const peData = generateTrendData(currentPe, false);
  const roeData = generateTrendData(currentRoe, true);
  const roceData = generateTrendData(currentRoce, true);

  const activeData = activeTab === "PE" ? peData : activeTab === "ROE" ? roeData : roceData;
  const isAvailable = activeData.length > 0;

  // Chart layout dimensions
  const width = 600;
  const height = 240;
  const paddingX = 50;
  const paddingY = 40;

  // Calculate min and max for scaling
  const values = activeData.map(d => d.value);
  const minVal = Math.min(...values) * 0.9;
  const maxVal = Math.max(...values) * 1.1 || 1;
  const valRange = maxVal - minVal;

  // Map data to SVG coordinates
  const points = activeData.map((d, index) => {
    const x = paddingX + (index * (width - 2 * paddingX)) / (activeData.length - 1);
    const y = height - paddingY - ((d.value - minVal) * (height - 2 * paddingY)) / valRange;
    return { x, y, ...d };
  });

  // SVG Path generation
  let linePath = "";
  let areaPath = "";

  if (points.length > 0) {
    linePath = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ");
    areaPath = `${linePath} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;
  }

  return (
    <div className="trend-chart-card">
      <div className="chart-header">
        <h4 className="chart-title">Historical Trends ({symbol})</h4>
        <div className="chart-tabs">
          <button 
            className={`chart-tab ${activeTab === "PE" ? "active" : ""}`}
            onClick={() => { setActiveTab("PE"); setHoveredIndex(null); }}
          >
            PE Ratio
          </button>
          <button 
            className={`chart-tab ${activeTab === "ROE" ? "active" : ""}`}
            onClick={() => { setActiveTab("ROE"); setHoveredIndex(null); }}
          >
            ROE %
          </button>
          <button 
            className={`chart-tab ${activeTab === "ROCE" ? "active" : ""}`}
            onClick={() => { setActiveTab("ROCE"); setHoveredIndex(null); }}
          >
            ROCE %
          </button>
        </div>
      </div>

      {!isAvailable ? (
        <div className="chart-empty">No trend data available for this stock.</div>
      ) : (
        <div className="chart-body">
          <div className="chart-svg-container">
            <svg viewBox={`0 0 ${width} ${height}`} className="trend-svg">
              <defs>
                <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
                const y = paddingY + pct * (height - 2 * paddingY);
                return (
                  <line 
                    key={idx}
                    x1={paddingX}
                    y1={y}
                    x2={width - paddingX}
                    y2={y}
                    className="grid-line"
                  />
                );
              })}

              {/* Area path */}
              <path d={areaPath} fill="url(#chart-area-grad)" />

              {/* Line path */}
              <path d={linePath} fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

              {/* Vertical tracking line on hover */}
              {hoveredIndex !== null && points[hoveredIndex] && (
                <line
                  x1={points[hoveredIndex].x}
                  y1={paddingY}
                  x2={points[hoveredIndex].x}
                  y2={height - paddingY}
                  className="hover-tracker-line"
                />
              )}

              {/* Data points */}
              {points.map((p, idx) => (
                <g key={idx}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={hoveredIndex === idx ? 7 : 5}
                    className={`chart-point-circle ${hoveredIndex === idx ? "hovered" : ""}`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                  />
                  {/* Invisible rect for larger hover target area */}
                  <rect
                    x={p.x - 20}
                    y={paddingY}
                    width={40}
                    height={height - 2 * paddingY}
                    fill="transparent"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                  />
                </g>
              ))}

              {/* X Axis Labels (Years) */}
              {points.map((p, idx) => (
                <text
                  key={idx}
                  x={p.x}
                  y={height - 15}
                  textAnchor="middle"
                  className="axis-label-x"
                >
                  {p.year}
                </text>
              ))}

              {/* Y Axis Labels (Min / Max) */}
              <text x={paddingX - 10} y={paddingY + 4} textAnchor="end" className="axis-label-y">
                {activeTab === "PE" ? maxVal.toFixed(1) : `${maxVal.toFixed(1)}%`}
              </text>
              <text x={paddingX - 10} y={height - paddingY + 4} textAnchor="end" className="axis-label-y">
                {activeTab === "PE" ? minVal.toFixed(1) : `${minVal.toFixed(1)}%`}
              </text>
            </svg>

            {/* Custom Tooltip Overlay */}
            {hoveredIndex !== null && points[hoveredIndex] && (
              <div 
                className="chart-tooltip"
                style={{
                  left: `${(points[hoveredIndex].x / width) * 100}%`,
                  bottom: `${((height - points[hoveredIndex].y) / height) * 100 + 4}%`,
                  transform: "translateX(-50%)"
                }}
              >
                <div className="tooltip-year">{points[hoveredIndex].year}</div>
                <div className="tooltip-value">
                  {activeTab === "PE" ? "P/E: " : activeTab === "ROE" ? "ROE: " : "ROCE: "}
                  <strong>{points[hoveredIndex].label}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
