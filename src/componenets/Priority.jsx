import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";



export default function Priority({deta}) {
  return (
    <div>
     <ComposedChart
      layout="vertical"
      width={400}
      height={300}
      data={deta}
      margin={{
        top: 10,
        right: 20,
        bottom: 10,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Tickets" barSize={40} fill="#8884d8" />
    </ComposedChart>
    </div>
  );
}
