import { useState } from "react";
import WorkoutsList from "../workouts-list.component/workouts-list.component";
import FilterPanel from "./filter-panel.component/filter-panel.component";
import "./filter.component.styles.css";

const Filter = () => {
  return (
    <div id="filter-div">
      <div className="panels-div">
        <FilterPanel muscleGroup="chest" id="checkboxF1"></FilterPanel>
        <FilterPanel muscleGroup="triceps" id="checkboxF2"></FilterPanel>
        <FilterPanel muscleGroup="abs" id="checkboxF3"></FilterPanel>
        <FilterPanel muscleGroup="biceps" id="checkboxF4"></FilterPanel>
        <FilterPanel muscleGroup="shoulders" id="checkboxF5"></FilterPanel>
        <FilterPanel muscleGroup="hamstrings" id="checkboxF6"></FilterPanel>
        <FilterPanel muscleGroup="quads" id="checkboxF7"></FilterPanel>
        <FilterPanel muscleGroup="calves" id="checkboxF8"></FilterPanel>
      </div>
      <WorkoutsList />
    </div>
  );
};

export default Filter;
