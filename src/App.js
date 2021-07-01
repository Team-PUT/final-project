import React from 'react';
import './App.css';

import IsLoadingAndError from './IsLoadingAndError';
import { withAuth0 } from '@auth0/auth0-react';

import NavbarClass from './NavbarClass';
import FormPage from './FormPage';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
  return (
    <>
        <Router className="body">
          <IsLoadingAndError>
            <NavbarClass auth = {isAuthenticated}/>
            <Switch>
              <Route exact path="/"> 
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
              </Route>
            </Switch>
          </IsLoadingAndError>
        </Router>
      <Footer />
    </>
  )
  }
}

export default App;
