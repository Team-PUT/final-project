import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class RecipeCard extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.recipeData.image} />
                <Card.Body>
                    <Card.Title>{this.props.recipeData.name}</Card.Title>
                    <Card.Text>
                        {this.props.recipeData.source}
                    </Card.Text>
                    <Button variant="primary" onClick = {this.props.recipeData.link}>Check out this recipe!</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default RecipeCard;