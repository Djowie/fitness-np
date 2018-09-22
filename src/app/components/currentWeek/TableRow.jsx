import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export class TableRow extends Component {
  //calculate running average
  runningAverage = (value, key) => {
    const array = [];
    //loop through all the values of state
    value.map(day => {
      array.push(day[key]);
    });
    const sum = array.reduce((total, amount) => total + amount) / value.length;
    return sum.toFixed(2);
  };

  render() {
    const { weekData, rowNames } = this.props;

    //calculate remainder days
    const daysLeft = [];
    const numberOfLoops = 7 - weekData.length;
    for (let i = 0; i < numberOfLoops; i++) {
      daysLeft.push(
        <Table.Cell key={i} selectable textAlign="center">
          {" "}
          -{" "}
        </Table.Cell>
      );
    }

    return (
      <Table.Body>
        {rowNames.map(rowValue => (
          <Table.Row key={rowValue.key} textAlign="center">
            <Table.Cell>{rowValue.name}</Table.Cell>
            {weekData.map(day => (
              <Table.Cell key={day.id} disabled>
                {day[rowValue.key]}
              </Table.Cell>
            ))}
            {daysLeft}
            <Table.Cell className="table-running-average" disabled>
              {this.runningAverage(weekData, rowValue.key)}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    );
  }
}

export default TableRow;
