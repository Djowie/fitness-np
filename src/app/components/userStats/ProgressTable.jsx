import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import "./ProgressTable.css";

export default class ProgressTable extends Component {
  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Week</Table.HeaderCell>
              <Table.HeaderCell>Average Weight</Table.HeaderCell>
              <Table.HeaderCell>Calorie Goal</Table.HeaderCell>
              <Table.HeaderCell>Average Calorie Realization</Table.HeaderCell>
              <Table.HeaderCell>Weekly Delta</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell disabled>1</Table.Cell>
              <Table.Cell>60.2</Table.Cell>
              <Table.Cell disabled>1900</Table.Cell>
              <Table.Cell negative>1849</Table.Cell>
              <Table.Cell disabled>
                <Icon name="minus circle" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell disabled>2</Table.Cell>
              <Table.Cell>
                60.6 <span className="weight-ranges">60.4 - 60.8</span>
              </Table.Cell>
              <Table.Cell disabled>1900</Table.Cell>
              <Table.Cell positive>1949</Table.Cell>
              <Table.Cell disabled positive>
                <Icon name="arrow alternate circle up" />
                {/* <Icon name="arrow alternate circle down " /> */}
                0.4
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}
