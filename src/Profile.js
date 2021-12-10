import React from 'react';
import './Profile.css';
import ProfileCard from './ProfileCard';

import withAuth0 from '@auth0/auth0-react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardDeck from 'react-bootstrap/CardDeck';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      savedRecipes: [],
      deletedRecipes: []
    }
  }

  //Pulling all recipes associated with the user's email address from MongoDB via axios.
  getRecipes = async() => {
    try {
    // this is going to be the same, always, for making requests to the server including the token
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    //setting the authorization token to a header value.
    const config = {
      headers: {"Authorization" : `Bearer ${jwt}`}
    };

    // Below is what connects front-end to back-end. Identify what is needed for a route within laravel/PHP and configure here within .env file.
    let url = process.env.REACT_APP_PORT;
    let getRecipes = await axios.get(`${url}/profileRecipes`, config);
    this.setState({savedRecipes: getRecipes.data });
    }
    catch(e) {
      console.log(e.message);
    }
  }

  deleteRecipe = async(id) => {
    try {
   // this is going to be the same, always, for making requests to the server including the token
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    //setting the authorization token to a header value.
    const config = {
      headers: {"Authorization" : `Bearer ${jwt}`}
    };

    // Below is what connects front-end to back-end. Identify what is needed for a route within laravel/PHP and configure here within .env file.
    let url = process.env.REACT_APP_PORT;
    let response = await axios.delete(`${url}/delete/${id}`, config);

    // console.log(response.data); - not needed.

    // Set the saved recipes to the updated array which filters out all recipes without the specified recipe id.
    let updatedArr = this.state.savedRecipes.filter(recipe => recipe._id !== id);
    this.setState({savedRecipes: updatedArr});
    }
    catch(e) {
      console.log(e.message);
    }
  }

  // componentDidMount only occurs on the FIRST loading/login.
  async componentDidMount() {
    // Inheriting auth0 logic from state. Ideally redux will be used for this in later stages.
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    //setting the authorization token to a header value.
    const config = {
      headers: {"Authorization" : `Bearer ${jwt}`}
    };

    // Below is what connects front-end to back-end. Identify what is needed for a route within laravel/PHP and configure here within .env file.
    let url = process.env.REACT_APP_PORT;
    //Sending out a token to the front end to only get user info
    let user = await axios.get(`${url}/login`, config);
    this.getRecipes();
    console.log(user.data);
  }

  render() {
    const {user} = this.props.auth0;
    return (
      <div className="card-container">
      <Card style={{width: '20rem'}} className="profileCard">
        <Card.Img variant="top" src={user.picture}/>  
        <Card.Body>
          <Card.Title>User Profile</Card.Title>
          <Card.Text>{user.name}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          <ListGroup.Item>Nickname: {user.nickname}</ListGroup.Item>
        </ListGroup>
      </Card>
      <div className="header-container">
      {this.state.savedRecipes.length > 0 ? 
        <h1 className="saved-recipes">{this.state.savedRecipes.length} Recipes Saved.</h1> :
        <h1 classname="saved-recipes">You Have 0 Saved recipes.</h1>
      }
      </div>
        <div className='results'>
        {this.state.savedRecipes.length > 0 ? this.state.savedRecipes.map((recipe, idx) => {
          return <CardDeck className = 'cardDeck'><ProfileCard className='profile-card' key={idx} recipeData={recipe} deleteRecipe={this.deleteRecipe} /></CardDeck>}) : ''}
        </div>  

      </div>
    )
  }
}

export default withAuth0(Profile);
