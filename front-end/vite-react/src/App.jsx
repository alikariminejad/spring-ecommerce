import './App.css'
import React from 'react';
import useCounter from './components/useCounter';

function App() {
  const { count, increment, decrement, reset } = useCounter(3);

  return ( 
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
