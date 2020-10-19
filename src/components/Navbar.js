import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavbarCustom = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          height={"50px"}
          src={
            "https://firebasestorage.googleapis.com/v0/b/green-kitchen-demo.appspot.com/o/Green%20Kitchen%20logo-1.png?alt=media&token=b5ca2b6b-1837-47d7-bd5c-6e55b6a3c44b"
          }
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/savories">Savories</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCustom;
