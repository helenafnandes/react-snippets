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

  // Throttle e debounce para digitação
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

  // Throttle e debounce para movimento do mouse
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
  };

  const handleMouseMove = () => {
    setMouseMoveCount((prevCount) => prevCount + 1);
    handleThrottleMouseMove();
    handleDebounceMouseMove();
  };

  const startTypingComparison = () => {
    setMode('typing');
    resetCounts();
  };

  const startMouseMoveComparison = () => {
    setMode('mouse');
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
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here..."
          />
          <div>
            <h3>Default:</h3> {inputValue}
          </div>
          <div>
            <h3>Throttle:</h3> {throttledValue}
          </div>
          <div>
            <h3>Debounce:</h3> {debouncedValue}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h3>Default:</h3> {mouseMoveCount}
          </div>
          <div>
            <h3>Throttle:</h3> {throttledMouseCount}
          </div>
          <div>
            <h3>Debounce:</h3> {debouncedMouseCount}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThrottleDebounce;
