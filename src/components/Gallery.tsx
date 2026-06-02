import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { assets } from '../data/assets';

const categories = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'rua-xe', label: 'Rửa Xe' },
  { id: 've-sinh-sen', label: 'Vệ Sinh Sên' },
  { id: 'thay-nhot', label: 'Thay Nhớt' },
  { id: 'hoan-thien', label: 'Hoàn Thiện' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = activeTab === 'all' 
    ? assets.gallery 
    : assets.gallery.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-bg-secondary border-y border-border-main relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase mb-3">Gallery</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">Hình Ảnh<br/>Thực Tế</h2>
          <p className="text-text-muted text-base max-w-lg leading-relaxed mb-10">
            Tất cả hình ảnh từ công việc thực tế tại Motor Wash Pham Hai. Không sử dụng hình ảnh minh họa trên mạng.
          </p>

          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-sm text-xs font-medium tracking-[0.08em] uppercase transition-colors border ${
                  activeTab === cat.id 
                    ? 'bg-accent-dim border-border-accent text-text-main' 
                    : 'bg-transparent border-border-main text-text-muted hover:bg-border-main hover:text-text-main'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-[3px]">
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.src + idx}
                className={`relative overflow-hidden group cursor-pointer bg-bg-card ${
                  idx === 3 && activeTab === 'all' ? 'col-span-2 md:col-span-1 aspect-video md:aspect-[3/4]' : 'aspect-square md:aspect-[3/4]'
                }`}
              >
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="w-full h-full object-cover filter brightness-90 saturate-90 transition-all duration-500 group-hover:brightness-105 group-hover:saturate-110 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-heading font-bold text-lg tracking-wide text-text-main translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
