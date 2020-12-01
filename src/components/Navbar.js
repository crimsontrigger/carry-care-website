import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LogoIcon from "../assets/logo.png";

const NavbarCustom = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img height={"50px"} src={LogoIcon} />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarCustom;
