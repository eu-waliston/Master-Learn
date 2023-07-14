import React from "react";
import { Routes, Route } from "react-router-dom";


import Login from "../components/Login/Login";
import Home from "../components/Home/Home.Component";
import Register from "../components/Register/Register";


const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
  );
};

export default AllRoutes;
