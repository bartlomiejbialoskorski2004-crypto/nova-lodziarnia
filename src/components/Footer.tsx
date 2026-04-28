import { Instagram, Mail, MapPin, Clock, Facebook, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Logo } from './ui/logo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-20 md:mt-40 overflow-hidden text-white">
      
      {/* 1. Newsletter Hero Section - Matches the top part of the reference photo */}
      <div className="relative h-[600px] md:h-[800px] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/nova_footer_bg_1777394658096.png" 
            alt="Artistic Gelato Landscape" 
            className="w-full h-full object-cover brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nova-bg/20 via-transparent to-nova-text/80 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-serif mb-12 tracking-tight"
          >
            Weekly News. <br />No Fluff.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-lg mx-auto"
          >
            <div className="flex items-center bg-white/5 backdrop-blur-2xl border border-white/20 rounded-full p-1.5 shadow-2xl transition-all focus-within:border-white/40 group">
              <input 
                type="email" 
                placeholder="Enter Your E-mail"
                className="bg-transparent border-none flex-1 px-8 py-3 text-sm focus:outline-none placeholder:text-white/40"
              />
              <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Glass Footer Overlay - Matches the bottom panel of the reference photo */}
      <div className="relative z-30 -mt-32 md:-mt-48 px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto bg-white/[0.03] backdrop-blur-[32px] border border-white/10 rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <Logo variant="light" className="scale-75 origin-left" />
                <span className="text-xl font-serif tracking-widest uppercase">Nova</span>
              </div>
              <p className="text-white/50 text-sm max-w-xs leading-relaxed font-light">
                Nova brings high quality handcrafted gelato and artisanal coffee to the heart of the city – sweet moments for everyone.
              </p>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
                <ul className="space-y-4 text-white/40 text-xs font-light">
                  <li><a href="#" className="hover:text-white transition-colors">Menu & Flavors</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Seasonal Specials</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-6">About</h4>
                <ul className="space-y-4 text-white/40 text-xs font-light">
                  <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Meet the Team</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Artisanship</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="hidden md:block">
                <h4 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
                <ul className="space-y-4 text-white/40 text-xs font-light">
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Report an Issue</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/30 text-[10px] uppercase tracking-widest font-light">
              Designed by Nova Creative Studio
            </div>
            
            <div className="flex items-center gap-8">
              <span className="text-white/30 text-[10px] uppercase tracking-widest font-light hidden sm:inline">Our Story Continues:</span>
              <div className="flex gap-5 text-white/40">
                <a href="#" className="hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white transition-all"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
