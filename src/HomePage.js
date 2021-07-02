import React from 'react';
 import './HomePage.css';
import logo from './picture/Sous-Chef-4.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {
  render () {
    return (
      <div className="title-container">
        <img src={logo} alt="logo" className="img"/>
        <div className="sub-container">
        <h1 className="title">Welcome to Sous-Chef</h1> 
        <h3 className="sub-title">~ The Recipe Searching App ~</h3>
        <p>Input your ingredients, find recipes and save them for later - all with ease.</p>
        <br />
      <p>Log in to get started!</p>
        </div>
      </div>
    )
  }
}

export default HomePage;
