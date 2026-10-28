import { Industry, Company, Job, SalaryDataPoint, InterviewReview } from '../types';

export const INDUSTRIES: Industry[] = [
  {
    code: 'CNKT',
    name: 'Công nghệ & Kỹ thuật',
    fullName: 'Khối ngành Công nghệ Thông tin & Kỹ thuật Công nghệ (CNKT)',
    description: 'Bao gồm phát triển phần mềm, ứng dụng di động, quản trị mạng, kỹ thuật điện tử, tự động hóa, thiết kế CAD và phân tích dữ liệu.',
    subIndustries: [
      'Lập trình Web & Ứng dụng Di động',
      'Kiểm thử phần mềm (QA/QC Manual & Auto)',
      'Hỗ trợ kỹ thuật phần cứng & Mạng IT Helpdesk',
      'Kỹ thuật Điện - Điện tử - Viễn thông',
      'Vận hành & Lắp ráp Tự động hóa',
      'Thiết kế đồ họa & UI/UX'
    ],
    color: 'emerald',
    iconName: 'Cpu',
    activeCompaniesCount: 42,
    openJobsCount: 158
  },
  {
    code: 'DVVT',
    name: 'Dịch vụ & Vận tải - Viễn thông',
    fullName: 'Khối ngành Dịch vụ, Vận tải, Logistics & Viễn thông (DVVT)',
    description: 'Các doanh nghiệp vận chuyển, chuỗi cung ứng, kho vận logistics, tổng đài mạng viễn thông, hàng không và dịch vụ khách hàng.',
    subIndustries: [
      'Logistics & Khai báo Hải quan',
      'Điều phối vận tải & Quản lý kho vận (Kho hàng TMĐT)',
      'Chăm sóc khách hàng & Tổng đài Viễn thông',
      'Dịch vụ Hàng không & Du lịch lữ hành',
      'Quản lý chuỗi cung ứng (Supply Chain)'
    ],
    color: 'blue',
    iconName: 'Truck',
    activeCompaniesCount: 36,
    openJobsCount: 124
  },
  {
    code: 'KDTT',
    name: 'Kinh doanh & Tiếp thị',
    fullName: 'Khối ngành Kinh doanh, Tiếp thị & Thương mại điện tử (KDTT)',
    description: 'Chuyên viên kinh doanh B2B/B2C, Digital Marketing, sáng tạo nội dung mạng xã hội, quản lý gian hàng Shopee/TikTok Shop.',
    subIndustries: [
      'Chuyên viên Kinh doanh / Sales B2B & B2C',
      'Digital Marketing & Quảng cáo trực tuyến (Ads)',
      'Sáng tạo nội dung (Content Creator / Copywriter)',
      'Vận hành sàn Thương mại điện tử (Shopee / TikTok Shop)',
      'Chăm sóc & Phát triển đại lý phân phối'
    ],
    color: 'amber',
    iconName: 'TrendingUp',
    activeCompaniesCount: 58,
    openJobsCount: 215
  },
  {
    code: 'TCKT',
    name: 'Tài chính & Kế toán',
    fullName: 'Khối ngành Tài chính, Kế toán, Kiểm toán & Ngân hàng (TCKT)',
    description: 'Kế toán tổng hợp, kế toán thuế, giao dịch viên chi nhánh ngân hàng, thẩm định hồ sơ tín dụng và tư vấn tài chính minh bạch.',
    subIndustries: [
      'Kế toán nội bộ & Kế toán kho',
      'Kế toán thuế & Báo cáo tài chính sơ cấp',
      'Giao dịch viên Ngân hàng (Teller)',
      'Chuyên viên quan hệ khách hàng cá nhân (QHKH)',
      'Thu ngân & Kiểm soát chứng từ'
    ],
    color: 'purple',
    iconName: 'BadgePercent',
    activeCompaniesCount: 31,
    openJobsCount: 96
  },
  {
    code: 'YDGD',
    name: 'Y tế, Dược & Giáo dục',
    fullName: 'Khối ngành Y tế, Dược phẩm & Giáo dục đào tạo (YDGD)',
    description: 'Dược sĩ bán lẻ chuỗi nhà thuốc, tư vấn y tế, điều dưỡng, trợ giảng tiếng Anh, giáo viên mầm non và tư vấn hướng nghiệp.',
    subIndustries: [
      'Dược sĩ tư vấn nhà thuốc (GPP)',
      'Trình dược viên OTC / ETC',
      'Trợ giảng & Giáo viên Anh ngữ trẻ em',
      'Tư vấn tuyển sinh & Chăm sóc học viên',
      'Điều dưỡng viên & Kỹ thuật viên phục hồi'
    ],
    color: 'rose',
    iconName: 'HeartPulse',
    activeCompaniesCount: 29,
    openJobsCount: 88
  },
  {
    code: 'SXNL',
    name: 'Sản xuất & Nông nghiệp',
    fullName: 'Khối ngành Sản xuất, Cơ khí chế tạo & Nông nghiệp sạch (SXNL)',
    description: 'Giám sát dây chuyền sản xuất công nghiệp, kiểm soát chất lượng sản phẩm (KCS), cơ khí chính xác và nông nghiệp ứng dụng công nghệ cao.',
    subIndustries: [
      'Kỹ thuật viên Vận hành máy & Cơ khí bảo trì',
      'Kiểm soát chất lượng sản phẩm (KCS / QC)',
      'Giám sát sản xuất & An toàn lao động (EHS)',
      'Kỹ sư Nông nghiệp công nghệ cao & Chế biến nông sản',
      'Quản lý đóng gói & Xuất khẩu nông sản'
    ],
    color: 'cyan',
    iconName: 'Factory',
    activeCompaniesCount: 25,
    openJobsCount: 79
  }
];

