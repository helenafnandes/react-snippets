/* eslint-disable no-unused-vars */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/random-color/RandomColor';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <h2>Accordion</h2>
      <Accordion />
      <hr />
      <h2>Random Color Generator</h2>
      <RandomColor />
    </div>
  );
}

export default App;
