import './App.css'
import ProfileCard from './components/ProfileCard';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import ProjectList from './components/ProjectList';

function App() {

  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
        <ProfileCard name="ALI" age={28} isMember={true} />
        <ProfileCard name="Jack" age={29} isMember={false} />
      </div>
    </div>
  );
}

export default App;
