import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';

document.addEventListener('DOMContentLoaded', function () {
  // load the main page
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
  );
});
