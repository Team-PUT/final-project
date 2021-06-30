import React from 'react';
import Card from 'react-bootstrap/Card';
import NavBarClass from './NavBarClass';


class AboutUs extends React.Component {
  render () {
    return (
      <>
        <NavBarClass/>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Qaalid Hashi</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Jona Brown</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Alex Vogt</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="picture/shanImg.jpg" />
          <Card.Body>
            <Card.Title>Shan Jiang</Card.Title>
            <Card.Text>
              Hi my name is Shan. Do you want some noodle? 
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default AboutUs;


