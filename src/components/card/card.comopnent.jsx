import React from "react";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h2 className="card-name">{props.monster.name}</h2>
    <p className="card-email">{props.monster.email}</p>
  </div>
);
