import React, { useState } from 'react';
import './Header.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle.js';
import WalletConnection from '../WalletConnection.js';

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
setMenuOpen(!menuOpen);
};

return (
<header>
<div className="d-flex justify-content-between align-items-center w-100">
      <div className="col-xs-2 col-sm-2 d-flex justify-content-start ps-5">
        <button onClick={toggleMenu} className="hamburger-icon">☰</button>
      </div>
      <div className="col-xs-10 col-sm-10 d-flex justify-sm-center justify-lg-start">
        <div className="logo">
          <a href="/">
            <img src="../logo.png" alt="Logo" />
          </a>
        </div>
      </div>
      <div className="col-xs-2 col-sm-2 d-flex justify-content-end header-side" ></div>
    </div>
    <div className='search-bar row'>
        <div className="col-12 search-bar">
            <input type="search" className="search-input"
                placeholder="Type token symbol, address to find your launchpad" aria-label="Search launchpad" />
        </div>
    </div>
    <div className={`nav ${menuOpen ? 'open' : '' }`}>
        <ul>
            <li><a href="https://telegram.com/">Telegram</a></li>
            <li><a href="https://telegram.com/">Support</a></li>
            <li className="mode-switcher">
                <DarkModeToggle />
            </li>
            <li className="header-btn">
                <WalletConnection></WalletConnection>
                {/* <button className="btn btn-main">Connect Wallet</button> */}
            </li>
        </ul>
    </div>
</header>
);
}

export default Header;
