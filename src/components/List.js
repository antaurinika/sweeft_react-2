import React, { useEffect } from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import ListCss from "../styles/List.module.css";

export default function List() {
  const [size, setSize] = useState(12);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, error, loading } = useFetch(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/${size}`
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPageNumber((prev) => prev + 1);
    }
  };
  const generateUsers = () => {
    return data?.map((user, index) => {
      return (
        <Card
          key={index}
          id={user.id}
          prefix={user.prefix}
          name={user.name}
          lastname={user.lastName}
          title={user.title}
          imageUrl={user.imageUrl}
        />
      );
    });
  };

  return <div className={ListCss.list}>{generateUsers()}</div>;
}
