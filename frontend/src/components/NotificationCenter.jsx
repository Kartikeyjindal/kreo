import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./NotificationCenter.css";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const token = localStorage.getItem("token");

  const unreadCount = notifications.filter(n => !n.read).length;

  const fetchNotifications = async () => {
    if (!token) return;
    try {
      const res = await axios.get(`${API_BASE}/notifications`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotifications(res.data);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    }
  };

  useEffect(() => {
    fetchNotifications();

    // Poll occasionally (every 30 seconds) to simulate live updates
    const interval = setInterval(fetchNotifications, 30000);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // If opening the dropdown, refresh the list
    if (!isOpen) {
      fetchNotifications();
    }
  };

  const markAllRead = async () => {
    if (!token || unreadCount === 0) return;
    try {
      await axios.post(`${API_BASE}/notifications/read`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    } catch (err) {
      console.error("Failed to mark notifications as read:", err);
    }
  };

  return (
    <div className="notification-center" ref={dropdownRef}>
      <button 
        className="notification-trigger" 
        onClick={handleToggle}
        title="Notifications"
        aria-label="View notifications"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="dropdown-header">
            <span>Notifications</span>
            {unreadCount > 0 && (
              <button className="btn-mark-read" onClick={markAllRead}>
                Mark all read
              </button>
            )}
          </div>
          <div className="dropdown-body">
            {notifications.length === 0 ? (
              <div className="empty-notifications">No new updates.</div>
            ) : (
              <ul className="notifications-list">
                {notifications.map((notif) => (
                  <li key={notif.id} className={`notification-item ${!notif.read ? "unread" : ""}`}>
                    <div className="notif-message">{notif.message}</div>
                    <div className="notif-time">
                      {new Date(notif.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
