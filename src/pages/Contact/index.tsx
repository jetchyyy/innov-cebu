import { MapPin, Phone, Mail, Send } from 'lucide-react';
import FadeUp from '../../components/animations/FadeUp';
import { Button } from '../../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate relative">
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none"></div>

      <section className="relative py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto font-medium">
              Have a project in mind? Our engineering team is ready to provide you with comprehensive technical solutions.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <FadeUp delay={0.1}>
              <div className="bg-navy/80 backdrop-blur-md p-10 rounded-2xl border border-white/10 h-full flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Headquarters</h4>
                      <p className="text-light/70 leading-relaxed">
                        123 Industrial Tech Park,<br />
                        Mandaue City, Cebu,<br />
                        Philippines 6014
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Phone</h4>
                      <p className="text-light/70">+63 (32) 123 4567</p>
                      <p className="text-light/70">+63 917 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Email</h4>
                      <p className="text-light/70">info@innovativecontrols.com.ph</p>
                      <p className="text-light/70">sales@innovativecontrols.com.ph</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-10 h-48 rounded-xl bg-slate/50 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <span className="relative z-10 text-white font-medium flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> View on Map</span>
                </div>
              </div>
            </FadeUp>

            {/* Contact Form */}
            <FadeUp delay={0.2}>
              <div className="glass-card p-10 h-full">
                <h2 className="text-3xl font-bold text-white mb-8">Send an Inquiry</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-light/80">First Name</label>
                      <input type="text" className="w-full bg-slate/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-light/80">Last Name</label>
                      <input type="text" className="w-full bg-slate/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-light/80">Email Address</label>
                    <input type="email" className="w-full bg-slate/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-light/80">Company / Organization</label>
                    <input type="text" className="w-full bg-slate/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors" placeholder="Acme Corp" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-light/80">Message</label>
                    <textarea rows={4} className="w-full bg-slate/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <Button variant="primary" className="w-full group">
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
