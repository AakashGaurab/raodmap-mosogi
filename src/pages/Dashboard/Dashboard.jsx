import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container">
      <h2>Welcome, {user?.name}</h2>
      <h3>Select a Skill:</h3>
      <ul>
        <li><Link to="/roadmap/webdev">Web Development</Link></li>
        <li><Link to="/roadmap/uiux">UI/UX</Link></li>
        <li><Link to="/roadmap/datascience">Data Science</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
