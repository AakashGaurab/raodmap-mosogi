import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name });
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
