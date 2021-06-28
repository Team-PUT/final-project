import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class FormPage extends React.Component {

  render () {

    return (
      <>
        <Form>
          <Form.Group controlId='enterMeat'>
            <Form.Label>Meat</Form.Label>
            <Form.Control type="string" placeholder="Chicken" />
          </Form.Group>

          <Form.Group controlId='enterDairy'>
            <Form.Label>Dairy</Form.Label>
            <Form.Control type="string" placeholder="Mozzerlla"/>
          </Form.Group>

          <Form.Group controlId='enterVeggies'>
            <Form.Label>Veggies</Form.Label>
            <Form.Control type="string" placeholder="Carrots"/>
          </Form.Group>

          <Form.Group controlId='enterSpices'>
            <Form.Label>Spices</Form.Label>
            <Form.Control type="string" placeholder="Black Pepper"/>
          </Form.Group>

          <Button variant="primary" type="submit" >Submit</Button>
          
          <Button variant="Secondary" type="submit" >Cancel</Button>
        </Form>
      </>
    )
  }
}

export default FormPage;