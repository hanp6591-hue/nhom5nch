import React, { useState } from 'react';
import { InterviewReview } from '../types';
import { 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Plus, 
  HelpCircle, 
  Lightbulb,
  X,
  Send,
  ThumbsUp
} from 'lucide-react';

interface RecruitmentReviewsProps {
  reviews: InterviewReview[];
  onAddReview: (review: InterviewReview) => void;
}

export const RecruitmentReviews: React.FC<RecruitmentReviewsProps> = ({
  reviews,
  onAddReview,
}) => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // New review form state
  const [companyName, setCompanyName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [expLevel, setExpLevel] = useState<'Chưa có kinh nghiệm' | 'Sinh viên mới tốt nghiệp' | 'Đã có kinh nghiệm'>('Sinh viên mới tốt nghiệp');
  const [rating, setRating] = useState<number>(5);
  const [outcome, setOutcome] = useState<'Nhận offer' | 'Trượt' | 'Từ chối offer' | 'Đang chờ'>('Nhận offer');
  const [difficulty, setDifficulty] = useState<'Dễ thở' | 'Vừa sức' | 'Thử thách'>('Vừa sức');
  const [hasDepositFee, setHasDepositFee] = useState<boolean>(false);
  const [reviewText, setReviewText] = useState<string>('');
  const [questionInput, setQuestionInput] = useState<string>('');
  const [questionsList, setQuestionsList] = useState<string[]>([]);
  const [adviceText, setAdviceText] = useState<string>('');

  const filteredReviews = reviews.filter((rev) => {
    if (filterDifficulty !== 'all' && rev.difficulty !== filterDifficulty) return false;
    return true;
  });

  const handleAddQuestion = () => {
    if (questionInput.trim()) {
      setQuestionsList([...questionsList, questionInput.trim()]);
      setQuestionInput('');
    }
  };

  const handleRemoveQuestion = (idx: number) => {
    setQuestionsList(questionsList.filter((_, i) => i !== idx));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !jobTitle.trim() || !reviewText.trim()) return;

    const newRev: InterviewReview = {
      id: `rev-${Date.now()}`,
      companyName: companyName.trim(),
      companyId: `comp-custom-${Date.now()}`,
      jobTitle: jobTitle.trim(),
      experienceLevel: expLevel,
      rating,
      outcome,
      difficulty,
      hasDepositFee,
      reviewText: reviewText.trim(),
      interviewQuestions: questionsList.length > 0 ? questionsList : ['Hỏi về các bài tập lớn/đồ án từng thực hiện ở trường.'],
      adviceForNewbies: adviceText.trim() || 'Chuẩn bị kỹ đồ án và giữ thái độ ham học hỏi.',
      date: 'Hôm nay',
      verifiedCandidate: true,
    };

    onAddReview(newRev);
    setIsModalOpen(false);

    // Reset form
    setCompanyName('');
    setJobTitle('');
    setReviewText('');
    setQuestionsList([]);
    setAdviceText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header & Write Review Action */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-3">
            <MessageSquare className="w-4 h-4 text-teal-600" />
            <span>Đánh giá Minh bạch từ Người đi trước</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Đánh Giá Quá Trình Tuyển Dụng & Phỏng Vấn Thực Tế
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Chia sẻ trải nghiệm thực tế về thái độ HR, thời gian trả kết quả, các câu hỏi phỏng vấn và xác thực doanh nghiệp có thu phí hay cọc tiền hay không.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-xs shrink-0 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Viết đánh giá phỏng vấn</span>
        </button>
      </div>

      {/* Difficulty Filter */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 text-xs font-medium w-fit">
        <span className="text-slate-500 px-2 font-semibold">Mức độ phỏng vấn:</span>
        <button
          onClick={() => setFilterDifficulty('all')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            filterDifficulty === 'all' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Tất cả ({reviews.length})
        </button>
        <button
          onClick={() => setFilterDifficulty('Dễ thở')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            filterDifficulty === 'Dễ thở' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Dễ thở ({reviews.filter(r => r.difficulty === 'Dễ thở').length})
        </button>
        <button
          onClick={() => setFilterDifficulty('Vừa sức')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            filterDifficulty === 'Vừa sức' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Vừa sức ({reviews.filter(r => r.difficulty === 'Vừa sức').length})
        </button>
        <button
          onClick={() => setFilterDifficulty('Thử thách')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            filterDifficulty === 'Thử thách' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Thử thách ({reviews.filter(r => r.difficulty === 'Thử thách').length})
        </button>
      </div>

      {/* Reviews Cards List */}
      <div className="space-y-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 p-6 space-y-5 transition-all shadow-xs"
          >
            {/* Top Bar of Review Card */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-bold text-base text-slate-900">{rev.companyName}</h4>
                  <span className="text-slate-400">·</span>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    {rev.jobTitle}
                  </span>
                  {rev.verifiedCandidate && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Ứng viên đã xác thực
                    </span>
                  )}
                </div>

                <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                  <span>Cấp bậc: {rev.experienceLevel}</span>
                  <span>·</span>
                  <span>Ngày phỏng vấn: {rev.date}</span>
                </div>
              </div>

              {/* Badges: Rating & Outcome */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < rev.rating ? 'fill-current' : 'text-slate-200'}`}
                    />
                  ))}
                </div>

                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                  rev.outcome === 'Nhận offer'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {rev.outcome}
                </span>
              </div>
            </div>

            {/* Zero-Deposit verification badge */}
            <div className="flex items-center gap-2 text-xs">
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium ${
                !rev.hasDepositFee
                  ? 'bg-teal-50 text-teal-800 border border-teal-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}>
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                {!rev.hasDepositFee ? 'Cam kết: Tuyệt đối không thu tiền cọc / 0đ chi phí phỏng vấn' : 'Cảnh báo: Có hiện tượng thu phí hồ sơ!'}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                Độ khó: {rev.difficulty}
              </span>
            </div>

            {/* Review Prose */}
            <p className="text-xs text-slate-700 leading-relaxed">
              {rev.reviewText}
            </p>

            {/* Real Interview Questions */}
            {rev.interviewQuestions && rev.interviewQuestions.length > 0 && (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
                  Câu hỏi phỏng vấn thực tế nhà tuyển dụng đã hỏi:
                </span>
                <ul className="space-y-1 text-slate-600">
                  {rev.interviewQuestions.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="font-semibold text-teal-600 shrink-0">Q{idx + 1}:</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Advice for Newbies */}
            {rev.adviceForNewbies && (
              <div className="flex items-start gap-2.5 text-xs text-amber-900 bg-amber-50/70 p-3 rounded-xl border border-amber-200/80">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Lời khuyên gửi tới ứng viên mới:</span>
                  <p>{rev.adviceForNewbies}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal: Write New Interview Review */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">
                Chia sẻ trải nghiệm phỏng vấn tuyển dụng
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Tên công ty phỏng vấn: *</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="VD: FPT Software, Viettel Post..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Vị trí ứng tuyển: *</label>
                  <input
                    type="text"
                    required
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="VD: Fresher React, Nhân viên Kho..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Đánh giá chung:</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-hidden"
                  >
                    <option value={5}>5 sao (Rất tốt)</option>
                    <option value={4}>4 sao (Hài lòng)</option>
                    <option value={3}>3 sao (Bình thường)</option>
                    <option value={2}>2 sao (Kém)</option>
                    <option value={1}>1 sao (Tệ)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Kết quả buổi PV:</label>
                  <select
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-hidden"
                  >
                    <option value="Nhận offer">Nhận offer</option>
                    <option value="Đang chờ">Đang chờ kết quả</option>
                    <option value="Từ chối offer">Từ chối offer</option>
                    <option value="Trượt">Không trúng tuyển</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Độ khó:</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-hidden"
                  >
                    <option value="Dễ thở">Dễ thở</option>
                    <option value="Vừa sức">Vừa sức</option>
                    <option value="Thử thách">Thử thách</option>
                  </select>
                </div>
              </div>

              {/* Anti-Scam Check */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-800">
                  <input
                    type="checkbox"
                    checked={hasDepositFee}
                    onChange={(e) => setHasDepositFee(e.target.checked)}
                    className="rounded text-rose-600 focus:ring-rose-500"
                  />
                  <span>Công ty có yêu cầu nộp cọc tiền, giữ giấy tờ hoặc thu phí hồ sơ không?</span>
                </label>
                <p className="text-[11px] text-slate-500 mt-1">
                  (Hãy tích vào nếu bạn bị yêu cầu đóng tiền. Chúng tôi sẽ tự động đưa công ty này vào danh sách kiểm tra).
                </p>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Chia sẻ chi tiết quy trình: *</label>
                <textarea
                  rows={4}
                  required
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Mô tả thái độ người phỏng vấn, thời gian diễn ra, thời gian thông báo kết quả..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-hidden focus:border-teal-500"
                />
              </div>

              {/* Questions asked */}
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Câu hỏi nhà tuyển dụng đã hỏi:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={questionInput}
                    onChange={(e) => setQuestionInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddQuestion(); }}}
                    placeholder="Nhập 1 câu hỏi và bấm Thêm..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="px-3 py-2 bg-slate-800 text-white rounded-lg font-medium"
                  >
                    Thêm
                  </button>
                </div>

                {questionsList.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {questionsList.map((q, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-700">
                        <span>{q}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestion(idx)}
                          className="text-slate-400 hover:text-rose-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Lời khuyên cho các ứng viên đi sau:</label>
                <input
                  type="text"
                  value={adviceText}
                  onChange={(e) => setAdviceText(e.target.value)}
                  placeholder="VD: Ôn kỹ các hàm JavaScript cơ bản, mang theo đồ án mẫu..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:border-teal-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold rounded-xl transition-colors shadow-xs"
                >
                  Đăng đánh giá
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
