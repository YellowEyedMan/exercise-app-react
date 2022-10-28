("use strict");

import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import FilterPanel from "./filter-panel.component/filter-panel.component";
import "./filter.component.styles.css";

import WorkoutCard from "./workout-card.component/workout-card.component";
import { CardGroup } from "react-bootstrap";

class Filter extends Component {
  constructor() {
    super();

    this.state = {};
  }
  createCard(group) {
    const musclegroups = [
      "chest",
      "triceps",
      "abs",
      "biceps",
      "shoulders",
      "hamstrings",
      "quads",
      "calves",
    ];

    const exercises = [
      ["Bench Press", "Chest Flies"],
      ["Tricep Extensions", "Military Push-Ups"],
      ["Crunch", "Sit-Up"],
      ["Bicep Curl", "Chin Up"],
      ["Military Press", "Lateral Raise"],
      ["Hamstring Curl", "Romanian Deadlift"],
      ["Back Squat", "Bulgarian Split-Squats"],
      ["Calve Raises", "Seated Calve Raises"],
    ];

    const card = {};
    exercises.forEach((value, i) => (card[musclegroups[i]] = value));
    // console.log(group, card[`${group}`]);

    return (
      <div id="selection-div">
        <div className={`${group}-set`}>
          <WorkoutCard
            musclegroup={group}
            exercise={card[`${group}`][0]}
            id="W1"
          ></WorkoutCard>
          <WorkoutCard
            musclegroup={group}
            exercise={card[`${group}`][1]}
            id="W2"
          ></WorkoutCard>
        </div>
      </div>
    );
  }
  render() {
    const showCards = this.createCard;
    return (
      <div id="filter-div">
        <div className="panels-div">
          <FilterPanel
            muscleGroup="chest"
            id="checkboxF1"
            onchange={showCards("chest")}
          ></FilterPanel>
          <FilterPanel
            muscleGroup="triceps"
            id="checkboxF2"
            onchange={showCards("triceps")}
          ></FilterPanel>
          <FilterPanel
            muscleGroup="abs"
            id="checkboxF3"
            onchange={showCards("abs")}
          ></FilterPanel>
          <FilterPanel
            muscleGroup="biceps"
            id="checkboxF4"
            onchange={showCards("biceps")}
          ></FilterPanel>
          <FilterPanel
            muscleGroup="shoulders"
            id="checkboxF5"
            onchange={showCards("shoulders")}
          ></FilterPanel>
          <FilterPanel
            muscleGroup="hamstrings"
            id="checkboxF6"
            onchange={showCards("hamstrings")}
          ></FilterPanel>
          <FilterPanel
            muscleGroup="quads"
            id="checkboxF7"
            onchange={showCards("quads")}
          ></FilterPanel>
          <FilterPanel
            muscleGroup="calves"
            id="checkboxF8"
            onchange={showCards("calves")}
          ></FilterPanel>
        </div>

        <div id="selection-div"></div>
      </div>
    );
  }
}
export default Filter;
