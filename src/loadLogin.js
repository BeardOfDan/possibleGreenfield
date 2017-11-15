import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';

document.addEventListener('DOMContentLoaded', function () {
  // load the login page
  ReactDOM.render(
    React.createElement(Login),
    document.getElementById('login')
  );
});
