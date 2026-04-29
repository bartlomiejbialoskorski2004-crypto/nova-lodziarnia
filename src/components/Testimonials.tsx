import { motion } from "motion/react";
import { TestimonialsColumn, Testimonial } from "./ui/testimonials-columns-1";
import { useLanguage } from "../contexts/LanguageContext";

const testimonials: Testimonial[] = [
  {
    text: "The Sicilian Pistachio is literally the best I've ever had outside of Italy. Absolute perfection.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    name: "Maja Wiśniewska",
    role: "Local Foodie",
  },
  {
    text: "I come here every weekend for the waffles. The Wild Berry Dream is actually a dream.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    name: "Jakub Kowalski",
    role: "Regular Guest",
  },
  {
    text: "The interior design is just as sweet as the gelato. A perfect spot for photos and dessert.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    name: "Elena Rossi",
    role: "Interior Designer",
  },
  {
    text: "Finally a place that takes specialty coffee seriously alongside their desserts. Love the V60 here.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    name: "Adam Nowak",
    role: "Coffee Enthusiast",
  },
  {
    text: "Tried the Rose Water seasonal scoop today. Incredible depth of flavor. Can't wait for next month!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    name: "Zofia Lewandowska",
    role: "Student",
  },
  {
    text: "The riverside kiosk is my favorite stop during my evening runs. Fast service and great quality.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    name: "Tomasz Zieliński",
    role: "Athlete",
  },
  {
    text: "Nova is our go-to place for birthday treats. The Basque Cheesecake is legendary.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop",
    name: "Kasia Mazur",
    role: "Teacher",
  },
  {
    text: "High quality ingredients and zero shortcuts. You can really taste the difference here.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    name: "Piotr Wójcik",
    role: "Chef",
  },
  {
    text: "The staff is so friendly even when it's super busy. Always leave with a smile.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    name: "Anna Smyk",
    role: "Artist",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-pill rounded-full text-nova-text mb-6">
            <span className="w-2 h-2 rounded-full bg-nova-pistachio animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase">{t.testimonials.badge}</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            {t.testimonials.title1} <br/><span className="italic text-nova-pink font-light">{t.testimonials.title2}</span>
          </h2>
          <p className="mt-8 text-lg text-nova-text/60 max-w-lg font-light">
            {t.testimonials.desc}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
}
