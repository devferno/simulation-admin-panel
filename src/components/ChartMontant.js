import { Paper, Box, Typography } from "@mui/material";
import ExampleLineChart from "./LineChart";
import useFetch from "../hooks/useFetch";
function ChartMontant() {
  const [plot, isLoading, sliced] = useFetch("/montant-temps/", 20);

  return (
    <Box component={Paper} sx={{ p: 2, height: "360px", overflow: "hidden" }}>
      <Typography
        sx={{ width: "100%", mb: 2 }}
        variant="body2"
        color="textSecondary"
      >
        Variation de montant en fonction des jours
      </Typography>
      {!isLoading && <ExampleLineChart data={sliced} />}
    </Box>
  );
}

export default ChartMontant;
