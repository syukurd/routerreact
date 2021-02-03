import React from "react";
import Navigasi from "../components/Navbar";
import Footer from "../components/Footer";
class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Navigasi />
        <h1>ISI</h1>
        <Footer />
      </div>
    );
  }
}

export default Home;
