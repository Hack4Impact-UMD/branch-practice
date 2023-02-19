import { useState } from "react";
import Nav from "./components/Nav";
import "./index.css";
import colors from "./colors";

function App() {
  const [color, setColor] = useState(0);

  const changeColor = () => {
    setColor((color + 1) % colors.length);
  };

  return (
    <div className="container">
      <Nav />
      <div className="content" style={{backgroundColor: colors[color]}}>
        <button onClick={changeColor}>Click Me!</button>
      </div>
    </div>
  );
}

export default App;
