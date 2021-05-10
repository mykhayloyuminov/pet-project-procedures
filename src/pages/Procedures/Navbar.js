import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import signOut from "../../assets/sign-out.svg";
import logo from "../../assets/logo-Toma.png";
import * as path from "../../constants/routes";

const Navbar = (props) => {
  return (
    <div className="header">
      <div className="header_container">
        <img className="header_logo" src={logo} alt="" />
        <Link to={path.CREATE_PROCEDURE}>
          <button
            style={{ width: "auto", height: "auto" }}
            className="primary_button"
          >
            Create New Procedure
          </button>
        </Link>
        <Link to="/">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={signOut} alt="" />
            <span className="header_signout">Sign out</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
