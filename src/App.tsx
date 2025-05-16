import "./App.css";
// import { Button } from "antd";
import "antd/dist/reset.css"; // AntD v5 pakai reset.css
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
