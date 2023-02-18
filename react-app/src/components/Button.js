import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Button.css";

export const Button = ({ navigateTo }) => {
  const navigate = useNavigate();
  const [navTo, changeNavTo] = useState();

  const changePage = () => {
    changeNavTo(navigateTo);
    console.log(navTo);
    navigate(navTo);
  };

  return (
    <button className="button" onClick={changePage}>
      Click Me!
    </button>
  );
};
