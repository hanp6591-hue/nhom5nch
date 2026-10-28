export type ExperienceLevel = 'no_exp' | 'under_1_year' | '1_to_3_years' | 'above_3_years';

export type JobType = 'full_time' | 'part_time' | 'internship' | 'long_term';

export type IndustryCode = 'CNKT' | 'DVVT' | 'KDTT' | 'TCKT' | 'YDGD' | 'SXNL';

export interface Industry {
  code: IndustryCode;
  name: string;
  fullName: string;
  description: string;
  subIndustries: string[];
  color: string;
  iconName: string;
  activeCompaniesCount: number;
  openJobsCount: number;
}

export interface Company {
  id: string;
  name: string;
  industryCode: IndustryCode;
  subIndustry: string;
  logo: string;
  taxCode: string;
  verified: boolean;
  address: string;
  city: string;
  scale: string;
  website: string;
  hrEmail: string;
  hrPhone: string;
  description: string;
  rating: number;
  reviewsCount: number;
  benefits: string[];
  acceptsInterns: boolean;
  acceptsNoExp: boolean;
}

export interface Job {
  id: string;
  title: string;
  companyId: string;
  companyName: string;
  companyLogo: string;
  verifiedCompany: boolean;
  industryCode: IndustryCode;
  subIndustry: string;
  location: string;
  city: 'Hà Nội' | 'TP. Hồ Chí Minh' | 'Đà Nẵng' | 'Cần Thơ' | 'Toàn quốc' | 'Làm từ xa (Remote)';
  jobType: JobType;
  experienceLevel: ExperienceLevel;
  experienceLabel: string;
  salaryMin: number; // Triệu VND / tháng
  salaryMax: number; // Triệu VND / tháng
  salaryText: string;
  deadline: string;
  postedDate: string;
  description: string[];
  requirements: string[];
  benefits: string[];
  trainingProvided: boolean; // Có đào tạo từ đầu cho người chưa có kinh nghiệm
  noFeeCommitment: boolean; // Cam kết không thu cọc/phí
  urgent: boolean;
  hot: boolean;
  directHrContact: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface SalaryDataPoint {
  role: string;
  industryCode: IndustryCode;
  industryName: string;
  fresherNoExp: { min: number; avg: number; max: number };
  junior1to2: { min: number; avg: number; max: number };
  midSenior3to5: { min: number; avg: number; max: number };
  demandLevel: 'Rất cao' | 'Cao' | 'Ổn định';
  notes: string;
}

export interface InterviewReview {
  id: string;
  companyName: string;
  companyId: string;
  jobTitle: string;
  experienceLevel: 'Chưa có kinh nghiệm' | 'Sinh viên mới tốt nghiệp' | 'Đã có kinh nghiệm';
  rating: number; // 1-5
  outcome: 'Nhận offer' | 'Trượt' | 'Từ chối offer' | 'Đang chờ';
  difficulty: 'Dễ thở' | 'Vừa sức' | 'Thử thách';
  hasDepositFee: boolean; // Có bị đòi cọc không (phải là FALSE để an toàn)
  reviewText: string;
  interviewQuestions: string[];
  adviceForNewbies: string;
  date: string;
  verifiedCandidate: boolean;
}

export interface JobAlertPreference {
  email: string;
  industry: string;
  city: string;
  experience: string;
  expectedSalary: string;
  enabled: boolean;
}
