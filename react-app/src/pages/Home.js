import React, { useState } from "react";
import "../styles/Home.css";

export const Home = () => {
  const [style, changeStyle] = useState("home1");
  const changeColor = () => {
    if (style === "home1") {
      changeStyle("home2");
    } else if (style === "home2") {
      changeStyle("home3");
    } else {
      changeStyle("home1");
    }
  };

  return (
    <div className={style}>
      <button onClick={changeColor} className={"button"}>
        Click Me!
      </button>
    </div>
  );
};
