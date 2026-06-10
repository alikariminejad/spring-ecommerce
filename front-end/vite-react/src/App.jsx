import './App.css'

function welcomeMessage(name) {
  return <h1>Hello, {name}</h1>;
}

function Greeting(isMorning) {
  if (isMorning) {
    return <h1>Good Morning!</h1>;
  }
  return <h1>Good Evening!</h1>;
}

function AlertBox(message) {
  return <div className='alert'>{message}</div>;
}

function showAlert(condition, message) {
  if (condition) {
    return AlertBox(message);
  }
  return null;
}

function App() {
  const now = new Date();
  const isMorning = now.getHours() < 12;

  return (
    <div>
      {welcomeMessage("Ali")}
      {welcomeMessage("Bob")}

      {Greeting(isMorning)}

      {showAlert(true, "This is important")}
    </div>


  )
}

export default App
