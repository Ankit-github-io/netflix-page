import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgSrc} alt="myPic" className="card_img" />
        <p>{props.tittle}</p>
        <h2>{props.sName}</h2>
        <a href={props.link}>
          <button className="btn">Watch Now</button>
        </a>
      </div>
    </>
  );
}
export default Card;
