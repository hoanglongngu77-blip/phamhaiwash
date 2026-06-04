import { motion } from 'motion/react';
import React from 'react';
import { assets } from '../data/assets';

const showcases = [
  {
    title: 'Honda SH – Hoàn Thiện',
    price: 'Combo Chăm Sóc Toàn Xe · 159K',
    img: assets.heroBg
  },
  {
    title: 'Honda Vario – Sau Dưỡng Bóng',
    price: 'Combo Sạch – Bóng – Dưỡng · 69K',
    img: assets.gallery[6].src
  },
  {
    title: 'Rửa Xe + Vệ Sinh Sên',
    price: 'Combo Sên Sạch Chạy Êm · 79K',
    img: assets.gallery[7].src
  },
  {
    title: 'Chăm Sóc Xe Chuyên Sâu',
    price: 'Combo Rửa & Dưỡng Toàn Diện · 179K',
    img: assets.gallery[2].src
  }
];

export default function Showcase() {
  return (
    <section className="bg-bg-primary relative z-10 pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase mb-3">Kết Quả Thực Tế</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">Xe Của Khách<br/>Hàng Chúng Tôi</h2>
          <p className="text-text-muted text-base max-w-lg leading-relaxed">
            Khác biệt nằm ở từng chi tiết. Mỗi chiếc xe rời đây đều được chăm sóc như người thân.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1">
        {showcases.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative aspect-video group overflow-hidden cursor-pointer bg-bg-card"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover filter brightness-[0.8] saturate-90 group-hover:brightness-105 group-hover:saturate-105 group-hover:scale-105 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent flex flex-col justify-end p-8 sm:p-12 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-heading font-bold text-2xl md:text-3xl tracking-wide mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
              <p className="text-accent font-semibold text-sm tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
