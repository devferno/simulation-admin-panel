import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { blue, red } from "@mui/material/colors";
import { Paper, Typography } from "@mui/material";

import useFetch from "../hooks/useFetch";

export function makeState(obj) {
  const arr = [];
  const obj1 = {
    name: "femelle",
    nombre: obj.femelle,
    simulations: obj.femelle_simulations,
  };
  const obj2 = {
    name: "male",
    nombre: obj.male,
    simulations: obj.male_simulations,
  };
  arr.push(obj1);
  arr.push(obj2);
  return arr;
}

const GenderChart = () => {
  const [dt] = useFetch("/age-statistics/");
  const [genderData] = useFetch("/gender-statistics/");
  return (
    <Paper sx={{ p: 2, height: "400px" }}>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Nombre des simulations par Sexe
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={makeState(genderData)}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="nombre" stackId="a" fill={red[600]} />
          <Bar dataKey="simulations" stackId="a" fill={blue[600]} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default GenderChart;
