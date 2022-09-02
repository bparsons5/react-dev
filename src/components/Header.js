// import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'

import '../css/header.css';
// import $ from 'jquery';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCode } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdCameraRoll } from "react-icons/md";

const Header = () => {
    // const location = useLocation()
    
    return (
        <>
            <Navbar key='md' expand='md' collapseOnSelect>
                <Container fluid>
                    <a href='/' className='logo'>
                        {/* <img src={require('../images/logo-white.png')} height='26' className='ms-2'/> is this how externals are supposed to be called? */}
                        <FontAwesomeIcon icon={faCode} />
                        <span className='logo-name'>R. Brett Parsons</span>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-$'md'`} aria-labelledby={`offcanvasNavbarLabel-expand-$'md'`} placement="end">
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <a type='button' href='https://drive.google.com/file/d/1UFBZjwpirNNVCuxiPMb0rGs2dQqCP0RE/view?usp=sharing' target='_blank' rel='noreferrer' className='ms-3 btn'>Resume</a>
                        </Nav>
                        <div id="phone-links">
                            <div id="phone-socials">
                                <a target="_blank" href="https://github.com/bparsons5" rel='noreferrer'><FaGithub /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/robertbrettparsons/" rel='noreferrer'><FaLinkedin /></a>
                                <a target="_blank" href="https://www.instagram.com/rbrettparsons/?hl=en" rel='noreferrer'><FaInstagram /></a>
                                <a target="_blank" href="https://rbrettparsons.com" rel='noreferrer'><MdCameraRoll /></a>
                            </div>
                            <div id="phone-email">
                                <a target="_blank" href="mailto:rbrettparsons@gmail.com" rel='noreferrer'>rbrettparsons@gmail.com</a>
                            </div>
                        </div>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div id="blur-top"></div>
        </>

        // <header className='header'>
        //     <h1>{title}</h1>
        //     {location.pathname === '/' && <DevButton onClick={onToggleAddTask} color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add'}/>}
        // </header>
    )
}

// Header.defaultProps = {
//   title: 'REACT'
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

export default Header