import { useState, useEffect } from 'react';
import { Menu, Globe, X, ArrowRight, Instagram, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { FlowButton } from './ui/flow-button';
import { Logo } from './ui/logo';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 25, restDelta: 0.001 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Transformation ranges - Always a pill, never a flat rectangle
  const navWidth = useTransform(smoothScrollY, [0, 100], [isMobile ? "94%" : "96%", isMobile ? "92%" : "85%"]);
  const navTop = useTransform(smoothScrollY, [0, 100], [isMobile ? 12 : 16, isMobile ? 12 : 24]);
  const navRadius = 100; // Constant pill shape
  const navPaddingY = useTransform(smoothScrollY, [0, 100], [isMobile ? 16 : 20, isMobile ? 10 : 10]);
  const navPaddingX = useTransform(smoothScrollY, [0, 100], [isMobile ? 24 : 40, isMobile ? 16 : 32]);
  
  const navBg = useTransform(smoothScrollY, [0, 100], ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.85)"]);
  const navBorder = useTransform(smoothScrollY, [0, 100], ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.5)"]);
  
  // Logo movement and scale
  const logoX = useTransform(smoothScrollY, [0, 100], [isMobile ? "calc(50vw - 50% - 24px)" : "0px", "0px"]);
  const logoScale = useTransform(smoothScrollY, [0, 100], [isMobile ? 1.2 : 1, isMobile ? 0.7 : 0.75]);
  const sideGap = useTransform(smoothScrollY, [0, 100], [40, 24]);
  const navShadow = useTransform(smoothScrollY, [0, 100], ["0 0px 0px rgba(0,0,0,0)", "0 20px 40px -15px rgba(0,0,0,0.1)"]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
        <motion.nav 
          style={{
            width: navWidth,
            maxWidth: isMobile ? "440px" : "1100px",
            top: navTop,
            borderRadius: navRadius,
            backgroundColor: navBg,
            borderColor: navBorder,
            paddingTop: navPaddingY,
            paddingBottom: navPaddingY,
            paddingLeft: navPaddingX,
            paddingRight: navPaddingX,
            boxShadow: navShadow,
            borderWidth: 1,
            backdropFilter: "blur(12px)",
          }}
          className="pointer-events-auto flex items-center justify-between relative overflow-hidden"
        >
          {/* Left Spacer (Desktop Only) */}
          {!isMobile && (
            <motion.div 
              style={{ gap: sideGap }}
              className="hidden md:flex flex-1 items-center text-[10px] font-bold tracking-[0.2em] uppercase text-nova-text/60"
            >
              <Link to="/menu" className="relative py-1 hover:text-nova-text transition-colors group whitespace-nowrap">
                {t.nav.menu}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
              </Link>
              <a href="/#story" className="relative py-1 hover:text-nova-text transition-colors group whitespace-nowrap">
                {t.nav.story}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.div>
          )}
          
          {/* Logo - Smoothly animated X translation */}
          <Link to="/" className="flex flex-shrink-0 items-center justify-center z-10">
            <motion.div style={{ x: logoX, scale: logoScale }} className="origin-left">
              <Logo />
            </motion.div>
          </Link>

          {/* Right Spacer (Mobile & Desktop) */}
          {isMobile ? (
            <div className="flex flex-1 items-center justify-end">
              <button 
                onClick={toggleMenu}
                className="p-2 text-nova-text hover:text-nova-pink transition-colors"
                aria-label={language === 'en' ? 'Toggle Menu' : 'Otwórz Menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          ) : (
            <motion.div 
              style={{ gap: sideGap }}
              className="hidden md:flex flex-1 items-center justify-end relative"
            >
              <button 
                onClick={toggleLanguage}
                className="relative py-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-nova-text/60 hover:text-nova-text transition-all group whitespace-nowrap"
              >
                <Globe className="w-3 h-3" /> {language.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
              </button>
              <FlowButton 
                as="a"
                href="#order"
                text={t.nav.orderNow}
                className="scale-75 origin-right"
              />
            </motion.div>
          )}

        </motion.nav>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-nova-bg flex flex-col pt-32 px-10 pb-12 md:hidden overflow-y-auto"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Close Button Overlay */}
            <div className="absolute top-8 right-8 z-20">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-nova-text hover:text-nova-pink transition-colors"
                aria-label={language === 'en' ? 'Close Menu' : 'Zamknij Menu'}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col h-full justify-between relative z-10 min-h-[500px]">
              <div className="flex flex-col gap-8">
                {menuLinks.map((link, i) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 + 0.2 }}>
                    <a href={link.href} className="text-4xl xs:text-5xl font-serif font-bold text-nova-text flex items-center group flex-wrap" onClick={() => setIsOpen(false)}>
                      {link.name} <ArrowRight className="w-6 h-6 xs:w-8 xs:h-8 ml-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-nova-pink" />
                    </a>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col gap-8 mt-12">
                <div className="flex items-center justify-between py-6 border-t border-nova-text/10">
                  <button onClick={toggleLanguage} className="relative py-1 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group">
                    <Globe className="w-5 h-5 text-nova-pink" />
                    <span>{language === 'en' ? 'Switch to Polish' : 'Zmień na angielski'}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
                  </button>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="relative p-2 text-nova-text hover:text-nova-pink transition-all group">
                    <Instagram className="w-6 h-6" /><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
                  </a>
                  <a href="#" className="relative p-2 text-nova-text hover:text-nova-pink transition-all group">
                    <Mail className="w-6 h-6" /><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nova-pink transition-all duration-300 group-hover:w-full" />
                  </a>
                  <div className="flex-1" />
                  <Logo className="scale-75 origin-right opacity-40" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
