import { useEffect, useState } from "react";
import axios from "axios";

function useFetchFriends(url) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setFriends((prev) => {
          return [...new Set([...prev, ...response.data.list])];
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { friends, loading };
}

export default useFetchFriends;
