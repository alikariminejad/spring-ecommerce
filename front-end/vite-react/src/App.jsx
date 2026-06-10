import './App.css'

function App() {
  const name = "Ali";
  const buttonLabel = "Click Me!";
  const imageUrl = 'https://placehold.co/100*100';

  return (
    <div>
      <h1 className='greeting'>Hello, {name}</h1>
      <button style={{ backgroundColor: 'green', color: 'white' }}>
        {buttonLabel}
      </button>

      <button onClick={() => alert("Button Clicked!")}>alert</button>
      
      <img src={imageUrl} alt="Dynamic Image" />
    </div>
  )
}

export default App
