import { Instagram, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { FlowButton } from './ui/flow-button';
import { Logo } from './ui/logo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-32 pb-12 px-4 md:px-8 overflow-hidden">
      
      {/* Massive Typographic Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] whitespace-nowrap z-0">
        <h2 className="text-[30vw] font-serif font-black italic leading-none">NOVA</h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* The "Main Scoop" Container - A bold, asymmetric dark container */}
        <div className="bg-nova-text rounded-[60px] md:rounded-[100px] p-8 md:p-20 text-white shadow-[0_50px_100px_-20px_rgba(45,30,23,0.3)] overflow-hidden relative group">
          
          {/* Decorative melting effect background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-nova-pink/20 blur-[100px] rounded-full group-hover:bg-nova-pink/30 transition-colors duration-700" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-nova-pistachio/10 blur-[100px] rounded-full group-hover:bg-nova-pistachio/20 transition-colors duration-700" />

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Column 1: Massive Brand & Socials (4 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Logo variant="light" className="scale-125 origin-left" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-serif leading-[1.1] mb-10"
              >
                {t.footer.title1} <br/>
                <span className="italic text-nova-pink font-light">{t.footer.title2}</span>
              </motion.h2>

              <div className="flex gap-4 mt-auto">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Mail, label: 'Email' },
                  { icon: MessageCircle, label: 'TikTok' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-nova-text transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2: Newsletter & Locations (7 cols) */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Newsletter Sub-col */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-white/40">
                  {t.footer.newsletter || "Newsletter"}
                </h4>
                <p className="text-white/60 font-light mb-8 text-sm leading-relaxed">
                  {t.footer.desc}
                </p>
                <form className="relative group/form">
                  <input 
                    type="email" 
                    placeholder={t.footer.emailPlaceholder}
                    className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-2xl focus:outline-none focus:border-nova-pink focus:bg-white/10 transition-all text-sm mb-4"
                    required
                  />
                  <FlowButton 
                    type="submit" 
                    text={t.footer.subscribe || "Join"} 
                    className="!w-full !border-white/20 !text-white hover:!border-transparent"
                  />
                </form>
              </div>

              {/* Info Sub-col */}
              <div className="space-y-12">
                {/* Locations */}
                <div>
                  <h4 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-nova-pink">
                    <MapPin className="w-3 h-3" /> {t.footer.locations}
                  </h4>
                  <div className="space-y-4">
                    <div className="group/loc cursor-pointer">
                      <p className="text-white font-serif text-lg group-hover:text-nova-pink transition-colors">{t.footer.downtown}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{t.footer.labels.cracowPoland}</p>
                    </div>
                    <div className="group/loc cursor-pointer">
                      <p className="text-white font-serif text-lg group-hover:text-nova-pink transition-colors">Nova Riverside</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{t.footer.labels.comingSoon}</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h4 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-nova-pistachio">
                    <Clock className="w-3 h-3" /> {t.footer.hours}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-white/60 font-light text-xs">
                    <div>
                      <p className="text-white/30 uppercase text-[9px] font-bold mb-1">Mon - Thu</p>
                      <p>10:00 - 21:00</p>
                    </div>
                    <div>
                      <p className="text-white/30 uppercase text-[9px] font-bold mb-1">Fri - Sun</p>
                      <p>09:00 - 22:30</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Branding */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
              {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white transition-colors">{t.footer.labels.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.labels.terms}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.labels.allergenInfo}</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
