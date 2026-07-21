import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import "./WatchlistStar.css";

export default function WatchlistStar({ symbol, name, size = 18, className = "" }) {
  const { isBookmarked, toggleWatchlist } = useWatchlist();
  const bookmarked = isBookmarked(symbol);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleWatchlist(symbol, name);
  };

  return (
    <button
      type="button"
      className={`watchlist-star-btn ${bookmarked ? "active" : ""} ${className}`}
      onClick={handleClick}
      title={bookmarked ? "Remove from Watchlist" : "Add to Watchlist"}
      aria-label={bookmarked ? "Remove from Watchlist" : "Add to Watchlist"}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={bookmarked ? "#f59e0b" : "none"}
        stroke={bookmarked ? "#f59e0b" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  );
}
