("use strict");
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { log } from "../App";
import { Button } from "react-bootstrap";
import SavedPage from "./saved-page.component/saved-page.component";
class SavedButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const savedPage = (
      <div className="body">
        <SavedPage display="flex"></SavedPage>
      </div>
    );
    return (
      <Button
        onClick={() => {
          return savedPage;
        }}
      >
        Saved
      </Button>
    );
  }
}
export default SavedButton;
