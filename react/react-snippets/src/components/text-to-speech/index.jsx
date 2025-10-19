import React, { useState } from 'react';
import { Button, TextArea, Input } from '../ui';
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
    utterance.voice = speechSynthesis.getVoices().find(voice => 
      voice.lang === language
    ) || speechSynthesis.getVoices()[0];

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
    <div className="text-to-speech-container">
      <TextArea
        value={text}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setText(e.target.value)}
        disabled={isTextDisabled}
        placeholder="write something or click PLAY!"
        rows={6}
        className={`text-to-speech-textarea ${text === 'write something or click PLAY!' ? 'default' : ''}`}
      />
      <div className="controls-row">
        <div className="controls-top">
          <div className="speed-control">
            <label htmlFor="speed">Audio Speed:</label>
            <input
              type="number"
              min="0.5"
              max="3"
              step="0.5"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="speed-input"
            />
          </div>
          <div className="language-control">
            <label htmlFor="language">Language:</label>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="en-US">English</option>
              <option value="pt-BR">Portuguese</option>
            </select>
          </div>
        </div>
        <div className="button-group">
          <Button 
            variant="primary" 
            onClick={playText}
            disabled={isTextDisabled}
          >
            PLAY
          </Button>
          <Button 
            variant="secondary" 
            onClick={stopText}
          >
            STOP
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
