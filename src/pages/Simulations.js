import { useEffect, useState } from "react";
import useFetchSimulation from "../hooks/useFetchSimulation";
import SimulationsComponent from "../components/SimulationComponent";
import axios from "axios";
import { Button, Box } from "@mui/material";
import { CustomInput } from "./Signin";
import SearchIcon from "@mui/icons-material/Search";

const Simulations = () => {
  const [simulations, , isLoading, filtered, setFiltered] =
    useFetchSimulation();
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
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
    setFiltered(
      simulations
        .slice(0, simulations.length - 1)
        .filter((simul) => simul.client.email.includes(value.toLowerCase()))
    );
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
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
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onSubmit={search}
        >
          <CustomInput
            type="text"
            width="100%"
            placeholder="Search by email of client.."
            onChange={handleChange}
            value={value}
            sx={{ background: "white" }}
          />
          <Button variant="outlined" sx={{ minHeight: "43px" }} type="submit">
            <SearchIcon />
          </Button>
        </Box>
      </Box>
      <SimulationsComponent
        simulations={filtered}
        current
        isFiltered
        showUser
        isLoading={isLoading}
      />
    </>
  );
};

export default Simulations;
