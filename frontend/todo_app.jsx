import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {

  

  const preloadedState = {};

  const store = configureStore(preloadedState);

  window.store = store;

  const root = document.getElementById('content');
  // ReactDOM.render(<Root store={store}></Root>, root);
});