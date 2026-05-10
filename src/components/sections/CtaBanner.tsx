import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export default function CtaBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-amber z-0"></div>
      
      {/* Industrial Overlay */}
      <div className="absolute inset-0 bg-industrial-grid opacity-30 mix-blend-overlay z-10"></div>
      
      {/* Animated Light Streaks */}
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 transform -skew-x-12"
      />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Let's Build Smarter <br />
            Industrial Systems
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium">
            Partner with the leading automation experts in Cebu to future-proof your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              style={{ color: '#E9832E', backgroundColor: '#FFFFFF' }}
              className="hover:bg-white hover:opacity-90 transition-all group shadow-xl border-none"
              onClick={() => window.location.href = '/contact'}
            >
              <span style={{ color: '#E9832E' }} className="font-bold">Get Started Today</span>
              <ArrowRight className="ml-2 w-5 h-5 text-[#E9832E] group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-all"
              onClick={() => window.location.href = '/contact'}
            >
              Request a Technical Audit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
