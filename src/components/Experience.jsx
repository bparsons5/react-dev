import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import { MdWork, MdCameraRoll, MdLightbulb } from 'react-icons/md';
import { FaBookOpen } from "react-icons/fa";
import { BsAwardFill, BsStopFill, BsShieldFillPlus, BsMusicNoteBeamed } from 'react-icons/bs';
import { FaCertificate } from 'react-icons/fa';
import { TiCode } from 'react-icons/ti';
import { GiCarWheel } from 'react-icons/gi';
import { TbMovie } from 'react-icons/tb';
import psu from '../images/psu.png';
import whiteboard from '../images/wb.png';
import wbpsu from '../images/wb-psu-solid.png';
import leadingpath from '../images/leading-path.jpeg';
import qed from '../images/qed-systems.png';
import apogee from '../images/APOGEE-Vertical Logo_Black.png';
import uva from '../images/university-of-virginia-logo-black-and-white.png';

import '../css/experience.css';

const Experience = () => {
	/*
  * open layers, ag-grid, npm-link, d3, RESTful APIs
  * keycloak, pgadmin, redux, jenkins, jest, babel, nginx
  * focus on data visualization, user experience, and scalability with creativity and innovation
  * multiple data sources
  * feature heavy web applications with custom layouts and workflows
  * lead designer for multiple projects - balancing up to 5 different projects
  * sprint planning, agile, scrum, kanban, lean, and user stories
  *
  */

	const experience = [
		{
			key: 'professional',
			category: 'Professional',
		},
		{
			key: 'awards',
			category: 'Awards',
		},
		{
			key: 'skills',
			category: 'Skills',
		},
		{
			key: 'education',
			category: 'Education',
		},
	];

	const professionalData = [
		{
			key: 'whiteboard',
			company: 'Whiteboard / Penn State Applied Research Lab',
			photo: wbpsu,
			small: false,
			title: 'Senior Full-Stack Software Engineer',
			date: '2024',
			bullets: [
				'Full-stack developer proficient in building responsive user interfaces with React, coupled with robust PostgreSQL databases and Express.js APIs. Heavily experienced in diverse data visualization tools (OpenLayers, D3.js, Plotly, WebGL, and D3FC), and currently learning Kubernetes to deploy the Dockerized MVP. Expertise in big data query & visualization. Utilizing LLMs to streamline development workflows.',
			],
		},
		{
			key: 'leadingpath',
			company: 'Leading Path',
			photo: leadingpath,
			small: false,
			title: 'Senior Software Engineer',
			date: '2023',
			bullets: [
				'Quickly adapted to new team, project, and codebase via highly organized documentation and resourceful solutions to integrate feature updates for a MERN stack app (React, MongoDB, PostgreSQL, Docker). Consolidated processes in a multi-project codebase to reduce the barrier of entry and optimize boot time.',
			],
		},
		{
			key: 'apogee',
			company: 'Apogee Integration',
			photo: apogee,
			small: true,
			title: 'Computer Scientist & Data Engineer',
			date: '2017 - 2023',
			bullets: [
				'Spearheaded a team of 5 on a project that transformed the branch\'s intel, operations, and policy. Developed a user-friendly PWA with scalable UI (Node.js). Implemented custom site navigation and interactive visualization (ElkJS / D3), 25+ interconnected database-driven dashboards (Neo4j / Plotly / Leaflet), and a flexible API (GraphQL / Apollo). Completed 2 months ahead of schedule.',
				'Engineered Python scripts as the team’s lead data scientist to process data and formulate algorithms (Pandas / spaCy / Difflib) illustrating data integrity and outlining data disparities. Resulted in 18+ optimized artifacts utilized by all of NGA.',
				'Revolutionized NGA JIRA data engineering and visualization (Tableau). Optimized database connection reduced ETL time from 10 hours to 23 minutes (~96% reduction). Created an impact effectiveness dashboard for NGA. Widely adopted tool due to the significant capability enhancement.',
				'Built 4 compact web apps (R Shiny / Plotly) integrating data connection, ETL, analysis, and interactive visualizations eliminating 2 previously tedious steps. Provided NGA leadership insights on manpower and position-related data. Explored Django and Flask before finalizing in Dash for Python-based redesign.',
				'Created an ASP.NET Core MVC web app with physics powered by STK Components and visualization via CesiumJS. Focused on satellite and geospatial overhead modeling and simulation for preemptive satellite strategy. Incorporated 5-10 features into the product each week.',
				'Programmed Google Apps Scripts, connecting Google Apps to streamline company processes, resulting in a ~50% increase in efficiency.',
			],
		},
		{
			key: 'uva-2',
			company: 'University of Virginia',
			photo: uva,
			small: true,
			title: 'Research Intern and Lab Project Developer',
			date: '2016 - 2017',
			bullets: [
				'Researched and designed 20+ lab projects for online student consumption (HTML / CSS / JavaScript / MATLAB / Multisim / Ultiboard). ',
				'Produced 100% of the professional material used in expos and advertising that enhanced the marketability of both UVA ECE and NI VirtualBench.',
			],
		},
		{
			key: 'qed',
			company: 'Q.E.D. Systems',
			photo: qed,
			small: false,
			title: 'AutoCAD Engineer',
			date: '2014 - 2015',
			bullets: [
				'Developed technical AutoCAD drawings ~25% faster than the target with a high level of communication, collaboration, and attention to detail.',
			],
		},
	];

	const awards = [
		{
			key: 'murray-cinema-inc',
			icon: BsShieldFillPlus,
			title: 'Murray Cinema Inc: Memory Project (2025)',
			description: 'Producer & 1st Assistant Director for Memory Project, a short film as the owner of Murray Cinema Inc.',
			link: 'https://www.timothyparsons.me/work/memory-project',
		},
		{
			key: 'murray-cinema-inc',
			icon: BsShieldFillPlus,
			title: 'Murray Cinema Inc: Waiting For April (2025)',
			description: 'Executive producer for Waiting For April, a short film as the owner of Murray Cinema Inc.',
			link: 'https://www.timothyparsons.me/work/waitingforapril',
		},
		{
			key: 'nee-contract-award',
			icon: BsAwardFill,
			title: 'NEE Contract Award (2022)',
			description: 'Appreciated for outstanding contributions to Geospatial Intelligence mission.',
		},
		{
			key: 'apogee-supernova-award',
			icon: BsAwardFill,
			title: 'Apogee Supernova Award (2021)',
			description: 'Primary engineer on 4 key NGA projects. Orchestrated data viz roadmap for Model-Based System Engineering. Led JIRA optimization and recognized as SME for GEOINT Enterprise Architecture improvements. Creates leadership roles and expands Apogee leveraging engineering expertise.',
		},
		{
			key: 'apogee-spot-award2',
			icon: BsAwardFill,
			title: 'Apogee Spot Award (2019)',
			description: 'Respected APOGEE Foundry Lab leader. Organized rollout of flagship data visualization training. Demonstrates can-do attitude, strong communication, and proficiency benefiting APOGEE\'s success and reputation.',
		},
		{
			key: 'apogee-spot-award1',
			icon: BsAwardFill,
			title: 'Apogee Spot Award (2018)',
			description: 'Completed a major software migration for OCULUS. Enhanced client analysis tools for NRO satellite and DOD UAV programs. Generated strong support from company management.',
		},
		{
			key: 'python-community-growth',
			icon: BsShieldFillPlus,
			title: 'Python Community Growth',
			description: 'Grew NGA’s Python community by promoting open-source code, enabling agency collaboration, and consolidating Python resources.',
		},
	];

	const skills = {
		key: 'skills',
		category: 'Skills',
		title: 'Skills & Interests',
		sections: [
			{
				title: 'Technical',
				xs: 6,
				sm: 4,
				md: 4,
				lg: 3,
				bullets: [
					{
						icon: TiCode,
						text: 'Node.js',
					},
					{
						icon: TiCode,
						text: 'React',
					},
					{
						icon: TiCode,
						text: 'D3.js',
					},
					{
						icon: TiCode,
						text: 'D3FC.js',
					},
					{
						icon: TiCode,
						text: 'WebGL',
					},
					{
						icon: TiCode,
						text: 'GraphQL',
					},
					{
						icon: TiCode,
						text: 'Python',
					},
					{
						icon: TiCode,
						text: 'R',
					},
					{
						icon: TiCode,
						text: 'R Shiny',
					},
					{
						icon: TiCode,
						text: 'Git',
					},
					{
						icon: TiCode,
						text: 'JavaScript ES6',
					},
					{
						icon: TiCode,
						text: 'TypeScript',
					},
					{
						icon: TiCode,
						text: 'Docker',
					},
					{
						icon: TiCode,
						text: 'Express.js',
					},
					{
						icon: TiCode,
						text: 'Plotly.js',
					},
					{
						icon: TiCode,
						text: 'Cesium.js',
					},
					{
						icon: TiCode,
						text: 'C#',
					},
					{
						icon: TiCode,
						text: 'SQL',
					},
					{
						icon: TiCode,
						text: 'Neo4j',
					},
					{
						icon: TiCode,
						text: 'MongoDB',
					},
					{
						icon: TiCode,
						text: 'PostgreSQL',
					},
					{
						icon: TiCode,
						text: 'AWS',
					},
					{
						icon: TiCode,
						text: 'APIs',
					},
					{
						icon: TiCode,
						text: 'Tableau',
					},
					{
						icon: TiCode,
						text: 'Power BI',
					},
					{
						icon: TiCode,
						text: 'Google App Script',
					},
					{
						icon: TiCode,
						text: 'HTML/CSS',
					},
					{
						icon: TiCode,
						text: 'Visual Studio Code',
					},
				],
			},
			{
				title: 'Certifications',
				xs: 12,
				sm: 12,
				md: 6,
				lg: 6,
				bullets: [
					{
						icon: FaCertificate,
						text: 'Tableau Certified Data Analyst',
					},
					{
						icon: FaCertificate,
						text: 'STK Level 1 Certification',
					},
				],
			},
			{
				title: 'Extracurricular',
				xs: 12,
				sm: 12,
				md: 6,
				lg: 6,
				bullets: [
					{
						icon: MdCameraRoll,
						text: <span>
							8 years of film photography -
							<a target="_blank" href="https://rbrettparsons.com" rel="noreferrer">rbrettparsons.com</a>
            </span>,
					},
					{
						icon: BsMusicNoteBeamed,
						text: 'Music Production',
					},
					{
						icon: TbMovie,
						text: 'Short Film Production',
					},
					{
						icon: GiCarWheel,
						text: 'Autocross Racing',
					},
				],
			},
		],
	};

	const education = {
		key: 'uva',
		photo: uva,
		category: 'Education',
		title: 'University of Virginia',
		gpa: '3.364',
		description: 'B.S. Engineering and Applied Science - Electrical Engineering',
		capstone: 'Managed robot\'s chassis development, circuit board design, component integration, and onboard PID controller for swarm robotics project utilizing computer vision and remote communication for optimized navigation through tools such as Inventor, Multisim, and Energia / C++.',
		sections: [
			{
				title: 'Coursework',
				bullets: [
					'Software Development Methods',
					'Embedded Computer Systems',
					'Computer Networks',
					'Microelectronics',
					'Computer Vision',
					'Autonomous Mobile Robotics',
				],
			},
			{
				title: 'Leadership',
				bullets: [
					'ECE Fundamentals I, II, & III: Electronic Circuits Head T.A.',
					'Engineering Club Project Manager & President',
				],
			},
			{
				title: 'Accomplishments',
				bullets: [
					'4th nationwide ASEE Robotics Competition \'14',
					'Structural Ingenuity Award and Cheri Mellilo Award at CANstruction \'13',
				],
			},
		],
	};

	// to update
	return (
		<Row className="section">
			<Col id="experience" xs={11} sm={11} md={9} xl={7}>
				<Row id="experience-row">
					<Col xs={12}>
						<Tab.Container id="left-tabs-example" defaultActiveKey={experience[0].key}>
							<Row>
								<Col id="pills-column" xs={12} md={3} lg={2}>
									<Nav variant="pills" className="flex-column pills">
										{/* use row and col */}
										<Row>
											{experience.map((experience) => (
												<Col xs={3} md={12} key={experience.key}>
													<Nav.Item>
														<Nav.Link eventKey={experience.key}>
															{experience.category === 'Professional' && <MdWork className="d-md-none" />}
															{experience.category === 'Awards' && <BsAwardFill className="d-md-none" />}
															{experience.category === 'Skills' && <MdLightbulb className="d-md-none" />}
															{experience.category === 'Education' && <FaBookOpen className="d-md-none" />}
															<h6 className="d-none d-md-block">{experience.category}</h6>
														</Nav.Link>
													</Nav.Item>
												</Col>
											))}
										</Row>
									</Nav>
								</Col>

								<Col id="experience-main" xs={12} md={8} lg={9}>
									<Tab.Content>

										<Tab.Pane eventKey="professional" className="experience-section">
											{professionalData.map((job) => (
												<Row key={job.key}>
													<Col xs={3} sm={2} md={2} className="entry-img leadingpath-col">
														<img id={job.key} className={job.small ? 'experience-img-small' : 'experience-img'} src={job.photo} alt={job.key} />
													</Col>
													<Col xs={12} md={9} className="entry-title">
														<h6 className="experience-section-top">{job.company}</h6>
														<h4>{job.title}</h4>
														<p>{job.date}</p>
													</Col>
													<Col xs={12} className="sub-section">
														<Row className="section-list">
															{job.bullets.map((bullet, index) => (
																<Col xs={12} className="section-list-item job" key={job.key + index}>
																	<BsStopFill className="section-list-icon" />
																	<p className="sub-section-text">{bullet}</p>
																</Col>
															))}
														</Row>
													</Col>
												</Row>
											))}
										</Tab.Pane>

										<Tab.Pane eventKey="awards" className="experience-section">
											<Row>
												<Col xs={12} className="entry-title">
													<h4 className="ordinary-title">Awards & Leadership</h4>
												</Col>
												<Col xs={12} className="">
													<Row className="section-list">
														{ awards.map((award) => (
															<Col xs={12} className="section-list-item job" key={award.key}>
																<award.icon className="section-list-identifier" />
																<div className="sub-section-text-xlarge">
																	<h6 className="award-title">{award.title}</h6>
																	{' '}
																	-
																	{' '}
																	<i>{award.description}</i>
																	{award.link &&
																		<><span>{' - '}</span><a href={award.link} target='_blank'><i>(link)</i></a></>
																	}
																</div>
															</Col>
														))}
													</Row>
												</Col>
											</Row>
										</Tab.Pane>

										<Tab.Pane eventKey="skills" className="experience-section">
											<Row>
												<Col xs={12} className="entry-title">
													<h4 className="ordinary-title">Skills & Interests</h4>
												</Col>
												{
													skills.sections.map((section) => (
														<span key={section.title}>
															<Col xs={12} md={9} className="entry-title">
																<h6 className="experience-section-top">{section.title}</h6>
															</Col>
															<Col xs={12} className="sub-section">
																<Row className="section-list">
																	{section.bullets.map((bullet, index) => (
																		<Col xs={section.xs} sm={section.sm} md={section.md} lg={section.lg} className="section-list-item job" key={section.title + index}>
																			<bullet.icon className="section-list-icon-large" />
																			<p className="sub-section-text-large">{bullet.text}</p>
																		</Col>
																	))}
																</Row>
															</Col>
														</span>
													))
												}
											</Row>
										</Tab.Pane>

										<Tab.Pane eventKey="education" className="experience-section">
											<Row>
												<Col xs={4} sm={3} md={3} className="entry-img">
													<img id={education.key} className="experience-img" src={education.photo} alt={education.key} />
												</Col>
												<Col xs={12} md={9} className="entry-title">
													<h6 className="experience-section-top">{education.title}</h6>
													<h4>{education.description}</h4>
													<p>{education.gpa}</p>
												</Col>
												<Col xs={12} className="sub-section">
													<h5>Capstone</h5>
													<p>{education.capstone}</p>
												</Col>
												{education.sections.map((section) => (
													<Col xs={12} className="sub-section" key={section.title}>
														<h5>{section.title}</h5>
														<Row className="section-list">
															{section.bullets.map((bullet, index) => (
																<Col xs={12} className="section-list-item" key={index}>
																	<BsStopFill className="section-list-icon" />
																	<p className="sub-section-text">{bullet}</p>
																</Col>
															))}
														</Row>
													</Col>
												))}
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
	);
};

export default Experience;
