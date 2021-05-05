import React from "react";
import { Link } from "react-router-dom";

import logo from "assets/logo-Toma.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link to="/">
          <img src={logo} alt="" className="navbar_logo" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
