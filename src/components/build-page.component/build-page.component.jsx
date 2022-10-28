import { Component } from "react";
import { Container } from "react-bootstrap";
import BuildButton from "../build-button.component/build-button.component";

class BuildPage extends Component {
  constructor(props) {
    super();

    this.state = { props };
  }

  render() {
    const style = this.state;
    return <Container style={style}>Build</Container>;
  }
}
export default BuildPage;
