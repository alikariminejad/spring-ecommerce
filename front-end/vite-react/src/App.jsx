import './App.css'
import ProfileCard from './components/ProfileCard';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import ProjectList from './components/ProjectList';

function App() {
  const hobby1 = ['Reading', 'Cooking'];
  const hobby2 = ['Hiking', 'Swimming'];
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on: ${hobby}`);
  };

  const aliProfile = {
    name:"ALI",
    age:28,
    isMember:true,
    hobbies:hobby1,
    onHobbyClick:handleHobbyClick
  }
  const jackProfile = {
    name:"Jack",
    age:29,
    isMember:false,
    hobbies:hobby2,
    onHobbyClick:handleHobbyClick
  }

  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
        <ProfileCard {...aliProfile} />
        <ProfileCard {...jackProfile} />
      </div>
    </div>
  );
}

export default App;
