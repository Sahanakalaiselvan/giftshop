import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

function AdminLogin({ setIsAdminLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Hardcoded admin credentials
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdminLoggedIn", "true");
      setIsAdminLoggedIn(true); // ✅ update state in App.js
      alert("✅ Admin Login Successful!");
      navigate("/admin/dashboard"); // ✅ redirect
    } else {
      alert("❌ Invalid credentials! Try again.");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <h2>🔑 Admin Login</h2>
        <form onSubmit={handleLogin} className="admin-login-form">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter admin username"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
          />

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
