import { useEffect, useState } from "react";
import axios from "axios";
const useFetchClient = () => {
  const [clients, setclients] = useState([]);
  const [statistics, setStatistics] = useState([]);
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
        setStatistics(res.data[res.data.length - 1]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [clients, statistics, isLoading];
};

export default useFetchClient;
