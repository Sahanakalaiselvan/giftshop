import React, { useState } from "react";
import "./feedback.css";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating || !comment) {
      alert("⚠ Please fill in all fields!");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name,
      rating,
      comment,
      date: new Date().toLocaleString(),
    };

    // Save feedbacks to localStorage
    const existingFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    existingFeedbacks.push(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(existingFeedbacks));

    setSubmitted(true);
    setName("");
    setRating("");
    setComment("");
  };

  if (submitted) {
    return (
      <div className="feedback-page">
        <div className="feedback-container">
          <h2>✅ Thank you for your feedback!</h2>
          <a href="/products" className="continue-shopping-link">
            ← Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <h2>💬 Give Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label>Rating</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Select rating</option>
            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
            <option value="4">⭐⭐⭐⭐ - Good</option>
            <option value="3">⭐⭐⭐ - Average</option>
            <option value="2">⭐⭐ - Poor</option>
            <option value="1">⭐ - Very Bad</option>
          </select>

          <label>Comments</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your feedback..."
          ></textarea>

          <button type="submit" className="submit-feedback-btn">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
