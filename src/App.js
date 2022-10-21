("use strict");
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import NavBar from "./components/nav-bar.component/nav-bar.component";
import BuildPage from "./components/build-page.component/build-page.component";

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <NavBar></NavBar>

        <BuildPage></BuildPage>

        <footer></footer>
      </div>
      // </div>
    );
  }
}

export default App;
