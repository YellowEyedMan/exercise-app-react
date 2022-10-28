("use strict");
import logo from "/Users/devonfennell/exercise-app-react/src/Images/png images/anvil-fixed.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import BuildPage from "./components/build-page.component/build-page.component";
import BuildButton from "./components/build-button.component/build-button.component";
import SavedButton from "./components/saved-button.component";
import SavedPage from "./components/saved-page.component/saved-page.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      buildPage: { display: "flex" },
      savedPage: { display: "none" },
    };
  }

  pageChange() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div id="nav">
          <BuildButton></BuildButton>
          <SavedButton></SavedButton>
        </div>
        <div className="body">
          <BuildPage></BuildPage>
          <SavedPage></SavedPage>
        </div>

        <footer></footer>
      </div>
    );
  }
}

export default App;

export function log() {
  console.log(`checked`);
}
export function toggleHidden() {
  this.setState({ isHidden: !this.state.isHidden });
}
