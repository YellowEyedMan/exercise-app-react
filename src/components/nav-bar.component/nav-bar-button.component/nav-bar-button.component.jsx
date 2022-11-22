import { React, createContext, Fragment } from "react";
import "./nav-bar-button.styles.scss";

import { Link } from "react-router-dom";

const NavBarButton = (props) => {
  const btnName = props.buttonName;

  const capFirstLetter = (string) => {
    const editedString = string.charAt(0).toUpperCase() + string.slice(1);
    return editedString;
  };

  const handleInput = (e) => {
    const buttonValue = e.target.value;
    console.log(buttonValue);
  };

  const pageName = capFirstLetter(btnName);
  return (
    <button className="nav-btn">
      <Link id="link-text" to={`/${btnName}`}>
        {pageName.toUpperCase()}
      </Link>
    </button>
  );
};

export default NavBarButton;
