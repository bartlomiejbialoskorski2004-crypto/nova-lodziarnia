import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ShinyButton } from './ui/shiny-button';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 glass-pill rounded-full text-nova-text mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-nova-pink animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase">{t.hero.badge}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight mb-6 text-nova-text"
          >
            {t.hero.title1} <br />
            <span className="italic font-light">{t.hero.title2}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-nova-text/70 mb-10 max-w-md font-light leading-relaxed"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/menu">
              <ShinyButton>
                <span className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest">{t.hero.cta1}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </ShinyButton>
            </Link>
            <a href="#locations" className="glass-panel px-8 py-4 rounded-full flex items-center justify-center hover:bg-white/50 transition-all cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest">{t.hero.cta2}</span>
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] lg:h-[80vh] w-full"
        >
          {/* Main big image */}
          <div className="absolute inset-0 glass-panel rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl p-2 md:p-4">
            <img 
              src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=2000" 
              alt="People enjoying dessert at Nova Lodziarnia" 
              className="w-full h-full object-cover rounded-t-[190px] rounded-b-[30px]"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-nova-text/20 to-transparent mix-blend-overlay rounded-t-[200px] rounded-b-[40px]" />
          </div>
          
          {/* Floating accent image */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-12 bottom-12 w-48 h-64 rounded-[100px] overflow-hidden glass-panel shadow-lg p-2 hidden md:block"
          >
            <img 
              src="https://images.pexels.com/photos/3780469/pexels-photo-3780469.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Artisan Ice Cream Cone" 
              className="w-full h-full object-cover rounded-[90px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