export const COMPANIES: Company[] = [
  {
    id: 'comp-fpt-software',
    name: 'Công ty Cổ phần Phần mềm FPT (FPT Software)',
    industryCode: 'CNKT',
    subIndustry: 'Lập trình Web & Ứng dụng Di động',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&auto=format&fit=crop&q=60',
    taxCode: '0101601098',
    verified: true,
    address: 'Tòa nhà FPT, Phố Duy Tân, Cầu Giấy, Hà Nội & Khu Công nghệ cao TP.HCM',
    city: 'Hà Nội',
    scale: '10.000+ nhân viên',
    website: 'https://fptsoftware.com',
    hrEmail: 'tuyendung@fpt.com',
    hrPhone: '024 7300 7300',
    description: 'Tập đoàn công nghệ hàng đầu Việt Nam với chương trình FPT Fresher Academy đào tạo có lương cho sinh viên mới tốt nghiệp khối ngành kỹ thuật công nghệ.',
    rating: 4.8,
    reviewsCount: 142,
    benefits: ['Trợ cấp đào tạo tân binh 7-10 triệu', 'Bảo hiểm FPT Care', 'Xe đưa đón CBNV', 'Lộ trình thăng tiến 6 tháng/lần'],
    acceptsInterns: true,
    acceptsNoExp: true
  },
  {
    id: 'comp-viettel-post',
    name: 'Tổng Công ty Cổ phần Bưu chính Viettel (Viettel Post)',
    industryCode: 'DVVT',
    subIndustry: 'Logistics & Khai báo Hải quan',
    logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&auto=format&fit=crop&q=60',
    taxCode: '0104093672',
    verified: true,
    address: 'Tòa nhà Viettel Post, ngõ 15 Duy Tân, Cầu Giấy, Hà Nội',
    city: 'Hà Nội',
    scale: '5.000 - 10.000 nhân viên',
    website: 'https://viettelpost.com.vn',
    hrEmail: 'hr@viettelpost.com.vn',
    hrPhone: '1900 8095',
    description: 'Doanh nghiệp chuyển phát và logistics công nghệ cao hàng đầu, môi trường kỷ luật quân đội thân thiện, nhận đào tạo nhân sự điều phối và vận hành kho.',
    rating: 4.7,
    reviewsCount: 89,
    benefits: ['Không yêu cầu kinh nghiệm ban đầu', 'Được cấp chứng chỉ quản lý kho', 'Thưởng dự án và năng suất hàng tháng'],
    acceptsInterns: true,
    acceptsNoExp: true
  },
  {
    id: 'comp-vng-corp',
    name: 'Công ty Cổ phần VNG (VNG Corporation)',
    industryCode: 'CNKT',
    subIndustry: 'Lập trình Web & Ứng dụng Di động',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&auto=format&fit=crop&q=60',
    taxCode: '0303505703',
    verified: true,
    address: 'VNG Campus, Đường số 13, KCX Tân Thuận, Quận 7, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    scale: '4.000+ nhân viên',
    website: 'https://vng.com.vn',
    hrEmail: 'recruitment@vng.com.vn',
    hrPhone: '028 3962 3888',
    description: 'Kỳ lân công nghệ Việt Nam với các sản phẩm Zalo, ZaloPay, Zing. Có chương trình VNG Tech Fresher hàng năm dành riêng cho bạn trẻ yêu thích công nghệ.',
    rating: 4.9,
    reviewsCount: 210,
    benefits: ['Bữa ăn trưa miễn phí tại VNG Campus', 'Trợ cấp thực tập cao', 'Phòng Gym, hồ bơi chuẩn quốc tế'],
    acceptsInterns: true,
    acceptsNoExp: true
  },
  {
    id: 'comp-tiki-vn',
    name: 'Công ty TNHH Ti Ki (Tiki Việt Nam)',
    industryCode: 'KDTT',
    subIndustry: 'Vận hành sàn Thương mại điện tử (Shopee / TikTok Shop)',
    logo: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=120&auto=format&fit=crop&q=60',
    taxCode: '0309532909',
    verified: true,
    address: 'Tòa nhà Viettel Complex, 285 Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    scale: '1.000 - 3.000 nhân viên',
    website: 'https://tiki.vn/careers',
    hrEmail: 'careers@tiki.vn',
    hrPhone: '028 7304 9080',
    description: 'Sàn thương mại điện tử uy tín, tuyển dụng sinh viên làm việc part-time & full-time tại bộ phận CSKH, quản trị catalog sản phẩm và vận hành chiến dịch.',
    rating: 4.6,
    reviewsCount: 76,
    benefits: ['Thời gian làm việc linh hoạt cho sinh viên', 'Giảm giá mua sắm nội bộ', 'Được hướng dẫn 1-kèm-1'],
    acceptsInterns: true,
    acceptsNoExp: true
  },
  {
    id: 'comp-mbbank',
    name: 'Ngân hàng TMCP Quân Đội (MB Bank)',
    industryCode: 'TCKT',
    subIndustry: 'Giao dịch viên Ngân hàng (Teller)',
    logo: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=60',
    taxCode: '0100283873',
    verified: true,
    address: 'Tòa nhà MB Grand Tower, 63 Lê Văn Lương, Cầu Giấy, Hà Nội',
    city: 'Hà Nội',
    scale: '15.000+ nhân viên',
    website: 'https://mbbank.com.vn',
    hrEmail: 'tuyendung@mbbank.com.vn',
    hrPhone: '1900 545426',
    description: 'Ngân hàng số hàng đầu tuyển dụng tân cử nhân kinh tế, tài chính ngân hàng, kế toán làm giao dịch viên và tư vấn tài chính với đào tạo nghiệp vụ chuẩn chỉnh.',
    rating: 4.7,
    reviewsCount: 134,
    benefits: ['Môi trường chuyên nghiệp, thăng tiến rõ ràng', 'Thưởng hiệu quả công việc', 'Được cấp chứng chỉ ngân hàng số'],
    acceptsInterns: true,
    acceptsNoExp: true
  },
  {
    id: 'comp-pharmacity',
    name: 'Công ty Cổ phần Dược phẩm Pharmacity',
    industryCode: 'YDGD',
    subIndustry: 'Dược sĩ tư vấn nhà thuốc (GPP)',
    logo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=120&auto=format&fit=crop&q=60',
    taxCode: '0311770883',
    verified: true,
    address: '248A Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    scale: '5.000+ nhân viên',
    website: 'https://pharmacity.vn',
    hrEmail: 'tuyendung@pharmacity.vn',
    hrPhone: '1800 6821',
    description: 'Chuỗi nhà thuốc bán lẻ tiện lợi hiện đại lớn nhất Việt Nam. Tuyển dụng sinh viên trung cấp, cao đẳng, đại học Dược mới ra trường làm việc theo ca hoặc toàn thời gian.',
    rating: 4.6,
    reviewsCount: 92,
    benefits: ['Có ca xoay linh hoạt cho sinh viên còn đi học', 'Đào tạo cấp chứng chỉ GPP', 'Mức lương cơ bản + hoa hồng tư vấn'],
    acceptsInterns: true,
    acceptsNoExp: true
  },
  {
    id: 'comp-vinamilk',
    name: 'Công ty Cổ phần Sữa Việt Nam (Vinamilk)',
    industryCode: 'SXNL',
    subIndustry: 'Kỹ thuật viên Vận hành máy & Cơ khí bảo trì',
    logo: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=120&auto=format&fit=crop&q=60',
    taxCode: '0300588569',
    verified: true,
    address: 'Số 10 Tân Trào, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh & Nhà máy trên toàn quốc',
    city: 'Toàn quốc',
    scale: '10.000+ nhân viên',
    website: 'https://vinamilk.com.vn',
    hrEmail: 'tuyendung@vinamilk.com.vn',
    hrPhone: '028 5415 5555',
    description: 'Thương hiệu sữa quốc gia với các trang trại bò sữa chuẩn Organic và nhà máy Mega tự động hóa cao. Tuyển sinh viên cơ khí, điện, chế biến thực phẩm mới tốt nghiệp.',
    rating: 4.9,
    reviewsCount: 165,
    benefits: ['Chế độ đãi ngộ hàng đầu Việt Nam', 'Ký túc xá cho nhân viên xa nhà', 'Bữa ăn ca đủ dinh dưỡng miễn phí'],
    acceptsInterns: true,
    acceptsNoExp: true
  },
  {
    id: 'comp-vinschool',
    name: 'Hệ thống Giáo dục Vinschool',
    industryCode: 'YDGD',
    subIndustry: 'Trợ giảng & Giáo viên Anh ngữ trẻ em',
    logo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=120&auto=format&fit=crop&q=60',
    taxCode: '0106145326',
    verified: true,
    address: 'Khu đô thị Vinhomes Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội',
    city: 'Hà Nội',
    scale: '3.000 - 5.000 nhân viên',
    website: 'https://vinschool.edu.vn',
    hrEmail: 'tuyendung@vinschool.edu.vn',
    hrPhone: '024 3975 3333',
    description: 'Hệ thống trường liên cấp chuẩn quốc tế CIS, tuyển dụng trợ giảng tiếng Anh (dành cho sinh viên năm 3, 4 hoặc mới tốt nghiệp) với cơ hội trở thành giáo viên chính thức.',
    rating: 4.8,
    reviewsCount: 112,
    benefits: ['Được làm việc với giáo viên bản ngữ', 'Học hỏi phương pháp giáo dục hiện đại', 'Trợ cấp ăn trưa tại trường'],
    acceptsInterns: true,
    acceptsNoExp: true
  }
];

