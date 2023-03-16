import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import ListCss from "../styles/List.module.css";

export default function List() {
  const [size, setSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, error } = useFetch(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/${size}`
  );
  const generateUsers = () => {
    return data?.data.list.map((user) => {
      return (
        <Card
          key={user.id}
          prefix={user.prefix}
          name={user.name}
          surname={user.surname}
          title={user.title}
          imageUrl={user.imageUrl}
        />
      );
    });
  };

  return <div className={ListCss.list}>{generateUsers()}</div>;
}
