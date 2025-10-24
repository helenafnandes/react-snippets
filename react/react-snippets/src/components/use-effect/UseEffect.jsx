import React, { useState, useEffect, useRef } from 'react';
import './UseEffect.css';
import { ExplanationHeader, ModeSelectors, StatsGrid } from './components';

const UseEffect = () => {
  const [mode, setMode] = useState(null);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [timer, setTimer] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isLoopRunning, setIsLoopRunning] = useState(false);
  
  const renderCount = useRef(0);
  const effectCount = useRef(0);
  const cleanupCount = useRef(0);
  const intervalRef = useRef(null);
  const loopIntervalRef = useRef(null);
  const internalRenderCount = useRef(0);
  const shouldShowRender = useRef(false);
  const hasLoggedMount = useRef(false);
  
  internalRenderCount.current += 1;

  useEffect(() => {
    return () => {
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
        loopIntervalRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);
  
  useEffect(() => {
    addLog(`=== react component mounted ===`, 'info');
    addLog(`note: each mode is treated as an independent component`, 'info');
    addLog(`each useEffect mode simulates a fresh component mount`, 'info');
  }, []);

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [{ message, type, timestamp }, ...prev.slice(0, 8)]);
    
    setTimeout(() => {
      const logsContainer = document.querySelector('.logs-container');
      if (logsContainer) {
        logsContainer.scrollTop = 0;
      }
    }, 0);
  };


  const startInfiniteLoopSimulation = () => {
    renderCount.current = 1;
    effectCount.current = 0;
    setLogs([]);
    setCount(0);
    setName('');
    setTimer(0);
    
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }
    setIsLoopRunning(false);
    
    setTimeout(() => {
      addLog(`=== infinite loop simulation started ===`, 'info');
      addLog(`this simulates what happens in a real infinite loop`, 'info');
      addLog(``, 'info');
      addLog(`🔄 infinite loop explanation:`, 'info');
      addLog(`1. component mounts → render 1 happens`, 'info');
      addLog(`2. useEffect runs (dependency: [count]) → count changes to 1`, 'info');
      addLog(`3. count change triggers new render → render 2 happens`, 'info');
      addLog(`4. useEffect runs again (count changed) → count changes to 2`, 'info');
      addLog(`5. this continues infinitely: useEffect → count change → render → useEffect...`, 'info');
      addLog(``, 'info');
      addLog(`render 1: triggered by component mounted`, 'render');
      
      setIsLoopRunning(true);
      loopIntervalRef.current = setInterval(() => {
        renderCount.current += 1;
        effectCount.current += 1;
        
        addLog(`render ${renderCount.current}: triggered by count state change (${renderCount.current - 1} → ${renderCount.current})`, 'render');
        addLog(`useEffect ${effectCount.current}: triggered by count dependency change (${effectCount.current - 1} → ${effectCount.current})`, 'effect');
        
        if (renderCount.current >= 100) {
          clearInterval(loopIntervalRef.current);
          renderCount.current = 100;
          effectCount.current = 100;
          addLog(`render 100+: renders will infinitely happen`, 'danger');
          addLog(`useEffect 100+: effects will infinitely happen`, 'danger');
          setIsLoopRunning(false);
        }
      }, 50);
    }, 0);
  };

  const resetCounters = () => {
    if (mode === 'infinite-loop') {
      startInfiniteLoopSimulation();
      return;
    }
    
    renderCount.current = 1;
    effectCount.current = 0;
    cleanupCount.current = 0;
    setLogs([]);
    setCount(0);
    setName('');
    setTimer(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    shouldShowRender.current = true;
    hasLoggedMount.current = false;
    
    setTimeout(() => {
      addLog(`=== (simulation) component reset - fresh mount ===`, 'info');
      addLog(`render 1: triggered by component mounted`, 'render');
      
      if (mode === 'empty-deps') {
        effectCount.current += 1;
        addLog(`useEffect ${effectCount.current}: empty deps [] ran on mount`, 'effect');
      } else if (mode === 'with-deps') {
        effectCount.current += 1;
        addLog(`useEffect ${effectCount.current}: [count] dependency ran on mount (count: 0)`, 'effect');
      } else if (mode === 'no-deps') {
        effectCount.current += 1;
        addLog(`useEffect ${effectCount.current}: no dependencies ran on every render (simulated)`, 'effect');
        addLog(`warning: in real apps, this causes infinite loops!`, 'warning');
        addLog(`this simulation shows the concept safely`, 'info');
      } else if (mode === 'cleanup') {
        effectCount.current += 1;
        addLog(`useEffect ${effectCount.current}: ran on mount`, 'effect');
      }
    }, 0);
  };

  const getCodeSnippet = () => {
    switch (mode) {
      case 'empty-deps':
        return `useEffect(() => {
  console.log('Runs only once after mount');
  effectCount.current += 1;
}, []); // Empty dependency array`;
      
      case 'with-deps':
        return `useEffect(() => {
  console.log('Runs when count changes');
  effectCount.current += 1;
}, [count]); // Depends on count`;
      
      case 'no-deps':
        return `useEffect(() => {
  console.log('Runs on every render!');
  effectCount.current += 1;
}); // No dependency array`;
      
      case 'cleanup':
        return `useEffect(() => {
  console.log('Effect with cleanup');
  const interval = setInterval(() => {
    setTimer(prev => prev + 1);
  }, 1000);

  return () => {
    console.log('Cleanup function');
    clearInterval(interval);
  };
}, [count]);`;
      
      case 'infinite-loop':
        return `useEffect(() => {
  console.log('DANGER: Infinite loop!');
  setCount(prev => prev + 1);
  // ^ This triggers re-render
}, [count]);
// count changes, so effect runs again`;
      
      default:
        return '';
    }
  };

  const getExplanation = () => {
    switch (mode) {
      case 'empty-deps':
        return 'Empty dependency array [] means the effect runs only once after this component mounts.\n\nPerfect for initialization, API calls, or setting up subscriptions.\n\nSince we simulate a fresh component mount when switching modes, this effect will run once per mode selection.';
      
      case 'with-deps':
        return 'Dependencies in the array [count] mean the effect runs whenever count changes within this component.\n\nThis is the most common pattern for responding to state changes.\n\nThe effect will run on mount and every time count changes.';
      
      case 'no-deps':
        return 'No dependency array means the effect would run after every render.\n\nIn real apps, this causes infinite loops because the effect itself can trigger re-renders (like logging).\nThis simulation shows the concept safely by only counting user interactions (button clicks and text input) as educational purposes.\n\nNotice how both Render Count and Effect Count increase together with each interaction.\n\nThis pattern should be avoided unless absolutely necessary.';
      
      case 'cleanup':
        return 'Cleanup functions are returned from useEffect to clean up subscriptions, timers, or event listeners.\n\nThey run before the component unmounts or before the effect runs again.\n\nIMPORTANT: Cleanup does NOT run on the initial mount - only on re-renders and unmount.\n\nThis simulation shows how cleanup runs before each new effect execution.\n\nNotice how the Cleanup Count increases with each interaction.';
      
      case 'infinite-loop':
        return 'DANGER: This creates an infinite loop!\n\nHere\'s what happens:\n1) Component mounts → Render 1\n2) useEffect runs with [count] dependency → changes count\n3) count change triggers new render → Render 2\n4) useEffect runs again because count changed → changes count again\n5) This cycle repeats infinitely: useEffect → count change → render → useEffect...\n\nThe render only happens because the count is displayed on screen - if count wasn\'t shown, only the useEffect would run infinitely without re-renders!';
      
      default:
        return '';
    }
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    
    renderCount.current = 1;
    effectCount.current = 0;
    cleanupCount.current = 0;
    setLogs([]);
    setCount(0);
    setName('');
    setTimer(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }
    setIsLoopRunning(false);
    shouldShowRender.current = true;
    hasLoggedMount.current = false;
    
    setTimeout(() => {
      addLog(`=== (simulation) new component mounted: ${newMode.replace('-', ' ').toUpperCase()} ===`, 'info');
      addLog(`render 1: triggered by component mounted`, 'render');
      hasLoggedMount.current = true;
      
      if (newMode === 'empty-deps') {
        effectCount.current += 1;
        addLog(`useEffect ${effectCount.current}: empty deps [] ran on mount`, 'effect');
      } else if (newMode === 'with-deps') {
        effectCount.current += 1;
        addLog(`useEffect ${effectCount.current}: [count] dependency ran on mount (count: 0)`, 'effect');
      } else if (newMode === 'no-deps') {
        effectCount.current += 1;
        addLog(`useEffect ${effectCount.current}: no dependencies ran on every render (simulated)`, 'effect');
        addLog(`warning: in real apps, this causes infinite loops!`, 'warning');
        addLog(`this simulation shows the concept safely`, 'info');
      } else if (newMode === 'cleanup') {
        effectCount.current += 1;
        addLog(`useEffect ${effectCount.current}: ran on mount`, 'effect');
      } else if (newMode === 'infinite-loop') {
        startInfiniteLoopSimulation();
      }
    }, 0);
  };

  const handleCountChange = () => {
    setCount(prev => prev + 1);
    renderCount.current += 1;
    
    if (mode !== 'infinite-loop') {
      addLog(`render ${renderCount.current}: triggered by count changed to ${count + 1}`, 'render');
    }
    
    if (mode === 'no-deps') {
      effectCount.current += 1;
      addLog(`useEffect ${effectCount.current}: no dependencies ran on every render (simulated)`, 'effect');
    } else if (mode === 'with-deps') {
      effectCount.current += 1;
      addLog(`useEffect ${effectCount.current}: [count] dependency ran because count changed (count: ${count + 1})`, 'effect');
    } else if (mode === 'cleanup') {
      if (effectCount.current > 0) {
        cleanupCount.current += 1;
        addLog(`cleanup ${cleanupCount.current}: ran before effect, and restarted timer`, 'info');
      }
      
      effectCount.current += 1;
      addLog(`useEffect ${effectCount.current}: ran triggered by change in count`, 'effect');
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setTimer(0);
      intervalRef.current = setInterval(() => {
        setTimer(prev => {
          const newTimer = prev + 1;
          if (newTimer >= 5) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return newTimer;
        });
      }, 1000);
    } else if (mode === 'infinite-loop') {
      effectCount.current += 1;
      addLog('increment counter will cause rerender and effect to run', 'info');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    renderCount.current += 1;
    
    if (mode !== 'infinite-loop') {
      const displayText = e.target.value || '(empty)';
      addLog(`render ${renderCount.current}: triggered by change in text "${displayText}"`, 'render');
    }
    
    if (mode === 'no-deps') {
      effectCount.current += 1;
      addLog(`useEffect ${effectCount.current}: no dependencies ran on every render (simulated)`, 'effect');
    } else if (mode === 'infinite-loop') {
      effectCount.current += 1;
      addLog('typing will cause rerender, but not effect (not on dependency array)', 'info');
    }
  };

  if (!mode) {
    return (
      <div className="container">
        <ExplanationHeader />
        <ModeSelectors 
          mode={mode} 
          onModeChange={handleModeChange} 
          isInitialPage={true}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <ExplanationHeader />
      <ModeSelectors 
        mode={mode} 
        onModeChange={handleModeChange} 
        isInitialPage={false}
      />

      <div className="interactive-controls">
        <span className="counter-display">{count}</span>
        <button onClick={handleCountChange} className="action-btn">
          Increment Count
        </button>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type to trigger re-renders"
          className="name-input"
        />
        <button onClick={resetCounters} className="reset-btn">
          Reset All
        </button>
      </div>

      <StatsGrid 
        mode={mode}
        renderCount={renderCount.current}
        effectCount={effectCount.current}
        cleanupCount={cleanupCount.current}
        timer={timer}
      />

      <div className="content-grid">
        <div className="educational-section">
          <div className="code-section">
            <h3>Code</h3>
            <pre><code>{getCodeSnippet()}</code></pre>
          </div>
          
          <div className="explanation-section">
            <h3>Explanation</h3>
            <p className="explanation">{getExplanation()}</p>
          </div>
        </div>

        <div className="logs-section">
          <h3>useEffect Execution Log (Newest First)</h3>
          <div className="logs-container">
            {logs.map((log, index) => (
              <div key={index} className={`log-entry ${log.type}`}>
                <span className="log-time">{log.timestamp}</span>
                <span className="log-message">{log.message}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UseEffect;
