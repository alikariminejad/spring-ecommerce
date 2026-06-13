import './App.css'
import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const colors = ['#ff0000', '#00ff00', '#0048ba', '#ffbf00', '#9966cc', '#eedfcc'];
  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className='App' style={{backgroundColor}}>
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {colors.map((color, index) => (
          <div key={index} className='color-box' style={{ backgroundColor: color}} onClick={()=>handleColorChange(color)}></div>
        ))}
      </div>

      <div className='custom-color-picker'>
        <input type="color" value={backgroundColor} onChange={(e)=>handleColorChange(e.target.value)} />
      </div>

    </div>
  );
}

export default App;
