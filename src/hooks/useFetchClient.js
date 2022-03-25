import { useEffect, useState } from "react";
import axios from "axios";
const useFetchClient = () => {
  const [clients, setclients] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = "/get-clients/";

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
        setclients(res.data);
        setFiltered(res.data);
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

  return [clients, statistics, isLoading, filtered, setFiltered];
};

export default useFetchClient;
