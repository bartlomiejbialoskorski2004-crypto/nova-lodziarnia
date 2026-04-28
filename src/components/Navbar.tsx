import { useState, useEffect } from 'react';
import { Menu, Globe, X, ArrowRight, Instagram, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { FlowButton } from './ui/flow-button';
import { Logo } from './ui/logo';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
          isScrolled 
            ? "bg-white/40 backdrop-blur-md border-b border-white/20 py-4 shadow-sm" 
            : "bg-transparent py-8 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Desktop Left Nav */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-nova-text/60">
            <Link to="/menu" className="relative py-1 hover:text-nova-text transition-colors group">
              {t.nav.menu}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
            </Link>
            <a href="/#story" className="relative py-1 hover:text-nova-text transition-colors group">
              {t.nav.story}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
          
          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <Logo className={cn("transition-transform duration-500", isScrolled ? "scale-90" : "scale-100")} />
          </Link>

          {/* Desktop Right Nav */}
          <div className="hidden md:flex items-center justify-end gap-10 relative">
            <button 
              onClick={toggleLanguage}
              className="relative py-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-nova-text/60 hover:text-nova-text transition-all group"
            >
              <Globe className="w-3 h-3" /> {language.toUpperCase()}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
            </button>
            <FlowButton 
              as="a"
              href="#order"
              text={t.nav.orderNow}
              className="scale-90"
            />
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4 ml-auto">
            <button 
              onClick={toggleMenu}
              className="p-2 text-nova-text"
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
                    className="relative py-1 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group"
                  >
                    <Globe className="w-5 h-5 text-nova-pink" />
                    <span>{language === 'en' ? 'Switch to Polish' : 'Zmień na Angielski'}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
                  </button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-6"
                >
                  <a href="#" className="relative p-2 text-nova-text hover:text-nova-pink transition-all group">
                    <Instagram className="w-6 h-6" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
                  </a>
                  <a href="#" className="relative p-2 text-nova-text hover:text-nova-pink transition-all group">
                    <Mail className="w-6 h-6" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
                  </a>
                  <div className="flex-1" />
                  <Link to="/" className="opacity-40">
                    <Logo className="scale-75 origin-right" />
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
