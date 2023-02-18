import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/Button.css";

export const Home = () => {
  return (
    <div className="home1">
      <Link to={"/Home2"} className={"button"}>
        Click Me!
      </Link>
    </div>
  );
};
