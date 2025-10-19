import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = ({ 
  variant = 'switch', 
  showLabel = false, 
  size = 'md',
  className = '' 
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'switch') {
    return (
      <div className={`theme-toggle-switch ${className}`}>
        {showLabel && (
          <span className="theme-toggle-label">
            {isDark ? 'Dark' : 'Light'}
          </span>
        )}
        <button
          className={`theme-toggle-btn theme-toggle-btn-${size}`}
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
          {/* Slider */}
          <div className={`theme-toggle-slider ${isDark ? 'dark' : 'light'}`}>
            <div className="theme-toggle-icon">
              {isDark ? <FaMoon /> : <FaSun />}
            </div>
          </div>
        </button>
      </div>
    );
  }

  if (variant === 'buttons') {
    return (
      <div className={`theme-toggle-buttons ${className}`}>
        {showLabel && (
          <span className="theme-toggle-label">Theme:</span>
        )}
        <div className="theme-toggle-btn-group">
          <button
            className={`theme-toggle-btn ${!isDark ? 'active' : ''}`}
            onClick={() => !isDark || toggleTheme()}
            aria-label="Switch to light theme"
          >
            <FaSun />
            {showLabel && <span>Light</span>}
          </button>
          <button
            className={`theme-toggle-btn ${isDark ? 'active' : ''}`}
            onClick={() => isDark || toggleTheme()}
            aria-label="Switch to dark theme"
          >
            <FaMoon />
            {showLabel && <span>Dark</span>}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ThemeToggle;
