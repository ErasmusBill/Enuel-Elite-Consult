import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Star, Clock, Users, Languages, 
  MapPin, CheckCircle2, Calendar, 
  Share2, Heart, Award, ShieldCheck, ChevronDown
} from 'lucide-react';
import { tours } from '../data/tours';
import { cn } from '../utils/cn';

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={cn(
      "pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-all relative",
      active ? "text-ocean-900" : "text-ocean-300 hover:text-ocean-600"
    )}
  >
    {children}
    {active && (
      <motion.div 
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-1 bg-sand-500 rounded-full"
      />
    )}
  </button>
);

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const foundTour = tours.find(t => t.id === id);
    setTour(foundTour);
    window.scrollTo(0, 0);
  }, [id]);

  if (!tour) return (
    <div className="min-h-screen pt-32 text-center bg-ocean-50">
      <div className="animate-pulse text-ocean-700 font-serif italic text-xl">
        Finding your destination...
      </div>
    </div>
  );

  const itinerary = [
    { day: 1, title: 'Arrival & Welcome Dinner', desc: 'Transfer from the airport to our boutique hotel. Orientation session and authentic local dinner.' },
    { day: 2, title: 'Heritage & History', desc: 'Private guided tour of the city\'s most iconic historical landmarks and hidden alleys.' },
    { day: 3, title: 'Local Delights', desc: 'Experience the culinary secrets of the region with a private chef and local market visit.' },
    { day: 4, title: 'Adventure & Exploration', desc: 'A day dedicated to discovering the hidden gems and natural wonders of the area.' },
    { day: 5, title: 'Departure', desc: 'Final morning breakfast and transfer back to the airport for your flight home.' },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="px-6 md:px-12 py-6 bg-ocean-50/50">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ocean-400">
          <Link to="/" className="hover:text-sand-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/tours" className="hover:text-sand-600 transition-colors">Destinations</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ocean-900">{tour.title}</span>
        </div>
      </div>

      {/* Hero Gallery */}
      <section className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-sand-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-bold text-ocean-900 underline decoration-sand-500 underline-offset-4">{tour.reviews} Reviews</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ocean-900">{tour.title}</h1>
              <div className="flex items-center gap-3 text-ocean-500 mt-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-sand-600" />
                  <span className="font-semibold text-ocean-900">{tour.location}</span>
                </div>
                <span className="text-ocean-200">|</span>
                <span className="text-sand-600 font-bold uppercase tracking-widest text-xs">{tour.category}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-ocean-100 hover:bg-ocean-50 transition-all text-sm font-bold shadow-sm">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-ocean-100 hover:bg-ocean-50 transition-all text-sm font-bold shadow-sm">
                <Heart className="w-4 h-4" /> Save
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] sm:h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="sm:col-span-2 sm:row-span-2 relative group cursor-pointer overflow-hidden">
              <img src={tour.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Main" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="hidden sm:block relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Gallery 1" />
            </div>
            <div className="hidden sm:block relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Gallery 2" />
            </div>
            <div className="hidden sm:block sm:col-span-2 relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1440778303588-435521a205bc?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Gallery 3" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white font-bold tracking-widest uppercase border border-white px-6 py-2">View More Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            {/* At a Glance */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-ocean-50/50 rounded-[2.5rem] mb-16 border border-ocean-100">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Clock className="w-6 h-6 text-sand-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ocean-400 mb-1">Duration</p>
                  <p className="font-bold text-ocean-900">{tour.duration}</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Users className="w-6 h-6 text-sand-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ocean-400 mb-1">Group Size</p>
                  <p className="font-bold text-ocean-900">Custom/Private</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Languages className="w-6 h-6 text-sand-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ocean-400 mb-1">Languages</p>
                  <p className="font-bold text-ocean-900">Global Service</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Award className="w-6 h-6 text-sand-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ocean-400 mb-1">Elite Status</p>
                  <p className="font-bold text-ocean-900">Tier A Service</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-ocean-100 flex gap-12 mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>Overview</TabButton>
              <TabButton active={activeTab === 'itinerary'} onClick={() => setActiveTab('itinerary')}>Itinerary</TabButton>
              <TabButton active={activeTab === 'included'} onClick={() => setActiveTab('included')}>Inclusions</TabButton>
              <TabButton active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')}>Testimonials</TabButton>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-serif font-bold text-ocean-900">The Ultimate <span className="italic text-sand-600">Experience</span></h3>
                  <div className="prose prose-lg text-ocean-600">
                    <p className="leading-relaxed text-xl font-light">
                      {tour.description} We believe that travel should be more than just a trip—it should be a masterpiece of experiences curated specifically for your desires.
                    </p>
                    <p className="leading-relaxed mt-4">
                      Our Elite Travel Consult team handles every logistical detail, from private air transfers to exclusive after-hours access to historical landmarks. This journey is designed for the discerning traveler who seeks luxury, authenticity, and seamless execution.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    {[
                      'VIP Airport Concierge',
                      'Ultra-Luxury Accommodations',
                      'Dedicated Private Guide',
                      'Exclusive Culinary Access',
                      'Personal Itinerary Designer',
                      '24/7 Global Support'
                    ].map(item => (
                      <div key={item} className="flex items-center gap-4 bg-ocean-50/30 p-4 rounded-2xl border border-ocean-50">
                        <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                        <span className="text-ocean-900 font-bold text-sm tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'itinerary' && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-10"
                >
                  {itinerary.map((item, idx) => (
                    <div key={idx} className="flex gap-8 relative group">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-ocean-900 rounded-2xl flex items-center justify-center font-serif font-bold text-sand-500 shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform">
                          {item.day}
                        </div>
                        {idx !== itinerary.length - 1 && <div className="w-px h-full bg-ocean-100 absolute top-12" />}
                      </div>
                      <div className="pb-10 border-b border-ocean-50 w-full">
                        <h4 className="text-2xl font-serif font-bold text-ocean-900 mb-3 underline decoration-sand-500/30 underline-offset-8">Day {item.day}: {item.title}</h4>
                        <p className="text-ocean-600 leading-relaxed text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] border border-ocean-100 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sand-500 to-ocean-900" />
                <div className="flex flex-col mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-teal-600" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-teal-600">Elite Booking Concierge</span>
                  </div>
                  <p className="text-ocean-900 text-2xl font-serif font-bold">Premium Consultation</p>
                  <p className="text-ocean-500 text-sm mt-2">Personalized pricing tailors specifically to your unique travel preferences and dates.</p>
                </div>

                <div className="space-y-4 mb-10">
                   <div className="p-5 bg-ocean-50 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-ocean-100 transition-colors border border-transparent hover:border-sand-200">
                      <div className="flex items-center gap-4">
                        <Calendar className="w-6 h-6 text-ocean-900" />
                        <div>
                          <p className="text-[10px] font-bold uppercase text-ocean-400 tracking-wider">Preferred Date</p>
                          <p className="font-bold text-ocean-900">Custom Selection</p>
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-ocean-300" />
                   </div>
                   <div className="p-5 bg-ocean-50 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-ocean-100 transition-colors border border-transparent hover:border-sand-200">
                      <div className="flex items-center gap-4">
                        <Users className="w-6 h-6 text-ocean-900" />
                        <div>
                          <p className="text-[10px] font-bold uppercase text-ocean-400 tracking-wider">Party Size</p>
                          <p className="font-bold text-ocean-900">Private Boutique</p>
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-ocean-300" />
                   </div>
                </div>

                <Link
                  to="/booking"
                  className="w-full bg-ocean-900 text-sand-500 font-bold py-5 rounded-2xl text-center block text-xl shadow-xl hover:bg-ocean-800 transition-all active:scale-95"
                >
                  Start Consultation
                </Link>

                <p className="text-center text-[10px] text-ocean-300 mt-6 font-bold uppercase tracking-[0.2em]">
                  Elite Travel Consult • Expert Advice
                </p>
              </div>

              <div className="bg-sand-50 p-8 rounded-[2.5rem] flex items-center gap-5 border border-sand-100">
                <div className="w-14 h-14 bg-ocean-900 rounded-2xl flex items-center justify-center text-sand-500 shrink-0 shadow-lg">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-ocean-900">24/7 Elite Support</h4>
                  <p className="text-xs text-ocean-500 mt-1 leading-relaxed">Our concierge team is standing by to customize your global adventure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="py-24 px-6 md:px-12 bg-ocean-50/30 border-t border-ocean-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-12">Related <span className="italic text-sand-600">Adventures</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tours.filter(t => t.id !== id).slice(0, 3).map((t, i) => (
              <motion.div 
                key={t.id} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-ocean-50 group overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden rounded-3xl mb-6">
                  <img src={t.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={t.title} />
                </div>
                <h4 className="text-xl font-bold text-ocean-900 mb-2 truncate">{t.title}</h4>
                <div className="flex items-center gap-2 text-ocean-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.location}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-ocean-50">
                  <span className="text-[10px] font-bold text-ocean-400 uppercase tracking-widest">{t.duration}</span>
                  <Link to={`/tours/${t.id}`} className="text-sand-600 text-sm font-bold uppercase tracking-widest hover:text-ocean-900 transition-colors">Details →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetail;
