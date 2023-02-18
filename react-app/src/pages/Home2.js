import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/Button.css";

export const Home2 = () => {
  return (
    <div className="home2">
      <Link to={"/Home3"} className={"button"}>
        Click Me!
      </Link>
    </div>
  );
};
