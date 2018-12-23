import React, { Component } from "react";
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

export class ProgressGraph extends Component {
  state = {
    value: false,
    filter: null
  };

  render() {
    const { data } = this.props;

    const mockData = [
      { week: 0, calorieGoal: 2000, caloriesConsumed: 1925.6, weight: 58.7 },
      {
        week: 1,
        calorieGoal: 2000,
        caloriesConsumed: 1860,
        weight: 58.83,
        delta: [58.813, 58.927]
      },
      {
        week: 2,
        calorieGoal: 2100,
        caloriesConsumed: 2097,
        weight: 59.06,
        trend: 60.04,
        delta: [58.813, , 61.927]
      },
      {
        week: 3,
        calorieGoal: 2300,
        caloriesConsumed: 2297,
        weight: 61.06,
        trend: 61.8,
        delta: [60.813, 61.927]
      },
      {
        week: 4,
        trend: 62,
        delta: [61.113, 62.927]
      }
    ];

    return (
      <div>
        <ComposedChart
          width={800}
          height={700}
          data={mockData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="week" label="Week" name="Week" />
          <CartesianGrid strokeDasharray="12 12" />
          <YAxis yAxisId="calories" />
          <YAxis yAxisId="weight" orientation="right" />
          <Tooltip />
          <Legend />

          <Bar yAxisId="calories" dataKey="calorieGoal" fill="#92c9ed" />
          <Bar yAxisId="calories" dataKey="caloriesConsumed" fill="#838a8e" />
          <Line
            yAxisId="weight"
            type="linear"
            dataKey="weight"
            stroke="#81ae04"
            strokeWidth="3"
            activeDot={{ r: 1 }}
          />
          <Line
            yAxisId="weight"
            type="linear"
            dataKey="trend"
            stroke="#ffa86e"
            strokeDasharray="3 4 5 2"
            strokeWidth="2"
          />
          <Area
            yAxisId="weight"
            type="linear"
            dataKey="delta"
            stroke="#8884d8"
            fillOpacity={0.4}
            fill="green"
          />
        </ComposedChart>
      </div>
    );
  }
}
export default ProgressGraph;
