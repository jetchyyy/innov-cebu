import { motion } from 'framer-motion';
import { Cpu, Settings, Zap, Building2, Activity, ShieldCheck } from 'lucide-react';
import FadeUp from '../animations/FadeUp';
import StaggerChildren from '../animations/StaggerChildren';
import { ServiceCard } from '../ui/ServiceCard';

const SERVICES = [
  {
    title: "Industrial Automation",
    description: "End-to-end automation solutions designed to optimize manufacturing processes, reduce downtime, and increase overall productivity.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "SCADA Systems",
    description: "Advanced Supervisory Control and Data Acquisition systems for real-time monitoring and control of industrial operations.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Building Automation",
    description: "Smart building technologies integrating HVAC, lighting, and security for enhanced efficiency and sustainability.",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: "Electrical Control Panels",
    description: "Custom-designed and fabricated electrical control panels meeting strict industrial and safety standards.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Energy Monitoring",
    description: "Comprehensive power quality and energy monitoring systems to track usage and identify efficiency opportunities.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Safety Systems",
    description: "Implementation of industrial safety protocols and fail-safes to protect personnel and equipment assets.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative bg-slate">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineered for <span className="text-gradient">Performance</span></h2>
          <p className="text-light/70 text-lg">
            We provide comprehensive engineering solutions that bridge the gap between heavy industrial machinery and smart digital systems.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
