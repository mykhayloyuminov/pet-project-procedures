import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table, Loader } from "semantic-ui-react";
import { detail_procedures, detail_patient } from "../../../constants/config";
import { API } from "../../../api/APIOptions";
import ProceduresWrapp from "../index";
import { error } from "../../../utils/index";
import { useTranslation } from "react-i18next";

const ProceduresList = () => {
  const { t } = useTranslation();
  const header = window.localStorage.getItem("forHeader");
  const [links, setLinks] = useState(null);
  const [noMore, setNoMore] = useState(false);
  const [procedures, setProcedures] = useState({
    data: [],
    loading: false,
    error: false,
  });
  const handleAddProcedures = () => {
    setProcedures({ ...procedures, loading: true });
    API.get(links.next, header)
      .then((response) => response.json())
      .then((result) => {
        setLinks(result.links);
        const patientsId = [];
        for (let i = 0; i < result.data.length; i++) {
          patientsId.push(result.data[i].relationships.patient.data.id);
        }
        return Promise.all(
          patientsId.map((id) =>
            API.get(`${detail_patient}/${id}`, header).then((response) =>
              response.json()
            )
          )
        );
      })
      .then((result) => {
        if (result.length == 0) {
          setNoMore(true);
          return;
        }
        setProcedures({
          ...procedures,
          loading: false,
          data: [...procedures.data, ...result],
        });
      })
      .catch((e) => setProcedures({ ...procedures, error: true }));
  };
  console.log(noMore);
  useEffect(() => {
    API.get(detail_procedures, header)
      .then((response) => response.json())
      .then((result) => {
        setLinks(result.links);
        const patientsId = [];
        for (let i = 0; i < result.data.length; i++) {
          patientsId.push(result.data[i].relationships.patient.data.id);
        }
        return Promise.all(
          patientsId.map((id) =>
            API.get(`${detail_patient}/${id}`, header).then((response) =>
              response.json()
            )
          )
        );
      })
      .then((result) => {
        setProcedures({
          ...procedures,
          data: [...result],
          loading: false,
        });
      });
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
              <Table.HeaderCell>{t("Name")}</Table.HeaderCell>
              <Table.HeaderCell>{t("Last Name")}</Table.HeaderCell>
              <Table.HeaderCell>{t("Birthday")}</Table.HeaderCell>
              <Table.HeaderCell>{t("Country")}</Table.HeaderCell>
              <Table.HeaderCell>{t("City")}</Table.HeaderCell>
              <Table.HeaderCell>{t("Passport ID")}</Table.HeaderCell>
              <Table.HeaderCell>{t("Email")}</Table.HeaderCell>
              <Table.HeaderCell>{t("Phone")}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {procedures?.data?.map((item) => (
              <Table.Row>
                <Table.Cell>{item.data.attributes.name}</Table.Cell>
                <Table.Cell>{item.data.attributes.last_name}</Table.Cell>
                <Table.Cell>{item.data.attributes.b_day}</Table.Cell>
                <Table.Cell>{item.data.attributes.country}</Table.Cell>
                <Table.Cell>{item.data.attributes.city}</Table.Cell>
                <Table.Cell>{item.data.attributes.passport_id}</Table.Cell>
                <Table.Cell>{item.data.attributes.email}</Table.Cell>
                <Table.Cell>{item.data.attributes.phone}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {procedures.data?.length > 100 || noMore ? null : (
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
        )}
      </div>
    </ProceduresWrapp>
  );
};

export default ProceduresList;
