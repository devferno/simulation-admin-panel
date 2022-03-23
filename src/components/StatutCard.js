import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const StatutCard = ({ title, numbre, icon, color, description }) => {
  return (
    <Box
      sx={{
        p: 2,
        borderLeft: (theme) => `3px solid ${theme.palette[color].main}`,
      }}
      component={Paper}
    >
      <Typography variant="body2" noWrap color="textSecondary">
        {title}
      </Typography>
      <Box
        sx={{
          mt: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: "500" }}
          variant={description ? "h6" : "h5"}
          noWrap
        >
          {description ? description : numbre}
        </Typography>
        {icon}
      </Box>
    </Box>
  );
};

export default StatutCard;
