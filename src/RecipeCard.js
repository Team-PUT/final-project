import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RecipeCard.css';

import { withAuth0 } from '@auth0/auth0-react';

import axios from 'axios';


class RecipeCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          // Defining state of the class component.
            showSaved: false
        }
    }

  createMatchArr = () => {
    let newArr = [];
      // Props are being passed down from the parent component, then used.
    this.props.recipeData.matchArray.forEach(ingr => {
      // If new array does not include the ingredient mentioned in recipe data, push it to the array.
      if (!newArr.includes(ingr)) {
        newArr.push(ingr);
      }
    });
    return newArr.join(', ');
  };

 getConfig = async() => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: {"Authorization" : `Bearer ${jwt}`}
    };
    return config;
  }

  saveRecipe = async(id) => {
    // We will attempt to make a put request to the back end with the saved information. 
    // If it fails, catch the error and return it to the user.
    try {
    let config = await this.getConfig();
    let url = process.env.REACT_APP_PORT;
    let response = await axios.put(`${url}/update/${id}`, config);

    if (!this.setState) {
      this.setState({showSaved: true}) 
    }

    alert(`${this.props.recipeData.name} was saved!`);
      //console.log(response.data);
    }

    catch(e) {
      console.log(e.message);
      alert(`There was an error processing your request. Please try again - error: ${e.message}`);
    }
  }

  render() {
    let newArr = this.createMatchArr();
        return (
            <Card bg="dark">
                <Card.Img className='card-image' variant="top" src={this.props.recipeData.image} />
                <Card.Body>
                    <Card.Title className='cardTitle'>{this.props.recipeData.name}</Card.Title>
                      <Card.Text>{`Ingredient Matches: ${this.props.recipeData.matches}`}</Card.Text>
                      <Card.Text>Matches From Search: {newArr}</Card.Text>
                     <Card.Text>{`Source: ${this.props.recipeData.source}`}</Card.Text>
                        <Button className='cardButton' variant="success" href={this.props.recipeData.link} target="blank">Check out this recipe!</Button>
                        {this.state.showSaved ? <Button variant= "secondary" className='cardButton' disabled>Saved!</Button>:<Button className='cardButton' variant="warning" onClick={() => this.saveRecipe(this.props.recipeData._id)}>Save!</Button>}
                </Card.Body>
            </Card>
        )
    }
}

export default withAuth0(RecipeCard);
