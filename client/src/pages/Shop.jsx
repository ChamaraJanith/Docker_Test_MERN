import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { motion } from 'framer-motion';

const Shop = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Shop All Products
        </motion.h1>
        {/* Reusing ProductGrid for now, in a real app might verify props to show all or pagination */}
        <ProductGrid />
      </div>
    </div>
  );
};

export default Shop;
