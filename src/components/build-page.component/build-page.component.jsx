("use strict");
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./build-page.component.styles.css";
import Filter from "../filter.component/filter.component";
import FilterButton from "../filter.component/filter-panel.component/filter-panel.component";
import WorkoutSelection from "../filter.component/selection.component/selection.component";

class BuildPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="build-page">
        <Filter></Filter>
      </div>
    );
  }
}

export default BuildPage;
