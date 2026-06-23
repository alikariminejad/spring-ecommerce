import './App.css'
import React, { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const watchedName = watch('name');
  const watchedEmail = watch('email');

  useEffect(() => {
    console.log('Name ', watchedName);
  }, [watchedName]);
  
  useEffect(() => {
    console.log('Email ', watchedEmail);
  }, [watchedEmail]);

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
