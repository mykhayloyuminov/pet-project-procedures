import React, { useState, useEffect, useRef } from "react";
import ProceduresWrapp from "../index";
import { useTranslation } from "react-i18next";

let ws;
const CreateProcedure = () => {
  const { t } = useTranslation();
  const [wsDataInputs, setWsDataInputs] = useState({
    name: null,
    lastName: null,
    time: null,
    bDay: null,
    country: null,
    passportId: null,
    email: null,
    phone: null,
    city: null,
  });

  const handleOnClick = () => {
    if (ws) {
      return false;
    }
    ws = new WebSocket("ws://api:8001/ws/vaccines");
    ws.onmessage = function (evt) {
      setWsDataInputs({
        name: evt.data.name,
        lastName: evt.data.lastName,
        time: evt.data.time,
        bDay: evt.data.b_day,
        country: evt.data.country,
        passportId: evt.data.passport_id,
        email: evt.data.email,
        phone: evt.data.phone,
        city: evt.data.city,
      });
    };
    return false;
  };

  useEffect(() => {
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  return (
    <ProceduresWrapp>
      <div className="create_procedure_container">
        <div className="create_procedure_inputs">
          <label>{t("Name")}</label>
          <input disabled="true" value={wsDataInputs.name} />
          <label>{t("Last Name")}</label>
          <input disabled="true" value={wsDataInputs.lastName} />
          <label>{t("Email")}</label>
          <input disabled="true" value={wsDataInputs.email} />
          <label>{t("Country")}</label>
          <input disabled="true" value={wsDataInputs.country} />
          <label>{t("City")}</label>
          <input disabled="true" value={wsDataInputs.city} />
          <label>{t("Phone")}</label>
          <input disabled="true" value={wsDataInputs.phone} />
          <label>{t("Time")}</label>
          <input disabled="true" value={wsDataInputs.time} />
          <label>{t("Passport ID")}</label>
          <input disabled="true" value={wsDataInputs.passport_id} />
          <label>{t("Birthday")}</label>
          <input disabled="true" value={wsDataInputs.b_day} />
        </div>
        <button onClick={() => handleOnClick()}>Ok</button>
      </div>
    </ProceduresWrapp>
  );
};

export default CreateProcedure;
