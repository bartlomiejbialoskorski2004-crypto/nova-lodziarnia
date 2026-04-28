import { Instagram, Mail, MapPin, Clock, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { FlowButton } from './ui/flow-button';
import { Logo } from './ui/logo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-40 pb-20 px-6 overflow-hidden">
      
      {/* Decorative Top Border - A thick, colorful melting line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-nova-pink via-nova-caramel to-nova-pistachio opacity-30" />

      <div className="max-w-7xl mx-auto">
        
        {/* Modular Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif leading-tight mb-6"
            >
              {t.footer.title1} <br/>
              <span className="italic text-nova-pink font-light">{t.footer.title2}</span>
            </motion.h2>
            <p className="text-nova-text/60 text-lg md:text-xl font-light">
              Crafting joy, one scoop at a time. Join our community of dessert lovers.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <Logo className="scale-150 mb-4" />
            <div className="flex gap-4">
              {[Instagram, MessageCircle, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-nova-text/5 hover:bg-nova-pink hover:text-white flex items-center justify-center transition-all duration-300 group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Modular Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          
          {/* Card 1: Newsletter */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[40px] bg-nova-pink/5 border border-nova-pink/10 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-nova-pink/10 flex items-center justify-center mb-8">
                <Mail className="w-5 h-5 text-nova-pink" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Stay Updated</h3>
              <p className="text-nova-text/60 text-sm mb-8 leading-relaxed">
                Get notified about seasonal flavors and exclusive local events.
              </p>
            </div>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-white py-4 px-6 rounded-2xl border border-nova-text/5 focus:outline-none focus:border-nova-pink transition-all text-sm mb-3 shadow-sm"
              />
              <FlowButton text="Join" className="!w-full !py-3 !text-[10px]" />
            </form>
          </motion.div>

          {/* Card 2: Locations */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[40px] bg-nova-pistachio/5 border border-nova-pistachio/10 flex flex-col"
          >
            <div className="w-12 h-12 rounded-full bg-nova-pistachio/10 flex items-center justify-center mb-8">
              <MapPin className="w-5 h-5 text-nova-pistachio" />
            </div>
            <h3 className="text-2xl font-serif mb-6">Visit Us</h3>
            <div className="space-y-8 flex-1">
              <div className="group cursor-pointer">
                <p className="font-bold text-sm uppercase tracking-widest text-nova-text/40 mb-2">Downtown Cracow</p>
                <p className="text-lg font-serif group-hover:text-nova-pistachio transition-colors">Szewska 14, 31-009</p>
              </div>
              <div className="group cursor-pointer">
                <p className="font-bold text-sm uppercase tracking-widest text-nova-text/40 mb-2">Kazimierz District</p>
                <p className="text-lg font-serif group-hover:text-nova-pistachio transition-colors">Coming Late 2024</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Contact & Hours */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[40px] bg-nova-caramel/5 border border-nova-caramel/10 flex flex-col"
          >
            <div className="w-12 h-12 rounded-full bg-nova-caramel/10 flex items-center justify-center mb-8">
              <Clock className="w-5 h-5 text-nova-caramel" />
            </div>
            <h3 className="text-2xl font-serif mb-6">Opening Hours</h3>
            <div className="space-y-6 flex-1 text-nova-text/70">
              <div className="flex justify-between items-center py-2 border-b border-nova-text/5">
                <span className="text-sm font-bold uppercase tracking-tighter">Mon - Thu</span>
                <span className="font-serif italic">10:00 — 21:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-nova-text/5">
                <span className="text-sm font-bold uppercase tracking-tighter">Fri - Sun</span>
                <span className="font-serif italic">09:00 — 22:30</span>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-4 text-nova-text">
                <div className="w-10 h-10 rounded-full bg-nova-text/5 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-serif text-lg">+48 123 456 789</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-nova-text/5 gap-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-nova-text/30">
            © {new Date().getFullYear()} NOVA LODZIARNIA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-10 text-[11px] font-bold uppercase tracking-widest text-nova-text/40">
            <a href="#" className="hover:text-nova-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-nova-pink transition-colors">Cookies</a>
            <a href="#" className="hover:text-nova-pink transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
