import './App.css'
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  useEffect(() => {
    console.log('Component Re-rendered');
  });

  const incrementStateCount = () => {
    setStateCount(stateCount + 1);
  };

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log(`Ref Count: ${refCount.current}`)
  };

  return ( 
    <div>
      <p>State Count: {stateCount}</p>
      <button onClick={incrementStateCount}>Increment State Count</button>

      <p>Ref Count: {refCount.current}</p>
      <button onClick={incrementRefCount}>Increment State Count</button>
    </div>
  );
}

export default App;
