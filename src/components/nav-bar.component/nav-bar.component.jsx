import { Fragment } from "react";
import logo from "/Users/devonfennell/exercise-app-react/src/Images/png images/anvil-fixed.png";
import { React } from "react";
import NavBarButton from "./nav-bar-button.component/nav-bar-button.component";
import { Outlet } from "react-router-dom";
import "./nav-bar.component.scss";

const NavBar = () => {
  return (
    <Fragment>
      <header className="App-header">
        <div className="header-top">The</div>
        <div className="header-bottom">
          Dev
          <img src={logo} className="App-logo" alt="logo" />
          Forge
        </div>
      </header>
      <div className="nav-bar">
        <NavBarButton buttonName="build"></NavBarButton>
        <NavBarButton buttonName="saved"></NavBarButton>
      </div>
      <div className="app-body">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default NavBar;
