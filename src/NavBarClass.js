import React from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import LogoutButton from './LogoutButton';
import Login from './Login';

import './NavbarClass.css';
import Logo from './picture/Sous-Chef-4.png';

class NavBarClass extends React.Component {
  render () {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" className ="navbar-container" bg="light" variant="light">
      <Container className="navbar">
      <Navbar.Brand className="brand-name">
        <img
          alt=""
          src={Logo}
          width="120"
          height="120"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
        <Link to="/">Home</Link>
        {this.props.auth ? 
          <>
          <Link to="/profile" className="profile-link">Profile</Link> 
          <LogoutButton />
          </>
          : <Login/>}
        <Link to="/aboutUs" className="about-us-link">About Us</Link>
      </Container>
      </Navbar>
      </>
    )
  }
}


export default NavBarClass;
