import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [giftMessage, setGiftMessage] = useState(""); // 🎁 Custom message
  const [wrapOption, setWrapOption] = useState("Standard"); // 🎁 Wrap type
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);

    if (loggedInUser) {
      const savedCart =
        JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];
      setCartItems(savedCart);
    }
  }, []);
const wrapCost =
  wrapOption === "Premium" ? 50 : wrapOption === "Festive" ? 100 : 0;


  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  )+wrapCost;

  const handleConfirmOrder = () => {
    if (!fullName || !phone || !address || !paymentMode) {
      alert("⚠ Please fill in all details and select payment mode!");
      return;
    }

    if (!user) {
      alert("⚠ Please login to place an order.");
      return;
    }

    // Create order object
    const orderDetails = {
      orderId: Date.now(),
      userId: user.email,
      fullName,
      phone,
      address,
      paymentMode,
      total: total.toFixed(1),
      date: new Date().toString(),

      // 🎁 Gift personalization
      giftDetails: {
        message: giftMessage,
        wrapOption: wrapOption,
      },
      status: "Pending", 
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(orderDetails);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    localStorage.setItem("lastOrder", JSON.stringify(orderDetails));

    localStorage.removeItem(`cart_${user.email}`);
    setCartItems([]);

    navigate("/order");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-content">
          {/* Left Side: Form */}
          <div className="checkout-form">
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
            />

            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />

            <label>Delivery Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter delivery address"
            ></textarea>

            <label>Payment Mode</label>
            <div className="payment-options">
              <button
                type="button"
                className={paymentMode === "Cash on Delivery" ? "active" : ""}
                onClick={() => setPaymentMode("Cash on Delivery")}
              >
                💵 Cash on Delivery
              </button>
              <button
                type="button"
                className={paymentMode === "UPI" ? "active" : ""}
                onClick={() => setPaymentMode("UPI")}
              >
                📱 UPI
              </button>
              <button
                type="button"
                className={paymentMode === "Card" ? "active" : ""}
                onClick={() => setPaymentMode("Card")}
              >
                💳 Credit/Debit Card
              </button>
              <button
                type="button"
                className={paymentMode === "Net Banking" ? "active" : ""}
                onClick={() => setPaymentMode("Net Banking")}
              >
                🏦 Net Banking
              </button>
            </div>

            {/* 🎁 Gift Personalization */}
            <div className="gift-options">
              <h3>🎁 Gift Personalization</h3>

              <label>Custom Message (Optional)</label>
              <textarea
                placeholder="Write a message to include with the gift..."
                value={giftMessage}
                onChange={(e) => setGiftMessage(e.target.value)}
              ></textarea>

              <label>Choose Gift Wrap</label>
              <select
                value={wrapOption}
                onChange={(e) => setWrapOption(e.target.value)}
              >
                <option value="Standard">Standard Wrap (Free)</option>
                <option value="Premium">Premium Wrap (+₹50)</option>
                <option value="Festive">Festive Wrap (+₹100)</option>
              </select>
            </div>

            <button className="confirm-order-btn" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
          </div>

          {/* Right Side: Order Summary */}
          <div className="order-summary">
            <h3>Your Order</h3>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <p key={item.id}>
                    {item.name} x {item.quantity || 1} – ₹
                    {(item.price * (item.quantity || 1)).toFixed(1)}
                  </p>
                ))}
                <hr />
                <p>🎀 Wrap Cost: ₹{wrapCost}</p>
                <h4>Total: ₹{total.toFixed(1)}</h4>

                {/* Show gift details in summary */}
                {giftMessage && <p>💌 Message: {giftMessage}</p>}
                <p>🎀 Wrap: {wrapOption}</p>
              </>
            ) : (
              <p>No items in cart.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
