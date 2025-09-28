import React, { useEffect, useState } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);

    if (loggedInUser) {
      // Load this user's cart
      const savedCart =
        JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];
      setCartItems(savedCart);
    }
  }, []);

  const handleRemove = (id) => {
    if (!user) return;
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem(`cart_${user.email}`, JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  if (!user) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h2 className="cart-title">Your Shopping Cart</h2>
          <p>⚠ Please <a href="/login">login</a> to view your cart.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-image"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>₹ {item.price.toFixed(1)}</td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-summary">
              <h3>Total: ₹ {total.toFixed(1)}</h3>
              <button
                className="place-order-btn"
                onClick={() => navigate("/checkout")}
              >
                ✅ Place Order
              </button>
              <br />
              <a href="/products" className="continue-shopping-btn">
                ⬅ Continue Shopping
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;  