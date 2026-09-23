# HƯỚNG DẪN TOÀN BỘ QUY TRÌNH THAO TÁC VÀ SỬ DỤNG PROTOTYPE
## Dự án: **Stitch AI Business Copilot Platform**
### Nền tảng Quản trị Kinh doanh & Hỗ trợ Ra Quyết định AI cho Hộ kinh doanh (Thời trang & Mỹ phẩm)

---

## 📖 I. TỔNG QUAN VỀ BẢN PROTOTYPE

- **Tên dự án Capstone:** Business AI Copilot (Stitch AI Platform)
- **Công nghệ triển khai:** Pure HTML5 + Vanilla JavaScript + Tailwind CSS CDN (Single Page Application - SPA).
- **Đặc điểm kỹ thuật:** **Siêu nhẹ, Zero Setup** — Không cần cài đặt Node.js hay chạy lệnh terminal, chỉ cần **click đúp chuột vào file `index.html`** là ứng dụng chạy tức thì trên bất kỳ trình duyệt nào.
- **Đường dẫn thư mục dự án:** `D:\prototype\new_pd\`
- **Trực tiếp mở ứng dụng:** [index.html](file:///D:/prototype/new_pd/index.html)

---

## 🚀 II. HƯỚNG DẪN KHỞI CHẠY (QUICK START)

1. Mở thư mục **`D:\prototype\new_pd\`** trên máy tính của bạn.
2. Nhấp đúp chuột vào file **`index.html`** (hoặc chuột phải chọn *Open with Google Chrome / Microsoft Edge*).
3. Giao diện ứng dụng sẽ ngay lập tức xuất hiện mượt mà.

---

## 🎮 III. HƯỚNG DẪN THAO TÁC THEO VAI TRÒ (ROLE-BASED WORKFLOWS)

Ngay trên thanh điều hướng **Topbar** (màu tím Odoo trên cùng), bạn sẽ thấy bộ nút chuyển đổi vai trò cấp tốc: **`[SA Admin]` | `[Chủ DN]` | `[Thu Ngân]`**.

---

### 👤 1. VAI TRÒ 1: SYSTEM ADMINISTRATOR (SA - QUẢN TRỊ HỆ THỐNG)

> **Mục tiêu:** Dành cho kỹ sư quản trị hệ thống quản lý hạ tầng SaaS Multi-Tenant và phân quyền tài khoản.

#### Quy trình thao tác:
1. Trên thanh Topbar, bấm vào nút **`[SA Admin]`**.
2. **Theo dõi Trạng thái Hạ tầng (Technical Health Header):** Xem thông số 100% Operational, Số Tenant đang chạy (3 Doanh nghiệp), và Số log audit (128 nhật ký).
3. **Quản lý Doanh nghiệp Multi-Tenant (Kanban View):** Xem danh sách các Doanh nghiệp thuê phần mềm (*Maison de Bloom*, *Blossom Cosmetics*, *Urban Chic*) kèm Gói cước (Enterprise / Standard / Trial) và Số chi nhánh.
4. **Quản lý Tài khoản & Phân quyền IAM RBAC (List View):** Xem danh sách 5 tài khoản mẫu, vai trò tương ứng và trạng thái hoạt động.

---

### 🏢 2. VAI TRÒ 2: BUSINESS OWNER (BO - CHỦ DOANH NGHIỆP)

> **Mục tiêu:** Dành cho Chủ cửa hàng / Quản lý điều hành toàn bộ kho hàng, đơn hàng, tài chính và sử dụng trí tuệ nhân tạo AI Copilot.

#### Quy trình thao tác:
1. Trên thanh Topbar, bấm chọn nút **`[Chủ DN]`**.
2. **Xem Executive KPI Dashboard (Clean Dashboard Rules):**
   - Nhìn vào **4 Thẻ Hero KPIs chính**: *Tổng Doanh Thu (485.2 Tr)*, *Lợi Nhuận Gộp (218.3 Tr)*, *Đơn Hàng Đang Xử Lý (18 đơn)*, và *Cảnh Báo Rủi Ro AI (3 cảnh báo)*.
   - Bấm nút **`[ Hỏi AI về Biểu đồ này ]`** ở góc biểu đồ doanh thu để kích hoạt AI phân tích trực tiếp.
3. **Quản lý Kho hàng & Lô Hạn Dùng FEFO (`Phân hệ Kho & FEFO`):**
   - Xem ma trận Size/Màu cho sản phẩm Thời trang (*Áo sơ mi, Đầm floral*).
   - Xem Lô Hạn sử dụng FEFO cho Mỹ phẩm (*Serum Vitamin C, Kem chống nắng*). Các lô cận hạn sẽ tự động đính nhãn màu cam `CẬN HẠN DÙNG`.
   - **Nhập kho FEFO 3 bước:** Bấm nút **`[ + Nhập kho FEFO mới ]`** trên Control Panel ➔ Mở Wizard 3 bước: *Step 1: Chọn PO ➔ Step 2: Nhập Lot No & EXP Date ➔ Step 3: Duyệt nhập kho*.
4. **Quản lý Đơn hàng Đa kênh & Thu chi VietQR B2B (`Phân hệ Đơn Đa Kênh`):**
   - Theo dõi danh sách đơn từ các kênh: *Sàn Shopee*, *TikTok Shop*, *POS Cửa hàng*, *Bán sỉ B2B*.
   - **Tạo mã Thu/Chi VietQR B2B:** Bấm nút **`[ + Tạo Mã VietQR B2B ]`** ➔ Hiển thị mã QR VietQR động chuẩn ngân hàng MB Bank với STK và Số tiền 18.5 triệu.
5. **Chạy Phòng Lab Mô phỏng Kịch bản What-If (`Phân hệ AI Advisor`):**
   - Kéo thanh trượt giả định: *Thay đổi Giá bán lẻ (+5%)*, *Chi phí Marketing (+5 Triệu)*.
   - Bấm nút **`[ ⚡ CHẠY MÔ PHỎNG WHAT-IF ]`** ➔ Xem kết quả so sánh 2 cột: **`[ Baseline Hiện tại ]`** vs **`[ Kịch bản Giả Lập ]`** (Tự động tính lợi nhuận tăng thêm +14.2 triệu VNĐ).
6. **Xem Bảng Chứng Cứ Dữ Liệu AI (Evidence Data Inspection):**
   - Click nút **`[ Trợ Lý AI Copilot ]`** góc dưới bên phải màn hình để mở Slide-out Drawer.
   - Click nút **`[ Xem Bảng Chứng Cứ Dữ Liệu ]`** ➔ Mở cửa sổ kiểm tra dữ liệu gốc trích xuất từ CSDL Kho hàng.

---

### 🛒 3. VAI TRÒ 3: STORE EMPLOYEE (SE - THU NGÂN CỬA HÀNG)

> **Mục tiêu:** Dành cho nhân viên thu ngân tại quầy thao tác bán hàng cảm ứng nhanh chóng.

#### Quy trình thao tác:
1. Trên thanh Topbar, bấm chọn nút **`[Thu Ngân]`** (Ứng dụng tự động đưa bạn đến giao diện POS Cửa hàng).
2. **Thao tác Bán hàng tại Quầy POS Terminal:**
   - **Bên phải (Lưới Sản phẩm Touchscreen):** Click vào hình sản phẩm (*Serum Vitamin C*, *Áo sơ mi*) để thêm vào giỏ.
   - **Bên trái (Giỏ hàng & Numpad):** Kiểm tra giỏ hàng, dùng các nút số Numpad điều chỉnh số lượng hoặc chiết khấu.
   - Bấm nút **`[ THANH TOÁN (PAYMENT) ]`** màu xanh lá ➔ Thông báo in hóa đơn thành công.
3. **Chốt Ca Thu Ngân & Kết Sổ Két Tiền (`Shift Closing Settlement`):**
   - Bấm nút **`[ Chốt ca & Kết sổ ]`** góc trên giỏ hàng.
   - Mở Pop-up đếm tiền mặt: Tiền mặt đầu ca (2.0 Tr) + Tiền thu trong ca (1.13 Tr) = Tiền két thực tế (3.13 Tr) ➔ Bấm **`[ XÁC NHẬN BÀN GIAO CA ]`**.

---

## 🎬 IV. KỊCH BẢN 5 PHÚT THUYẾT TRÌNH DEMO CAPSTONE

Khi trình bày Demo cho Hội đồng chấm Capstone, bạn nên đi theo kịch bản 5 phút sau để đạt điểm tối đa:

1. **Phút 0:00 - 0:45 (Giới thiệu Tầm nhìn & Clean Dashboard):**
   - Mở `index.html`. Giới thiệu tổng quan hệ thống ERP chuẩn Odoo tích hợp Trợ lý AI ra quyết định.
   - Nhấn mạnh điểm sáng **Clean Dashboard**: Chỉ hiển thị 4 Hero KPIs sinh tử, không bị rối rắm như các phần mềm cũ.

2. **Phút 0:45 - 2:00 (Nghiệp vụ Thời trang & Mỹ phẩm FEFO):**
   - Chuyển sang `Phân hệ Kho & FEFO`. Trình bày Ma trận Size/Màu quần áo và Quản lý Lô FEFO hạn dùng mỹ phẩm.
   - Bấm mở **Wizard Nhập kho 3 bước** minh họa quy trình quản lý lô hạn dùng nghiêm ngặt.

3. **Phút 2:00 - 3:30 (Trí tuệ Nhân tạo AI Copilot & What-If Scenario Lab):**
   - Chuyển sang `Phân hệ AI Advisor`. Kéo các thanh trượt điều chỉnh giá bán và chi phí Ads ➔ Chạy giả lập What-If ➔ Chỉ ra bảng so sánh Baseline vs Giả lập.
   - Bấm nút **`[ Trợ Lý AI Copilot ]`** bên phải ➔ Mở cửa sổ **`[ Inspect Evidence Data ]`** để chứng minh AI của dự án là **Evidence-Based AI** (AI có căn cứ dữ liệu thực tế chứ không nói suông).

4. **Phút 3:30 - 4:30 (Đơn hàng Đa kênh & Quét VietQR B2B):**
   - Chuyển sang `Phân hệ Đơn Đa Kênh`. Chỉ ra các Tag phân biệt Shopee, TikTok Shop, POS, B2B.
   - Bấm mở **Mã QR VietQR B2B** minh họa thanh toán tự động cho đại lý bán sỉ.

5. **Phút 4:30 - 5:00 (Thu ngân POS & Multi-Tenant Role Switcher):**
   - Bấm nút **`[Thu Ngân]`** trên Topbar để trình bày giao diện POS cảm ứng và Pop-up Chốt ca kết sổ.
   - Kết luận và mở rộng hướng phát triển.

---

## 📁 V. TÓM TẮT CẤU TRÚC MÃ NGUỒN CỦA PROTOTYPE

```text
D:\prototype\new_pd\
├── index.html                 # Trình duyệt mở trực tiếp file này
├── css/
│   └── custom.css             # Định nghĩa Design Tokens Odoo, Badge AI, Class tiện ích
└── js/
    ├── data.js                # CSDL Giả lập (Mock Data sản phẩm, lô FEFO, đơn hàng, KPI)
    ├── app.js                 # Bộ điều hướng Router & Quản lý State chính
    └── components/
        ├── zone0_shell.js     # Topbar Navigation, Control Panel, AI Drawer, Evidence Modal
        ├── zone1_admin.js     # SA Console: RBAC Users, Technical Master, Multi-tenant, Audit Log
        ├── zone2_inventory.js # Kho hàng: Biến thể Size/Màu, Lô FEFO, Wizard Nhập kho 3 bước
        ├── zone3_sales.js     # Đơn Đa Kênh Shopee/TikTok/POS/B2B, Chi phí OPEX, VietQR B2B
        ├── zone4_pos.js       # Thu ngân POS Cảm ứng, Touch Numpad, Shift Closing Modal
        └── zone5_ai.js        # Executive KPI Dashboard, Anomaly Alert, What-If Scenario Lab
```
