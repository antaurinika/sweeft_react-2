import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ imageUrl, prefix, title, name, lastname, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div onClick={handleClick}>
      <img src={`${imageUrl}?v=${id}`} alt="animal" width="300px" />
      <div>
        <strong>{`${prefix} ${name} ${lastname}`}</strong>
        <p>{title}</p>
      </div>
    </div>
  );
}
