import React from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import Login from './Login';

import './NavbarClass.css';
import Logo from './picture/Sous-Chef-4.png';

class NavBarClass extends React.Component {
  render () {
    const { isAuthenticated }= this.props.auth0;
    return (
      <>
        <Navbar id ="navbar-container">
          <Container className="navbar">
            <Navbar.Brand className="brand-name">
              <img id = 'logo'
                alt=""
                src={Logo}
                width="120"
                height="120"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Link to="/">Home</Link>
            {isAuthenticated ? <Link to="/form">Find Recipes</Link> : <p> Please Log in to Continue!</p>}
            {this.props.auth ? 
              <>
              {isAuthenticated ? <Link to="/profile" className="profile-link">Profile</Link> : ''}
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


export default withAuth0(NavBarClass);
