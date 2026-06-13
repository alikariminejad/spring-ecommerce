import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => {
    setCount(count + step);
  };
  const decrementCount = () => {
    setCount(count - step);
  };

  return (
    <div className="App">
      <div>
        <h1>Counter Value: {count}</h1>
        <input type="number" value={step} onChange={(e)=>setStep(parseInt(e.target.value))} />
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
