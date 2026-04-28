import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef } from 'react';

export default function FeaturedMenu() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const menuItems = [
    {
      id: 1,
      title: t.featured.gelato,
      desc: t.featured.gelatoDesc,
      img: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1200',
      colSpan: 'md:col-span-2 md:row-span-2',
      badge: 'Artisan Choice',
      accent: 'bg-nova-pistachio',
      parallax: -40
    },
    {
      id: 2,
      title: t.featured.waffles,
      desc: t.featured.wafflesDesc,
      img: 'https://images.pexels.com/photos/221068/pexels-photo-221068.jpeg?auto=compress&cs=tinysrgb&w=800',
      colSpan: 'md:col-span-1 md:row-span-1',
      badge: 'Freshly Baked',
      accent: 'bg-nova-pink',
      parallax: 20
    },
    {
      id: 3,
      title: t.featured.coffee,
      desc: t.featured.coffeeDesc,
      img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      colSpan: 'md:col-span-1 md:row-span-1',
      badge: 'Specialty Roast',
      accent: 'bg-nova-caramel',
      parallax: 60
    }
  ];

  return (
    <section id="menu" ref={containerRef} className="py-24 md:py-48 bg-transparent relative z-10 overflow-hidden">
      
      {/* Decorative Waffle Mesh Background Accent */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] opacity-[0.03] pointer-events-none -z-10 rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full text-nova-text">
          <pattern id="waffle" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#waffle)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-4 mb-8 text-nova-pink font-bold uppercase tracking-[0.6em] text-[10px]">
              <span className="w-16 h-[1px] bg-nova-pink"></span>
              {t.nav.menu}
            </div>
            <h2 className="text-6xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter">
              {t.featured.title1} <br/>
              <span className="italic text-nova-pink font-light pl-12 md:pl-32">{t.featured.title2}</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center md:items-end gap-6"
          >
            <p className="text-nova-text/50 text-xs font-bold uppercase tracking-widest text-center md:text-right max-w-[200px]">
              Crafted daily with seasonal ingredients from local farms.
            </p>
            <Link
              to="/menu"
              className="group relative flex items-center justify-center w-24 h-24 rounded-full bg-nova-text text-white hover:bg-nova-pink transition-all duration-700"
            >
              <span className="absolute text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -top-8 text-nova-text">View Menu</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-10 h-[1000px] md:h-[800px]">
          {menuItems.map((item, index) => {
            // Simple parallax effect for each card
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [0, 1], [0, item.parallax]);

            return (
              <motion.div
                key={item.id}
                style={{ y }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`${item.colSpan} relative group cursor-pointer`}
              >
                <div className="w-full h-full rounded-[80px] overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(45,30,23,0.15)] bg-white p-3">
                  <div className="w-full h-full rounded-[60px] overflow-hidden relative">
                    {/* Main Image with refined zoom */}
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-115"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Elegant Shadow Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-text/90 via-nova-text/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
                    
                    {/* Interactive Badges */}
                    <div className="absolute top-10 left-10 right-10 flex justify-between items-start z-30">
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white ${item.accent} shadow-2xl backdrop-blur-md`}
                      >
                        {item.badge}
                      </motion.span>
                      <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-nova-pink hover:border-transparent transition-all duration-500 transform group-hover:rotate-[360deg]">
                        <Heart className="w-5 h-5 group-hover:fill-current" />
                      </button>
                    </div>
                    
                    {/* Content Section */}
                    <div className="absolute bottom-12 left-12 right-12 z-30">
                      <div className="overflow-hidden mb-4">
                        <motion.h3 
                          className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-none"
                        >
                          {item.title}
                        </motion.h3>
                      </div>
                      <p className="text-white/60 text-sm md:text-lg font-light max-w-sm opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 delay-100 leading-relaxed italic">
                        {item.desc}
                      </p>
                      
                      <div className="mt-10 flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                        <span className="w-12 h-[1px] bg-white/40"></span>
                        Details
                      </div>
                    </div>

                    {/* Gloss Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
