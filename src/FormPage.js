import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
import RecipeCard from './RecipeCard.js';
import CardDeck from 'react-bootstrap/CardDeck';
import './FormPage.css';

const REACT_APP_PORT = process.env.REACT_APP_PORT;


class FormPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      recipes: [],
    }
  }

toggleShow = ((i) => {
  let updatedArr = this.state.ingredients.filter((item,idx) => {
  return idx !== i;
}); this.setState({ingredients: updatedArr});
});

handleGetRecipes = async () => {
  let searchData = this.state.ingredients.join(' ');
  console.log(searchData);
  let recipeData = await axios.get(`${REACT_APP_PORT}/searchIngredients?ingredients=${searchData}`);
    let dataToSave = recipeData.data.slice(0,8);
    console.log(recipeData);
    this.setState({recipes: dataToSave})
}

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.ingredients);
    let meat = e.target.enterMeat.value;
    let dairy = e.target.enterDairy.value;
    let veggies = e.target.enterVeggies.value;
    let spices = e.target.enterSpices.value;
    this.setState({ingredients: [meat, dairy, veggies, spices]});
  }
  render () {
    console.log(this.state.ingredients);
    return (
      <>
        <div class = 'form'>
          <Form class= 'form' onSubmit={this.handleSubmit}>
            <Form.Group controlId='enterMeat'>
              <Form.Label>Meat</Form.Label>
              <Form.Control type="text" placeholder="Enter Meat"/>
            </Form.Group>

            <Form.Group controlId='enterDairy'>
              <Form.Label>Dairy</Form.Label>
              <Form.Control type="string" placeholder="Enter Dairy Products"/>
            </Form.Group>

            <Form.Group controlId='enterVeggies'>
              <Form.Label>Veggies</Form.Label>
              <Form.Control type="string" placeholder="Enter Veggies"/>
            </Form.Group>

            <Form.Group controlId='enterSpices'>
              <Form.Label>Spices</Form.Label>
              <Form.Control type="string" placeholder="Enter Spice"/>
            </Form.Group>

            <Button variant="primary" type="submit" >Submit</Button>
          </Form>
          {this.state.ingredients ? this.state.ingredients.map((item, idx) => {
          if(item.length > 0) {return <Toast class='toast' key={idx} onClose = {() => this.toggleShow(idx)}><Toast.Header class= 'toastheader'>{item}</Toast.Header></Toast>}else{return ''};
        }): ''}
        </div>
        <div class= 'results'>
        {this.state.ingredients.length > 0 ? <Button onClick={this.handleGetRecipes} size= "lg" block>Get Recipes!</Button> : ''}
        {this.state.recipes.length > 0 ? this.state.recipes.map((recipe, idx) => {
          console.log(recipe);
          return <CardDeck class = 'cardDeck'><RecipeCard class = 'recipe' key={idx} recipeData = {recipe} /></CardDeck>}) : ''}
        </div>  
      </>
    )
  }
}

export default FormPage;