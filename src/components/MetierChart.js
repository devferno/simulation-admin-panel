import React from "react";
import { Paper, Typography } from "@mui/material";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import useFetchClient from "../hooks/useFetchClient";
import { blue } from "@mui/material/colors";

function makeState(obj) {
  const arr = [];
  for (var [cle, valeur] of Object.entries(obj)) {
    if (
      cle === "clients_count" ||
      cle === "clients_un_verified" ||
      cle === "clients_verified"
    ) {
    } else {
      const newobj = { name: valeur[0], nombre: valeur[1] };
      arr.push(newobj);
    }
  }
  return arr;
}

const MetierChart = () => {
  const [clients, statistics] = useFetchClient();

  console.log(statistics);
  return (
    <Paper sx={{ p: 2, height: "400px" }}>
      <Typography variant="body2">Profession plus sélectionnée</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={makeState(statistics)}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar dataKey="nombre" fill={blue[800]} fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default MetierChart;
