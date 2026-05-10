import { motion } from 'framer-motion';

const PARTNERS = [
  "Siemens", "Schneider Electric", "ABB", "Rockwell Automation", 
  "Omron", "Mitsubishi Electric", "Phoenix Contact", "Carlo Gavazzi"
];

export default function TrustedPartners() {
  return (
    <section className="py-12 bg-navy border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-light/50 text-sm font-medium tracking-widest uppercase">Trusted Technology Partners</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-navy to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-navy to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 items-center px-8"
        >
          {/* Double the array for seamless infinite loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div key={index} className="flex items-center justify-center min-w-[150px]">
              <span className="text-2xl font-bold text-light/20 font-heading hover:text-light/60 transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
