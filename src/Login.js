import React from 'react';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return(
      <LoginButton makeRequest = {this.props.makeRequest}/>
    )
  }
}

export default Login;

