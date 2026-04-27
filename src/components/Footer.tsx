import { ArrowRight, MapPin, Mail, Instagram, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-10 z-10 mx-4 md:mx-12 mb-4">
      <div className="glass-panel bg-white/40 pt-20 pb-10 rounded-[40px] md:rounded-[60px] text-[#4A3933] shadow-lg border border-white/60">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
        
        {/* Top CTA */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 border-b border-[#4A3933]/10 pb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-[#2D2421]">
              {t.footer.title1} <br/><span className="italic text-pink-500 font-light">{t.footer.title2}</span>
            </h2>
            <p className="text-[#5D4E48] text-lg mb-8 max-w-sm">
              {t.footer.desc}
            </p>
            <form className="relative max-w-sm">
              <input 
                type="email" 
                placeholder={t.footer.emailPlaceholder}
                className="w-full bg-white/50 backdrop-blur-sm border border-white/60 py-3 px-4 pr-12 rounded-full focus:outline-none focus:bg-white/70 transition-colors shadow-inner"
                required
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#4A3933] rounded-full flex items-center justify-center text-white hover:bg-[#4A3933]/80 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h4 className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-6 text-pink-500">
                <MapPin className="w-4 h-4" /> {t.footer.locations}
              </h4>
              <ul className="space-y-4 text-[#5D4E48] font-light">
                <li>
                  <p className="font-semibold text-[#4A3933] mb-1">{t.footer.downtown}</p>
                  <p>123 Sweet Street</p>
                  <p>City Center, 00-123</p>
                </li>
                <li className="pt-2">
                  <p className="font-semibold text-[#4A3933] mb-1">{t.footer.kiosk}</p>
                  <p>45 River Walk</p>
                  <p>Riverside, 00-456</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-6 text-blue-400">
                <Clock className="w-4 h-4" /> {t.footer.hours}
              </h4>
              <ul className="space-y-4 text-[#5D4E48] font-light">
                <li>
                  <p className="font-semibold text-[#4A3933] mb-1">Mon - Thu</p>
                  <p>10:00 AM - 9:00 PM</p>
                </li>
                <li className="pt-2">
                  <p className="font-semibold text-[#4A3933] mb-1">Fri - Sun</p>
                  <p>9:00 AM - 10:30 PM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-[#4A3933]/60">
          <p>{t.footer.rights.replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex items-center gap-6 text-[#4A3933]">
            <a href="#" className="hover:text-pink-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-pink-500 transition-colors">TikTok</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Facebook</a>
          </div>
        </div>

      </div>
      </div>
    </footer>
  );
}
