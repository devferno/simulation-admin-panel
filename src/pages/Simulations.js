import { useEffect, useState } from "react";
import useFetchSimulation from "../hooks/useFetchSimulation";
import SimulationsComponent from "../components/SimulationComponent";
import axios from "axios";
import { Button } from "@mui/material";

const Simulations = () => {
  const [simulations, statistics, isLoading] = useFetchSimulation();
  const [dataInCSV, setDataCSV] = useState();
  const config = {
    headers: {
      Authorization: "JWT " + localStorage.getItem("access"),
    },
  };
  useEffect(() => {
    axios
      .get("/export-simulations-csv/", config)
      .then((res) => setDataCSV(res.data));
  }, []);
  return (
    <>
      {dataInCSV && (
        <a
          href={`data:text/csv;charset=utf-8,${escape(dataInCSV)}`}
          download="simulations.csv"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{ mb: 2 }}
            disableElevation
            color="primary"
          >
            Download as CSV
          </Button>
        </a>
      )}
      <SimulationsComponent
        simulations={simulations}
        current
        all
        showUser
        isLoading={isLoading}
      />
    </>
  );
};

export default Simulations;
