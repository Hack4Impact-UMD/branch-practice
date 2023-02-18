import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/Button.css";

export const Home3 = () => {
  return (
    <div className="home3">
      <Link to={"/"} className={"button"}>
        Click Me!
      </Link>
    </div>
  );
};
