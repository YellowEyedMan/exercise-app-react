("use strict");

import { Component } from "react";
import { Button } from "react-bootstrap";
import { log } from "../../App";
import BuildPage from "../build-page.component/build-page.component";

class BuildButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Button>Build</Button>;
  }
}

export default BuildButton;
