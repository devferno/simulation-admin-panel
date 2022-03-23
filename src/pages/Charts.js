import React from "react";
import ChartMontant from "../components/ChartMontant";
import ChartProjet from "../components/ChartProjet";
import useFetchSimulation from "../hooks/useFetchSimulation";
import { Grid } from "@mui/material";
import VerfiedBarChart from "../components/VerfiedBarChart";
import NombreSimulation from "../components/NombreSimulation";
import GenderChart from "../components/GenderChart";
import MetierChart from "../components/MetierChart";
const Charts = () => {
  const [simulations, statistics, isLoading] = useFetchSimulation();
  return (
    <Grid container>
      <Grid item xs={12} md={12} sx={{ p: 1 }}>
        <ChartMontant />
      </Grid>
      <ChartProjet statistics={statistics} isLoading={isLoading} />

      <Grid item xs={12} md={7} sx={{ p: 1 }}>
        <NombreSimulation />
      </Grid>
      <Grid item xs={12} sx={{ p: 1 }} md={6}>
        <GenderChart />
      </Grid>
      <Grid item xs={12} sx={{ p: 1 }} md={6}>
        <MetierChart />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 1 }}>
        <VerfiedBarChart />
      </Grid>
    </Grid>
  );
};

export default Charts;
