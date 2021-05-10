import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style.scss";
import { Redirect } from "react-router";

const ProceduresWrapp = (props) => {
  const proceduresWrapp = (
    <div className="bg-white">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
  return window.localStorage.getItem("forHeader") ? (
    proceduresWrapp
  ) : (
    <Redirect to="/" />
  );
};

export default ProceduresWrapp;
