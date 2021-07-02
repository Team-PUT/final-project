import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RecipeCard.css';

import { withAuth0 } from '@auth0/auth0-react';

import axios from 'axios';


class RecipeCard extends React.Component {

  createMatchArr = () => {
    let newArr = [];
    this.props.recipeData.matchArray.forEach(ingr => {
      if (newArr.includes(ingr) === false) {
        console.log(`${ingr} pushed.`)
        newArr.push(ingr);
      }
    });
    return newArr;
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
    try {
    let config = await this.getConfig();
    console.log(id);
    let url = process.env.REACT_APP_PORT;
    let response = await axios.put(`${url}/update/${id}`, config);
    
    //let response = axios ({
    //  method: 'put',
    //  url: `${url}/update/_${id}`,
    //});
    console.log(response.data);
    }
    catch(e) {
      console.log(e.message);
    }
  }

  render() {
    let newArr = this.createMatchArr();
        return (
            <Card class = 'card'>
                <Card.Img class = 'card-image' variant="top" src={this.props.recipeData.image} />
                <Card.Body>
                    <Card.Title className = 'cardTitle'>{this.props.recipeData.name}</Card.Title>
                      <Card.Text>{`Ingredient Matches: ${this.props.recipeData.matches}`}</Card.Text>
                      <Card.Text>Matches From Search: {newArr}</Card.Text>
                     <Card.Text>{`Source: ${this.props.recipeData.source}`}</Card.Text>
                        <Button class = 'cardButton' href={this.props.recipeData.link}>Check out this recipe!</Button>
                        <Button class = 'cardButton' onClick={() => this.saveRecipe(this.props.recipeData._id)}>Save!</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default withAuth0(RecipeCard);
