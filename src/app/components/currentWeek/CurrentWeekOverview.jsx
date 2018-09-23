import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import "./CurrentWeekOverview.css";
import cuid from "cuid";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
// create temp mock object
const data = [
  {
    id: cuid(),
    date: "09-17-2018",
    weight: 60.3,
    fatpercentage: 13.3,
    realizedCalories: 1940,
    calorieGoal: 1900,
    protein: 124,
    carbohydrates: 160,
    fats: 60,
    macroDistribution: {
      protein: 30,
      carbohydrates: 45,
      fats: 25
    }
  },
  {
    id: cuid(),
    date: "09-18-2018",
    day: "Monday",
    weight: 59.8,
    fatpercentage: 13.6,
    realizedCalories: 2019,
    calorieGoal: 1900,
    protein: 114,
    carbohydrates: 190,
    fats: 40,
    macroDistribution: {
      protein: 30,
      carbohydrates: 45,
      fats: 25
    }
  },
  {
    id: cuid(),
    date: "09-19-2018",
    weight: 60.1,
    fatpercentage: 13.3,
    realizedCalories: 1738,
    calorieGoal: 1900,
    protein: 134,
    carbohydrates: 166,
    fats: 55,
    macroDistribution: {
      protein: 30,
      carbohydrates: 45,
      fats: 25
    }
  },
  {
    id: cuid(),
    date: "09-20-2018",
    weight: 59.9,
    fatpercentage: 13.4,
    realizedCalories: 1910,
    calorieGoal: 1900,
    protein: 120,
    carbohydrates: 162,
    fats: 55,
    macroDistribution: {
      protein: 30,
      carbohydrates: 45,
      fats: 25
    }
  },
  {
    id: cuid(),
    date: "09-21-2018",
    weight: 58.3,
    fatpercentage: 14.1,
    realizedCalories: 1809,
    calorieGoal: 1900,
    protein: 194,
    carbohydrates: 155,
    fats: 64,
    macroDistribution: {
      protein: 30,
      carbohydrates: 45,
      fats: 25
    }
  }
];
const lastWeekAveragesMockData = {
  weight: 59.58,
  fatpercentage: 13.42
};
const userMockData = {
  id: cuid(),
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

export class CurrentWeekOverview extends Component {
  state = {
    weekStats: data,
    daysLeft: 7 - data.length,
    user: userMockData,
    lastWeekAverages: lastWeekAveragesMockData
  };

  render() {
    //These functions should probably be in another component
    const daysLeft = [];
    const numberOfLoops = 7 - this.state.weekStats.length;
    for (let i = 0; i < numberOfLoops; i++) {
      daysLeft.push(<Table.Cell key={i} selectable />);
    }

    const rowValues = [
      {
        key: "weight",
        name: "Weigh-in"
      },
      {
        key: "fatpercentage",
        name: "Fat Percentage"
      },
      {
        key: "realizedCalories",
        name: "Calories"
      },
      {
        key: "protein",
        name: "Protein"
      },
      {
        key: "carbohydrates",
        name: "Carboydrates"
      },
      {
        key: "fats",
        name: "Fats"
      }
    ];

    return (
      <div>
        <h1>CurrentWeek Overview Table</h1>

        <Table definition>
          <TableHeader weekData={this.state.weekStats} />
          <TableRow
            weekData={this.state.weekStats}
            rowNames={rowValues}
            lastWeekAverages={this.state.lastWeekAverages}
            user={this.state.user}
          />
        </Table>
      </div>
    );
  }
}

export default CurrentWeekOverview;
