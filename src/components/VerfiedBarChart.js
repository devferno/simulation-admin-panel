import React from "react";
import { Paper, Typography, LinearProgress, Box } from "@mui/material";
import useFetchClient from "../hooks/useFetchClient";

export function getPercent(sum, verif, noVerif) {
  return [(verif * 100) / sum, (noVerif * 100) / sum];
}

function VerifiedBarChart() {
  const [clients, statistics] = useFetchClient();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography
        sx={{ width: "100%", mb: 2 }}
        variant="body2"
        color="textSecondary"
      >
        Nombre des clients vérifiés
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">Verifiés</Typography>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          {statistics.clients_verified}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        sx={{ height: "14px", margin: "6px 0" }}
        value={(statistics.clients_verified * 100) / statistics.clients_count}
      />
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="body1">Non Vérifiés</Typography>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          {statistics.clients_un_verified}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        color="secondary"
        sx={{ height: "14px", margin: "6px 0" }}
        value={
          (statistics.clients_un_verified * 100) / statistics.clients_count
        }
      />
    </Paper>
  );
}

export default VerifiedBarChart;
