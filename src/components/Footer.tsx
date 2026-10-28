import React from 'react';
import { Briefcase, ShieldCheck, Heart, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <span>Nối cơ hội - Đổi cuộc đời</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Nền tảng việc làm và kết nối nghề nghiệp minh bạch, hỗ trợ mọi lứa tuổi và sinh viên mới ra trường tìm được công việc như ý mà không lo bị lừa đảo hay qua môi giới trung gian.
            </p>
            <div className="flex items-center gap-1.5 text-teal-400 text-[11px] font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Doanh nghiệp xác thực pháp lý</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Khám phá cơ hội</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateTab('jobs')} className="hover:text-white transition-colors">
                  Việc làm không cần kinh nghiệm
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('jobs')} className="hover:text-white transition-colors">
                  Thực tập sinh có trợ cấp lương
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('jobs')} className="hover:text-white transition-colors">
                  Việc làm bán thời gian cho sinh viên
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('industries')} className="hover:text-white transition-colors">
                  Khối ngành CNKT & DVVT
                </button>
              </li>
            </ul>
          </div>

          {/* Toolkit & Tools */}
          <div className="space-y-2.5">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Công cụ hỗ trợ</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateTab('salary')} className="hover:text-white transition-colors">
                  Bảng so sánh mức lương thị trường
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('cv-guide')} className="hover:text-white transition-colors">
                  Cẩm nang viết CV chuẩn ATS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('cv-guide')} className="hover:text-white transition-colors">
                  Tạo Portfolio miễn phí trên Google Sites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('anti-scam')} className="hover:text-white transition-colors text-emerald-400 font-medium">
                  Máy quét kiểm tra tin lừa đảo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('reviews')} className="hover:text-white transition-colors">
                  Đánh giá phỏng vấn thực tế
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Hotlines */}
          <div className="space-y-2.5">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Hỗ trợ người tìm việc</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Tổng đài tư vấn pháp lý lao động & Hỗ trợ phòng chống lừa đảo miễn phí:
            </p>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="font-semibold text-white">1800 6868 (Miễn cước 24/7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>hotro@noicohoi-doicuocdoi.vn</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-slate-500">
              Cam kết không thu phí dịch vụ từ ứng viên.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Nối cơ hội - Đổi cuộc đời. Nền tảng hướng nghiệp & việc làm minh bạch Việt Nam.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Tuân thủ Điều 17 Bộ luật Lao động</span>
            <span>·</span>
            <span>Bảo vệ quyền lợi người lao động</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
