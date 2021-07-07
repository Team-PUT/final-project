import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProfileCard.css';

import { withAuth0 } from '@auth0/auth0-react';

class ProfileCard extends React.Component {

  createMatchArr = () => {
    let newArr = [];
    // sad that you have to do this de-duping on the frontend... would make more sense to do this on the backend, as you create the array.
    this.props.recipeData.matchArray.forEach(ingr => {
      if (newArr.includes(ingr) === false) {
        newArr.push(ingr);
      }
    });
    return newArr.join(', ');
  };

  render() {
    let newArr = this.createMatchArr();
        return (
            <Card className='card' bg="dark">
                <Card.Img className='card-image' variant="top" src={this.props.recipeData.image} />
                <Card.Body>
                    <Card.Title className = 'cardTitle'>{this.props.recipeData.name}</Card.Title>
                      <Card.Text>{`Ingredient Matches: ${this.props.recipeData.matches}`}</Card.Text>
                      <Card.Text>Matches From Search: {newArr}</Card.Text>
                     <Card.Text>{`Source: ${this.props.recipeData.source}`}</Card.Text>
                        <Button className='cardButton' variant="success" href={this.props.recipeData.link} target="blank">Check out this recipe!</Button>
                        <Button className='cardButton' variant="danger" onClick={() => this.props.deleteRecipe(this.props.recipeData._id)}>Delete!</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default withAuth0(ProfileCard);
