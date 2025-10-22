import React, { useState, useCallback } from 'react';
import { throttle, debounce } from 'lodash';
import './ThrottleDebounce.css';

const ThrottleDebounce = () => {
  const [mode, setMode] = useState('typing');
  const [inputValue, setInputValue] = useState('');
  const [throttledValue, setThrottledValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [mouseMoveCount, setMouseMoveCount] = useState(0);
  const [throttledMouseCount, setThrottledMouseCount] = useState(0);
  const [debouncedMouseCount, setDebouncedMouseCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  
  // States to control collapsible sections (starting with all open)
  const [showDefaultCode, setShowDefaultCode] = useState(true);
  const [showThrottleCode, setShowThrottleCode] = useState(true);
  const [showDebounceCode, setShowDebounceCode] = useState(true);

  const handleDelayChange = (event) => {
    setDelay(parseInt(event.target.value));
    resetCounts();
  };

  const resetCounts = () => {
    setInputValue('');
    setThrottledValue('');
    setDebouncedValue('');
    setMouseMoveCount(0);
    setThrottledMouseCount(0);
    setDebouncedMouseCount(0);
  };

  // Functions to generate dynamic code snippets
  const getDefaultCode = () => {
    if (mode === 'typing') {
      return `const handleInputChange = (event) => {
  const value = event.target.value;
  setInputValue(value);
};`;
    } else {
      return `const handleMouseMove = () => {
  setMouseMoveCount(prev => prev + 1);
};`;
    }
  };

  const getThrottleCode = () => {
    if (mode === 'typing') {
      return `const handleThrottleTyping = useCallback(
  throttle((value) => {
    setThrottledValue(value);
  }, ${delay}),
  [${delay}]
);

const handleInputChange = (event) => {
  const value = event.target.value;
  setInputValue(value);
  handleThrottleTyping(value);
};`;
    } else {
      return `const handleThrottleMouseMove = useCallback(
  throttle(() => {
    setThrottledMouseCount(prev => prev + 1);
  }, ${delay}),
  [${delay}]
);

const handleMouseMove = () => {
  setMouseMoveCount(prev => prev + 1);
  handleThrottleMouseMove();
};`;
    }
  };

  const getDebounceCode = () => {
    if (mode === 'typing') {
      return `const handleDebounceTyping = useCallback(
  debounce((value) => {
    setDebouncedValue(value);
  }, ${delay}),
  [${delay}]
);

const handleInputChange = (event) => {
  const value = event.target.value;
  setInputValue(value);
  handleDebounceTyping(value);
};`;
    } else {
      return `const handleDebounceMouseMove = useCallback(
  debounce(() => {
    setDebouncedMouseCount(prev => prev + 1);
  }, ${delay}),
  [${delay}]
);

const handleMouseMove = () => {
  setMouseMoveCount(prev => prev + 1);
  handleDebounceMouseMove();
};`;
    }
  };

  // Explanations for each mode
  const explanations = {
    default: "Executes immediately on every event. No optimization, and can cause performance issues with many events.",
    throttle: `Limits execution to at most once every ${delay}ms. Useful for continuous events like scroll, mouse move, or resize.`,
    debounce: `Waits ${delay}ms of inactivity before executing. Useful for real-time search, input validation, or submit buttons.`
  };

  // Throttle and debounce for typing
  const handleThrottleTyping = useCallback(
    throttle((value) => {
      setThrottledValue(value);
    }, delay),
    [delay],
  );

  const handleDebounceTyping = useCallback(
    debounce((value) => {
      setDebouncedValue(value);
    }, delay),
    [delay],
  );

  // Throttle and debounce for mouse movement
  const handleThrottleMouseMove = useCallback(
    throttle(() => {
      setThrottledMouseCount((prevCount) => prevCount + 1);
    }, delay),
    [delay],
  );

  const handleDebounceMouseMove = useCallback(
    debounce(() => {
      setDebouncedMouseCount((prevCount) => prevCount + 1);
    }, delay),
    [delay],
  );

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    handleThrottleTyping(value);
    handleDebounceTyping(value);
    
    // Scroll to the end of text in display fields
    setTimeout(() => {
      const textBoxes = document.querySelectorAll('.text-box');
      textBoxes.forEach(box => {
        box.scrollLeft = box.scrollWidth;
      });
    }, 0);
  };

  const handleMouseMove = () => {
    setMouseMoveCount((prevCount) => prevCount + 1);
    handleThrottleMouseMove();
    handleDebounceMouseMove();
  };

  const startTypingComparison = () => {
    setMode('typing');
    setDelay(1000);
    resetCounts();
  };

  const startMouseMoveComparison = () => {
    setMode('mouse');
    setDelay(100);
    resetCounts();
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="button-container">
        <button onClick={startTypingComparison}>Typing Comparison</button>
        <button onClick={startMouseMoveComparison}>
          Mouse Movement Comparison
        </button>
      </div>

      <div>
        <label htmlFor="delay">Select delay:</label>
        <select id="delay" value={delay} onChange={handleDelayChange}>
          <option value={1000}>1000ms</option>
          <option value={500}>500ms</option>
          <option value={250}>250ms</option>
          <option value={100}>100ms</option>
        </select>
      </div>

      {mode === 'typing' ? (
        <div className="typing-comparison">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="typing-input"
          />
          <div className="comparison-grid">
            <div className="comparison-item">
              <h3 className="comparison-title">Default</h3>
              <div className="text-box">{inputValue}</div>
              
              <button 
                className="toggle-code-btn"
                onClick={() => setShowDefaultCode(!showDefaultCode)}
              >
                {showDefaultCode ? '▼ Hide Code' : '▶ Show Code'}
              </button>
              
              {showDefaultCode && (
                <div className="code-section">
                  <pre><code>{getDefaultCode()}</code></pre>
                  <p className="explanation">{explanations.default}</p>
                </div>
              )}
            </div>
            
            <div className="comparison-item">
              <h3 className="comparison-title">Throttle</h3>
              <div className="text-box">{throttledValue}</div>
              
              <button 
                className="toggle-code-btn"
                onClick={() => setShowThrottleCode(!showThrottleCode)}
              >
                {showThrottleCode ? '▼ Hide Code' : '▶ Show Code'}
              </button>
              
              {showThrottleCode && (
                <div className="code-section">
                  <pre><code>{getThrottleCode()}</code></pre>
                  <p className="explanation">{explanations.throttle}</p>
                </div>
              )}
            </div>
            
            <div className="comparison-item">
              <h3 className="comparison-title">Debounce</h3>
              <div className="text-box">{debouncedValue}</div>
              
              <button 
                className="toggle-code-btn"
                onClick={() => setShowDebounceCode(!showDebounceCode)}
              >
                {showDebounceCode ? '▼ Hide Code' : '▶ Show Code'}
              </button>
              
              {showDebounceCode && (
                <div className="code-section">
                  <pre><code>{getDebounceCode()}</code></pre>
                  <p className="explanation">{explanations.debounce}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mouse-comparison">
          <div className="comparison-grid">
            <div className="comparison-item">
              <h3 className="comparison-title">Default</h3>
              <div className="counter-box">{mouseMoveCount}</div>
              
              <button 
                className="toggle-code-btn"
                onClick={() => setShowDefaultCode(!showDefaultCode)}
              >
                {showDefaultCode ? '▼ Hide Code' : '▶ Show Code'}
              </button>
              
              {showDefaultCode && (
                <div className="code-section">
                  <pre><code>{getDefaultCode()}</code></pre>
                  <p className="explanation">{explanations.default}</p>
                </div>
              )}
            </div>
            
            <div className="comparison-item">
              <h3 className="comparison-title">Throttle</h3>
              <div className="counter-box">{throttledMouseCount}</div>
              
              <button 
                className="toggle-code-btn"
                onClick={() => setShowThrottleCode(!showThrottleCode)}
              >
                {showThrottleCode ? '▼ Hide Code' : '▶ Show Code'}
              </button>
              
              {showThrottleCode && (
                <div className="code-section">
                  <pre><code>{getThrottleCode()}</code></pre>
                  <p className="explanation">{explanations.throttle}</p>
                </div>
              )}
            </div>
            
            <div className="comparison-item">
              <h3 className="comparison-title">Debounce</h3>
              <div className="counter-box">{debouncedMouseCount}</div>
              
              <button 
                className="toggle-code-btn"
                onClick={() => setShowDebounceCode(!showDebounceCode)}
              >
                {showDebounceCode ? '▼ Hide Code' : '▶ Show Code'}
              </button>
              
              {showDebounceCode && (
                <div className="code-section">
                  <pre><code>{getDebounceCode()}</code></pre>
                  <p className="explanation">{explanations.debounce}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThrottleDebounce;
