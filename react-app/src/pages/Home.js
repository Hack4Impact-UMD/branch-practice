import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export const Home = () => {
  return (
    <div className="home1">
      <Link to={"/Home2"} className={"button"}>
        Click Me!
      </Link>
    </div>
  );
};
