
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'

import '../css/about.css';
import profilePicture from '../images/profile-picture.png'
import { BsCode } from "react-icons/bs";


const About = () => {

  return (
    <Row className='section'>
      <Col id="about" xs={11} sm={11} md={9} xl={7}>
        <Row id="about-row">
          <Col xs={12} md={8}>
            <h3 id='about-description'>I am an engineer whose passion for multiple art forms has led me to create visually influenced web applications. These often manifest themselves through data-driven analytics and intuitive graphics.</h3>
            <h6 id='about-technical'>main techincal interests</h6>
            <div id='about-skills'>
              <span><BsCode className='about-skills-icon'/>Python</span>
              <span><BsCode className='about-skills-icon'/>React</span>
              <span><BsCode className='about-skills-icon'/>NodeJS</span>
              <span><BsCode className='about-skills-icon'/>GraphQL</span>
              <span><BsCode className='about-skills-icon'/>R</span>
              <span><BsCode className='about-skills-icon'/>Git</span>
            </div>
            <p id='about-resume'>for more skills, checkout out my <a id='about-resume-link' href='https://drive.google.com/file/d/1-JLEtfCtz__tIYrbZkZ2tHrNrweOXn8n/view?usp=share_link' target='_blank' rel='noreferrer'>resume</a></p>
          </Col>
          <Col xs={6}  md={4}>
            <img id='about-profile' src={profilePicture} alt='about-profile'/>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default About