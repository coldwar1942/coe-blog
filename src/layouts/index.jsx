import React from "react";
import Navbar from "./Navbar/index.jsx";
import Body from "./Body/index.jsx";
const index = ({ children }) => {
  return (
    <>
      <Navbar />
      <Body>{children}</Body>
    </>
  );
};

export default index;
