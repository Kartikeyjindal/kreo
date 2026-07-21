import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";
import NotificationCenter from "./NotificationCenter";
import icon from "../../icon.svg";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("watchlists");
    localStorage.removeItem("recommendationResult");
    logout();
    navigate(0);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userName = user?.name || "Admin";
  const firstName = userName.split(" ")[0];

  return (
    <nav className="navbar">
      <div className="left">
        <NavLink to="/" className="logo">
          <img src={icon} alt="Kreo Logo" />
          <h1 className="nav-title">Kreo</h1>
        </NavLink>
      </div>

      <div className="right">
        {user && <NotificationCenter />}
        <DarkModeToggle />

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)} end>
            Dashboard
          </NavLink>
          <NavLink to="/watchlists" onClick={() => setMenuOpen(false)}>
            Watchlists
          </NavLink>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink to="/screener" onClick={() => setMenuOpen(false)}>
            Screener
          </NavLink>

          <NavLink to="/alerts" onClick={() => setMenuOpen(false)}>
            Alerts
          </NavLink>
          <NavLink to="/ipos" onClick={() => setMenuOpen(false)}>
            IPOs
          </NavLink>

          {user && (
            <div className="user-dropdown-wrapper" ref={dropdownRef}>
              <button
                className="user-menu-btn"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                aria-label="User profile menu"
              >
                <div className="user-avatar-initial">{firstName.charAt(0).toUpperCase()}</div>
                <span className="user-name-text">Hi, {firstName}</span>
                <span className="dropdown-caret">▾</span>
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-menu">
                  <div className="dropdown-user-header">
                    <div className="header-avatar">{firstName.charAt(0).toUpperCase()}</div>
                    <div className="header-info">
                      <span className="header-name">{user.name}</span>
                      <span className="header-email">{user.username}</span>
                    </div>
                  </div>

                  <div className="dropdown-divider" />

                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setUserDropdownOpen(false);
                      setMenuOpen(false);
                      setShowProfileModal(true);
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Profile Details
                  </button>

                  <button
                    className="dropdown-item logout-item"
                    onClick={() => {
                      setUserDropdownOpen(false);
                      setMenuOpen(false);
                      handleLogout();
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* User Profile Modal */}
      {showProfileModal && (
        <div className="modal-overlay" onClick={() => setShowProfileModal(false)}>
          <div className="modal profile-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="profile-modal-header">
              <h3>User Profile</h3>
              <button className="btn-close-modal" onClick={() => setShowProfileModal(false)}>
                ✕
              </button>
            </div>

            <div className="profile-details-body">
              <div className="profile-avatar-banner">
                <div className="profile-big-avatar">{firstName.charAt(0).toUpperCase()}</div>
                <div className="profile-main-meta">
                  <h4>{user?.name}</h4>
                  <span className="profile-role-badge">Administrator</span>
                </div>
              </div>

              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span className="info-label">Full Name</span>
                  <span className="info-val">{user?.name}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Email / Username</span>
                  <span className="info-val">{user?.username}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Account Status</span>
                  <span className="info-val active-status"><span className="status-dot"></span> Active</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Environment</span>
                  <span className="info-val">Local Dev Server</span>
                </div>
              </div>
            </div>

            <div className="profile-modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowProfileModal(false)}>
                Close
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setShowProfileModal(false);
                  handleLogout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
