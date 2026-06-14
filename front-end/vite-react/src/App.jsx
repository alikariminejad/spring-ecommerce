import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count + 1} | Another: ${anotherValue}`;
    console.log(`useEffect triggered`);
  })

  return (
    <div className='App'>
      <h1>useEffect Hook</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setAnotherValue(anotherValue+1)}>Increment value</button>
    </div>
  );
}

export default App;
