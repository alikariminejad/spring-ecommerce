import './App.css'

function App() {
  const loggedIn = true;
  // if (loggedIn) {
  //   return (<h1>Welcome to the website!</h1>)
  // }
  // return (<h1>Please Log in!</h1>)

  const element = <h1>{loggedIn ? "Welcome back!" : "Please Log in!"}</h1>
  const messages = ["hi", "another message"]
  return (
    <div>
        {element}
        { messages.length > 0 && <h2>You have {messages.length} unread messages!</h2>}
    </div>


  )
}

export default App
