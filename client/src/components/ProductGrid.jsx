import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Loader } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <button className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
             </button>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-purple-400 text-sm mb-1">{product.category}</p>
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-2xl font-light text-gray-300">{product.price}</p>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/products');
        if (!response.ok) {
           throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-purple-400">
        <Loader className="animate-spin w-10 h-10" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-10">
        <p>Oops! Something went wrong loading the products.</p>
        <p className="text-sm opacity-70">Please ensure the backend server is running on port 5001.</p>
      </div>
    );
  }

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Featured Drops</h2>
           <p className="text-gray-400">Exclusive items from our latest collection.</p>
        </div>
        <button className="hidden md:block text-purple-400 hover:text-white transition-colors">View All Products &rarr;</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
