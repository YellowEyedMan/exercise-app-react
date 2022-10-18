("use strict");
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      saved: [],
    };
  }

  // addToCart() {
  //   console.log("clicked");
  //   const cartWorkout = document.createElement("div");
  //   cartWorkout.classList.add("cart");
  //   document.getElementById("cart-div").appendChild(cartWorkout);
  // }

  show(param) {
    const savedPage = document.getElementById("saved-page");
    const buildPage = document.getElementById("build-page");
  }

  showSaved() {
    console.log("clicked");
    const savedPage = document.getElementById("saved-page");

    return (savedPage.style.display = "flex");
  }

  showBuild() {
    console.log("clicked");
    const buildPage = document.getElementById("build-page");

    return (buildPage.style.display = "flex");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <div className="nav-buttons">
            <Button className="nav-btn" onClick={this.showBuild}>
              Build
            </Button>
            <Button className="nav-btn" onClick={this.showSaved}>
              Saved
            </Button>
          </div>

          <div className="build-page" id="build-page">
            <div className="filter" id="filter-div">
              <div className="filter-element">
                <input
                  type="checkbox"
                  className="filter-box"
                  name="chest"
                  id="checkboxF1"
                  // onchange="showChest()"
                />
                <label for="checkboxF1">
                  <img src="Images/svg files/chest-VECTOR.svg" />
                </label>
              </div>

              <div className="filter-element">
                <input
                  type="checkbox"
                  className="filter-box"
                  name="biceps"
                  id="checkboxF2"
                  // onchange="showBiceps()"
                />
                <label for="checkboxF2">
                  <img src="Images/svg files/biceps-VECTOR.svg" />
                </label>
              </div>

              <div className="filter-element">
                <input
                  type="checkbox"
                  className="filter-box"
                  name="abs"
                  id="checkboxF3"
                  // onchange="showAbs()"
                />
                <label for="checkboxF3">
                  <img src="Images/svg files/abs-VECTOR.svg" />
                </label>
              </div>

              <div className="filter-element">
                <input
                  type="checkbox"
                  className="filter-box"
                  name="shoulders"
                  id="checkboxF4"
                  // onchange="showShoulders()"
                />
                <label for="checkboxF4">
                  <img src="Images/svg files/shoulders-VECTOR.svg" />
                </label>
              </div>

              <div className="filter-element">
                <input
                  type="checkbox"
                  className="filter-box"
                  name="triceps"
                  id="checkboxF5"
                  // onchange="showTriceps()"
                />
                <label for="checkboxF5">
                  <img src="Images/svg files/triceps-VECTOR.svg" />
                </label>
              </div>

              <div className="filter-element">
                <input
                  type="checkbox"
                  className="filter-box"
                  name="quads"
                  id="checkboxF6"
                  // onchange="showQuads()"
                />
                <label for="checkboxF6">
                  <img src="Images/svg files/quads-VECTOR.svg" />
                </label>
              </div>
              <div className="filter-element">
                <input
                  type="checkbox"
                  className="filter-box"
                  name="hamstrings"
                  id="checkboxF7"
                  // onchange="showHamstrings()"
                />
                <label for="checkboxF7">
                  <img src="Images/svg files/hamstrings-VECTOR.svg" />
                </label>
              </div>

              <div className="filter-element">
                <input
                  type="checkbox"
                  className="filter-box"
                  name="calves"
                  id="checkboxF8"
                  // onchange="showCalves()"
                />
                <label for="checkboxF8">
                  <img src="Images/svg files/calves-VECTOR.svg" />
                </label>
              </div>

              <div className="reset-btn-div">
                <a>
                  <div className="reset-filter-btn">Reset</div>
                </a>
              </div>
            </div>
            <div className="workouts" id="workouts-div">
              <a className="selection-clear-div">
                <div className="selection-clear-btn">Clear</div>
              </a>

              <div className="chest-workouts">
                <div
                  className="workout-card"
                  id="chest-BENCH-PRESS"
                  // onchange="selectedChest1()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="bench-press"
                    id="checkboxW5"
                  />
                  <label className="workouts-label" for="checkboxW5">
                    <div className="workouts-text" id="bench-press-title">
                      Bench Press
                    </div>
                  </label>
                </div>

                <div
                  className="workout-card"
                  id="chest-CHEST-FLIES"
                  // onchange="selectedChest2()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="chest-flies"
                    id="checkboxW6"
                  />
                  <label className="workouts-label" for="checkboxW6">
                    <div className="workouts-text" id="chest-flies-title">
                      Chest-Flies
                    </div>
                  </label>
                </div>
              </div>

              <div className="biceps-workouts">
                <div
                  className="workout-card"
                  id="biceps-CURLS"
                  // onchange="selectedBiceps1()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="curls"
                    id="checkboxW3"
                  />
                  <label className="workouts-label" for="checkboxW3">
                    <div className="workouts-text" id="curls-title">
                      Curls
                    </div>
                  </label>
                </div>

                <div
                  className="workout-card"
                  id="biceps-CHIN-UPS"
                  // onchange="selectedBiceps2()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="chin-ups"
                    id="checkboxW4"
                  />
                  <label className="workouts-label" for="checkboxW4">
                    <div className="workouts-text" id="chin-ups-title">
                      Chin-Ups
                    </div>
                  </label>
                </div>
              </div>

              <div className="abs-workouts">
                <div
                  className="workout-card"
                  id="abs-SIT-UP"
                  // onchange="selectedAbs1()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="sit-up"
                    id="checkboxW1"
                  />
                  <label className="workouts-label" for="checkboxW1">
                    <div className="workouts-text" id="sit-up-title">
                      Sit-Up
                    </div>
                  </label>
                </div>

                <div
                  className="workout-card"
                  id="abs-CRUNCH"
                  // onchange="selectedAbs2()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="crunch"
                    id="checkboxW2"
                  />
                  <label className="workouts-label" for="checkboxW2">
                    <div className="workouts-text" id="crunch-title">
                      Crunch
                    </div>
                  </label>
                </div>
              </div>

              <div className="shoulder-workouts">
                <div
                  className="workout-card"
                  id="shoulders-MILITARY-PRESS"
                  // onchange="selectedShoulders1()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="military-press"
                    id="checkboxW7"
                  />
                  <label className="workouts-label" for="checkboxW7">
                    <div className="workouts-text" id="military-press-title">
                      Military-Press
                    </div>
                  </label>
                </div>

                <div
                  className="workout-card"
                  id="shoulders-SHOULDER-FLIES"
                  // onchange="selectedShoulders2()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="shoulder-flies"
                    id="checkboxW8"
                  />
                  <label className="workouts-label" for="checkboxW8">
                    <div className="workouts-text" id="shoulder-flies-title">
                      Shoulder-Flies
                    </div>
                  </label>
                </div>
              </div>

              <div className="triceps-workouts">
                <div
                  className="workout-card"
                  id="triceps-MILITARY-PUSH-UPS"
                  // onchange="selectedTriceps1()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="military-push-ups"
                    id="checkboxW9"
                  />
                  <label className="workouts-label" for="checkboxW9">
                    <div className="workouts-text" id="military-push-ups-title">
                      Military Push-Ups
                    </div>
                  </label>
                </div>

                <div
                  className="workout-card"
                  id="triceps-TRICEP-EXTENSIONS"
                  // onchange="selectedTriceps2()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="tricep-extensions"
                    id="checkboxW10"
                  />
                  <label className="workouts-label" for="checkboxW10">
                    <div className="workouts-text" id="tricep-extensions-title">
                      Tricep Extensions
                    </div>
                  </label>
                </div>
              </div>

              <div className="quads-workouts">
                <div
                  className="workout-card"
                  id="quads-BACK-SQUAT"
                  // onchange="selectedQuads1()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="back-squat"
                    id="checkboxW11"
                  />
                  <label className="workouts-label" for="checkboxW11">
                    <div className="workouts-text" id="back-squat-title">
                      Back Squat
                    </div>
                  </label>
                </div>

                <div
                  className="workout-card"
                  id="quads-BULGARIAN-SPLIT-SQUATS"
                  // onchange="selectedQuads2()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="bulgarian-split-squats"
                    id="checkboxW12"
                  />
                  <label className="workouts-label" for="checkboxW12">
                    <div
                      className="workouts-text"
                      id="bulgarian-split-squat-title"
                    >
                      Bulgarian Split Squats
                    </div>
                  </label>
                </div>
              </div>

              <div className="hamstrings-workouts">
                <div
                  className="workout-card"
                  id="hamstrings-HAMSTRING-CURLS"
                  // onchange="selectedHams1()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="hamstring-curls"
                    id="checkboxW13"
                  />
                  <label className="workouts-label" for="checkboxW13">
                    <div className="workouts-text" id="hamstring-curls-title">
                      Hamstring Curls
                    </div>
                  </label>
                </div>

                <div
                  className="workout-card"
                  id="hamstrings-ROMANIAN-DEADLIFTS"
                  // onchange="selectedHams2()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="romanian-deadlifts"
                    id="checkboxW14"
                  />
                  <label className="workouts-label" for="checkboxW14">
                    <div className="workouts-text" id="romanian-deadlift-title">
                      Romanian Deadlift
                    </div>
                  </label>
                </div>
              </div>

              <div className="calves-workouts">
                <div
                  className="workout-card"
                  id="calves-CALVE-RAISES"
                  // onchange="selectedCalves1()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="calve-raises"
                    id="checkboxW15"
                  />
                  <label className="workouts-label" for="checkboxW15">
                    <div className="workouts-text" id="calve-raises-title">
                      Calve Raises
                    </div>
                  </label>
                </div>

                <div
                  className="workout-card"
                  id="calves-SEATED-CALVE-RAISES"
                  // onchange="selectedCalves2()"
                >
                  <input
                    type="checkbox"
                    className="workout-box"
                    name="seated-calve-raises"
                    id="checkboxW16"
                  />
                  <label className="workouts-label" for="checkboxW16">
                    <div
                      className="workouts-text"
                      id="seated-calf-raises-title"
                    >
                      Seated Calf Raises
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <a className="cart-div">
              <div className="cart-text" id="cart-text"></div>
            </a>
            <footer></footer>
          </div>
          <div className="saved-page" id="saved-page"></div>
        </div>
      </div>
    );
  }
}

export default App;
