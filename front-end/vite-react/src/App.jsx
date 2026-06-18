import './App.css'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';


const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = ()=>{
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return ( 
    <div>
      <GlobalComponent/>
      <ThemeContext.Provider value={theme}>
        <div style={{border:'2px solid black', padding:'20px'
        }}>
          <h2>App (Parent)</h2>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <ComponentA/>
        </div>
      </ThemeContext.Provider>
      
      <ThemeContext.Provider value='dark'>
        <GlobalComponent/>
      </ThemeContext.Provider>
    </div>
  );
}

function ComponentA() {
  return (
    <div style={{
      border: '2px solid blue', padding: '20px'
    }}>
      <h2>Component A(Child)</h2>
      <ComponentB/>
    </div>

  );
}

  function ComponentB() {
    return (
      <div style={{
        border: '2px solid red', padding: '20px'
      }}>
        <h2>ComponentB(Grandchild)</h2>
        <ThemedComponent/>
      </div>

    );
  }


function ThemedComponent() {
    const theme = useContext(ThemeContext)
    return (
      <div style={{
        border: '2px solid green', padding: '20px'
      }}>
        <h2>ThemedComponent (Great-Grandchild)</h2>
        <div>The current theme is: {theme}</div>
      </div>

    );
}
  
function GlobalComponent() {
    const theme = useContext(ThemeContext)
    return (
      <div style={{
        border: '2px solid purple', padding: '20px'
      }}>
        <h2>Global Component (Outside Provider)</h2>
        <div>The current theme is: {theme}</div>
      </div>

    );
  }

export default App;
