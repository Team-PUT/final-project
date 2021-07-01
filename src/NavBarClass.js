import React from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';

import LogoutButton from './LogoutButton';
import Login from './Login';

import './NavbarClass.css';

class NavBarClass extends React.Component {
  render () {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className ="navbar-container">
        <Navbar.Brand>Sous Chef</Navbar.Brand>
        <Link to="/">Home</Link>
        {this.props.auth ? 
          <>
          <Link to="/profile">Profile</Link> 
          <LogoutButton />
          </>
          : <Login/>}
        <Link to="/aboutUs">About Us</Link>
      </Navbar>
      </>
    )
  }
}


export default NavBarClass;
