import React from 'react';

const ModeSelectors = ({ mode, onModeChange, isInitialPage = false }) => {
  const modes = [
    { id: 'empty-deps', label: 'Empty Dependencies' },
    { id: 'with-deps', label: 'With Dependencies' },
    { id: 'no-deps', label: 'No Dependencies' },
    { id: 'cleanup', label: 'Cleanup Function' },
    { id: 'infinite-loop', label: 'Infinite Loop' }
  ];

  return (
    <div className="mode-selectors">
      <div className="mode-explanation">
        <p>{isInitialPage ? 'Choose a useEffect scenario to simulate:' : 'Switch between useEffect scenarios:'}</p>
      </div>
      <div className="mode-row">
        {modes.slice(0, 3).map(modeItem => (
          <button 
            key={modeItem.id}
            className={`mode-btn ${mode === modeItem.id ? 'active' : ''}`}
            onClick={() => onModeChange(modeItem.id)}
          >
            {modeItem.label}
          </button>
        ))}
      </div>
      <div className="mode-row">
        {modes.slice(3).map(modeItem => (
          <button 
            key={modeItem.id}
            className={`mode-btn ${mode === modeItem.id ? 'active' : ''}`}
            onClick={() => onModeChange(modeItem.id)}
          >
            {modeItem.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModeSelectors;
