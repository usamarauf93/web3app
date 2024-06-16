import React from 'react';
import './Header.css'; // Optional: if you want to add styles

function Header() {
  return (
    <header className="App-header">
      <h1>My React App</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
