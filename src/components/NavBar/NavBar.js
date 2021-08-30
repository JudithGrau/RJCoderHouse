import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import {CartWidget} from './CartWidget/CartWidget'

export const NavBar = () => {
    const categories = [ { path: "/category/remeras", text: "Remeras" }, { path: "/category/buzos", text: "Buzos" } ]

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} exact to={"/"} activeClassName="logo"><img src={logo} alt="cart" width="50px"/>Tienda Anime</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={NavLink} exact to={"/"} activeClassName="active">Home</Nav.Link>

                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        {categories.map( category => {

                        return <NavDropdown.Item as={NavLink} exact to={category.path} activeClassName="active">{category.text}</NavDropdown.Item>

                        })}
                        </NavDropdown>
                        
                        <Nav.Link as={NavLink} exact to={"/nosotros"} activeClassName="active">Nosotros</Nav.Link>
                        <Nav.Link as={NavLink} exact to={"/contacto"} activeClassName="active">Contacto</Nav.Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        
    )
}