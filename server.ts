import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
}) : null;

// Endpoint: AI CV Reviewer & Optimizer
app.post('/api/gemini/review-cv', async (req, res) => {
  try {
    const { cvText, targetRole, experienceLevel } = req.body;

    if (!cvText || typeof cvText !== 'string' || cvText.trim().length < 20) {
      return res.status(400).json({ error: 'Nội dung CV quá ngắn hoặc không hợp lệ.' });
    }

    if (!ai) {
      // Fallback structured feedback if API key is not yet configured
      return res.json({
        overallScore: 82,
        summary: `Hồ sơ có nền tảng tốt cho vị trí "${targetRole || 'Mục tiêu'}". Điểm nổi bật là tinh thần học hỏi, tuy nhiên đối với ứng viên cấp bậc "${experienceLevel || 'Chưa có kinh nghiệm'}", bạn nên lượng hóa các kết quả từ đồ án môn học, hoạt động ngoại khóa và thực tập dự án thực tế thay vì chỉ liệt kê chung chung.`,
        strengths: [
          'Trình bày bố cục rõ ràng, nêu bật được các công cụ và kỹ năng nền tảng đã học.',
          'Có thái độ cầu tiến và đam mê theo đuổi ngành nghề.',
          'Thể hiện được kỹ năng mềm qua làm việc nhóm và giao tiếp.'
        ],
        improvements: [
          'Bổ sung kết quả đo lường được (Ví dụ: "Hoàn thành đồ án đạt 9.2 điểm, xây dựng hệ thống phục vụ 500 người dùng thử nghiệm").',
          'Tích hợp đường link Portfolio cá nhân (Google Sites, GitHub, Behance hoặc Canva) vào phần thông tin liên hệ.',
          'Căn chỉnh từ khóa trùng khớp với bản mô tả công việc (Job Description) để tối ưu hệ thống lọc tự động (ATS).'
        ],
        suggestedKeywords: [
          'Giải quyết vấn đề (Problem Solving)',
          'Tối ưu hóa quy trình',
          'Đồ án tốt nghiệp / Capstone Project',
          'Kỹ năng phối hợp đa phòng ban',
          'Năng lực tự nghiên cứu'
        ],
        sampleBulletPoints: [
          'Trước: "Đã làm dự án quản lý bán hàng trong trường"',
          'Sau (Chuẩn ATS): "Chủ trì xây dựng ứng dụng quản trị bán hàng (Spring Boot & React), thiết kế 12 màn hình UX và tối ưu truy vấn SQL giảm 35% thời gian phản hồi."',
          'Trước: "Tham gia câu lạc bộ sinh viên"',
          'Sau: "Phụ trách truyền thông CLB Khoa, lập kế hoạch nội dung thu hút hơn 2.500 lượt tương tác và tăng 40% số lượng thành viên mới."'
        ],
        googleSitesTip: 'Nên tạo 1 trang Google Sites miễn phí (dạng: sites.google.com/view/ten-ban) để đưa ảnh chụp màn hình đồ án, chứng chỉ khóa học Coursera/Udemy và video thuyết trình.'
      });
    }

    const prompt = `Bạn là chuyên gia tư vấn tuyển dụng và đánh giá CV hàng đầu tại Việt Nam, đặc biệt am hiểu việc hỗ trợ sinh viên mới tốt nghiệp, học sinh hoặc người chưa có kinh nghiệm tìm được công việc đầu đời tử tế.
Hãy phân tích nội dung CV sau đây:
- Vị trí mong muốn: ${targetRole || 'Vị trí khởi điểm / Thực tập sinh'}
- Cấp độ kinh nghiệm: ${experienceLevel || 'Chưa có kinh nghiệm / Mới ra trường'}
- Nội dung CV:
"""
${cvText.slice(0, 4000)}
"""

Hãy trả về định dạng JSON hợp lệ (không kèm markdown \`\`\`json) với cấu trúc:
{
  "overallScore": <số nguyên từ 50 đến 98>,
  "summary": "<nhận xét tổng quan súc tích, khích lệ và thực tế bằng tiếng Việt>",
  "strengths": ["<điểm mạnh 1>", "<điểm mạnh 2>", "<điểm mạnh 3>"],
  "improvements": ["<điểm cần cải thiện 1>", "<điểm cần cải thiện 2>", "<điểm cần cải thiện 3>"],
  "suggestedKeywords": ["<từ khóa 1>", "<từ khóa 2>", "<từ khóa 3>", "<từ khóa 4>"],
  "sampleBulletPoints": [
    "<ví dụ chuyển câu yếu sang câu hành động định lượng chuẩn ATS 1>",
    "<ví dụ chuyển câu yếu sang câu hành động định lượng chuẩn ATS 2>"
  ],
  "googleSitesTip": "<lời khuyên tạo trang Portfolio Google Sites hoặc sản phẩm mẫu để ghi điểm tuyệt đối với nhà tuyển dụng dù chưa có thâm niên làm việc>"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text?.trim() || '{}';
    const jsonResult = JSON.parse(text);
    return res.json(jsonResult);
  } catch (error: any) {
    console.error('Error reviewing CV:', error);
    return res.status(500).json({
      error: 'Không thể phân tích CV lúc này. Vui lòng thử lại sau giây lát.',
    });
  }
});

// Endpoint: AI Scam Detection for Job Postings
app.post('/api/gemini/check-scam', async (req, res) => {
  try {
    const { jobTitle, companyName, description } = req.body;

    if (!description || description.trim().length < 15) {
      return res.status(400).json({ error: 'Nội dung tin tuyển dụng quá ngắn.' });
    }

    if (!ai) {
      // Rule-based heuristic check
      const lower = description.toLowerCase();
      const redFlags = [];
      if (lower.includes('cọc') || lower.includes('đặt cọc') || lower.includes('phí hồ sơ') || lower.includes('phí đồng phục')) {
        redFlags.push('Yêu cầu nộp tiền cọc, thế chân hoặc phí hồ sơ/đồng phục trước khi nhận việc.');
      }
      if (lower.includes('telegram') || lower.includes('nhiệm vụ') || lower.includes('chuyển khoản')) {
        redFlags.push('Dẫn dắt ứng viên qua nhóm Telegram làm nhiệm vụ, nạp tiền hoàn hoa hồng.');
      }
      if (lower.includes('không cần kinh nghiệm') && (lower.includes('30 triệu') || lower.includes('40 triệu') || lower.includes('lương 20-50tr'))) {
        redFlags.push('Mức lương cao bất thường so với vị trí không yêu cầu kinh nghiệm chuyên môn.');
      }

      const riskLevel = redFlags.length >= 2 ? 'Nguy cơ cao' : redFlags.length === 1 ? 'Cần thận trọng' : 'An toàn';

      return res.json({
        riskLevel,
        safetyScore: riskLevel === 'Nguy cơ cao' ? 30 : riskLevel === 'Cần thận trọng' ? 65 : 95,
        analysis: riskLevel === 'An toàn'
          ? 'Tin tuyển dụng không chứa các từ khóa đáng ngờ thường gặp trong các vụ việc lừa đảo việc làm. Doanh nghiệp có dấu hiệu minh bạch.'
          : 'Phát hiện một số dấu hiệu đáng ngờ tương đồng với các chiêu trò bẫy việc làm phổ biến. Hãy cẩn trọng không cung cấp thông tin tài khoản ngân hàng hoặc nộp bất kỳ khoản tiền nào.',
        warningFlags: redFlags.length > 0 ? redFlags : ['Không phát hiện từ khóa lừa đảo nguy hiểm.'],
        recommendations: [
          'Không bao giờ nộp tiền cọc (đồng phục, giữ chỗ, tài liệu đào tạo) dưới bất kỳ hình thức nào.',
          'Kiểm tra mã số thuế và địa chỉ đăng ký doanh nghiệp tại Cổng thông tin Quốc gia về đăng ký doanh nghiệp (dangkykinhdoanh.gov.vn).',
          'Đến phỏng vấn trực tiếp tại văn phòng công ty, cảnh giác với các cuộc phỏng vấn chỉ qua ứng dụng nhắn tin.'
        ]
      });
    }

    const prompt = `Bạn là chuyên gia an ninh việc làm và bảo vệ người lao động tại Việt Nam.
Hãy thẩm định độ rủi ro lừa đảo (Anti-Scam Check) của tin tuyển dụng sau:
- Tiêu đề công việc: ${jobTitle || 'Chưa cung cấp'}
- Tên công ty: ${companyName || 'Chưa cung cấp'}
- Mô tả:
"""
${description.slice(0, 3000)}
"""

Hãy đánh giá xem tin này có dấu hiệu lừa đảo phổ biến hiện nay hay không (như: bẫy làm nhiệm vụ Telegram, lừa nộp tiền cọc đồng phục/thẻ nhân viên, việc nhẹ lương 30-50 triệu không cần kinh nghiệm, dụ dỗ sang nước ngoài, môi giới trung gian thu phí, v.v.).

Trả về định dạng JSON hợp lệ:
{
  "riskLevel": "<'An toàn' | 'Cần thận trọng' | 'Nguy cơ cao'>",
  "safetyScore": <điểm từ 10 đến 100>,
  "analysis": "<lời giải thích ngắn gọn, súc tích bằng tiếng Việt>",
  "warningFlags": ["<dấu hiệu 1>", "<dấu hiệu 2>"],
  "recommendations": ["<khuyến nghị an toàn 1>", "<khuyến nghị an toàn 2>", "<khuyến nghị an toàn 3>"]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text?.trim() || '{}';
    const jsonResult = JSON.parse(text);
    return res.json(jsonResult);
  } catch (error: any) {
    console.error('Error checking scam:', error);
    return res.status(500).json({
      error: 'Không thể thẩm định tin tuyển dụng lúc này. Vui lòng kiểm tra lại.',
    });
  }
});

// Endpoint: AI Career Path & Skill Advisor
app.post('/api/gemini/career-coach', async (req, res) => {
  try {
    const { userBackground, interestIndustry, currentDifficulties } = req.body;

    if (!userBackground) {
      return res.status(400).json({ error: 'Vui lòng cung cấp nền tảng bản thân.' });
    }

    if (!ai) {
      return res.json({
        adviceTitle: `Lộ trình phát triển năng lực & tìm việc: Khối ngành ${interestIndustry || 'Mục tiêu'}`,
        roadmap: [
          {
            stage: 'Tháng 1: Xây dựng nền tảng & Portfolio thực chiến',
            tasks: [
              'Tự thực hiện 1-2 dự án mô phỏng thực tế (sản phẩm mẫu, bài phân tích, trang web cá nhân trên Google Sites).',
              'Hoàn thành các chứng chỉ miễn phí có giá trị cao từ Google Career Certificates, HubSpot hoặc Cisco.',
              'Chuẩn bị CV chuẩn 1 trang tập trung vào kỹ năng làm được thay vì thâm niên.'
            ]
          },
          {
            stage: 'Tháng 2: Nối kết doanh nghiệp trực tiếp & Ứng tuyển không qua trung gian',
            tasks: [
              'Lọc các vị trí Fresher / Thực tập sinh không yêu cầu kinh nghiệm trên "Nối cơ hội - Đổi cuộc đời".',
              'Gửi email trực tiếp đến Trưởng bộ phận hoặc HR kèm Portfolio Google Sites.',
              'Tránh hoàn toàn các hội nhóm tuyển dụng lừa đảo, kiên quyết từ chối mọi yêu cầu chuyển khoản.'
            ]
          },
          {
            stage: 'Tháng 3: Luyện phỏng vấn & Thử việc tự tin',
            tasks: [
              'Chuẩn bị câu trả lời theo phương pháp STAR (Tình huống - Nhiệm vụ - Hành động - Kết quả).',
              'Thể hiện thái độ ham học hỏi và tinh thần trách nhiệm cao - điều doanh nghiệp coi trọng nhất ở người mới.'
            ]
          }
        ],
        keySkillsToLearn: [
          'Kỹ năng số & công cụ văn phòng chuyên sâu (Excel/Google Sheets nâng cao, Canva, Notion)',
          'Giao tiếp chuyên nghiệp qua email và báo cáo công việc',
          'Tư duy giải quyết vấn đề và thích nghi nhanh'
        ],
        portfolioRecommendation: 'Hãy tạo ngay 1 trang Portfolio trên Google Sites (hoàn toàn miễn phí, không cần biết lập trình) để chứa các bài tập lớn, hình ảnh hoạt động, chứng chỉ và lời giới thiệu bản thân.'
      });
    }

    const prompt = `Bạn là Chuyên gia Khai vấn Nghề nghiệp và Cố vấn Kỹ năng tại Việt Nam cho ứng viên mọi lứa tuổi (đặc biệt học sinh, sinh viên mới ra trường, người chưa có kinh nghiệm, người chuyển nghề).
Thông tin ứng viên:
- Nền tảng: ${userBackground}
- Ngành nghề quan tâm: ${interestIndustry || 'Chưa xác định'}
- Khó khăn đang gặp phải: ${currentDifficulties || 'Chưa có kinh nghiệm, khó cạnh tranh, sợ gặp lừa đảo'}

Hãy lập lộ trình 3 giai đoạn hành động cụ thể và lời khuyên thiết thực.
Trả về định dạng JSON hợp lệ:
{
  "adviceTitle": "<tiêu đề lộ trình>",
  "roadmap": [
    {
      "stage": "<tên giai đoạn 1>",
      "tasks": ["<nhiệm vụ 1>", "<nhiệm vụ 2>", "<nhiệm vụ 3>"]
    },
    {
      "stage": "<tên giai đoạn 2>",
      "tasks": ["<nhiệm vụ 1>", "<nhiệm vụ 2>"]
    },
    {
      "stage": "<tên giai đoạn 3>",
      "tasks": ["<nhiệm vụ 1>", "<nhiệm vụ 2>"]
    }
  ],
  "keySkillsToLearn": ["<kỹ năng 1>", "<kỹ năng 2>", "<kỹ năng 3>"],
  "portfolioRecommendation": "<lời khuyên tạo Portfolio website (như Google Sites) để bù đắp sự thiếu hụt kinh nghiệm>"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text?.trim() || '{}';
    const jsonResult = JSON.parse(text);
    return res.json(jsonResult);
  } catch (error: any) {
    console.error('Error in career coach:', error);
    return res.status(500).json({
      error: 'Không thể tư vấn lúc này. Vui lòng thử lại.',
    });
  }
});

// Vite middleware in dev or static serving in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
