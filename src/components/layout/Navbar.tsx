import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative h-10 md:h-12 w-auto">
            <img 
              src="/branding/logo-white.png" 
              alt="Innovative Controls Cebu" 
              className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl md:text-2xl leading-none text-white tracking-tighter uppercase italic">
              InnovCebu <span className="text-primary">Electrical</span>
            </span>
            <span className="text-[10px] text-white/50 font-bold tracking-[0.3em] uppercase mt-1">
              Co. Inc. | Engineering Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-light/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant="primary" 
            size="sm" 
            className="ml-4"
            onClick={() => window.location.href = '/contact'}
          >
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium py-2 ${
                    location.pathname === link.path ? 'text-primary' : 'text-light/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="primary" 
                className="w-full mt-4"
                onClick={() => window.location.href = '/contact'}
              >
                Get a Quote
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
