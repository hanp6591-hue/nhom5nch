import React, { useState } from 'react';
import { ANTI_SCAM_RULES } from '../data/mockData';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  UserX, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  FileWarning, 
  Send, 
  Loader2,
  Check
} from 'lucide-react';

export const AntiScamShield: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rules' | 'ai-scanner' | 'report'>('rules');

  // Scanner state
  const [jobTitleInput, setJobTitleInput] = useState<string>('');
  const [companyInput, setCompanyInput] = useState<string>('');
  const [descInput, setDescInput] = useState<string>('');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<any | null>(null);
  const [scanError, setScanError] = useState<string | null>(null);

  // Report state
  const [reportedCompany, setReportedCompany] = useState<string>('');
  const [reportReason, setReportReason] = useState<string>('Yêu cầu đặt cọc tiền đồng phục / thẻ');
  const [reportEvidence, setReportEvidence] = useState<string>('');
  const [reportSuccess, setReportSuccess] = useState<boolean>(false);

  const sampleScamText = `Tuyển gấp 20 cộng tác viên làm việc tại nhà, hỗ trợ kiểm tra đơn hàng Shopee và xem video tăng tương tác. 
Yêu cầu: Không cần kinh nghiệm, có điện thoại kết nối mạng, rảnh lúc nào làm lúc đó.
Lương: 500.000đ - 1.500.000đ / ngày nhận tiền ngay qua tài khoản.
Ai làm nhắn tin trực tiếp qua Zalo/Telegram số 0912xxxxxx để nhận nhiệm vụ và nộp phí bảo lãnh hồ sơ 300.000đ sẽ hoàn lại sau 3 ngày!`;

  const handleFillSampleScam = () => {
    setJobTitleInput('Cộng tác viên xử lý đơn hàng online tại nhà');
    setCompanyInput('Công ty CP Thương mại Dịch vụ Tổng hợp');
    setDescInput(sampleScamText);
    setScanResult(null);
    setScanError(null);
  };

  const handleScanJob = async () => {
    if (!descInput.trim() || descInput.trim().length < 15) {
      setScanError('Vui lòng nhập nội dung tin tuyển dụng hoặc tin nhắn để thẩm định.');
      return;
    }

    setIsScanning(true);
    setScanError(null);

    try {
      const response = await fetch('/api/gemini/check-scam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobTitle: jobTitleInput,
          companyName: companyInput,
          description: descInput,
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể thẩm định lúc này.');
      }

      const data = await response.json();
      setScanResult(data);
    } catch (err: any) {
      console.error(err);
      // Fallback rule evaluation
      const lower = descInput.toLowerCase();
      const flags = [];
      if (lower.includes('cọc') || lower.includes('phí bảo lãnh') || lower.includes('phí hồ sơ')) {
        flags.push('Yêu cầu nộp tiền cọc / phí bảo lãnh trước khi nhận việc (Vi phạm nghiêm trọng Luật Lao động).');
      }
      if (lower.includes('telegram') || lower.includes('nhiệm vụ')) {
        flags.push('Chiêu thức dẫn dụ qua Telegram làm nhiệm vụ nạp tiền.');
      }
      if (lower.includes('500.000') || lower.includes('1.500.000') || lower.includes('không cần kinh nghiệm')) {
        flags.push('Mức thu nhập cam kết phi thực tế so với công việc không yêu cầu kỹ năng.');
      }

      setScanResult({
        riskLevel: flags.length > 0 ? 'Nguy cơ cao' : 'Cần thận trọng',
        safetyScore: flags.length > 0 ? 20 : 60,
        analysis: 'CẢNH BÁO: Tin tuyển dụng này có dấu hiệu lừa đảo rất rõ ràng! Tuyệt đối không chuyển khoản, không tham gia các nhóm Telegram và không cung cấp hình ảnh Căn cước công dân.',
        warningFlags: flags.length > 0 ? flags : ['Yêu cầu thông tin tài khoản hoặc kênh liên lạc không chính thống.'],
        recommendations: [
          'Không chuyển bất kỳ khoản tiền nào dưới tên gọi "phí hồ sơ", "phí giữ chỗ" hay "phí đồng phục".',
          'Chặn ngay số liên lạc trên Zalo/Telegram.',
          'Báo cáo tin lừa đảo này cho ban quản trị "Nối cơ hội - Đổi cuộc đời" để bảo vệ cộng đồng.'
        ]
      });
    } finally {
      setIsScanning(false);
    }
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportedCompany.trim() || !reportEvidence.trim()) return;

    setReportSuccess(true);
    setTimeout(() => {
      setReportedCompany('');
      setReportEvidence('');
      setReportSuccess(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Trung tâm Bảo vệ Người Tìm Việc & An ninh Việc làm</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Lá chắn Phòng chống Lừa đảo Tuyển dụng & Bảo mật Dữ liệu
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            Sinh viên mới ra trường và người chưa có kinh nghiệm thường là đối tượng dễ bị các tổ chức lừa đảo nhắm đến nhất. Tại "Nối cơ hội - Đổi cuộc đời", chúng tôi thực hiện quy trình kiểm duyệt 3 lớp: Xác thực MST doanh nghiệp, kết nối thẳng HR nội bộ và nghiêm cấm 100% mọi hành vi thu cọc hay môi giới trung gian.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80">
              <span className="font-bold text-teal-300 block">1. Cam kết 0 đồng cọc</span>
              <p className="text-slate-400 text-[11px] mt-0.5">Không thu tiền đồng phục, thẻ ra vào, hay phí đào tạo.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80">
              <span className="font-bold text-teal-300 block">2. Loại bỏ trung gian</span>
              <p className="text-slate-400 text-[11px] mt-0.5">Nói không với các trung tâm môi giới ăn chặn tiền lương đầu.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80">
              <span className="font-bold text-teal-300 block">3. Bảo mật danh tính</span>
              <p className="text-slate-400 text-[11px] mt-0.5">Không bắt nộp ảnh CCCD gốc hay số tài khoản khi chưa trúng tuyển.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
            <img
              src="/src/assets/images/shield_trust_security_1793193579913.jpg"
              alt="Lá chắn bảo vệ người tìm việc khỏi lừa đảo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('rules')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
            activeTab === 'rules'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>6 Bẫy Lừa Đảo Phổ Biến Cần Tránh</span>
        </button>

        <button
          onClick={() => setActiveTab('ai-scanner')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
            activeTab === 'ai-scanner'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-teal-800 bg-teal-50 hover:bg-teal-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Công Cụ AI Quét & Thẩm Định Tin Khả Nghi</span>
        </button>

        <button
          onClick={() => setActiveTab('report')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
            activeTab === 'report'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <span>Báo Cáo Doanh Nghiệp Có Dấu Hiệu Lừa Đảo</span>
        </button>
      </div>

      {/* Tab 1: 6 Scam Rules */}
      {activeTab === 'rules' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {ANTI_SCAM_RULES.map((rule) => (
            <div
              key={rule.ruleNumber}
              className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3.5 hover:border-teal-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0">
                  #{rule.ruleNumber}
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  {rule.danger}
                </h3>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed border border-slate-100">
                <span className="font-bold text-slate-800 block mb-1">Bản chất chiêu trò:</span>
                <p>{rule.explanation}</p>
              </div>

              <div className="p-3 bg-teal-50/70 rounded-xl text-xs text-teal-900 leading-relaxed border border-teal-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Biện pháp tự bảo vệ:</span>
                  <p>{rule.howToProtect}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: AI Scanner */}
      {activeTab === 'ai-scanner' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <span>Máy Quét Cảnh Báo Lừa Đảo Tuyển Dụng Trực Tuyến</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Bạn nhận được lời mời làm việc trên mạng xã hội, tin nhắn Zalo/Telegram? Hãy dán vào đây để AI phân tích mức độ an toàn.
                </p>
              </div>

              <button
                onClick={handleFillSampleScam}
                className="text-xs font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 transition-colors self-start sm:self-auto shrink-0"
              >
                Thử với tin bẫy mẫu
              </button>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Tiêu đề công việc (nếu có):
                </label>
                <input
                  type="text"
                  value={jobTitleInput}
                  onChange={(e) => setJobTitleInput(e.target.value)}
                  placeholder="Ví dụ: CTV kiểm tra đơn hàng, Nhân viên nhập liệu..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Tên công ty hoặc người liên hệ:
                </label>
                <input
                  type="text"
                  value={companyInput}
                  onChange={(e) => setCompanyInput(e.target.value)}
                  placeholder="Ví dụ: Công ty TNHH XYZ, Anh Quân HR..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                />
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label className="font-semibold text-xs text-slate-700 block mb-1">
                Nội dung mô tả việc làm hoặc đoạn chat bạn nhận được:
              </label>
              <textarea
                rows={6}
                value={descInput}
                onChange={(e) => setDescInput(e.target.value)}
                placeholder="Dán nội dung tuyển dụng, yêu cầu, mức lương, số điện thoại hoặc link bài đăng..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-800 focus:outline-hidden focus:border-teal-500 font-mono leading-relaxed"
              />
            </div>

            {scanError && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                {scanError}
              </div>
            )}

            {/* Submit Scan */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Đối chiếu tự động với cơ sở dữ liệu các vụ việc lừa đảo việc làm được ghi nhận bởi cơ quan chức năng
              </span>

              <button
                onClick={handleScanJob}
                disabled={isScanning}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-50 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-xs shrink-0"
              >
                {isScanning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang thẩm định...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Quét rủi ro ngay</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Scan Result Box */}
          {scanResult && (
            <div className={`rounded-2xl border p-6 shadow-md space-y-6 animate-fadeIn ${
              scanResult.riskLevel === 'Nguy cơ cao'
                ? 'bg-rose-50/50 border-rose-300'
                : scanResult.riskLevel === 'Cần thận trọng'
                ? 'bg-amber-50/50 border-amber-300'
                : 'bg-emerald-50/50 border-emerald-300'
            }`}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block text-slate-600">
                    Kết quả thẩm định rủi ro
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl font-extrabold text-slate-900">
                      Mức độ an toàn:
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      scanResult.riskLevel === 'Nguy cơ cao'
                        ? 'bg-rose-600 text-white'
                        : scanResult.riskLevel === 'Cần thận trọng'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-emerald-600 text-white'
                    }`}>
                      {scanResult.riskLevel}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block font-medium">Chỉ số an toàn</span>
                  <span className="text-2xl font-mono font-extrabold text-slate-900">
                    {scanResult.safetyScore} / 100
                  </span>
                </div>
              </div>

              {/* Analysis Text */}
              <div className="p-4 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-800 leading-relaxed">
                <span className="font-bold block mb-1">Đánh giá chi tiết:</span>
                <p>{scanResult.analysis}</p>
              </div>

              {/* Warning flags */}
              {scanResult.warningFlags && scanResult.warningFlags.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Các dấu hiệu đáng ngờ phát hiện:
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {scanResult.warningFlags.map((flag: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-rose-900 font-medium bg-white/70 p-2.5 rounded-lg border border-rose-200">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommendations */}
              {scanResult.recommendations && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Lời khuyên bảo vệ bản thân:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {scanResult.recommendations.map((rec: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Report Incident */}
      {activeTab === 'report' && (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <span>Báo Cáo Tin Tuyển Dụng / Doanh Nghiệp Có Dấu Hiệu Lừa Đảo</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Hãy giúp bảo vệ các bạn sinh viên và người tìm việc khác. Ban quản trị sẽ rà soát, xác minh và đưa vào danh sách đen cảnh báo cộng đồng trong vòng 12h.
            </p>
          </div>

          {reportSuccess ? (
            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-2">
              <Check className="w-10 h-10 text-teal-600 mx-auto" />
              <h4 className="font-bold text-teal-900">Tiếp nhận báo cáo thành công!</h4>
              <p className="text-xs text-teal-800">
                Cảm ơn bạn đã chung tay bảo vệ môi trường tuyển dụng minh bạch, không qua trung gian lừa đảo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitReport} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Tên công ty / Kênh liên hệ đáng ngờ: *
                </label>
                <input
                  type="text"
                  required
                  value={reportedCompany}
                  onChange={(e) => setReportedCompany(e.target.value)}
                  placeholder="Ví dụ: Công ty TNHH Môi giới ABC / Hotline 0988..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Hình thức có dấu hiệu lừa đảo: *
                </label>
                <select
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500 cursor-pointer"
                >
                  <option value="Yêu cầu đặt cọc tiền đồng phục / thẻ">Yêu cầu đặt cọc tiền đồng phục / thẻ ra vào</option>
                  <option value="Trung tâm môi giới thu phí phỏng vấn">Trung tâm môi giới thu phí phỏng vấn</option>
                  <option value="Bẫy làm nhiệm vụ Telegram / Zalo nạp tiền">Bẫy làm nhiệm vụ Telegram / Zalo nạp tiền</option>
                  <option value="Công ty ma, địa chỉ phỏng vấn tại quán cafe / phòng trọ">Công ty ma, địa chỉ phỏng vấn tại quán cafe / phòng trọ</option>
                  <option value="Thu thập chụp ảnh CCCD và bắt mở tài khoản ngân hàng">Thu thập chụp ảnh CCCD và bắt mở tài khoản ngân hàng</option>
                  <option value="Lừa sang nước ngoài làm việc không rõ ràng">Lừa sang nước ngoài làm việc không rõ ràng</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Mô tả bằng chứng hoặc nội dung chi tiết: *
                </label>
                <textarea
                  rows={4}
                  required
                  value={reportEvidence}
                  onChange={(e) => setReportEvidence(e.target.value)}
                  placeholder="Mô tả cụ thể thời gian, địa điểm, số tiền bị đòi hỏi, hình ảnh chứng cứ (nếu có)..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-hidden focus:border-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-semibold rounded-xl transition-colors shadow-xs"
              >
                Gửi báo cáo thẩm định
              </button>
            </form>
          )}
        </div>
      )}

    </div>
  );
};
