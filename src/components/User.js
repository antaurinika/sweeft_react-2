import React from "react";
import { useParams } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
import UserCss from "../styles/User.module.css";
import Friends from "./Friends";

export default function User() {
  const { id } = useParams();
  const { singleUser, loading } = useFetchUser(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
  );

  return (
    <>
      <div className={UserCss.userData}>
        <img src={singleUser?.data.imageUrl} width="300px" alt="user" />
        <fieldset className={UserCss.Info}>
          <legend>Info</legend>
          <div className={UserCss.Name_Title}>
            <div>{`${singleUser?.data.prefix} ${singleUser?.data.name} ${singleUser?.data.lastName}`}</div>
            <div>{singleUser?.data.title}</div>
          </div>
          <div>
            <u>Email</u>: {singleUser?.data.email}
          </div>
          <div>
            <u>Ip Address</u>: {singleUser?.data.ip}
          </div>
          <div>
            <u>Ip Address</u>: {singleUser?.data.ip}
          </div>
          <div>
            <u>Job Area</u>: {singleUser?.data.jobArea}
          </div>
          <div>
            <u>Job Type</u>: {singleUser?.data.jobType}
          </div>
        </fieldset>
        <fieldset className={UserCss.Address}>
          <legend>Address</legend>
          <strong>{`${singleUser?.data.company.name} ${singleUser?.data.company.name}`}</strong>
          <div>
            <u>City</u>: {singleUser?.data.address.city}
          </div>
          <div>
            <u>Country</u>: {singleUser?.data.address.country}
          </div>
          <div>
            <u>State</u>: {singleUser?.data.address.state}
          </div>
          <div>
            <u>Street Address</u>: {singleUser?.data.address.streetAddress}
          </div>
          <div>
            <u>ZIP</u>: {singleUser?.data.address.zipCode}
          </div>
        </fieldset>
      </div>
      <h1>Friends:</h1>
      <Friends />
    </>
  );
}