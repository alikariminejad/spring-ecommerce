import './App.css'
import React, { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email:''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form data submitted ", formData);      
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, [event.target.name]: event.target.value,
    })
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  return ( 
    <div>
      <h2>Forms in React</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" name='name' value={formData.name} onChange={handleChange} />
          {errors.name && <span style={{
            color:'red'
          }}>{errors.name}</span>}
          <br/>
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
