// DarkModeToggle.js
import React, { useState } from 'react';
import './DarkModeToggle.css'; // Import your dark mode toggle button styles

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode'); // Apply dark mode class to body
  };

  return (
    <a className="dark-mode-toggle" onClick={toggleDarkMode}>
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
    {!isDarkMode ? 'Light Mode' : 'Dark Mode'}
  </a>
  );
};

export default DarkModeToggle;
