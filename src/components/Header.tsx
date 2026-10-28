import React from 'react';
import { Bookmark, Bell, ShieldCheck, Briefcase, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: 'jobs' | 'industries' | 'salary' | 'cv-guide' | 'anti-scam' | 'reviews';
  setActiveTab: (tab: 'jobs' | 'industries' | 'salary' | 'cv-guide' | 'anti-scam' | 'reviews') => void;
  savedJobsCount: number;
  onOpenSavedJobs: () => void;
  onOpenJobAlerts: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedJobsCount,
  onOpenSavedJobs,
  onOpenJobAlerts,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Safety Notice Strip */}
      <div className="bg-teal-700 text-white text-xs py-1.5 px-4 text-center font-medium">
        <span>Cam kết minh bạch: 100% doanh nghiệp xác thực mã số thuế · Tuyệt đối không thu tiền cọc · Kết nối trực tiếp phòng Nhân sự</span>
      </div>

      {/* Main Navigation: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => setActiveTab('jobs')}
            className="flex items-center gap-2.5 text-left focus:outline-hidden group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xl shadow-xs group-hover:bg-teal-700 transition-colors">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight flex items-center gap-1.5">
                Nối cơ hội - Đổi cuộc đời
                <span title="Nền tảng việc làm minh bạch đã xác thực">
                  <ShieldCheck className="w-4 h-4 text-teal-600 inline" />
                </span>
              </div>
              <p className="text-[11px] text-slate-700 font-medium tracking-normal">Cầu nối việc làm không qua trung gian</p>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'jobs' ? 'text-teal-700 bg-teal-50 font-semibold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Tìm việc làm
            </button>
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'industries' ? 'text-teal-700 bg-teal-50 font-semibold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Khối ngành & Doanh nghiệp
            </button>
            <button
              onClick={() => setActiveTab('salary')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'salary' ? 'text-teal-700 bg-teal-50 font-semibold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              So sánh mức lương
            </button>
            <button
              onClick={() => setActiveTab('cv-guide')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'cv-guide' ? 'text-teal-700 bg-teal-50 font-semibold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Cẩm nang CV & Portfolio
            </button>
            <button
              onClick={() => setActiveTab('anti-scam')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'anti-scam' ? 'text-teal-700 bg-teal-50 font-semibold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Phòng chống lừa đảo
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'reviews' ? 'text-teal-700 bg-teal-50 font-semibold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Đánh giá tuyển dụng
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Job alerts bell */}
            <button
              onClick={onOpenJobAlerts}
              className="relative p-2 text-slate-600 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors"
              title="Thông báo việc làm mới"
              aria-label="Thông báo việc làm mới"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
            </button>

            {/* Saved Jobs */}
            <button
              onClick={onOpenSavedJobs}
              className="relative p-2 text-slate-600 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors"
              title="Việc làm đã lưu"
              aria-label="Việc làm đã lưu"
            >
              <Bookmark className="w-5 h-5" />
              {savedJobsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {savedJobsCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => setActiveTab('jobs')}
              className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Khám phá việc làm</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav strip */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2 border-t border-slate-100 text-xs no-scrollbar">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 ${
              activeTab === 'jobs' ? 'bg-teal-600 text-white font-medium' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Việc làm
          </button>
          <button
            onClick={() => setActiveTab('industries')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 ${
              activeTab === 'industries' ? 'bg-teal-600 text-white font-medium' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Khối ngành
          </button>
          <button
            onClick={() => setActiveTab('salary')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 ${
              activeTab === 'salary' ? 'bg-teal-600 text-white font-medium' : 'bg-slate-100 text-slate-700'
            }`}
          >
            So sánh lương
          </button>
          <button
            onClick={() => setActiveTab('cv-guide')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 ${
              activeTab === 'cv-guide' ? 'bg-teal-600 text-white font-medium' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Cẩm nang CV
          </button>
          <button
            onClick={() => setActiveTab('anti-scam')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 ${
              activeTab === 'anti-scam' ? 'bg-teal-600 text-white font-medium' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Chống lừa đảo
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 ${
              activeTab === 'reviews' ? 'bg-teal-600 text-white font-medium' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Đánh giá
          </button>
        </div>
      </div>
    </header>
  );
};
