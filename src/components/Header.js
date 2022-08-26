// import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const location = useLocation()
    
    return (
        <>
            <Navbar key='sm' expand='sm'>
                <Container fluid>
                    <a href='/' className='logo'>
                        {/* <img src={require('../images/logo-white.png')} height='26' className='ms-2'/> is this how externals are supposed to be called? */}
                        <FontAwesomeIcon icon={faCode} />
                        <span className='logo-name'>R. Brett Parsons</span>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-$'sm'`} aria-labelledby={`offcanvasNavbarLabel-expand-$'sm'`} placement="end">
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="About">About</Nav.Link>
                            <Nav.Link href="Experience">Experience</Nav.Link>
                            <Nav.Link href="Projects">Projects</Nav.Link>
                            <Nav.Link href="Contact">Contact</Nav.Link>
                            <a type='button' href='https://drive.google.com/file/d/1UFBZjwpirNNVCuxiPMb0rGs2dQqCP0RE/view?usp=sharing' target='_blank' className='ms-3 btn'>Resume</a>
                        </Nav>
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