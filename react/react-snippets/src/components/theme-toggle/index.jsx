import React, { useState } from 'react';
import './index.css';
import sunIcon from './images/sun.png';
import moonIcon from './images/moon.png';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLightMode = () => {
    setIsDarkMode(false);
  };

  const handleDarkMode = () => {
    setIsDarkMode(true);
  };

  return (
    <div className="theme-toggle-container">
      <div className={`theme-toggle-card ${isDarkMode ? 'dark' : ''}`}>
        <img
          className="theme-toggle-img"
          src={isDarkMode ? moonIcon : sunIcon}
          alt={isDarkMode ? 'moon icon' : 'sun icon'}
        />
        <div className="theme-toggle-content">
          <h1 className="theme-toggle-title">Choose a Style</h1>
          <div className="theme-toggle-buttons">
            <button
              className={`theme-toggle-btn ${!isDarkMode ? 'theme-toggle-btn-selected' : ''}`}
              onClick={handleLightMode}
            >
              LIGHT
            </button>
            <button
              className={`theme-toggle-btn ${isDarkMode ? 'theme-toggle-btn-selected' : ''}`}
              onClick={handleDarkMode}
            >
              DARK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
