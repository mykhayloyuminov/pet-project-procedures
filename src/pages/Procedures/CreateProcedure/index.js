import React, { useState, useEffect, useRef } from "react";
import ProceduresWrapp from "../index";
import { useTranslation } from "react-i18next";

let ws = new WebSocket("ws://localhost:8001/");
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

  // const [wsDataInputs, setWsDataInputs] = useState({ time: null });
  // let ws = ;
  //   const ws = useRef(null);

  //   useEffect(() => {
  //     ws.current = new WebSocket("ws://localhost:8080/echo");
  //     ws.current.onopen = () => console.log("ws opened");
  //     ws.current.onclose = () => console.log("ws closed");

  //     return () => {
  //       ws.current.close();
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (!ws.current) return;

  //     ws.current.onmessage = (e) => {
  //       const message = JSON.parse(e.data);
  //       console.log("e", message);
  //     };
  //   }, []);


  const handleOnClick = () => {
    if (!ws) {
      console.log("foo")
      return false;
    }
    ws.onmessage = function (evt) {
      console.log(evt)

      var data = JSON.parse(evt.data)

      setWsDataInputs({
        name: data.name,
        lastName: data.last_name,
        time: data.time,
        bDay: data.b_day,
        country: data.country,
        passportId:data.passport_id,
        email: data.email,
        phone: data.phone,
        city: data.city,
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
          <input disabled="true" value={wsDataInputs.passportId} />
          <label>{t("Birthday")}</label>
          <input disabled="true" value={wsDataInputs.bDay} />
        </div>
        <button onClick={() => handleOnClick()}>Ok</button>
      </div>
    </ProceduresWrapp>
  );
};

export default CreateProcedure;
