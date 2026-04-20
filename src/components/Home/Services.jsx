import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Briefcase, GraduationCap, Plane, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    description: 'Expert guidance for tourist, business, and expert visas globally. We handle the complexity while you plan your trip.',
    icon: ShieldCheck,
    color: 'bg-blue-500',
  },
  {
    id: 'work-permits',
    title: 'Work Permits',
    description: 'Facilitating international employment opportunities with comprehensive documentation support and legal guidance.',
    icon: Briefcase,
    color: 'bg-teal-500',
  },
  {
    id: 'student-visa',
    title: 'Student Visa',
    description: 'Helping students achieve their dreams of studying abroad with dedicated counseling and application support.',
    icon: GraduationCap,
    color: 'bg-indigo-500',
  },
  {
    id: 'reservations',
    title: 'Hotel & Airline Reservations',
    description: 'Premium booking services for seamless travel experiences. Get the best rates and confirmed itineraries.',
    icon: Plane,
    color: 'bg-sand-500',
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-ocean-50 relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-700 ${service.color}`} />
      
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.color} bg-opacity-10`}>
        <Icon className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
      </div>
      
      <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-4 group-hover:text-ocean-700 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-ocean-500 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      
      <Link 
        to="/services"
        className="inline-flex items-center gap-2 text-ocean-900 font-bold text-sm group/link"
      >
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sand-600 font-bold uppercase tracking-[0.2em] text-xs"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mt-4 mb-6"
          >
            Elite Travel Consult <br /> 
            <span className="italic font-normal text-ocean-700">Services</span>
          </motion.h2>
          <p className="text-ocean-500">
            We provide specialized consultancy for all your international travel and mobility needs, ensuring a smooth and successful transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-3 px-10 py-4 bg-ocean-900 text-white font-bold rounded-full hover:bg-ocean-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
