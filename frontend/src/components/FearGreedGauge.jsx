import React from "react";
import "./FearGreedGauge.css";

function FearGreedGauge({ stockPrices = {} }) {
  // Calculate Market Sentiment Score (0 to 100) based on stock change distribution
  const symbols = Object.keys(stockPrices);
  let totalScore = 55; // default stable market sentiment

  if (symbols.length > 0) {
    let positiveCount = 0;
    let totalChange = 0;
    let count = 0;

    symbols.forEach((sym) => {
      const item = stockPrices[sym];
      if (item && item.change != null) {
        count++;
        totalChange += item.change;
        if (item.change > 0) positiveCount++;
      }
    });

    if (count > 0) {
      const winRatio = (positiveCount / count) * 100; // 0-100
      const avgChange = totalChange / count; // e.g. -2 to +2
      const avgChangeFactor = Math.min(Math.max((avgChange + 2) / 4 * 100, 0), 100);
      totalScore = Math.round(0.6 * winRatio + 0.4 * avgChangeFactor);
      totalScore = Math.min(Math.max(totalScore, 5), 95);
    }
  }

  // Determine sentiment tier
  let label = "NEUTRAL";
  let color = "#eab308"; // yellow
  if (totalScore <= 25) {
    label = "EXTREME FEAR";
    color = "#ef4444"; // red
  } else if (totalScore <= 45) {
    label = "FEAR";
    color = "#f97316"; // orange
  } else if (totalScore <= 55) {
    label = "NEUTRAL";
    color = "#eab308"; // yellow
  } else if (totalScore <= 75) {
    label = "GREED";
    color = "#84cc16"; // light green
  } else {
    label = "EXTREME GREED";
    color = "#22c55e"; // bright green
  }

  // Calculate needle rotation angle (-90 deg to +90 deg)
  const angle = -90 + (totalScore / 100) * 180;

  return (
    <div className="fg-card">
      <div className="fg-header">
        <div>
          <h3 className="fg-title">Indian Market Fear & Greed Index</h3>
          <p className="fg-subtitle">Real-time market sentiment based on top Nifty / Sensex stocks</p>
        </div>
        <div className="fg-score-badge" style={{ backgroundColor: `${color}20`, color: color, borderColor: `${color}40` }}>
          {label}
        </div>
      </div>

      <div className="fg-gauge-wrapper">
        <svg viewBox="0 0 200 120" className="fg-svg">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="25%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="75%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          {/* Background Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="var(--fg-track-bg, rgba(255, 255, 255, 0.08))"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Colored Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Needle Center Pivot */}
          <circle cx="100" cy="100" r="7" fill="#ffffff" />

          {/* Animated Needle */}
          <g transform={`rotate(${angle}, 100, 100)`} className="fg-needle-group">
            <line x1="100" y1="100" x2="100" y2="30" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
            <polygon points="96,100 104,100 100,24" fill="#ffffff" />
          </g>
        </svg>

        <div className="fg-score-display">
          <span className="fg-score-number" style={{ color }}>{totalScore}</span>
          <span className="fg-score-max">/ 100</span>
        </div>
      </div>

      <div className="fg-ticks">
        <span className="fg-tick extreme-fear">Extreme Fear</span>
        <span className="fg-tick fear">Fear</span>
        <span className="fg-tick neutral">Neutral</span>
        <span className="fg-tick greed">Greed</span>
        <span className="fg-tick extreme-greed">Extreme Greed</span>
      </div>
    </div>
  );
}

export default FearGreedGauge;
