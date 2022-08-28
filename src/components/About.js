
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/about.css';

const About = () => {

  return (
    <Row className='section'>
      <Col id="about" xs={11} sm={11} md={9} xl={7}>
        <Row id="about-row">
          <Col xs={12}>
            <h1 id='name'>About</h1>
          </Col>
          <Col xs={12}>
            <h2 id='tagline'>I develop products infused with innovation and creativity.</h2>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default About