export const JOBS: Job[] = [
  {
    id: 'job-fresher-react-fpt',
    title: 'Fresher Frontend / React Developer (Đào tạo có lương từ đầu)',
    companyId: 'comp-fpt-software',
    companyName: 'FPT Software',
    companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&auto=format&fit=crop&q=60',
    verifiedCompany: true,
    industryCode: 'CNKT',
    subIndustry: 'Lập trình Web & Ứng dụng Di động',
    location: 'Cầu Giấy, Hà Nội & Khu Công Nghệ Cao Q9, TP.HCM',
    city: 'Hà Nội',
    jobType: 'full_time',
    experienceLevel: 'no_exp',
    experienceLabel: 'Không yêu cầu kinh nghiệm (Đào tạo từ A-Z)',
    salaryMin: 9,
    salaryMax: 14,
    salaryText: '9 - 14 triệu / tháng',
    deadline: '2026-11-30',
    postedDate: 'Hôm nay',
    description: [
      'Tham gia chương trình FPT Fresher Academy, được Senior Technical Lead cầm tay chỉ việc thực tế dự án phần mềm xuất khẩu.',
      'Lập trình giao diện web hiện đại với React, TypeScript, Tailwind CSS theo chuẩn mã nguồn sạch.',
      'Làm việc trực tiếp với khách hàng thị trường Nhật Bản, Singapore và Bắc Mỹ sau khi hoàn tất khóa đào tạo.'
    ],
    requirements: [
      'Sinh viên năm cuối hoặc mới tốt nghiệp Cao đẳng / Đại học chuyên ngành CNTT, Điện tử Viễn thông, Toán tin hoặc đã hoàn thành khóa học Bootcamp.',
      'Nắm vững kiến thức cơ bản về HTML/CSS/JavaScript. Đã từng làm bài tập lớn hoặc đồ án web.',
      'Thái độ tích cực, chủ động tìm tòi học hỏi và tinh thần đồng đội cao.'
    ],
    benefits: [
      'Được trả lương ngay trong 2 tháng đào tạo chuyên sâu (8.000.000đ - 10.000.000đ/tháng).',
      'Được cấp laptop làm việc, xe bus đưa đón tại các điểm trung chuyển.',
      'Bảo hiểm FPT Care chi trả toàn diện viện phí tại bệnh viện quốc tế.',
      'Cam kết 100% không thu bất kỳ khoản phí hồ sơ, đặt cọc hay giữ giấy tờ tùy thân nào.'
    ],
    trainingProvided: true,
    noFeeCommitment: true,
    urgent: true,
    hot: true,
    directHrContact: {
      name: 'Chị Nguyễn Thu Hà - Trưởng nhóm Tuyển dụng Tân binh',
      email: 'HaNT99@fpt.com',
      phone: '0982 134 567'
    }
  },
  {
    id: 'job-vng-qa-intern',
    title: 'Thực tập sinh Kiểm thử Phần mềm (Manual QA Intern) - Có trợ cấp',
    companyId: 'comp-vng-corp',
    companyName: 'VNG Corporation',
    companyLogo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&auto=format&fit=crop&q=60',
    verifiedCompany: true,
    industryCode: 'CNKT',
    subIndustry: 'Kiểm thử phần mềm (QA/QC Manual & Auto)',
    location: 'KCX Tân Thuận, Quận 7, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    jobType: 'internship',
    experienceLevel: 'no_exp',
    experienceLabel: 'Chưa có kinh nghiệm (Sinh viên năm 3, 4 hoặc mới tốt nghiệp)',
    salaryMin: 5,
    salaryMax: 8,
    salaryText: '5 - 8 triệu trợ cấp / tháng',
    deadline: '2026-11-25',
    postedDate: 'Vừa đăng',
    description: [
      'Được Mentor hướng dẫn viết Test Cases, Test Scenarios cho các tính năng mới trên ứng dụng có hàng triệu người dùng.',
      'Thực hiện kiểm thử chức năng, ghi nhận lỗi (Bug Tracking) lên hệ thống Jira.',
      'Phối hợp với đội ngũ lập trình viên và Product Owner để nâng cao chất lượng trải nghiệm người dùng.'
    ],
    requirements: [
      'Sinh viên các trường CĐ/ĐH hoặc người yêu thích công nghệ muốn bắt đầu sự nghiệp trong mảng Kiểm thử phần mềm.',
      'Cẩn thận, tỉ mỉ, có tư duy logic và khả năng đặt câu hỏi phản biện.',
      'Cam kết thực tập tối thiểu 3 tháng (ít nhất 4 ngày/tuần).'
    ],
    benefits: [
      'Trợ cấp thực tập cạnh tranh từ 5.000.000đ đến 8.000.000đ/tháng.',
      'Ăn trưa miễn phí chuẩn nhà hàng tại VNG Campus.',
      'Cơ hội chuyển lên nhân viên chính thức ngay sau khi kết thúc kỳ thực tập.',
      'Môi trường công nghệ mở, không khoảng cách.'
    ],
    trainingProvided: true,
    noFeeCommitment: true,
    urgent: false,
    hot: true,
    directHrContact: {
      name: 'Anh Trần Quốc Bảo - Talent Acquisition Partner',
      email: 'baotq@vng.com.vn',
      phone: '0903 888 123'
    }
  },
  {
    id: 'job-viettel-post-logistics',
    title: 'Nhân viên Điều phối Vận hành Kho & Đơn hàng (Không yêu cầu kinh nghiệm)',
    companyId: 'comp-viettel-post',
    companyName: 'Viettel Post',
    companyLogo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&auto=format&fit=crop&q=60',
    verifiedCompany: true,
    industryCode: 'DVVT',
    subIndustry: 'Điều phối vận tải & Quản lý kho vận (Kho hàng TMĐT)',
    location: 'Quận Nam Từ Liêm, Hà Nội & Quận Tân Bình, TP.HCM',
    city: 'Hà Nội',
    jobType: 'long_term',
    experienceLevel: 'no_exp',
    experienceLabel: 'Không cần kinh nghiệm - Nhận cả học sinh tốt nghiệp THPT, trường nghề',
    salaryMin: 8,
    salaryMax: 13,
    salaryText: '8 - 13 triệu / tháng',
    deadline: '2026-12-15',
    postedDate: '1 ngày trước',
    description: [
      'Tiếp nhận, kiểm đếm và phân loại bưu phẩm, đơn hàng trên hệ thống máy quét thông minh của Viettel Post.',
      'Điều phối lịch trình xe tải vận chuyển tuyến nội đô và liên tỉnh qua phần mềm quản lý.',
      'Cập nhật trạng thái hành trình đơn hàng và giải quyết nhanh các thắc mắc phát sinh.'
    ],
    requirements: [
      'Tốt nghiệp THPT trở lên, không giới hạn độ tuổi từ 18 - 35 tuổi.',
      'Sức khỏe tốt, trung thực, nhanh nhẹn, biết sử dụng máy tính văn phòng cơ bản hoặc smartphone.',
      'Không yêu cầu kinh nghiệm kho vận, công ty đào tạo hướng dẫn thao tác trong 3 ngày đầu.'
    ],
    benefits: [
      'Ký hợp đồng lao động chính thức sau 1 tháng thử việc, đóng bảo hiểm đầy đủ theo Luật Lao động.',
      'Thưởng lễ tết, thưởng năng suất hàng tháng và thâm niên.',
      'Được cấp đồng phục và đồ bảo hộ miễn phí 100% (Không bao giờ thu tiền cọc).'
    ],
    trainingProvided: true,
    noFeeCommitment: true,
    urgent: true,
    hot: false,
    directHrContact: {
      name: 'Phòng Tổ chức Lao động Viettel Post',
      email: 'tuyendung.vtp@viettelpost.com.vn',
      phone: '024 6266 0306'
    }
  },
  {
    id: 'job-tiki-cskh-parttime',
    title: 'Nhân viên Hỗ trợ Khách hàng & Vận hành sàn TMĐT (Part-time / Full-time)',
    companyId: 'comp-tiki-vn',
    companyName: 'Tiki Việt Nam',
    companyLogo: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=120&auto=format&fit=crop&q=60',
    verifiedCompany: true,
    industryCode: 'KDTT',
    subIndustry: 'Vận hành sàn Thương mại điện tử (Shopee / TikTok Shop)',
    location: '285 Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh (Có hỗ trợ Hybrid)',
    city: 'TP. Hồ Chí Minh',
    jobType: 'part_time',
    experienceLevel: 'no_exp',
    experienceLabel: 'Không cần kinh nghiệm - Phù hợp sinh viên làm thêm xoay ca',
    salaryMin: 5,
    salaryMax: 9,
    salaryText: '30.000đ - 38.000đ/giờ (5 - 9 triệu/tháng)',
    deadline: '2026-11-20',
    postedDate: 'Hôm nay',
    description: [
      'Hỗ trợ khách hàng qua kênh chat trực tuyến và hotline về tình trạng đơn hàng, hướng dẫn đổi trả sản phẩm.',
      'Hỗ trợ rà soát thông tin mô tả sản phẩm của các nhà bán lẻ mới lên sàn.',
      'Đăng ký lịch làm việc linh hoạt theo tuần (tối thiểu 20 giờ/tuần, có ca sáng, chiều, tối phù hợp lịch học).'
    ],
    requirements: [
      'Học sinh, sinh viên các trường hoặc người muốn có thêm thu nhập ổn định.',
      'Khả năng đánh máy nhanh, giọng nói dễ nghe, kiên nhẫn và lịch sự.',
      'Được đào tạo nghiệp vụ CSKH chuyên nghiệp miễn phí 2 buổi trước khi vào ca.'
    ],
    benefits: [
      'Lương tính theo giờ minh bạch, nhận đúng ngày mùng 5 hàng tháng qua tài khoản ngân hàng chính chủ.',
      'Linh hoạt đổi ca khi có lịch thi cử trên trường.',
      'Văn phòng hiện đại, trà cafe bánh ngọt miễn phí.'
    ],
    trainingProvided: true,
    noFeeCommitment: true,
    urgent: false,
    hot: true,
    directHrContact: {
      name: 'Chị Lê Mai Phương - HR Executive',
      email: 'phuong.lemai@tiki.vn',
      phone: '0977 456 789'
    }
  },
  {
    id: 'job-mb-teller-fresher',
    title: 'Giao dịch viên Ngân hàng (Teller Khởi nghiệp 2026) - Tân cử nhân',
    companyId: 'comp-mbbank',
    companyName: 'MB Bank',
    companyLogo: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=60',
    verifiedCompany: true,
    industryCode: 'TCKT',
    subIndustry: 'Giao dịch viên Ngân hàng (Teller)',
    location: 'Chi nhánh tại Hà Nội, Đà Nẵng và TP. Hồ Chí Minh',
    city: 'Hà Nội',
    jobType: 'full_time',
    experienceLevel: 'no_exp',
    experienceLabel: 'Chưa có kinh nghiệm - Dành riêng cho sinh viên năm cuối / mới tốt nghiệp',
    salaryMin: 10,
    salaryMax: 16,
    salaryText: '10 - 16 triệu / tháng',
    deadline: '2026-12-10',
    postedDate: '2 ngày trước',
    description: [
      'Thực hiện các giao dịch tiền mặt, chuyển khoản, mở tài khoản thanh toán và phát hành thẻ cho khách hàng tại quầy.',
      'Tư vấn các gói sản phẩm tiền gửi tiết kiệm, ngân hàng số MB Bank phù hợp với nhu cầu của khách.',
      'Được tham gia khóa huấn luyện nghiệp vụ chuẩn tại Trung tâm Đào tạo MB trước khi tiếp nhận công việc.'
    ],
    requirements: [
      'Tốt nghiệp Cao đẳng, Đại học các khối ngành Kế toán, Tài chính - Ngân hàng, Quản trị Kinh doanh, Luật hoặc Ngoại ngữ.',
      'Ngoại hình sáng, giao tiếp hòa nhã, cẩn trọng với các con số chứng từ.',
      'Không yêu cầu kinh nghiệm ngân hàng trước đó.'
    ],
    benefits: [
      'Môi trường ngân hàng năng động, văn phòng chuẩn 5 sao.',
      'Thưởng các ngày lễ lớn, thưởng hoàn thành chỉ tiêu kinh doanh cuối năm từ 2-4 tháng lương.',
      'Được cấp đồng phục cao cấp, trợ cấp trang điểm.'
    ],
    trainingProvided: true,
    noFeeCommitment: true,
    urgent: false,
    hot: true,
    directHrContact: {
      name: 'Ban Nhân sự MB Grand Tower',
      email: 'tuyendungmb@mbbank.com.vn',
      phone: '024 6266 1088'
    }
  },
  {
    id: 'job-pharmacity-retail',
    title: 'Dược sĩ Nhà thuốc Thực hành (Được bảo trợ chứng chỉ hành nghề GPP)',
    companyId: 'comp-pharmacity',
    companyName: 'Pharmacity',
    companyLogo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=120&auto=format&fit=crop&q=60',
    verifiedCompany: true,
    industryCode: 'YDGD',
    subIndustry: 'Dược sĩ tư vấn nhà thuốc (GPP)',
    location: 'Các quận huyện tại TP. Hồ Chí Minh, Cần Thơ, Đà Nẵng',
    city: 'TP. Hồ Chí Minh',
    jobType: 'full_time',
    experienceLevel: 'no_exp',
    experienceLabel: 'Mới tốt nghiệp Trung cấp / CĐ / ĐH Dược',
    salaryMin: 8,
    salaryMax: 12,
    salaryText: '8 - 12 triệu + Thưởng doanh số',
    deadline: '2026-11-28',
    postedDate: '3 ngày trước',
    description: [
      'Đón tiếp khách hàng, tư vấn thuốc không kê đơn (OTC), thực phẩm chức năng và vật tư y tế theo quy chuẩn GPP.',
      'Kiểm kê hạn sử dụng thuốc, sắp xếp quầy kệ khoa học theo nguyên tắc FEFO/FIFO.',
      'Được Dược sĩ Quản lý nhà thuốc giàu kinh nghiệm hướng dẫn tra cứu biệt dược và tương tác thuốc an toàn.'
    ],
    requirements: [
      'Tốt nghiệp Trung cấp, Cao đẳng hoặc Đại học chuyên ngành Dược (nhận giấy chứng nhận tốt nghiệp tạm thời).',
      'Đạo đức nghề nghiệp trong sáng, tận tâm với sức khỏe cộng đồng.',
      'Sẵn sàng làm việc theo ca (ca 8 tiếng/ngày).'
    ],
    benefits: [
      'Được hỗ trợ tích lũy thời gian thực hành để làm Chứng chỉ Hành nghề Dược hợp pháp.',
      'Chính sách mua thuốc giảm giá cho bản thân và gia đình.',
      'Cơ hội trở thành Quản lý Nhà thuốc chỉ sau 1 năm gắn bó.'
    ],
    trainingProvided: true,
    noFeeCommitment: true,
    urgent: true,
    hot: false,
    directHrContact: {
      name: 'Võ Thanh Tùng - Phụ trách Nhân sự Miền Nam',
      email: 'tung.vt@pharmacity.vn',
      phone: '0918 333 444'
    }
  },
  {
    id: 'job-vinamilk-technician',
    title: 'Kỹ thuật viên Vận hành Dây chuyền Tự động (Mega Factory)',
    companyId: 'comp-vinamilk',
    companyName: 'Vinamilk',
    companyLogo: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=120&auto=format&fit=crop&q=60',
    verifiedCompany: true,
    industryCode: 'SXNL',
    subIndustry: 'Kỹ thuật viên Vận hành máy & Cơ khí bảo trì',
    location: 'Nhà máy Sữa Việt Nam, KCN Mỹ Phước 2, Bình Dương & Tiên Du, Bắc Ninh',
    city: 'Toàn quốc',
    jobType: 'long_term',
    experienceLevel: 'under_1_year',
    experienceLabel: 'Chưa có hoặc dưới 1 năm kinh nghiệm (Ưu tiên tân cử nhân)',
    salaryMin: 11,
    salaryMax: 17,
    salaryText: '11 - 17 triệu / tháng',
    deadline: '2026-12-05',
    postedDate: 'Hôm nay',
    description: [
      'Theo dõi và vận hành hệ thống đóng gói tiệt trùng Tetra Pak tự động theo tiêu chuẩn quốc tế FSSC 22000.',
      'Thực hiện bảo dưỡng định kỳ cấp 1 (vệ sinh, tra dầu mỡ, hiệu chỉnh cảm biến máy móc).',
      'Phát hiện sớm các dấu hiệu bất thường của dây chuyền và phối hợp cùng kỹ sư trưởng xử lý sự cố.'
    ],
    requirements: [
      'Tốt nghiệp Cao đẳng, Đại học các chuyên ngành: Cơ điện tử, Tự động hóa, Cơ khí chế tạo máy, Điện công nghiệp hoặc Công nghệ thực phẩm.',
      'Chăm chỉ, có ý thức kỷ luật lao động và an toàn vệ sinh thực phẩm cao.',
      'Chấp nhận ứng viên mới ra trường có thái độ học hỏi tốt.'
    ],
    benefits: [
      'Mức lương cạnh tranh kèm phụ cấp ca đêm, phụ cấp chuyên cần và độc hại theo quy định.',
      'Ký túc xá đầy đủ tiện nghi (máy lạnh, wifi, phòng tập thể thao) cho công nhân kỹ thuật xa quê.',
      'Xe đưa đón công nhân viên từ trung tâm TP.HCM và Hà Nội.'
    ],
    trainingProvided: true,
    noFeeCommitment: true,
    urgent: false,
    hot: true,
    directHrContact: {
      name: 'Ban Nhân sự Nhà máy Vinamilk',
      email: 'hr.plant@vinamilk.com.vn',
      phone: '0274 3556 789'
    }
  },
  {
    id: 'job-vinschool-ta',
    title: 'Trợ giảng Tiếng Anh (English Teaching Assistant) - Bán thời gian / Linh hoạt',
    companyId: 'comp-vinschool',
    companyName: 'Vinschool',
    companyLogo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=120&auto=format&fit=crop&q=60',
    verifiedCompany: true,
    industryCode: 'YDGD',
    subIndustry: 'Trợ giảng & Giáo viên Anh ngữ trẻ em',
    location: 'Times City, Minh Khai, Hai Bà Trưng, Hà Nội & Central Park, Bình Thạnh, TP.HCM',
    city: 'Hà Nội',
    jobType: 'part_time',
    experienceLevel: 'no_exp',
    experienceLabel: 'Không cần kinh nghiệm giảng dạy - Phù hợp sinh viên năm 2, 3, 4',
    salaryMin: 4,
    salaryMax: 7,
    salaryText: '60.000đ - 85.000đ / giờ',
    deadline: '2026-11-15',
    postedDate: 'Vừa đăng',
    description: [
      'Hỗ trợ giáo viên nước ngoài quản lý lớp học và hướng dẫn học sinh tiểu học thực hành giao tiếp tiếng Anh.',
      'Chuẩn bị học cụ, tài liệu học tập theo phân công của giáo viên chủ nhiệm.',
      'Ghi nhận sự tiến bộ của học sinh và trao đổi định kỳ với phụ huynh khi cần thiết.'
    ],
    requirements: [
      'Sinh viên các trường Đại học (ưu tiên chuyên ngành Sư phạm Anh, Ngôn ngữ Anh hoặc có chứng chỉ IELTS từ 6.0 / TOEIC 750 trở lên).',
      'Yêu quý trẻ em, vui vẻ, năng động và kiên nhẫn.',
      'Được tập huấn kỹ năng sư phạm hiện đại miễn phí trước khi nhận lớp.'
    ],
    benefits: [
      'Môi trường quốc tế giao tiếp 100% tiếng Anh giúp nâng cao phản xạ tự nhiên.',
      'Được cấp giấy chứng nhận kinh nghiệm giảng dạy có dấu của Vinschool - làm đẹp hồ sơ xin việc sau này.',
      'Cơ hội được giữ lại làm giáo viên chính thức sau khi tốt nghiệp.'
    ],
    trainingProvided: true,
    noFeeCommitment: true,
    urgent: false,
    hot: false,
    directHrContact: {
      name: 'Cô Hoàng Thúy Vy - Điều phối Trợ giảng Vinschool',
      email: 'vy.ht@vinschool.edu.vn',
      phone: '024 3975 3333'
    }
  }
];

