import React from "react";
import { BarChart, Bar } from "recharts";

import "./priority.css";



export default function Priority({deta}) {
  return (
    <div>
      <BarChart width={150} height={200} data={deta}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
