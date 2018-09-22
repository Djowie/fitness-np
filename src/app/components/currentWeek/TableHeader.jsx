import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import moment from "moment";

//for now just press warnings, however make sure the date
//in the objects is s ISO 8601 String
moment.suppressDeprecationWarnings = true;
export class TableHeader extends Component {
  render() {
    const { weekData } = this.props;

    //Render remainder day loop
    const daysLeft = [];
    const latestDate = weekData[weekData.length - 1]["date"];
    const numberOfLoops = 7 - weekData.length;
    for (let i = 1; i <= numberOfLoops; i++) {
      let nextday = moment(latestDate, "MM-DD-YYYY").add(i, "d");
      daysLeft.push(
        <Table.HeaderCell key={i} disabled>
          {nextday.format("dddd")}
          <br />
          <span className="weekoverview-date">
            {moment(nextday).format("DD-MM")}
          </span>
        </Table.HeaderCell>
      );
    }
    return (
      <Table.Header>
        <Table.Row textAlign="center">
          <Table.HeaderCell>
            <Icon name="calendar alternate" />
            {/* Week 3 */}
          </Table.HeaderCell>

          {weekData.map(day => (
            <Table.HeaderCell key={day.id} disabled>
              {moment(day.date).format("dddd")}
              <br />
              <span className="weekoverview-date">
                {moment(day.date).format("DD-MM")}
              </span>
            </Table.HeaderCell>
          ))}

          {daysLeft}
          <Table.HeaderCell className="table-running-average">
            <Icon name="line graph" />
            Running Average
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }
}

export default TableHeader;
