
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import '../css/experience.css';
import uva from '../images/university-of-virginia-logo-black-and-white.png'
import apogee from '../images/APOGEE-Vertical Logo_Black.png'
import qed from '../images/qed-systems.png'

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
                <Col id='pills-column' xs={12} md={3} lg={2}>
                  <Nav variant="pills" className="flex-column pills">
                    {/* use row and col */}
                    <Row>
                      <Col xs={3} md={12}>
                        <Nav.Item>
                          <Nav.Link eventKey="education">
                            <MdSchool className='d-md-none'/>
                            <h6 class='d-none d-md-block'>Education</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col xs={3} md={12}>
                        <Nav.Item>
                          <Nav.Link eventKey="professional">
                            <MdWork className='d-md-none'/>
                            <h6 class='d-none d-md-block'>Professional</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col xs={3} md={12}>
                        <Nav.Item>
                          <Nav.Link eventKey="awards">
                            <BsAwardFill className='d-md-none'/>
                            <h6 class='d-none d-md-block'>Awards</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col xs={3} md={12}>
                        <Nav.Item>
                          <Nav.Link eventKey="skills">
                            <FaWrench className='d-md-none'/>
                            <h6 class='d-none d-md-block'>Skills</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Row>
                  </Nav>
                </Col>
                <Col id='experience-main' xs={12} md={8} lg={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="education" className='experience-section'>
                      <Row>
                        <Col xs={4} sm={3} md={3}>
                          <img id='uva' className='experience-img' src={uva} alt='uva'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
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
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Software Development Methods</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Embedded Computer Systems</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Computer Networks</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Microelectronics</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Computer Vision</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
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
                                <p class='sub-section-text'>ECE Fundamentals I, II, & III: Electronic Circuits Head T.A.</p>
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
                        <Col xs={4} sm={3} md={3}>
                          <img id='apogee' className='experience-img' src={apogee} alt='apogee'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 class='experience-section-top'>Apogee Integration</h6>
                          <h4>Computer Scientist & Data Engineer</h4>
                          <p>October 2017 - Present</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Initiated, pitched, researched, planned, engineered, and led a team of 5 on a project that impacted the team's entire branch through delivering a PWA that pairs
                                an updated codebase that puts emphasis on an intuitive user experience that leadership can use effortlessly and a backend powered by the graph database
                                Neo4j to produce live data graphics. Features like dynamic site navigation via an ElkJS and D3 interactive visualization, a hub of Neo4j driven dashboards
                                with Plotly interconnected charts, and a GraphQL API to give backend and front-end independence for future versatility. Implemented better practices within
                                the team through git version control, adding portions of the codebase to the computer science community, and JIRA project management. And all done 2
                                months early from the proposed deadline.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Produced several Python scripting efforts as the team's lead data scientist to process data and develop a myriad of algorithms using 
                                libraries like Pandas, spaCy, and Difflib that illustrate data integrity and outline data disparities. Always demonstrated findings by outputting the algorithm's 
                                statistics along with new data files that enhance the team's interpretation of the underlying issue. Most often delivered scripts and results in less than 75% of the time allotted.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Spearheaded the processing and Tableau visualization of NGA JIRA project data. Largely consisting of backend database optimization, 
                                accelerated the process which resulted in the elapsed time being scaled down from 10 hours down to 23 minutes (~96% reduction). Generated a dynamic dashboard 
                                demonstrating an organization's effectiveness within NGA. Due to the massive jump in capability, the tool was widely adopted by several teams within the scope of the broader effort.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Pioneered the development of an R Shiny / shinydashboard web app to house the data connection, ETL, analysis, and interactive Plotly 
                                visualizations in one compact tool for NGA's Office of Strategic Operations. Illustrated and outlined manpower and position-related data questions and solutions 
                                which in turn quickly created briefings and data-driven visualizations to answer senior NGA leadership questions. Later, a redesigned python version was explored 
                                in Django, Flask, and ultimately built using Dash to be deployed via Cloud Foundry.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Created an ASP.NET Core MVC web app with the physics powered by STK Components and visualization via CesiumJS. Focused on satellite 
                                and geospatial overhead modeling and simulation for preemptive satellite strategy and exploration based on optimization and resulting statistics.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Developed workflow scripts that streamlined company processes and amplified efficiency by over 50% using Google Apps tethered together through Google App Script.</p>
                              </Col>
                            </Row>
                        </Col>
                      </Row>


                      <Row className='experience-middle'>
                        <Col xs={4} sm={3} md={3}>
                          <img id='uva-2' className='experience-img' src={uva} alt='uva-2'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 class='experience-section-top'>University of Virginia</h6>
                          <h4>Research Intern and Lab Project Developer</h4>
                          <p>May 2016 - May 2017</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Researched and designed 20+ lab projects for online student consumption. Generated professional material that enhanced marketability of both UVA ECE labs and NI VirtualBench products using MATLAB, NI VirtualBench, and Multisim/Ultiboard. Along with engineered labs, material included an online workflow using HTML/CSS/JavaScript that seamlessly integrated into classes and maximizes student learning and creativity.</p>
                              </Col>
                            </Row>
                        </Col>
                      </Row>


                      <Row>
                        <Col xs={4} sm={3} md={3}>
                          <img id='qed' className='experience-img' src={qed} alt='qed'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 class='experience-section-top'>Q.E.D. Systems</h6>
                          <h4>AutoCAD Engineer</h4>
                          <p>August 2014 - August 2015</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p class='sub-section-text'>Developed technical AutoCAD drawings ~25% faster than the target with a high level of attention to detail, communication, and collaboration.</p>
                              </Col>
                            </Row>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="awards" className='experience-section'>
                      <Row>
                        <Col xs={3}>
                          <img id='uva' className='experience-img' src={uva} alt='uva'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6>University of Virginia</h6>
                          <h4>B.S. Engineering and Applied Science - Electrical Engineering.</h4>
                          <p>GPA 3.364</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="skills" className='experience-section'>
                      <Row>
                        <Col xs={3}>
                          <img id='uva' className='experience-img' src={uva} alt='uva'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
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