export const SALARY_BENCHMARKS: SalaryDataPoint[] = [
  {
    role: 'Lập trình viên Frontend / Backend (Fresher)',
    industryCode: 'CNKT',
    industryName: 'Công nghệ thông tin & Kỹ thuật',
    fresherNoExp: { min: 8, avg: 11.5, max: 15 },
    junior1to2: { min: 14, avg: 18.5, max: 25 },
    midSenior3to5: { min: 25, avg: 35, max: 55 },
    demandLevel: 'Rất cao',
    notes: 'Ứng viên có sản phẩm thực tế, đồ án cá nhân hoặc Portfolio trên Google Sites/GitHub thường đàm phán được mức lương cao hơn 20-30% so với mặt bằng chung.'
  },
  {
    role: 'Kiểm thử phần mềm (Manual & Automation QA)',
    industryCode: 'CNKT',
    industryName: 'Công nghệ thông tin & Kỹ thuật',
    fresherNoExp: { min: 7, avg: 9.5, max: 12 },
    junior1to2: { min: 12, avg: 16, max: 22 },
    midSenior3to5: { min: 20, avg: 28, max: 40 },
    demandLevel: 'Cao',
    notes: 'Phù hợp cả với những bạn học trái ngành, chuyển hướng nghề nghiệp có đức tính cẩn thận và chăm chỉ.'
  },
  {
    role: 'Nhân viên Điều phối Kho & Logistics TMĐT',
    industryCode: 'DVVT',
    industryName: 'Dịch vụ & Vận tải',
    fresherNoExp: { min: 7.5, avg: 9.5, max: 13 },
    junior1to2: { min: 11, avg: 14.5, max: 19 },
    midSenior3to5: { min: 18, avg: 24, max: 35 },
    demandLevel: 'Rất cao',
    notes: 'Thương mại điện tử bùng nổ dẫn đến nhu cầu tuyển dụng vị trí vận hành kho bãi rất lớn, nhận đào tạo từ con số 0.'
  },
  {
    role: 'Chuyên viên Chăm sóc khách hàng (CSKH & Telesales)',
    industryCode: 'KDTT',
    industryName: 'Kinh doanh & Tiếp thị',
    fresherNoExp: { min: 6.5, avg: 8.5, max: 12 },
    junior1to2: { min: 9.5, avg: 13, max: 18 },
    midSenior3to5: { min: 15, avg: 22, max: 32 },
    demandLevel: 'Cao',
    notes: 'Thu nhập phụ thuộc vào hoa hồng năng suất, nhiều bạn sinh viên mới ra trường có thu nhập trên 15 triệu nếu giao tiếp khéo léo.'
  },
  {
    role: 'Chuyên viên Sáng tạo Nội dung (Content & Video TikTok)',
    industryCode: 'KDTT',
    industryName: 'Kinh doanh & Tiếp thị',
    fresherNoExp: { min: 7, avg: 9, max: 13 },
    junior1to2: { min: 12, avg: 16.5, max: 22 },
    midSenior3to5: { min: 20, avg: 28, max: 45 },
    demandLevel: 'Rất cao',
    notes: 'Nhà tuyển dụng chú trọng kênh cá nhân (TikTok, Reels, blog) hơn là bằng cấp chính quy. Hãy chuẩn bị kênh mẫu làm portfolio.'
  },
  {
    role: 'Giao dịch viên & Kế toán sơ cấp (Bank Teller)',
    industryCode: 'TCKT',
    industryName: 'Tài chính & Kế toán',
    fresherNoExp: { min: 8, avg: 10.5, max: 14 },
    junior1to2: { min: 12, avg: 15.5, max: 20 },
    midSenior3to5: { min: 18, avg: 25, max: 38 },
    demandLevel: 'Ổn định',
    notes: 'Mức lương cơ bản ổn định, chế độ thưởng Tết thường từ 2 - 4 tháng lương thực tế.'
  },
  {
    role: 'Dược sĩ Nhà thuốc chuỗi tiện lợi (GPP)',
    industryCode: 'YDGD',
    industryName: 'Y tế & Dược phẩm',
    fresherNoExp: { min: 7.5, avg: 9.5, max: 12 },
    junior1to2: { min: 11, avg: 14, max: 18 },
    midSenior3to5: { min: 16, avg: 22, max: 30 },
    demandLevel: 'Rất cao',
    notes: 'Dược sĩ mới tốt nghiệp được đào tạo tay nghề bán lẻ, được doanh nghiệp bảo trợ hoàn thiện hồ sơ cấp chứng chỉ hành nghề.'
  },
  {
    role: 'Kỹ thuật viên Vận hành Máy Cơ khí & Tự động',
    industryCode: 'SXNL',
    industryName: 'Sản xuất & Nông nghiệp',
    fresherNoExp: { min: 8.5, avg: 11, max: 15 },
    junior1to2: { min: 13, avg: 17, max: 24 },
    midSenior3to5: { min: 22, avg: 30, max: 42 },
    demandLevel: 'Rất cao',
    notes: 'Rất khát nhân lực tại các khu công nghiệp Bắc Ninh, Hải Phòng, Bình Dương, Đồng Nai với chế độ nhà ở ký túc xá miễn phí.'
  }
];

