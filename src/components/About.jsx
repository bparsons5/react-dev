import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'

import '../css/about.css';
import { BsCode } from 'react-icons/bs';
import profilePicture from '../images/profile-picture.png';
import newpfp from '../images/zermatt.jpg';

const About = () => {
	const skills = ['Data Intensive Applications', 'UI/UX Design', 'Creative-based Development'];

	return (
		<Row className="section">
			<Col id="about" xs={11} sm={11} md={9} xl={7}>
				<Row id="about-row">
					<Col xs={12} md={8}>
						<h3 id="about-description">I am an engineer whose passion for multiple art forms leads to creative & visual web applications with data-driven analytics and intuitive graphics.</h3>
						<h6 id="about-technical">main techincal interests</h6>
						<div id="about-skills">
							{skills.map((skill) => (
								<span key={skill}>
									<BsCode className="about-skills-icon" />
									{skill}
								</span>
							))}
						</div>
						<p id="about-resume">
							for more skills, scroll down or check out my
							<a id="about-resume-link" href="https://docs.google.com/document/d/1uGI0c02SQK97FTZHn3qWhFaRsofIdNBMOm7sDcPxfwU/edit?usp=share_link" target="_blank" rel="noreferrer">{' resume'}</a>
						</p>
					</Col>
					<Col xs={6} md={4}>
						<img id="about-profile" src={newpfp} alt="about-profile" />
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default About;
