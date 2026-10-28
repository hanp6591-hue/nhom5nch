import React, { useState } from 'react';
import { SALARY_BENCHMARKS } from '../data/mockData';
import { SalaryDataPoint } from '../types';
import { 
  DollarSign, 
  TrendingUp, 
  Layers, 
  HelpCircle, 
  ArrowUpRight, 
  Lightbulb, 
  CheckCircle2, 
  Scale 
} from 'lucide-react';

export const SalaryComparison: React.FC = () => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);
  const [selectedCityMultiplier, setSelectedCityMultiplier] = useState<number>(1.0); // 1.0 for HN/HCM, 0.85 for other provinces
  const [activeTabSector, setActiveTabSector] = useState<string>('all');

  const filteredBenchmarks = SALARY_BENCHMARKS.filter((item) => {
    if (activeTabSector !== 'all' && item.industryCode !== activeTabSector) return false;
    return true;
  });

  const currentBenchmark: SalaryDataPoint = filteredBenchmarks[selectedRoleIndex] || SALARY_BENCHMARKS[0];

  // Adjust for region if selected
  const adjustSalary = (val: number) => Math.round(val * selectedCityMultiplier * 10) / 10;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-3">
          <Scale className="w-4 h-4 text-teal-600" />
          <span>Báo cáo Dữ liệu Thị trường Lao động Việt Nam 2025 - 2026</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Công cụ Tra cứu & So sánh Phổ Mức Lương Theo Ngành
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Minh bạch thu nhập giúp người tìm việc và sinh viên mới ra trường nắm rõ giá trị thực tế của bản thân, tự tin đàm phán mức lương xứng đáng và tránh bị ép giá khi bước vào thị trường lao động.
        </p>
      </div>

      {/* Sector Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 text-xs font-medium">
        <button
          onClick={() => { setActiveTabSector('all'); setSelectedRoleIndex(0); }}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTabSector === 'all' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Tất cả ngành
        </button>
        <button
          onClick={() => { setActiveTabSector('CNKT'); setSelectedRoleIndex(0); }}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTabSector === 'CNKT' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          CNKT - Công nghệ & Kỹ thuật
        </button>
        <button
          onClick={() => { setActiveTabSector('DVVT'); setSelectedRoleIndex(0); }}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTabSector === 'DVVT' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          DVVT - Dịch vụ & Vận tải
        </button>
        <button
          onClick={() => { setActiveTabSector('KDTT'); setSelectedRoleIndex(0); }}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTabSector === 'KDTT' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          KDTT - Kinh doanh & Marketing
        </button>
        <button
          onClick={() => { setActiveTabSector('TCKT'); setSelectedRoleIndex(0); }}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTabSector === 'TCKT' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          TCKT - Tài chính & Kế toán
        </button>
        <button
          onClick={() => { setActiveTabSector('YDGD'); setSelectedRoleIndex(0); }}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTabSector === 'YDGD' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          YDGD - Y tế & Giáo dục
        </button>
        <button
          onClick={() => { setActiveTabSector('SXNL'); setSelectedRoleIndex(0); }}
          className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTabSector === 'SXNL' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          SXNL - Sản xuất & Nông nghiệp
        </button>
      </div>

      {/* Main Interactive Tool Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Role Selector List */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-4 space-y-2">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Chọn vị trí công việc:
            </span>
            {/* Region Multiplier Selector */}
            <select
              value={selectedCityMultiplier}
              onChange={(e) => setSelectedCityMultiplier(Number(e.target.value))}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 focus:outline-hidden"
            >
              <option value={1.0}>Vùng I (Hà Nội, TP.HCM)</option>
              <option value={0.88}>Vùng II (Đà Nẵng, Cần Thơ, Hải Phòng)</option>
              <option value={0.80}>Vùng III & IV (Các tỉnh thành khác)</option>
            </select>
          </div>

          <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredBenchmarks.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRoleIndex(idx)}
                className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between ${
                  selectedRoleIndex === idx
                    ? 'bg-teal-50 border border-teal-200 text-teal-900 font-semibold'
                    : 'hover:bg-slate-50 border border-transparent text-slate-700'
                }`}
              >
                <div>
                  <div className="text-sm">{item.role}</div>
                  <div className="text-xs text-slate-600 mt-0.5 flex items-center gap-1.5">
                    <span>{item.industryName}</span>
                    <span>·</span>
                    <span className="text-teal-700 font-medium">Nhu cầu: {item.demandLevel}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-mono font-bold text-teal-700">
                    {adjustSalary(item.fresherNoExp.avg)} tr/th
                  </div>
                  <div className="text-[10px] text-slate-600">Khởi điểm</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Comparative Visual Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            
            {/* Active Role Title & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block">
                  {currentBenchmark.industryName}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  {currentBenchmark.role}
                </h3>
              </div>
              <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-800 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                <span>Nhu cầu tuyển dụng: {currentBenchmark.demandLevel}</span>
              </div>
            </div>

            {/* Visual Salary Comparison across 3 Tiers */}
            <div className="space-y-5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                So sánh mức thu nhập theo thâm niên & năng lực:
              </span>

              {/* Tier 1: Fresher / Chưa có kinh nghiệm (Highlighted) */}
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-teal-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
                    Chưa có kinh nghiệm / Mới tốt nghiệp (Fresher)
                  </span>
                  <span className="font-mono font-extrabold text-sm text-teal-800">
                    Trung bình: {adjustSalary(currentBenchmark.fresherNoExp.avg)} triệu / tháng
                  </span>
                </div>
                {/* Visual Bar */}
                <div className="w-full bg-teal-100/60 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-teal-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (currentBenchmark.fresherNoExp.avg / 40) * 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-teal-800">
                  <span>Khoảng lương: {adjustSalary(currentBenchmark.fresherNoExp.min)} tr - {adjustSalary(currentBenchmark.fresherNoExp.max)} tr</span>
                  <span>Được đào tạo có lương từ đầu</span>
                </div>
              </div>

              {/* Tier 2: Junior (1 - 2 năm kinh nghiệm) */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                    Đã có 1 - 2 năm kinh nghiệm (Junior)
                  </span>
                  <span className="font-mono font-bold text-sm text-slate-800">
                    Trung bình: {adjustSalary(currentBenchmark.junior1to2.avg)} triệu / tháng
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (currentBenchmark.junior1to2.avg / 40) * 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Khoảng lương: {adjustSalary(currentBenchmark.junior1to2.min)} tr - {adjustSalary(currentBenchmark.junior1to2.max)} tr</span>
                  <span>Đã làm việc độc lập với dự án</span>
                </div>
              </div>

              {/* Tier 3: Mid / Senior (3 - 5 năm kinh nghiệm) */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
                    Từ 3 - 5 năm kinh nghiệm (Mid / Senior / Quản lý nhóm)
                  </span>
                  <span className="font-mono font-bold text-sm text-slate-800">
                    Trung bình: {adjustSalary(currentBenchmark.midSenior3to5.avg)} triệu / tháng
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-purple-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (currentBenchmark.midSenior3to5.avg / 40) * 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Khoảng lương: {adjustSalary(currentBenchmark.midSenior3to5.min)} tr - {adjustSalary(currentBenchmark.midSenior3to5.max)} tr</span>
                  <span>Chịu trách nhiệm kiến trúc và hướng dẫn nhân sự mới</span>
                </div>
              </div>
            </div>

            {/* Practical Advice & Market Insights */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <Lightbulb className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Mẹo đàm phán lương cho người chưa có kinh nghiệm:</span>
              </div>
              <p className="leading-relaxed">
                {currentBenchmark.notes}
              </p>
            </div>
          </div>

          {/* 3 Steps to Negotiate Salary Confidently */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>3 nguyên tắc vàng khi trao đổi mức lương trong buổi phỏng vấn:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block">1. Nêu khoảng lương (Range)</span>
                <p>Thay vì đưa một con số cố định, hãy đưa khoảng lương dao động (VD: 9 - 12 triệu) dựa trên khảo sát thực tế của "Nối cơ hội - Đổi cuộc đời".</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block">2. Minh chứng bằng sản phẩm</span>
                <p>Đính kèm Portfolio Google Sites hoặc bài tập lớn xuất sắc để chứng minh bạn đã sẵn sàng bắt tay vào việc ngay mà không mất nhiều chi phí đào tạo lại.</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block">3. Thỏa thuận tăng lương sau thử việc</span>
                <p>Nếu mức lương khởi điểm ở mức trung bình, hãy đề xuất: "Sau 3 tháng thử việc và đạt KPI dự án, em xin phép được đánh giá lại mức lương lên mức X".</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
