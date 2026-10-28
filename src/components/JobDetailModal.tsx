import React from 'react';
import { Job } from '../types';
import { 
  X, 
  Building2, 
  MapPin, 
  DollarSign, 
  Calendar, 
  GraduationCap, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Send, 
  Bookmark, 
  Share2,
  ExternalLink
} from 'lucide-react';

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
  onApply: (job: Job) => void;
  isSaved: boolean;
  onToggleSave: (jobId: string) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  onClose,
  onApply,
  isSaved,
  onToggleSave,
}) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl animate-fadeIn relative">
        
        {/* Top bar with close & save */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src={job.companyLogo}
              alt={job.companyName}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-2xl object-cover border border-slate-100 bg-slate-50 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-sm text-slate-800">{job.companyName}</span>
                {job.verifiedCompany && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    Đã thẩm định MST
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {job.city}
                </span>
                <span>·</span>
                <span>Hạn nộp: {job.deadline}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(job.id)}
              className={`p-2 rounded-xl transition-colors ${
                isSaved ? 'bg-teal-50 text-teal-600' : 'bg-slate-100 text-slate-400 hover:text-slate-600'
              }`}
              title="Lưu việc làm"
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Job Title & Quick Metrics */}
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
            {job.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <div className="font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-teal-600" />
              <span>Mức lương: {job.salaryText}</span>
            </div>
            <div className="font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>
                {job.jobType === 'full_time' ? 'Toàn thời gian (Full-time)' :
                 job.jobType === 'part_time' ? 'Bán thời gian (Part-time)' :
                 job.jobType === 'internship' ? 'Thực tập sinh (Internship)' : 'Lâu dài'}
              </span>
            </div>
            <div className={`font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
              job.experienceLevel === 'no_exp' ? 'bg-amber-50 text-amber-900' : 'bg-slate-100 text-slate-700'
            }`}>
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>{job.experienceLabel}</span>
            </div>
          </div>
        </div>

        {/* Guarantees Strip */}
        <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-950 space-y-1.5">
          <div className="font-bold flex items-center gap-1.5 text-teal-900">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Cam kết An toàn Tuyển dụng:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-teal-900">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>100% Không thu tiền đặt cọc hay phí đồng phục</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Hồ sơ gửi trực tiếp đến phòng Nhân sự công ty</span>
            </div>
            {job.trainingProvided && (
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Có chương trình đào tạo có lương từ đầu</span>
              </div>
            )}
          </div>
        </div>

        {/* Job Description */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-slate-900 text-sm">Mô tả công việc:</h4>
          <ul className="space-y-1.5 text-slate-600">
            {job.description.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-slate-900 text-sm">Yêu cầu ứng viên:</h4>
          <ul className="space-y-1.5 text-slate-600">
            {job.requirements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-slate-900 text-sm">Quyền lợi & Đãi ngộ:</h4>
          <ul className="space-y-1.5 text-slate-600">
            {job.benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct HR Contact Card */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">
            Thông tin liên hệ trực tiếp phòng Nhân sự (HR):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <div>
              <span className="text-slate-400 block text-[10px]">Phụ trách tuyển dụng:</span>
              <span className="font-semibold">{job.directHrContact.name}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Email nhận hồ sơ:</span>
              <a href={`mailto:${job.directHrContact.email}`} className="font-semibold text-teal-700 hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-teal-600" />
                {job.directHrContact.email}
              </a>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Hotline giải đáp:</span>
              <a href={`tel:${job.directHrContact.phone}`} className="font-semibold text-teal-700 hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                {job.directHrContact.phone}
              </a>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Địa chỉ phỏng vấn:</span>
              <span className="font-medium text-slate-600">{job.location}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            Đóng lại
          </button>

          <button
            onClick={() => onApply(job)}
            className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-sm"
          >
            <Send className="w-4 h-4" />
            <span>Nộp hồ sơ ứng tuyển ngay (1-Click)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
