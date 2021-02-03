import React from "react";
import MainLayout from "../Layouts/MainLayouts";
import { Card, CardGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
class Home extends React.Component {
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
  };

  render() {
    const { skills } = this.state;
    return (
      <MainLayout>
        <Container>
          <CardGroup>
            {skills.map((item) => (
              <Card key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <Card.Img
                    variant="top"
                    src={item.image.default}
                    alt={item.name}
                  />
                </Link>
                <Card.Body>
                  <Card.Text>
                    <h3>{item.description}</h3>{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Container>
      </MainLayout>
    );
  }
}

export default Home;
