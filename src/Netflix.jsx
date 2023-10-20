import React from "react";
import sData from "./SData";
import Card from "./Card";

const Netflix = () => {
  return (
    <>
      {sData.map((val, index, array) => (
        <Card
          key={val.id}
          tittle={val.tittle}
          imgSrc={val.imgSrc}
          sName={val.sName}
          link={val.link}
        />
      ))}
    </>
  );
};

export default Netflix;
