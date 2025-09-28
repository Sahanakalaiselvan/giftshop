import React from "react";

function ProductCard({ product }) {
  // ✅ Add to Cart Handler
  const handleAddToCart = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedInUser) {
      alert("⚠ Please login to add items to cart.");
      return;
    }

    // Load this user's cart
    const existingCart =
      JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];

    // Check if product already exists
    const itemIndex = existingCart.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save cart
    localStorage.setItem(
      `cart_${loggedInUser.email}`,
      JSON.stringify(existingCart)
    );

    alert(`${product.name} added to cart! ✅`);
  };

  // ✅ Add to Favorites Handler
  const handleAddToFavorites = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedInUser) {
      alert("⚠ Please login to add items to favorites.");
      return;
    }

    // Load favorites for this user
    const existingFavorites =
      JSON.parse(localStorage.getItem(`favorites_${loggedInUser.email}`)) || [];

    // Check if already in favorites
    const isAlreadyFav = existingFavorites.some((item) => item.id === product.id);

    if (isAlreadyFav) {
      alert(`${product.name} is already in favorites ❤️`);
      return;
    }

    // Add to favorites
    existingFavorites.push(product);
    localStorage.setItem(
      `favorites_${loggedInUser.email}`,
      JSON.stringify(existingFavorites)
    );

    alert(`${product.name} added to favorites ❤️`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="desc">{product.desc}</p>
        <p className="category">Category: {product.category}</p>
        <p className="price">₹ {product.price}</p>

        <div className="button-group">
          <button className="add-to-cart" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
          <button className="add-to-fav" onClick={handleAddToFavorites}>
            ❤️ Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
