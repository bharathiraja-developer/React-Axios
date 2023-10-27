import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://653bb12b2e42fd0d54d5864d.mockapi.io/users"
      );
      setDatas(response.data);
    } catch (error) {
      console.log("Error in fetching data : " + error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home datas={datas} />} />
        <Route
          path="/create"
          element={<Create datas={datas} fetchData={fetchData} />}
        />
        <Route
          path="/edit"
          element={<Edit datas={datas} fetchData={fetchData} />}
        />
        <Route
          path="/delete"
          element={<Delete datas={datas} fetchData={fetchData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
