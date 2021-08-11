import React from 'react'
import './NavBar.css'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import {CartWidget} from './CartWidget'

export const NavBar = () => {


    return (
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home" className="logo pr-5">Mi tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Producto 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Producto 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <CartWidget/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}