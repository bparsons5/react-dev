import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = ({ title, onToggleAddTask, showAdd }) => {
    const location = useLocation()
    
    return (
        <>
            <Navbar key='sm' expand='sm'>
                <Container fluid>
                    <img src={require('../images/logo.png')} height='26' className='ms-2'/> {/* is this how externals are supposed to be called? */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'sm'`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-$'sm'`} aria-labelledby={`offcanvasNavbarLabel-expand-$'sm'`} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$'sm'`}>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">About</Nav.Link>
                            <Nav.Link href="#action2">Experience</Nav.Link>
                            <Nav.Link href="#action3">Projects</Nav.Link>
                            <Nav.Link href="#action">Contact</Nav.Link>
                            <Button className='ms-3'>Resume</Button>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>

        // <header className='header'>
        //     <h1>{title}</h1>
        //     {location.pathname === '/' && <DevButton onClick={onToggleAddTask} color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add'}/>}
        // </header>
    )
}

Header.defaultProps = {
  title: 'REACT'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header