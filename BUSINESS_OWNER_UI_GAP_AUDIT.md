# BÁO CÁO RÀ SOÁT & SO SÁNH GIAO DIỆN CHỦ DOANH NGHIỆP (SME OWNER UI AUDIT)
**Dự án:** Stitch AI Business Copilot Platform  
**Phiên bản:** Odoo-style SPA Prototype (`new_pd`) vs Legacy Multi-HTML (`stitch_ai_business_copilot_platform`)  
**Ngày thực hiện:** 23/09/2026  
**Người rà soát:** UI/UX Designer & Business Owner End-User Specialist  

---

## I. TỔNG QUAN RÀ SOÁT

Hệ thống cũ bao gồm **53 thư mục HTML độc lập** với 5 nhóm vai trò chính (SA - Quản trị, BO - Chủ doanh nghiệp, SE - Thu ngân/Quầy, AI Core, Modals phụ). 

Trong bản mới `new_pd`, toàn bộ 53 màn hình này đã được hợp nhất thành **1 Đơn trang SPA (Single Page Application)** chạy trên nền HTML5 + CSS Tailwind/Custom + JavaScript ES6 Modular, phân chia thành **5 Zone chính**:
- **Zone 0 (`zone0_shell.js`)**: App Shell, Topbar, Sidebar, Audit Drawer, AI Copilot Drawer.
- **Zone 1 (`zone1_admin.js`)**: Quản trị Nền tảng (SA-01 -> SA-04) & Cấu hình Doanh nghiệp (BO-01).
- **Zone 2 (`zone2_inventory.js`)**: Quản lý Kho, Biến thể Mỹ phẩm FEFO, Dự báo PO Draft & Công nợ Nhà cung cấp (BO-03, BO-04, BO-09).
- **Zone 3 (`zone3_sales.js`)**: Đơn hàng Đa kênh, P&L (Accrual vs Cashflow), Sổ thu chi VietQR B2B, Chi phí OPEX & Đối soát Shopee/TikTok Shop (BO-02, BO-05, BO-06).
- **Zone 4 (`zone4_pos.js`)**: Trạm POS Thu ngân, Kiểm kê quầy, Nhập kho quầy SE-03, Giao ca két tiền, Đổi trả & Tra cứu (SE-01 -> SE-04).
- **Zone 5 (`zone5_ai.js`)**: Executive Dashboard, AI Business Analytics, Anomaly Center, What-If Lab, C-Level Strategy Advisor (BO-05, BO-07, BO-08, BO-10, BO-11).

---

## II. BẢNG SO SÁNH 1-1 TẤT CẢ CHỨC NĂNG DÀNH CHO CHỦ DOANH NGHIỆP (SME OWNER)

