import React from "react";
import sData from "./SData";
import Card from "./Card";

const Amazon = () => {
  return (
    <Card
      key={sData[2].id}
      tittle={sData[2].tittle}
      imgSrc={sData[2].imgSrc}
      sName={sData[2].sName}
      link={sData[2].link}
    />
  );
};

export default Amazon;
