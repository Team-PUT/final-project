import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import jonaImg from './picture/jonaImg.jpg';
import shanImg from './picture/shanImg.jpg';
import alexImg from './picture/alexImg.jpeg';
import qImg from './picture/qImg.jpg';

class AboutUs extends React.Component {
  render () {
    return (
      <>
      <CardGroup>
        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={qImg} />
          <Card.Body>
            <Card.Title>Qaalid Hashi</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={jonaImg}/>
          <Card.Body>
            <Card.Title>Jona Brown</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={alexImg}/>
          <Card.Body>
            <Card.Title>Alex Vogt</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={shanImg} />
          <Card.Body>
            <Card.Title>Shan Jiang</Card.Title>
            <Card.Text>
              Hi my name is Shan. Do you want some noodle? 
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </>
    )
  }
}

export default AboutUs;


