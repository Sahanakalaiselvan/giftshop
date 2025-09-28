import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Moments <span style={{ color: "#e91e63" }}>& Memories</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop Now</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/cart">Cart</Link></li> 
        <li><Link to="/admin">Admin</Link></li>
        <li>
             <Link to="/myorders">My Orders</Link>
</li>

      </ul>
    </nav>
  );
}

export default Navbar;
