import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-12 bg-ocean-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/about-hero.png" 
            alt="Travel Consultancy" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8"
          >
            Our Story & <span className="text-sand-500 italic">Vision</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-ocean-100 text-lg leading-relaxed">
            At Elite Travel Consult, we believe that global mobility should be accessible, professional, and seamless. We are more than just a travel agency; we are your strategic partner in international transition.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-ocean-900">Our Mission</h2>
            <p className="text-ocean-600 leading-relaxed">
              To provide exceptional travel consultancy and visa assistance through integrity, efficiency, and a client-first approach. We aim to simplify the complexities of international travel and documentation for individuals and businesses alike.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-sand-100 rounded-2xl flex items-center justify-center text-sand-600 mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-ocean-900">Our Vision</h2>
            <p className="text-ocean-600 leading-relaxed">
              To become the most trusted and reliable travel consultancy firm globally, recognized for our commitment to excellence and our ability to turn international aspirations into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 md:px-12 bg-ocean-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ocean-900">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Integrity', desc: 'We maintain the highest ethical standards in all our dealings.' },
              { icon: Award, title: 'Excellence', desc: 'We strive for perfection in every documentation and service provided.' },
              { icon: Heart, title: 'Client First', desc: 'Your travel success is our primary measure of value.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                <value.icon className="w-10 h-10 text-sand-500 mb-6" />
                <h3 className="text-xl font-bold text-ocean-900 mb-4">{value.title}</h3>
                <p className="text-ocean-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Impact Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Elite Travel Consult Team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-serif font-bold text-ocean-900 italic">Experience & Professionalism</h2>
            <p className="text-ocean-600 leading-relaxed">
              With years of experience in the travel industry, our consultants have navigated the complexities of international visa systems and travel logistics. We stay updated with the latest regulations to provide you with accurate advice and efficient service.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-sand-500">10k+</p>
                <p className="text-sm text-ocean-400 font-medium">Clients Helped</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sand-500">98%</p>
                <p className="text-sm text-ocean-400 font-medium">Visa Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
