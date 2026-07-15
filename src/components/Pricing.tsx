import { motion } from 'motion/react';
import React from 'react';
import { SOCIAL_LINKS } from '../data/assets';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative z-10 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase mb-3">Bảng Giá</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">Giá Cả<br/>Rõ Ràng</h2>
          <p className="text-text-muted text-base max-w-lg leading-relaxed">
            Không phí ẩn. Giá tốt nhất cho chất lượng dịch vụ chăm sóc cao nhất.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-bg-card border border-border-main p-8 rounded-sm hover:-translate-y-1 transition-transform hover:border-border-accent"
          >
            <p className="text-[0.7rem] text-accent font-semibold tracking-[0.15em] uppercase mb-4">Vệ Sinh Cơ Bản</p>
            <h3 className="font-heading font-bold text-3xl leading-[1.1] mb-6">Rửa Xe &<br/>Chăm Sóc</h3>
            
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Rửa xe cơ bản + dưỡng vỏ</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">40K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Vệ sinh NSD + dưỡng sên</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">55K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Phủ bóng nhanh</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">35K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Dưỡng bóng dàn áo</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">79K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Tẩy nhựa đường, keo</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">60–80K</span>
              </li>
              <li className="flex justify-between items-end pb-2">
                <span className="text-text-muted">Dưỡng nhám</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">90–120K</span>
              </li>
            </ul>
            <a href={`tel:${SOCIAL_LINKS.phone}`} className="block w-full text-center py-3.5 border border-border-main text-text-muted hover:border-accent hover:text-text-main text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors">
              Đặt Lịch
            </a>
          </motion.div>

          {/* Featured Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-bg-card border border-accent relative p-8 rounded-sm hover:-translate-y-1 transition-transform overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/10 before:to-transparent before:pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent text-text-main text-[0.7rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-b-sm">
              ⭐ Nổi Bật Nhất
            </div>
            <p className="text-[0.7rem] text-accent font-semibold tracking-[0.15em] uppercase mb-4 mt-2">Combo Ưu Đãi</p>
            <h3 className="font-heading font-bold text-3xl leading-[1.1] mb-5">Sên Sạch<br/>Chạy Êm</h3>
            
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-heading font-bold text-[3.5rem] leading-none text-accent">79</span>
              <span className="font-heading font-bold text-xl text-accent">K</span>
            </div>
            <p className="text-[0.8rem] text-text-muted mb-6">Bao gồm rửa xe + vệ sinh sên toàn diện</p>

            <ul className="space-y-4 mb-8 text-sm relative z-10">
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Combo Sạch – Bóng – Dưỡng</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">69K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Rửa xe + Thay nhớt (mang nhớt)</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">55K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Rửa xe + Dưỡng nhám</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">100–160K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Rửa xe + Tẩy nhựa đường</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">89–110K</span>
              </li>
              <li className="flex justify-between items-end pb-2">
                <span className="text-text-muted">Rửa xe + Dưỡng bóng dàn áo</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">100K</span>
              </li>
            </ul>
            <a href={`tel:${SOCIAL_LINKS.phone}`} className="block w-full text-center py-3.5 bg-accent hover:bg-accent-hover text-text-main text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors relative z-10">
              Liên Hệ Ngay
            </a>
          </motion.div>

          {/* Oil & Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-bg-card border border-border-main p-8 rounded-sm hover:-translate-y-1 transition-transform hover:border-border-accent"
          >
            <p className="text-[0.7rem] text-accent font-semibold tracking-[0.15em] uppercase mb-4">Thay Nhớt</p>
            <h3 className="font-heading font-bold text-3xl leading-[1.1] mb-6">Nhớt Xe &<br/>Full Service</h3>
            
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Xe số – Loại bình dân</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">từ 140K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Xe số – Loại tốt</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">từ 200K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Xe tay ga – Bình dân</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">từ 130K</span>
              </li>
              <li className="flex justify-between items-end border-b border-border-main pb-2">
                <span className="text-text-muted">Xe tay ga – Loại tốt</span>
                <span className="font-semibold text-text-main ml-3 whitespace-nowrap">từ 200K</span>
              </li>
              <li className="flex justify-between items-end pb-2">
                <span className="text-text-muted">Chăm sóc toàn xe (Full)</span>
                <span className="font-accent text-accent font-semibold ml-3 whitespace-nowrap">159–179K</span>
              </li>
            </ul>
            <a href={`tel:${SOCIAL_LINKS.phone}`} className="block w-full text-center py-3.5 border border-border-main text-text-muted hover:border-accent hover:text-text-main text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors">
              Tư Vấn
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
{/* Detailing Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-bg-card border border-border-main p-8 rounded-sm hover:-translate-y-1 transition-transform hover:border-border-accent flex flex-col h-full"
          >
            <p className="text-[0.7rem] text-accent font-semibold tracking-[0.15em] uppercase mb-4">Chi Tiết Máy</p>
            <h3 className="font-heading font-bold text-3xl leading-[1.1] mb-6">Chi Tiết<br/>Nhanh</h3>
            
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex justify-between items-start border-b border-border-main pb-2 gap-4">
                <span className="text-text-muted">Xe số (vệ sinh chi tiết khoang máy)</span>
                <span className="font-semibold text-text-main whitespace-nowrap mt-auto">150–200K</span>
              </li>
              <li className="flex justify-between items-start border-b border-border-main pb-2 gap-4">
                <span className="text-text-muted">Xe tay gas (tháo cốp rửa chi tiết máy, dây điện, sườn)</span>
                <span className="font-semibold text-text-main whitespace-nowrap mt-auto">150–200K</span>
              </li>
              <li className="flex justify-between items-start pb-2 gap-4">
                <span className="text-text-muted">Dưỡng dây điện, cao su (áp dụng cho tay ga)</span>
                <span className="font-semibold text-text-main whitespace-nowrap mt-auto">50–100K</span>
              </li>
            </ul>
            <a href={`tel:${SOCIAL_LINKS.phone}`} className="block w-full text-center py-3.5 border border-border-main text-text-muted hover:border-accent hover:text-text-main text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors mt-auto">
              Tư Vấn
            </a>
          </motion.div>
