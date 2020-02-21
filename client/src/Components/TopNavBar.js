import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

const TopNavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [from] = useState(props.from);
  const [active] = useState(props.active);

  var reportedMesg = "";
  var home = "";
  if (active === "reportedMesg") {
    reportedMesg = "active";
  } else if (active === "home") {
    home = "active";
  }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="border-0 rounded">
        <NavbarBrand href="/">VVIT Confession's |</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className={home}>
                Home
              </NavLink>
            </NavItem>

            <NavItem></NavItem>
            {from === "admin" ? (
              <NavItem>
                <NavLink href="/admin" className={reportedMesg}>
                  Reported
                </NavLink>
              </NavItem>
            ) : null}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>
            Platform to Express , What you have not Expressed !
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
