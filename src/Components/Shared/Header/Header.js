import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" text="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to='/'><img src={logo} alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
            
          </Nav>
          <Nav className="fw-bold">
            <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
            <Nav.Link as={Link} to='/courses'>Courses</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
