import { useEffect, useState } from "react";
import WorkoutCards from "../workout-card/workout-card.component";
import "/Users/devonfennell/exercise-app-react/src/components/filter/filter-panel.component/filter-panel.styles.scss";

const FilterPanel = (props) => {
  const state = props.state;

  const name = state.name;
  const boxID = state.boxID;

  return (
    <div className="filter-element">
      <input
        type="checkbox"
        className="filter-box"
        name={name}
        id={boxID}
        onChange={props.handleCheck}
      />
      <label htmlFor={boxID}>
        <img
          src={`/Users/devonfennell/exercise-app-react/src/assets/Images/svg-files/${name}-VECTOR.svg`}
          alt={name}
        />
      </label>
    </div>
  );
};
export default FilterPanel;
