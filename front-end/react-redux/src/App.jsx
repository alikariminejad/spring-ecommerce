import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Welcome!</p>
      <Counter />
      <Display/>
    </>
  )
}

export default App
