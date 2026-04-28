import { useState, useEffect } from 'react';
import { Menu, Globe, X, ArrowRight, Instagram, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const menuLinks = [
    { name: t.nav.menu, href: '/menu' },
    { name: t.nav.story, href: '/#story' },
    { name: t.nav.visitUs, href: '/#locations' },
    { name: t.nav.orderNow, href: '#order' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] glass-panel border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          
          {/* Desktop Left Nav */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-nova-text/60">
            <Link to="/menu" className="hover:text-nova-pink transition-colors">{t.nav.menu}</Link>
            <a href="/#story" className="hover:text-nova-pink transition-colors">{t.nav.story}</a>
          </div>
          
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-tighter absolute left-1/2 -translate-x-1/2 text-nova-text">
            NOVA<span className="font-light italic text-nova-pink">LODZIARNIA</span>
          </Link>

          {/* Desktop Right Nav */}
          <div className="hidden md:flex items-center justify-end gap-8 relative">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-nova-pink transition-all"
            >
              <Globe className="w-3 h-3" /> {language.toUpperCase()}
            </button>
            <a href="#order" className="glass-pill px-6 py-2.5 rounded-full text-[10px] font-bold hover:bg-nova-pink hover:text-white transition-all uppercase tracking-[0.2em] shadow-sm border border-nova-text/10">
              {t.nav.orderNow}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4 ml-auto">
            <button 
              onClick={toggleMenu}
              className="p-2 glass-panel rounded-xl text-nova-text"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-nova-bg flex flex-col pt-32 px-10 pb-12 md:hidden"
          >
            {/* Background Grain/Noise */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex flex-col gap-8">
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href} 
                        className="text-5xl font-serif font-bold text-nova-text flex items-center group"
                      >
                        {link.name} <ArrowRight className="w-8 h-8 ml-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-nova-pink" />
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-5xl font-serif font-bold text-nova-text flex items-center group"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name} <ArrowRight className="w-8 h-8 ml-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-nova-pink" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between py-6 border-t border-nova-text/10"
                >
                  <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
                  >
                    <Globe className="w-5 h-5 text-nova-pink" />
                    <span>{language === 'en' ? 'Switch to Polish' : 'Zmień na Angielski'}</span>
                  </button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-6"
                >
                  <a href="#" className="p-4 glass-panel rounded-2xl text-nova-text hover:bg-nova-pink hover:text-white transition-all">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-4 glass-panel rounded-2xl text-nova-text hover:bg-nova-pink hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </a>
                  <div className="flex-1" />
                  <Link to="/" className="text-xl font-serif font-bold tracking-tighter text-nova-text opacity-40">
                    NOVA
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
