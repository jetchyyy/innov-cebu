import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import FadeUp from '../../components/animations/FadeUp';
import StaggerChildren from '../../components/animations/StaggerChildren';

export default function About() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate relative">
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none"></div>

      {/* Page Header */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">Our <span className="text-gradient">Story</span></h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto font-medium">
              Pioneering industrial automation and smart engineering in Cebu and the broader Visayas region.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeUp delay={0.1}>
              <div className="glass-card p-10 h-full">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
                <p className="text-light/70 leading-relaxed text-lg">
                  To empower industries with reliable, scalable, and cutting-edge automation solutions that drive efficiency, ensure safety, and foster sustainable growth. We are committed to delivering engineering excellence that solves complex challenges.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="glass-card p-10 h-full">
                <Lightbulb className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
                <p className="text-light/70 leading-relaxed text-lg">
                  To be the undisputed leader in industrial automation and smart infrastructure across the Philippines, recognized for our innovation, unparalleled technical expertise, and unwavering commitment to client success.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Timeline Placeholder */}
      <section className="py-24 bg-navy relative">
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-light/70">A legacy of engineering excellence.</p>
          </FadeUp>

          <div className="max-w-3xl mx-auto relative border-l-2 border-primary/30 pl-8 space-y-12">
            {[
              { year: "2010", title: "Company Founded", desc: "Started as a small electrical contractor in Mandaue City." },
              { year: "2015", title: "First SCADA Project", desc: "Successfully implemented a city-wide water monitoring system." },
              { year: "2018", title: "Global Partnerships", desc: "Became certified integrators for Siemens and Schneider Electric." },
              { year: "2023", title: "Enterprise Expansion", desc: "Opened new headquarters and expanded to building automation." }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-navy shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                <div className="text-primary font-bold text-xl mb-1">{item.year}</div>
                <h3 className="text-white font-bold text-2xl mb-2">{item.title}</h3>
                <p className="text-light/70">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Core Values</h2>
          </FadeUp>
          
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award />, title: "Excellence", desc: "We never compromise on the quality of our engineering." },
              { icon: <Users />, title: "Collaboration", desc: "We work closely with clients as trusted technology partners." },
              { icon: <Target />, title: "Safety First", desc: "Safety is engineered into every system we build." }
            ].map((val, i) => (
              <motion.div 
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="text-center p-8 rounded-xl bg-navy/50 border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-light/60">{val.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

    </div>
  );
}
