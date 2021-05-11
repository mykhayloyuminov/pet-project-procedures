import logo from "../assets/logo-Toma.png";
import { useTranslation } from "react-i18next";

export const error = (t) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ height: "200px", width: "300px" }}>
        {t("Error from backend. Tamara will fix it soon")}
      </div>
    </div>
  );
};
export const loading = (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div style={{ height: "200px", width: "200px" }}>
      <img src={logo} alt="" />
    </div>
  </div>
);
