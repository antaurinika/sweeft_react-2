import React from "react";

export default function Card({
  imageUrl,
  prefix,
  title,
  name,
  lastname,
  id,
  lastRef,
}) {
  return (
    <div>
      <img src={`${imageUrl}?v=${id}`} alt="animal" width="300px" />
      <div>
        <strong>{`${prefix} ${name} ${lastname}`}</strong>
        <p>{title}</p>
      </div>
    </div>
  );
}
