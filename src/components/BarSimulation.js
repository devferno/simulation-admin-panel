import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { blue } from "@mui/material/colors";

const BarSimulation = ({ data }) => {
  console.log(data);
  return (
    <ResponsiveContainer width={"100%"} height="90%">
      <BarChart data={data} margin={{ top: 5 }} barSize={20} fontSize="13px">
        <Bar
          dataKey="nombre"
          margin="0"
          fill={blue[600]}
          background={{ fill: "#eee" }}
        />
        <XAxis dataKey="month" padding={{ left: 0, right: 0 }} />
        <YAxis />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarSimulation;
