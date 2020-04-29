import React from "react";
import "./Navbar.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarMenu = props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">Home</Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link to="/category">Category</Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link to="/products">Products</Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link to="/admin">Admin area</Link>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
