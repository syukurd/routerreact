import React from "react";
import MainLayout from "../Layouts/MainLayouts";
import { Link } from "react-router-dom";
class Details extends React.Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Frame",
        description: "this is frame",
        image: require("../images/frame.jpg"),
      },
      {
        id: 2,
        name: "spring",
        description: "this is spring",
        image: require("../images/spring.png"),
      },
      {
        id: 3,
        name: "Ms Net",
        description: "this is MS Net",
        image: require("../images/msnet.jpg"),
      },
    ],
    data: "",
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const data = this.state.skills.find((item) => item.id === parseInt(id));
    this.setState({ data });
  }
  render() {
    const { data } = this.state;
    console.log("data ", data);
    return (
      <MainLayout>
        <h1>Halaman Detail {data.name}</h1>
        <div>
          <img src={data.image && data.image.default} alt={data.name} />
        </div>
        <Link to="/">Back</Link>
      </MainLayout>
    );
  }
}

export default Details;
