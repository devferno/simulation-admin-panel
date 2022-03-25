import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import useFetch from "../hooks/useFetch";
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { indigo } from "@mui/material/colors";
function makeState(obj) {
  const arr = [];
  for (const [key, value] of Object.entries(obj)) {
    const newobj = {};
    newobj.name = key.substring(9, key.length);
    newobj.value = value;
    arr.push(newobj);
  }
  return arr;
}

const AgeChart = () => {
  const [data] = useFetch("/age-statistics/");
  console.log(data);
  return (
    <Box sx={{ p: 2, height: "340px" }} component={Paper}>
      <Typography
        sx={{ width: "100%", mb: 2 }}
        variant="body2"
        color="textSecondary"
      >
        Nombre des clients par age
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={makeState(data)}>
          <Bar dataKey="value" fill={indigo[500]} />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default AgeChart;
