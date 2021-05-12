import React, { useState, useEffect, useRef } from "react";
import ProceduresWrapp from "../index";
import { useTranslation } from "react-i18next";
import { API } from "../../../api/APIOptions";
import { detail_procedures } from "../../../constants/config";

const CreateProcedure = () => {
  let ws = new WebSocket("ws://localhost:8001/");
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

  useEffect(() => {
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!ws) {
      return false;
    }
    ws.onmessage = function (evt) {
      var data = JSON.parse(evt.data);

      setWsDataInputs({
        name: data.name,
        lastName: data.last_name,
        time: data.time,
        bDay: data.b_day,
        country: data.country,
        passportId: data.passport_id,
        email: data.email,
        phone: data.phone,
        city: data.city,
      });
    };
    return false;
  }, []);

  const sendData = () => {
    const test = {
      data: {
        type: "procedures",
        attributes: {
          name: wsDataInputs.name,
          date: wsDataInputs.time,
        },
        relationships: {
          hospital: {
            data: {
              id: window.localStorage.getItem("id"),
              type: "hospitals",
            },
          },
          type_id: {
            data: {
              id: "1",
              type: "types",
            },
          },
          patient: {
            data: {
              id: "1",
              type: "patients",
            },
          },
        },
      },
      included: [],
    };
    API.post(detail_procedures, test, window.localStorage.getItem("forHeader"));
  };

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
        <button
          onClick={() => sendData()}
          style={{ marginTop: "20px" }}
          className="primary_button"
        >
          {t("Create procedure")}
        </button>
      </div>
    </ProceduresWrapp>
  );
};

export default CreateProcedure;
