import React, { useState } from 'react';
import './index.css';

function App() {
  const [text, setText] = useState('write something or click PLAY!');
  const [speed, setSpeed] = useState(1);
  const [language, setLanguage] = useState('en-US');
  const [isTextDisabled, setIsTextDisabled] = useState(false);

  const handleFocus = () => {
    if (text === 'write something or click PLAY!') {
      setText('');
    }
  };

  const handleBlur = () => {
    if (text === '') {
      setText('write something or click PLAY!');
    }
  };

  const playText = () => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.rate = speed;
    utterance.lang = language;

    preventTextChange(utterance);

    speechSynthesis.speak(utterance);
  };

  const stopText = () => {
    setIsTextDisabled(false);
    speechSynthesis.resume();
    speechSynthesis.cancel();
  };

  const preventTextChange = (utterance) => {
    setIsTextDisabled(true);
    utterance.addEventListener('end', () => {
      setIsTextDisabled(false);
    });
  };

  return (
    <div>
      <textarea
        value={text}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setText(e.target.value)}
        disabled={isTextDisabled}
        className={`text-area ${isTextDisabled ? 'disabled' : ''} ${text === 'write something or click PLAY!' ? 'default' : ''}`}
      />
      <div className="control">
        <label htmlFor="speed">Audio Speed: </label>
        <input
          type="number"
          min="0.5"
          max="3"
          step="0.5"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <button className="btn btn-play" onClick={playText}>
          PLAY
        </button>
        <button className="btn btn-stop" onClick={stopText}>
          STOP
        </button>
      </div>
      <div>
        <label htmlFor="language">Choose a language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en-US">English</option>
          <option value="pt-BR">Portuguese</option>
        </select>
      </div>
    </div>
  );
}

export default App;