export const INTERVIEW_REVIEWS: InterviewReview[] = [
  {
    id: 'rev-1',
    companyName: 'FPT Software',
    companyId: 'comp-fpt-software',
    jobTitle: 'Fresher React Developer',
    experienceLevel: 'Sinh viên mới tốt nghiệp',
    rating: 5,
    outcome: 'Nhận offer',
    difficulty: 'Vừa sức',
    hasDepositFee: false,
    reviewText: 'Quy trình tuyển dụng rất chuyên nghiệp và hoàn toàn minh bạch! Mình gửi CV vào buổi sáng thì chiều cùng ngày có chị HR gọi hẹn lịch phỏng vấn online. Buổi phỏng vấn diễn ra trong 45 phút, anh Technical Lead hỏi về kiến thức JavaScript căn bản, vòng đời React và các bài tập lớn mình từng làm ở trường. Anh còn chỉ cho mình cách viết code gọn hơn nữa. Sau 2 ngày nhận được kết quả đỗ kèm offer chi tiết, được tài trợ học bổng đào tạo có lương 9 triệu.',
    interviewQuestions: [
      'Giải thích sự khác biệt giữa var, let, const trong JS?',
      'Em đã từng xử lý bất đồng bộ bằng Promise hay async/await trong đồ án như thế nào?',
      'Nếu được giao một công nghệ hoàn toàn mới chưa từng học, em sẽ tự nghiên cứu theo cách nào?'
    ],
    adviceForNewbies: 'Các bạn sinh viên mới ra trường đừng quá tự ti vì chưa có kinh nghiệm. Hãy chuẩn bị thật kỹ về đồ án môn học hoặc bài tập lớn của mình. Có một trang Google Sites hoặc link GitHub demo đồ án chạy được là anh phỏng vấn sẽ cộng điểm cực kỳ cao!',
    date: '24/10/2026',
    verifiedCandidate: true
  },
  {
    id: 'rev-2',
    companyName: 'Viettel Post',
    companyId: 'comp-viettel-post',
    jobTitle: 'Nhân viên Điều phối Kho Vận',
    experienceLevel: 'Chưa có kinh nghiệm',
    rating: 5,
    outcome: 'Nhận offer',
    difficulty: 'Dễ thở',
    hasDepositFee: false,
    reviewText: 'Mình là sinh viên năm cuối trường Cao đẳng, nộp hồ sơ xin việc qua ứng dụng "Nối cơ hội - Đổi cuộc đời" trực tiếp tới phòng nhân sự Viettel Post. Hoàn toàn KHÔNG qua bất kỳ trung tâm môi giới nào, không mất 1 đồng phí hay cọc tiền như mấy vụ lừa đảo trên mạng. Phỏng vấn trực tiếp tại văn phòng chi nhánh, chú quản lý kho hỏi về sức khỏe, tinh thần chịu khó và test thử khả năng dùng máy tính tra mã bưu kiện. Được nhận và đi làm ngay tuần sau.',
    interviewQuestions: [
      'Em có chịu được áp lực vào các đợt cao điểm sale 11.11, 12.12 không?',
      'Nhà em ở đâu, có phương tiện đi lại chủ động không?',
      'Kể một tình huống em từng làm việc nhóm và phối hợp với người khác?'
    ],
    adviceForNewbies: 'Đến đúng giờ, trang phục lịch sự, trung thực. Doanh nghiệp nhà nước uy tín như Viettel tuyệt đối không bao giờ thu tiền đồng phục hay cọc giữ chân, các bạn nhớ lưu ý để không bị kẻ xấu lừa.',
    date: '20/10/2026',
    verifiedCandidate: true
  },
  {
    id: 'rev-3',
    companyName: 'Pharmacity',
    companyId: 'comp-pharmacity',
    jobTitle: 'Dược sĩ Nhà thuốc Thực hành',
    experienceLevel: 'Chưa có kinh nghiệm',
    rating: 4,
    outcome: 'Nhận offer',
    difficulty: 'Vừa sức',
    hasDepositFee: false,
    reviewText: 'Phỏng vấn 1 vòng trực tiếp tại văn phòng quận Bình Thạnh. Chị HR rất thân thiện, hỏi về kiến thức các nhóm thuốc kháng sinh, giảm đau hạ sốt căn bản và cho 1 tình huống đóng vai: khách hàng bị đau bụng đến mua thuốc thì em sẽ hỏi những thông tin gì. Không có chi phí phát sinh, được cấp áo blouse trắng miễn phí khi đi làm.',
    interviewQuestions: [
      'Phân biệt Paracetamol và Ibuprofen trong giảm đau hạ sốt?',
      'Cách xử lý khi khách hàng phàn nàn về giá thuốc?',
      'Em có thể xoay ca đêm 2 buổi/tuần được không?'
    ],
    adviceForNewbies: 'Ôn lại các nhóm thuốc phổ biến và luyện tập kỹ năng giao tiếp niềm nở. Doanh nghiệp cần người có tâm với người bệnh.',
    date: '15/10/2026',
    verifiedCandidate: true
  }
];

