import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
