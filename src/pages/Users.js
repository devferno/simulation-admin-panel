import { Button, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import UsersComponent from "../components/UserComponent";
import useFetchClient from "../hooks/useFetchClient";
import { CustomInput } from "./Signin";
import { useState } from "react";
import useFetchOrdered from "../hooks/useFetchOrdered";
import SearchIcon from "@mui/icons-material/Search";

const Users = () => {
  const [dataInCSV, setDataCSV] = useState();
  const [clients, , isLoading, filtered, setFiltered] = useFetchClient();
  const [ordered] = useFetchOrdered();
  const config = {
    headers: {
      Authorization: "JWT " + localStorage.getItem("access"),
    },
  };
  useEffect(() => {
    axios
      .get("/export-clients-csv/", config)
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
      clients
        .slice(0, clients.length - 1)
        .filter((client) => client.email.includes(value.toLowerCase()))
    );
  };
  const order = (e) => {
    setFiltered(ordered);
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
            download="clients.csv"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Download as CSV
            </Button>
          </a>
        )}
        <Button variant="outlined" onClick={order}>
          classer pas simulations
        </Button>
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

      <UsersComponent
        clients={filtered}
        isFiltered
        isLoading={isLoading}
        showdate
        showEmail
        contact
        showGender
        showAge
        current
      />
    </>
  );
};

export default Users;
