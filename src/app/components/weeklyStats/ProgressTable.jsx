import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import "./ProgressTable.css";

//TODO: Set an API response instead of mock data
let weeklyStat = [
  {
    weekNumber: 1,
    averageWeight: 60.2,
    calorieGoal: 2100,
    caloriesConsumed: 1849,
    expectedWeightRange: "60.4 - 60.8"
  },
  {
    weekNumber: 2,
    averageWeight: 60.6,
    calorieGoal: 2000,
    caloriesConsumed: 2049,
    expectedWeightRange: "60.4 - 60.8"
  }
];

const userMockData = {
  id: 12319232103021,
  firstName: "Joey",
  lastName: "Bakx",
  username: "djowie",
  metric: "kg",
  profilePicture: "https://randomuser.me/api/portraits/med/men/65.jpg",
  lastWeightIn: {
    weight: 60.2,
    fatpercentage: 12.9,
    date: "2018-09-22T20:13:30+00:00"
  },
  averageStats: {
    weight: 60.2,
    fatpercentage: 12.9,
    lastUpdated: "2018-09-22T20:13:30+00:00"
  },
  goal: "bulk",
  level: "intermediate",
  minDelta: 0.1133980925,
  maxDelta: 0.226796185,
  nutritionRatio: {
    lastModifiedDate: "2018-09-22T22:12:06+00:00",
    protein: 30,
    carbs: 45,
    fats: 25
  }
};
export default class ProgressTable extends Component {
  state = { weeklyStat: weeklyStat, user: userMockData };

  render() {
    return (
      <div>
        <h2>Week Statistics</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Week</Table.HeaderCell>
              <Table.HeaderCell>Average Weight</Table.HeaderCell>
              <Table.HeaderCell>Calorie Goal</Table.HeaderCell>
              <Table.HeaderCell>Average Calorie Realization</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.weeklyStat.map(week => (
              <Table.Row>
                <Table.Cell disabled>{week.weekNumber}</Table.Cell>
                <Table.Cell>
                  60.6{" "}
                  <span className="weight-ranges">
                    {week.expectedWeightRange}
                  </span>
                </Table.Cell>
                <Table.Cell disabled>{week.calorieGoal}</Table.Cell>
                {this.state.user.goal === "bulk" &&
                  (week.calorieGoal > week.caloriesConsumed && (
                    <Table.Cell negative>{week.caloriesConsumed}</Table.Cell>
                  ))}
                {this.state.user.goal === "bulk" &&
                  (week.calorieGoal < week.caloriesConsumed && (
                    <Table.Cell positive>{week.caloriesConsumed}</Table.Cell>
                  ))}
                {this.state.user.goal === "cut" &&
                  (week.calorieGoal > week.caloriesConsumed && (
                    <Table.Cell positive>{week.caloriesConsumed}</Table.Cell>
                  ))}
                {this.state.user.goal === "cut" &&
                  (week.calorieGoal < week.caloriesConsumed && (
                    <Table.Cell negative>{week.caloriesConsumed}</Table.Cell>
                  ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        Last sync: xx-xx-xx xx/xx/xx
      </div>
    );
  }
}
