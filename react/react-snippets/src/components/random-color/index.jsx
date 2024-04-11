import { useState } from 'react';
import './index.css';

export default function RandomColor() {
  const [color, setColor] = useState('rgb(255, 0, 0)');

  function generateColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

    setColor(randomColor);
  }

  return (
    <div className="container">
      <button onClick={() => generateColor()}>Generate New Color</button>
      <div style={{ background: color }} className="colorSquare">
        <h3>{color}</h3>
      </div>
    </div>
  );
}
