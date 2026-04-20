import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Map, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Expert Guidance',
    description: 'Our consultants have deep knowledge of international visa regulations and travel requirements.'
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Trusted Partner',
    description: 'We build long-term relationships based on integrity and successful international transitions.'
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: 'Global Network',
    description: 'Leverage our global reach for seamless hotel and airline reservations tailored to your needs.'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Seamless Process',
    description: 'We handle the complex documentation while you focus on your international aspirations.'
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-ocean-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sand-600 font-bold uppercase tracking-widest text-xs"
          >
            The Elite Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mt-2"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ocean-600 mt-4 leading-relaxed"
          >
            We go beyond standard logistics to provide professional consultancy that ensures your travel success and peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center text-sand-500 mb-6 group-hover:bg-sand-500 group-hover:text-ocean-900 transition-all duration-500 transform group-hover:-rotate-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-ocean-900 mb-4">{reason.title}</h3>
              <p className="text-ocean-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
