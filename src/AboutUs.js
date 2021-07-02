import React from 'react';
import Card from 'react-bootstrap/Card';
import './AboutUs.css';
import jonaImg from './picture/jonaImg.jpg';
import shanImg from './picture/shanImg.jpg';
import alexImg from './picture/alexImg.jpg';
import qImg from './picture/qImg.jpg';

class AboutUs extends React.Component {
  render () {
    return (
      <>
      <div className="card-deck">
        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={qImg} />
          <Card.Body>
            <Card.Title>Qaalid Hashi</Card.Title>
            <Card.Text>
            Background in Professional Security. Pursuing a career in Full-Stack Development. Last meal on Earth: Somali Rice and Chicken with Anjero.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={jonaImg}/>
          <Card.Body>
            <Card.Title>Jona Brown</Card.Title>
            <Card.Text>
            Background in Finance and Music, studied at Berklee College of Music in Boston, MA. Pursuing ASP.Net 401. Last meal on earth: Paella Valenciana.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={alexImg}/>
          <Card.Body>
            <Card.Title>Alex Vogt</Card.Title>
            <Card.Text>
            Background in Nuclear/Mechanical Engineering. 6 years spent in Nuclear Navy onboard USS Olympia. Pursuing engaging career in front-end development. Last meal on Earth: Loaded Baked Potato from Al's located in Birmingham, AL.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={shanImg} />
          <Card.Body>
            <Card.Title>Shan Jiang</Card.Title>
            <Card.Text>
            Background in Army Logistics Specialty. Pursuing career in Full-Stack Development. Last meal on Earth: Hot pot.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </>
    )
  }
}

export default AboutUs;


