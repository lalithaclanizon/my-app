import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.png"
import download from "./images/download.png"
import { Container, Nav, Navbar } from 'react-bootstrap';
function Header() {
    return (
        <div className="header">
            <Navbar expand="lg">
                <Container>
                    <div className='logo'>
                        <img src={logo}


                            width="100"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='navtag'>
                            <Nav.Link href="#home">Home</Nav.Link>

                            <Nav.Link href="#features">Explore</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                        <div class="bt">
                            <span class="text" id="basic-addon1">Brochure
                                <img src={download}
                                    width="18"
                                    height="18"
                                    padding="20"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo" />
                            </span>
                        </div>
                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    );
}

export default Header