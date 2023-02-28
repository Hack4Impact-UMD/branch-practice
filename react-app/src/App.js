import React, { useState } from "react";
import NavBar from "./NavBar";
import './index.css';

function App() {
  const[backgroundColor, setBackgroundColor] = useState("#34ebc3");

  const handleClick = () => {
    setBackgroundColor(color => {
      switch (color) {
        case "#34ebc3":
          return "#50f5a5";
        case "#ceffa3":
          return "#34ebc";
        case "#50f5a5":
          return "#ceffa3";
        default:
          return "#34ebc3";
      }
    });
  };

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh' }}>
      <NavBar />
      <button onClick={ handleClick }> Click Me! </button>
    </div>
  );
}

export default App;
