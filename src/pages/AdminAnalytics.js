import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import "./admin.css";

function AdminAnalytics() {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [topProducts, setTopProducts] = useState([]);
  const [categorySales, setCategorySales] = useState([]);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00C49F"];

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // 📊 Total revenue & orders
    setTotalOrders(savedOrders.length);
    const revenue = savedOrders.reduce((acc, o) => acc + parseFloat(o.total), 0);
    setTotalRevenue(revenue);

    // 🏆 Most sold products
    let productCount = {};
    let categoryCount = {};
    savedOrders.forEach((order) => {
      order.items?.forEach((item) => {
        productCount[item.name] = (productCount[item.name] || 0) + (item.quantity || 1);
        if (item.category) {
          categoryCount[item.category] = (categoryCount[item.category] || 0) + (item.quantity || 1);
        }
      });
    });

    // Top 5 products
    const sortedProducts = Object.entries(productCount)
      .map(([name, qty]) => ({ name, qty }))
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 5);
    setTopProducts(sortedProducts);

    // Category sales for pie chart
    const categoryData = Object.entries(categoryCount).map(([category, qty]) => ({
      name: category,
      value: qty,
    }));
    setCategorySales(categoryData);
  }, []);

  return (
    <div className="analytics-container">
      <h2 className="form-title">📊 Admin Analytics</h2>

      <div className="analytics-summary">
        <p><b>Total Orders:</b> {totalOrders}</p>
        <p><b>Total Revenue:</b> ₹{totalRevenue.toFixed(2)}</p>
      </div>

      <div className="charts">
        {/* 🏆 Top Products - Bar Chart */}
        <div className="chart-box">
          <h3>Top Selling Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProducts}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="qty" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 🍕 Category Sales - Pie Chart */}
        <div className="chart-box">
          <h3>Sales by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categorySales}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {categorySales.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AdminAnalytics;
