import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, CreditCard, CheckCircle, ArrowRight, 
  ArrowLeft, ShoppingBag, ShieldCheck, HelpCircle 
} from 'lucide-react';
import { tours } from '../data/tours';

// Shared Components for Booking
const BookingStepIcon = ({ icon: Icon, active, completed }) => (
  <div className={cn(
    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
    completed ? "bg-teal-500 text-white" : (active ? "bg-sand-500 text-ocean-900 border-2 border-sand-600 shadow-lg" : "bg-ocean-50 text-ocean-300")
  )}>
    {completed ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-5 h-5" />}
  </div>
);

const ProgressBar = () => {
  const { pathname } = useLocation();
  const steps = [
    { path: '/booking/passengers', label: 'Passengers', icon: Users },
    { path: '/booking/extras', label: 'Review & Extras', icon: ShoppingBag },
    { path: '/booking/payment', label: 'Payment', icon: CreditCard },
  ];

  const currentIdx = steps.findIndex(s => pathname.includes(s.path));

  return (
    <div className="max-w-2xl mx-auto mb-16 relative">
      <div className="flex justify-between relative z-10">
        {steps.map((step, idx) => (
          <div key={step.path} className="flex flex-col items-center gap-2">
            <BookingStepIcon 
              icon={step.icon} 
              active={idx === currentIdx} 
              completed={idx < currentIdx} 
            />
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-widest hidden sm:block",
              idx <= currentIdx ? "text-ocean-900" : "text-ocean-200"
            )}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-ocean-50 -z-0">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(currentIdx / (steps.length - 1)) * 100}%` }}
          className="h-full bg-teal-500"
        />
      </div>
    </div>
  );
};

const SummarySidebar = () => {
  return (
    <div className="lg:w-1/3">
      <div className="sticky top-28 space-y-6">
        <div className="glass p-8 rounded-3xl border border-ocean-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sand-500/10 rounded-bl-full -z-0" />
          
          <h3 className="text-xl font-serif font-bold text-ocean-900 mb-6 relative z-10">Booking Summary</h3>
          
          <div className="flex gap-4 mb-8">
            <img 
              src={tours[0].images[0]} 
              className="w-20 h-20 object-cover rounded-2xl shadow-sm" 
              alt="Tour" 
            />
            <div>
              <p className="font-bold text-ocean-900">{tours[0].title}</p>
              <p className="text-xs text-ocean-400 mt-1">{tours[0].duration} • Private Tour</p>
              <div className="flex text-sand-500 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-dashed border-ocean-100">
            <div className="flex justify-between text-sm">
              <span className="text-ocean-500">Base Price (2 Adults)</span>
              <span className="font-bold text-ocean-900">$2,598.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-ocean-500">Service Fee</span>
              <span className="font-bold text-ocean-900">$45.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-ocean-500">Insurance Contribution</span>
              <span className="font-bold text-teal-600">Free</span>
            </div>
            <div className="flex justify-between pt-6 border-t border-ocean-100 text-xl font-bold">
              <span className="text-ocean-900">Total</span>
              <span className="text-ocean-900">$2,643.00</span>
            </div>
          </div>
        </div>

        <div className="bg-ocean-50 p-6 rounded-3xl border border-ocean-100">
          <div className="flex items-center gap-3 text-ocean-700">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <p className="text-sm font-bold">Elite Guarantee™</p>
          </div>
          <p className="text-xs text-ocean-500 mt-2 leading-relaxed">
            Every booking is fully protected against cancellations and travel disruptions.
          </p>
        </div>
      </div>
    </div>
  );
};

// Step Components
const StepPassengers = ({ data, updateData }) => {
  const navigate = useNavigate();

  const handleInputChange = (index, field, value) => {
    const newPassengers = [...data.passengers];
    newPassengers[index] = { ...newPassengers[index], [field]: value };
    updateData({ passengers: newPassengers });
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-8">Passenger Details</h2>
      <div className="space-y-8">
        {data.passengers.map((passenger, i) => (
          <div key={i} className="p-8 border border-ocean-100 rounded-3xl bg-white hover:border-sand-500 transition-colors shadow-sm">
            <p className="text-xs font-bold text-sand-600 uppercase tracking-widest mb-4">Passenger {i + 1}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-ocean-400 uppercase tracking-tight ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="input-field" 
                  value={passenger.fullName}
                  onChange={(e) => handleInputChange(i, 'fullName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-ocean-400 uppercase tracking-tight ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="input-field" 
                  value={passenger.email}
                  onChange={(e) => handleInputChange(i, 'email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-ocean-400 uppercase tracking-tight ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="input-field" 
                  value={passenger.phone}
                  onChange={(e) => handleInputChange(i, 'phone', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-ocean-400 uppercase tracking-tight ml-1">Date of Birth</label>
                <input 
                  type="date" 
                  className="input-field" 
                  value={passenger.dob}
                  onChange={(e) => handleInputChange(i, 'dob', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-8">
          <button className="flex items-center gap-2 text-ocean-400 font-bold hover:text-ocean-900 transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to details
          </button>
          <button onClick={() => navigate('/booking/extras')} className="btn-primary flex items-center gap-2">
            Continue to Extras <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const StepExtras = ({ data, updateData }) => {
  const navigate = useNavigate();
  const extrasList = [
    { title: 'Premium Airport Transfer', price: 45, desc: 'Luxury private car directly to your hotel.' },
    { title: 'Local SIM Card', price: 20, desc: 'High-speed 5G data for your entire stay.' },
    { title: 'Travel Experience Pack', price: 89, desc: 'Physical guidebook, gear discounts, and local map.' },
  ];

  const toggleExtra = (item) => {
    const isSelected = data.extras.some(e => e.title === item.title);
    if (isSelected) {
      updateData({ extras: data.extras.filter(e => e.title !== item.title) });
    } else {
      updateData({ extras: [...data.extras, item] });
    }
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-8">Personalize Your Trip</h2>
      <div className="space-y-4">
        {extrasList.map((item) => {
          const isSelected = data.extras.some(e => e.title === item.title);
          return (
            <div 
              key={item.title} 
              onClick={() => toggleExtra(item)}
              className={cn(
                "p-6 border rounded-3xl flex items-center justify-between group transition-all cursor-pointer",
                isSelected ? "border-sand-500 bg-sand-50/30 shadow-md" : "border-ocean-100 bg-white hover:bg-ocean-50"
              )}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform",
                  isSelected ? "bg-sand-500 text-white border-sand-600 scale-110" : "bg-white text-sand-500 border-ocean-100 group-hover:scale-110"
                )}>
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ocean-900">{item.title}</h4>
                  <p className="text-xs text-ocean-400 mr-2">{item.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-ocean-900">+${item.price}</span>
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 transition-colors flex items-center justify-center",
                  isSelected ? "border-sand-500 bg-sand-500" : "border-ocean-200 group-hover:border-sand-500"
                )}>
                  {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="flex justify-between items-center pt-12">
          <button onClick={() => navigate('/booking/passengers')} className="flex items-center gap-2 text-ocean-400 font-bold hover:text-ocean-900 transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <button onClick={() => navigate('/booking/payment')} className="btn-primary flex items-center gap-2">
            Proceed to Payment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const StepPayment = ({ data, onComplete }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5001/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Failed to complete booking');

      onComplete(result.bookingId);
      navigate('/booking/confirmation');
    } catch (err) {
      console.error('Booking error:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-8">Secure Payment</h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
          {error}
        </div>
      )}

      <div className="p-8 border border-ocean-100 rounded-3xl bg-ocean-50">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-ocean-400 uppercase tracking-tight ml-1">Card Number</label>
            <div className="relative">
              <input type="text" placeholder="#### #### #### ####" className="input-field pr-12" />
              <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-300" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-ocean-400 uppercase tracking-tight ml-1">Expiry Date</label>
              <input type="text" placeholder="MM / YY" className="input-field" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-ocean-400 uppercase tracking-tight ml-1">CVV</label>
              <div className="relative">
                <input type="text" placeholder="###" className="input-field" />
                <HelpCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean-300" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
             <label className="text-xs font-bold text-ocean-400 uppercase tracking-tight ml-1">Cardholder Name</label>
             <input type="text" placeholder="John Doe" className="input-field" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-12">
        <button 
          onClick={() => navigate('/booking/extras')} 
          disabled={isSubmitting}
          className="flex items-center gap-2 text-ocean-400 font-bold hover:text-ocean-900 transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
        <button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
          className="btn-primary !bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing...' : 'Complete Booking'}
          {!isSubmitting && <CheckCircle className="w-5 h-5" />}
        </button>
      </div>
    </motion.div>
  );
};

const StepConfirmation = ({ bookingId }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-teal-500/20">
        <CheckCircle className="w-12 h-12" />
      </div>
      <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-4">Adventure Confirmed!</h2>
      <p className="text-ocean-600 max-w-md mx-auto mb-8">
        Your booking <span className="font-bold text-ocean-900">#{bookingId || 'EL-8292'}</span> is confirmed. A receipt and itinerary have been sent to your email.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/" className="btn-primary">Go to Home</Link>
        <button className="btn-outline">Download PDF</button>
      </div>
    </motion.div>
  );
};

const Booking = () => {
  const { pathname } = useLocation();
  const isConfirmation = pathname.includes('confirmation');
  
  const [bookingData, setBookingData] = useState({
    tour_id: tours[0]?.id || 'luxury-safari',
    tour_title: tours[0]?.title || 'Luxury African Safari',
    passengers: [
      { fullName: '', email: '', phone: '', dob: '' },
      { fullName: '', email: '', phone: '', dob: '' },
    ],
    extras: [],
    total_price: 2643.00,
  });

  const [bookingId, setBookingId] = useState(null);

  const updateBookingData = (updates) => {
    setBookingData(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {!isConfirmation && <ProgressBar />}
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className={cn("flex-grow", isConfirmation && "flex-grow-0 w-full")}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<StepPassengers data={bookingData} updateData={updateBookingData} />} />
                <Route path="/passengers" element={<StepPassengers data={bookingData} updateData={updateBookingData} />} />
                <Route path="/extras" element={<StepExtras data={bookingData} updateData={updateBookingData} />} />
                <Route path="/payment" element={<StepPayment data={bookingData} onComplete={setBookingId} />} />
                <Route path="/confirmation" element={<StepConfirmation bookingId={bookingId} />} />
              </Routes>
            </AnimatePresence>
          </div>
          
          {!isConfirmation && <SummarySidebar />}
        </div>
      </div>
    </div>
  );
};

// Local Helper
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

// Local Star helper
const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
  </svg>
);

export default Booking;
