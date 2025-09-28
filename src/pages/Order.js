import React, { useEffect, useState } from "react";
import "./order.css";

function Order() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Get the most recent order saved in localStorage
    const savedOrder = JSON.parse(localStorage.getItem("lastOrder"));
    setOrder(savedOrder);
  }, []);

  if (!order) {
    return (
      <div className="order-page">
        <div className="order-container">
          <h2>No order found!</h2>
          <a href="/products" className="continue-shopping-link">
            ← Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="order-page">
      <div className="order-container">
        <h2 className="order-title">Checkout</h2>
        <p className="success-msg">✅ Order placed successfully!</p>

        <a href="/products" className="continue-shopping-link">
          ← Continue Shopping
        </a>
        <br />
        <a href="/feedback" className="feedback-link">
          💬 Give Feedback
        </a>
      </div>

      {/* Right side order summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <hr />
        <p>
          <b>Order ID:</b> {order.orderId}
        </p>
        <p>
          <b>Name:</b> {order.fullName}
        </p>
        <p>
          <b>Phone:</b> {order.phone}
        </p>
        <p>
          <b>Address:</b> {order.address}
        </p>
        <p>
          <b>Payment Mode:</b> {order.paymentMode}
        </p>
        <p>
          <b>Total Amount:</b> ₹{order.total}
        </p>
        <p>
          <b>Date:</b> {order.date}</p>
      </div>
    </div>
  );
}

export default Order;
