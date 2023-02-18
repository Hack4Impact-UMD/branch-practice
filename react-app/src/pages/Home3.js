import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export const Home3 = () => {
  return (
    <div className="home3">
      <Link to={"/"} className={"button"}>
        Click Me!
      </Link>
    </div>
  );
};
