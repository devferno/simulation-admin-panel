import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import ExamplePieChart from "./PieChart";

function ChartProjet({ statistics, isLoading }) {
  return (
    <Grid item xs={12} sx={{ p: 1 }} md={5}>
      <Box component={Paper} sx={{ p: 2 }} height="360px">
        <Typography
          sx={{ width: "100%", mb: 2 }}
          variant="body2"
          color="textSecondary"
        >
          Selection des Projets
        </Typography>
        {!isLoading && <ExamplePieChart data={statistics} />}
      </Box>
    </Grid>
  );
}

export default ChartProjet;
