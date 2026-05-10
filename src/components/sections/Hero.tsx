import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import StaggerChildren from '../animations/StaggerChildren';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate/40 via-slate/60 to-slate z-10"></div>
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="/images/hero/hero-bg.jpg" 
          alt="Industrial Automation" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 z-10 bg-industrial-grid opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-blueprint opacity-10 pointer-events-none"></div>

      {/* Floating Orange Light Streaks */}
      <motion.div 
        animate={{ 
          x: ['-100%', '200%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent z-10 blur-md"
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <StaggerChildren className="max-w-4xl mx-auto text-center" staggerDelay={0.2}>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 }
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Certified Engineering Excellence</span>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tighter uppercase italic">
              Empowering <br />
              <span className="text-gradient">Industries</span>
            </h1>
          </motion.div>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="text-lg md:text-xl text-light/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Leading the Visayas in industrial automation, SCADA systems, and advanced electrical controls for smarter, more efficient infrastructure.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button size="lg" className="w-full sm:w-auto group orange-glow">
              Our Expertise
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/10 hover:bg-white/5 backdrop-blur-sm">
              Contact an Engineer
            </Button>
          </motion.div>
        </StaggerChildren>
      </div>

      {/* Scroll Indicator - Moved to the very bottom edge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-white/10 text-[8px] font-bold tracking-[0.6em] uppercase">Initialize Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-white/5 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
