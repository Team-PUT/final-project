import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RecipeCard.css';

import { withAuth0 } from '@auth0/auth0-react';

import axios from 'axios';


class RecipeCard extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            showSaved: false
        }
    }

  createMatchArr = () => {
    let newArr = [];
    this.props.recipeData.matchArray.forEach(ingr => {
      if (newArr.includes(ingr) === false) {
        console.log(`${ingr} pushed.`)
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
    try {
    let config = await this.getConfig();
    console.log(id);
    let url = process.env.REACT_APP_PORT;
    let response = await axios.put(`${url}/update/${id}`, config);

    if (this.setState === false ) {
      this.setState({showSaved: true}) 
    }

    alert(`${this.props.recipeData.name} was saved!`);
      console.log(response.data);
    }
    catch(e) {
      console.log(e.message);
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
