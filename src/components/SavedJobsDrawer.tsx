import React from 'react';
import { Job } from '../types';
import { 
  X, 
  Bookmark, 
  Trash2, 
  Building2, 
  MapPin, 
  DollarSign, 
  ChevronRight, 
  Send,
  Briefcase
} from 'lucide-react';

interface SavedJobsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedJobs: Job[];
  onRemoveSavedJob: (jobId: string) => void;
  onSelectJob: (job: Job) => void;
  onApplyJob: (job: Job) => void;
}

export const SavedJobsDrawer: React.FC<SavedJobsDrawerProps> = ({
  isOpen,
  onClose,
  savedJobs,
  onRemoveSavedJob,
  onSelectJob,
  onApplyJob,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Việc làm đã lưu</h3>
              <p className="text-xs text-slate-500">{savedJobs.length} cơ hội đã đánh dấu</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Saved Jobs List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedJobs.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Bookmark className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">Chưa có công việc nào được lưu</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Khi duyệt các tin tuyển dụng, hãy nhấn vào biểu tượng dấu trang để lưu lại và ứng tuyển bất cứ lúc nào.
              </p>
            </div>
          ) : (
            savedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-slate-200 p-4 space-y-3 hover:border-teal-300 transition-colors shadow-2xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={job.companyLogo}
                      alt={job.companyName}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-lg object-cover border border-slate-100 shrink-0"
                    />
                    <div>
                      <h4 
                        onClick={() => { onSelectJob(job); onClose(); }}
                        className="font-bold text-xs text-slate-900 hover:text-teal-700 cursor-pointer line-clamp-1"
                      >
                        {job.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{job.companyName}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveSavedJob(job.id)}
                    className="text-slate-400 hover:text-rose-600 p-1"
                    title="Xóa khỏi danh sách lưu"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px]">
                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-sm">
                    {job.salaryText}
                  </span>
                  <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
                    {job.city}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => { onSelectJob(job); onClose(); }}
                    className="text-[11px] font-medium text-slate-600 hover:text-teal-700"
                  >
                    Chi tiết
                  </button>
                  <button
                    onClick={() => { onApplyJob(job); onClose(); }}
                    className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-[11px] font-semibold flex items-center gap-1"
                  >
                    <Send className="w-3 h-3" />
                    <span>Ứng tuyển ngay</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
          <p className="text-[11px] text-slate-500">
            Dữ liệu lưu tự động trên thiết bị của bạn
          </p>
        </div>

      </div>
    </div>
  );
};
