import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import UserCss from "../styles/User.module.css";
function useLoader(loading) {
  return (
    <div className={UserCss.loader}>
      {loading && (
        <PulseLoader
          color="#36d7b7"
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}

export default useLoader;
