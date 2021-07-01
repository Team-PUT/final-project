import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RecipeCard.css';

class RecipeCard extends React.Component {
    render() {
        return (
            <Card class = 'card'>
                {this.props.recipeData.image.length > 0 ? <Card.Img class = 'card-image' variant="top" src={this.props.recipeData.image} /> : <Card.Img variant="top" src='./imagenotfound.png' />}
                <Card.Body>
                    <Card.Title>{this.props.recipeData.name}</Card.Title>
                    <Card.Text>
                        {this.props.recipeData.source}
                    </Card.Text>
                        <Button class = 'cardButton' variant="primary" href={this.props.recipeData.link}>Check out this recipe!</Button>
                        <Button class = 'cardButton' variant='info'>Save!</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default RecipeCard;