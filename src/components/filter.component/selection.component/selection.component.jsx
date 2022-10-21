("use strict");
import { render } from "@testing-library/react";
import { Component } from "react";
import WorkoutCard from "../workout-card.component/workout-card.component";
import "./selection.component.styles.css";

class Selection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="selection">
        {/* <WorkoutCard
          musclegroup="chest"
          exercise="Bench Press"
          id="W1"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="chest"
          exercise="Chest Flies"
          id="W2"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="triceps"
          exercise="Tricep Extensions"
          id="W3"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="triceps"
          exercise="Military Push-Ups"
          id="W4"
        ></WorkoutCard>
        <WorkoutCard musclegroup="abs" exercise="crunch" id="W5"></WorkoutCard>
        <WorkoutCard musclegroup="abs" exercise="Sit Up" id="W6"></WorkoutCard>
        <WorkoutCard
          musclegroup="biceps"
          exercise="Bicep Curl"
          id="W7"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="biceps"
          exercise="Chin Up"
          id="W8"
        ></WorkoutCard>

        <WorkoutCard
          musclegroup="quads"
          exercise="Back Squat"
          id="W9"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="quads"
          exercise="Bulgarian Split Squats"
          id="W10"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="hamstrings"
          exercise="Hamstring Curls"
          id="W11"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="hamstrings"
          exercise="Romanian Dead Lifts"
          id="W12"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="shoulders"
          exercise="Military Press"
          id="W13"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="shoulders"
          exercise="Lateral Raise"
          id="W14"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="calves"
          exercise="Calve Raises"
          id="W15"
        ></WorkoutCard>
        <WorkoutCard
          musclegroup="calves"
          exercise="Seated Calve Raises"
          id="W16"
        ></WorkoutCard> */}
      </div>
    );
  }
}

export default Selection;
