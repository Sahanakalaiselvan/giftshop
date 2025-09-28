import React from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import "./admin.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
      {/* Navbar */}
      <nav className="admin-navbar">
        <h2 className="logo">GiftShop Admin</h2>
        <ul>
          <li><Link to="/admin/dashboard/add">Add Product</Link></li>
          <li><Link to="/admin/dashboard/orders">View Orders</Link></li>
          <li><Link to="/admin/dashboard/feedbacks">View Feedbacks</Link></li>
          <li><Link to="/admin/dashboard/analytics">Analytics</Link></li>
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Page content (child routes will load here) */}
      <div className="admin-container">
        {location.pathname === "/admin/dashboard" ? (
          <div className="welcome-message">
            <h2>🎉 Welcome, Admin!</h2>
            <p>Select an option from the menu above to manage the shop.</p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
