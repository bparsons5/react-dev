
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SiMinutemailer } from "react-icons/si";

import '../css/contact.css';

const Contact = () => {

  return (
    <Row className='section'>
      <Col id="contact" xs={11} sm={11} md={9} xl={7}>
        <Row id="contact-row">
          <Col xs={12}>
            <h1 id='name'>Let's Connect</h1>
          </Col>
          <Col xs={12} md={8}>
            <h6 id='description'>I am always excited to hear about new opportunities from passionate people. Whether you want to connect, ask a question, or just get in touch and say hi, I'll try my best to get back to you!</h6>
          </Col>
          <Col xs={12}>
            <a id='contact-button' type='button' href="mailto:rbrettparsons@gmail.com" className='btn'>Say Hello <SiMinutemailer id='contact-icon'/></a>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Contact