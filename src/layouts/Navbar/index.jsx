import React from "react";
import { Navbar, Logo, Menu, MenuItem } from "./styles.jsx";

const index = () => {
  return (
    <Navbar>
      <Logo>Coe Blog</Logo>
      <Menu>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/categories">Categories</MenuItem>
        <MenuItem href="/about">About</MenuItem>
      </Menu>
    </Navbar>
  );
};

export default index;
