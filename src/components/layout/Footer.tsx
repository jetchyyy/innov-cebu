import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Share2, Users, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none"></div>

      {/* Orange Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-auto">
                <img
                  src="/branding/logo-white.png"
                  alt="InnovCebu Electrical"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none text-white tracking-tighter uppercase italic">
                  InnovCebu <span className="text-primary">Electrical</span>
                </span>
                <span className="text-[10px] text-white/50 font-bold tracking-wider mt-1">Co. Inc.</span>
              </div>
            </Link>
            <p className="text-light/70 text-sm leading-relaxed max-w-xs">
              The leading industrial automation and smart engineering solutions provider in the Visayas. Empowering industries through certified engineering excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100083018546368" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy border border-white/5 flex items-center justify-center text-light/50 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy border border-white/5 flex items-center justify-center text-light/50 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Users size={18} />
              </a>
              <a href="https://www.innovativecontrols.com.ph/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy border border-white/5 flex items-center justify-center text-light/50 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-light/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-light/70 hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/projects" className="text-light/70 hover:text-primary transition-colors text-sm">Featured Projects</Link></li>
              <li><Link to="/careers" className="text-light/70 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-light/70 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Solutions</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-light/70 text-sm">Industrial Automation</li>
              <li className="text-light/70 text-sm">SCADA Systems</li>
              <li className="text-light/70 text-sm">Building Automation</li>
              <li className="text-light/70 text-sm">Electrical Control Panels</li>
              <li className="text-light/70 text-sm">Energy Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-light/70 text-sm">Door 3 J Lim Bldg. P Remedio St. Cabancalan, Mandaue City, Cebu, Philippines, Mandaue City, Philippines 6014</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span className="text-light/70 text-sm">(032) 326 1950</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span className="text-light/70 text-sm">marlo.desquitado@innovcebu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col justify-center items-center gap-4">
          <p className="text-light/30 text-[11px] font-bold tracking-widest uppercase text-center">
            &copy; {currentYear} InnovCebu Electrical Co. Inc. | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
