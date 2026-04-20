import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  Plane, 
  Building2, 
  Compass, 
  GraduationCap, 
  PlusCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    title: "VISA & IMMIGRATION SERVICES",
    icon: ShieldCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    items: [
      "Tourist & Holiday Visas",
      "Business & Conference Visas",
      "Student Visas & Study Permits",
      "Work Visas & Work Permits",
      "Permanent Residency Applications"
    ]
  },
  {
    title: "VISA ASSISTANCE",
    icon: FileText,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    items: [
      "Application Form Completion",
      "Document Preparation & Verification",
      "Embassy Appointment Booking",
      "Interview Coaching",
      "Travel Profile Assessment"
    ]
  },
  {
    title: "WORK & EMPLOYMENT SERVICES",
    icon: Briefcase,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
    items: [
      "Overseas Job Placement (Skilled & Unskilled)",
      "Work Permit Processing",
      "Employer Sponsorship Guidance",
      "Employment Contract Review"
    ]
  },
  {
    title: "FLIGHT & TICKETING SERVICES",
    icon: Plane,
    color: "text-sand-600",
    bgColor: "bg-sand-50",
    borderColor: "border-sand-100",
    items: [
      "International & Domestic Flight Bookings",
      "Group & Corporate Travel",
      "Flight Rescheduling & Cancellations"
    ]
  },
  {
    title: "ACCOMMODATION & LOGISTICS",
    icon: Building2,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    items: [
      "Hotel Reservations (Local & International)",
      "Airport Pickup & Drop-off",
      "Car Rentals & Chauffeur Services"
    ]
  },
  {
    title: "TOURS & HOLIDAY PACKAGES",
    icon: Compass,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    items: [
      "Local & International Tours",
      "Honeymoon & Vacation Packages",
      "Group Travel & Corporate Retreats",
      "Cultural & Heritage Tours"
    ]
  },
  {
    title: "STUDY ABROAD SERVICES",
    icon: GraduationCap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    items: [
      "University Admissions Assistance",
      "Course Selection Guidance",
      "Student Visa Processing",
      "Pre-Departure Orientation"
    ]
  },
  {
    title: "ADDITIONAL SERVICES",
    icon: PlusCircle,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
    items: [
      "Travel Insurance",
      "Passport Processing Assistance",
      "Document Legalization",
      "Travel Consultation & Advisory",
      "Bank Statement"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-ocean-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-sand-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-ocean-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sand-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Comprehensive Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-ocean-900 mb-8"
          >
            Our Professional <br />
            <span className="italic font-normal text-ocean-700">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ocean-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Elite Travel Consult offers a wide range of specialized services to ensure your 
            international journey is seamless, successful, and stress-free.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-ocean-100 flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-ocean-900 mb-6 group-hover:text-ocean-700 transition-colors h-14 flex items-center">
                  {category.title}
                </h3>
                
                <ul className="space-y-4 mb-8 flex-grow text-sm">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ocean-600">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${category.color} opacity-60`} />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/booking"
                  className={`mt-4 inline-flex items-center gap-2 font-bold text-sm tracking-wide ${category.color} group/link`}
                >
                  Request Assistance
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-ocean-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sand-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 relative z-10">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              Our expert consultants are ready to assist you with any of our services. 
              Book a consultation today and take the first step towards your global goals.
            </p>
            <Link 
              to="/booking"
              className="inline-flex items-center justify-center px-10 py-5 bg-sand-500 hover:bg-sand-400 text-ocean-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl relative z-10"
            >
              Book a Consultation Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
