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
        setSliced(res.data.slice(1, count));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [data, isLoading, sliced];
}
