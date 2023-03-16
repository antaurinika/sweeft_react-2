import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetchFriends(url) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFriends((prev) => {
          return [...new Set([...prev, ...response.data.list])];
        });
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { friends };
}

export default useFetchFriends;
