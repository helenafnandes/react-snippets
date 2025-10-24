import React from 'react';

const ExplanationHeader = () => {
  return (
    <div className="explanation-header">
      <div className="main-explanation">
        <p>Each mode simulates a <strong>separate component</strong> with different useEffect behaviors.</p>
        <p>When you switch modes, it's like unmounting the current component and mounting a new one.</p>
        <p>The useEffect will run based on its dependency array, and counters reset to simulate a fresh component.</p>
      </div>
    </div>
  );
};

export default ExplanationHeader;
