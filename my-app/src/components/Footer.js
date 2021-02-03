import React from "react";

const Footer = () => {
  return (
    <div style={foot}>
      <h2>Footer</h2>
    </div>
  );
};

export default Footer;
const foot = {
  display: "flex",
  alignItems: "center",
  background: "black",
  color: "white",
  padding: "0 40%",
  justifyContent: "space-between",
};
