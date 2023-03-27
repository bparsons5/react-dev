
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import weeklymoviescores from '../images/weeklymoviescores.png'

import '../css/projects.css';

const Projects = () => {

  return (
    <Row className='section'>
      <Col id="projects" xs={11} sm={11} md={9} xl={7}>
        <Row id="projects-row">
          <Col xs={12}>
            <h1 id='name'>Projects</h1>
          </Col>
          <Row className='project'>
            <Col className='project-photo' xs={12} sm={7}>
              <a target='_blank' rel="noreferrer" href='https://weeklymoviescores.herokuapp.com/'><img id='weeklymoviescores' className='' src={weeklymoviescores} alt='weekly movie scores'/></a>
            </Col>
            <Col className='project-description' xs={12} sm={5}>
              <h2 className='tagline'>Spotify App</h2>
              <h4 className='title'>Weekly Movie Scores</h4>
              <p className='description'>An automated spotify playlist and web app to view the playlist</p>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  )
}

export default Projects