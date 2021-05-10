import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { detail_procedures } from "../../../constants/config";
import { API } from "../../../api/APIOptions";
import ProceduresWrapp from "../index";

const ProceduresList = () => {
  const [procedures, setProcedures] = useState({
    data: [],
    loading: false,
    error: false,
  });
  useEffect(() => {
    const header = window.localStorage.getItem("forHeader");

    API.get(detail_procedures, header);
    //   .then((response) => response.json())
    //   .then((result) => setState);
  }, []);
  return (
    <ProceduresWrapp>
      <div className="procedures_list_wrapp">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {procedures.data.map((item) => (
              <Table.Row>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.attributes.name}</Table.Cell>
                <Table.Cell>{item.attributes.date}</Table.Cell>
                <Table.Cell>{item.attributes.id}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </ProceduresWrapp>
  );
};

export default ProceduresList;
