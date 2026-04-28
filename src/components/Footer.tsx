import { ArrowRight, MapPin, Mail, Instagram, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LocationMap } from './ui/expand-map';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-10 z-10 mx-4 md:mx-12 mb-4">
      <div className="glass-panel bg-white/40 pt-20 pb-10 rounded-[40px] md:rounded-[60px] text-nova-text shadow-lg border border-white/60">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
        
        {/* Top CTA */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 border-b border-nova-text/10 pb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-nova-text">
              {t.footer.title1} <br/><span className="italic text-nova-pink font-light">{t.footer.title2}</span>
            </h2>
            <p className="text-nova-text/70 text-lg mb-8 max-w-sm">
              {t.footer.desc}
            </p>
            <form className="relative max-w-sm">
              <input 
                type="email" 
                placeholder={t.footer.emailPlaceholder}
                className="w-full bg-white/50 backdrop-blur-sm border border-white/60 py-3 px-4 pr-12 rounded-full focus:outline-none focus:bg-white/70 transition-colors shadow-inner"
                required
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-nova-text rounded-full flex items-center justify-center text-white hover:bg-nova-pink transition-colors cursor-pointer">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h4 className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-8 text-nova-pink">
                <MapPin className="w-4 h-4" /> {t.footer.locations}
              </h4>
              
              <div className="space-y-12">
                <LocationMap 
                  location={t.footer.downtown} 
                  coordinates="50.0515° N, 19.9449° E"
                />
              </div>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-8 text-nova-pistachio">
                <Clock className="w-4 h-4" /> {t.footer.hours}
              </h4>
              <ul className="space-y-6 text-nova-text/70 font-light">
                <li>
                  <p className="font-serif font-bold text-nova-text mb-1 uppercase text-[10px] tracking-widest">Mon - Thu</p>
                  <p className="text-sm">10:00 AM - 9:00 PM</p>
                </li>
                <li>
                  <p className="font-serif font-bold text-nova-text mb-1 uppercase text-[10px] tracking-widest">Fri - Sun</p>
                  <p className="text-sm">9:00 AM - 10:30 PM</p>
                </li>
              </ul>

              <div className="mt-12 pt-12 border-t border-nova-text/10">
                 <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-nova-caramel">Follow Us</h4>
                 <div className="flex gap-4">
                    <a href="#" className="p-2 glass-pill rounded-full hover:bg-nova-pink hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                    <a href="#" className="p-2 glass-pill rounded-full hover:bg-nova-pink hover:text-white transition-all"><Mail className="w-4 h-4" /></a>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-nova-text/60">
          <p>{t.footer.rights.replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex items-center gap-6 text-nova-text">
            <a href="#" className="hover:text-nova-pink transition-colors">Instagram</a>
            <a href="#" className="hover:text-nova-pink transition-colors">TikTok</a>
            <a href="#" className="hover:text-nova-pink transition-colors">Facebook</a>
          </div>
        </div>

      </div>
      </div>
    </footer>
  );
}
