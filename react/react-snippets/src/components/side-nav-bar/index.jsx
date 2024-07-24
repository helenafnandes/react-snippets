import React from 'react';
import {
  FaAngleRight,
  FaAngleLeft,
  FaThLarge,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';
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
            <div className="title">
              <h1>React Snippets</h1>
            </div>
          </NavLink>
          <div className="links nav-top">
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
              <span>aaa</span>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/settings" className="nav-link">
            <FaCog size={ICON_SIZE} />
            <span>View on Github</span>
          </NavLink>
          <NavLink to="/Sign-out" className="nav-link">
            <FaSignOutAlt size={ICON_SIZE} />
            <h6>Made by Helena Fernandes</h6>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default SideNavbar;
