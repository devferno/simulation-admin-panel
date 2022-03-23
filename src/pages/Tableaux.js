import React from "react";
import UserComponent from "../components/UserComponent";
import Simulations from "../components/SimulationComponent";
import { Grid } from "@mui/material";
import useFetchSimulation from "../hooks/useFetchSimulation";
import useFetchClient from "../hooks/useFetchClient";
const Tableaux = () => {
  const [simulations, statistics, isLoading] = useFetchSimulation();
  const [clients, clientsStates, clientsLoading] = useFetchClient();
  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 1 }}>
        <UserComponent
          clients={clients}
          isLoading={isLoading}
          showdate
          showEmail
          contact
          showGender
          showAge
        />
      </Grid>
      <Grid item xs={12} sx={{ p: 1 }}>
        <Simulations simulations={simulations} showUser isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default Tableaux;
