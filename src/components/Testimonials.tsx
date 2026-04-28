import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The Sicilian Pistachio is literally the best I've ever had outside of Italy. Absolute perfection.",
    name: "Maja Wiśniewska",
    role: "Local Foodie",
    color: "bg-nova-pistachio/5",
    accent: "text-nova-pistachio",
    rotation: -2,
    x: "-10%",
    y: "0"
  },
  {
    text: "I come here every weekend for the waffles. The Wild Berry Dream is actually a dream.",
    name: "Jakub Kowalski",
    role: "Regular Guest",
    color: "bg-nova-pink/5",
    accent: "text-nova-pink",
    rotation: 3,
    x: "20%",
    y: "40px"
  },
  {
    text: "The interior design is just as sweet as the gelato. A perfect spot for photos and dessert.",
    name: "Elena Rossi",
    role: "Interior Designer",
    color: "bg-nova-caramel/5",
    accent: "text-nova-caramel",
    rotation: -4,
    x: "-15%",
    y: "80px"
  },
  {
    text: "Finally a place that takes specialty coffee seriously alongside their desserts. Love the V60 here.",
    name: "Adam Nowak",
    role: "Coffee Enthusiast",
    color: "bg-nova-text/5",
    accent: "text-nova-text",
    rotation: 2,
    x: "10%",
    y: "120px"
  }
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-32 md:py-48 bg-transparent relative overflow-hidden z-10">
      
      {/* Background Large Text Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] whitespace-nowrap z-0">
        <span className="text-[25vw] font-serif font-black italic tracking-tighter">VOICES</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 md:mb-40 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 mb-6 text-nova-pink font-bold uppercase tracking-[0.4em] text-[10px]">
              <span className="w-10 h-[1px] bg-nova-pink"></span>
              {t.social.tag || "Community"}
            </div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9]">
              Loved by <br/><span className="italic text-nova-pink font-light">Thousands.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-right"
          >
            <p className="text-nova-text/60 text-lg max-w-xs font-light leading-relaxed">
              Real stories from our artisan gelato community in the heart of the city.
            </p>
          </motion.div>
        </div>

        {/* The "Postcard" Collage Layout */}
        <div className="relative h-[800px] md:h-[600px] flex items-center justify-center">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                y: item.y, 
                x: item.x, 
                rotate: item.rotation 
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: i * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 50,
                transition: { duration: 0.4 } 
              }}
              className={`absolute w-full max-w-[320px] md:max-w-[380px] p-8 md:p-10 rounded-[40px] shadow-2xl ${item.color} border border-white/40 backdrop-blur-md cursor-pointer group`}
            >
              <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote className={`w-8 h-8 ${item.accent}`} />
              </div>
              
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-nova-text mb-8">
                "{item.text}"
              </p>
              
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-widest uppercase text-nova-text/40 mb-1">{item.role}</span>
                <span className="text-lg font-serif italic text-nova-text">{item.name}</span>
              </div>
              
              {/* Decorative "Stamp" */}
              <div className="absolute bottom-6 right-8 w-10 h-10 rounded-full border-2 border-dashed border-nova-text/10 flex items-center justify-center text-[8px] font-bold text-nova-text/20 rotate-12 group-hover:rotate-0 transition-transform">
                NOVA
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
