import React from "react";
import { Navbar, Logo, Menu, MenuItem } from "./styles.jsx";
import { navigate } from "gatsby";
const index = () => {
  return (
    <Navbar>
      <Logo onClick={() => navigate("/")}>Coe Blog</Logo>
      <Menu>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/about">About</MenuItem>
      </Menu>
    </Navbar>
  );
};

export default index;
