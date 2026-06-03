import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { assets } from '../data/assets';

// Dummy paths assuming there are these images. We use existing images to mock it up, or if user uploads.
const pairs = [
  {
    title: 'Vệ Sinh Sên & Lốc Máy',
    before: '/before-chain.jpg',
    after: '/service-chain-clean-01.jpg.jpg',
  },
  {
    title: 'Phục Hồi Dàn Nhám',
    before: '/after-bike.jpg',
    after: '/before-bike.jpg',
  }
];

function CompareSlider({ beforeImg, afterImg, title }: { beforeImg: string, afterImg: string, title: string }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="flex flex-col mb-12">
      <h3 className="font-heading font-bold text-xl md:text-2xl tracking-wide mb-6 text-text-main">{title}</h3>
      <div className="relative w-full aspect-video overflow-hidden rounded-sm group select-none">
        
        {/* Before Image (Background) */}
        <img 
          src={beforeImg} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%] brightness-75 pointer-events-none" 
        />
        
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm z-10 pointer-events-none">
          Trước
        </div>

        {/* After Image (Clipped) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={afterImg} 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          />
        </div>

        <div 
          className="absolute top-4 right-4 bg-accent/90 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm z-10 pointer-events-none"
          style={{ opacity: sliderPos > 85 ? 0 : 1 }}
        >
          Sau
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-accent pointer-events-none z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(46,139,87,0.4)] pointer-events-none">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>

        {/* Hidden Range Input */}
        <input 
          type="range" 
          min="0" max="100" 
          value={sliderPos} 
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
        />
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-bg-secondary relative z-10 border-t border-border-main">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase mb-3">Hiệu Quả Chăm Sóc</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">Khác Biệt Nằm Ở<br/>Từng Chi Tiết</h2>
          <p className="text-text-muted text-base max-w-lg leading-relaxed">
            Xem những thay đổi trực quan sau khi xe được xử lý qua các bước chuyên sâu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {pairs.map((pair, idx) => (
             <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
             >
                <CompareSlider beforeImg={pair.before} afterImg={pair.after} title={pair.title} />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
