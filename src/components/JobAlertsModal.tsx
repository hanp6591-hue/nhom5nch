import React, { useState } from 'react';
import { Job } from '../types';
import { 
  X, 
  Bell, 
  Check, 
  Sparkles, 
  Building2, 
  MapPin, 
  DollarSign, 
  Clock, 
  CheckCircle2,
  Send
} from 'lucide-react';

interface JobAlertsModalProps {
  isOpen: boolean;
  onClose: () => void;
  recentJobs: Job[];
  onSelectJob: (job: Job) => void;
}

export const JobAlertsModal: React.FC<JobAlertsModalProps> = ({
  isOpen,
  onClose,
  recentJobs,
  onSelectJob,
}) => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedExp, setSelectedExp] = useState<string>('no_exp');
  const [alertsEnabled, setAlertsEnabled] = useState<boolean>(true);
  const [isSavedPref, setIsSavedPref] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSavePref = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavedPref(true);
    setTimeout(() => {
      setIsSavedPref(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl animate-fadeIn relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Bell className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Thông báo việc làm mới</h3>
              <p className="text-xs text-slate-500">Nhận cơ hội việc làm ngay khi doanh nghiệp vừa đăng tải</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preference Form */}
        <form onSubmit={handleSavePref} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-800">Cài đặt bộ tiêu chí nhận tin:</span>
            <label className="flex items-center gap-1.5 cursor-pointer font-medium text-teal-700">
              <input
                type="checkbox"
                checked={alertsEnabled}
                onChange={(e) => setAlertsEnabled(e.target.checked)}
                className="rounded text-teal-600 focus:ring-teal-500"
              />
              <span>Bật nhận thông báo</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-slate-600 block mb-1">Khối ngành ưu tiên:</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-hidden"
              >
                <option value="all">Tất cả khối ngành</option>
                <option value="CNKT">CNKT - Công nghệ & Kỹ thuật</option>
                <option value="DVVT">DVVT - Dịch vụ & Vận tải</option>
                <option value="KDTT">KDTT - Kinh doanh & Tiếp thị</option>
                <option value="TCKT">TCKT - Tài chính & Kế toán</option>
                <option value="YDGD">YDGD - Y tế & Giáo dục</option>
                <option value="SXNL">SXNL - Sản xuất & Nông nghiệp</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-600 block mb-1">Kinh nghiệm:</label>
              <select
                value={selectedExp}
                onChange={(e) => setSelectedExp(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-hidden"
              >
                <option value="no_exp">Chưa có kinh nghiệm / Đào tạo từ đầu</option>
                <option value="all">Tất cả mức kinh nghiệm</option>
                <option value="has_exp">Đã có kinh nghiệm</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-600 block mb-1">Email nhận tin:</label>
            <div className="flex gap-2">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Nhập email của bạn (VD: sinhvien@gmail.com)"
                className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 focus:outline-hidden focus:border-teal-500"
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold rounded-lg transition-colors shrink-0"
              >
                Lưu cài đặt
              </button>
            </div>
          </div>

          {isSavedPref && (
            <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-[11px] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Đã lưu cài đặt thông báo việc làm mới thành công!</span>
            </div>
          )}
        </form>

        {/* Recent Jobs Feed */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
            Cơ hội việc làm mới đăng hôm nay:
          </span>

          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            {recentJobs.slice(0, 4).map((job) => (
              <div
                key={job.id}
                onClick={() => { onSelectJob(job); onClose(); }}
                className="p-3 rounded-xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition-colors cursor-pointer flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={job.companyLogo}
                    alt={job.companyName}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-lg object-cover border border-slate-100 shrink-0"
                  />
                  <div>
                    <h5 className="font-bold text-slate-900 hover:text-teal-700 line-clamp-1">
                      {job.title}
                    </h5>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <span>{job.companyName}</span>
                      <span>·</span>
                      <span className="text-teal-700 font-semibold">{job.salaryText}</span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400 shrink-0 font-medium bg-slate-100 px-2 py-1 rounded-md">
                  {job.postedDate}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
