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
import UseEffect from './components/use-effect/UseEffect';
import ScrollGallery from './components/scroll-gallery/ScrollGallery';
import ThumbnailGallery from './components/thumbnail-gallery/ThumbnailGallery';
import { ThemeToggle as GlobalThemeToggle } from './components/ui';
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
        <div className="app-header">
          <GlobalThemeToggle variant="switch" showLabel={false} />
        </div>
        <NavBar visible={navVisible} show={showNavbar} />
        <Routes>
          <Route path="/" element={<Navigate to="/all" />} />
          <Route
            path="/star-rating"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Star Rating</h2>
                <div className="page-content">
                  <StarRating noOfStars={5} />
                </div>
              </div>
            }
          />
          <Route
            path="/accordion"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Accordion</h2>
                <div className="page-content">
                  <Accordion />
                </div>
              </div>
            }
          />
          <Route
            path="/random-color-generator"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Random Color Generator</h2>
                <div className="page-content">
                  <RandomColor />
                </div>
              </div>
            }
          />
          {/* <Route
            path="/image-slider"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Image Slider</h2>
                <div className="page-content">
                  <ImageSlider url={'https://picsum.photos/v2/list'} />
                </div>
              </div>
            }
          /> */}
          <Route
            path="/scroll-progress-bar"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Scroll Progress Bar</h2>
                <div className="page-content">
                  <ScrollProgressBar />
                </div>
              </div>
            }
          />
          <Route
            path="/text-to-speech"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Text to Speech</h2>
                <div className="page-content">
                  <TextToSpeech />
                </div>
              </div>
            }
          />
          <Route
            path="/theme-toggle"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Theme Toggle</h2>
                <div className="page-content">
                  <ThemeToggle />
                </div>
              </div>
            }
          />
          <Route
            path="/throttle-debounce"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Throttle and Debounce</h2>
                <div className="page-content">
                  <ThrottleDebounce />
                </div>
              </div>
            }
          />
          <Route
            path="/use-effect"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>useEffect Hook Demonstrator</h2>
                <div className="page-content">
                  <UseEffect />
                </div>
              </div>
            }
          />
          <Route
            path="/scroll-gallery"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Scroll Gallery with Lazy Loading</h2>
                <div className="page-content">
                  <ScrollGallery />
                </div>
              </div>
            }
          />
          <Route
            path="/thumbnail-gallery"
            element={
              <div className={!navVisible ? 'page' : 'page page-with-navbar'}>
                <h2>Thumbnail Gallery with Memoization</h2>
                <div className="page-content">
                  <div className="thumbnail-gallery">
                    <ThumbnailGallery images={images} />
                  </div>
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
