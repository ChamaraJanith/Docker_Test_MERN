import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="bg-slate-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        {/* Footer */}
        <footer className="border-t border-white/10 py-12 mt-12 bg-black/30 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
            <p>&copy; 2026 LuxeMarket. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
