
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/experience.css';

import { BsDashLg } from "react-icons/bs";

const Experience = () => {

  return (
    <Row className='section'>
      <Col id="experience" xs={11} sm={11} md={9} xl={7}>
        <Row id="experience-row">
          <Col xs={12}>
            <h1 id='name'>Exp</h1>
          </Col>
          <Col xs={12}>
            <div>
              <div><BsDashLg/> resume items - education, work experience</div>
              <div><BsDashLg/> fullstack</div>
              <div><BsDashLg/> stats? see example website</div>
              <div><BsDashLg/> awards</div>
              <div><BsDashLg/> nod to projects of late</div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Experience