import './App.css'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);


  return ( 
    <div>
      <h2>Forms in React</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register('name')} />
        </label>
      
        <label>
          Email: 
          <input {...register('email')} />
        </label>

        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
