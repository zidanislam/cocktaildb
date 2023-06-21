import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container className="d-flex flex-row-reverse d-md-flex flex-md-row">
        <Navbar.Brand as={Link} to={"/"}>
        <img
              alt=""
              src={logo}
              width="75"
              height="75"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/home"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/items"}>
              Cocktails
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