| Mã màn hình | Tên màn hình / Tên nghiệp vụ bản cũ | Trạng thái ở `new_pd` | Vị trí / Đường dẫn truy cập trong `new_pd` |
|---|---|---|---|
| **BO-01** | Cấu hình Vận hành Doanh nghiệp (Business Profile) | ✅ Đã hoàn thiện | **App Switcher ➔ Quản trị ➔ Tab "Hồ sơ Doanh nghiệp"** |
| **BO-02** | Quản lý Chi phí OPEX & Ngân sách Tài chính | ✅ Đã hoàn thiện | **App Switcher ➔ Tài chính ➔ Sub-tab "Chi phí & Ngân sách OPEX"** |
| **BO-02m**| Ghi nhận Chi phí Nhanh OPEX (Mobile View) | ✅ Đã đáp ứng | **Co giãn màn hình mobile ➔ Tài chính ➔ OPEX (Có nút Lập phiếu chi nhanh)** |
| **BO-03** | Quản lý Sản phẩm, Biến thể & Bảng Giá | ✅ Đã hoàn thiện | **App Switcher ➔ Kho hàng ➔ Sub-tab "Sản phẩm & Biến thể FEFO"** |
| **BO-04** | Quản lý Tồn kho, Xuất Nhập Tồn & Lô Date FEFO | ✅ Đã hoàn thiện | **App Switcher ➔ Kho hàng ➔ Sub-tab "Nhật ký Xuất Nhập Tồn"** |
| **BO-04m**| Kiểm kho nhanh & Quét mã FEFO (Mobile View) | ✅ Đã hoàn thiện | **App Switcher ➔ Thu ngân ➔ Tab "Kiểm kê tại Quầy"** |
| **BO-05** | Executive Command Center (Dashboard KPI) | ✅ Đã hoàn thiện | **App Switcher ➔ AI Advisor ➔ Tab "Executive Dashboard"** |
| **BO-05s**| Báo cáo Tổng quan Chuỗi Cửa hàng | ✅ Đã hoàn thiện | **App Switcher ➔ AI Advisor ➔ Sub-tab "Tổng quan Chuỗi cửa hàng"** |
| **BO-06** | Quản lý Đơn hàng & Vận hành Đa kênh | ✅ Đã hoàn thiện | **App Switcher ➔ Tài chính ➔ Sub-tab "Đơn hàng Đa kênh"** |
| **BO-06f**| Form Tạo đơn hàng xuất kho đa kênh mới | ✅ Đã hoàn thiện | **Tài chính ➔ Đơn hàng ➔ Nút "+ Tạo đơn hàng mới"** |
| **BO-06d**| Xem chi tiết đơn hàng & Lịch sử biến động | ✅ Đã hoàn thiện | **Tài chính ➔ Đơn hàng ➔ Bấm vào mã đơn hàng bất kỳ `#ORD-...`** |
| **BO-07** | AI Business Analytics & Phân tích Đa chiều | ✅ Đã hoàn thiện | **App Switcher ➔ AI Advisor ➔ Sub-tab "AI Analytics"** |
| **BO-08** | Trung tâm Cảnh báo Rủi ro Realtime (Anomaly Engine) | ✅ Đã hoàn thiện | **App Switcher ➔ AI Advisor ➔ Tab "Cảnh báo Bất thường (Anomaly)"** |
| **BO-09** | Dự báo Nhu cầu & Gợi ý Nhập hàng Tự động | ✅ Đã hoàn thiện | **App Switcher ➔ Kho hàng ➔ Sub-tab "Dự báo Nhu cầu & PO Draft"** |
| **BO-10** | What-If Scenario Lab (Phòng thí nghiệm Kịch bản) | ✅ Đã hoàn thiện | **App Switcher ➔ AI Advisor ➔ Tab "What-If Scenario Lab"** |
| **BO-11** | C-Level AI Business Advisor (Trợ lý Chiến lược) | ✅ Đã hoàn thiện | **App Switcher ➔ AI Advisor ➔ Tab "C-Level Strategic Advisor"** |
| **FIN-01**| Báo cáo Kết quả KD P&L (Accrual vs Cashflow) | ✅ Đã hoàn thiện | **App Switcher ➔ Tài chính ➔ Sub-tab "Báo cáo P&L & Dòng tiền"** |
| **FIN-02**| Sổ Thu Chi Dòng tiền Thực tế (Cashflow Book) | ✅ Đã hoàn thiện | **App Switcher ➔ Tài chính ➔ Sub-tab "Sổ thu chi & Quỹ cashflow"** |
| **FIN-03**| Đối soát Chi tiết Ví Sàn (Shopee / TikTok Shop) | ✅ Đã hoàn thiện | **App Switcher ➔ Tài chính ➔ Sub-tab "Đối soát Sàn TMĐT"** |
| **FIN-04**| Quản lý Nhà Cung Cấp & Công Nợ B2B | ✅ Đã hoàn thiện | **App Switcher ➔ Kho hàng ➔ Sub-tab "Nhà cung cấp & Công nợ"** |
| **MODAL1**| Modal Lập Phiếu Chi VietQR B2B | ✅ Đã hoàn thiện | **Tài chính ➔ Nút "Lập phiếu Chi VietQR"** |
| **MODAL2**| Modal Lập Phiếu Thu Bán sỉ / Đại lý | ✅ Đã hoàn thiện | **Tài chính ➔ Nút "Lập phiếu Thu B2B"** |
| **MODAL3**| Modal Thanh toán Công nợ Hàng loạt VietQR | ✅ Đã hoàn thiện | **Kho hàng ➔ Nhà cung cấp ➔ Nút "Thanh toán VietQR Hàng loạt"** |
| **MODAL4**| Modal Xem trước PO Draft (PO Preview 1 & 2) | ✅ Đã hoàn thiện | **Kho hàng ➔ PO Draft ➔ Nút "Duyệt PO Draft"** |
| **MODAL5**| Modal Nhập kho Khởi tạo Lô Date (PO Intake 1/2/3) | ✅ Đã hoàn thiện | **Kho hàng ➔ PO Draft ➔ Nút "Khởi tạo Nhập kho"** |

---

## III. HƯỚNG DẪN TRUY CẬP 100% CHỨC NĂNG DÀNH CHO CHỦ DOANH NGHIỆP

Chủ doanh nghiệp có thể truy cập toàn bộ các phân hệ thông qua **App Switcher (Grid 9 chấm bên trái topbar)** hoặc **Menu điều hướng chính**:

