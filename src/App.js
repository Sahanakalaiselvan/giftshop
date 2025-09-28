import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";   
import Admin from "./pages/Admin"; 
import AdminOrders from "./pages/AdminOrders";
import AdminFeedbacks from "./pages/AdminFeedbacks";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import MyOrders from "./pages/MyOrders";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = localStorage.getItem("isAdminLoggedIn") === "true";
    setIsAdminLoggedIn(checkLogin);
  }, []);

  return (
    <Router>
      <Routes>
        {}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />
      <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} /> 
        <Route path="/myorders" element={<MyOrders />} />

        {}
        <Route
          path="/admin/login"
          element={
            isAdminLoggedIn ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />
            )
          }
        />

        {}
        <Route
          path="/admin"
          element={
            isAdminLoggedIn ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />

        {}
        {isAdminLoggedIn ? (
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route path="add" element={<Admin />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="feedbacks" element={<AdminFeedbacks />} />
            <Route path="analytics" element={<AdminAnalytics />} />
          </Route>
        ) : (
          <Route path="/admin/*" element={<Navigate to="/admin/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
