import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { assets, SOCIAL_LINKS } from '../data/assets';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'glass-nav border-b border-border-main' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="w-11 h-11 rounded-full border-[1.5px] border-accent overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
            <img 
              src={assets.logo} 
              alt="Motor Wash Pham Hai" 
              className="w-full h-full object-cover scale-[1.4]" 
            />
          </div>
          <span className="font-heading font-bold text-xl tracking-wider text-text-main uppercase">
            Pham Hai Wash
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-text-muted hover:text-text-main text-sm font-medium tracking-wide uppercase transition-colors">Dịch Vụ</a>
          <a href="#pricing" className="text-text-muted hover:text-text-main text-sm font-medium tracking-wide uppercase transition-colors">Bảng Giá</a>
          <a href="#gallery" className="text-text-muted hover:text-text-main text-sm font-medium tracking-wide uppercase transition-colors">Hình Ảnh</a>
          <a href={`tel:${SOCIAL_LINKS.phone}`} className="bg-accent hover:bg-accent-hover text-text-main px-5 py-2.5 rounded-sm font-semibold tracking-wider text-sm transition-colors uppercase ml-2">
            Liên Hệ
          </a>
        </nav>
      </div>
    </header>
  );
}
