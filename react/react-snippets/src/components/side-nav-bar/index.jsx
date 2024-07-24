import React from 'react';
import {
  FaAngleRight,
  FaAngleLeft,
  FaThLarge,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaGithub,
} from 'react-icons/fa';
import { GiCubes } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import './index.css';

const ICON_SIZE = 20;

function SideNavbar({ visible, show }) {
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
        <div>
          <NavLink className="logo" to="/">
            <GiCubes size={150} />
          </NavLink>
          <div className="links nav-top">
            <div className="bar-title">
              <span>Snippets</span>
              <hr />
            </div>

            <NavLink to="/star-rating" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Star Rating</span>
            </NavLink>
            <NavLink to="/accordion" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Accordion </span>
            </NavLink>
            <NavLink to="/random-color-generator" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Random Color Generator</span>
            </NavLink>
            <NavLink to="/image-slider" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Image Slider</span>
            </NavLink>
            <NavLink to="/scroll-progress-bar" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Scroll Progress Bar</span>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <div className="nav-link bottom">
            <FaGithub size={ICON_SIZE} />
            <a
              href="https://github.com/helenafnandes/diverse-code-snippets"
              target="_blank"
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
