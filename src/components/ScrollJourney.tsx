import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ScrollJourney() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} className="py-32 bg-transparent relative overflow-hidden z-10">
      {/* Parallax text marquee */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none overflow-hidden select-none whitespace-nowrap font-serif italic text-[20vw] flex flex-col justify-center gap-20">
        <motion.div style={{ x: x1 }} className="text-nova-pistachio leading-none">Pistachio Strawberry Caramel</motion.div>
        <motion.div style={{ x: x2 }} className="text-nova-pink leading-none ml-[-50vw]">Handmade Daily With Love</motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div 
            style={{ rotate }}
            className="w-full aspect-square bg-nova-pink/10 rounded-[80px] absolute -top-10 -left-10 z-0"
          />
          <div className="relative z-10 glass-panel rounded-[60px] p-4 shadow-2xl overflow-hidden">
             <img 
               src="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1200" 
               alt="Craftsmanship" 
               className="w-full h-full object-cover rounded-[50px] aspect-square"
               referrerPolicy="no-referrer"
             />
          </div>
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
          >
            {t.story.title1} <br/><span className="text-nova-berry italic font-light">{t.story.title2}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-nova-text/80 font-light leading-relaxed mb-10"
          >
            {t.story.p2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { label: 'Fresh', color: 'nova-pistachio' },
              { label: 'Local', color: 'nova-pink' },
              { label: 'Craft', color: 'nova-caramel' }
            ].map((tag) => (
              <motion.div 
                key={tag.label} 
                className="flex flex-col items-center gap-3"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-full aspect-square rounded-2xl bg-${tag.color}/20 flex items-center justify-center cursor-pointer`}>
                  <div className={`w-3 h-3 rounded-full bg-${tag.color}`} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">{tag.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
