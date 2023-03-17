import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchFriends from "../hooks/useFetchFriends";
import useGenerateUsers from "../hooks/useGenerateUsers";
import { useScroll } from "../hooks/useScroll";
import UserCss from "../styles/User.module.css";

function Friends() {
  const { id } = useParams();
  const { size, pageNumber } = useScroll();

  const { friends } = useFetchFriends(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${pageNumber}/${size}`
  );
  return <div className={UserCss.friendsList}>{useGenerateUsers(friends)}</div>;
}

export default Friends;
