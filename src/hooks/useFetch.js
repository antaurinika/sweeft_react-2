import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData((prev) => {
          return [...new Set([...prev, ...response.data.list])];
        });
        setLoading(false);
      })

      .catch((err) => setError(err));
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
