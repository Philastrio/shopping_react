import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import { IAppNavbar } from "../types/interfaces";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/"> Shopping List </NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Nav className="ml-auto" navbar>
            auth
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default AppNavbar;
