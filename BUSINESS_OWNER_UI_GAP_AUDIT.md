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
- **Zone 1 (`zone1_admin.js`)**: Quản trị Nền tảng (SA-01 -> SA-04) & Cấu hình Vận hành Doanh nghiệp (BO-01 Hồ sơ Pháp lý, Mã số thuế, Đơn vị tiền tệ, Quy tắc FEFO & Hạn mức rủi ro).
- **Zone 2 (`zone2_inventory.js`)**: Quản lý Kho, Biến thể Mỹ phẩm FEFO, Dự báo PO Draft & Công nợ Nhà cung cấp (BO-03, BO-04, BO-09).
- **Zone 3 (`zone3_sales.js`)**: Đơn hàng Đa kênh, P&L (Accrual vs Cashflow), Sổ thu chi VietQR B2B, Chi phí OPEX & Đối soát Shopee/TikTok Shop (BO-02, BO-05, BO-06).
- **Zone 4 (`zone4_pos.js`)**: Trạm POS Thu ngân, Kiểm kê quầy, Nhập kho quầy SE-03, Giao ca két tiền, Đổi trả & Tra cứu (SE-01 -> SE-04).
- **Zone 5 (`zone5_ai.js`)**: Executive Dashboard, AI Business Analytics, Anomaly Center, What-If Lab, C-Level Strategy Advisor (BO-05, BO-07, BO-08, BO-10, BO-11).

---

## II. BẢNG SO SÁNH 1-1 TẤT CẢ CHỨC NĂNG DÀNH CHO CHỦ DOANH NGHIỆP (SME OWNER)

| Mã màn hình | Tên màn hình / Tên nghiệp vụ bản cũ | Trạng thái ở `new_pd` | Vị trí / Đường dẫn truy cập trong `new_pd` |
|---|---|---|---|
| **BO-01** | Cấu hình Vận hành Doanh nghiệp (Business Profile) | ✅ Đã bổ sung mới | **App Switcher ➔ Quản trị & BO-01 ➔ Tab "Hồ sơ Doanh nghiệp & Vận hành (BO-01)"** |
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

1. **Xem & Thiết lập Hồ sơ Doanh nghiệp BO-01:**
   - Click App Switcher (Grid 9 chấm) ➔ Choose **`Quản trị & BO-01`**.
   - Tab 1 chính là **🏢 1. Hồ sơ Doanh nghiệp & Vận hành (BO-01)**:
     - Xem Tên công ty pháp lý, Mã số thuế `0317892301`, Người đại diện, Trụ sở chính.
     - Thiết lập Đơn vị tiền tệ, Phương pháp tính giá vốn FEFO, Ngưỡng cảnh báo lô hãn dùng < 60 ngày.
     - Quản lý danh sách 3 Chi nhánh cửa hàng (Maison Quận 1, Thủ Đức, Bình Thạnh).
     - Cấu hình Hạn mức duyệt chi tự động VietQR B2B & Ngân sách OPEX.

2. **Xem Báo cáo Tổng quan & Chiến lược AI (Executive & Strategy):**
   - Click biểu tượng **AI Advisor** trên Topbar hoặc chọn App Switcher ➔ `Cố vấn AI & Báo cáo`.
   - Chuyển giữa các tab:
     - **Dashboard Điều hành**: Xem doanh thu, biên lợi nhuận, cashflow, tồn kho và cảnh báo.
     - **Tổng quan Chuỗi**: Xem chỉ số từng chi nhánh (Quận 1, Thủ Đức, Bình Thạnh).
     - **What-If Scenario Lab**: Kéo thanh trượt giả định biến động giá vốn/doanh thu để xem tác động Dòng tiền & P&L.
     - **Cảnh báo Bất thường**: Xem rò rỉ dòng tiền, lệch kho, gian lận chiết khấu.
     - **Trợ lý Chiến lược C-Level**: Đặt câu hỏi tự nhiên cho AI Copilot về định hướng kinh doanh.

3. **Quản lý Tài chính, Doanh thu & Dòng tiền (Financial & Revenue Management):**
   - Click chọn menu **Tài chính** trên Topbar.
   - Các sub-tab nghiệp vụ:
     - **P&L Dồn tích vs Dòng tiền**: So sánh Lợi nhuận Kế toán (Accrual P&L) vs Dòng tiền Thực nhận (Cashflow).
     - **Đơn hàng Đa kênh**: Quản lý đơn hàng Shopee, TikTok Shop, Website, POS.
     - **Chi phí & Ngân sách OPEX**: Theo dõi chi phí mặt bằng, nhân sự, marketing.
     - **Đối soát Sàn TMĐT**: Xem chênh lệch doanh số sàn vs tiền về tài khoản ngân hàng.
     - **Sổ Thu Chi VietQR**: Bấm nút **"Lập phiếu Chi VietQR"** hoặc **"Lập phiếu Thu B2B"**.

4. **Quản lý Kho hàng, Biến thể Mỹ phẩm & Nhập hàng (Inventory & Supply Chain):**
   - Click chọn menu **Kho hàng** trên Topbar.
   - Các sub-tab nghiệp vụ:
     - **Sản phẩm & Biến thể FEFO**: Theo dõi lô date hãn dùng mỹ phẩm, vị trí kệ kho.
     - **Dự báo Nhu cầu & PO Draft**: Xem AI gợi ý số lượng cần nhập.
     - **Nhật ký Xuất Nhập Tồn**: Tra cứu lịch sử di chuyển kho.
     - **Nhà cung cấp & Công nợ**: Theo dõi công nợ quá hạn và thanh toán VietQR B2B.

---
*Báo cáo đã cập nhật hoàn tất.*
