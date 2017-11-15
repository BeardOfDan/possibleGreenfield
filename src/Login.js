import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login() {
    console.log('This is a click handler that will send a post request to the server and if the response is a success case, it will redirect the user to the home page');
    // fetch(url, function() { ... });
  }

  render() {
    return (
      <div>
        <h1>Log Into Greenfield!</h1>
        {/* <form> */}
        <input type='text' name='username' placeholder='what is your name?' />
        <input type='text' name='password' placeholder='what is your password' />
        <button onClick={this.login}>Login</button>
        {/* </form> */}
      </div>
    );
  }
}
