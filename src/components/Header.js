import React, { useState,  useContext } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
} from "reactstrap";
import UserContext from "../Context/UserContext";


const Header = () => {

  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const navOpen = () => setIsOpen(!isOpen);

  return (
    <Navbar className="bg-info navbar-expand-md navbar-dark text-light">
      <NavbarBrand >
        <NavLink tag={Link} to="/" className="text-dark">LCO GITHUB</NavLink>
      </NavbarBrand>
      <NavbarText className="text-white">
          {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={navOpen} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ms-auto">
          {
            context.user?.uid ? 
            <NavItem>
              <NavLink onClick={()=>context.setUser(null)} className="pe-auto" to="/">logout</NavLink>
            </NavItem> : 
            <>
              <NavItem>
                <NavLink tag={Link} to="/signin">Signin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signup">Signup</NavLink>
              </NavItem>  
            </>
          }
          
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
