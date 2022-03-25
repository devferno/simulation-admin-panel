import { useEffect, useState } from "react";
import axios from "axios";
const useFetchSimulation = () => {
  const [simulations, setSimulations] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const url = "/get-simulations/";

  const config = {
    headers: {
      Authorization: "JWT " + localStorage.getItem("access"),
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, config)
      .then((res) => {
        setSimulations(res.data);
        setFiltered(res.data.slice(0, res.data.length - 1));

        setStatistics(res.data[res.data.length - 1]);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          axios
            .post("/token/refresh/", {
              refresh: localStorage.getItem("refresh"),
            })
            .then((res) => {
              localStorage.setItem("access", res.data.access);
              window.location.reload();
            })
            .catch((err) => {
              if (err.response.status === 401) {
                localStorage.clear();
                window.location = "/signin";
              }
            });
        }
      });
  }, []);

  return [simulations, statistics, isLoading, filtered, setFiltered];
};

export default useFetchSimulation;
