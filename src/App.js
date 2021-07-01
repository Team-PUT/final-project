import React from 'react';
import './App.css';

import IsLoadingAndError from './IsLoadingAndError';
import { withAuth0 } from '@auth0/auth0-react';

import NavbarClass from './NavBarClass';
import FormPage from './FormPage';
import Footer from './Footer';
import Profile from './Profile';
import AboutUs from './AboutUs';
import HomePage from './HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
  //we are importing these props from Auth0
  const { isAuthenticated }= this.props.auth0;
  console.log(isAuthenticated);

  return (
    <div className="body">
        <Router className="body">
          <IsLoadingAndError>
            <NavbarClass auth = {isAuthenticated}/>
            <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route exact path="/form"> 
              {isAuthenticated ?
              <FormPage />
                :
                ''
              }
              </Route >
              <Route exact path = "/profile"> 
                <Profile/>
              </Route>
              <Route exact path = "/aboutUs">
                <AboutUs/>
              </Route>
            </Switch>
          </IsLoadingAndError>
        </Router>
      <Footer />
    </div>
  )
  }
}

export default withAuth0(App);
