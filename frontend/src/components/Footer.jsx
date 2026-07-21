import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="brand-name">Kreo</span>
          <span className="brand-dot">•</span>
          <span className="copyright-text">
            © {currentYear} All rights reserved.
          </span>
        </div>
        <div className="footer-credit">
          Made by <strong className="author-name">Kartikey Jindal</strong>
        </div>
      </div>
    </footer>
  );
}
