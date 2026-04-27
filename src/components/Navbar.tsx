import { Menu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-widest uppercase text-nova-text/80">
          <Link to="/menu" className="hover:text-nova-pink transition-colors">{t.nav.menu}</Link>
          <a href="/#story" className="hover:text-nova-pink transition-colors">{t.nav.story}</a>
        </div>
        
        <Link to="/" className="text-2xl font-serif font-semibold tracking-tight absolute left-1/2 -translate-x-1/2 text-[#6D4C41]">
          NOVA<span className="font-light italic">LODZIARNIA</span>
        </Link>

        <div className="hidden md:flex items-center justify-end gap-6 relative">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold hover:text-nova-pink transition-all"
          >
            <Globe className="w-3 h-3" /> {language.toUpperCase()}
          </button>
          <a href="/#locations" className="text-sm font-medium tracking-widest uppercase text-nova-text/80 hover:text-nova-pink transition-colors">{t.nav.visitUs}</a>
          <a href="#order" className="glass-pill px-6 py-2 rounded-full text-xs font-bold hover:bg-white/60 transition-all uppercase tracking-widest shadow-sm">
            {t.nav.orderNow}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleLanguage} className="font-bold text-xs uppercase"><Globe className="w-4 h-4" /></button>
          <button>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
