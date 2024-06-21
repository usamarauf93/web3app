import React from 'react';
import './Header.css'; 
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle.js';

function Header() {
  return (
    <header>
    <div className="first-header-part">
      <div className="logo">
        <a href="/">
          <img src="../logo.png" alt="Logo" />
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
          <DarkModeToggle />
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
