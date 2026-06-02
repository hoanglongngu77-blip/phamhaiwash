import { motion } from 'motion/react';
import React from 'react';
import { assets, SOCIAL_LINKS } from '../data/assets';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background with slow zoom effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${assets.heroBg}')`, backgroundPosition: 'center 30%' }}
        />
      </motion.div>

      {/* Overlays for dark premium feel */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-bg-primary/95 via-bg-primary/80 to-bg-primary/30" />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-0 bg-gradient-to-t from-bg-primary to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-border-accent bg-accent-dim text-accent font-semibold text-xs tracking-[0.12em] uppercase px-4 py-1.5 rounded-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Premium Detailing Studio · Biên Hoà
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tight mb-4"
          >
            MOTOR<br />
            <span className="text-accent">WASH</span><br />
            PHAM HAI
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-heading text-xl md:text-3xl text-text-muted tracking-wide mb-5">
              Chăm Sóc Xe Chuyên Nghiệp
            </p>
            <p className="text-lg text-text-muted italic border-l-2 border-accent pl-4 mb-10 leading-relaxed font-light">
              "Yêu xe bạn như cách bạn yêu vợ bạn"
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a href="#pricing" className="bg-accent hover:bg-accent-hover text-text-main px-8 py-3.5 font-semibold text-sm tracking-widest uppercase rounded-sm transition-all hover:-translate-y-0.5">
              Xem Bảng Giá
            </a>
            <a href={`tel:${SOCIAL_LINKS.phone}`} className="bg-transparent border border-white/25 hover:border-accent hover:bg-accent-dim text-text-main px-8 py-3.5 font-semibold text-sm tracking-widest uppercase rounded-sm transition-all">
              Liên Hệ Ngay
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-10"
          >
            <div className="flex flex-col">
              <span className="font-heading text-4xl text-text-main leading-none mb-1">100<span className="text-accent">%</span></span>
              <span className="text-xs text-text-muted uppercase tracking-[0.08em]">Tận Tâm</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-4xl text-text-main leading-none mb-1">6<span className="text-accent">+</span></span>
              <span className="text-xs text-text-muted uppercase tracking-[0.08em]">Dịch Vụ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-4xl text-text-main leading-none mb-1">14:30<span className="text-accent">–</span>17:30</span>
              <span className="text-xs text-text-muted uppercase tracking-[0.08em]">Hàng Tuần</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
