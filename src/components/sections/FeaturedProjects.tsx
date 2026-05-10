import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeUp from '../animations/FadeUp';

const PROJECTS = [
  {
    title: "Cebu Manufacturing Plant Automation",
    category: "SCADA & PLC Integration",
    image: "/images/project-1.jpg"
  },
  {
    title: "Mactan Water Treatment Facility",
    category: "Process Control Systems",
    image: "/images/project-2.jpg"
  },
  {
    title: "Cebu IT Park Building Management",
    category: "Building Automation",
    image: "/images/project-3.jpg"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-slate">
      <div className="container mx-auto px-6">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Proven Track Record</span>
            <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
          </div>
          <button className="flex items-center text-primary hover:text-white transition-colors font-medium group">
            View All Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group cursor-pointer rounded-xl overflow-hidden relative h-[400px]"
            >
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/50 to-transparent opacity-90 z-10"></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-x-0 bottom-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary font-medium text-sm tracking-wide mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
