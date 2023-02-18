import { Home } from "./pages/Home";
import { Home2 } from "./pages/Home2";
import { Home3 } from "./pages/Home3";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Home3" element={<Home3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
