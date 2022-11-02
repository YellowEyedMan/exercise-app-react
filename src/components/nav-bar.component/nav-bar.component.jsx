import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import "./nav-bar.component.scss";

const NavBar = () => {
  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="nav-link" id="build-btn" to="/">
          Build
        </Link>
        <Link className="nav-link" id="saved-btn" to="/saved">
          Saved
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
