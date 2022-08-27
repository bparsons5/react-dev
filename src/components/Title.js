
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaCaretDown } from 'react-icons/fa'

import '../css/title.css';
// margin-top: calc(50vh - 128px);
const Title = () => {

  return (
    <Row className='section'>
      <Col id="title" xs={11} sm={11} md={9} xl={7}>
        <Row id="title-row">
          <Col xs={12}>
            <h5 id='hello'>hello, my name is</h5>
          </Col>
          <Col xs={12}>
            <h1 id='name'>Brett Parsons<span id='period'>.</span></h1>
          </Col>
          <Col xs={12}>
            <h2 id='tagline'>I develop products infused with innovation and creativity.</h2>
          </Col>
          <Col xs={12} sm={8}>
            <h6 id='description'>Believe in focusing on clear communication and envisioning opportunities to formulate solutions through hard work and innovative thinking.</h6>
          </Col>
          <Col xs={0} sm={4}></Col>
          <Col xs={12} sm={6}>
            <h5 id='checkout'>/ check out my work <FaCaretDown className='icon'/> /</h5>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Title