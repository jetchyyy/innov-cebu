import { motion } from 'framer-motion';
import { Factory, Droplets, Building, HardHat, Coffee } from 'lucide-react';
import FadeUp from '../animations/FadeUp';
import StaggerChildren from '../animations/StaggerChildren';

const INDUSTRIES = [
  { name: "Manufacturing", icon: <Factory className="w-8 h-8" /> },
  { name: "Water & Wastewater", icon: <Droplets className="w-8 h-8" /> },
  { name: "Commercial Buildings", icon: <Building className="w-8 h-8" /> },
  { name: "Mining & Heavy Industry", icon: <HardHat className="w-8 h-8" /> },
  { name: "Food & Beverage", icon: <Coffee className="w-8 h-8" /> }
];

export default function IndustriesServed() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Particles/Lines */}
      <div className="absolute inset-0 opacity-20 bg-industrial-grid pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Sectors We Empower</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries <span className="text-gradient">Served</span></h2>
        </FadeUp>

        <StaggerChildren className="flex flex-wrap justify-center gap-6" staggerDelay={0.1}>
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -10 }}
              className="w-48 h-48 glass-card flex flex-col items-center justify-center p-6 text-center group cursor-pointer relative"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-xl"></div>
              <div className="text-light/50 group-hover:text-primary transition-colors duration-300 mb-4 drop-shadow-[0_0_10px_rgba(249,115,22,0)] group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                {industry.icon}
              </div>
              <h3 className="text-white font-medium group-hover:text-primary transition-colors duration-300">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
