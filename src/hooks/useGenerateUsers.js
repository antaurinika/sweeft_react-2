import React from "react";
import Card from "../components/Card";

const useGenerateUsers = (data) => {
  return data?.map((user, index) => {
    return (
      user?.id && (
        <Card
          key={index}
          id={user?.id}
          prefix={user?.prefix}
          name={user?.name}
          lastname={user?.lastName}
          title={user?.title}
          imageUrl={user?.imageUrl}
        />
      )
    );
  });
};
export default useGenerateUsers;
