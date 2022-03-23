import { Paper, Typography } from "@mui/material";
import BarSimulation from "./BarSimulation";
import useFetch from "../hooks/useFetch";

const NombreSimulation = () => {
  const [data, isLoading] = useFetch("/simulations-nbr-month/", 20);
  console.log(data);
  return (
    <Paper sx={{ p: 2, height: "360px" }}>
      <Typography variant="body2" sx={{ mb: 2 }} color="textSecondary">
        Nombre des simulations par mois
      </Typography>
      {!isLoading && <BarSimulation data={data} />}
    </Paper>
  );
};

export default NombreSimulation;
