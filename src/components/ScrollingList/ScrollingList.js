import React from 'react';
import './ScrollingList.css'; // Assuming you have a corresponding CSS or SCSS file for styling
import jsonData from '../../data.json'; // Import JSON data

const ScrollingList = () => {
  return (
    <div className="scrolling-container">
      <li className="fixed">
        <span className="text-light text-main-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gold"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          <span className="mx-1">Trending</span>
        </span>
      </li>
      <ul className="scrolling-list">
        {jsonData.map((item) => (
          <li key={item.id} className="cursor-pointer" style={{ whiteSpace: 'nowrap' }}>
            <a href={`/details/${item.id}`}>
              <span className="text-dark text-main-dark mx-1">#{item.id}</span>
              <span className="text-main">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingList;
