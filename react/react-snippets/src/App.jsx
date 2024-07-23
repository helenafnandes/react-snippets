/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import NavBar from './components/side-nav-bar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [navVisible, showNavbar] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar visible={navVisible} show={showNavbar} />
        <Routes>
          <Route path="/" element={<Navigate to="/all" />} />
          <Route
            path="/star-rating"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Star Rating</h2>
                <StarRating noOfStars={5} />
              </div>
            }
          />
          <Route
            path="/accordion"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Accordion</h2>
                <Accordion />
              </div>
            }
          />
          <Route
            path="/random-color-generator"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Random Color Generator</h2>
                <RandomColor />
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h1>Settings</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
