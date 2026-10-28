import React, { useState } from 'react';
import { Industry, Company, Job, IndustryCode } from '../types';
import { 
  Cpu, 
  Truck, 
  TrendingUp, 
  BadgePercent, 
  HeartPulse, 
  Factory, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Users, 
  MapPin, 
  GraduationCap, 
  ExternalLink, 
  Briefcase, 
  ChevronLeft,
  Mail,
  Phone
} from 'lucide-react';

interface IndustryDirectoryProps {
  industries: Industry[];
  companies: Company[];
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  onApplyJob: (job: Job) => void;
  initialSelectedIndustryCode?: IndustryCode | null;
}

export const IndustryDirectory: React.FC<IndustryDirectoryProps> = ({
  industries,
  companies,
  jobs,
  onSelectJob,
  onApplyJob,
  initialSelectedIndustryCode = null,
}) => {
  const [selectedIndustryCode, setSelectedIndustryCode] = useState<IndustryCode | null>(
    initialSelectedIndustryCode
  );
  const [subIndustryFilter, setSubIndustryFilter] = useState<string>('all');
  const [onlyAcceptsInterns, setOnlyAcceptsInterns] = useState<boolean>(false);

  // Helper for industry icons
  const getIndustryIcon = (code: IndustryCode) => {
    switch (code) {
      case 'CNKT': return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 'DVVT': return <Truck className="w-6 h-6 text-blue-600" />;
      case 'KDTT': return <TrendingUp className="w-6 h-6 text-amber-600" />;
      case 'TCKT': return <BadgePercent className="w-6 h-6 text-purple-600" />;
      case 'YDGD': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'SXNL': return <Factory className="w-6 h-6 text-cyan-600" />;
      default: return <Briefcase className="w-6 h-6 text-teal-600" />;
    }
  };

  const currentIndustry = industries.find((ind) => ind.code === selectedIndustryCode);

  // Filter companies belonging to selected sector
  const relevantCompanies = companies.filter((comp) => {
    if (comp.industryCode !== selectedIndustryCode) return false;
    if (subIndustryFilter !== 'all' && comp.subIndustry !== subIndustryFilter) return false;
    if (onlyAcceptsInterns && !comp.acceptsInterns) return false;
    return true;
  });

  // Filter jobs for this sector
  const relevantJobs = jobs.filter((job) => job.industryCode === selectedIndustryCode);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* View 1: Main Sector Directory Overview (if none selected) */}
      {!selectedIndustryCode ? (
        <div className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Danh mục Khối ngành & Mạng lưới Doanh nghiệp Tuyển dụng
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Khám phá các khối ngành trọng điểm đang có nhu cầu tuyển dụng sinh viên thực tập và nhân sự trẻ lớn nhất hiện nay. Nhấp vào bất kỳ khối ngành nào dưới đây để xem danh sách chi tiết các công ty, doanh nghiệp đang tuyển dụng trực tiếp.
            </p>
          </div>

          {/* Grid of 6 Main Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const matchingJobsCount = jobs.filter((j) => j.industryCode === industry.code).length;
              const matchingCompaniesCount = companies.filter((c) => c.industryCode === industry.code).length;

              return (
                <div
                  key={industry.code}
                  onClick={() => setSelectedIndustryCode(industry.code)}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-200 p-6 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getIndustryIcon(industry.code)}
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-1 bg-slate-100 text-slate-700 rounded-md">
                        Mã khối: {industry.code}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {industry.name}
                    </h3>
                    
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Sub-industries tags */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Các ngành con tiêu biểu:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {industry.subIndustries.slice(0, 3).map((sub, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                            <span className="truncate">{sub}</span>
                          </li>
                        ))}
                        {industry.subIndustries.length > 3 && (
                          <li className="text-[11px] text-teal-600 font-medium pt-0.5">
                            + {industry.subIndustries.length - 3} ngành con khác...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-teal-700">
                      {matchingCompaniesCount} công ty · {matchingJobsCount} vị trí tuyển
                    </span>
                    <span className="text-slate-400 group-hover:text-teal-700 transition-colors flex items-center gap-1 font-medium">
                      Xem doanh nghiệp
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* View 2: Detailed Company Listing for the Selected Industry */
        <div className="space-y-8 animate-fadeIn">
          {/* Back button & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <button
              onClick={() => {
                setSelectedIndustryCode(null);
                setSubIndustryFilter('all');
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Quay lại tất cả các khối ngành</span>
            </button>

            <span className="text-xs font-mono font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-md">
              Khối ngành: {currentIndustry?.code}
            </span>
          </div>

          {/* Sector Header Information */}
          <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-medium">
                {getIndustryIcon(currentIndustry?.code || 'CNKT')}
                <span>{currentIndustry?.fullName}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Mạng lưới Doanh nghiệp Tuyển dụng khối {currentIndustry?.name}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentIndustry?.description}
              </p>

              {/* Sub-industry Badges */}
              <div className="pt-3 flex flex-wrap gap-2 text-xs">
                <span className="text-slate-400 font-medium py-1">Lọc theo ngành con:</span>
                <button
                  onClick={() => setSubIndustryFilter('all')}
                  className={`px-3 py-1 rounded-lg transition-colors font-medium ${
                    subIndustryFilter === 'all'
                      ? 'bg-teal-500 text-white font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Tất cả ngành con ({currentIndustry?.subIndustries.length})
                </button>
                {currentIndustry?.subIndustries.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSubIndustryFilter(sub)}
                    className={`px-3 py-1 rounded-lg transition-colors font-medium ${
                      subIndustryFilter === sub
                        ? 'bg-teal-500 text-white font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Controls bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Doanh nghiệp đang tuyển nhân viên & thực tập sinh ({relevantCompanies.length})
              </h3>
              <p className="text-xs text-slate-500">
                Tất cả đơn vị đều được kiểm định hồ sơ pháp lý và cam kết không qua môi giới
              </p>
            </div>

            <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:border-teal-400">
              <input
                type="checkbox"
                checked={onlyAcceptsInterns}
                onChange={(e) => setOnlyAcceptsInterns(e.target.checked)}
                className="rounded text-teal-600 focus:ring-teal-500"
              />
              <span>Chỉ hiện công ty có tuyển Thực tập sinh / Chưa có kinh nghiệm</span>
            </label>
          </div>

          {/* Company Cards List */}
          {relevantCompanies.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <Building2 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h4 className="font-bold text-slate-800">Không có công ty nào khớp tiêu chí lọc</h4>
              <p className="text-xs text-slate-500 mt-1">Vui lòng chọn lại bộ lọc hoặc chuyển về Tất cả ngành con.</p>
              <button
                onClick={() => setSubIndustryFilter('all')}
                className="mt-4 px-4 py-1.5 bg-teal-600 text-white rounded-lg text-xs font-medium"
              >
                Xem tất cả công ty khối {currentIndustry?.code}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {relevantCompanies.map((company) => {
                const companyJobs = relevantJobs.filter((j) => j.companyId === company.id);

                return (
                  <div
                    key={company.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-200 p-6 space-y-5"
                  >
                    {/* Company Info Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <img
                          src={company.logo}
                          alt={company.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded-xl object-cover border border-slate-100 bg-slate-50 shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-lg font-bold text-slate-900">{company.name}</h4>
                            {company.verified && (
                              <span className="inline-flex items-center gap-1 text-xs text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded-md">
                                <ShieldCheck className="w-4 h-4 text-teal-600" />
                                Đã xác thực MST: {company.taxCode}
                              </span>
                            )}
                          </div>

                          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              {company.address}
                            </span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-slate-400" />
                              Quy mô: {company.scale}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                            {company.description}
                          </p>
                        </div>
                      </div>

                      {/* Direct HR Contact preview */}
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs sm:w-64 shrink-0 space-y-1.5">
                        <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider">
                          Liên hệ trực tiếp HR:
                        </span>
                        <div className="flex items-center gap-2 text-slate-700">
                          <Mail className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span className="truncate">{company.hrEmail}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{company.hrPhone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Open Jobs list for this company */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-teal-600" />
                          Vị trí đang tuyển dụng tại doanh nghiệp ({companyJobs.length} vị trí):
                        </span>
                      </div>

                      {companyJobs.length === 0 ? (
                        <p className="text-xs text-slate-400 italic">Đang cập nhật thêm các vị trí tuyển dụng mới...</p>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {companyJobs.map((job) => (
                            <div
                              key={job.id}
                              className="p-3.5 rounded-xl border border-slate-200 hover:border-teal-300 bg-slate-50/50 hover:bg-white transition-colors flex flex-col justify-between"
                            >
                              <div>
                                <h5 
                                  onClick={() => onSelectJob(job)}
                                  className="font-bold text-sm text-slate-900 hover:text-teal-700 cursor-pointer line-clamp-1"
                                >
                                  {job.title}
                                </h5>
                                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px]">
                                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                                    {job.salaryText}
                                  </span>
                                  <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                                    {job.city}
                                  </span>
                                  <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md font-medium">
                                    {job.experienceLevel === 'no_exp' ? 'Không cần kinh nghiệm' : 'Có kinh nghiệm'}
                                  </span>
                                </div>
                              </div>

                              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                                <button
                                  onClick={() => onSelectJob(job)}
                                  className="text-xs font-medium text-slate-600 hover:text-teal-700 transition-colors"
                                >
                                  Chi tiết tin
                                </button>
                                <button
                                  onClick={() => onApplyJob(job)}
                                  className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-xs font-semibold transition-colors"
                                >
                                  Nộp hồ sơ ngay
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
