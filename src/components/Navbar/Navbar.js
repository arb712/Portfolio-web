import React from "react";
import "../css/style.css";

import { Navbar, Nav, NavbarBrand } from "react-bootstrap";

const Navibar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navBar">
      <NavbarBrand className="navbarBrand ml-5">Ariq Bimantoro</NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbarToggle"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Nav.Link href="#home" className="navLink">
            Home
          </Nav.Link>
          <Nav.Link href="#About" className="navLink">
            About Me
          </Nav.Link>
          <Nav.Link href="#iCanDo" className="navLink">
            My Features?
          </Nav.Link>
          <Nav.Link href="#skill" className="navLink">
            Skills
          </Nav.Link>
          <Nav.Link href="#work" className="navLink">
            See My Work
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    //
  );
};

export default Navibar;
