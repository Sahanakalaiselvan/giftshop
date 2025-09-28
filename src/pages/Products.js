import ProductCard from "../components/ProductCard";
import "./products.css"; // Make sure this file exists!
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const allProducts = [
  // Toys
  {
    id: 1,
    name: "Toy Car",
    desc: "Colorful racing toy car, perfect for endless fun.",
    image: "https://images.unsplash.com/photo-1609395464110-7116592351c6",
    category: "Toys",
    price: 550,
  },
  {
    id: 2,
    name: "Teddy Bear",
    desc: "Soft, fluffy teddy – a cuddly companion for kids.",
    image: "https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78",
    category: "Toys",
    price: 799,
  },
  {
    id: 3,
    name: "Doll House",
    desc: " Beautiful doll house for endless role play fun.",
    image: "https://plus.unsplash.com/premium_photo-1684189487709-09171067fae8",
    category: "Toys",
    price: 799,
  },
    {
    id: 4,
    name: "Mini Cars Collection",desc:"Set of mini toy cars – perfect gift for car lovers.",image:"https://images.unsplash.com/photo-1728029008078-9a8127460a96",
        
    category: "Toys",
    price: 999,
  },
      {
    id: 5,
    name:"Action Hero Figure",desc:"Cool action figure for kids’ adventurous playtime.",image:"https://plus.unsplash.com/premium_photo-1684795780905-f8fa4b8875d4",

    category: "Toys",
    price: 989,
  },
 {
    id: 6,
    name:"Toy Train",desc:"Classic train set that sparks kids’ imagination.",image:"https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",

    category: "Toys",
    price: 1100,
  },
 {
    id: 7,
    name:"Puzzle Game",desc:"Colorful puzzle set – improves problem-solving skills.",image:"https://plus.unsplash.com/premium_photo-1726783362305-0582cc6dceef",

    category: "Toys",
    price: 677,
  },
 {
    id: 8,
    name:"Toy Airplane",desc:"Lightweight airplane toy – take imagination to the skies!",image:"https://images.unsplash.com/photo-1663254743932-49190d0ee975",

    category: "Toys",
    price: 977,
  },

  
  // Watches
  {
    id: 11,
    name: "Analog Watch",
    desc: "Leather strap classic",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Watches",
    price: 1200,
  },
  {
    id: 12,
    name: "Smart Watch",
    desc: "Fitness tracker",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfoSUaybzLQ6yqiA8Ejgx8AfaBZ_mEGj0VlzyN1PWO6AURU9cqI2KgHcR4mGq9_SW5m24m4mguG3d_FcYiftQ2KIni7sMpTBEji-G04uE",
    category: "Watches",
    price: 2500,
  },
    {
    id: 13,
    name:"Digital Watch",desc:"Trendy sports digital",image:"https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?w=1000",

    category: "Watches",
    price: 1500,
  },
  {
    id: 14,
   name:"Luxury Watch",desc:"Premium design",image:"https://plus.unsplash.com/premium_photo-1728582544366-22ca60738aa7?q=80",

    category: "Watches",
    price: 9500,
  },
  {
    id: 15,
    name:"Casual Watch",desc:"Everyday wear",image:"https://images.unsplash.com/photo-1493969669005-ee830d58d487",

    category: "Watches",
    price: 900,
  },
    {
    id: 16,
    name:"Classic Watch",desc:"Gold-plated timeless",image:"https://plus.unsplash.com/premium_photo-1728324816632-d06b48db4b8c",

    category: "Watches",
    price: 2900,
  },

    {
    id: 17,
    name:"Kids Watch",desc:"Colorful kids watch",image:"https://plus.unsplash.com/premium_photo-1728324830661-ac471243bade",

    category: "Watches",
    price: 899,
  },

    {
    id: 18,
    name:"Sports Watch",desc:"Water resistant",image:"https://images.unsplash.com/photo-1704783549722-8dcd98e9cf5d",

    category: "Watches",
    price: 2999,
  },
    {
    id: 19,
    name:"Formal Watch",desc:"Elegant office wear",image:"https://plus.unsplash.com/premium_photo-1728334386136-2428c3196dc0",

    category: "Watches",
    price: 2679,
  },



  // Greeting Cards
  {
    id: 21,
    name: "Birthday Card",
    desc: "Happy birthday floral",
    image: "https://images.unsplash.com/photo-1554894872-1a01c75f7513",
    category: "Greeting Cards",
    price: 120,
  },
  {id:22,name:"Wedding Card",desc:"Elegant design",image:"https://images.unsplash.com/photo-1588184645313-3a280d2b4a89",category:"Greeting Cards",price:150},
   {id:23,name: "Love Card",desc:"Romantic card",image:"https://images.unsplash.com/photo-1603840715786-f18ca02d1bf3",category:"Greeting Cards",price:99},
 {id:24,name: "Thank You Card",desc:"Simple gratitude",image:"https://plus.unsplash.com/premium_photo-1674581937006-e93d716d18b3",category:"Greeting Cards",price:80},
  {id:25,name:"Festival Card",desc:"Bright festive",image:"https://plus.unsplash.com/premium_photo-1663133777937-be5f7d5fa4c6",category:"Greeting Cards",price:130},
    {id:26,name: "Anniversary Card",desc:"Romantic design",image:"https://plus.unsplash.com/premium_photo-1668124455167-9029204188f2",category:"Greeting Cards",price:110},
    {id:27,name:"Get Well Card",desc:"Cheerful wishes",image:"https://plus.unsplash.com/premium_photo-1664274133021-587f578230da",category:"Greeting Cards",price:95},


  // Bags
  {
    id: 31,
    name: "Leather Bag",
    desc: "Premium leather handbag",
    image: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34",
    category: "Bags",
    price: 2200,
  },
{id:32,name:"Travel Bag",desc:"Durable large bag",image:"https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce",category:"Bags",price:3100},
{id:33,name:"School Bag",desc:"Trendy kids backpack",image:"https://plus.unsplash.com/premium_photo-1679314408041-45d1a3c45dee",category:"Bags",price:899},
{id:34,name:"Hand Bag",desc:"Stylish women's bag",image:"https://plus.unsplash.com/premium_photo-1723649902770-aede6eb5ef10",category:"Bags",price:1900},
{id:35,name:"Office Bag",desc:"Laptop carrying bag",image:"https://plus.unsplash.com/premium_photo-1679314407653-2cbf64bfb7c4",category:"Bags",price:2500},
{id:36,name:"Tote Bag",desc:"Eco-friendly tote",image:"https://plus.unsplash.com/premium_photo-1722993519879-aadaa597ba3f",category:"Bags",price:750},
{id:37,name:"Party Clutch",desc:"Trendy evening clutch",image:"https://plus.unsplash.com/premium_photo-1723649902596-607223a3df2a",category:"Bags",price:1300},
{id:38,name:"Gym Bag",desc:"Sporty gym bag",image:"https://plus.unsplash.com/premium_photo-1681498805770-fb4ed08e63f8",category:"Bags",price:1600},

 
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All"); // ✅ New price filter
  const [favorites, setFavorites] = useState([]); // ✅ New favorites
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // ✅ Load favorites from localStorage
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  // ✅ Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    navigate("/cart");
  };

  // ✅ Toggle favorite
  const handleToggleFavorite = (product) => {
    if (favorites.find((fav) => fav.id === product.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  // ✅ Apply category + price filters
  const filteredProducts = allProducts.filter((p) => {
    let categoryMatch =
      selectedCategory === "All" || p.category === selectedCategory;

    let priceMatch = true;
    if (selectedPrice === "low") priceMatch = p.price < 500;
    if (selectedPrice === "mid") priceMatch = p.price >= 500 && p.price <= 2000;
    if (selectedPrice === "high") priceMatch = p.price > 2000;

    return categoryMatch && priceMatch;
  });

  return (
    <div className="products products-page">
      <Navbar />

      <div className="products-header">
        <h2 className="products-heading">Handpicked Treasures Just for You 🎀</h2>

        {/* ✅ Category filter */}
        <div className="filter">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Toys">Toys</option>
            <option value="Watches">Watches</option>
            <option value="Greeting Cards">Greeting Cards</option>
            <option value="Bags">Bags</option>
          </select>
        </div>

        {/* ✅ Price filter */}
        <div className="filter">
          <label htmlFor="price">Price: </label>
          <select
            id="price"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="All">All</option>
            <option value="low">Below ₹500</option>
            <option value="mid">₹500 – ₹2000</option>
            <option value="high">Above ₹2000</option>
          </select>
        </div>
      </div>

      {/* ✅ Products */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.some((fav) => fav.id === product.id)}
            />
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
