import React from "react";
import Home from "../views/Home";
import About from "../views/About";
import Details from "../views/Detail";
import NotFound from "../views/NotFound";
import Contact from "../views/Contact";
import { Route, Switch } from "react-router-dom";
class Router extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/detail/:id" exact component={Details} />
          <Route exact component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Router;
