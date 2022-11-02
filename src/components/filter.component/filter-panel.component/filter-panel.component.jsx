import "./filter-panel.component.scss";
import { useState } from "react";

const FilterPanel = (props) => {
  const { muscleGroup, id } = props;
  const checkHandler = () => {
    console.log("checked");
  };

  return (
    <div className="filter-btn">
      <div className="filter-element">
        <input
          type="checkbox"
          className="filter-box"
          id={`${id}`}
          onChange={checkHandler}
        />
        <label htmlFor={`${id}`}>
          <img
            src={`/Users/devonfennell/exercise-app-react/src/Images/svg files/${muscleGroup}-VECTOR.svg`}
            alt={`${muscleGroup}`}
          />
        </label>
      </div>
    </div>
  );
};
export default FilterPanel;