1. **Xem Báo cáo Tổng quan & Chiến lược AI (Executive & Strategy):**
   - Click biểu tượng **AI Advisor** trên Topbar hoặc chọn App Switcher ➔ `Cố vấn AI & Báo cáo`.
   - Chuyển giữa các tab:
     - **Dashboard Điều hành**: Xem doanh thu, biên lợi nhuận, cashflow, tồn kho và cảnh báo.
     - **Tổng quan Chuỗi**: Xem chỉ số từng chi nhánh (Quận 1, Thủ Đức, Bình Thạnh).
     - **What-If Scenario Lab**: Kéo thanh trượt giả định biến động giá vốn/doanh thu để xem tác động Dòng tiền & P&L.
     - **Cảnh báo Bất thường**: Xem rò rỉ dòng tiền, lệch kho, gian lận chiết khấu.
     - **Trợ lý Chiến lược C-Level**: Đặt câu hỏi tự nhiên cho AI Copilot về định hướng kinh doanh.

2. **Quản lý Tài chính, Doanh thu & Dòng tiền (Financial & Revenue Management):**
   - Click chọn menu **Tài chính** trên Topbar.
   - Các sub-tab nghiệp vụ:
     - **P&L Dồn tích vs Dòng tiền**: So sánh Lợi nhuận Kế toán (Accrual P&L) vs Dòng tiền Thực nhận (Cashflow).
     - **Đơn hàng Đa kênh**: Quản lý đơn hàng Shopee, TikTok Shop, Website, POS. Bấm vào bất kỳ dòng đơn hàng nào để mở chi tiết đơn hàng (lịch sử biến động status).
     - **Chi phí & Ngân sách OPEX**: Theo dõi chi phí mặt bằng, nhân sự, marketing và hạn mức ngân sách.
     - **Đối soát Sàn TMĐT**: Xem chênh lệch doanh số sàn vs tiền về tài khoản ngân hàng (Shopee, TikTok).
     - **Sổ Thu Chi VietQR**: Bấm nút **"Lập phiếu Chi VietQR"** hoặc **"Lập phiếu Thu B2B"** để kích hoạt VietQR code động tự động dán nội dung chuyển khoản.

3. **Quản lý Kho hàng, Biến thể Mỹ phẩm & Nhập hàng (Inventory & Supply Chain):**
   - Click chọn menu **Kho hàng** trên Topbar.
   - Các sub-tab nghiệp vụ:
     - **Sản phẩm & Biến thể FEFO**: Theo dõi lô date hãn dùng mỹ phẩm (cảnh báo đỏ nếu dưới 60 ngày), vị trí kệ kho.
     - **Dự báo Nhu cầu & PO Draft**: Xem AI gợi ý số lượng cần nhập dựa trên tốc độ bán cạn (Run-rate). Bấm **"Duyệt PO Draft"** để mở Wizard duyệt 3 bước.
     - **Nhật ký Xuất Nhập Tồn**: Tra cứu lịch sử di chuyển kho giữa Kho Tổng và các Quầy.
     - **Nhà cung cấp & Công nợ**: Theo dõi công nợ quá hạn, hạn thanh toán và tạo lệnh chuyển khoản VietQR B2B cho NCC.

---

## IV. ĐÁNH GIÁ UI/UX THEO TIÊU CHUẨN ODOO & CÁC ĐIỂM CẦN CẢI THIỆN Ở PHASE 2

### 1. Hiện trạng Icon AI (Sparkles `✨`) rườm rà
- Bản prototype hiện tại còn xuất hiện biểu tượng `✨` ở quá nhiều vị trí (Topbar, KPI cards, Table headers, Action buttons).
- **Đánh giá Designer & End-User**: Việc lạm dụng icon sparkles `✨` làm giao diện trông "đồ chơi", thiếu tính tin cậy của một phần mềm quản trị doanh nghiệp (ERP/POS) chuẩn Odoo.
- **Giải pháp Phase 2**: Loại bỏ toàn bộ icon `✨` rực rỡ; thay bằng badge chữ phẳng thanh lịch (`AI Smart`, `[Gợi ý AI]`, `Tự động FEFO`) với màu sắc dịu nhẹ.

### 2. Chuẩn hóa Badge Trạng thái (Status Badges) & Palette màu Odoo
- Cần áp dụng chuẩn Odoo Badge System:
  - **Draft (Bản nháp)**: Nền xám nhạt `#F1F5F9`, chữ `#475569`.
  - **Pending / Waiting (Chờ xử lý)**: Nền vàng kem `#FEF3C7`, chữ `#D97706`.
  - **Approved / Done (Đã hoàn tất)**: Nền xanh pastel `#DCFCE7`, chữ `#15803D`.
  - **Cancelled / Risk (Rủi ro / Hủy)**: Nền hồng kem `#FEE2E2`, chữ `#B91C1C`.
- Tăng độ tương phản chữ trên các bảng biểu danh sách sản phẩm và sổ thu chi.

---
*Báo cáo đã được ghi nhận vào hệ thống. Sẵn sàng chuyển sang Phase 2 để tiến hành nâng cấp UI/UX Odoo và dọn dẹp icon AI.*
