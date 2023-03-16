import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchFriends from "../hooks/useFetchFriends";
import useGenerateUsers from "../hooks/useGenerateUsers";
import { useScroll } from "../hooks/useScroll";
import ListCss from "../styles/List.module.css";

function Friends() {
  const { id } = useParams();
  const { size, pageNumber } = useScroll();

  const { friends } = useFetchFriends(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${pageNumber}/${size}`
  );
  return <div className={ListCss.list}>{useGenerateUsers(friends)}</div>;
}

export default Friends;
