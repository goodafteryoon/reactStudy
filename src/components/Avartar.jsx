import React from "react";

export default function Avatar({ img, isNew }) {
  return (
    <div className="avartar">
      <img className="photo" alt="avatar" src={img} />
      {isNew && <span className="sup">new</span>}
    </div>
  );
}
