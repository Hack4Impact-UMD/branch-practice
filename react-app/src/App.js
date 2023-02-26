import Navbar from "./components/Navbar";
import Content from "./components/Content";
import React from "react";
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Content text='Click Me!'></Content>
    </div>
  );
}

export default App;
