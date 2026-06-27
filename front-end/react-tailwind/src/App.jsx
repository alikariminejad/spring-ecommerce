import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 p-4'>
      <ui className='list-none md:flex md:gap-4'>
        <li className='bg-blue-500 text-white p-2 m-2 rounded-lg md:px-4 '>Item 1</li>
        <li className='bg-blue-500 text-white p-2 m-2 rounded-lg'>Item 2</li>
        <li className='bg-blue-500 text-white p-2 m-2 rounded-lg'>Item 3</li>
      </ui>
    </div>
    
  )
}

export default App
