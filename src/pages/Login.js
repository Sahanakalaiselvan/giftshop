import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Make sure this file exists!

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(registeredUser));

      alert("✅ Login successful!");
      navigate("/products"); // 👉 redirect to Shop Now
    } else {
      alert("❌ Invalid email or password!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              title="Show/Hide Password"
              style={{ cursor: "pointer" }}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>
        <p className="register-link">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
