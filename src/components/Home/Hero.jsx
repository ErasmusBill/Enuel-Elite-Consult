import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={images[current]} 
            alt="Destination" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-ocean-900/20 to-ocean-900/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sand-500 font-bold tracking-[0.3em] uppercase text-sm mb-4"
        >
          Expert Travel Consultancy
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-4xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-8 leading-tight px-2"
        >
          Your Global Mobility <br /> 
          <span className="italic text-sand-100">Partner.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="w-full max-w-4xl"
        >
          {/* We'll place the SearchBar component here in the Home page */}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-2 md:p-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-ocean-900 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 md:p-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-ocean-900 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex gap-2 z-20">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 transition-all duration-500 rounded-full ${idx === current ? 'w-8 md:w-12 bg-sand-500' : 'w-4 md:w-6 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
