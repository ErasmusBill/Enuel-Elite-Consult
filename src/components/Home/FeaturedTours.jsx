import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tours } from '../../data/tours';

const TourCard = ({ tour, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-ocean-50"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={tour.images[0]} 
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-sand-500 fill-sand-500" />
          <span className="text-sm font-bold text-ocean-900">{tour.rating}</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-sand-500 text-ocean-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {tour.category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-ocean-900 group-hover:text-ocean-700 transition-colors">
              {tour.title}
            </h3>
            <div className="flex items-center gap-1 text-ocean-400 mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{tour.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 py-2 border-y border-ocean-50">
          <div className="flex items-center gap-1 text-ocean-600">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-medium">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-ocean-600">
            <Star className="w-4 h-4 text-sand-500" />
            <span className="text-xs font-medium">{tour.intensity}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-ocean-400 font-bold uppercase tracking-widest">Experience</span>
            <span className="text-sm font-bold text-ocean-900">{tour.duration} Journey</span>
          </div>
          <Link 
            to={`/tours/${tour.id}`}
            className="w-12 h-12 bg-ocean-50 group-hover:bg-sand-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
          >
            <ArrowRight className="w-5 h-5 text-ocean-900" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedTours = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sand-600 font-bold uppercase tracking-widest text-xs"
            >
              Curated Experiences
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mt-2"
            >
              Featured Adventures
            </motion.h2>
          </div>
          <Link to="/tours" className="flex items-center gap-2 text-ocean-700 font-bold hover:text-sand-600 transition-colors group">
            View All Destinations
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, idx) => (
            <TourCard key={tour.id} tour={tour} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { TourCard };
export default FeaturedTours;
