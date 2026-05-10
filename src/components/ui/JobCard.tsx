import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Button } from './Button';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
}

export function JobCard({ title, department, location, type }: JobCardProps) {
  return (
    <div className="glass-card p-8 group relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-primary text-sm font-medium tracking-wide mb-2 block">{department}</span>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{title}</h3>
          
          <div className="flex flex-wrap gap-4 text-light/60 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5" /> {location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5" /> {type}
            </div>
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1.5" /> 3+ Years Exp.
            </div>
          </div>
        </div>
        
        <div className="shrink-0">
          <Button variant="outline" className="w-full md:w-auto text-white border-white/20 hover:bg-primary hover:border-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
