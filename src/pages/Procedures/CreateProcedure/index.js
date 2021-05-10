import React, { useState, useEffect, useRef } from "react";
import ProceduresWrapp from "../index";

const CreateProcedure = () => {
  const [wsDataInputs, setWsDataInputs] = useState({ time: null });
  let ws;
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
    if (ws) {
      return false;
    }
    ws = new WebSocket("ws://api:8001/ws/vaccines");
    ws.onmessage = function (evt) {
      setWsDataInputs({ time: evt.data });
    };
    return false;
  };

  useEffect(() => {
    return () => {
      ws.close();
    };
  }, []);

  return (
    <ProceduresWrapp>
      <div className="create_procedure_container">
        <div className="create_procedure_inputs">
          <label>Something</label>
          <input disabled="true" value={wsDataInputs.time} />
          <label>Something</label>
          <input disabled="true" value={wsDataInputs.time} />
          <label>Something</label>
          <input disabled="true" value={wsDataInputs.time} />
        </div>
        <button onClick={() => handleOnClick()}>Ok</button>
      </div>
    </ProceduresWrapp>
  );
};

export default CreateProcedure;
