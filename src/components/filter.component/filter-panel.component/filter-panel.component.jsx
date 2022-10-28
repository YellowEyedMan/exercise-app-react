("use strict");
import { Component } from "react";
import "./filter-panel.component.css";

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
            <img
              src={`/Users/devonfennell/exercise-app-react/src/Images/svg files/${muscleGroup}-VECTOR.svg`}
              alt={`${muscleGroup}`}
            />
          </label>
        </div>
      </div>
    );
  }
}
export default FilterPanel;
