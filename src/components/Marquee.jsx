import React from 'react';
import '../styles/Marquee.css';

const Marquee = ({ items, speed = 10 }) => {
  return (
    <div className="marquee-container">
      <div 
        className="marquee-content"
        style={{ animationDuration: `${speed}s` }}
      >
        <ul className="marquee-list">
          {items.map((item, index) => (
            <li key={index} className="marquee-item">
              {item}
            </li>
          ))}
        </ul>
        <ul className="marquee-list">
          {items.map((item, index) => (
            <li key={index} className="marquee-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;