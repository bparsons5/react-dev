
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import '../css/experience.css';
import uva from '../images/university-of-virginia-logo-black-and-white.png'

import { MdSchool, MdWork } from "react-icons/md";
import { BsAwardFill, BsStopFill } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";

const Experience = () => {

  return (
    <Row className='section'>
      <Col id="experience" xs={11} sm={11} md={9} xl={7}>
        <Row id="experience-row">
          <Col xs={12}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="education">
              <Row>
                <Col id='pills-column' xs={1} md={3} lg={2}>
                  <Nav variant="pills" className="flex-column pills">
                    <Nav.Item>
                      <Nav.Link eventKey="education">
                        <MdSchool className='d-md-none'/>
                        <h6 class='d-none d-md-block'>Education</h6>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="professional">
                        <MdWork className='d-md-none'/>
                        <h6 class='d-none d-md-block'>Professional</h6>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="awards">
                        <BsAwardFill className='d-md-none'/>
                        <h6 class='d-none d-md-block'>Awards</h6>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="skills">
                        <FaWrench className='d-md-none'/>
                        <h6 class='d-none d-md-block'>Skills</h6>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col id='experience-main' xs={10} md={8} lg={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="education" className='experience-section'>
                      <Row>
                        <Col xs={4} sm={3} md={3}>
                          <img id='uva' src={uva} alt='uva'/>
                        </Col>
                        <Col xs={12} md={9}>
                          <h6 class='experience-section-top'>University of Virginia</h6>
                          <h4>B.S. Engineering and Applied Science - Electrical Engineering.</h4>
                          <p>GPA 3.364</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <h5>Capstone</h5>
                            <p>Managed robot's chassis development, circuit board design, component integration, and onboard PID controller for swarm robotics project utilizing computer vision and remote communication for optimized navigation through tools such as Inventor, Multisim, and Energia/C++.</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <h5>Coursework</h5>

                            <Row className='section-list'>
                              <Col xs={12} lg={6} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Software Development Methods</p>
                              </Col>
                              <Col xs={12} lg={6} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Embedded Computer Systems</p>
                              </Col>
                              <Col xs={12} lg={6} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Computer Networks</p>
                              </Col>
                              <Col xs={12} lg={6} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Microelectronics</p>
                              </Col>
                              <Col xs={12} lg={6} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Computer Vision</p>
                              </Col>
                              <Col xs={12} lg={6} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Autonomous Mobile Robotics</p>
                              </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <h5>Leadership</h5>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>ECE Fundamentals I, II, & III: Electronic Circuits Head Teacher's Assistant</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Engineering Club Project Manager & President</p>
                              </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <h5>Accomplishments</h5>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>4th nationwide ASEE Robotics Competition '14</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Structural Ingenuity Award and Cheri Mellilo Award at CANstruction '13</p>
                              </Col>
                            </Row>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="professional" className='experience-section'>
                      <Row>
                        <Col xs={3}>
                          <img id='uva' src={uva} alt='uva'/>
                        </Col>
                        <Col xs={12} md={9}>
                          <h6>University of Virginia</h6>
                          <h4>B.S. Engineering and Applied Science - Electrical Engineering.</h4>
                          <p>GPA 3.364</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="awards" className='experience-section'>
                      <Row>
                        <Col xs={3}>
                          <img id='uva' src={uva} alt='uva'/>
                        </Col>
                        <Col xs={12} md={9}>
                          <h6>University of Virginia</h6>
                          <h4>B.S. Engineering and Applied Science - Electrical Engineering.</h4>
                          <p>GPA 3.364</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="skills" className='experience-section'>
                      <Row>
                        <Col xs={3}>
                          <img id='uva' src={uva} alt='uva'/>
                        </Col>
                        <Col xs={12} md={9}>
                          <h6>University of Virginia</h6>
                          <h4>B.S. Engineering and Applied Science - Electrical Engineering.</h4>
                          <p>GPA 3.364</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Experience