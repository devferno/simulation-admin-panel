import StatutCard from "../components/StatutCard";
import { Person } from "@mui/icons-material";
import { Grid } from "@mui/material";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";

export function getTopProjet(obj) {
  let topProjet;
  let number = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (key === "simulation_count") {
    } else {
      if (value[1] > number) {
        number = value[1];
        topProjet = value[0];
      }
    }
  }
  return topProjet;
}
export function getTopMetier(obj) {
  let topMetier;
  let number = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (
      key === "clients_count" ||
      key === "clients_un_verified" ||
      key === "clients_verified"
    ) {
    } else {
      if (value[1] > number) {
        number = value[1];
        topMetier = value[0];
      }
    }
  }
  return topMetier;
}

const Status = ({ statistics, isLoading, clientsLoading, clientsStates }) => {
  const [statusData, setStatus] = useState([
    {
      title: "Nombre des clients",
      icon: <Person fontSize="large" color="primary" />,
      color: "primary",
    },
    {
      title: "Nombre des Simulations",
      icon: <CandlestickChartIcon fontSize="large" color="secondary" />,
      color: "secondary",
    },
    {
      title: "Metier plus selectionnee",
      icon: <WorkIcon fontSize="large" color="error" />,
      color: "error",
    },
    {
      title: "Projet plus selectionne",
      icon: <AttachMoneyIcon fontSize="large" color="success" />,
      color: "success",
    },
  ]);
  return (
    <>
      {statusData.map((item, index) => (
        <Grid item xs={12} sm={6} key={index} md={3} sx={{ p: 1 }}>
          <StatutCard
            title={item.title}
            numbre={
              index === 0
                ? !clientsLoading && clientsStates.clients_count
                : // ? !clientsLoading && clientStates["clients_count"]
                index === 1
                ? !isLoading && statistics.simulations_count
                : null
            }
            icon={item.icon}
            color={item.color}
            description={
              index === 3
                ? !isLoading && getTopProjet(statistics)
                : index === 2
                ? !isLoading && getTopMetier(clientsStates)
                : null
            }
          />
        </Grid>
      ))}
    </>
  );
};

export default Status;
