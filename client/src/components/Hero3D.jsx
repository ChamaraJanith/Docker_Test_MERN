import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphereRef.current) {
        sphereRef.current.rotation.x = t * 0.2;
        sphereRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.4}>
        <MeshDistortMaterial
          color="#DB2777" // Pink-600
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      
      {/* 3D Canvas Background/Foreground */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6D28D9" />
          
          <AnimatedSphere />
          
          <ContactShadows resolution={1024} scale={10} blur={2.5} opacity={0.5} far={10} color="#000000" />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pointer-events-none">
        <div className="text-left pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Future Commerce
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 text-lg mb-8 max-w-lg"
          >
            Discover a new dimension of shopping with our immersive 3D product showcase. 
            Quality meets innovation.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="flex gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
              Shop Now
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-colors">
              View Lookbook
            </button>
          </motion.div>
        </div>

        {/* The 3D model is visually positioned here by the Canvas, but technically covers the whole background. 
            We leave this column empty or can add another element to balance content.
        */}
        <div></div>
      </div>
      
    </section>
  );
};

export default Hero3D;
