import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { LogoButton } from './ui/logo-button';

export default function SeasonalOffer() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-transparent text-nova-text relative overflow-hidden z-10">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-20%] w-[60vw] h-[60vw] rounded-full bg-white/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center gap-12 lg:gap-24">
        
        {/* Image Column */}
        <div className="order-2 md:order-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-square glass-panel rounded-[100px] shadow-2xl relative p-4"
          >
            <div className="w-full h-full rounded-[84px] overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Seasonal gelato" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-[40px] right-[-10px] w-24 h-24 bg-white/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12 border-4 border-nova-cream z-20 text-nova-text">
              <span className="text-[10px] font-bold uppercase leading-none">{t.footer.onlyAt}</span>
              <span className="text-xs font-serif font-black italic">Nova</span>
            </div>
          </motion.div>
        </div>

        {/* Text Column */}
        <div className="order-1 md:order-2 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 glass-pill rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-nova-pink rounded-full"></span>
            {t.seasonal.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 leading-[1.1] md:leading-[0.9]"
          >
            {t.seasonal.title1} <br />
            <span className="italic font-light">{t.seasonal.title2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-nova-text/70 mb-8 max-w-md font-light leading-relaxed"
          >
            {t.seasonal.desc}
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto"
          >
            <LogoButton 
              as="a"
              href="#order"
              text={t.seasonal.cta}
              className="w-full sm:w-auto"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-nova-text/40">{t.seasonal.availableUntil}</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
