import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo */}
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
          >
            LuxeMarket
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => (
            <Link key={item.name} to={item.path}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Search className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" />
          <User className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" />
          <div className="relative cursor-pointer hover:text-purple-400 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-pink-600 text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black/90 backdrop-blur-xl absolute top-full left-0 w-full p-4 border-b border-white/10"
        >
          <div className="flex flex-col space-y-4">
             {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block py-2 border-b border-white/5"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
