
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/experience.css';

const Experience = () => {

  return (
    <Row className='section'>
      <Col id="experience" xs={11} sm={11} md={9} xl={7}>
        <Row id="experience-row">
          <Col xs={12}>
            <h1 id='name'>Exp</h1>
          </Col>
          <Col xs={12}>
            <h2 id='tagline'>I develop products infused with innovation and creativity.</h2>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Experience