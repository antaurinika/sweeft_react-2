import React from "react";
import { useNavigate } from "react-router-dom";
import ListCss from "../styles/List.module.css";

export default function Card({ imageUrl, prefix, title, name, lastname, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div className={ListCss.card} onClick={handleClick}>
      <img
        className={ListCss.listImage}
        src={`${imageUrl}?v=${id}`}
        alt="animal"
      />
      <div>
        <strong
          className={ListCss.name}
        >{`${prefix} ${name} ${lastname}`}</strong>
        <p className={ListCss.title}>{title}</p>
      </div>
    </div>
  );
}
