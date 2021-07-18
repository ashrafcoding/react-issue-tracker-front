import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

export default function Donut({ deta, val, fil }) {
  return (
    <div className="donuts">
      <PieChart width={250} height={290}>
        <Pie
          data={deta}
          cx={120}
          cy={110}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          <Label value={val} offset={0} position="center" />
          <Cell fill={fil} />
        </Pie>
      </PieChart>
    </div>
  );
}
