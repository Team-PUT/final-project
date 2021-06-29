import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class FormPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let meat = e.target.enterMeat.value;
    let dairy = e.target.enterDairy.value;
    let veggies = e.target.enterVeggies.value;
    let spices = e.target.enterSpices.value;

    this.setState({ingredients: [meat, dairy, veggies, spices]});
    // console.log(this.state);
    // console.log(meat, dairy, veggies, spices);
  }
  render () {

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='enterMeat'>
            <Form.Label>Meat</Form.Label>
            <Form.Control type="text" placeholder="Enter Meat" />
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
          
          {/* <Button variant="Secondary" type="submit" >Cancel</Button> */}
        </Form>
        
        <div>
        {this.state.ingredients ? this.state.ingredients.map(item => {
          return <h3>{item}</h3>
        }): ''}
        </div>
      </>
    )
  }
}

export default FormPage;