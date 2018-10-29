import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      votes: 4,
    },
    {
      id: 2,
      title: 'Red Pail',
      description: 'On-demand sand castle construction expertise.',
      votes: 3,
    },
    {
      id: 3,
      title: 'Blue Pail',
      description: 'On-demand sand castle construction expertise.',
      votes: 7,
    },
    {
      id: 4,
      title: 'Blue Pail',
      description: 'On-demand sand castle construction expertise.',
      votes: 10,
    },
    {
        id: 5,
        title: 'Pink Pail',
        description: 'On-demand sand castle construction expertise.',
        votes: 4,
      },
      {
        id: 6,
        title: 'Purple',
        description: 'On-demand sand castle construction expertise.',
        votes: 3,
      },
      {
        id: 7,
        title: 'Orange Pail',
        description: 'On-demand sand castle construction expertise.',
        votes: 23,
      },
  ];

ReactDOM.render(<App product={products}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
