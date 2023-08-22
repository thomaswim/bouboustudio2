import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../style/header.css'

function TransparentNavbar() {
    return (
<Navbar  expand="lg" data-bs-theme="light" className="justify-content-between Navbar_boubou">
    <Container>
        <Navbar.Brand as={Link} to="/">
            <div className="d-flex align-items-center">
                <img
                    src="https://github.com/thomaswim/bouboustudio/blob/main/logo2.png?raw=true" 
                    width="50"
                    height="auto"
                    className="d-inline-block align-top logo-image"
                    alt="Votre logo"
                />
                <span className='titre_header'>Boubou Studio</span>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link as={Link} to="/mon-compte">
                    <FontAwesomeIcon icon={faUserCircle} className="mr-2" style={{marginRight:"10px"}} />
                    Mon compte
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>



    );
}

export default TransparentNavbar;
