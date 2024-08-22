/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import NavBar from './components/side-nav-bar';
import ScrollProgressBar from './components/scroll-progress-bar';
import TextToSpeech from './components/text-to-speech';
import ThemeToggle from './components/theme-toggle';
import ThrottleDebounce from './components/throttle-debounce/ThrottleDebounce';
import ScrollGallery from './components/scroll-gallery/ScrollGallery';
import ThumbnailGallery from './components/thumbnail-gallery/ThumbnailGallery';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [navVisible, showNavbar] = useState(true);

  const images = [
    { src: 'https://picsum.photos/id/237/800/600', alt: 'Image 1' },
    { src: 'https://picsum.photos/id/238/800/600', alt: 'Image 2' },
    { src: 'https://picsum.photos/id/239/800/600', alt: 'Image 3' },
    { src: 'https://picsum.photos/id/240/800/600', alt: 'Image 4' },
    { src: 'https://picsum.photos/id/241/800/600', alt: 'Image 5' },
  ];

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
            path="/image-slider"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Image Slider</h2>
                <ImageSlider url={'https://picsum.photos/v2/list'} />
              </div>
            }
          />
          <Route
            path="/scroll-progress-bar"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <ScrollProgressBar />
              </div>
            }
          />
          <Route
            path="/text-to-speech"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <TextToSpeech />
              </div>
            }
          />
          <Route
            path="/theme-toggle"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <ThemeToggle />
              </div>
            }
          />
          <Route
            path="/throttle-debounce"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <ThrottleDebounce />
              </div>
            }
          />
          <Route
            path="/scroll-gallery"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2 id="id-sg">Scroll Gallery with Lazy Loading</h2>
                <ScrollGallery />
              </div>
            }
          />
          <Route
            path="/thumbnail-gallery"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Thumbnail Gallery with Memoization</h2>
                <div className="thumbnail-gallery">
                  <ThumbnailGallery images={images} />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
