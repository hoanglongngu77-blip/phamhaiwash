import { motion } from 'motion/react';
import React from 'react';
import { Facebook, Phone, MapPin } from 'lucide-react';
import { assets, SOCIAL_LINKS } from '../data/assets';

export default function Footer() {
  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href={SOCIAL_LINKS.facebook} 
          target="_blank" 
          rel="noreferrer"
          className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
        >
          <Facebook className="w-5 h-5 fill-current" />
        </a>
        <a 
          href={`tel:${SOCIAL_LINKS.phone}`} 
          className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>
      </div>

      {/* CTA Strip */}
      <section className="bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(14,17,19,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
          <p className="text-bg-primary text-sm font-bold tracking-[0.15em] uppercase mb-4">Đặt Lịch Ngay Hôm Nay</p>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-bg-primary leading-[1.1] mb-6">
            XE CỦA BẠN<br/>XỨNG ĐÁNG HƠN THẾ
          </h2>
          <p className="text-bg-primary/80 font-medium text-lg mb-10">Liên hệ để được tư vấn miễn phí và đặt lịch phục vụ.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href={`tel:${SOCIAL_LINKS.phone}`} className="bg-bg-primary hover:bg-bg-secondary text-text-main px-8 py-3.5 font-bold tracking-widest text-sm uppercase rounded-sm transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> 0372 315 611
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="bg-transparent border-2 border-bg-primary/30 hover:border-bg-primary hover:bg-bg-primary text-bg-primary hover:text-text-main px-8 py-3.5 font-bold tracking-widest text-sm uppercase rounded-sm transition-all flex items-center gap-2">
              <Facebook className="w-4 h-4" /> Fanpage
            </a>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-bg-primary border-t border-border-main pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6 no-underline">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-accent overflow-hidden flex items-center justify-center shrink-0">
                <img 
                  src={assets.logo} 
                  alt="Motor Wash Pham Hai Logo" 
                  className="w-full h-full object-cover scale-[1.38]" 
                />
              </div>
              <span className="font-heading font-bold text-xl tracking-wider text-text-main uppercase">
                Pham Hai Wash
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-8">
              Dịch vụ chăm sóc xe máy chuyên nghiệp tại Vincom Biên Hoà. Tận tâm – Tỉ mỉ – Chất lượng cao. "Yêu xe bạn như cách bạn yêu vợ bạn".
            </p>
            <div className="flex gap-4">
               <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 border border-border-main rounded-sm flex items-center justify-center text-text-muted hover:border-accent hover:text-accent hover:bg-accent-dim transition-all">
                  <Facebook className="w-4 h-4 fill-current" />
               </a>
               <a href={`tel:${SOCIAL_LINKS.phone}`} className="w-10 h-10 border border-border-main rounded-sm flex items-center justify-center text-text-muted hover:border-accent hover:text-accent hover:bg-accent-dim transition-all">
                  <Phone className="w-4 h-4 fill-current" />
               </a>
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-heading font-bold text-lg tracking-widest uppercase mb-6">Dịch Vụ</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-text-muted hover:text-text-main transition-colors">Rửa Xe Cơ Bản</a></li>
              <li><a href="#services" className="text-text-muted hover:text-text-main transition-colors">Vệ Sinh Sên NSD</a></li>
              <li><a href="#services" className="text-text-muted hover:text-text-main transition-colors">Thay Nhớt</a></li>
              <li><a href="#services" className="text-text-muted hover:text-text-main transition-colors">Dưỡng Bóng Dàn Áo</a></li>
              <li><a href="#services" className="text-text-muted hover:text-text-main transition-colors">Tẩy Nhựa Đường</a></li>
              <li><a href="#services" className="text-text-muted hover:text-text-main transition-colors">Chăm Sóc Toàn Xe</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-lg tracking-widest uppercase mb-6">Liên Hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-text-muted">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href={`tel:${SOCIAL_LINKS.phone}`} className="hover:text-text-main transition-colors">0372 315 611</a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href={`tel:${SOCIAL_LINKS.phone2}`} className="hover:text-text-main transition-colors">0899 829 738</a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Facebook className="w-4 h-4 flex-shrink-0 text-[#1877F2]" />
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="hover:text-text-main transition-colors">Facebook Cá Nhân</a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                 <svg className="w-4 h-4 flex-shrink-0 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61.94-5.26 2.95-6.84 1.75-1.38 4.15-1.92 6.36-1.31v4.11c-1-.28-2.12-.2-3.03.26-1.07.56-1.77 1.63-1.85 2.82-.09 1.25.43 2.5 1.34 3.28 1.07.9 2.64 1.14 3.97.63 1.24-.48 2.12-1.57 2.36-2.87.09-.52.12-1.05.12-1.58V.02z"/></svg>
                 <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="hover:text-text-main transition-colors">TikTok: @ruaxedetailing</a>
              </li>
              <li className="flex items-start gap-3 text-text-muted mt-4">
                <MapPin className="w-4 h-4 flex-shrink-0 text-accent mt-0.5" />
                <span>Hoạt động: 14:30 – 17:30<br/>Hàng Tuần</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border-main flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">© 2026 Motor Wash Pham Hai. All rights reserved.</p>
          <p className="text-xs text-text-muted">TP. Đồng Nai, Vietnam</p>
        </div>
      </footer>
    </>
  );
}
