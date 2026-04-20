import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Camera, X, Video, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-900 text-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        {/* Brand & Mission */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sand-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-ocean-900 font-serif font-bold text-2xl">E</span>
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">ELITE CONSULT</span>
          </Link>
          <p className="text-ocean-100 text-sm leading-relaxed max-w-xs">
            Expert travel consultancy specializing in Visa Assistance, Work Permits, Student Visas, and global reservations. Your trusted partner for international mobility.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-sand-500 hover:text-ocean-900 rounded-full transition-all duration-300">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-sand-500 hover:text-ocean-900 rounded-full transition-all duration-300">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-sand-500 hover:text-ocean-900 rounded-full transition-all duration-300">
              <X className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-sand-500 hover:text-ocean-900 rounded-full transition-all duration-300">
              <Video className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-sand-500">Explore</h4>
          <ul className="space-y-4 text-ocean-100 text-sm">
            <li><Link to="/tours" className="hover:text-sand-500 transition-colors">All Destinations</Link></li>
            <li><Link to="/offers" className="hover:text-sand-500 transition-colors">Special Offers</Link></li>
            <li><Link to="/story" className="hover:text-sand-500 transition-colors">Our Story</Link></li>
            <li><Link to="/faq" className="hover:text-sand-500 transition-colors">Travel FAQ</Link></li>
            <li><Link to="/admin" className="text-white/20 hover:text-sand-500 transition-colors">Admin Portal</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-sand-500">Contact Us</h4>
          <ul className="space-y-4 text-ocean-100 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sand-500 shrink-0" />
              <span>123 Adventure Way,<br />Discovery Bay, CA 94000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-sand-500 shrink-0" />
              <span>+1 (800) ELITE-TRVL</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-sand-500 shrink-0" />
              <span>concierge@elite.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-sand-500">Join the Journey</h4>
          <p className="text-ocean-100 text-sm mb-4">Subscribe for curated travel inspiration and exclusive member offers.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Email address"
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-sand-500 transition-all text-sm"
            />
            <button className="btn-primary w-full !rounded-xl py-3 text-sm">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-ocean-200 text-xs font-medium">
        <p>© 2026 Elite Travel Consult. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
