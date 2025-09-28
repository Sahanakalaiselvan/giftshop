import React, { useEffect, useState } from "react";
import "./admin.css";

function AdminFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  return (
    <div className="feedbacks-container">
      <h2 className="form-title">Customer Feedbacks</h2>

      {feedbacks.length === 0 ? (
        <p className="no-feedbacks">No feedbacks found!</p>
      ) : (
        <table className="feedbacks-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id}>
                <td>{fb.name}</td>
                <td>{fb.rating} ⭐</td>
                <td>{fb.comment}</td>
                <td>{fb.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminFeedbacks;
