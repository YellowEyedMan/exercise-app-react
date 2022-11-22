import { Fragment, useEffect, useState } from "react";

import FilterPanel from "./filter-panel.component/filter-panel.component";
import "./filter.styles.scss";
import WorkoutCard from "../filter/workout-card/workout-card.component";
import WorkoutCards from "../filter/workout-card/workout-card.component";
import Cart from "../build-page/cart/cart.component";

const Filter = () => {
  let checked = false;

  const [chest, setChest] = useState({
    name: "chest",

    checkedStatus: checked,
    ex1Status: checked,
    ex2Status: checked,
    boxID: "checkboxF1",
    ex1: "Bench Press",
    ex2: "Chest Flies",
  });

  const [biceps, setBiceps] = useState({
    name: "biceps",

    checkedStatus: checked,
    ex1Status: checked,
    ex2Status: checked,
    boxID: "checkboxF2",
    ex1: "Curls",
    ex2: "Chin ups",
  });

  const [abs, setAbs] = useState({
    name: "abs",

    checkedStatus: checked,
    ex1Status: checked,
    ex2Status: checked,
    boxID: "checkboxF3",
    ex1: "Sit Ups",
    ex2: "Crunch",
  });

  const [shoulders, setShoulders] = useState({
    name: "shoulders",

    checkedStatus: checked,
    ex1Status: checked,
    ex2Status: checked,
    boxID: "checkboxF4",
    ex1: "Military Press",
    ex2: "Lateral Raise",
  });

  const [triceps, setTriceps] = useState({
    name: "triceps",

    checkedStatus: checked,
    ex1Status: checked,
    ex2Status: checked,
    boxID: "checkboxF5",
    ex1: "Military Push-Ups",
    ex2: "Tricep Extensions",
  });

  const [quads, setQuads] = useState({
    name: "quads",

    checkedStatus: checked,
    ex1Status: checked,
    ex2Status: checked,
    boxID: "checkboxF6",
    ex1: "Back Squat",
    ex2: "Bulgarian Split Squats",
  });

  const [hamstrings, setHamstrings] = useState({
    name: "hamstrings",

    checkedStatus: checked,
    ex1Status: checked,
    ex2Status: checked,
    boxID: "checkboxF7",
    ex1: "Hamstring Curl",
    ex2: "Romanian Deadlift",
  });

  const [calves, setCalves] = useState({
    name: "calves",

    checkedStatus: checked,
    ex1Status: checked,
    ex2Status: checked,
    boxID: "checkboxF8",
    ex1: "Calve Raises",
    ex2: "Seated Calve Raises",
  });

  const toggle = (value) => {
    return !value;
  };

  const handleChest = () => {
    setChest((prevState) => {
      return {
        ...prevState,
        checkedStatus: !prevState.checkedStatus,
      };
    });
  };

  const handleBiceps = () => {
    setBiceps((prevState) => {
      return {
        ...prevState,
        checkedStatus: !prevState.checkedStatus,
      };
    });
  };

  const handleAbs = () => {
    setAbs((prevState) => {
      return {
        ...prevState,
        checkedStatus: !prevState.checkedStatus,
      };
    });
  };
  const handleShoulders = () => {
    setShoulders((prevState) => {
      return {
        ...prevState,
        checkedStatus: !prevState.checkedStatus,
      };
    });
  };
  const handleTriceps = () => {
    setTriceps((prevState) => {
      return {
        ...prevState,
        checkedStatus: !prevState.checkedStatus,
      };
    });
  };
  const handleQuads = () => {
    setQuads((prevState) => {
      return {
        ...prevState,
        checkedStatus: !prevState.checkedStatus,
      };
    });
  };
  const handleHamstrings = () => {
    setHamstrings((prevState) => {
      return {
        ...prevState,
        checkedStatus: !prevState.checkedStatus,
      };
    });
  };
  const handleCalves = () => {
    setCalves((prevState) => {
      return {
        ...prevState,
        checkedStatus: !prevState.checkedStatus,
      };
    });
  };

  const [cartState, setCartState] = useState([]);

  return (
    <div className="filter" id="filter-div">
      <div className="filter-panels-div">
        <FilterPanel state={chest} handleCheck={handleChest}></FilterPanel>

        <FilterPanel state={biceps} handleCheck={handleBiceps}></FilterPanel>

        <FilterPanel state={abs} handleCheck={handleAbs}></FilterPanel>

        <FilterPanel
          state={shoulders}
          handleCheck={handleShoulders}
        ></FilterPanel>

        <FilterPanel state={triceps} handleCheck={handleTriceps}></FilterPanel>

        <FilterPanel state={quads} handleCheck={handleQuads}></FilterPanel>

        <FilterPanel
          state={hamstrings}
          handleCheck={handleHamstrings}
        ></FilterPanel>

        <FilterPanel state={calves} handleCheck={handleCalves}></FilterPanel>
      </div>
      <div className="workout-selection">
        <WorkoutCards
          setCart={setCartState}
          setState={setChest}
          state={chest}
        ></WorkoutCards>
        <WorkoutCards
          setCart={setCartState}
          setState={setBiceps}
          state={biceps}
        ></WorkoutCards>
        <WorkoutCards
          setCart={setCartState}
          setState={setAbs}
          state={abs}
        ></WorkoutCards>
        <WorkoutCards
          setCart={setCartState}
          setState={setShoulders}
          state={shoulders}
        ></WorkoutCards>
        <WorkoutCards
          setCart={setCartState}
          setState={setTriceps}
          state={triceps}
        ></WorkoutCards>
        <WorkoutCards
          setCart={setCartState}
          setState={setQuads}
          state={quads}
        ></WorkoutCards>
        <WorkoutCards
          setCart={setCartState}
          setState={setHamstrings}
          state={hamstrings}
        ></WorkoutCards>
        <WorkoutCards
          setCart={setCartState}
          setState={setCalves}
          state={calves}
        ></WorkoutCards>
      </div>
      <div className="cart-div">
        <Cart cartState={cartState}></Cart>
      </div>
    </div>
  );
};

export default Filter;
