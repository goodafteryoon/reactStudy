import React from "react";
import Avatar from "./Avartar";

export default function Profile({ name, job, img, isNew }) {
  return (
    <div className="profile">
      <Avatar img={img} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
