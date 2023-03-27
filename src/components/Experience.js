
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import '../css/experience.css';
import uva from '../images/university-of-virginia-logo-black-and-white.png'
import apogee from '../images/APOGEE-Vertical Logo_Black.png'
import qed from '../images/qed-systems.png'

import { MdSchool, MdWork, MdCameraRoll } from "react-icons/md";
import { BsAwardFill, BsStopFill, BsShieldFillPlus, BsMusicNoteBeamed } from "react-icons/bs";
import { FaWrench, FaCertificate } from "react-icons/fa";
import { TiCode } from "react-icons/ti";
import { GiCarWheel } from "react-icons/gi";
import { TbMovie } from "react-icons/tb";

const Experience = () => {
  // to update
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
                            <h6 className='d-none d-md-block'>Education</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col xs={3} md={12}>
                        <Nav.Item>
                          <Nav.Link eventKey="professional">
                            <MdWork className='d-md-none'/>
                            <h6 className='d-none d-md-block'>Professional</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col xs={3} md={12}>
                        <Nav.Item>
                          <Nav.Link eventKey="awards">
                            <BsAwardFill className='d-md-none'/>
                            <h6 className='d-none d-md-block'>Awards</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col xs={3} md={12}>
                        <Nav.Item>
                          <Nav.Link eventKey="skills">
                            <FaWrench className='d-md-none'/>
                            <h6 className='d-none d-md-block'>Skills</h6>
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
                        <Col xs={4} sm={3} md={3} className='entry-img'>
                          <img id='uva' className='experience-img' src={uva} alt='uva'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 className='experience-section-top'>University of Virginia</h6>
                          <h4>B.S. Engineering and Applied Science - Electrical Engineering.</h4>
                          <p>GPA 3.364</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <h5>Capstone</h5>
                            <p>Managed robot's chassis development, circuit board design, component integration, and onboard PID controller for swarm robotics project utilizing computer vision and remote communication for optimized navigation through tools such as Inventor, Multisim, and Energia / C++.</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <h5>Coursework</h5>

                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Software Development Methods</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Embedded Computer Systems</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Computer Networks</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Microelectronics</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Computer Vision</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Autonomous Mobile Robotics</p>
                              </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <h5>Leadership</h5>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>ECE Fundamentals I, II, & III: Electronic Circuits Head T.A.</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Engineering Club Project Manager & President</p>
                              </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <h5>Accomplishments</h5>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>4th nationwide ASEE Robotics Competition '14</p>
                              </Col>
                              <Col xs={12} className='section-list-item'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Structural Ingenuity Award and Cheri Mellilo Award at CANstruction '13</p>
                              </Col>
                            </Row>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="professional" className='experience-section'>
                      <Row>
                        <Col xs={4} sm={3} md={3} className='entry-img'>
                          <img id='apogee' className='experience-img' src={apogee} alt='apogee'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 className='experience-section-top'>Apogee Integration</h6>
                          <h4>Computer Scientist & Data Engineer</h4>
                          <p>October 2017 - Present</p>
                        </Col>
                        {/* paraphrase down to just describe my roll */}
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Initiated, researched, pitched, engineered, and led a team of 5 on a project with impact beyond the team's entire branch by delivering a PWA web application powered by a Neo4j backend database, a GraphQL API, and dashboards utilizing ElkJS, D3, and Plotly for visualization.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Implemented better practices within my teams through Git version control, written articles outlining lessons learned with portions of the codebase as demonstration, and headed up agile sprints using JIRA.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Became the go-to data engineer for Python scripting and developing a myriad of algorithms that determined data integrity and outlined data disparities utilizing anaconda libraries like Pandas, spaCy, Difflib, and Plotly. Outputted analysis and new data files to enhance the team's interpretation of underlying issues.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Spearheaded Tableau backend optimization and dashboard visualization of NGA JIRA data resulting in a 96% reduction in turn around time. Due to the massive jump in capability, the tool was widely adopted by several teams within the scope of the broader effort.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Pioneered the development of an R Shiny / shinydashboard web app that would house the data connection, ETL, analysis, and front end visualization in one compact tool (something that Tableau at the time could not handle). The tool overtook static briefings for NGA leadership providing rapid answers. A redesigned python version was explored in Django, Flask, and ultimately built using Dash to be deployed via Cloud Foundry.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Created an ASP.NET Core MVC web app with the physics powered by STK Components and visualization via CesiumJS. Focused on satellite and geospatial overhead modeling and simulation for preemptive satellite strategy and exploration based on optimization and resulting statistics.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Developed workflow scripts that streamlined company processes and amplified efficiency by over 50% using Google Apps tethered together through Google App Script.</p>
                              </Col>
                            </Row>
                        </Col>
                      </Row>


                      <Row className='experience-middle'>
                        <Col xs={4} sm={3} md={3} className='entry-img'>
                          <img id='uva-2' className='experience-img' src={uva} alt='uva-2'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 className='experience-section-top'>University of Virginia</h6>
                          <h4>Research Intern and Lab Project Developer</h4>
                          <p>May 2016 - May 2017</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Researched and designed 20+ lab projects for online students. Generated professional material using tools such as MATLAB, NI VirtualBench, Multisim, and Ultiboard.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Integrated the engineered material into students online classes using HTML / CSS / ES6.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Enhanced marketability of both UVA Electrical Engineering labs and the National Instruments VirtualBench.</p>
                              </Col>
                            </Row>
                        </Col>
                      </Row>


                      <Row>
                        <Col xs={4} sm={3} md={3} className='entry-img'>
                          <img id='qed' className='experience-img' src={qed} alt='qed'/>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 className='experience-section-top'>Q.E.D. Systems</h6>
                          <h4>AutoCAD Engineer</h4>
                          <p>August 2014 - August 2015</p>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Developed technical AutoCAD drawings ~25% faster than the target with a high level of communication, collaboration, and attention to detail.</p>
                              </Col>
                            </Row>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="awards" className='experience-section'>
                      <Row>
                        <Col xs={12} className='entry-title'>
                          <h4 className='ordinary-title'>Awards & Leadership</h4>
                        </Col>
                        <Col xs={12} className=''>
                            <Row className='section-list'>
                              <Col xs={12} className='section-list-item job'>
                                <BsShieldFillPlus className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Murray Cinema Inc: Waiting For April (2023)</h6> - Executive producer for <i>Waiting For April</i> short film as the owner of Murray Cinema Inc.</div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsAwardFill className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>NEE Contract Award (2022)</h6> - “Thank you for your outstanding contributions to the Geospatial Intelligence mission. Your effort and dedication are greately appreciated.”</div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsAwardFill className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Apogee Supernova Award (2021)</h6> - “Primary engineer for 4 key projects supporting the NGAArchitecture & Engineering Group. Spearheaded the data viz roadmap for the transformation to Model-Based System Engineering. Led enterprise engineering efforts for JIRA optimization. Recognized by the client and govt as the SME for GEOINT Enterprise Architecture improvements using Neo4J graph DB. Corporately, creates leadership roles and leverages his engineering expertise to expand Apogee.”</div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsAwardFill className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Apogee Spot Award (2019)</h6> - “Highly respected and hardworking APOGEE Foundry Lab leader. Busy with his own internal and external deadlines, recognized Apogee was shorthanded organizing the rollout of APOGEE's flagship data visualization training: Tableau Essentials. Can-do attitude, communications skills, and proficiency reflect greatly on both his and APOGEE's success and reputation.”</div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsAwardFill className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Apogee Spot Award (2018)</h6> - “Completed a major migration and numerous milestone achievements in the design & development of the APOGEE flagship modeling & simulation software: OCULUS. Aimed to enhance and replace client rapid analysis tools used to support NRO satellite and DoD UAV programs. Generated a lot of support from company management.”</div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsShieldFillPlus className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Python Community Growth</h6> - Took responsibility for understanding and improving NGA's python community by pushing for more resource consolidation, improved collaboration through migrating over to a better communication platform, and heavily insisting on contributions via posting open-source code.</div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsShieldFillPlus className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Short Film Productions</h6> - First assistant director on two major short film projects that had a budget upwards of $10k and $20k.</div>
                              </Col>
                            </Row>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="skills" className='experience-section'>
                      <Row>
                        <Col xs={12} className='entry-title'>
                          <h4 className='ordinary-title'>Skills & Interests</h4>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 className='experience-section-top'>Technical</h6>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Python</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Anaconda</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Python Dash</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Flask</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Django</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>React</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>HTML</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>CSS</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Javascript ES6</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>JQuery</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Bootstrap</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>NodeJS</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>D3</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Plotly</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>R</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>R Shiny</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Git</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Neo4j</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>GraphQL</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Tableau</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Power BI</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Google App Script</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Agile Development</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>CesiumJS</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>C#</p>
                              </Col>
                              <Col xs={6} sm={8} lg={9} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Visual Studio Code</p>
                              </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 className='experience-section-top'>Certifications</h6>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={12} md={6} className='section-list-item job'>
                                <FaCertificate className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Tableau Certified Data Analyst</p>
                              </Col>
                              <Col xs={12} md={6} className='section-list-item job'>
                                <FaCertificate className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>STK Level 1 Certification</p>
                              </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={9} className='entry-title'>
                          <h6 className='experience-section-top'>Extracurricular</h6>
                        </Col>
                        <Col xs={12} className='sub-section'>
                            <Row className='section-list'>
                              <Col xs={12} md={6} className='section-list-item job'>
                                <MdCameraRoll className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>5 years of film photography - <a target='_blank' href='https://rbrettparsons.com' rel="noreferrer">rbrettparsons.com</a></p>
                              </Col>
                              <Col xs={12} md={6} className='section-list-item job'>
                                <GiCarWheel className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Autocross Racing</p>
                              </Col>
                              <Col xs={12} md={6} className='section-list-item job'>
                                <TbMovie className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Short Film Production</p>
                              </Col>
                              <Col xs={12} md={6} className='section-list-item job'>
                                <BsMusicNoteBeamed className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Music Production</p>
                              </Col>
                            </Row>
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