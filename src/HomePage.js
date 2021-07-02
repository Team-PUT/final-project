import React from 'react';
 import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {
  render () {
    return (
      <div className="title-container">
        <div className="sub-container">
        <h1 className="title">Welcome to Sous-Chef</h1> 
        <h3 className="sub-title">~ The Recipe Searching App ~</h3>
        <p>Input your ingredients, find recipes and save them for later - all with ease.</p>
        </div>
      </div>
    )
  }
}

export default HomePage;
