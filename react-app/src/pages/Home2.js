import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export const Home2 = () => {
  return (
    <div className="home2">
      <Link to={"/Home3"} className={"button"}>
        Click Me!
      </Link>
    </div>
  );
};
