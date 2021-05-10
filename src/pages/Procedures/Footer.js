import React from "react";
import instLogo from "../../assets/inst-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <span style={{ color: "white", marginRight: "10px" }}>
        Subscribe Me in Instagram
      </span>
      <a target="_blank" href="https://www.instagram.com/talking_toma">
        <img src={instLogo} alt="" />
      </a>
    </div>
  );
};

export default Footer;
