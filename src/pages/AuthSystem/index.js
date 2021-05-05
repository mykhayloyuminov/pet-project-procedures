import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

import logo from "../../assets/logo-Toma.png";

import NavBar from "./NavBar";

import * as path from "constants/routes";

import "./style.scss";

const AuthSystemWrapp = (props) => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const default_route = (
    <div className="container_sign_buttons">
      <Link to="/sign_up">
        <button className="primaty_button">Sign up</button>
      </Link>
      <Link to="/sign_in">
        <button className="primaty_button">Sign in</button>
      </Link>{" "}
    </div>
  );
  return (
    <div className="auth">
      <div className="auth_wrapp">
        <div className="auth_left_wrapp">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="auth_right_wrapp">
          {props.children || default_route}
        </div>
      </div>
    </div>
  );
};

export default withRouter(AuthSystemWrapp);
