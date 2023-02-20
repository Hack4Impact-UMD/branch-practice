import React from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="title">H4I</div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
      </ul>
    </div>
  );
};
