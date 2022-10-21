("use strict");
import { Component } from "react";
import "./filter-panel.component.css";
import WorkoutCard from "../workout-card.component/workout-card.component";

class FilterPanel extends Component {
  constructor(props) {
    super();
    const { muscleGroup, id } = props;

    this.state = { muscleGroup, id };
  }

  render() {
    const { muscleGroup, id } = this.state;

    return (
      <div className="filter-btn">
        <div className="filter-element">
          <input type="checkbox" className="filter-box" id={`${id}`} />
          <label htmlFor={`${id}`}>
            <img src={`Images/svg files/${muscleGroup}-VECTOR.svg`} />
          </label>
        </div>
      </div>
    );
  }
}
export default FilterPanel;
