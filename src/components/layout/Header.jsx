import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, MapPin, Tag, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Compass className="w-4 h-4" /> },
    { name: 'Destinations', path: '/tours', icon: <Compass className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <MapPin className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4',
        isScrolled 
          ? 'glass shadow-lg py-3' 
          : 'bg-ocean-900/95 backdrop-blur-lg shadow-md text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300",
            isScrolled ? "bg-ocean-900 text-white" : "bg-sand-500 text-ocean-900"
          )}>
            <span className="font-serif font-bold text-2xl">E</span>
          </div>
          <span className={cn(
            "font-serif text-xl md:text-2xl font-bold tracking-tight",
            !isScrolled && "text-white",
            isScrolled && "text-ocean-900"
          )}>
            ELITE CONSULT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'relative flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-sand-500 group',
                pathname === link.path ? 'text-sand-500' : (isScrolled ? 'text-ocean-700' : 'text-white')
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-sand-500 transition-all duration-300 group-hover:w-full",
                pathname === link.path && "w-full"
              )} />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 right-0 border-t border-ocean-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center gap-4 text-ocean-700 text-lg font-semibold border-b border-ocean-50 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-sand-500">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
