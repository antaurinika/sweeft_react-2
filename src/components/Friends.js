import React from "react";
import { useParams } from "react-router-dom";
import useFetchFriends from "../hooks/useFetchFriends";
import useGenerateUsers from "../hooks/useGenerateUsers";
import { useScroll } from "../hooks/useScroll";
import UserCss from "../styles/User.module.css";
import useLoader from "../hooks/useLoader";

function Friends() {
  const { id } = useParams();
  const { size, pageNumber } = useScroll();

  const { friends, loading } = useFetchFriends(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${pageNumber}/${size}`,
    pageNumber,
    id
  );
  return (
    <div className={UserCss.friendsList}>
      {useGenerateUsers(friends)}
      {useLoader(loading)}
    </div>
  );
}

export default Friends;
