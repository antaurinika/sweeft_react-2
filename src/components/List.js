import React from "react";
import useFetch from "../hooks/useFetch";
import ListCss from "../styles/List.module.css";
import { useScroll } from "../hooks/useScroll";
import useGenerateUsers from "../hooks/useGenerateUsers";

export default function List() {
  const { size, pageNumber } = useScroll();
  const { data, error, loading } = useFetch(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/${size}`
  );

  return <div className={ListCss.list}>{useGenerateUsers(data)}</div>;
}
