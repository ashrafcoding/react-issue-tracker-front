import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";


export default function Donut({deta, val, fil}) {
  return (
    <PieChart width={290} height={290}>
      <Pie
        data={deta}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        <Label value= {val} offset={0} position="center" />
        <Cell fill={fil}/>     
      </Pie>
    </PieChart>
  );
}