export const CV_SECTIONS_GUIDE = [
  {
    title: '1. Thông tin liên hệ chuyên nghiệp (Contact Header)',
    importance: 'Tối quan trọng',
    mustHave: [
      'Họ và tên đầy đủ (Viết hoa rõ ràng, cỡ chữ 18 - 22pt)',
      'Số điện thoại chính chủ (đang hoạt động Zalo để HR nhắn tin)',
      'Email chuyên nghiệp: Họ tên + năm sinh (Ví dụ: nguyenvanan.career@gmail.com; TRÁNH email thiếu nghiêm túc như babyboy_99@...)',
      'Khu vực sinh sống (Ví dụ: Cầu Giấy, Hà Nội - không cần ghi số nhà chi tiết)',
      'Link Portfolio cá nhân: Trang web Google Sites, LinkedIn, hoặc GitHub'
    ],
    antiPattern: 'Không để ngày sinh đầy đủ kiểu tử vi, không ghi tình trạng hôn nhân, không ghi tôn giáo/dân tộc.'
  },
  {
    title: '2. Tóm tắt mục tiêu nghề nghiệp (Career Summary for Newbie)',
    importance: 'Tạo ấn tượng trong 6 giây đầu',
    mustHave: [
      'Nêu rõ vị trí mong muốn ứng tuyển (Ví dụ: Thực tập sinh Nhân sự / Lập trình viên Fresher)',
      'Tóm tắt thế mạnh cốt lõi: Ngành học, chứng chỉ chuyên môn, công cụ thành thạo',
      'Định hướng đóng góp: "Mong muốn ứng dụng tư duy phân tích và kỹ năng học hỏi nhanh để đóng góp vào tiến độ dự án của công ty, đồng thời trau dồi chuyên môn để trở thành nhân sự nòng cốt."'
    ],
    antiPattern: 'TRÁNH viết mục tiêu ích kỷ chỉ cho bản thân như: "Muốn vào công ty để học việc và kiếm nhiều tiền". Nhà tuyển dụng trả lương để giải quyết vấn đề của họ.'
  },
  {
    title: '3. Cách biến "Đồ án môn học & Hoạt động" thành "Kinh nghiệm thực chiến"',
    importance: 'Chìa khóa vàng cho người chưa có thâm niên',
    mustHave: [
      'Đặt tên mục là "DỰ ÁN TIÊU BIỂU / CAPSTONE PROJECTS" thay vì để trống mục Kinh nghiệm',
      'Mô tả theo công thức STAR: Tình huống - Nhiệm vụ - Hành động cụ thể - Kết quả đo lường',
      'Ví dụ chuẩn: "Đồ án Quản lý Thư viện số: Thiết kế CSDL MySQL 15 bảng, lập trình 8 chức năng mượn trả bằng Java Spring Boot, đồ án đạt 9.5 điểm và được chọn báo cáo trước toàn khoa."'
    ],
    antiPattern: 'Không liệt kê sơ sài "Đã làm bài tập lớn web". Phải có số liệu, công nghệ sử dụng và kết quả.'
  },
  {
    title: '4. Kỹ năng chuyên môn & Công cụ số (Hard & Soft Skills)',
    importance: 'Tối ưu bộ lọc tự động ATS',
    mustHave: [
      'Liệt kê các phần mềm, công cụ cụ thể: Microsoft Excel (VLOOKUP, PivotTable), Canva, Figma, SQL, Git, Notion, SAP, Fast Accounting...',
      'Ngoại ngữ: Ghi rõ điểm số hoặc khả năng giao tiếp (Ví dụ: Đọc hiểu tài liệu kỹ thuật tiếng Anh, TOEIC 750)',
      'Kỹ năng mềm: Quản lý thời gian, thuyết trình, làm việc nhóm, tư duy giải quyết vấn đề'
    ],
    antiPattern: 'Không dùng thanh tiến độ chấm điểm phần trăm cảm tính kiểu: "Tiếng Anh 80%", "Kỹ năng giao tiếp 90%" (không có ý nghĩa định lượng).'
  }
];

