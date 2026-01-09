const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const products = [
  {
    name: "Neon Cyber Sneakers",
    price: "$299.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500",
    category: "Footwear",
    description: "Futuristic footwear with neon glowing accents."
  },
  {
    name: "Holographic Backpack",
    price: "$149.00",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500",
    category: "Accessories",
    description: "Shimmers in different colors depending on the light."
  },
  {
    name: "Digital Watch Pro",
    price: "$399.00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
    category: "Electronics",
    description: "Smartest watch with AI integration."
  },
  {
    name: "VR Headset Elite",
    price: "$599.00",
    image: "https://images.unsplash.com/photo-1622979135228-d338679147ce?auto=format&fit=crop&q=80&w=500",
    category: "Gaming",
    description: "Immersive VR experience with 8K resolution."
  },
  {
    name: "Smart Lens Tech",
    price: "$899.00",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500",
    category: "Vision",
    description: "Augmented reality contact lenses."
  },
  {
    name: "Quantum Earbuds",
    price: "$199.00",
    image: "https://images.unsplash.com/photo-1572569028029-fa87704559db?auto=format&fit=crop&q=80&w=500",
    category: "Audio",
    description: "Crystal clear sound with quantum noise cancellation."
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
