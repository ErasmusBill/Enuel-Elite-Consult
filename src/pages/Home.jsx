import React from 'react';
import Hero from '../components/Home/Hero';
import SearchBar from '../components/Home/SearchBar';
import Services from '../components/Home/Services';
import WhyUs from '../components/Home/WhyUs';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <div className="relative">
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
          <SearchBar />
        </div>
      </div>
      
      <div className="mt-20">
        <Services />
      </div>
      
      <WhyUs />
      
      {/* Inspirational Quote Section */}
      <section className="py-32 px-6 md:px-12 bg-ocean-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200" 
            alt="Nature"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-sand-500 font-serif text-3xl md:text-5xl leading-tight"
            >
              "The gladdest moment in human life, methinks, is a departure into unknown lands."
            </motion.p>
            <footer className="mt-8 text-white/60 font-medium tracking-widest uppercase text-sm">
              — Sir Richard Burton
            </footer>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
