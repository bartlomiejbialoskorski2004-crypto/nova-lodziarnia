import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
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
      color: 'bg-nova-pistachio/20'
    },
    {
      id: 2,
      title: t.featured.waffles,
      desc: t.featured.wafflesDesc,
      img: 'https://images.pexels.com/photos/221068/pexels-photo-221068.jpeg?auto=compress&cs=tinysrgb&w=800',
      colSpan: 'md:col-span-1 md:row-span-1',
      color: 'bg-nova-berry/20'
    },
    {
      id: 3,
      title: t.featured.coffee,
      desc: t.featured.coffeeDesc,
      img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      colSpan: 'md:col-span-1 md:row-span-1',
      color: 'bg-nova-caramel/20'
    }
  ];

  return (
    <section id="menu" className="py-24 md:py-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              {t.featured.title1} <br/><span className="italic text-nova-pistachio">{t.featured.title2}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/menu"
              className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-nova-pink transition-colors"
            >
              {t.featured.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-[40px] glass-panel p-2 ${item.colSpan} cursor-pointer shadow-lg`}
            >
              <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                <div className={`absolute inset-0 mix-blend-multiply opacity-20 ${item.color} z-10 pointer-events-none`}></div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3933]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
  
                <div className="absolute bottom-0 left-0 p-8 text-nova-bg z-20">
                  <h3 className="text-2xl md:text-3xl font-serif mb-2 text-white drop-shadow-md">{item.title}</h3>
                  <p className="font-light text-white/90 drop-shadow-md opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
