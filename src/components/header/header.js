import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './header.scss'
function Header() {
    return (
        <header data-testid="header">
            <h1>RESTy</h1>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">RESTy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="history">History</Nav.Link>
                            <Nav.Link href="link">Help</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;