export const GOOGLE_SITES_TUTORIAL = [
  {
    step: 1,
    title: 'Truy cập sites.google.com hoàn toàn miễn phí',
    detail: 'Đăng nhập bằng tài khoản Gmail của bạn. Nhấp vào nút dấu cộng (+) để tạo một trang web mới, hoặc chọn mẫu "Hồ sơ cá nhân" (Portfolio) có sẵn.'
  },
  {
    step: 2,
    title: 'Tùy biến Trang chủ (Home) - Giới thiệu bản thân',
    detail: 'Đặt tiêu đề trang (Ví dụ: "Nguyễn Văn An - Web Developer & Tech Enthusiast"). Tải lên một bức ảnh chân dung lịch sự, viết 1 đoạn ngắn về đam mê nghề nghiệp và nút bấm "Tải CV định dạng PDF".'
  },
  {
    step: 3,
    title: 'Tạo trang con "Dự án & Sản phẩm mẫu" (Projects)',
    detail: 'Đây là phần ghi điểm lớn nhất! Thêm hình ảnh chụp màn hình các bài tập lớn, file báo cáo nghiên cứu, link demo hoặc slide thuyết trình bạn từng thực hiện khi còn ngồi trên ghế nhà trường.'
  },
  {
    step: 4,
    title: 'Thêm mục "Chứng chỉ & Hoạt động ngoại khóa" (Certificates & Activities)',
    detail: 'Nhúng chứng chỉ các khóa học online miễn phí (Coursera, Google, HubSpot) và ảnh chụp các hoạt động tình nguyện mùa hè xanh, câu lạc bộ để chứng minh kỹ năng mềm vượt trội.'
  },
  {
    step: 5,
    title: 'Xuất bản trang (Publish) và gắn link vào CV',
    detail: 'Nhấp "Xuất bản" góc trên bên phải, đặt tên đường dẫn dễ nhớ (ví dụ: sites.google.com/view/an-tech-portfolio). Sau đó sao chép link dán ngay dưới tên của bạn trong CV và nộp cho nhà tuyển dụng!'
  }
];

