/* eslint-disable no-unused-vars */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <h2>Accordion</h2>
      <Accordion />
      <hr />
      <h2>Random Color Generator</h2>
      <RandomColor />
      <hr />
      <h2>Star Rating</h2>
      <StarRating noOfStars={5} />
    </div>
  );
}

export default App;
