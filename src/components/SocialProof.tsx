import { motion } from 'motion/react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const igImages = [
  {
    src: 'https://images.pexels.com/photos/2611867/pexels-photo-2611867.jpeg?auto=compress&cs=tinysrgb&w=800',
    rotation: -3,
    size: 'col-span-2 row-span-2',
    delay: 0.1
  },
  {
    src: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    rotation: 5,
    size: 'col-span-1 row-span-1',
    delay: 0.2
  },
  {
    src: 'https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=800',
    rotation: -2,
    size: 'col-span-1 row-span-1',
    delay: 0.3
  },
  {
    src: 'https://images.pexels.com/photos/2504911/pexels-photo-2504911.jpeg?auto=compress&cs=tinysrgb&w=800',
    rotation: 4,
    size: 'col-span-1 row-span-1',
    delay: 0.4
  }
];

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-40 bg-transparent relative z-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 mb-8 text-nova-pink font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              <span className="w-10 h-[1px] bg-nova-pink"></span>
              {t.social.tag}
            </motion.div>

            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8"
            >
              {t.social.title1} <br />
              <span className="italic text-nova-pink font-light">{t.social.title2}</span>
            </motion.h2>

            <p className="text-nova-text/60 text-lg max-w-md font-light leading-relaxed mb-10">
              Join our community and share your #NovaMoments. We feature the best shots every week on our main feed.
            </p>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-nova-text text-white flex items-center justify-center group-hover:bg-nova-pink transition-all duration-500 transform group-hover:rotate-12">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-nova-text/40">Follow us</span>
                <span className="text-xl font-serif flex items-center gap-2">@nova_lodziarnia <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></span>
              </div>
            </a>
          </div>

          {/* Artistic Collage Grid */}
          <div className="grid grid-cols-2 grid-rows-3 gap-6 h-[600px] md:h-[700px] relative">
            {igImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: img.rotation }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: img.delay, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                className={`${img.size} relative cursor-pointer group`}
              >
                <div className="w-full h-full glass-panel rounded-[40px] p-2 shadow-2xl transition-all duration-500 group-hover:shadow-nova-pink/20">
                   <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                      <img 
                        src={img.src} 
                        alt={`Instagram Post ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-nova-text/0 group-hover:bg-nova-text/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-12 h-12 rounded-full bg-white text-nova-text flex items-center justify-center">
                          <Instagram className="w-5 h-5" />
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-nova-pink/5 rounded-full blur-[100px]" />
          </div>
        </div>

      </div>
    </section>
  );
}
