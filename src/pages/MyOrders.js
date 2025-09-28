import React, { useEffect, useState } from "react";
import "./orders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const userOrders = allOrders.filter((o) => o.userId === user.email);
      setOrders(userOrders);
    }
  }, [user]);

  // 🚚 Order status steps
  const steps = ["Pending", "Shipped", "Delivered"];

  // 📅 Function to calculate estimated delivery date
  const getEstimatedDelivery = (orderDate) => {
    const date = new Date(orderDate);
    date.setDate(date.getDate() + 5); // +5 days for delivery
    return date.toLocaleDateString();
  };

  return (
    <div className="orders-page">
      <h2>📦 My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.orderId} className="order-card">
            <h3>Order #{order.orderId}</h3>
            <p><b>Date:</b> {new Date(order.date).toLocaleString()}</p>
            <p><b>Total:</b> ₹{order.total}</p>

            {/* 📅 Estimated Delivery */}
            <p><b>🚚 Estimated Delivery:</b> {getEstimatedDelivery(order.date)}</p>

            {/* 🚚 Step-line Tracker */}
            <div className="tracker">
              {steps.map((step, index) => {
                const stepIndex = steps.indexOf(order.status || "Pending");
                return (
                  <div key={step} className="tracker-step">
                    <div
                      className={`circle ${
                        index <= stepIndex ? "active" : ""
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p
                      className={`step-label ${
                        index <= stepIndex ? "active" : ""
                      }`}
                    >
                      {step}
                    </p>
                    {index < steps.length - 1 && (
                      <div
                        className={`line ${
                          index < stepIndex ? "active" : ""
                        }`}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Gift details */}
            {order.giftDetails && (
              <>
                {order.giftDetails.message && (
                  <p><b>💌 Message:</b> {order.giftDetails.message}</p>
                )}
                <p><b>🎀 Wrap:</b> {order.giftDetails.wrapOption}</p>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
