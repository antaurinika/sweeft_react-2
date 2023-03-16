import React, { useCallback, useRef } from "react";
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

  const observer = useRef();

  const lastUserElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      let count = 0;

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          count = count + 1;
          if (count > 1) {
            setPageNumber((prev) => prev + 1);
          }
        }
      });
      if (node) observer.current.observe(node);
    },

    [loading]
  );
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

  return (
    <div className={ListCss.list}>
      {generateUsers()}

      <div className="invisible_footer" ref={lastUserElement}></div>
    </div>
  );
}
