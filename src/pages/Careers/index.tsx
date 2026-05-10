import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Coffee } from 'lucide-react';
import FadeUp from '../../components/animations/FadeUp';
import StaggerChildren from '../../components/animations/StaggerChildren';
import { JobCard } from '../../components/ui/JobCard';

const OPEN_POSITIONS = [
  { title: "Senior Automation Engineer", department: "Engineering", location: "Cebu City, PH", type: "Full-Time" },
  { title: "SCADA Programmer", department: "Software Systems", location: "Mandaue City, PH", type: "Full-Time" },
  { title: "Electrical Design Engineer", department: "Design", location: "Cebu City, PH", type: "Full-Time" },
  { title: "Project Manager (Industrial)", department: "Operations", location: "Visayas Region", type: "Full-Time" }
];

export default function Careers() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate relative">
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none"></div>

      {/* Page Header */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-slate z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">Join the <span className="text-gradient">Innovators</span></h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto font-medium mb-8">
              Build the future of industrial automation with a team that values excellence, safety, and continuous learning.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
          </FadeUp>
          
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap />, title: "Cutting-Edge Tech", desc: "Work with the latest SCADA and PLC systems from global leaders." },
              { icon: <Heart />, title: "Health & Wellness", desc: "Comprehensive HMO coverage for you and your dependents." },
              { icon: <Shield />, title: "Safety Focused", desc: "Industry-leading safety protocols and continuous training." },
              { icon: <Coffee />, title: "Work-Life Balance", desc: "Flexible arrangements and supportive team culture." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="glass-card p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-slate border border-white/10 flex items-center justify-center text-primary mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-light/60 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-navy/50 relative border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-light/70">Ready to make an impact? Explore our current openings below.</p>
          </FadeUp>

          <StaggerChildren className="space-y-6">
            {OPEN_POSITIONS.map((job, index) => (
              <motion.div key={index} variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                <JobCard {...job} />
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

    </div>
  );
}
