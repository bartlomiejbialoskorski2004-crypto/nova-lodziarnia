import { Instagram, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { FlowButton } from './ui/flow-button';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-40 pb-12 overflow-hidden bg-nova-bg">
      
      {/* 1. The Signature Marquee - Breaking the standard static footer feel */}
      <div className="relative py-8 border-y border-nova-text/10 overflow-hidden select-none mb-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-8xl md:text-[12vw] font-serif font-black italic text-nova-text/5 tracking-tighter uppercase">
              Nova Lodziarnia — Nova Lodziarnia —
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
          
          {/* 2. The Artistic Brand Statement */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-12">
                Stay <br />
                <span className="text-nova-pink italic font-light pl-12 md:pl-24">Sweet.</span>
              </h2>
              
              <div className="flex flex-wrap gap-12 mt-16">
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-nova-text/30">Connect</p>
                  <div className="flex gap-6">
                    <a href="#" className="text-nova-text hover:text-nova-pink transition-colors underline underline-offset-8">Instagram</a>
                    <a href="#" className="text-nova-text hover:text-nova-pink transition-colors underline underline-offset-8">TikTok</a>
                    <a href="#" className="text-nova-text hover:text-nova-pink transition-colors underline underline-offset-8">Facebook</a>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-nova-text/30">Contact</p>
                  <p className="text-nova-text font-serif italic text-lg">+48 123 456 789</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative organic shape behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-nova-pistachio/5 rounded-full blur-[100px] -z-10" />
          </div>

          {/* 3. The Functional Collage */}
          <div className="grid sm:grid-cols-2 gap-16 md:gap-24 relative">
             {/* Newsletter "Pin" */}
             <div className="relative p-8 md:p-12 glass-panel rounded-[50px] shadow-2xl transform rotate-[-2deg] bg-white">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-nova-caramel shadow-inner flex items-center justify-center font-serif italic text-white text-xl border-4 border-white">N</div>
                <h3 className="text-2xl font-serif mb-4 mt-4">Join the Club</h3>
                <p className="text-xs text-nova-text/60 mb-6 leading-relaxed">Early access to seasonal drops and local tasting events.</p>
                <form className="space-y-4">
                  <input type="email" placeholder="Email Address" className="w-full bg-nova-bg border-b border-nova-text/20 py-2 text-sm focus:outline-none focus:border-nova-pink transition-colors" />
                  <FlowButton text="Join" className="!w-full !scale-90" />
                </form>
             </div>

             {/* Directory Section */}
             <div className="flex flex-col justify-end pb-8">
                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-nova-text/30 mb-4 flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> Visit
                    </h4>
                    <p className="text-xl font-serif leading-snug">Szewska 14, <br />31-009 Kraków</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-nova-text/30 mb-4 flex items-center gap-2">
                      <Clock className="w-3 h-3" /> Opening
                    </h4>
                    <p className="text-sm font-light leading-relaxed">
                      Mon-Thu: 10:00 — 21:00 <br />
                      Fri-Sun: 09:00 — 22:30
                    </p>
                  </div>
                </div>
             </div>
          </div>

        </div>

        {/* 4. The Final Cut */}
        <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-nova-text/10 gap-8">
           <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-nova-text/20 order-2 md:order-1">
             © {new Date().getFullYear()} Nova Lodziarnia — Handcrafted Artisan Gelato
           </div>
           <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] order-1 md:order-2">
              <a href="#" className="relative group overflow-hidden h-4 block">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Privacy</span>
                <span className="block absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-nova-pink">Privacy</span>
              </a>
              <a href="#" className="relative group overflow-hidden h-4 block">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Terms</span>
                <span className="block absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-nova-pink">Terms</span>
              </a>
           </div>
        </div>

      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-nova-pink/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
}
