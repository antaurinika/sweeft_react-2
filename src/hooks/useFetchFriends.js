import { useEffect, useState } from "react";
import axios from "axios";

function useFetchFriends(url, pageNumber, id) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(url)
      .then((response) => {
        setFriends((prev) => {
          return [...new Set([...prev, ...response.data.list])];
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [pageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFriends([]);
    fetchData();
  }, [id]);
  return { friends, loading };
}

export default useFetchFriends;
