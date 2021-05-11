import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table, Loader } from "semantic-ui-react";
import { detail_procedures } from "../../../constants/config";
import { API } from "../../../api/APIOptions";
import ProceduresWrapp from "../index";
import { error } from "../../../utils/index";
import { useTranslation } from "react-i18next";

const ProceduresList = () => {
  const { t } = useTranslation();
  const header = window.localStorage.getItem("forHeader");
  const [procedures, setProcedures] = useState({
    data: [
      {
        data: {
          id: 1,
          type: "procedures",
          attributes: {
            id: 0,
            name: "string",
            date: null,
          },
          relationships: {
            type_id: {
              data: {
                id: 1,
                type: "types",
              },
            },
            patient: {
              data: {
                id: 1,
                type: "patients",
              },
            },
            hospital: {
              data: {
                id: 1,
                type: "hospitals",
              },
            },
          },
        },
      },
    ],
    links: null,
    loading: false,
    error: false,
  });
  const handleAddProcedures = () => {
    setProcedures({ ...procedures, loading: true });
    API.get(procedures.links.next, header)
      .then((response) => response.json())
      .then((result) =>
        setProcedures({
          ...procedures,
          loading: false,
          data: procedures.data.push(result.data),
          links: result.links,
        })
      )
      .catch((e) => setProcedures({ ...procedures, error: true }));
  };
  useEffect(() => {
    API.get(detail_procedures, header)
      .then((response) => response.json())
      .then((result) => console.log(result));
  }, []);
  if (procedures.error) {
    return error(t);
  }
  return (
    <ProceduresWrapp>
      <div className="procedures_list_wrapp">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{t("ID")}</Table.HeaderCell>
              <Table.HeaderCell>{t("Name")}</Table.HeaderCell>
              <Table.HeaderCell>{t("Time")}</Table.HeaderCell>
              <Table.HeaderCell>{t("ID")}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {procedures.data.map((item) => (
              <Table.Row>
                <Table.Cell>{item.data.id}</Table.Cell>
                <Table.Cell>{item.data.attributes.name}</Table.Cell>
                <Table.Cell>{item.data.attributes.date}</Table.Cell>
                <Table.Cell>{item.data.attributes.id}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <div className="loader_container">
          {procedures.loading ? null : (
            <button
              onClick={() => handleAddProcedures()}
              className="primary_button"
            >
              {t("Load more")}
            </button>
          )}
          <Loader active={procedures.loading} />
        </div>
      </div>
    </ProceduresWrapp>
  );
};

export default ProceduresList;
