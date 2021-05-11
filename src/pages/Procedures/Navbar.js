import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import signOut from "../../assets/sign-out.svg";
import logo from "../../assets/logo-Toma.png";
import * as path from "../../constants/routes";
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="header_container">
        <img className="header_logo" src={logo} alt="" />
        <Link to={path.CREATE_PROCEDURE}>
          <button
            style={{ width: "auto", height: "auto" }}
            className="primary_button"
          >
            {t("Create New Procedure")}
          </button>
        </Link>
        <Link to="/">
          <div
            onClick={() => {
              if (window.localStorage.getItem("forHeader")) {
                window.localStorage.removeItem("forHeader");
              }
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={signOut} alt="" />
            <span className="header_signout">{t("Sign out")}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
