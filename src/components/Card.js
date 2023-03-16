import React from "react";

export default function Card({ imageUrl, prefix, title, name, lastname }) {
  return (
    <div>
      <img src={imageUrl} alt="animal" width="250px" />
      <div>
        <strong>{`${prefix}  ${name} ${lastname}`}</strong>
        <p>{title}</p>
      </div>
    </div>
  );
}
