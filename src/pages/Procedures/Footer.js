import React from "react";
import instLogo from "../../assets/inst-icon.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <span style={{ color: "white", marginRight: "10px" }}>
        {t("Subscribe Me in Instagram")}
      </span>
      <a target="_blank" href="https://www.instagram.com/talking_toma">
        <img src={instLogo} alt="" />
      </a>
    </div>
  );
};

export default Footer;
