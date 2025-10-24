import React, { useState, useEffect } from 'react';
import {
  FaAngleRight,
  FaAngleLeft,
  FaThLarge,
  FaBars,
  FaGithub,
  FaChevronDown,
  FaChevronRight,
} from 'react-icons/fa';
import { GiCubes } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import './index.css';

const ICON_SIZE = 20;

function SideNavbar({ visible, show }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isComponentsCollapsed, setIsComponentsCollapsed] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) show(false);
  };

  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? 'navbar' : ''}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => show(!visible)}
        >
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        
        <div className="nav-header">
          <NavLink className="logo" to="/">
            <GiCubes size={50} />
          </NavLink>
          <div className="bar-title">
            <span>React Snippets</span>
            <hr />
          </div>
        </div>

        <div 
          id="sidebar-scrollable"
          className="nav-scrollable"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--color-primary) transparent'
          }}
        >
          <div className="links snippets-container">
            <div className="nav-section">
              <h4 className="section-title">React Concepts</h4>
              <hr className="section-divider" />
            </div>
            <NavLink
              to="/use-effect"
              className="nav-link"
              onClick={handleLinkClick}
            >
              <FaThLarge size={ICON_SIZE} />
              <span>useEffect Hook</span>
            </NavLink>
            <NavLink
              to="/throttle-debounce"
              className="nav-link"
              onClick={handleLinkClick}
            >
              <FaThLarge size={ICON_SIZE} />
              <span>Throttle & Debounce</span>
            </NavLink>
            <div className="nav-section">
              <button 
                className="section-toggle"
                onClick={() => setIsComponentsCollapsed(!isComponentsCollapsed)}
              >
                <h4 className="section-title">UI Components</h4>
                {isComponentsCollapsed ? <FaChevronRight size={16} /> : <FaChevronDown size={16} />}
              </button>
              <hr className="section-divider" />
            </div>
            
            {!isComponentsCollapsed && (
              <>
                <NavLink
                  to="/star-rating"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>Star Rating</span>
                </NavLink>
                <NavLink
                  to="/accordion"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>Accordion</span>
                </NavLink>
                <NavLink
                  to="/random-color-generator"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>Random Color Generator</span>
                </NavLink>
                <NavLink
                  to="/scroll-progress-bar"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>Scroll Progress Bar</span>
                </NavLink>
                <NavLink
                  to="/text-to-speech"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>Text to Speech</span>
                </NavLink>
                <NavLink
                  to="/side-nav-bar"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>This Side NavBar</span>
                </NavLink>
                <NavLink
                  to="/theme-toggle"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>Theme Toggle</span>
                </NavLink>
                <NavLink
                  to="/scroll-gallery"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>Scroll Gallery</span>
                </NavLink>
                <NavLink
                  to="/thumbnail-gallery"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaThLarge size={ICON_SIZE} />
                  <span>Thumbnail Gallery</span>
                </NavLink>
              </>
            )}
          </div>
        </div>

        <div className="nav-footer">
          <div className="nav-link bottom">
            <FaGithub size={ICON_SIZE} />
            <a
              href="https://github.com/helenafnandes/diverse-code-snippets"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Github
            </a>
          </div>
          <h6 className="credits">Made by Helena Fernandes</h6>
        </div>
      </nav>
    </>
  );
}

export default SideNavbar;
