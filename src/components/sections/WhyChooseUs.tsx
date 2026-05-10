import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import FadeUp from '../animations/FadeUp';

const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 100, suffix: "%", label: "Safety Record" }
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Handle Vite CJS interop issue where CountUp might be an object containing a default property
  const SafeCountUp: any = (CountUp as any).default || CountUp;

  return (
    <section className="py-24 bg-navy relative border-y border-white/5">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-1/2 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeUp>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Innovative Controls</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Building <span className="text-gradient">Smarter</span> Infrastructure</h2>
            <p className="text-light/70 text-lg mb-8 leading-relaxed">
              Based in Cebu, we understand the unique industrial landscape of the Visayas. We combine world-class engineering standards with local expertise to deliver scalable, robust, and highly efficient automation systems.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Certified engineers and integration specialists",
                "Partnerships with global automation leaders",
                "24/7 technical support and maintenance",
                "Tailored solutions for local industries"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-light/80">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>

          <div ref={ref} className="grid grid-cols-2 gap-6">
            {STATS.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 text-center relative group"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-tight drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                  {inView ? (
                    <SafeCountUp end={stat.value} duration={2.5} separator="," />
                  ) : "0"}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-light/60 font-medium text-sm tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
