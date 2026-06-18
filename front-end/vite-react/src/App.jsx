import './App.css'
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const inputRefNext = useRef(null);

  useEffect(() => {
    console.log('Component Rendered');
  });

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  };
  const focusInputNext = () => {
    inputRefNext.current.focus();
    inputRefNext.current.style.backgroundColor = 'blue';
  };
  
  const resetFocus = () => {
    inputRef.current.style.backgroundColor = 'white';
    inputRefNext.current.style.backgroundColor = 'white';
  };

  return ( 
    <div>
      <h1>Learn React</h1>
      <input ref={inputRef} type="text" placeholder='Focus on me' />
      <button onClick={focusInput}>Focus and Highlight</button>
      
      <input ref={inputRefNext} type="text" placeholder='Focus on me' />
      <button onClick={focusInputNext}>Focus and Highlight</button>
      
      <button onClick={resetFocus}>reset</button>
    </div>
  );
}

export default App;
