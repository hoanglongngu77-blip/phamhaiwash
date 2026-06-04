import { motion } from 'motion/react';
import { Droplet, Wrench, Settings, Star, Sparkles, CheckCircle } from 'lucide-react';
import React from 'react';
import { assets } from '../data/assets';

const services = [
  {
    icon: Droplet,
    title: 'Rửa Xe Cơ Bản',
    desc: 'Rửa xe toàn thân + dưỡng vỏ bóng sáng. Thực hiện trong 30 phút với kỹ thuật tỉ mỉ.',
    price: '40K',
    unit: '/ lần',
    img: assets.services.basicWash
  },
  {
    icon: Settings,
    title: 'Vệ Sinh Sên NSD',
    desc: 'Vệ sinh mang cá, hộp sên, xịt dung dịch bảo dưỡng sên chuyên nghiệp. 30 phút.',
    price: '55K',
    unit: '/ lần',
    img: assets.services.chainClean
  },
  {
    icon: Wrench,
    title: 'Thay Nhớt',
    desc: 'Thay nhớt Motul cao cấp cho xe số & xe tay ga. Nhớt loại tốt từ 200K. Thực hiện 15 phút.',
    price: '140K+',
    unit: '/ lần',
    img: assets.services.oilChange
  },
  {
    icon: Star,
    title: 'Dưỡng Bóng Dàn Áo',
    desc: 'Dưỡng bóng toàn bộ dàn áo xe, khôi phục vẻ sáng bóng như mới từ xuất xưởng.',
    price: '79K',
    unit: '/ lần',
    img: assets.services.tireCleaning
  },
  {
    icon: Sparkles,
    title: 'Tẩy Nhựa Đường & Keo',
    desc: 'Xử lý nhựa đường, keo dính bám trên xe. Phục hồi bề mặt hoàn toàn sạch sẽ.',
    price: '60K–80K',
    unit: '/ lần',
    img: assets.services.detailingEngine
  },
  {
    icon: CheckCircle,
    title: 'Combo Toàn Diện',
    desc: 'Combo chăm sóc toàn diện: Làm sạch sâu bề mặt kết hợp dưỡng phục hồi nhựa bóng và nhựa nhám, mang lại vẻ đẹp như mới.',
    price: '159K - 179K',
    unit: '(tùy dòng xe)',
    img: assets.services.premiumDetailing
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-secondary border-y border-border-main relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase mb-3">Dịch Vụ Nổi Bật</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">Chúng Tôi<br/>Làm Gì</h2>
          <p className="text-text-muted text-base lg:text-lg max-w-lg leading-relaxed">
            Dịch vụ tận tâm, chăm kỹ từng chi tiết. Từ rửa xe cơ bản đến chăm sóc toàn diện chuyên sâu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-main border border-border-main relative">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-card group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:z-20 cursor-default"
            >
              <div className="overflow-hidden h-[220px]">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover filter brightness-[0.85] saturate-90 transition-all duration-500 group-hover:brightness-100 group-hover:saturate-110 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 border-t border-border-main relative bg-bg-card">
                <div className="w-10 h-10 rounded-full bg-accent-dim border border-border-accent flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-accent stroke-[1.8px]" />
                </div>
                <h3 className="font-heading font-bold text-2xl tracking-wide mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 min-h-[44px]">
                  {service.desc}
                </p>
                <div className="font-heading text-3xl font-bold text-accent tracking-wide">
                  {service.price} <span className="font-sans text-xs font-normal text-text-muted ml-0.5">{service.unit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
