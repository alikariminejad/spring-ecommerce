import axios from 'axios';
import './App.css'
import React, { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Authorization': 'Bearer <TOKEN>',
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(request => {
  console.log("Starting request ", request);
  return request;
})

function App() {
  const [data, setData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    api.post('/posts', newPost).then(
      response => {
        console.log('New Post Added: ', response.data);
        setData([response.data]);
      }
    )
  };

  return ( 
    <div>
      <h2>API's</h2>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}

export default App;
