import React, { useState } from 'react';
import { Job, ExperienceLevel, JobType } from '../types';
import { 
  Building2, 
  MapPin, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  GraduationCap, 
  Bookmark, 
  Check, 
  Sparkles, 
  Flame, 
  Send, 
  ChevronRight,
  Filter,
  RotateCcw
} from 'lucide-react';

interface JobListingsProps {
  jobs: Job[];
  savedJobIds: string[];
  onToggleSaveJob: (jobId: string) => void;
  onSelectJob: (job: Job) => void;
  onApplyJob: (job: Job) => void;
  // External filter states
  activeExpTab: 'all' | 'no_exp' | 'has_exp';
  setActiveExpTab: (tab: 'all' | 'no_exp' | 'has_exp') => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (ind: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const JobListings: React.FC<JobListingsProps> = ({
  jobs,
  savedJobIds,
  onToggleSaveJob,
  onSelectJob,
  onApplyJob,
  activeExpTab,
  setActiveExpTab,
  selectedCity,
  setSelectedCity,
  selectedIndustry,
  setSelectedIndustry,
  searchTerm,
  setSearchTerm,
}) => {
  const [selectedJobType, setSelectedJobType] = useState<string>('all');
  const [selectedSalaryMin, setSelectedSalaryMin] = useState<number>(0);
  const [onlyTraining, setOnlyTraining] = useState<boolean>(false);

  // Filter logic
  const filteredJobs = jobs.filter((job) => {
    // Search keyword
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.companyName.toLowerCase().includes(q);
      const matchSub = job.subIndustry.toLowerCase().includes(q);
      if (!matchTitle && !matchCompany && !matchSub) return false;
    }

    // City
    if (selectedCity !== 'all' && job.city !== selectedCity && job.city !== 'Toàn quốc') {
      return false;
    }

    // Industry
    if (selectedIndustry !== 'all' && job.industryCode !== selectedIndustry) {
      return false;
    }

    // Experience Tab
    if (activeExpTab === 'no_exp') {
      if (job.experienceLevel !== 'no_exp') return false;
    } else if (activeExpTab === 'has_exp') {
      if (job.experienceLevel === 'no_exp') return false;
    }

    // Job Type
    if (selectedJobType !== 'all' && job.jobType !== selectedJobType) {
      return false;
    }

    // Minimum Salary
    if (selectedSalaryMin > 0 && job.salaryMax < selectedSalaryMin) {
      return false;
    }

    // Training filter
    if (onlyTraining && !job.trainingProvided) {
      return false;
    }

    return true;
  });

  const handleResetFilters = () => {
    setActiveExpTab('all');
    setSelectedCity('all');
    setSelectedIndustry('all');
    setSelectedJobType('all');
    setSelectedSalaryMin(0);
    setOnlyTraining(false);
    setSearchTerm('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Top Filter Bar: Distinct Tab Section for Experience */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Danh sách Việc làm & Thực tập sinh đã xác thực
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Kết nối trực tiếp {filteredJobs.length} vị trí tuyển dụng minh bạch, không thu phí môi giới
            </p>
          </div>

          {/* Reset Filters button */}
          {(activeExpTab !== 'all' || selectedCity !== 'all' || selectedIndustry !== 'all' || selectedJobType !== 'all' || selectedSalaryMin > 0 || onlyTraining || searchTerm) && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-medium text-teal-700 hover:text-teal-800 flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 bg-teal-50 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>

        {/* Distinct Segmented Tabs for Experience Level (As requested by user: 'Có từng mục riêng cho những công việc có hoặc ko có kinh nghiệm') */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveExpTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeExpTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất cả cơ hội việc làm ({jobs.length})
          </button>

          <button
            onClick={() => setActiveExpTab('no_exp')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeExpTab === 'no_exp'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-teal-800 bg-teal-50 hover:bg-teal-100'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Mục riêng: Không yêu cầu kinh nghiệm / Đào tạo từ đầu ({jobs.filter(j => j.experienceLevel === 'no_exp').length})</span>
          </button>

          <button
            onClick={() => setActiveExpTab('has_exp')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeExpTab === 'has_exp'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mục riêng: Đã có kinh nghiệm (Junior / Mid / Senior) ({jobs.filter(j => j.experienceLevel !== 'no_exp').length})
          </button>
        </div>

        {/* Secondary Sub-filters: Formality / Job Type, Minimum Salary, Training */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-700">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium text-slate-500">Hình thức:</span>
            <select
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-hidden focus:border-teal-500"
            >
              <option value="all">Tất cả hình thức</option>
              <option value="full_time">Toàn thời gian (Full-time)</option>
              <option value="part_time">Bán thời gian (Part-time xoay ca)</option>
              <option value="internship">Thực tập sinh (Internship)</option>
              <option value="long_term">Làm việc lâu dài (Chính thức)</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="font-medium text-slate-500">Mức lương tối thiểu:</span>
            <select
              value={selectedSalaryMin}
              onChange={(e) => setSelectedSalaryMin(Number(e.target.value))}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-hidden focus:border-teal-500"
            >
              <option value={0}>Tất cả mức lương</option>
              <option value={6}>Từ 6 triệu / tháng trở lên</option>
              <option value={9}>Từ 9 triệu / tháng trở lên</option>
              <option value={12}>Từ 12 triệu / tháng trở lên</option>
              <option value={15}>Từ 15 triệu / tháng trở lên</option>
            </select>
          </div>

          <label className="flex items-center gap-2 cursor-pointer bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:border-teal-400 transition-colors">
            <input
              type="checkbox"
              checked={onlyTraining}
              onChange={(e) => setOnlyTraining(e.target.checked)}
              className="rounded text-teal-600 focus:ring-teal-500"
            />
            <span className="font-medium">Chỉ hiện tin có Đào tạo có lương từ đầu</span>
          </label>
        </div>
      </div>

      {/* Job Card Grid */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
            <Building2 className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Không tìm thấy việc làm phù hợp</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
            Hãy thử điều chỉnh bộ lọc tìm kiếm, xóa bớt điều kiện mức lương hoặc chọn sang khối ngành khác để khám phá thêm cơ hội.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-5 px-4 py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold hover:bg-teal-700 transition-colors"
          >
            Xem toàn bộ việc làm đang tuyển
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredJobs.map((job) => {
            const isSaved = savedJobIds.includes(job.id);
            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Company Logo, Verification, and Bookmark */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.companyLogo}
                        alt={job.companyName}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-xl object-cover border border-slate-100 bg-slate-50 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-medium text-xs text-slate-700">{job.companyName}</span>
                          {job.verifiedCompany && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-teal-700 font-semibold bg-teal-50 px-1.5 py-0.5 rounded-sm">
                              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                              Đã xác thực MST
                            </span>
                          )}
                        </div>
                        <div className="text-slate-400 text-[11px] mt-0.5 flex items-center gap-1.5">
                          <span>{job.subIndustry}</span>
                          <span>·</span>
                          <span>{job.postedDate}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleSaveJob(job.id)}
                      className={`p-2 rounded-lg transition-colors shrink-0 ${
                        isSaved
                          ? 'text-teal-600 bg-teal-50'
                          : 'text-slate-400 hover:text-teal-600 hover:bg-slate-50'
                      }`}
                      title={isSaved ? 'Bỏ lưu việc làm' : 'Lưu công việc này'}
                      aria-label="Lưu công việc"
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Job Title */}
                  <h3 
                    onClick={() => onSelectJob(job)}
                    className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors cursor-pointer line-clamp-2 leading-snug"
                  >
                    {job.title}
                  </h3>

                  {/* Highlights Bar */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    {/* Salary */}
                    <div className="font-bold text-teal-700 bg-teal-50/80 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>{job.salaryText}</span>
                    </div>

                    {/* Location */}
                    <div className="text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.city}</span>
                    </div>

                    {/* Experience Label */}
                    <div className={`px-2.5 py-1 rounded-md font-medium flex items-center gap-1 ${
                      job.experienceLevel === 'no_exp'
                        ? 'bg-amber-50 text-amber-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[200px]">{job.experienceLabel}</span>
                    </div>
                  </div>

                  {/* Key Highlights list */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    {job.trainingProvided && (
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Được đào tạo có lương từ đầu, Mentor 1-kèm-1</span>
                      </div>
                    )}
                    {job.noFeeCommitment && (
                      <div className="flex items-center gap-1.5 text-teal-700 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>Cam kết 100% không thu phí tuyển dụng hay đặt cọc</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Action Buttons */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectJob(job)}
                    className="text-xs font-semibold text-slate-600 hover:text-teal-700 transition-colors flex items-center gap-1"
                  >
                    <span>Xem chi tiết</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onApplyJob(job)}
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Ứng tuyển nhanh (1-Click)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
