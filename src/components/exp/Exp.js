import React from "react";
import "./Exp.css";
import data from "./expData.js";

function Exp() {
  const gridItems = data.map((item) => {
    return (
      <div className="card" id={item.id}>
        <p className="topic">{item.heading}</p>
        <hr className="topLine" />
        <img
          src={require(`../../assets/${item.img}`)}
          alt="yo"
          className="bodyImg"
        />
        <div className="bodyText">{item.body}</div>
      </div>
    );
  });
  return (
    <>
      <hr></hr>
      <div className="gridTop">
        <p className="topHeading">Projects</p>
        {gridItems}
      </div>
      <hr></hr>
    </>
  );
}
export default Exp;
