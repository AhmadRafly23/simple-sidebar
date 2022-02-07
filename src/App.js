import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
