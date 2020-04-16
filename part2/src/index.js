import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes');
console.log(promise);
const promise2 = axios.get('http://localhost:3001/foobar');
console.log(promise2);

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2020-04-01',
    important: true
  },
  {
    id: 2,
    content: 'HTML is easy',
    date: '2020-04-02',
    important: false
  },
  {
    id: 3,
    content: 'CSS is not easy',
    date: '2020-04-01',
    important: true
  },
  {
    id: 4,
    content: 'JS is not easy',
    date: '2020-04-01',
    important: true
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
