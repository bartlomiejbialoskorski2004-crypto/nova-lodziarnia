import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const igImages = [
  'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800'
];

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center justify-center gap-2 mb-6 text-nova-pink bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/50 shadow-sm"
        >
          <Instagram className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{t.social.tag}</span>
        </motion.div>

        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="text-4xl md:text-5xl lg:text-6xl font-serif mb-16"
        >
          {t.social.title1} <span className="italic text-nova-caramel">{t.social.title2}</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {igImages.map((src, idx) => (
            <motion.a
              key={idx}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-square glass-panel rounded-[30px] p-2 block"
            >
              <div className="w-full h-full rounded-[20px] overflow-hidden relative">
                <img 
                  src={src} 
                  alt={`Instagram Photo ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[0.16,1,0.3,1]" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 drop-shadow-md" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
