import React, { useState } from 'react';
import { Job } from '../types';
import { 
  X, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Upload, 
  Globe, 
  Mail, 
  FileCheck,
  User,
  Phone,
  GraduationCap
} from 'lucide-react';

interface QuickApplyModalProps {
  job: Job | null;
  onClose: () => void;
}

export const QuickApplyModal: React.FC<QuickApplyModalProps> = ({ job, onClose }) => {
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [education, setEducation] = useState<string>('Sinh viên mới tốt nghiệp CĐ/ĐH');
  const [portfolioLink, setPortfolioLink] = useState<string>('');
  const [cvSummary, setCvSummary] = useState<string>('');
  const [noteToHr, setNoteToHr] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string>('');

  if (!job) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setApplicationId(`APP-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5 shadow-2xl animate-fadeIn relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
              Ứng tuyển trực tiếp không qua trung gian
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              {job.title}
            </h3>
            <p className="text-xs text-slate-500">{job.companyName}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Confirmation Success Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border border-teal-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-extrabold text-slate-900">Nộp hồ sơ thành công!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Hồ sơ của bạn đã được chuyển thẳng tới hộp thư của phòng Nhân sự {job.companyName}.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Mã hồ sơ:</span>
                <span className="font-bold text-slate-900">{applicationId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Người tiếp nhận:</span>
                <span className="text-slate-800">{job.directHrContact.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Email HR:</span>
                <span className="text-teal-700">{job.directHrContact.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Thời gian dự kiến phản hồi:</span>
                <span className="text-emerald-700 font-bold">Trong vòng 24 - 48 giờ</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200 text-[11px] text-teal-900 text-left flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                Nhắc nhở an toàn: Doanh nghiệp này cam kết không thu bất kỳ khoản phí nào. Nếu nhận được bất kỳ tin nhắn nào yêu cầu đóng tiền hay làm nhiệm vụ, hãy báo cáo ngay cho chúng tôi!
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-xs rounded-xl transition-colors"
            >
              Hoàn tất & Tiếp tục tìm việc
            </button>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Họ và tên của bạn: *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn An"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Số điện thoại / Zalo liên hệ: *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912 345 678"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Email nhận thông báo kết quả: *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="an.career@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Trình độ / Hiện trạng học vấn:
                </label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                >
                  <option value="Sinh viên mới tốt nghiệp CĐ/ĐH">Sinh viên mới tốt nghiệp CĐ/ĐH</option>
                  <option value="Sinh viên năm 3, năm 4 tìm thực tập">Sinh viên năm 3, năm 4 tìm thực tập</option>
                  <option value="Học sinh THPT / Trường nghề">Học sinh THPT / Trường nghề</option>
                  <option value="Người chưa có kinh nghiệm / Chuyển nghề">Người chưa có kinh nghiệm / Chuyển nghề</option>
                  <option value="Đã có kinh nghiệm làm việc">Đã có kinh nghiệm làm việc</option>
                </select>
              </div>
            </div>

            {/* Portfolio Link (Google Sites, etc.) */}
            <div>
              <label className="font-semibold text-slate-700 block mb-1 flex items-center justify-between">
                <span>Link Portfolio / Website cá nhân (Google Sites, GitHub, Canva):</span>
                <span className="text-teal-700 font-normal">Khuyên dùng cho người chưa có kinh nghiệm</span>
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-teal-600 absolute left-3 top-2.5" />
                <input
                  type="url"
                  value={portfolioLink}
                  onChange={(e) => setPortfolioLink(e.target.value)}
                  placeholder="https://sites.google.com/view/an-tech-portfolio"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500 font-mono text-xs"
                />
              </div>
            </div>

            {/* Upload CV file or note */}
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Tải lên file CV (PDF / Word) hoặc tóm tắt:
              </label>
              <div className="border border-dashed border-slate-300 rounded-xl p-3 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="flex flex-col items-center justify-center gap-1 text-slate-600">
                  <Upload className="w-5 h-5 text-teal-600" />
                  <span className="font-medium">
                    {fileName ? `Đã chọn: ${fileName}` : 'Bấm để tải file CV định dạng PDF / Word từ máy'}
                  </span>
                  <span className="text-[10px] text-slate-400">Dung lượng tối đa 10MB</span>
                </div>
              </div>
            </div>

            {/* Note to HR */}
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Lời nhắn gửi tới phòng Nhân sự:
              </label>
              <textarea
                rows={3}
                value={noteToHr}
                onChange={(e) => setNoteToHr(e.target.value)}
                placeholder="Nêu ngắn gọn lý do bạn phù hợp, tinh thần ham học hỏi và thời điểm có thể bắt đầu đi làm..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-hidden focus:border-teal-500"
              />
            </div>

            {/* Zero-fee notice */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Nộp hồ sơ hoàn toàn miễn phí. Dữ liệu chỉ gửi duy nhất tới HR doanh nghiệp này.</span>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-50 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Đang gửi hồ sơ...' : 'Nộp hồ sơ ngay'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
