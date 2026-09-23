# CHECKLIST SO KHỚP & TỐI ƯU UI/UX ODOO ENTERPRISE 55 MÀN HÌNH BẢN CỦ VS BẢN MỚI (`new_pd`)
**Dự án:** Stitch AI Business Copilot Platform
**Mục đích:** Danh sách kiểm tra (Checklist) tiến độ so khớp từng màn hình một. Khi rà soát & tối ưu Odoo màn hình nào xong sẽ đánh dấu `[x]` vào màn hình đó.
**Tổng số màn hình theo dõi:** 55 màn hình/thư mục
**Tiến độ hiện tại:** [x] Đã hoàn thành so khớp & tối ưu toàn bộ 55/55 màn hình.

---

## I. DANH SÁCH CHECKLIST TIẾN ĐỘ SO KHỚP 55 MÀN HÌNH (100% CHECKLIST)

- [x] ✔️ **01. [ai_copilot_tr_l_quy_t_nh]** — *ABC Copilot — Trợ lý Ra Quyết Định Kinh Doanh*
  - **File render mới (`new_pd`):** [`zone0_shell.js`](file:///d:/prototype/new_pd/js/components/zone0_shell.js) ➔ `Zone0Shell.renderAIDrawer()` & [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderAIAdvisor()`
  - **Vị trí nút bấm & đường dẫn:** App Shell Right Slide-out AI Copilot Drawer & Workstation Cố vấn AI (`index.html?view=ai_advisor`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm bản tóm tắt 30 giây (TL;DR), quy trình Modal Xác nhận Giao dịch Tài chính cho nút PO & Flash sale (tránh bấm nhầm), phân cấp nhãn ưu tiên P1 (Khẩn cấp 24h) / P2 (Ưu tiên 3 ngày), tách 2 Tab Lịch sử Chat vs Task Cần Làm, nổi bật khối xác thực nguồn dữ liệu KiotViet POS & Kho FEFO (độ tin cậy 98.4%).
    - 🎨 **UI Designer:** Chuẩn hóa hệ màu ngữ nghĩa (Red = P1 khẩn cấp, Amber = P2 khuyến nghị, Indigo/Purple = Thao tác thường, Sky = Phân tích/Xem PDF, Green = Đã duyệt/Live), tách các số liệu tài chính thành Khối Stat Cards riêng biệt, xử lý tràn/cắt khung nhìn ở đáy, đồng bộ 100% Lucide Vector Icons (loại bỏ emoji rác), tiết chế chữ in đậm và tạo margin an toàn cho nút Floating Action.

- [x] ✔️ **02. [ai_insights_ph_t_hi_n_b_t_th_ng_th_i_gian_th_c]** — *Trung tâm AI Insights &amp; Phát hiện Bất thường Engine v4.2*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderAnomalyCenter()`
  - **Vị trí nút bấm & đường dẫn:** Cố vấn AI ➔ Sub-tab 2: `⚠️ 2. AI Anomaly Alert Center (BO-08)` (`index.html?view=ai_advisor`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm Radar Bar quét live 15m/lần với 100% dữ liệu đối soát POS KiotViet, 4 Khối Stat Cards báo mức độ nghiêm trọng (P1 Khẩn cấp, P2 Cảnh báo, Đã khắc phục, Sức khỏe vận hành), bộ lọc sự cố theo mức độ, tích hợp Modal Xác nhận Giao dịch Tài chính khi gửi khiếu nại Shopee / xả hàng FEFO.
    - 🎨 **UI Designer:** Chuẩn hóa hệ thống màu ngữ nghĩa (Red P1, Amber P2, Green Resolved, Sky Info), nổi bật con số thất thoát rủi ro (42.8M VNĐ), loại bỏ emoji rác bằng bộ 100% Lucide Vector Icons, tạo spacing thoáng đạt cho thẻ sự cố.

- [x] ✔️ **03. [b_o_c_o_l_i_l_p_l_chi_ti_t_accrual_vs_cashflow]** — *Báo Cáo Kết Quả Kinh Doanh & Dòng Tiền Thực Tế (Accrual vs Cashflow)*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderCashflowAccrual()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Sub-tab 4: `💰 4. Báo Cáo Thu Chi & Lợi Nhuận Thực Nhận` (`sales.html?sub=cashflow_accrual`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm bộ chuyển chế độ góc nhìn (*Accrual - Dồn tích* vs *Cashflow - Dòng tiền thực tế* vs *Đối so sánh lệch*), 4 Khối Stat Cards đo lường Doanh thu dồn tích vs Tiền thực về ngân hàng vs Chi phí dồn tích vs Lợi nhuận ròng, bảng phân tích đối soát chênh lệch doanh thu ghi nhận vs thực thu Shopee/TikTok/VietQR, giải thích tác động thuế VAT & chiết khấu.
    - 🎨 **UI Designer:** Phân biệt rõ ràng hệ màu chỉ số (Green = Thực nhận ngân hàng, Indigo = Dồn tích KiotViet, Amber = Tiền đang treo sàn), Lucide vector icons 100%, badge phần trăm tăng trưởng, loại bỏ các nút AI giả và thay thế bằng bảng so sánh 2 cột chuẩn kế toán Odoo Enterprise.


- [x] ✔️ **04. [b_o_c_o_t_ng_quan_ch_c_a_h_ng]** — *Báo Cáo Tổng Quan Chuỗi Cửa Hàng (Retail Pulse Monitor)*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderRetailPulse()`
  - **Vị trí nút bấm & đường dẫn:** AI Advisor / Dashboard ➔ Sub-tab 2: `⚡ 2. Retail Intelligence Pulse Monitor` (`index.html?view=dashboard&sub=retail_pulse`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm banner chào mừng *Xin chào, Nguyễn Thị Mai!*, bộ lọc thời gian 30 ngày qua, khối tóm tắt 30 giây (TL;DR), 4 Thẻ chỉ số tài chính & kho (Doanh thu 284.5M, OPEX 162.1M, Lợi nhuận gộp 122.4M, Tồn kho 418.9M), dải chỉ số nhịp đập tốc độ bán (12 đơn/h, 4.5 đơn/h AOV 680k), bảng đối soát live 3 chi nhánh (Maison Q.1, Thủ Đức, Bình Thạnh) tích hợp Modal Xác nhận nộp tiền két quầy POS & Kích hoạt Flash sale tăng tốc.
    - 🎨 **UI Designer:** Chuẩn hóa toàn bộ 100% Lucide Vector Icons (thay thế hoàn toàn emoji rác `⚡`, `⏱️`, `🟢`), phân cấp thị giác theo mã màu Odoo Enterprise (Emerald = Hoạt động tốt, Amber = Cảnh báo tốc độ bán chậm, Slate/Purple = Nền tảng Odoo), typography phẳng mạch lạc.


- [x] ✔️ **05. [bo_01_qu_n_l_doanh_nghi_p_c_u_h_nh_v_n_h_nh]** — *Quản lý Doanh nghiệp & Cấu hình Vận hành (Enterprise Tenant Hub BO-01)*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.renderBusinessProfile()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị & SA-Admin ➔ Sub-tab 1: `🏢 1. Hồ sơ Doanh nghiệp & Vận hành (BO-01)` (`admin.html?sub=business_profile`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm 4 Thẻ chỉ số vận hành tổng quan (Doanh thu tích lũy 1.845B VNĐ, 4,280 đơn hàng xử lý, OPEX 412.5M VNĐ, Giá trị kho 890.4M VNĐ), tích hợp Modal Xác nhận Giao dịch khi lưu thay đổi cấu hình doanh nghiệp hoặc thêm chi nhánh mới, hiển thị đầy đủ MST 0317892341 & thông tin pháp lý CEO Nguyễn Thị Mai.
    - 🎨 **UI Designer:** Bố cục 2 cột phẳng Odoo Enterprise thoáng đạt, chuẩn hóa 100% Lucide Vector Icons, thiết lập hệ màu phân biệt rõ ràng (Emerald = Verified Legal Tenant, Purple = Odoo Brand, Slate = Nền tảng), loại bỏ nút AI gây nhiễu thị giác.


- [x] ✔️ **06. [bo_02_ghi_nh_n_chi_ph_nhanh_qu_n_l_ng_n_s_ch_opex_mobile]** — *Ghi Nhận Chi Phí Nhanh & Ngân Sách OPEX (Smart Bookkeeper Hub BO-02)*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderOPEXMobile()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Sub-tab 5: `📱 5. Ghi Nhận Chi Phí Nhanh & Ngân Sách OPEX (BO-02)` (`sales.html?sub=opex_mobile`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm Banner Smart Bookkeeper AI hỗ trợ quét OCR hóa đơn e-VAT tự động bóc tách MST & nhập chi phí bằng giọng nói (Voice-to-Expense), 4 Thẻ chỉ số tổng quan (OPEX 412.5M VNĐ, COGS 968.7M VNĐ, EBT 463.9M VNĐ, 28.5M Khoản chi chờ duyệt tích hợp Modal Xác nhận Duyệt Chi), danh mục tiến độ 7 nhóm ngân sách (Mặt bằng 100%, Ads TikTok 104% cảnh báo đỏ, Lương nhân sự 97.3%, Điện nước 82.7%).
    - 🎨 **UI Designer:** Chuẩn hóa toàn bộ 100% Lucide Vector Icons (thay thế emoji rác `📸`, `🎙️`), hệ màu cảnh báo trực quan (Red = Vượt ngân sách 104%, Amber = Tiệm cận định mức, Emerald = Trong tầm kiểm soát), thiết kế đáp ứng hoàn hảo trên cả Mobile & Desktop View.


- [x] ✔️ **07. [bo_02_qu_n_l_chi_ph_t_i_ch_nh_c_b_n]** — *Quản lý Nhóm Chi Phí & Tài Chính Cơ Bản (Cost Centers & Financial Performance BO-02)*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderOPEXMobile()` & `renderCashflowAccrual()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Sub-tab 5: `📱 5. Ghi Nhận Chi Phí Nhanh & Ngân Sách OPEX (BO-02)` (`sales.html?sub=opex_mobile`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm 4 Thẻ chỉ số tài chính Hero (Tổng doanh thu ghi nhận 1.845B VNĐ, Giá vốn COGS 968.7M VNĐ, Tổng OPEX 412.5M VNĐ, EBT Lợi nhuận ước tính 463.9M VNĐ biên 25.15%), ma trận theo dõi 7 nhóm trung tâm chi phí (Cost Centers: Tiền thuê showroom, Ads, Lương, Điện nước, Logistics, Marketing, Hành chính), nút "+ Tạo Nhóm Chi Phí" & "+ Ghi Nhận Khoản Chi Mới".
    - 🎨 **UI Designer:** Phân biệt rõ định phí vs biến phí, 100% Lucide Vector Icons, thanh tiến độ giải ngân ngân sách theo màu sắc Odoo (Amber/Red = Cảnh báo vượt chi, Emerald = Hoàn thành trong hạn mức), giao diện phẳng không giật lag.


- [x] ✔️ **08. [bo_03_qu_n_l_s_n_ph_m_b_ng_gi]** — *Quản lý Sản phẩm & Bảng Giá (Catalog & Price Engine BO-03)*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderVariantsFEFO()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ Sub-tab 1: `🧴 1. Hạn Sử Dụng & Vị Trí Kệ Mỹ Phẩm (FEFO)` (`inventory.html?sub=variants_fefo`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm 4 Thẻ chỉ số tổng quan (142 SKU đang kinh doanh, 47.45% Margin lợi nhuận gộp TB, 2.450B VNĐ tổng giá trị niêm yết, 6 SKU chạm ngưỡng tồn tối thiểu/cận date), phân loại riêng biệt Ma trận Biến thể Size/Màu cho Thời trang và Lô Hạn dùng FEFO Strict cho Mỹ phẩm, nút "Xuất Bảng Giá Excel" & "+ Thêm Sản Phẩm / Lô FEFO Wizard 3 Bước".
    - 🎨 **UI Designer:** Bố cục thẻ 2 cột phẳng hiện đại, 100% Lucide Vector Icons, phân cấp thẻ màu sắc ngữ nghĩa (Pink/Purple = Mỹ phẩm FEFO, Blue = Thời trang, Emerald/Amber/Red = Trạng thái hạn dùng & tồn kho).


- [x] ✔️ **09. [bo_04_ki_m_tra_t_n_kho_nhanh_qu_t_m_fefo_mobile]** — *Kiểm Kho Nhanh & Lô Date FEFO Mobile (SE-02 Mobile Audit)*
  - **File render mới (`new_pd`):** [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js) ➔ `Zone4POS.renderInventoryCount()`
  - **Vị trí nút bấm & đường dẫn:** POS Thu Ngân ➔ Sub-tab 3: `📋 3. Kiểm Kê & Kiểm Date Mỹ Phẩm FEFO` (`pos.html?sub=inventory_count`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm quét mã vạch Barcode/QR tức thì một tay trên Mobile, đếm tồn lý thuyết vs tồn đếm thực tế, tính tự động chênh lệch kiêm cảnh báo chênh lệch kho màu đỏ, theo dõi sát sao ngày hết hạn HSD Mỹ phẩm FEFO, nút "Bắt Đầu Kiểm Kê", "Khoá Phiên" & "Ghi Nhận Điều Chỉnh Tồn Kho".
    - 🎨 **UI Designer:** Giao diện Mobile Touch-first tối ưu cho nhân viên thu ngân/kiểm kho tại quầy, 100% Lucide Vector Icons, thẻ chênh lệch màu đỏ nổi bật, font mono chuẩn số đo kích thước.


- [x] ✔️ **10. [bo_04_qu_n_l_t_n_kho_ki_m_so_t_xu_t_nh_p]** — *Quản lý Tồn kho & Kiểm soát Xuất Nhập Tồn (Stock Moves & Inventory Control BO-04)*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderStockMoves()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ Sub-tab 2: `📦 2. Nhật Ký Xuất Nhập Tồn` (`inventory.html?sub=stock_moves`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm 4 Thẻ chỉ số tồn kho Hero (Tổng giá trị kho 890.4M VNĐ, 128 SKU an toàn, 6 SKU nguy cơ đứt hàng, 8 Lô cận date <90 ngày 64.2Mđ), Banner AI Inventory Intelligence Velocity-V4 tính tốc độ tiêu thụ burn-rate & runway cạn hàng 2.9 ngày (Serum Bio-B5), tích hợp Modal Xác nhận Tạo PO nhập hàng 45Mđ hoặc chuyển kho 15 hộp, bảng đối soát mã tham chiếu Stock Moves chuẩn Odoo (WH/IN, WH/OUT, WH/INT).
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons, phân cấp màu sắc rủi ro kho (Red = Stock-out risk, Amber = FEFO Expiring, Emerald = Safe/Done), typography số đếm font mono hiển thị chính xác.


- [x] ✔️ **11. [bo_05_b_o_c_o_dashboard_kpi_doanh_nghi_p_mobile]** — *Executive Dashboard KPI Mobile Responsive View (BO-05 Mobile)*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderKPIOverview()`
  - **Vị trí nút bấm & đường dẫn:** Executive Dashboard KPI Mobile Responsive View (`index.html?view=dashboard`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm thiết kế Touch-first responsive tối ưu trải nghiệm trên smartphone 6.1", thẻ lợi nhuận thực nhận nổi bật đầu trang, khối cảnh báo nóng 3 việc cần xử lý tích hợp Modal xác nhận giao dịch xả hàng FEFO hoặc xem lệch tiền ví Shopee.
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons (loại bỏ biểu tượng emoji rác), mã màu ngữ nghĩa rõ ràng, khoảng cách đệm lót an toàn ngăn tràn viền trên màn hình di động nhỏ.

- [x] ✔️ **12. [bo_05_b_o_c_o_t_ng_quan_dashboard_kpi_doanh_nghi_p]** — *Executive Command Center (BO-05 Desktop)*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderKPIOverview()`
  - **Vị trí nút bấm & đường dẫn:** Executive Command Center Dashboard KPI BO-05 (`index.html?view=dashboard&sub=kpi_overview`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm 7 Thẻ chỉ số KPI điều hành Hero (Lợi nhuận ròng thực nhận 218.3M VNĐ, Doanh thu 485.2M, Tiền về ngân hàng 390.0M, 18 đơn đang xử lý), khối cảnh báo đỏ 3 việc ưu tiên cấp bách, biểu đồ xu hướng doanh thu dồn tích vs chi phí 4 tháng gần nhất, ma trận tỷ lệ phân bổ 4 kênh bán (Shopee 45%, TikTok 30%, POS 15%, B2B 10%).
    - 🎨 **UI Designer:** Giao diện phẳng Odoo Enterprise sắc nét, chuẩn hóa 100% Lucide Vector Icons, phân cấp màu sắc rủi ro (Red = Chôn vốn hạn dùng, Amber = Chưa đối soát sàn, Emerald = Tăng trưởng thực tế).

- [x] ✔️ **13. [bo_06_chi_ti_t_n_h_ng_l_ch_s_v_ng_i_bi_n_ng]** — *Chi Tiết Đơn Hàng & Lịch Sử Vận Hành (#ORD-2024-9982)*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderOmnichannel()` & `openOrderDetailModal()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Đơn hàng đa kênh ➔ Bấm vào mã đơn bất kỳ (ví dụ `#ORD-2024-9982`) để mở Modal Chi tiết
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thay thế lệnh alert đơn điệu bằng Modal xem chi tiết đơn hàng chuẩn Odoo Enterprise, thanh Odoo Statusbar trạng thái đơn hàng (Bản thảo ➔ Đã xác nhận ➔ Đang giao ➔ Hoàn tất), bảng sản phẩm trừ kho FEFO chính xác (Lô #B5-2024), nhật ký biến động theo mốc thời gian (Audit Trail), nút in phiếu giao nhận kèm hóa đơn VAT tích hợp Modal Xác nhận.
    - 🎨 **UI Designer:** Bố cục 3 cột thông tin khách hàng/kênh bán/thanh toán trên nền xám nhẹ, 100% Lucide Vector Icons, font mono cho mã đơn & SKU.

- [x] ✔️ **14. [bo_06_form_t_o_n_h_ng_m_i_xu_t_kho_a_k_nh]** — *Form Tạo Đơn Hàng Mới & Xuất Kho Đa Kênh (New Sales Order Sheet BO-06)*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderNewOrderForm()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Sub-tab 2: `📝 2. Tạo Đơn Hàng Mới (+)` (`sales.html?sub=new_order_form`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm Odoo Form Sheet với thanh tiến độ Statusbar 4 bước (Bản thảo ➔ Xác nhận ➔ Xuất kho ➔ Hoàn tất), bảng chọn danh mục sản phẩm & lô FEFO tự động, tính tổng thanh toán & chiết khấu B2B, nút "Xác Nhận Xuất Kho" tích hợp Modal Xác nhận Giao dịch Tài chính (tránh ấn nhầm xuất kho).
    - 🎨 **UI Designer:** Font mono chuẩn cho giá tiền & số lượng, 100% Lucide Vector Icons, phân biệt rõ ràng giữa nút Lưu bản thảo (#714B67) và Nút Xác nhận xuất kho (Emerald Green).

- [x] ✔️ **15. [bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh]** — *Quản Lý Đơn Hàng & Vận Hành Đa Kênh (Omnichannel Orders BO-06)*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderOmnichannel()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Sub-tab 1: `🛒 1. Đơn Hàng Đa Kênh (Shopee, TikTok, POS)` (`sales.html?sub=omnichannel`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm 4 Thẻ tổng quan chỉ số bán hàng Hero (Doanh thu đa kênh 485.2M, OPEX 51.7M, Công nợ B2B 18.5M, Lợi nhuận thuần 218.3M), bảng danh sách đơn hàng real-time hỗ trợ phân loại kênh (Shopee Mall, TikTok Shop, POS, B2B), tích hợp Modal Quét mã VietQR B2B tự động thu tiền.
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons (thay thế biểu tượng emoji rác ở subtab navigation), badge kênh bán với màu tương ứng (Shopee = Cam, TikTok = Hồng, POS = Xanh dương, B2B = Tím Odoo).

- [x] ✔️ **16. [bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh_mobile]** — *Quản Lý Đơn Hàng & Vận Hành Đa Kênh Mobile View (BO-06 Mobile)*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderOmnichannel()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Đơn hàng đa kênh Mobile Responsive View (`sales.html?sub=omnichannel`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm giao diện cuộn ngang mượt mà cho bảng đơn hàng trên màn hình nhỏ, nút mở mã quét VietQR B2B một chạm giúp nhân viên bán hàng/giao vận thu tiền nhanh chóng.
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons, badge màu sắc kênh bán hiển thị rõ ràng không bị đè chữ.

- [x] ✔️ **17. [bo_07_ai_business_analytics_ph_n_t_ch_hi_u_su_t_a_chi_u]** — *AI Business Analytics & Phân Tích Đa Chiều (BO-07)*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderKPIOverview()`
  - **Vị trí nút bấm & đường dẫn:** Cố vấn AI ➔ Tab Báo cáo Phân tích Doanh thu & Lợi nhuận (`index.html?view=dashboard`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm ma trận phân tích doanh thu đa chiều theo 4 kênh phân phối (Shopee 45%, TikTok 30%, POS 15%, B2B 10%), biểu đồ so sánh xu hướng doanh thu dồn tích vs lợi nhuận ròng 4 tháng gần nhất.
    - 🎨 **UI Designer:** Bố cục thẻ trực quan chuẩn Odoo Enterprise, 100% Lucide Vector Icons, thanh tiến độ phân bổ tỷ lệ phần trăm đa sắc.

- [x] ✔️ **18. [bo_08_ai_anomaly_detection_trung_t_m_c_nh_b_o_r_i_ro_th_i_gian_th_c]** — *Trung Tâm Cảnh Báo Rủi Ro Thời Gian Thực (Anomaly Detection BO-08)*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderAnomalyCenter()`
  - **Vị trí nút bấm & đường dẫn:** Cố vấn AI ➔ Sub-tab 2: `⚠️ 2. AI Anomaly Alert Center (BO-08)` (`index.html?view=ai_advisor`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm Radar Bar quét live 15m/lần với 100% dữ liệu đối soát POS KiotViet, 4 Khối Stat Cards báo mức độ nghiêm trọng (P1 Khẩn cấp, P2 Cảnh báo, Đã khắc phục, Sức khỏe vận hành), bộ lọc sự cố theo mức độ, tích hợp Modal Xác nhận Giao dịch Tài chính khi gửi khiếu nại Shopee / xả hàng FEFO.
    - 🎨 **UI Designer:** Chuẩn hóa hệ thống màu ngữ nghĩa (Red P1, Amber P2, Green Resolved, Sky Info), nổi bật con số thất thoát rủi ro (42.8M VNĐ), loại bỏ emoji rác bằng bộ 100% Lucide Vector Icons, tạo spacing thoáng đạt cho thẻ sự cố.

- [x] ✔️ **19. [bo_09_ai_demand_forecasting_replenishment_planning]** — *Dự Báo Nhu Cầu & Kế Hoạch Nhập Hàng Tự Động (BO-09)*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderPODrafts()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ Sub-tab 3: `📑 3. Gợi Ý Nhập Hàng Tự Động & Đặt Hàng PO` (`inventory.html?sub=po_drafts`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm mô hình AI Velocity-V4 tính tốc độ tiêu thụ burn-rate & cảnh báo runway cạn hàng 2.9 ngày (Serum Bio-B5), danh sách PO Drafts tự động lập theo gợi ý AI, tích hợp Modal Xác nhận Giao dịch Tài chính khi phát hành đơn mua PO 24.5Mđ cho nhà cung cấp.
    - 🎨 **UI Designer:** Giao diện thẻ phẳng Odoo Enterprise, 100% Lucide Vector Icons, font mono cho số tiền & mã đơn PO.

- [x] ✔️ **20. [bo_09_ai_demand_forecasting_replenishment_planning_mobile_summary]** — *Dự Báo Nhu Cầu & Nhập Hàng AI Mobile Summary (BO-09 Mobile)*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderPODrafts()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ PO Draft Mobile Summary View (`inventory.html?sub=po_drafts`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm bản tóm tắt danh sách đơn PO draft hiển thị dạng thẻ tối ưu cho di động, cho phép chủ cửa hàng duyệt nhanh đơn mua hàng 45Mđ bằng một chạm.
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons, phân cấp thẻ màu sắc rõ ràng (Violet = AI Draft, Emerald = Approved).

- [x] ✔️ **21. [bo_10_m_ph_ng_k_ch_b_n_kinh_doanh_what_if_scenario_lab]** — *Phòng Thí Nghiệm Kịch Bản Kinh Doanh & Stress-Test Dòng Tiền (What-If Scenario Lab BO-10)*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderWhatIfLab()`
  - **Vị trí nút bấm & đường dẫn:** Cố vấn AI ➔ Sub-tab 4: `🧪 4. What-If Scenario Lab & Liquidity Stress Test (BO-10)` (`index.html?view=ai_advisor`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm thanh trượt giả định 3 tham số (Tăng Ads TikTok %, Giảm giá bán %, Tăng số lượng nhập PO), tính toán tự động tác động đến Lợi nhuận Net PnL & Dòng tiền dự trữ ngân hàng, nút kích hoạt giả định kiểm tra sức chịu đựng dòng tiền.
    - 🎨 **UI Designer:** Bố cục 2 cột phẳng Odoo Enterprise, 100% Lucide Vector Icons, thanh range slider trực quan, thẻ so sánh kết quả kịch bản Baseline vs Target.

- [x] ✔️ **22. [bo_11_ai_business_advisor_tr_l_chi_n_l_c_c_level]** — *Trung Tâm Cố Vấn Chiến Lược Doanh Nghiệp (C-Level AI Advisor Workspace BO-11)*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderAIAdvisor()` & `renderAdvisorWorkspace()`
  - **Vị trí nút bấm & đường dẫn:** Cố vấn AI ➔ Sub-tab 1: `🤖 1. AI Business Advisor Workspace (BO-11)` (`index.html?view=ai_advisor`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm banner xác minh độ tin cậy dữ liệu 98.4% (Live POS KiotViet & Kho FEFO), 2 tab sidebar phân tách Lịch sử Chat vs Task Cần Làm (3 việc ưu tiên), cửa sổ hội thoại tương tác với Copilot AI hỗ trợ đề xuất tạo PO & kích hoạt CTKM ngay trong chat.
    - 🎨 **UI Designer:** Bố cục 2 cột phẳng hiện đại, 100% Lucide Vector Icons (loại bỏ biểu tượng emoji rác), font mono chuẩn cho số liệu & mã tham chiếu.

- [x] ✔️ **23. [bo_11_ai_business_advisor_tr_l_chi_n_l_c_c_level_mobile]** — *Trung Tâm Cố Vấn Chiến Lược AI Mobile View (BO-11 Mobile)*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderAIAdvisor()`
  - **Vị trí nút bấm & đường dẫn:** Cố vấn AI ➔ C-Level Advisor Mobile View (`index.html?view=ai_advisor`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm khung Chat Responsive tối ưu trên màn hình di động, cho phép chủ cửa hàng ra lệnh bằng giọng nói (Voice Prompting) hoặc chọn nhanh 4 mẫu câu hỏi thường gặp.
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons, bong bóng chat màu tím Odoo `#714B67`, lót lót lề an toàn ngăn bị đè khung bàn phím.

- [x] ✔️ **24. [c_i_t_ph_n_quy_n_qu_n_l_nh_n_vi_n]** — *Quản lý Nhân Viên & Ma Trận Phân Quyền IAM RBAC (SA-01)*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.renderRBACUsers()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị & SA-Admin ➔ Sub-tab 3: `👥 3. Tài khoản & Phân quyền IAM RBAC (SA-01)` (`admin.html?sub=rbac_users`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm 4 Thẻ chỉ số phân quyền (System Admin, Store Owner, Store Manager, Cashier POS), ma trận phân quyền 5 nhóm chức năng (Xem doanh thu, Duyệt PO, Kiểm kho, Tạo đơn bán, Cấu hình hệ thống), nút "+ Thêm Nhân Viên Mới" & "Khóa Tài Khoản".
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons, badge màu sắc theo vai trò (Red = System Admin, Purple = Owner, Blue = Manager, Emerald = Cashier POS), bảng phân quyền dạng checkbox Odoo phẳng.

- [x] ✔️ **25. [c_ng_qu_n_tr_h_th_ng_to_n_n_ng_system_administrator_sa_console]** — *System Administrator Console & Điều Hành Nền Tảng (SA Console)*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.render()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị & SA-Admin ➔ Master Header & Technical Infrastructure Cards (`admin.html`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm 4 Thẻ theo dõi sức khỏe hạ tầng (Hệ thống 100% Online, 3 Doanh nghiệp Multi-Tenant, 5 Tài khoản RBAC, 128 Nhật ký Audit Logs), dải nút chuyển đổi nhanh giữa các phân hệ SA-01, SA-02, SA-03, SA-04.
    - 🎨 **UI Designer:** Giao diện phẳng Odoo Enterprise sắc nét, 100% Lucide Vector Icons, màu xanh Emerald báo trạng thái server live.

- [x] ✔️ **26. [d_b_o_c_u_g_i_nh_p_h_ng_ai]** — *AI Demand Forecasting & Stock-out Risk Hub*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderPODrafts()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ Sub-tab 3: `📑 3. Gợi Ý Nhập Hàng Tự Động & Đặt Hàng PO` (`inventory.html?sub=po_drafts`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm mô hình AI Velocity-V4 tính tốc độ tiêu thụ burn-rate & cảnh báo nguy cơ đứt hàng 2.9 ngày, tích hợp Modal Xác nhận Duyệt PO 45Mđ cho NCC Korea.
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons, badge màu sắc thông minh (Red = Alert đứt hàng, Purple = AI Recommendation).

- [x] ✔️ **27. [docs_plan]** — *Master Design System Rules & Quy Tắc Thiết Kế Odoo*
  - **File render mới (`new_pd`):** [`00_MASTER_DESIGN_SYSTEM_RULES.md`](file:///d:/prototype/stitch_ai_business_copilot_platform/docs_plan/00_MASTER_DESIGN_SYSTEM_RULES.md)
  - **Vị trí nút bấm & đường dẫn:** Thư mục tài liệu quy chuẩn thiết kế UI/UX & hệ màu Odoo Enterprise
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Chuẩn hóa toàn bộ bộ quy tắc trải nghiệm người dùng SME Store Owner, quy định bắt buộc phải có Modal Xác nhận Giao dịch Tài chính khi kích hoạt các nút hành động nhạy cảm.
    - 🎨 **UI Designer:** Quy định mã màu chuẩn Odoo `#714B67`, hệ màu phân cấp sự cố khẩn cấp P1/P2, cấm sử dụng emoji thô sơ (dùng 100% Lucide Vector Icons).

- [x] ✔️ **28. [i_so_t_chi_ti_t_v_s_n_shopee_tiktok_shop]** — *Đối Soát Chi Tiết Ví Sàn TMĐT (Shopee & TikTok Shop Recon)*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderMarketplaceRecon()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Sub-tab 3: `🏦 3. Đối Soát Tiền Về Ngân Hàng (Shopee & TikTok)` (`sales.html?sub=marketplace_recon`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm bảng đối soát khấu trừ 4 loại phí sàn (Phí cố định 5%, Phí dịch vụ, Phí vận chuyển, Chiết khấu sàn), tính toán tiền thực nhận về tài khoản ngân hàng, phân loại rõ ràng trạng thái *Đã đối soát* vs *Chưa về ví*.
    - 🎨 **UI Designer:** Bảng Odoo phẳng sắc nét, 100% Lucide Vector Icons, font mono chuẩn cho số tiền âm (màu đỏ) và tiền thực nhận (màu xanh lục).

- [x] ✔️ **29. [m_ph_ng_k_ch_b_n_kinh_doanh_what_if]** — *Phòng Thí Nghiệm Kịch Bản Kinh Doanh What-If*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderWhatIfLab()`
  - **Vị trí nút bấm & đường dẫn:** Cố vấn AI ➔ Sub-tab 4: `🧪 4. What-If Scenario Lab & Liquidity Stress Test (BO-10)` (`index.html?view=ai_advisor`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm công cụ mô phỏng thay đổi giá trị đơn hàng trung bình (AOV) và tăng ngân sách Ads TikTok, dự báo tác động đến lợi nhuận ròng hàng tháng.
    - 🎨 **UI Designer:** Phân bổ layout 2 cột khoa học, 100% Lucide Vector Icons, font mono số tiền thanh khoản.

- [x] ✔️ **30. [m_ph_ng_k_ch_b_n_what_if_d_ng_ti_n_p_l_c_thanh_kho_n]** — *Phòng Thí Nghiệm What-If: Stress-Test Áp Lực Dòng Tiền & Liquidity*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderWhatIfLab()`
  - **Vị trí nút bấm & đường dẫn:** Cố vấn AI ➔ Tab What-If Cashflow Stress Test (`index.html?view=ai_advisor`)
  - **Ghi chú so khớp & Tối ưu (Đã sửa đổi hoàn chỉnh 11 lỗi UI/UX & End User Audit):**
    - 🎯 **End User:** Thêm mô phỏng kịch bản rủi ro công nợ B2B bị trễ 30 ngày và sàn hoãn thanh toán 1 đợt, tính toán vùng an toàn tiền mặt còn lại trong ngân hàng.
    - 🎨 **UI Designer:** Chuẩn hóa 100% Lucide Vector Icons, thẻ cảnh báo áp lực dòng tiền với mã màu Amber/Red nổi bật.

- [x] **31. [modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview_1]** — *Xem trước &amp; Phê duyệt Đơn Đặt Hàng (PO Draft) — Đợt Nhập Hàng Mega 11.11*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderPODrafts()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ PO Draft ➔ Nút Duyệt PO Draft đợt 1
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **32. [modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview_2]** — *Dự báo Nhu Cầu &amp; Gợi Ý Nhập Hàng Mega 11.11*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderPODrafts()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ PO Draft ➔ Nút Xem gợi ý Mega 11.11
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **33. [modal_l_p_phi_u_chi_ti_n_qu_t_vietqr_b2b_cashflow_p_l]** — *Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.openVietQRModal()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Nút Lập phiếu Chi VietQR B2B
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **34. [modal_l_p_phi_u_thu_ti_n_b_n_s_i_t_c_i_l_cashflow_p_l]** — *Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.openVietQRModal()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Nút Lập phiếu Thu B2B Đại lý
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **35. [modal_nh_p_kho_kh_i_t_o_l_date_po_1]** — *Kho &amp; Lô Date Mỹ Phẩm*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.openIntakeWizard()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ PO Draft ➔ Nút Khởi tạo Nhập kho đợt 1
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **36. [modal_nh_p_kho_kh_i_t_o_l_date_po_2]** — *Kho &amp; Lô Date Mỹ Phẩm*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.openIntakeWizard()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ PO Draft ➔ Nút Khởi tạo Nhập kho đợt 2
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **37. [modal_nh_p_kho_kh_i_t_o_l_date_po_3]** — *Kho &amp; Lô Date Mỹ Phẩm*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.openIntakeWizard()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ PO Draft ➔ Nút Khởi tạo Nhập kho đợt 3
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **38. [modal_th_m_nh_n_vi_n_m_i_g_n_ph_n_quy_n_rbac]** — *modal_th_m_nh_n_vi_n_m_i_g_n_ph_n_quy_n_rbac*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.renderRBACUsers()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị ➔ RBAC Users ➔ Nút + Thêm nhân viên mới
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **39. [modal_thanh_to_n_c_ng_n_qu_t_vietqr_b2b_h_ng_lo_t]** — *Thanh Toán Công Nợ Đối Tác &amp; Lập Lệnh VietQR B2B*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.openVietQRModal()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ Nhà cung cấp ➔ Nút Thanh toán VietQR B2B
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **40. [qu_n_l_n_h_ng_pos_b_n_l_a_k_nh]** — *Hub Đơn hàng &amp; POS Đa kênh*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderOmnichannel()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Sub-tab Đơn hàng Đa kênh & POS
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **41. [qu_n_l_nh_cung_c_p_c_ng_n_n_h_ng]** — *Quản lý Nhà Cung Cấp &amp; Công Nợ Đơn Hàng*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderSuppliers()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ Sub-tab Nhà cung cấp & Công nợ Quá hạn
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **42. [qu_n_l_s_n_ph_m_bi_n_th_kho_l_m_ph_m]** — *Quản lý Sản phẩm, Biến thể &amp; Kho Lô Mỹ phẩm*
  - **File render mới (`new_pd`):** [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js) ➔ `Zone2Inventory.renderVariantsFEFO()`
  - **Vị trí nút bấm & đường dẫn:** Kho hàng ➔ Sub-tab Sản phẩm & Biến thể FEFO
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **43. [retail_intelligence_pulse]** — *retail_intelligence_pulse*
  - **File render mới (`new_pd`):** [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js) ➔ `Zone5AI.renderRetailPulse()`
  - **Vị trí nút bấm & đường dẫn:** AI Advisor / Dashboard ➔ Sub-tab Retail Pulse 3 Cửa hàng
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **44. [s_thu_chi_d_ng_ti_n_th_c_t_cashflow_p_l]** — *Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế*
  - **File render mới (`new_pd`):** [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js) ➔ `Zone3Sales.renderCashflowAccrual()`
  - **Vị trí nút bấm & đường dẫn:** Tài chính ➔ Sub-tab Sổ Thu Chi & Cashflow Realtime
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **45. [sa_01_qu_n_l_t_i_kho_n_ph_n_quy_n_iam_rbac_console]** — *SA-01: Quản Lý Tài Khoản &amp; Phân Quyền (IAM &amp; RBAC Governance)*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.renderRBACUsers()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị ➔ Sub-tab Tài khoản & Phân quyền IAM RBAC
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **46. [sa_01_qu_n_tr_h_th_ng_c_u_h_nh_n_n_t_ng_system_administrator_master_console]** — *sa_01_qu_n_tr_h_th_ng_c_u_h_nh_n_n_t_ng_system_administrator_master_console*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.renderSecurityConfig()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị ➔ Sub-tab Cấu hình Security Policy (SA-03)
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **47. [sa_02_qu_n_l_doanh_nghi_p_multi_tenant_governance_console]** — *Trung Tâm Quản Trị Khách Thuê &amp; Multi-Tenant*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.renderTenants()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị ➔ Sub-tab Multi-Tenant Governance (SA-02)
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **48. [sa_03_qu_n_l_c_u_h_nh_h_th_ng_ng_ng_an_ninh_v_n_h_nh]** — *SA-03: Cấu Hình Hệ Thống, Ngưỡng Cảnh Báo &amp; An Ninh Vận Hành*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.renderSecurityConfig()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị ➔ Sub-tab Cấu hình Ngưỡng & An ninh (SA-03)
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **49. [sa_04_nh_t_k_audit_trail_ki_m_to_n_b_o_m_t_truy_v_t_s_c]** — *Nhật Ký Kiểm Toán &amp; Điều Tra Pháp Y Bảo Mật*
  - **File render mới (`new_pd`):** [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js) ➔ `Zone1Admin.renderAuditLogs()`
  - **Vị trí nút bấm & đường dẫn:** Quản trị ➔ Sub-tab Nhật ký Audit Trail & Truy vết (SA-04)
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **50. [se_01_ghi_nh_n_giao_d_ch_b_n_h_ng_pos_store_employee_pos_terminal]** — *se_01_ghi_nh_n_giao_d_ch_b_n_h_ng_pos_store_employee_pos_terminal*
  - **File render mới (`new_pd`):** [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js) ➔ `Zone4POS.renderTerminal()`
  - **Vị trí nút bấm & đường dẫn:** POS Thu Ngân ➔ Tab Màn Hình Tính Tiền POS (SE-01)
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **51. [se_02_ki_m_k_t_n_kho_qu_y_qu_n_l_l_h_n_d_ng_fefo]** — *se_02_ki_m_k_t_n_kho_qu_y_qu_n_l_l_h_n_d_ng_fefo*
  - **File render mới (`new_pd`):** [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js) ➔ `Zone4POS.renderInventoryCount()`
  - **Vị trí nút bấm & đường dẫn:** POS Thu Ngân ➔ Tab Kiểm Kê & Kiểm Date Mỹ Phẩm FEFO
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **52. [se_03_ghi_nh_n_h_ng_nh_p_kho_qu_y_store_inward_goods_receiving_inventory_intake]** — *se_03_ghi_nh_n_h_ng_nh_p_kho_qu_y_store_inward_goods_receiving_inventory_intake*
  - **File render mới (`new_pd`):** [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js) ➔ `Zone4POS.renderStoreInward()`
  - **Vị trí nút bấm & đường dẫn:** POS Thu Ngân ➔ Tab Nhập Hàng Tăng Kho Quầy (SE-03)
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **53. [se_03_giao_ca_k_t_s_b_n_h_ng_cashier_shift_handover_drawer_settlement]** — *Giao Ca, Kiểm Tiền Két &amp; Kết Sổ Doanh Thu*
  - **File render mới (`new_pd`):** [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js) ➔ `Zone4POS.openShiftModal()`
  - **Vị trí nút bấm & đường dẫn:** POS Thu Ngân ➔ Nút Chốt Ca & Kết Sổ Tiền Két
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **54. [se_04_tra_c_u_xem_th_ng_tin_s_n_ph_m_b_n_h_ng_product_directory_sales_reference]** — *se_04_tra_c_u_xem_th_ng_tin_s_n_ph_m_b_n_h_ng_product_directory_sales_reference*
  - **File render mới (`new_pd`):** [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js) ➔ `Zone4POS.renderProductDirectory()`
  - **Vị trí nút bấm & đường dẫn:** POS Thu Ngân ➔ Tab Tra Cứu Giá & Tồn Kho Sản Phẩm
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.

- [x] **55. [se_04_x_l_i_tr_h_ng_ho_n_ti_n_b_o_h_nh_t_i_qu_y_pos]** — *se_04_x_l_i_tr_h_ng_ho_n_ti_n_b_o_h_nh_t_i_qu_y_pos*
  - **File render mới (`new_pd`):** [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js) ➔ `Zone4POS.renderReturnsWarranty()`
  - **Vị trí nút bấm & đường dẫn:** POS Thu Ngân ➔ Tab Đổi Trả & Bảo Hành Cho Khách
  - **Ghi chú tối ưu Odoo:** Đã so khớp 100% nội dung, loại bỏ yếu tố AI rườm rà, giao diện chuẩn Odoo Enterprise phẳng, dễ hiểu.
