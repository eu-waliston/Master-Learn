import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home.Component";


const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  );
};

export default AllRoutes;
