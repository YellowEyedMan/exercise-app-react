("use strict");
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./nav-bar.component.styles.css";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <nav id="nav-bar">
        <Button className="nav-btns" id="build-btn">
          Build
        </Button>
        <Button className="nav-btns" id="saved-btn">
          Saved
        </Button>
      </nav>
    );
  }
}

export default NavBar;
