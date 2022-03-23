import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import UsersComponent from "../components/UserComponent";
import useFetchClient from "../hooks/useFetchClient";

import { useState } from "react";

const Users = () => {
  const [dataInCSV, setDataCSV] = useState();
  const [clients, statistics, isLoading] = useFetchClient();
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
  return (
    <>
      {dataInCSV && (
        <a
          href={`data:text/csv;charset=utf-8,${escape(dataInCSV)}`}
          download="clients.csv"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" sx={{ mb: 2 }} color="primary">
            Download as CSV
          </Button>
        </a>
      )}

      <UsersComponent
        clients={clients}
        isLoading={isLoading}
        all
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
