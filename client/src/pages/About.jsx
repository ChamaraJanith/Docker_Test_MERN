import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-slate-900 z-0"/>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold z-10 text-center"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">LuxeMarket</span>
        </motion.h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            LuxeMarket is not just a store; it's a glimpse into the future of commerce. 
            born in 2026, we aim to merge the digital and physical worlds, providing 
            immersive shopping experiences through 3D visualization and augmented reality.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We curate only the finest, most futuristic items that push the boundaries 
            of design and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {['Innovation', 'Quality', 'Future'].map((val, i) => (
             <motion.div 
               key={val}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 + (i * 0.1) }}
               className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-colors"
             >
               <h3 className="text-xl font-bold text-purple-400 mb-2">{val}</h3>
               <p className="text-sm text-gray-400">Core value of our brand identity.</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default About;
