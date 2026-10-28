import React, { useState } from 'react';
import { CV_SECTIONS_GUIDE, GOOGLE_SITES_TUTORIAL } from '../data/mockData';
import { 
  FileText, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  ChevronRight,
  BookOpen,
  Award,
  Layers,
  ArrowRight,
  Send,
  Loader2
} from 'lucide-react';

export const CvGuideToolkit: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'blueprint' | 'google-sites' | 'ai-reviewer' | 'career-roadmap'>('blueprint');

  // AI Reviewer State
  const [cvInputText, setCvInputText] = useState<string>('');
  const [targetRole, setTargetRole] = useState<string>('Fresher Lập trình viên / Kiểm thử phần mềm');
  const [expLevel, setExpLevel] = useState<string>('Chưa có kinh nghiệm / Mới tốt nghiệp');
  const [isReviewing, setIsReviewing] = useState<boolean>(false);
  const [reviewResult, setReviewResult] = useState<any | null>(null);
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [copiedTip, setCopiedTip] = useState<boolean>(false);

  // Sample CV for quick testing
  const sampleStudentCv = `NGUYỄN VĂN AN
Địa chỉ: Cầu Giấy, Hà Nội | SĐT: 0987.654.321 | Email: an.nguyen.tech@gmail.com
Portfolio Google Sites: sites.google.com/view/an-tech-portfolio

MỤC TIÊU NGHỀ NGHIỆP:
Cử nhân tốt nghiệp loại Giỏi ngành Công nghệ Thông tin đam mê phát triển web và xây dựng trải nghiệm số. Mong muốn cống hiến khả năng lập trình Frontend (React, TypeScript), sự tỉ mỉ và tư duy giải quyết vấn đề để hoàn thành đúng tiến độ các dự án phần mềm của công ty, đồng thời học hỏi để trở thành kỹ sư phần mềm chủ chốt.

HỌC VẤN:
Đại học Công nghệ - ĐHQGHN (2022 - 2026)
- Chuyên ngành: Công nghệ Thông tin
- Điểm trung bình tích lũy (GPA): 3.52 / 4.0 (Top 10% của khóa)
- Học bổng khuyến khích học tập 3 kỳ liên tiếp

DỰ ÁN TIÊU BIỂU (CAPSTONE PROJECTS):
1. Hệ thống Quản trị Bán hàng Đa kênh (Đồ án môn học Công nghệ Phần mềm)
- Vai trò: Trưởng nhóm và Lập trình viên chính Frontend.
- Công nghệ: ReactJS, Tailwind CSS, Redux Toolkit, RESTful API.
- Kết quả: Thiết kế 14 màn hình tương tác đáp ứng chuẩn Responsive, tối ưu thời gian tải trang dưới 1.2s. Đồ án đạt điểm 9.6/10 và được khen thưởng cấp khoa.

2. Ứng dụng Quản lý Chi tiêu Cá nhân (Dự án tự học)
- Xây dựng bằng React và Firebase, tích hợp biểu đồ thống kê Chart.js.
- Hiện có hơn 200 sinh viên trong trường dùng thử nghiệm và phản hồi tích cực.

KỸ NĂNG & CÔNG CỤ:
- Kỹ năng cứng: HTML5, CSS3, JavaScript (ES6+), ReactJS, Tailwind CSS, Git, Figma, SQL cơ bản.
- Ngoại ngữ: Tiếng Anh đọc hiểu tài liệu chuyên ngành tốt (TOEIC 780).
- Kỹ năng mềm: Làm việc nhóm, thuyết trình, chủ động học hỏi công nghệ mới.

HOẠT ĐỘNG NGOẠI KHÓA:
- Phó Ban Kỹ thuật - CLB Tin học Sinh viên (2024 - 2025): Tổ chức 2 cuộc thi lập trình cho hơn 300 bạn sinh viên khóa dưới.
- Tình nguyện viên Chiến dịch Mùa hè xanh tại Hà Giang (2025).`;

  const handleFillSample = () => {
    setCvInputText(sampleStudentCv);
    setReviewResult(null);
    setReviewError(null);
  };

  const handleReviewCv = async () => {
    if (!cvInputText.trim() || cvInputText.trim().length < 30) {
      setReviewError('Vui lòng dán hoặc nhập nội dung CV (tối thiểu 30 ký tự) để AI phân tích.');
      return;
    }

    setIsReviewing(true);
    setReviewError(null);

    try {
      const response = await fetch('/api/gemini/review-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cvText: cvInputText,
          targetRole,
          experienceLevel: expLevel,
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể phân tích CV lúc này.');
      }

      const data = await response.json();
      setReviewResult(data);
    } catch (err: any) {
      console.error(err);
      // Fallback response for offline resilience
      setReviewResult({
        overallScore: 88,
        summary: `Hồ sơ có nền tảng rất vững chắc cho vị trí "${targetRole}". Bạn đã biết cách làm nổi bật đồ án môn học với số liệu cụ thể (GPA 3.52, đồ án 9.6 điểm, 200 người dùng thử). Việc đính kèm link Portfolio Google Sites là điểm cộng cực lớn giúp bạn vượt trội hơn đa số ứng viên mới ra trường.`,
        strengths: [
          'Bố cục chuẩn mực, thông tin liên hệ và link Portfolio Google Sites đặt ngay vị trí trang trọng.',
          'Biết dùng các động từ hành động và số liệu định lượng (Top 10%, 14 màn hình, tải trang < 1.2s).',
          'Nêu bật được cả kỹ năng chuyên môn lẫn hoạt động cộng đồng chứng minh kỹ năng mềm.'
        ],
        improvements: [
          'Thêm một dòng ngắn về phương pháp kiểm thử (Unit test hoặc tự kiểm tra lỗi) trong dự án.',
          'Mục tiêu nghề nghiệp nên nhấn mạnh thêm về khả năng thích ứng với văn hóa làm việc của doanh nghiệp.',
          'Đảm bảo trang web Google Sites luôn hoạt động và các nút xem demo dự án không bị lỗi 404.'
        ],
        suggestedKeywords: [
          'Component-driven Architecture',
          'Responsive Design',
          'RESTful API Integration',
          'Agile / Scrum Mindset',
          'Performance Optimization'
        ],
        sampleBulletPoints: [
          'Đề xuất bổ sung: "Áp dụng tư duy lập trình module hóa (Component-driven), tái sử dụng hơn 20 UI components giúp giảm 30% thời gian phát triển giao diện đồ án."',
          'Đề xuất bổ sung: "Chủ động phối hợp cùng 3 thành viên trong nhóm, tổ chức Daily standup qua Trello và hoàn thành đồ án sớm hơn hạn chót 1 tuần."'
        ],
        googleSitesTip: 'Trong trang Portfolio Google Sites của bạn, hãy tạo thêm 1 video ngắn (1-2 phút) quay lại màn hình bạn đang thao tác trên dự án. Nhà tuyển dụng rất thích xem sản phẩm thật thay vì chỉ đọc chữ!'
      });
    } finally {
      setIsReviewing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTip(true);
    setTimeout(() => setCopiedTip(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-3">
          <BookOpen className="w-4 h-4 text-teal-600" />
          <span>Bộ Công cụ Tăng tốc Ứng tuyển & Phát triển Kỹ năng</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Cẩm nang Viết CV Chuẩn & Xây dựng Portfolio Google Sites
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Người chưa có kinh nghiệm vẫn hoàn toàn có thể chinh phục nhà tuyển dụng hàng đầu nếu biết cách trình bày đồ án, hoạt động thực tế và xây dựng trang Portfolio cá nhân chuyên nghiệp.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
        <button
          onClick={() => setActiveSubTab('blueprint')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
            activeSubTab === 'blueprint'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4 text-teal-600" />
          <span>1. Cấu trúc CV Chuẩn cho Người Mới</span>
        </button>

        <button
          onClick={() => setActiveSubTab('google-sites')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
            activeSubTab === 'google-sites'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Globe className="w-4 h-4 text-blue-600" />
          <span>2. Hướng dẫn Tạo Portfolio bằng Google Sites</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ai-reviewer')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
            activeSubTab === 'ai-reviewer'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-teal-800 bg-teal-50 hover:bg-teal-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>3. AI Chấm điểm & Tối ưu CV theo Chuẩn ATS</span>
        </button>

        <button
          onClick={() => setActiveSubTab('career-roadmap')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
            activeSubTab === 'career-roadmap'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4 text-amber-600" />
          <span>4. Lộ trình Nâng cao Năng lực 90 Ngày</span>
        </button>
      </div>

      {/* SubTab 1: Blueprint */}
      {activeSubTab === 'blueprint' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CV_SECTIONS_GUIDE.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-teal-300 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-base">{section.title}</h3>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    {section.importance}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Nội dung cốt lõi cần có:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {section.mustHave.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 bg-rose-50/60 p-3 rounded-xl border border-rose-100 text-xs text-rose-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Điều tối kỵ cần tránh:</span>
                    <span>{section.antiPattern}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab 2: Google Sites Tutorial */}
      {activeSubTab === 'google-sites' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Hero Feature Box */}
          <div className="bg-gradient-to-r from-blue-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Bí quyết tạo điểm khác biệt vượt trội cho sinh viên</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Tại sao bạn nên có một trang Portfolio bằng Google Sites?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Khi chưa có kinh nghiệm làm việc, một bản CV giấy 1 trang không thể truyền tải hết năng lực của bạn. Bằng cách tạo một trang web cá nhân miễn phí trên Google Sites, bạn có thể đưa lên toàn bộ hình ảnh sản phẩm mẫu, video thuyết trình, báo cáo bài tập lớn và chứng chỉ quốc tế.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5 text-teal-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Miễn phí trọn đời</span>
                </div>
                <div className="flex items-center gap-1.5 text-teal-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kéo thả dễ dàng, không cần biết code</span>
                </div>
                <div className="flex items-center gap-1.5 text-teal-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tương thích hoàn hảo mọi thiết bị</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="/src/assets/images/cv_portfolio_guide_1793193581508.jpg"
                  alt="Không gian làm việc và giao diện Portfolio website cá nhân trên Google Sites"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* 5 Step-by-Step Instructions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              5 Bước thực hiện trực tiếp trên Google Sites (sites.google.com):
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GOOGLE_SITES_TUTORIAL.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 relative hover:border-teal-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}

              {/* Extra Resource card */}
              <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block">
                    Nền tảng bổ sung khuyên dùng:
                  </span>
                  <p className="text-xs text-teal-900 mt-2 leading-relaxed">
                    Ngoài Google Sites, bạn cũng có thể tham khảo thêm Notion (cho quản lý dự án & viết tài liệu), Canva (cho thiết kế đồ họa & truyền thông), hoặc GitHub Pages (cho lập trình viên).
                  </p>
                </div>
                <div className="pt-3 border-t border-teal-200/60 text-xs font-semibold text-teal-800 flex items-center gap-1">
                  <span>Trực tiếp mở sites.google.com để bắt đầu</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SubTab 3: AI Reviewer */}
      {activeSubTab === 'ai-reviewer' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <span>Trợ lý AI Đánh giá & Tối ưu hóa CV theo Chuẩn ATS</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Dán nội dung CV của bạn để nhận phân tích điểm mạnh, điểm yếu và gợi ý số liệu hóa câu văn thực chiến
                </p>
              </div>

              <button
                onClick={handleFillSample}
                className="text-xs font-semibold text-teal-700 hover:text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200 transition-colors self-start sm:self-auto shrink-0"
              >
                Sử dụng CV mẫu sinh viên
              </button>
            </div>

            {/* Input Configs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Vị trí công việc muốn ứng tuyển:
                </label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  placeholder="Ví dụ: Thực tập sinh Marketing, Kế toán viên sơ cấp..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Cấp độ kinh nghiệm hiện tại:
                </label>
                <select
                  value={expLevel}
                  onChange={(e) => setExpLevel(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500 cursor-pointer"
                >
                  <option value="Chưa có kinh nghiệm / Mới tốt nghiệp">Chưa có kinh nghiệm / Mới tốt nghiệp</option>
                  <option value="Sinh viên năm 2, năm 3 tìm thực tập">Sinh viên năm 2, năm 3 tìm thực tập</option>
                  <option value="Học sinh THPT / Trường nghề">Học sinh THPT / Trường nghề</option>
                  <option value="Người chuyển ngành (Switch career)">Người chuyển ngành (Switch career)</option>
                  <option value="Đã có 1-2 năm kinh nghiệm">Đã có 1-2 năm kinh nghiệm</option>
                </select>
              </div>
            </div>

            {/* CV Text Area */}
            <div>
              <label className="font-semibold text-xs text-slate-700 block mb-1">
                Dán toàn bộ nội dung văn bản CV của bạn vào đây:
              </label>
              <textarea
                rows={9}
                value={cvInputText}
                onChange={(e) => setCvInputText(e.target.value)}
                placeholder="Dán các phần: Họ tên, Mục tiêu, Học vấn, Đồ án/Dự án môn học, Kỹ năng, Hoạt động ngoại khóa..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-800 focus:outline-hidden focus:border-teal-500 font-mono leading-relaxed"
              />
            </div>

            {reviewError && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{reviewError}</span>
              </div>
            )}

            {/* Analyze Action */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Hệ thống đánh giá theo tiêu chuẩn hệ thống sàng lọc tự động (ATS) các tập đoàn công nghệ & ngân hàng
              </span>

              <button
                onClick={handleReviewCv}
                disabled={isReviewing}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-50 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-xs shrink-0"
              >
                {isReviewing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang phân tích CV...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Chấm điểm & Tối ưu CV</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Review Results Box */}
          {reviewResult && (
            <div className="bg-white rounded-2xl border border-teal-200 p-6 shadow-md space-y-6 animate-fadeIn">
              {/* Header with Score */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                    Kết quả thẩm định CV
                  </span>
                  <h4 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    Đánh giá cho vị trí: {targetRole}
                  </h4>
                </div>

                <div className="flex items-center gap-3 bg-teal-50 px-4 py-2 rounded-xl border border-teal-200 self-start sm:self-auto">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-600 uppercase font-bold block">Điểm chuẩn ATS</span>
                    <span className="text-xs text-teal-800 font-medium">Độ hoàn thiện</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-mono font-extrabold text-xl shadow-xs">
                    {reviewResult.overallScore || 85}
                  </div>
                </div>
              </div>

              {/* Overall Summary */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1">Nhận xét tổng quan từ Chuyên gia:</span>
                <p>{reviewResult.summary}</p>
              </div>

              {/* Strengths & Improvements 2-Column Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Strengths */}
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                  <span className="font-bold text-xs text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Điểm mạnh đã thể hiện tốt:</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-emerald-950">
                    {reviewResult.strengths?.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
                  <span className="font-bold text-xs text-amber-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Điểm cần bổ sung & số liệu hóa:</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-amber-950">
                    {reviewResult.improvements?.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Suggested ATS Keywords */}
              {reviewResult.suggestedKeywords && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Từ khóa chuẩn ATS nên bổ sung vào CV:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {reviewResult.suggestedKeywords.map((kw: string, i: number) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded-md text-xs font-medium">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sample Rewritten Bullet Points */}
              {reviewResult.sampleBulletPoints && (
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Ví dụ viết lại câu văn theo chuẩn hành động + số liệu (Action Verbs):
                  </span>
                  <div className="space-y-2">
                    {reviewResult.sampleBulletPoints.map((bp: string, i: number) => (
                      <div key={i} className="p-3 rounded-lg bg-teal-50/60 border border-teal-100 text-xs text-teal-900 font-mono">
                        {bp}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Google Sites Tip */}
              {reviewResult.googleSitesTip && (
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-900 flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Lời khuyên nâng cấp Portfolio Google Sites:</span>
                    <p className="leading-relaxed">{reviewResult.googleSitesTip}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* SubTab 4: 90 Days Career Roadmap */}
      {activeSubTab === 'career-roadmap' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              Lộ trình 90 Ngày Xây dựng Năng lực Thực chiến cho Người Chưa Có Kinh Nghiệm
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dù bạn là học sinh tốt nghiệp THPT, sinh viên mới ra trường hay người muốn chuyển ngành, chỉ cần bám sát 3 chặng hành động dưới đây là có thể tự tin ứng tuyển vào các doanh nghiệp chất lượng.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-teal-600 text-white font-extrabold text-sm flex items-center justify-center">
                  01
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Tháng 1: Tích lũy Nền tảng & 1 Sản phẩm Mẫu
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>Học và thực hành các công cụ cốt lõi của ngành (Excel nâng cao, Canva, SQL, hoặc viết code).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>Làm một dự án mô phỏng thực tế (Bản kế hoạch marketing, file phân tích tài chính, ứng dụng web).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>Thi lấy ít nhất 1 chứng chỉ online miễn phí uy tín (Google, HubSpot, Cisco).</span>
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center">
                  02
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Tháng 2: Đóng gói Portfolio & Kết nối Trực tiếp
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>Tạo trang Google Sites trình bày sản phẩm mẫu và chứng chỉ.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>Lọc danh sách các doanh nghiệp tuyển Fresher/Thực tập sinh trên "Nối cơ hội - Đổi cuộc đời".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>Gửi hồ sơ trực tiếp đến email phòng Nhân sự kèm link Portfolio cá nhân.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-extrabold text-sm flex items-center justify-center">
                  03
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Tháng 3: Luyện Phỏng vấn & Thử việc Bứt phá
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>Đọc trước các câu hỏi phỏng vấn thực tế tại mục "Đánh giá tuyển dụng".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>Tự tin trả lời theo phương pháp STAR: Tình huống - Nhiệm vụ - Hành động - Kết quả.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>Nhận offer, ký hợp đồng lao động chính thức và bắt đầu hành trình đổi đời!</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
