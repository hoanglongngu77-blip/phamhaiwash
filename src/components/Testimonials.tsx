import { motion } from 'motion/react';
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Trung Nguyên',
    vehicle: 'Honda Winner X · Combo Sên 79K',
    avatar: 'TN',
    quote: '"Rửa xe xịn lắm, sên sạch bóng, chạy êm hẳn. Anh Hải làm tận tâm, không qua loa. Sẽ tiếp tục ủng hộ dài dài!"'
  },
  {
    name: 'Minh Hoàng',
    vehicle: 'Honda SH · Combo Rửa Xe + Nhớt',
    avatar: 'MH',
    quote: '"Giá hợp lý, làm đúng giờ, xe sạch từng kẽ hở. Mình mang nhớt qua nhờ thay, combo chỉ 55K thật sự quá rẻ cho chất lượng này."'
  },
  {
    name: 'Anh Tú',
    vehicle: 'Yamaha Exciter · Full Detailing',
    avatar: 'AT',
    quote: '"Làm combo chăm sóc toàn xe 179K, xe như mới xuất xưởng. Sườn trong sáng bóng, lốc máy sạch tinh. Recommend cho cả xóm!"'
  },
  {
    name: 'Lan Thanh',
    vehicle: 'Honda Vision · Tẩy Nhựa + Dưỡng Bóng',
    avatar: 'LT',
    quote: '"Tẩy nhựa đường cực xịn, vết keo dính 2 năm cũng đi hết. Dưỡng bóng dàn áo xong nhìn xe bóng như gương. Quá hài lòng!"'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase mb-3">Khách Hàng Nói Gì</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">Đánh Giá<br/>Thực Tế</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-card border border-border-main p-8 rounded-sm hover:-translate-y-1 transition-transform hover:border-border-accent flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-text-muted text-sm italic leading-relaxed mb-8 flex-grow">
                {review.quote}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent-dim border border-border-accent flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-accent">{review.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{review.name}</h4>
                  <p className="text-xs text-text-muted">{review.vehicle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
