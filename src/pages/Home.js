import { Grid, Button } from "@mui/material";
import Status from "../components/Status";
import useFetchSimulation from "../hooks/useFetchSimulation";
import useFetchClient from "../hooks/useFetchClient";
import ChartMontant from "../components/ChartMontant";
import ChartProjet from "../components/ChartProjet";
import Simulations from "../components/SimulationComponent";
import Users from "../components/UserComponent";
import VerifiedBarChart from "../components/VerfiedBarChart";
import useFetchOrdered from "../hooks/useFetchOrdered";

const Home = () => {
  const [simulations, statistics, isLoading] = useFetchSimulation();
  const [clients, clientsStates, clientsLoading] = useFetchClient();
  const [ordered] = useFetchOrdered();

  console.log(ordered);

  return (
    <Grid container>
      <Status
        statistics={statistics}
        isLoading={isLoading}
        clientsStates={clientsStates}
        clientsLoading={clientsLoading}
      />
      <Grid item xs={12} sx={{ p: 1 }} md={7}>
        <ChartMontant />
      </Grid>
      <ChartProjet statistics={statistics} isLoading={isLoading} />
      <Grid item sx={{ p: 1 }} xs={12} md={6}>
        <Simulations
          simulations={simulations}
          disableDate
          isLoading={isLoading}
        />
      </Grid>
      <Grid item xs={12} sx={{ p: 1 }} md={6}>
        <Users clients={ordered} isLoading={clientsLoading} contact />
      </Grid>

      <Grid item xs={12} sx={{ p: 1 }} md={6}>
        <VerifiedBarChart />
      </Grid>
    </Grid>
  );
};

export default Home;
