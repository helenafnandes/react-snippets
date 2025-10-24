import React from 'react';

const StatsGrid = ({ mode, renderCount, effectCount, cleanupCount, timer }) => {
  // Format display values for infinite loop mode
  const formatCount = (count, isInfiniteLoop) => {
    if (isInfiniteLoop && count >= 100) {
      return '100+';
    }
    return count;
  };

  const isInfiniteLoop = mode === 'infinite-loop';

  return (
    <div className="stats-grid">
      <div className="stats-row">
        <div className="stat-item">
          <h3>Render Count</h3>
          <div className="stat-value">{formatCount(renderCount, isInfiniteLoop)}</div>
        </div>
        <div className="stat-item">
          <h3>Effect Count</h3>
          <div className="stat-value">{formatCount(effectCount, isInfiniteLoop)}</div>
        </div>
      </div>
      {mode === 'cleanup' && (
        <div className="stats-row">
          <div className="stat-item">
            <h3>Cleanup Count</h3>
            <div className="stat-value">{cleanupCount}</div>
          </div>
          <div className="stat-item">
            <h3>Timer (5s)</h3>
            <div className="stat-value">{timer}s</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsGrid;
