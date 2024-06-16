import React from 'react';
import './Header.css'; // Optional: if you want to add styles

function Header() {
  return (
    <header>
    <div className="first-header-part">
      <div className="logo">
        <a href="/">
          <img src="logo.png" alt="Logo" />
        </a>
      </div>
      <div className="search-bar">
        <input
          type="search"
          className="search-input"
          placeholder="Type token symbol, address to find your launchpad"
          aria-label="Search launchpad"
        />
      </div>
    </div>
    <div className="nav">
      <ul>
        <li><a href="https://telegram.com/">Telegram</a></li>
        <li><a href="https://telegram.com/">Support</a></li>
        <li className="mode-switcher">
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F95192"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun-dim sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 4h.01" />
              <path d="M20 12h.01" />
              <path d="M12 20h.01" />
              <path d="M4 12h.01" />
              <path d="M17.657 6.343h.01" />
              <path d="M17.657 17.657h.01" />
              <path d="M6.343 17.657h.01" />
              <path d="M6.343 6.343h.01" />
            </svg>
            Light Mode
          </a>
        </li>
        <li className="header-btn">
          <button className="btn btn-main">Connect Wallet</button>
        </li>
      </ul>
    </div>
  </header>
  );
}

export default Header;
