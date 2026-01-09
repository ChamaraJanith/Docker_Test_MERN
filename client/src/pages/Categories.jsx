import React from 'react';
import { motion } from 'framer-motion';
import { Watch, Monitor, Headphones, Camera, Glasses, ShoppingBag } from 'lucide-react';

const categories = [
  { name: 'Footwear', icon: ShoppingBag, color: 'from-blue-500 to-cyan-500' },
  { name: 'Accessories', icon: Watch, color: 'from-purple-500 to-pink-500' },
  { name: 'Electronics', icon: Monitor, color: 'from-orange-500 to-red-500' },
  { name: 'Gaming', icon: Headphones, color: 'from-green-500 to-emerald-500' },
  { name: 'Vision', icon: Glasses, color: 'from-yellow-500 to-amber-500' },
  { name: 'Audio', icon: Headphones, color: 'from-indigo-500 to-blue-500' },
];

const Categories = () => {
  return (
    <div className="pt-24 min-h-screen max-w-7xl mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Explore Categories
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`p-8 rounded-2xl bg-gradient-to-br ${cat.color} bg-opacity-10 backdrop-blur-md border border-white/10 cursor-pointer group`}
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
              <cat.icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">{cat.name}</h2>
            <p className="text-white/80 mt-2">Browse the latest in {cat.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
