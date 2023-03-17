import { useEffect, useState } from "react";
import axios from "axios";

function useFetchUser(url) {
  const [singleUser, setSingleUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => setSingleUser(response))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [url]);

  return {
    singleUser,
    loading,
  };
}

export default useFetchUser;
