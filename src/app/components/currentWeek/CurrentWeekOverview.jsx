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
    day: "Monday",
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

export class CurrentWeekOverview extends Component {
  state = {
    weekStats: data,
    daysLeft: 7 - data.length
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
        key: "carbohydrated",
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
          <TableRow weekData={this.state.weekStats} rowNames={rowValues} />
        </Table>
      </div>
    );
  }
}

export default CurrentWeekOverview;
