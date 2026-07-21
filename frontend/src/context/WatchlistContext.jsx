import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE;
const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

export function WatchlistProvider({ children }) {
  const { user } = useAuth();
  const [watchlists, setWatchlists] = useState([]);
  const [defaultListId, setDefaultListId] = useState(null);
  const [watchlistSymbols, setWatchlistSymbols] = useState(new Set());
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const fetchWatchlists = useCallback(async () => {
    if (!token || !user) {
      setWatchlists([]);
      setWatchlistSymbols(new Set());
      return;
    }
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/watchlists`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const lists = res.data || [];
      setWatchlists(lists);

      let targetId = null;
      const allSymbols = new Set();

      if (lists.length > 0) {
        targetId = lists[0].id;
        lists.forEach((l) => {
          (l.stocks || []).forEach((s) => {
            if (s && s.symbol) {
              allSymbols.add(s.symbol.toUpperCase());
            }
          });
        });
      }
      setDefaultListId(targetId);
      setWatchlistSymbols(allSymbols);
    } catch (err) {
      console.error("Failed to fetch watchlists:", err);
    } finally {
      setLoading(false);
    }
  }, [token, user]);

  useEffect(() => {
    fetchWatchlists();
  }, [fetchWatchlists]);

  const isBookmarked = useCallback(
    (symbol) => {
      if (!symbol) return false;
      return watchlistSymbols.has(symbol.toUpperCase());
    },
    [watchlistSymbols]
  );

  const toggleWatchlist = async (symbol, name = "") => {
    if (!token || !user || !symbol) return;
    const symUpper = symbol.toUpperCase();
    const isSaved = isBookmarked(symUpper);

    // Optimistic UI update
    setWatchlistSymbols((prev) => {
      const next = new Set(prev);
      if (isSaved) {
        next.delete(symUpper);
      } else {
        next.add(symUpper);
      }
      return next;
    });

    try {
      let listId = defaultListId;
      if (!listId) {
        // Create default watchlist if none exists
        const createRes = await axios.post(
          `${API_BASE}/watchlists`,
          { name: "My Watchlist" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        listId = createRes.data.id;
        setDefaultListId(listId);
      }

      if (isSaved) {
        // Remove stock from watchlists where it exists
        for (const l of watchlists) {
          if ((l.stocks || []).some((s) => s.symbol.toUpperCase() === symUpper)) {
            await axios.delete(`${API_BASE}/watchlists/${l.id}/stocks/${symUpper}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
          }
        }
      } else {
        // Add stock to default watchlist
        await axios.post(
          `${API_BASE}/watchlists/${listId}/stocks`,
          { symbol: symUpper, name: name || symUpper },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      fetchWatchlists();
    } catch (err) {
      console.error("Error toggling watchlist:", err);
      fetchWatchlists(); // Revert optimistic update if API call fails
    }
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlists,
        defaultListId,
        watchlistSymbols,
        isBookmarked,
        toggleWatchlist,
        refreshWatchlists: fetchWatchlists,
        loading,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
