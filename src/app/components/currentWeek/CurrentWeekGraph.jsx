import React, { Component } from "react";
//TODO: remove cuid, just been added for mock data
import cuid from "cuid";
import {
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  Tooltip,
  Legend
} from "recharts";
import "../../../../node_modules/react-vis/dist/style.css";
// import CustomTooltip from "./CustomTooltip";

export class CurrentWeekGraph extends Component {
  data;
  state = {
    value: false,
    filter: null
  };

  render() {
    // TODO: create API request to get data instead of Mock data
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
    return (
      <div>
        <ComposedChart
          width={600}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="date" label={{ value: "Days", position: "outsideBottom", dy: 12 }} name="Days" 
 />
          <CartesianGrid strokeDasharray="12 12" />
          <YAxis yAxisId="calories" />
          <YAxis yAxisId="weight" orientation="right" />
          <Tooltip />
          <Legend />

          <Bar
            yAxisId="calories"
            dataKey="realizedCalories"
            fill="#92c9ed"
            name="Calorie Goal"
          />
          <Bar
            yAxisId="calories"
            dataKey="calorieGoal"
            fill="#838a8e"
            name="Consumed Calories"
          />
          <Line
            yAxisId="weight"
            type="linear"
            dataKey="weight"
            name="Weight (KG)"
            stroke="#81ae04"
            strokeWidth="3"
            activeDot={{ r: 1 }}
          />
          <Line
            yAxisId="weight"
            type="linear"
            dataKey="fatpercentage"
            name="Trendline"
            stroke="#ffa86e"
            strokeDasharray="3 4 5 2"
            strokeWidth="2"
          />
        </ComposedChart>
      </div>
    );
  }
}
export default CurrentWeekGraph;
