import { motion } from "motion/react";
import { TestimonialsColumn, Testimonial } from "./ui/testimonials-columns-1";
import { useLanguage } from "../contexts/LanguageContext";

export default function Testimonials() {
  const { t, language } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      text: language === 'en' 
        ? "The Sicilian Pistachio is literally the best I've ever had outside of Italy. Absolute perfection."
        : "Sycylijska Pistacja to dosłownie najlepsze lody, jakie jadłam poza Włochami. Absolutna perfekcja.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      name: "Maja Wiśniewska",
      role: language === 'en' ? "Local Foodie" : "Lokalna Smakoszka",
    },
    {
      text: language === 'en'
        ? "I come here every weekend for the waffles. The Wild Berry Dream is actually a dream."
        : "Przychodzę tu w każdy weekend na gofry. Leśny Sen to faktycznie spełnienie marzeń.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      name: "Jakub Kowalski",
      role: language === 'en' ? "Regular Guest" : "Stały Gość",
    },
    {
      text: language === 'en'
        ? "The interior design is just as sweet as the gelato. A perfect spot for photos and dessert."
        : "Wystrój wnętrza jest tak samo słodki jak lody. Idealne miejsce na zdjęcia i deser.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      name: "Elena Rossi",
      role: language === 'en' ? "Interior Designer" : "Projektantka Wnętrz",
    },
    {
      text: language === 'en'
        ? "Finally a place that takes specialty coffee seriously alongside their desserts. Love the V60 here."
        : "W końcu miejsce, które traktuje kawę specialty poważnie obok deserów. Uwielbiam tutejsze V60.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      name: "Adam Nowak",
      role: language === 'en' ? "Coffee Enthusiast" : "Miłośnik Kawy",
    },
    {
      text: language === 'en'
        ? "Tried the Rose Water seasonal scoop today. Incredible depth of flavor. Can't wait for next month!"
        : "Próbowałam dziś sezonowej gałki Woda Różana. Niesamowita głębia smaku. Nie mogę się doczekać przyszłego miesiąca!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      name: "Zofia Lewandowska",
      role: language === 'en' ? "Student" : "Studentka",
    },
    {
      text: language === 'en'
        ? "The riverside kiosk is my favorite stop during my evening runs. Fast service and great quality."
        : "Kiosk przy rzece to mój ulubiony przystanek podczas wieczornych biegów. Szybka obsługa i świetna jakość.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      name: "Tomasz Zieliński",
      role: language === 'en' ? "Athlete" : "Sportowiec",
    },
    {
      text: language === 'en'
        ? "Nova is our go-to place for birthday treats. The Basque Cheesecake is legendary."
        : "Nova to nasze stałe miejsce na urodzinowe słodkości. Sernik Baskijski jest legendarny.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop",
      name: "Kasia Mazur",
      role: language === 'en' ? "Teacher" : "Nauczycielka",
    },
    {
      text: language === 'en'
        ? "High quality ingredients and zero shortcuts. You can really taste the difference here."
        : "Wysokiej jakości składniki i zero dróg na skróty. Tutaj naprawdę czuć różnicę.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
      name: "Piotr Wójcik",
      role: language === 'en' ? "Chef" : "Szef Kuchni",
    },
    {
      text: language === 'en'
        ? "The staff is so friendly even when it's super busy. Always leave with a smile."
        : "Obsługa jest tak miła, nawet gdy jest bardzo tłoczno. Zawsze wychodzę z uśmiechem.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      name: "Anna Smyk",
      role: language === 'en' ? "Artist" : "Artystka",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

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
