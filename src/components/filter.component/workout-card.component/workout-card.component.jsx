("use strict");

import { render } from "@testing-library/react";
import { Component } from "react";
import "./workout-card.component.styles.css";

class WorkoutCard extends Component {
  constructor(props) {
    super();
    const { musclegroup, exercise, id } = props;

    this.state = { musclegroup, exercise, id };
  }

  render() {
    const { musclegroup, exercise, id } = this.state;

    return (
      <div className={`workout-card ${musclegroup}`}>
        <input
          type="checkbox"
          className="workout-box"
          name={`${exercise}`}
          id={`${id}`}
        />
        <label className="workouts-label" htmlFor={`${id}`}>
          <div className="workouts-text">{`${exercise}`}</div>
        </label>
      </div>
    );
  }
}
export default WorkoutCard;
