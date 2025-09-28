import React, { useEffect, useState } from "react";
import "./admin.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // 🔄 Update order status
  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.orderId === orderId ? { ...order, status: newStatus } : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="orders-container">
      <h2 className="form-title">All Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders">No Orders Found</p>
      ) : (
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
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.userId}</td>
                <td>{order.fullName}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.paymentMode}</td>
                <td>₹ {order.total}</td>
                <td>{order.date}</td>
                <td>
                  <select
                    value={order.status || "Pending"}
                    onChange={(e) =>
                      handleStatusChange(order.orderId, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminOrders;
