import { useState, useEffect } from "react";
import axios from "axios";

const useFetchOrdered = () => {
  const [clients, setClients] = useState([]);
  const config = {
    headers: {
      Authorization: "JWT " + localStorage.getItem("access"),
    },
  };

  useEffect(() => {
    axios
      .get("/get-clients-ordered/", config)
      .then((res) => setClients(res.data))
      .catch((err) => console.log(err));
  }, []);

  return [clients];
};

export default useFetchOrdered;
