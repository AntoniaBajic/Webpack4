import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


console.log('Welcome student');
const getData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  };
  
  getData('https://jsonplaceholder.typicode.com/posts');

ReactDOM.render(<App/>, document.getElementById('app'));


