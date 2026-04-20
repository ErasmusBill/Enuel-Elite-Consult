import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, SlidersHorizontal, Grid, List as ListIcon } from 'lucide-react';
import { TourCard } from '../components/Home/FeaturedTours';
import { tours as allTours } from '../data/tours';
import { cn } from '../utils/cn';

// Re-using the TourCard but we might want a slightly different version for the grid
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourGridCard = ({ tour, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-ocean-50"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={tour.images[0]} 
        alt={tour.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center gap-1">
        <Star className="w-4 h-4 text-sand-500 fill-sand-500" />
        <span className="text-sm font-bold text-ocean-900">{tour.rating}</span>
      </div>
    </div>
    <div className="p-5 space-y-3">
      <div className="flex items-center gap-2 text-ocean-400 capitalize text-xs font-bold tracking-widest">
        <span>{tour.category}</span>
        <span>•</span>
        <span>{tour.intensity}</span>
      </div>
      <h3 className="text-lg font-bold text-ocean-900 truncate">{tour.title}</h3>
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 text-ocean-400" />
          <span className="text-xs font-bold text-ocean-400 uppercase tracking-widest">{tour.duration}</span>
        </div>
        <Link 
          to={`/tours/${tour.id}`}
          className="btn-primary !px-4 !py-2 !text-xs"
        >
          View Details
        </Link>
      </div>
    </div>
  </motion.div>
);

const FilterSection = ({ title, children }) => (
  <div className="mb-8">
    <h4 className="font-bold text-ocean-900 mb-4 flex items-center justify-between group cursor-pointer">
      {title}
      <ChevronDown className="w-4 h-4 text-ocean-300 group-hover:text-ocean-600 transition-colors" />
    </h4>
    <div className="space-y-2">
      {children}
    </div>
  </div>
);

const Tours = () => {
  const [tours, setTours] = useState(allTours);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState(3000);

  const filterTours = (e) => {
    // Basic reactive update simulation
    setPriceRange(e.target.value);
    setTours(allTours.filter(t => t.price <= e.target.value));
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-ocean-900"
          >
            Explore the <span className="italic text-sand-600">World</span>
          </motion.h1>
          <p className="text-ocean-500 mt-2">Discover curated adventures across 20+ global destinations.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Collapsible on Mobile */}
          <aside className={cn(
            "lg:w-1/4 space-y-8",
            isSidebarOpen ? "block" : "hidden lg:block"
          )}>
            <div className="glass p-8 rounded-3xl border border-ocean-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-serif font-bold text-ocean-900">Filters</h3>
                <button 
                  onClick={() => { setTours(allTours); }}
                  className="text-sand-600 text-xs font-bold uppercase hover:underline"
                >
                  Reset
                </button>
              </div>

              <FilterSection title="Duration">
                {['1-3 Days', '4-7 Days', '8-14 Days', '15+ Days'].map(d => (
                  <label key={d} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-ocean-200 text-sand-500 focus:ring-sand-500" />
                    <span className="text-sm text-ocean-600 group-hover:text-ocean-900 transition-colors">{d}</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Activity Level">
                {['Easy', 'Moderate', 'Challenging'].map(l => (
                  <label key={l} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-ocean-200 text-sand-500 focus:ring-sand-500" />
                    <span className="text-sm text-ocean-600 group-hover:text-ocean-900 transition-colors">{l}</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Rating">
                {[5, 4, 3].map(s => (
                  <label key={s} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-ocean-200 text-sand-500 focus:ring-sand-500" />
                    <div className="flex items-center gap-1">
                      {[...Array(s)].map((_, i) => <Star key={i} className="w-3 h-3 text-sand-500 fill-sand-500" />)}
                      <span className="text-sm text-ocean-600 ml-1">& up</span>
                    </div>
                  </label>
                ))}
              </FilterSection>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort & View Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-ocean-100">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-ocean-100 rounded-full text-sm font-bold text-ocean-700"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <p className="text-sm text-ocean-400 font-medium">
                  Showing <span className="text-ocean-900 font-bold">{tours.length}</span> adventures
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-ocean-400 uppercase tracking-widest">Sort by:</span>
                  <select className="bg-transparent text-sm font-bold text-ocean-900 outline-none cursor-pointer">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                  </select>
                </div>
                <div className="hidden md:flex items-center gap-1 bg-ocean-50 p-1 rounded-full">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "p-2 rounded-full transition-colors",
                      viewMode === 'grid' ? "bg-white text-ocean-900 shadow-sm" : "text-ocean-400"
                    )}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={cn(
                      "p-2 rounded-full transition-colors",
                      viewMode === 'list' ? "bg-white text-ocean-900 shadow-sm" : "text-ocean-400"
                    )}
                  >
                    <ListIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {tours.map((tour, idx) => (
                  <TourGridCard key={tour.id} tour={tour} index={idx} />
                ))}
              </AnimatePresence>
            </div>

            {tours.length === 0 && (
              <div className="py-24 text-center">
                <div className="w-20 h-20 bg-ocean-50 rounded-full flex items-center justify-center mx-auto mb-6 text-ocean-300">
                  <SlidersHorizontal className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-ocean-900">No matching tours</h3>
                <p className="text-ocean-600 mt-2">Try adjusting your filters to find your perfect adventure.</p>
                <button 
                  onClick={() => { setTours(allTours); setPriceRange(3000); }}
                  className="mt-6 btn-primary"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
