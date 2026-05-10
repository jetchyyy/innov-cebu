import { Settings } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="glass-card p-8 group relative overflow-hidden h-full">
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-xl bg-slate border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-light/70 text-sm leading-relaxed flex-grow">{description}</p>
        
        <div className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Learn more <Settings className="w-4 h-4 ml-1 animate-spin-slow" />
        </div>
      </div>
    </div>
  );
}
