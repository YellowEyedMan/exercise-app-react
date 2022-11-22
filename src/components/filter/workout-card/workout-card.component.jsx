import { Fragment, useState, useEffect } from "react";
import "/Users/devonfennell/exercise-app-react/src/components/filter/workout-card/workout-card.styles.scss";

const WorkoutCards = (props) => {
  const state = props.state;

  const handleCardSelect = (str) => {
    if (str == "ex1") {
      props.setState((prevState) => {
        return { ...prevState, ex1Status: !prevState.ex1Status };
      });
      if (state.ex1Status === false)
        props.setCart((prevState) => {
          return [...prevState, state.ex1];
        });
      else if (state.ex1Status === true) {
        props.setCart((prevState) => {
          return [...prevState, null];
        });
      }
      console.log(state.ex1Status);
    }
    if (str == "ex2") {
      props.setState((prevState) => {
        return { ...prevState, ex2Status: !prevState.ex2Status };
      });
      if (state.ex2Status === false)
        props.setCart((prevState) => {
          return [...prevState, state.ex2];
        });
      else if (state.ex2Status === true) {
        props.setCart((prevState) => {
          return [...prevState, null];
        });
      }
      console.log(state.ex2Status);
    }
  };

  if (state.checkedStatus === true) {
    return (
      <div className="cards-div">
        <div className="workout-card">
          <input
            type="checkbox"
            className="workout-box"
            name={state.ex1}
            id={`${state.name}-ex1`}
            onChange={() => {
              handleCardSelect("ex1");
            }}
          />
          <label className="workouts-label" htmlFor={`${state.name}-ex1`}>
            <h3 id={`${state.ex1}-title`}>{state.ex1}</h3>
          </label>
        </div>
        <div className="workout-card">
          <input
            type="checkbox"
            className="workout-box"
            name={state.ex2}
            id={`${state.name}-ex2`}
            onChange={() => {
              handleCardSelect("ex2");
            }}
          />
          <label className="workouts-label" htmlFor={`${state.name}-ex2`}>
            <h3 id={`${state.ex2}-title`}>{state.ex2}</h3>
          </label>
        </div>
      </div>
    );
  }
};
export default WorkoutCards;
