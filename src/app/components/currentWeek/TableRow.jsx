import React, { Component } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import "./TableRow.css";

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
  deltaJudgement = (runningAverage, lastWeekAverages, currentUser) => {
    //get delta goal values from user
    let minDelta = currentUser.minDelta;
    let maxDelta = currentUser.maxDelta;
    let userGoal = currentUser.userGoal;
    //current delta, based on running average verus last average weight(week)
    let currentDelta = runningAverage - lastWeekAverages;

    //create return value:
    let value;
    //if currentDelta is higher than MAX we should notify the user
    //TODO: Perhaps we should also create an hover element
    //TODO: to show additional data.
    if (currentDelta > maxDelta) {
      return (
        <div className="red">
          <Icon name="angle double up" />
          {currentDelta.toFixed(3)}
          <span className="old"> {lastWeekAverages}</span>
        </div>
      );
    } else if (currentDelta < minDelta && currentDelta > 0) {
      //if currentDetla is lower than MIN we should notify the user
      return (
        <div className="orange">
          <Icon name="angle up" />
          {currentDelta.toFixed(3)}
          <br />
          <span className="old"> {lastWeekAverages}</span>
        </div>
      );
    } else if (currentDelta < minDelta && currentDelta < 0) {
      // if currentdelta is even below 0 and the goal is bulking
      // we should alert the user
      return (
        <div className="red">
          <Icon name="stop circle" />
          {currentDelta.toFixed(3)}
        </div>
      );
    } else {
      return (
        <div className="green">
          <Icon name="angle double up" />
          {currentDelta.toFixed(3)}
        </div>
      );
    }
  };

  render() {
    const { weekData, rowNames, lastWeekAverages, user } = this.props;

    //calculate remainder days
    const daysLeft = [];
    const numberOfLoops = 7 - weekData.length;
    for (let i = 0; i < numberOfLoops; i++) {
      daysLeft.push(
        <Table.Cell key={i} selectable textAlign="center">
          -
        </Table.Cell>
      );
    }

    return (
      <Table.Body>
        {rowNames.map(rowValue => (
          <Table.Row
            key={rowValue.key}
            textAlign="center"
            verticalAlign="middle"
          >
            <Table.Cell>{rowValue.name}</Table.Cell>
            {weekData.map(day => (
              <Table.Cell key={day.id} disabled>
                {day[rowValue.key]}
              </Table.Cell>
            ))}
            {daysLeft}
            <Table.Cell className="table-running-average" disabled>
              {/* Create a running average on all available values in table */}
              {this.runningAverage(weekData, rowValue.key)}
              {/* when rowvalue equals specific values, add extra data */}
              {rowValue.key === "weight" &&
                this.deltaJudgement(
                  this.runningAverage(weekData, rowValue.key),
                  lastWeekAverages.weight,
                  user
                )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    );
  }
}

export default TableRow;
