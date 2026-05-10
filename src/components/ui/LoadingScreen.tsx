import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-slate flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-industrial-grid opacity-10"></div>
          <div className="absolute inset-0 bg-blueprint opacity-20"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo Container */}
            <div className="relative mb-8">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(233, 131, 46, 0.2)",
                    "0 0 60px rgba(233, 131, 46, 0.4)",
                    "0 0 20px rgba(233, 131, 46, 0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-navy/80 backdrop-blur-xl border border-white/10 p-6 flex items-center justify-center relative overflow-hidden group"
              >
                <img 
                  src="/branding/mark.png" 
                  alt="Innovative Controls Mark" 
                  className="w-full h-full object-contain relative z-10"
                />
                
                {/* Scanner Effect */}
                <motion.div
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tighter mb-1 uppercase italic">
                INNOVCEBU <span className="text-primary">ELECTRICAL</span>
              </h2>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">
                  Co. Inc.
                </span>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <div className="h-[1px] w-8 bg-white/10"></div>
                  <span className="text-[9px] font-medium tracking-[0.3em] uppercase text-light/30">
                    Engineering Excellence
                  </span>
                  <div className="h-[1px] w-8 bg-white/10"></div>
                </div>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-12 w-64 h-[2px] bg-white/5 rounded-full relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </motion.div>

          {/* Ambience */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
