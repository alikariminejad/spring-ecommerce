import './App.css'
import React, { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({mode:'onChange'});
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const existingUsernames = ['admin', 'user123', 'john']
  const checkIfUsernameExist = async (username) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return existingUsernames.includes(username);
  };

  // const validateName = (value) => {
  //   if (value === 'admin') {
  //     return 'Admin is not allowd';
  //   };
  //   return true;
  // }
  
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
          <input {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: "Name should be at least 2 characters" },
            validate: {
              notAdmin: (value) => value !== "admin" || "Admin is not allowd",
              isNotNumber: (value) => isNaN(value) || "Number is not allowed",
              checkUsername: async(value) => {
                const exist = await checkIfUsernameExist(value);
                return !exist || 'Username already taken'
              }
            }
          })} />
        </label>
        {errors.name && <p>{errors.name.message || "Name is required and must be at least 2 characters"}</p>}
      
        <label>
          Email: 
          <input {...register('email', {required:true})} />
        </label>
        {errors.email && <p>Email is required</p>}

        <label>Password:
          <input type="password" {...register('password', { required: true })} />
        </label>
        {errors.password && <p>{errors.password.message}</p>}
        <br/>
        <label>Confirm Password:
          <input type="password" {...register('confirmPassword', {
            required: true,
            minLength: 2,
            validate: value => value === watch('password') || 'Passwords do not match'
          })} />
        </label>
        {errors.confirmPassword && errors.confirmPassword.message}

        <br/>
        <button type='submit'>submit</button>
        <button type='button' onClick={() => reset()}>reset</button>
        

      </form>
    </div>
  );
}

export default App;
