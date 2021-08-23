import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import {CartWidget} from './CartWidget/CartWidget'

export const NavBar = () => {


    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/"} className="logo pr-5"><img src={logo} alt="cart" width="50px"/>Tienda Anime</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/category/remeras"}>Remeras</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/category/buzos"}>Buzos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/nosotros"}>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to={"/contacto"}>Contacto</Nav.Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        
    )
}