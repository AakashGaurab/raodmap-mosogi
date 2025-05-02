import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container">
    <h1>Skill Roadmap Builder</h1>
    <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
  </div>
);

export default Home;
