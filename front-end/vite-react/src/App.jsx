import './App.css'
import React, { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email:''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted ", formData);
  };

  const handleChange = (evenet) => {
    setFormData({
      ...formData, [event.target.name]: evenet.target.value,
    })
  };

  return ( 
    <div>
      <h2>Forms in React</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" name='name' value={formData.name} onChange={handleChange} />
        </label>
        
        <label>
          Email: 
          <input type="email" name='email' value={formData.email} onChange={handleChange} />
        </label>

        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
