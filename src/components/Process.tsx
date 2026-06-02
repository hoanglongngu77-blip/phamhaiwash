import { motion } from 'motion/react';
import React from 'react';
import { ClipboardCheck, Wrench, ShieldCheck, OutdentIcon } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: ClipboardCheck,
    title: 'Tiếp Nhận & Kiểm Tra',
    desc: 'Kiểm tra tình trạng xe, tư vấn gói dịch vụ phù hợp với nhu cầu và ngân sách.'
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Xử Lý Tận Tâm',
    desc: 'Sử dụng hóa chất cao cấp, vệ sinh từng chi tiết nhỏ bằng tay và máy chuyên dụng.'
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Kiểm Tra Chất Lượng',
    desc: 'Kiểm tra kỹ lưỡng từng bộ phận trước khi giao xe, đảm bảo 100% sự hài lòng.'
  },
  {
    num: '04',
    icon: OutdentIcon,
    title: 'Bàn Giao Xe',
    desc: 'Xe được bàn giao sạch bóng, thơm tho. Tư vấn bảo dưỡng định kỳ để xe luôn đẹp.'
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-bg-primary relative z-10 border-t border-border-main">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase mb-3">Quy Trình</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-16">Từng Bước<br/>Tỉ Mỉ</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-y lg:divide-y-0 divide-border-main border-y lg:border-x border-border-main">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 relative group bg-bg-primary hover:bg-bg-card transition-colors duration-500"
            >
              <div className="absolute top-6 right-8 font-heading text-6xl font-bold text-white/[0.03] tracking-tighter group-hover:text-accent/[0.1] transition-colors duration-500">
                {step.num}
              </div>
              
              <div className="w-12 h-12 rounded-sm bg-accent-dim border border-border-accent flex items-center justify-center mb-8 relative z-10">
                <step.icon className="w-5 h-5 text-accent stroke-[1.8px]" />
              </div>
              
              <h3 className="font-heading font-bold text-xl tracking-wide mb-4 relative z-10">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
