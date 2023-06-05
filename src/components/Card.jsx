import React from "react";
import Avatar from "./Avatar";
import TelAndEmail from "./TelAndEmail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* <p>{props.id}</p> */}
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <TelAndEmail details={props.tel} />
        <TelAndEmail details={props.email} />
      </div>
    </div>
  );
}

export default Card;
