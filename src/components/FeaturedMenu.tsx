import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function FeaturedMenu() {
  const { t } = useLanguage();

  const menuItems = [
    {
      id: 1,
      title: t.featured.gelato,
      desc: t.featured.gelatoDesc,
      img: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1200',
      colSpan: 'md:col-span-2 md:row-span-2',
      badge: 'Bestseller',
      accent: 'bg-nova-pistachio'
    },
    {
      id: 2,
      title: t.featured.waffles,
      desc: t.featured.wafflesDesc,
      img: 'https://images.pexels.com/photos/221068/pexels-photo-221068.jpeg?auto=compress&cs=tinysrgb&w=800',
      colSpan: 'md:col-span-1 md:row-span-1',
      badge: 'Hot',
      accent: 'bg-nova-pink'
    },
    {
      id: 3,
      title: t.featured.coffee,
      desc: t.featured.coffeeDesc,
      img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      colSpan: 'md:col-span-1 md:row-span-1',
      badge: 'Artisan',
      accent: 'bg-nova-caramel'
    }
  ];

  return (
    <section id="menu" className="py-24 md:py-40 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6 text-nova-pink font-bold uppercase tracking-[0.4em] text-[10px]">
              <span className="w-10 h-[1px] bg-nova-pink"></span>
              {t.nav.menu}
            </div>
            <h2 className="text-5xl md:text-8xl font-serif leading-[0.9]">
              {t.featured.title1} <br/><span className="italic text-nova-pink font-light">{t.featured.title2}</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/menu"
              className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-nova-text bg-white/40 backdrop-blur-md border border-white/50 px-8 py-4 rounded-full hover:bg-nova-text hover:text-white transition-all duration-500"
            >
              {t.featured.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-[900px] md:h-[700px]">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.colSpan} relative group cursor-pointer`}
            >
              <div className="w-full h-full rounded-[60px] overflow-hidden relative shadow-2xl">
                {/* Main Image */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient - Refined */}
                <div className="absolute inset-0 bg-gradient-to-t from-nova-text/80 via-nova-text/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${item.accent} shadow-lg`}>
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-none">{item.title}</h3>
                    <p className="text-white/70 text-sm md:text-base font-light max-w-sm opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-nova-pink text-xs font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      Explore Flavors <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Glass Border Highlight */}
                <div className="absolute inset-0 border border-white/20 rounded-[60px] pointer-events-none group-hover:border-white/40 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
