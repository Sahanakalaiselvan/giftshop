import React, { useState } from "react";
import "./admin.css";

function Admin() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.category) {
      alert("⚠ Please fill all required fields!");
      return;
    }
    alert(`✅ Product Added Successfully!\n\n${JSON.stringify(product, null, 2)}`);

    // Reset form
    setProduct({
      name: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  };

  return (
    <div className="product-container">
      <h2 className="form-title">Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Enter product price"
        />

        <label>Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Enter product description"
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Enter product category"
        />

        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Enter product image URL"
        />

        <button type="submit" className="add-btn">Add Product</button>
      </form>
    </div>
  );
}

export default Admin;
