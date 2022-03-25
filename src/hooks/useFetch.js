import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, count) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [sliced, setSliced] = useState([]);
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
        setData(res.data);
        setSliced(res.data.slice(res.data.length - count, res.data.length));
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

  return [data, isLoading, sliced];
}
