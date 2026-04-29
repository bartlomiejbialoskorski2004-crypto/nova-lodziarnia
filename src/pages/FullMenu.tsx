import { motion } from 'motion/react';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function FullMenu() {
  const { t } = useLanguage();

  const categories = [
    {
      name: t.fullMenu.categories.gelato,
      items: [
        { name: t.fullMenu.items.gelatoPistachio, price: '8' },
        { name: t.fullMenu.items.gelatoValrhona, price: '8' },
        { name: t.fullMenu.items.gelatoStrawberry, price: '7' },
        { name: t.fullMenu.items.gelatoMango, price: '7' },
      ]
    },
    {
      name: t.fullMenu.categories.waffles,
      items: [
        { name: t.fullMenu.items.waffleClassic, price: '12' },
        { name: t.fullMenu.items.waffleBerry, price: '15' },
        { name: t.fullMenu.items.waffleCaramel, price: '14' },
      ]
    },
    {
      name: t.fullMenu.categories.cakes,
      items: [
        { name: t.fullMenu.items.cakeCheesecake, price: '9' },
        { name: t.fullMenu.items.cakeTart, price: '8' },
      ]
    },
    {
      name: t.fullMenu.categories.coffee,
      items: [
        { name: t.fullMenu.items.coffeeEspresso, price: '4' },
        { name: t.fullMenu.items.coffeeLatte, price: '6' },
        { name: t.fullMenu.items.coffeeMatcha, price: '7' },
      ]
    }
  ];

  return (
    <>
      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-serif text-[#2D2421] mb-6 tracking-tight">
            {t.fullMenu.title}
          </h1>
          <p className="text-[#5D4E48] text-lg font-light max-w-md mx-auto">
            {t.fullMenu.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="glass-panel p-8 rounded-[40px] shadow-xl"
            >
              <h2 className="text-3xl font-serif text-[#2D2421] mb-8 relative inline-block">
                {cat.name}
                <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-nova-pink/50"></div>
              </h2>
              
              <ul className="space-y-6">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex justify-between items-end border-b border-[#4A3933]/10 pb-2">
                    <span className="text-[#4A3933] font-medium text-lg">{item.name}</span>
                    <span className="text-[#5D4E48] font-light">{item.price} PLN</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
