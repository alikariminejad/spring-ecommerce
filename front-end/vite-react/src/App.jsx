import './App.css'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';


const ThemeContext = createContext('light');

function App() {
  return ( 
    <div style={{border:'2px solid black', padding:'20px'
    }}>
      <h2>App (Parent)</h2>
      <ComponentA/>
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

export default App;
