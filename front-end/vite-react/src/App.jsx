import axios from 'axios';
import './App.css'
import React, { useEffect, useState } from 'react';

axios.interceptors.request.use(request => {
  console.log('Starting request', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response ', response);
  return response;
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
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost).then(
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