export const ANTI_SCAM_RULES = [
  {
    ruleNumber: 1,
    danger: 'Bắt nộp tiền đặt cọc giữ chỗ, tiền làm thẻ ngân hàng hoặc phí đồng phục',
    explanation: 'Theo Điều 17 Bộ luật Lao động Việt Nam, người sử dụng lao động NGHIÊM CẤM thu bất kỳ khoản tiền hoặc giữ giấy tờ tùy thân của người lao động khi giao kết hợp đồng. Mọi công ty đòi tiền trước đều là lừa đảo 100%!',
    howToProtect: 'Kiên quyết từ chối nộp tiền. Rời khỏi địa điểm ngay lập tức nếu bị yêu cầu chuyển khoản.'
  },
  {
    ruleNumber: 2,
    danger: 'Bẫy làm nhiệm vụ Telegram, like video TikTok/YouTube nạp tiền nhận hoa hồng',
    explanation: 'Kẻ gian thường giả danh các tập đoàn lớn (Shopee, Tiki, VTV, CGV) mời làm cộng tác viên online "việc nhẹ lương 500k - 2 triệu/ngày". Ban đầu trả tiền thật vài chục nghìn, sau đó dụ nạp tiền triệu vào tài khoản cá nhân rồi chiếm đoạt.',
    howToProtect: 'Không tham gia bất kỳ nhóm làm nhiệm vụ nào trên Telegram/Zalo. Tuyệt đối không chuyển tiền để "nâng hạn mức đơn hàng".'
  },
  {
    ruleNumber: 3,
    danger: 'Công ty ma, phỏng vấn tại quán trà sữa, địa chỉ không có biển hiệu',
    explanation: 'Nhiều trung tâm môi giới chui thuê phòng trọ hoặc bàn ở quán cà phê để phỏng vấn, ép ứng viên ký hợp đồng dịch vụ không có giá trị pháp lý rồi thu phí hồ sơ từ 300.000đ - 1.000.000đ.',
    howToProtect: 'Chỉ đến phỏng vấn tại địa chỉ trụ sở/chi nhánh chính thức của công ty. Tra cứu mã số thuế (MST) trên trang dangkykinhdoanh.gov.vn trước khi đi.'
  },
  {
    ruleNumber: 4,
    danger: 'Yêu cầu chụp 2 mặt Căn cước công dân (CCCD) kèm ảnh chân dung và mã OTP',
    explanation: 'Kẻ xấu thu thập thông tin cá nhân của các bạn sinh viên nhẹ dạ để mở tài khoản ngân hàng ảo rửa tiền, hoặc vay tiền qua các app tín dụng đen trái phép.',
    howToProtect: 'Chỉ nộp bản photo CCCD khi đã chính thức ký hợp đồng lao động tại trụ sở doanh nghiệp. Không bao giờ gửi mã OTP cho bất kỳ ai.'
  },
  {
    ruleNumber: 5,
    danger: 'Chiêu trò "Việc làm tại Campuchia / Philippines / Dubai" lương 30 - 50 triệu',
    explanation: 'Quảng cáo việc làm đánh máy, CSKH không cần ngoại ngữ hay bằng cấp nhưng lương hàng chục triệu. Khi sang nơi bị bán vào các tổ chức cờ bạc lừa đảo, bị cưỡng bức lao động và tống tiền chuộc.',
    howToProtect: 'Cảnh giác tuyệt đối với lời mời đi làm việc tại biên giới hoặc nước ngoài mà không qua doanh nghiệp được Bộ LĐ-TB&XH cấp phép.'
  },
  {
    ruleNumber: 6,
    danger: 'Môi giới việc làm trung gian thu phí hoa hồng tháng lương đầu',
    explanation: 'Các trung tâm môi giới hứa hẹn việc làm ngon lành nhưng thực chất chỉ đẩy bạn sang các công việc bấp bênh hoặc không đúng cam kết ban đầu.',
    howToProtect: 'Sử dụng ứng dụng "Nối cơ hội - Đổi cuộc đời" để liên hệ trực tiếp với nhân sự nội bộ của doanh nghiệp mà không tốn bất kỳ chi phí trung gian nào.'
  }
];
