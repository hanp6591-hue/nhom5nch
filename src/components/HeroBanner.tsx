import React from 'react';
import { Search, MapPin, Layers, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { IndustryCode } from '../types';

interface HeroBannerProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (ind: string) => void;
  onSearch: () => void;
  onSelectQuickFilter: (filterKey: string) => void;
  activeQuickFilter: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCity,
  setSelectedCity,
  selectedIndustry,
  setSelectedIndustry,
  onSearch,
  onSelectQuickFilter,
  activeQuickFilter,
}) => {
  return (
    <div className="relative bg-gradient-to-b from-teal-900 via-slate-900 to-slate-900 text-white overflow-hidden py-12 lg:py-16">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Nền tảng việc làm quốc gia cho người trẻ & sinh viên mới tốt nghiệp</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Nối cơ hội vàng, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300">
                đổi cuộc đời vững bước tương lai
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Giải pháp tìm việc làm trực tiếp từ các doanh nghiệp uy tín, dành cho mọi lứa tuổi và đặc biệt là sinh viên năm cuối, mới ra trường, người chưa có kinh nghiệm. Loại bỏ hoàn toàn trung gian môi giới, cam kết 0 đồng cọc phí, bảo mật danh tính tuyệt đối.
            </p>

            {/* Comprehensive Search Bar Container */}
            <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl text-slate-900 space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-2">
              {/* Keyword Input */}
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                  placeholder="Vị trí, từ khóa (VD: Lập trình, Kế toán, Kho vận...)"
                  className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden"
                />
              </div>

              {/* City Dropdown */}
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 sm:w-44 shrink-0">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-800 focus:outline-hidden cursor-pointer"
                >
                  <option value="all">Mọi địa điểm</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="Toàn quốc">Toàn quốc</option>
                  <option value="Làm từ xa (Remote)">Làm từ xa (Remote)</option>
                </select>
              </div>

              {/* Industry Dropdown */}
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 sm:w-48 shrink-0">
                <Layers className="w-4 h-4 text-slate-400 shrink-0" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-800 focus:outline-hidden cursor-pointer"
                >
                  <option value="all">Tất cả khối ngành</option>
                  <option value="CNKT">CNKT - Công nghệ & Kỹ thuật</option>
                  <option value="DVVT">DVVT - Dịch vụ & Vận tải</option>
                  <option value="KDTT">KDTT - Kinh doanh & Marketing</option>
                  <option value="TCKT">TCKT - Tài chính & Kế toán</option>
                  <option value="YDGD">YDGD - Y tế & Giáo dục</option>
                  <option value="SXNL">SXNL - Sản xuất & Nông nghiệp</option>
                </select>
              </div>

              {/* Submit CTA */}
              <button
                onClick={onSearch}
                className="w-full sm:w-auto px-6 py-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-sm rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Tìm việc</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 font-medium">Tìm nhanh:</span>
              <button
                onClick={() => onSelectQuickFilter('no_exp')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeQuickFilter === 'no_exp'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                ✨ Chưa có kinh nghiệm (Đào tạo từ A-Z)
              </button>
              <button
                onClick={() => onSelectQuickFilter('internship')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeQuickFilter === 'internship'
                    ? 'bg-teal-400 text-slate-950 font-bold'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                🎓 Thực tập sinh có trợ cấp
              </button>
              <button
                onClick={() => onSelectQuickFilter('part_time')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeQuickFilter === 'part_time'
                    ? 'bg-teal-400 text-slate-950 font-bold'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                🕒 Bán thời gian / Xoay ca linh hoạt
              </button>
              <button
                onClick={() => onSelectQuickFilter('high_salary')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeQuickFilter === 'high_salary'
                    ? 'bg-teal-400 text-slate-950 font-bold'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                💰 Lương khởi điểm &gt; 10 triệu
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Hero Image & Verified Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl group">
              <img
                src="/src/assets/images/hero_career_opportunity_1793193581188.jpg"
                alt="Sinh viên và người trẻ tự tin tiếp cận cơ hội nghề nghiệp tại doanh nghiệp hàng đầu"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              {/* Overlay Badge at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-teal-400 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                    <span>Lá chắn phòng chống lừa đảo việc làm</span>
                  </div>
                  <span className="text-slate-400">100% Doanh nghiệp thật</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Tất cả tin tuyển dụng đều được thẩm định Mã số thuế, có địa chỉ văn phòng thực tế, số điện thoại HR chính thức và ký cam kết không thu bất kỳ khoản cọc phí nào.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars Trust Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Không qua trung gian môi giới</h4>
              <p className="text-xs text-slate-400 mt-0.5">Ứng tuyển và kết nối trực tiếp với phòng Nhân sự doanh nghiệp, rút ngắn thời gian phản hồi còn 24 - 48h.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Bảo mật thông tin & 0đ Cọc phí</h4>
              <p className="text-xs text-slate-400 mt-0.5">Nghiêm cấm mọi hành vi thu tiền cọc, tiền đồng phục. Hồ sơ ứng viên được bảo vệ an toàn, không bị lộ lọt.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Cẩm nang CV & Nâng cao năng lực</h4>
              <p className="text-xs text-slate-400 mt-0.5">Hướng dẫn tạo Portfolio Google Sites miễn phí, mẹo phỏng vấn và lộ trình phát triển kỹ năng cho người chưa có kinh nghiệm.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
