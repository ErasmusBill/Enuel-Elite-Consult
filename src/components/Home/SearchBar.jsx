import React, { useState } from 'react';
import { Search, Calendar, Users, ChevronDown, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(null);
  const [travelers, setTravelers] = useState(1);

  const toggleTab = (tab) => setActiveTab(activeTab === tab ? null : tab);

  return (
    <div className="w-full relative px-4">
      <div className="glass shadow-2xl rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2 max-w-5xl mx-auto">
        
        {/* Destination */}
        <div 
          className="flex-1 px-6 py-3 md:py-1 cursor-pointer hover:bg-ocean-50/50 rounded-full transition-colors relative"
          onClick={() => toggleTab('destination')}
        >
          <div className="flex items-center gap-3">
            <MapPin className="text-sand-600 w-5 h-5 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-ocean-400 uppercase tracking-wider">Where to?</p>
              <input 
                type="text" 
                placeholder="Search destinations"
                className="bg-transparent border-none outline-none text-ocean-900 font-semibold placeholder:text-ocean-300 w-full"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-ocean-100" />

        {/* Date */}
        <div 
          className="flex-1 px-6 py-3 md:py-1 cursor-pointer hover:bg-ocean-50/50 rounded-full transition-colors relative"
          onClick={() => toggleTab('date')}
        >
          <div className="flex items-center gap-3">
            <Calendar className="text-sand-600 w-5 h-5 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-ocean-400 uppercase tracking-wider">When?</p>
              <p className="text-ocean-900 font-semibold truncate">
                {date ? format(date, 'MMM dd, yyyy') : 'Add dates'}
              </p>
            </div>
          </div>

          <AnimatePresence>
            {activeTab === 'date' && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 mt-4 z-50 p-4 bg-white rounded-2xl shadow-2xl border border-ocean-100"
                onClick={(e) => e.stopPropagation()}
              >
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={(d) => { setDate(d); setActiveTab(null); }}
                  modifiersClassNames={{
                    selected: '!bg-sand-500 !text-ocean-900',
                    today: 'font-bold text-sand-600'
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:block w-px h-8 bg-ocean-100" />

        {/* Travelers */}
        <div 
          className="flex-1 px-6 py-3 md:py-1 cursor-pointer hover:bg-ocean-50/50 rounded-full transition-colors relative"
          onClick={() => toggleTab('travelers')}
        >
          <div className="flex items-center gap-3">
            <Users className="text-sand-600 w-5 h-5 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-ocean-400 uppercase tracking-wider">Travelers</p>
              <p className="text-ocean-900 font-semibold">{travelers} {travelers === 1 ? 'Person' : 'People'}</p>
            </div>
          </div>

          <AnimatePresence>
            {activeTab === 'travelers' && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-4 z-50 p-6 bg-white rounded-2xl shadow-2xl border border-ocean-100 w-64"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-ocean-900">Passengers</p>
                    <p className="text-xs text-ocean-400">Ages 12 or above</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      className="w-8 h-8 rounded-full border border-ocean-200 flex items-center justify-center hover:bg-ocean-50"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    >
                      -
                    </button>
                    <span className="font-bold w-4 text-center">{travelers}</span>
                    <button 
                      className="w-8 h-8 rounded-full border border-ocean-200 flex items-center justify-center hover:bg-ocean-50"
                      onClick={() => setTravelers(travelers + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Button */}
        <button className="bg-sand-500 hover:bg-sand-600 text-ocean-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 m-1">
          <Search className="w-5 h-5" />
          <span className="md:hidden lg:inline">Find Adventures</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
