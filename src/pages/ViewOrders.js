import React, { useEffect, useState } from "react";
import "./viewOrders.css";

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // For now we load from localStorage (replace this with API call if backend exists)
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="orders-page">
      {/* Navbar */}
      <nav className="admin-navbar">
        <h2 className="logo">Moments <span>&amp; Memories</span></h2>
        <ul>
          <li><a href="/admin/add">Add Product</a></li>
          <li><a href="/admin/orders">View Orders</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>

      {/* Orders Table */}
      <div className="orders-container">
        <h2 className="orders-title">All Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>USER ID</th>
              <th>FULL NAME</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>PAYMENT MODE</th>
              <th>TOTAL</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id || index + 1}</td>
                  <td>{order.userId || "N/A"}</td>
                  <td>{order.fullName}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>{order.paymentMode}</td>
                  <td>{order.total}</td>
                  <td>{order.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-orders">No Orders Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewOrders;
