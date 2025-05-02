import React, { useState } from "react";
import { Routes as ReactRouter, Route } from "react-router-dom";
import Register from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Roadmap from "../pages/Roadmap/Roadmap";
import RoadmapDetail from "../pages/RoadmapDetail/RoadmapDetail";
import { AuthProvider } from "../context/AuthContext";

const Routes = () => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("user") !== null
  );
  return (
    <AuthProvider>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isLogin && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/roadmap/:skill" element={<Roadmap />} />
            <Route
              path="/roadmap/:skill/week/:weekId"
              element={<RoadmapDetail />}
            />
          </>
        )}

        <Route path="*" element={<Home />} />
      </ReactRouter>
    </AuthProvider>
  );
};

export default Routes;
