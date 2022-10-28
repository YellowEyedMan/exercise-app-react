import { Component } from "react";
import { Container } from "react-bootstrap";

class SavedPage extends Component {
  constructor(props) {
    super();

    this.state = { props };
  }

  render() {
    const style = this.state.props;
    return <Container style={style}>Saved</Container>;
  }
}
export default SavedPage;
