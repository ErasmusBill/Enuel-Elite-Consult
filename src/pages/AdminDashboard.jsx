import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  Search,
  RefreshCw,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { format } from 'date-fns';

const fetchBookings = async () => {
  const response = await fetch('http://localhost:5001/api/bookings');
  if (!response.ok) throw new Error('Failed to fetch bookings');
  return response.json();
};

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-[2rem] border border-ocean-100 shadow-sm hover:shadow-md transition-all group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-teal-600' : 'text-rose-600'}`}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {trendValue}
        </div>
      )}
    </div>
    <p className="text-ocean-400 text-sm font-medium mb-1">{title}</p>
    <h3 className="text-2xl font-serif font-bold text-ocean-900">{value}</h3>
  </motion.div>
);

const BookingRow = ({ booking, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const leadPassenger = booking.passengers[0];

  return (
    <>
      <motion.tr 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.05 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="group cursor-pointer hover:bg-ocean-50/50 transition-colors border-b border-ocean-50"
      >
        <td className="py-4 px-6 text-sm font-bold text-ocean-900">
          #{booking.bookingId || `EL-${booking.id.toString().padStart(4, '0')}`}
        </td>
        <td className="py-4 px-6">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-ocean-900">{booking.tour_title}</span>
            <span className="text-[10px] text-ocean-400 uppercase tracking-tighter">ID: {booking.tour_id}</span>
          </div>
        </td>
        <td className="py-4 px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center text-[10px] font-bold text-sand-700">
              {leadPassenger.fullName.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-ocean-900">{leadPassenger.fullName}</span>
              <span className="text-xs text-ocean-400">{booking.passengers.length} Passengers</span>
            </div>
          </div>
        </td>
        <td className="py-4 px-6 text-sm font-bold text-ocean-900">
          ${booking.total_price.toLocaleString()}
        </td>
        <td className="py-4 px-6">
          <span className="text-xs text-ocean-500 font-medium tracking-tight">
            {format(new Date(booking.created_at), 'MMM dd, yyyy')}
          </span>
        </td>
        <td className="py-4 px-6">
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] font-bold uppercase tracking-widest border border-teal-100">
            Confirmed
          </span>
        </td>
        <td className="py-4 px-6 text-right">
          <ChevronDown className={`w-4 h-4 text-ocean-300 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </td>
      </motion.tr>
      <AnimatePresence>
        {isExpanded && (
          <tr>
            <td colSpan="7" className="p-0">
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-ocean-50/30"
              >
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-ocean-400 uppercase tracking-widest flex items-center gap-2">
                       <Users className="w-4 h-4" /> All Passengers
                    </h4>
                    <div className="space-y-3">
                      {booking.passengers.map((p, i) => (
                        <div key={i} className="bg-white p-4 rounded-2xl border border-ocean-100 shadow-sm flex justify-between items-center text-sm">
                          <div>
                            <p className="font-bold text-ocean-900">{p.fullName}</p>
                            <p className="text-xs text-ocean-400">{p.email || 'No email'}</p>
                          </div>
                          <div className="text-right">
                             <p className="text-xs font-medium text-ocean-500">{p.phone}</p>
                             <p className="text-[10px] text-ocean-300">DOB: {p.dob}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-ocean-400 uppercase tracking-widest flex items-center gap-2">
                       <BarChart3 className="w-4 h-4" /> Selected Extras
                    </h4>
                    <div className="space-y-2">
                      {booking.extras.length > 0 ? booking.extras.map((e, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-white/50 border border-ocean-50 rounded-xl text-xs">
                          <span className="text-ocean-700">{e.title}</span>
                          <span className="font-bold text-ocean-900">${e.price}</span>
                        </div>
                      )) : (
                        <p className="text-xs italic text-ocean-300">No extras selected</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
};

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: bookings, isLoading, error, refetch, isRefetching } = useQuery({
    queryKey: ['bookings'],
    queryFn: fetchBookings,
    refreshInterval: 30000, // Refresh every 30 seconds
  });

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-50">
      <div className="text-center">
        <RefreshCw className="w-10 h-10 text-sand-500 animate-spin mx-auto mb-4" />
        <p className="font-serif italic text-ocean-700">Accessing Elite Records...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-50 px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-[2.5rem] shadow-xl text-center">
        <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-ocean-900 mb-2">Connection Issue</h2>
        <p className="text-ocean-500 mb-8 text-sm">Make sure your backend server is running on port 5001.</p>
        <button onClick={() => refetch()} className="btn-primary w-full">Try Again</button>
      </div>
    </div>
  );

  const totalRevenue = bookings.reduce((sum, b) => sum + b.total_price, 0);
  const avgBooking = bookings.length > 0 ? totalRevenue / bookings.length : 0;
  
  const filteredBookings = bookings.filter(b => 
    b.tour_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.passengers[0].fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (b.bookingId || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 min-h-screen bg-ocean-50/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600">Elite Administrative Portal</span>
            </div>
            <h1 className="text-4xl font-serif font-bold text-ocean-900 tracking-tight">Management <span className="italic font-normal text-ocean-700">Console</span></h1>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean-400" />
              <input 
                type="text" 
                placeholder="Search bookings..." 
                className="w-full md:w-64 pl-12 pr-4 py-3 bg-white border border-ocean-100 rounded-2xl text-sm focus:outline-none focus:border-sand-500 transition-all font-medium shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => refetch()} 
              disabled={isRefetching}
              className="p-3 bg-white border border-ocean-100 rounded-2xl hover:bg-ocean-50 transition-colors shadow-sm disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 text-ocean-700 ${isRefetching ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            title="Total Bookings" 
            value={bookings.length} 
            icon={Calendar} 
            trend="up" 
            trendValue="12%" 
            color="bg-blue-600"
          />
          <StatCard 
            title="Total Revenue" 
            value={`$${totalRevenue.toLocaleString()}`} 
            icon={DollarSign} 
            trend="up" 
            trendValue="8.4%" 
            color="bg-emerald-600"
          />
          <StatCard 
            title="Avg. Booking Value" 
            value={`$${avgBooking.toFixed(0)}`} 
            icon={TrendingUp} 
            color="bg-sand-600"
          />
          <StatCard 
            title="Active Packages" 
            value="14" 
            icon={MapPin} 
            color="bg-indigo-600"
          />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-[2.5rem] border border-ocean-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-ocean-50 flex justify-between items-center">
            <h3 className="text-xl font-serif font-bold text-ocean-900">Booking Records</h3>
            <span className="text-xs font-bold text-ocean-400 uppercase tracking-widest">{filteredBookings.length} Records Found</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-ocean-50/50">
                <tr>
                  <th className="py-4 px-6 text-[10px] font-bold text-ocean-400 uppercase tracking-widest">ID</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-ocean-400 uppercase tracking-widest">Tour / Package</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-ocean-400 uppercase tracking-widest">Lead Passenger</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-ocean-400 uppercase tracking-widest">Total Price</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-ocean-400 uppercase tracking-widest">Date Booked</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-ocean-400 uppercase tracking-widest">Status</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length > 0 ? filteredBookings.map((booking, idx) => (
                  <BookingRow key={booking.id} booking={booking} index={idx} />
                )) : (
                  <tr>
                    <td colSpan="7" className="py-20 text-center">
                      <div className="max-w-xs mx-auto">
                        <BarChart3 className="w-12 h-12 text-ocean-100 mx-auto mb-4" />
                        <p className="text-ocean-400 text-sm italic font-serif">No booking records match your search criteria or are currently available.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-ocean-50/20 border-t border-ocean-50 text-center">
             <p className="text-[10px] font-bold text-ocean-300 uppercase tracking-[0.2em]">End of Records • Elite Travel Consult Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
