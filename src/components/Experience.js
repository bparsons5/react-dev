
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

let skills = `JavaScript, Python, R, C#, Node.js, React, D3, Plotly, CesiumJS, APIs, GraphQL, Bootstrap, Git,
Amazon Web Services, HTML, CSS, JS, jQuery, TypeScript, SQL, R Shiny, Google App Script, Visual Studio Code,
Neo4j, Tableau, Power BI`;

let skillsArr = skills.split(/, |\n/)

const Experience = () => {
  // to update
  return (
    <Row className='section'>
      <Col id="experience" xs={11} sm={11} md={9} xl={7}>
        <Row id="experience-row">
          <Col xs={12}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="professional">
              <Row>
                <Col id='pills-column' xs={12} md={3} lg={2}>
                  <Nav variant="pills" className="flex-column pills">
                    {/* use row and col */}
                    <Row>
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
                      <Col xs={3} md={12}>
                        <Nav.Item>
                          <Nav.Link eventKey="education">
                            <MdSchool className='d-md-none'/>
                            <h6 className='d-none d-md-block'>Education</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Row>
                  </Nav>
                </Col>
                <Col id='experience-main' xs={12} md={8} lg={9}>
                  <Tab.Content>
                    
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
                                <p className='sub-section-text'>Spearheaded a team of 5 on a project that transformed the branch's intel, operations, and policy. Developed a user-friendly PWA with scalable UI (Node.js). Implemented custom site navigation and interactive visualization (ElkJS / D3), 25+ interconnected database-driven dashboards (Neo4j / Plotly / Leaflet), and a flexible API (GraphQL / Apollo). Completed 2 months ahead of schedule.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Engineered Python scripts as the team’s lead data scientist to process data and formulate algorithms (Pandas / spaCy / Difflib) illustrating data integrity and outlining data disparities. Resulted in 18+ optimized artifacts utilized by all of NGA.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Revolutionized NGA JIRA data engineering and visualization (Tableau). Optimized database connection reduced ETL time from 10 hours to 23 minutes (~96% reduction). Created an impact effectiveness dashboard for NGA. Widely adopted tool due to the significant capability enhancement.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Built 4 compact web apps (R Shiny / Plotly) integrating data connection, ETL, analysis, and interactive visualizations eliminating 2 previously tedious steps. Provided NGA leadership insights on manpower and position-related data. Explored Django and Flask before finalizing in Dash for Python-based redesign.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Created an ASP.NET Core MVC web app with physics powered by STK Components and visualization via CesiumJS. Focused on satellite and geospatial overhead modeling and simulation for preemptive satellite strategy. Incorporated 5-10 features into the product each week.</p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Programmed Google Apps Scripts, connecting Google Apps to streamline company processes, resulting in a ~50% increase in efficiency.</p>
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
                                <p className='sub-section-text'>Researched and designed 20+ lab projects for online student consumption (HTML / CSS / JavaScript / MATLAB / Multisim / Ultiboard). </p>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsStopFill className='section-list-icon'/>
                                <p className='sub-section-text'>Produced 100% of the professional material used in expos and advertising that enhanced the marketability of both UVA ECE and NI VirtualBench.</p>
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
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Murray Cinema Inc: Waiting For April (2023)</h6> - <i>Executive producer for <b>Waiting For April</b> short film as the owner of Murray Cinema Inc.</i></div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsAwardFill className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>NEE Contract Award (2022)</h6> - <i>Appreciated for outstanding contributions to Geospatial Intelligence mission.</i></div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsAwardFill className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Apogee Supernova Award (2021)</h6> - <i>Primary engineer on 4 key NGA projects. Orchestrated data viz roadmap for Model-Based System Engineering. Led JIRA optimization and recognized as SME for GEOINT Enterprise Architecture improvements. Creates leadership roles and expands Apogee leveraging engineering expertise.</i></div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsAwardFill className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Apogee Spot Award (2019)</h6> - <i>Respected APOGEE Foundry Lab leader. Organized rollout of flagship data visualization training. Demonstrates can-do attitude, strong communication, and proficiency benefiting APOGEE's success and reputation.</i></div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsAwardFill className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Apogee Spot Award (2018)</h6> - <i>Completed a major software migration for OCULUS. Enhanced client analysis tools for NRO satellite and DOD UAV programs. Generated strong support from company management.</i></div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsShieldFillPlus className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Python Community Growth</h6> - <i>Grew NGA’s Python community by promoting open-source code, enabling agency collaboration, and consolidating Python resources.</i></div>
                              </Col>
                              <Col xs={12} className='section-list-item job'>
                                <BsShieldFillPlus className='section-list-identifier'/>
                                <div className='sub-section-text-xlarge'><h6 className='award-title'>Short Film Productions</h6> - <i>First assistant director on two major short film projects that had a budget upwards of $10k and $20k.</i></div>
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
                            {skillsArr ? skillsArr.map((x, index) => {
                                return <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                    <TiCode className='section-list-icon-large'/>
                                    <p className='sub-section-text-large'>{x}</p>
                                  </Col>
                            }) : ''}
                              {/* <Col xs={6} sm={4} lg={3} className='section-list-item job'>
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
                                <p className='sub-section-text-large'>TypeScript</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>JQuery</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>SQL</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Amazon Web Services (AWS)</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>Heroku</p>
                              </Col>
                              <Col xs={6} sm={4} lg={3} className='section-list-item job'>
                                <TiCode className='section-list-icon-large'/>
                                <p className='sub-section-text-large'>APIs</p>
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
                              </Col> */}
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
                                <p className='sub-section-text-large'>7 years of film photography - <a target='_blank' href='https://rbrettparsons.com' rel="noreferrer">rbrettparsons.com</a></p>
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