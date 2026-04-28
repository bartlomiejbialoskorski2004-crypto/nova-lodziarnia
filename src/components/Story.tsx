import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Story() {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-24 md:py-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side: Images */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] md:aspect-[3/4] rounded-t-[150px] rounded-b-[40px] glass-panel p-2 shadow-2xl"
          >
            <img 
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Café interior" 
              className="w-full h-full object-cover rounded-t-[140px] rounded-b-[30px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-full glass-panel p-3 shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Waffle with berries" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Right Side: Text */}
        <div className="mt-12 md:mt-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight"
          >
            {t.story.title1} <br/><span className="italic text-nova-pink">{t.story.title2}</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-nova-text/80 font-light"
          >
            <p className="text-lg">
              {t.story.p1}
            </p>
            <p className="text-lg">
              {t.story.p2}
            </p>
            <p className="text-lg font-medium text-nova-text">
              {t.story.p3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <a 
              href="#story" 
              className="relative py-2 text-xs font-bold uppercase tracking-widest text-nova-text group inline-block"
            >
              {t.story.cta}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
