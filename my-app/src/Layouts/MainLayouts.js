import React from "react";
import Navigasi from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Navigasi />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
