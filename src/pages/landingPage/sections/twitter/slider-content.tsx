import React from "react";
import olaide from "../../../../assets/twitter/olaide.svg";
import stont from "../../../../assets/twitter/stont-tweet.svg";
import aynerd from "../../../../assets/twitter/aynerd-tweet.svg";
import joy from "../../../../assets/twitter/joy-tweet.svg";
import seun from "../../../../assets/twitter/seun-tweet.svg";
import daniel from "../../../../assets/twitter/daniel-tweet.svg";
import sukan from "../../../../assets/twitter/sunkanmi-tweet.svg";
import lewis from "../../../../assets/twitter/lewis-tweet.svg";

export const SliderContent = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "27px",
        alignItems: "center",
      }}
      className="div"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <img src={olaide} />
        <img src={stont} />
      </div>
      <img src={aynerd} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <img src={joy} />
        <img src={daniel} />
      </div>
      <img src={seun} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <img src={olaide} />
        <img src={stont} />
      </div>
      <img src={aynerd} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <img src={sukan} />
        <img src={lewis} />
      </div>
    </div>
  );
};
