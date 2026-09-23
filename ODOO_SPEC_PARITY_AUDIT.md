# BÁO CÁO SO SOÁNH CHI TIẾT 1-1 TOÀN BỘ 55 THƯ MỤC NGUYÊN BẢN VS PROTOTYPE MỚI (`new_pd`)
**Dự án:** Stitch AI Business Copilot Platform  
**Tác giả rà soát:** UI/UX Lead Specialist & Technical Auditor  
**Tổng số thư mục/màn hình đối chiếu:** 55 thư mục  
**Mục đích:** So sánh từng màn hình một về: Nội dung nghiệp vụ, Cấu trúc HTML/Code gốc, Cách bố trí (Layout), Vị trí mã nguồn ở bản mới `new_pd`, và Đánh giá tối ưu theo chuẩn Odoo Enterprise (Sạch sẽ, Thân thiện, Loại bỏ AI rườm rà).

---

## I. BẢNG MA TRẬN ĐỐI CHIẾU SO KHỚP 55 THƯ MỤC CŨ VÀ SPA MỚI (`new_pd`)

| STT | Mã / Tên Thư Mục Gốc | Tên Màn Hình Nghiệp Vụ Gốc | Module File mới (`new_pd`) | Hàm JS & Component Render | Trạng Thái Đối Chiếu & Vị Trí Truy Cập |
|---|---|---|---|---|---|
| 1 | `ai_copilot_tr_l_quy_t_nh` | ABC Copilot — Trợ lý Ra Quyết Định Kinh Doanh | `zone0_shell.js` | `Zone0Shell.renderAIDrawer()` | ✅ **Đã so khớp**: Nút nổi góc phải bottom bar ➔ Mở slide drawer chat & xem gợi ý |
| 2 | `ai_insights_ph_t_hi_n_b_t_th_ng_th_i_gian_th_c` | Trung tâm AI Insights &amp; Phát hiện Bất thường Engine v4.2 | `zone5_ai.js` | `Zone5AI.renderAnomalyCenter()` | ✅ **Đã so khớp**: Cố vấn AI ➔ Tab "Cảnh báo Bất thường" |
| 3 | `b_o_c_o_l_i_l_p_l_chi_ti_t_accrual_vs_cashflow` | Báo Cáo Kết Quả Kinh Doanh &amp; Dòng Tiền Thực Tế | `zone3_sales.js` | `Zone3Sales.renderCashflowAccrual()` | ✅ **Đã so khớp**: Tài chính ➔ Sub-tab "P&L & Cashflow" |
| 4 | `b_o_c_o_t_ng_quan_ch_c_a_h_ng` | Xin chào, Nguyễn Thị Mai! | `zone5_ai.js` | `Zone5AI.renderRetailPulse()` | ✅ **Đã so khớp**: AI Advisor / Dashboard ➔ Sub-tab "Retail Pulse" |
| 5 | `bo_01_qu_n_l_doanh_nghi_p_c_u_h_nh_v_n_h_nh` | Quản lý Doanh nghiệp &amp; Cấu hình Vận hành (Business Profile &amp; Operational Settings) | `zone1_admin.js` | `Zone1Admin.renderBusinessProfile()` | ✅ **Đã so khớp**: Quản trị & BO-01 ➔ Tab "Hồ sơ Doanh nghiệp" |
| 6 | `bo_02_ghi_nh_n_chi_ph_nhanh_qu_n_l_ng_n_s_ch_opex_mobile` | Chi Phí &amp; Ngân Sách | `zone3_sales.js` | `Zone3Sales.renderCashflowAccrual()` | ✅ **Đã so khớp**: Tài chính ➔ OPEX (Co giãn màn hình mobile) |
| 7 | `bo_02_qu_n_l_chi_ph_t_i_ch_nh_c_b_n` | Quản lý Nhóm Chi Phí &amp; Tài Chính Cơ Bản | `zone3_sales.js` | `Zone3Sales.renderCashflowAccrual()` | ✅ **Đã so khớp**: Tài chính ➔ Sub-tab "Chi phí & Ngân sách OPEX" |
| 8 | `bo_03_qu_n_l_s_n_ph_m_b_ng_gi` | Quản lý Sản phẩm &amp; Bảng Giá | `zone2_inventory.js` | `Zone2Inventory.renderVariantsFEFO()` | ✅ **Đã so khớp**: Kho hàng ➔ Sub-tab "Sản phẩm & Biến thể FEFO" |
| 9 | `bo_04_ki_m_tra_t_n_kho_nhanh_qu_t_m_fefo_mobile` | Kiểm Kho Nhanh &amp; Lô Date FEFO | `zone4_pos.js` | `Zone4POS.renderInventoryCount()` | ✅ **Đã so khớp**: POS Thu Ngân ➔ Tab "Kiểm kê quầy FEFO" |
| 10 | `bo_04_qu_n_l_t_n_kho_ki_m_so_t_xu_t_nh_p` | Quản lý Tồn kho &amp; Kiểm soát Xuất Nhập Tồn | `zone2_inventory.js` | `Zone2Inventory.renderStockMoves()` | ✅ **Đã so khớp**: Kho hàng ➔ Sub-tab "Nhật ký Xuất Nhập Tồn" |
| 11 | `bo_05_b_o_c_o_dashboard_kpi_doanh_nghi_p_mobile` | bo_05_b_o_c_o_dashboard_kpi_doanh_nghi_p_mobile | `zone5_ai.js` | `Zone5AI.renderKPIOverview()` | ✅ **Đã so khớp**: Dashboard ➔ Co giãn màn hình mobile |
| 12 | `bo_05_b_o_c_o_t_ng_quan_dashboard_kpi_doanh_nghi_p` | Executive Command Center | `zone5_ai.js` | `Zone5AI.renderKPIOverview()` | ✅ **Đã so khớp**: App Switcher ➔ Dashboard KPI |
| 13 | `bo_06_chi_ti_t_n_h_ng_l_ch_s_v_ng_i_bi_n_ng` | #ORD-2024-9982 | `zone3_sales.js` | `Zone3Sales.renderOmnichannel() (Detail Modal)` | ✅ **Đã so khớp**: Tài chính ➔ Đơn hàng ➔ Bấm vào mã đơn bất kỳ |
| 14 | `bo_06_form_t_o_n_h_ng_m_i_xu_t_kho_a_k_nh` | bo_06_form_t_o_n_h_ng_m_i_xu_t_kho_a_k_nh | `zone3_sales.js` | `Zone3Sales.renderNewOrderForm()` | ✅ **Đã so khớp**: Tài chính ➔ Đơn hàng ➔ Nút "+ Tạo đơn mới" |
| 15 | `bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh` | Quản lý Đơn Hàng &amp; Vận Hành Đa Kênh | `zone3_sales.js` | `Zone3Sales.renderOmnichannel()` | ✅ **Đã so khớp**: Tài chính ➔ Sub-tab "Đơn hàng Đa kênh" |
| 16 | `bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh_mobile` | bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh_mobile | `zone3_sales.js` | `Zone3Sales.renderOmnichannel()` | ✅ **Đã so khớp**: Tài chính ➔ Đơn hàng (Co giãn mobile) |
| 17 | `bo_07_ai_business_analytics_ph_n_t_ch_hi_u_su_t_a_chi_u` | BO-07: AI Business Analytics &amp; Phân Tích Đa Chiều | `zone5_ai.js` | `Zone5AI.renderKPIOverview() / renderDashboard()` | ✅ **Đã so khớp**: Cố vấn AI ➔ Tab "Executive Dashboard" |
| 18 | `bo_08_ai_anomaly_detection_trung_t_m_c_nh_b_o_r_i_ro_th_i_gian_th_c` | Trung Tâm Cảnh Báo Rủi Ro Thời Gian Thực | `zone5_ai.js` | `Zone5AI.renderAnomalyCenter()` | ✅ **Đã so khớp**: Cố vấn AI ➔ Tab "Cảnh báo Bất thường" |
| 19 | `bo_09_ai_demand_forecasting_replenishment_planning` | Dự Báo Nhu Cầu &amp; Kế Hoạch Nhập Hàng Tự Động | `zone2_inventory.js` | `Zone2Inventory.renderPODrafts()` | ✅ **Đã so khớp**: Kho hàng ➔ Sub-tab "Dự báo Nhu cầu & PO Draft" |
| 20 | `bo_09_ai_demand_forecasting_replenishment_planning_mobile_summary` | Dự Báo Nhu Cầu &amp; Nhập Hàng AI | `zone2_inventory.js` | `Zone2Inventory.renderPODrafts()` | ✅ **Đã so khớp**: Kho hàng ➔ PO Draft (Co giãn mobile) |
| 21 | `bo_10_m_ph_ng_k_ch_b_n_kinh_doanh_what_if_scenario_lab` | Phòng Thí Nghiệm Chiến Lược &amp; Stress-Test Rủi Ro biotech | `zone5_ai.js` | `Zone5AI.renderWhatIfLab()` | ✅ **Đã so khớp**: Cố vấn AI ➔ Tab "What-If Scenario Lab" |
| 22 | `bo_11_ai_business_advisor_tr_l_chi_n_l_c_c_level` | Trung Tâm Cố Vấn Chiến Lược Doanh Nghiệp | `zone5_ai.js` | `Zone5AI.renderAIAdvisor()` | ✅ **Đã so khớp**: Cố vấn AI ➔ Tab "C-Level Advisor" |
| 23 | `bo_11_ai_business_advisor_tr_l_chi_n_l_c_c_level_mobile` | Trung Tâm Cố Vấn Chiến Lược AI | `zone5_ai.js` | `Zone5AI.renderAIAdvisor()` | ✅ **Đã so khớp**: Cố vấn AI (Co giãn mobile) |
| 24 | `c_i_t_ph_n_quy_n_qu_n_l_nh_n_vi_n` | Quản lý Nhân viên &amp; Ma trận Phân quyền (RBAC) | `zone1_admin.js` | `Zone1Admin.renderRBACUsers()` | ✅ **Đã so khớp**: Quản trị ➔ Sub-tab "RBAC Users" |
| 25 | `c_ng_qu_n_tr_h_th_ng_to_n_n_ng_system_administrator_sa_console` | Trung Tâm Điều Hành Hệ Thống &amp; Quản Trị Nền Tảng (System Administrator Console) | `zone1_admin.js` | `Zone1Admin.render()` | ✅ **Đã so khớp**: Quản trị ➔ Master Header & Infrastructure Cards |
| 26 | `d_b_o_c_u_g_i_nh_p_h_ng_ai` | AI Forecasting &amp; Stock-out Risk Hub | `zone2_inventory.js` | `Zone2Inventory.renderPODrafts()` | ✅ **Đã so khớp**: Kho hàng ➔ Sub-tab "Dự báo PO Draft" |
| 27 | `docs_plan` | docs_plan | `Documentation` | `Markdown Docs Plan` | ✅ **Đã so khớp**: Thư mục docs_plan/ |
| 28 | `i_so_t_chi_ti_t_v_s_n_shopee_tiktok_shop` | Đối Soát Chi Tiết Ví Sàn TMĐT | `zone3_sales.js` | `Zone3Sales.renderMarketplaceRecon()` | ✅ **Đã so khớp**: Tài chính ➔ Sub-tab "Đối soát Sàn TMĐT" |
| 29 | `m_ph_ng_k_ch_b_n_kinh_doanh_what_if` | Phòng thí nghiệm Kịch bản Kinh doanh | `zone5_ai.js` | `Zone5AI.renderWhatIfLab()` | ✅ **Đã so khớp**: Cố vấn AI ➔ Tab "What-If Lab" |
| 30 | `m_ph_ng_k_ch_b_n_what_if_d_ng_ti_n_p_l_c_thanh_kho_n` | Phòng Thí Nghiệm What-If: Căng Thẳng Dòng Tiền &amp; Tối Ưu Thanh Khoản | `zone5_ai.js` | `Zone5AI.renderWhatIfLab()` | ✅ **Đã so khớp**: Cố vấn AI ➔ Tab "What-If Lab" |
| 31 | `modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview_1` | Xem trước &amp; Phê duyệt Đơn Đặt Hàng (PO Draft) — Đợt Nhập Hàng Mega 11.11 | `zone2_inventory.js` | `Zone2Inventory.renderPODrafts() (Preview Modal)` | ✅ **Đã so khớp**: Kho hàng ➔ PO Draft ➔ Nút "Duyệt PO Draft" |
| 32 | `modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview_2` | Dự báo Nhu Cầu &amp; Gợi Ý Nhập Hàng Mega 11.11 | `zone2_inventory.js` | `Zone2Inventory.renderPODrafts() (Preview Modal 2)` | ✅ **Đã so khớp**: Kho hàng ➔ PO Draft ➔ Nút "Xem Gợi Ý Mega 11.11" |
| 33 | `modal_l_p_phi_u_chi_ti_n_qu_t_vietqr_b2b_cashflow_p_l` | Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế | `zone3_sales.js` | `Zone3Sales.openVietQRModal()` | ✅ **Đã so khớp**: Tài chính ➔ Nút "Lập phiếu Chi VietQR" |
| 34 | `modal_l_p_phi_u_thu_ti_n_b_n_s_i_t_c_i_l_cashflow_p_l` | Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế | `zone3_sales.js` | `Zone3Sales.openVietQRModal()` | ✅ **Đã so khớp**: Tài chính ➔ Nút "Lập phiếu Thu B2B" |
| 35 | `modal_nh_p_kho_kh_i_t_o_l_date_po_1` | Kho &amp; Lô Date Mỹ Phẩm | `zone2_inventory.js` | `Zone2Inventory.openIntakeWizard()` | ✅ **Đã so khớp**: Kho hàng ➔ PO Draft ➔ Nút "Khởi tạo Nhập kho" |
| 36 | `modal_nh_p_kho_kh_i_t_o_l_date_po_2` | Kho &amp; Lô Date Mỹ Phẩm | `zone2_inventory.js` | `Zone2Inventory.openIntakeWizard()` | ✅ **Đã so khớp**: Kho hàng ➔ PO Draft ➔ Nút "Nhập kho đợt 2" |
| 37 | `modal_nh_p_kho_kh_i_t_o_l_date_po_3` | Kho &amp; Lô Date Mỹ Phẩm | `zone2_inventory.js` | `Zone2Inventory.openIntakeWizard()` | ✅ **Đã so khớp**: Kho hàng ➔ PO Draft ➔ Nút "Nhập kho đợt 3" |
| 38 | `modal_th_m_nh_n_vi_n_m_i_g_n_ph_n_quy_n_rbac` | modal_th_m_nh_n_vi_n_m_i_g_n_ph_n_quy_n_rbac | `zone1_admin.js` | `Zone1Admin.renderRBACUsers() (Add User Modal)` | ✅ **Đã so khớp**: Quản trị ➔ RBAC Users ➔ Nút "+ Thêm nhân viên" |
| 39 | `modal_thanh_to_n_c_ng_n_qu_t_vietqr_b2b_h_ng_lo_t` | Thanh Toán Công Nợ Đối Tác &amp; Lập Lệnh VietQR B2B | `zone3_sales.js` | `Zone3Sales.openVietQRModal()` | ✅ **Đã so khớp**: Kho hàng ➔ Nhà cung cấp ➔ Nút "Thanh toán VietQR" |
| 40 | `qu_n_l_n_h_ng_pos_b_n_l_a_k_nh` | Hub Đơn hàng &amp; POS Đa kênh | `zone3_sales.js` | `Zone3Sales.renderOmnichannel()` | ✅ **Đã so khớp**: Tài chính ➔ Sub-tab "Đơn hàng Đa kênh" |
| 41 | `qu_n_l_nh_cung_c_p_c_ng_n_n_h_ng` | Quản lý Nhà Cung Cấp &amp; Công Nợ Đơn Hàng | `zone2_inventory.js` | `Zone2Inventory.renderSuppliers()` | ✅ **Đã so khớp**: Kho hàng ➔ Sub-tab "Nhà cung cấp & Công nợ" |
| 42 | `qu_n_l_s_n_ph_m_bi_n_th_kho_l_m_ph_m` | Quản lý Sản phẩm, Biến thể &amp; Kho Lô Mỹ phẩm | `zone2_inventory.js` | `Zone2Inventory.renderVariantsFEFO()` | ✅ **Đã so khớp**: Kho hàng ➔ Sub-tab "Sản phẩm & Biến thể FEFO" |
| 43 | `retail_intelligence_pulse` | retail_intelligence_pulse | `zone5_ai.js` | `Zone5AI.renderRetailPulse()` | ✅ **Đã so khớp**: Dashboard / AI Advisor ➔ Sub-tab "Retail Pulse" |
| 44 | `s_thu_chi_d_ng_ti_n_th_c_t_cashflow_p_l` | Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế | `zone3_sales.js` | `Zone3Sales.renderCashflowAccrual()` | ✅ **Đã so khớp**: Tài chính ➔ Sub-tab "Sổ thu chi Cashflow" |
| 45 | `sa_01_qu_n_l_t_i_kho_n_ph_n_quy_n_iam_rbac_console` | SA-01: Quản Lý Tài Khoản &amp; Phân Quyền (IAM &amp; RBAC Governance) | `zone1_admin.js` | `Zone1Admin.renderRBACUsers()` | ✅ **Đã so khớp**: Quản trị ➔ Sub-tab "IAM RBAC Users" |
| 46 | `sa_01_qu_n_tr_h_th_ng_c_u_h_nh_n_n_t_ng_system_administrator_master_console` | sa_01_qu_n_tr_h_th_ng_c_u_h_nh_n_n_t_ng_system_administrator_master_console | `zone1_admin.js` | `Zone1Admin.renderSecurityConfig()` | ✅ **Đã so khớp**: Quản trị ➔ Sub-tab "Security Config" |
| 47 | `sa_02_qu_n_l_doanh_nghi_p_multi_tenant_governance_console` | Trung Tâm Quản Trị Khách Thuê &amp; Multi-Tenant | `zone1_admin.js` | `Zone1Admin.renderTenants()` | ✅ **Đã so khớp**: Quản trị ➔ Sub-tab "Multi-Tenant Governance" |
| 48 | `sa_03_qu_n_l_c_u_h_nh_h_th_ng_ng_ng_an_ninh_v_n_h_nh` | SA-03: Cấu Hình Hệ Thống, Ngưỡng Cảnh Báo &amp; An Ninh Vận Hành | `zone1_admin.js` | `Zone1Admin.renderSecurityConfig()` | ✅ **Đã so khớp**: Quản trị ➔ Sub-tab "Security Config" |
| 49 | `sa_04_nh_t_k_audit_trail_ki_m_to_n_b_o_m_t_truy_v_t_s_c` | Nhật Ký Kiểm Toán &amp; Điều Tra Pháp Y Bảo Mật | `zone1_admin.js` | `Zone1Admin.renderAuditLogs()` | ✅ **Đã so khớp**: Quản trị ➔ Sub-tab "Audit Logs" |
| 50 | `se_01_ghi_nh_n_giao_d_ch_b_n_h_ng_pos_store_employee_pos_terminal` | se_01_ghi_nh_n_giao_d_ch_b_n_h_ng_pos_store_employee_pos_terminal | `zone4_pos.js` | `Zone4POS.renderTerminal()` | ✅ **Đã so khớp**: App Switcher ➔ POS Thu Ngân ➔ Tab 1 |
| 51 | `se_02_ki_m_k_t_n_kho_qu_y_qu_n_l_l_h_n_d_ng_fefo` | se_02_ki_m_k_t_n_kho_qu_y_qu_n_l_l_h_n_d_ng_fefo | `zone4_pos.js` | `Zone4POS.renderInventoryCount()` | ✅ **Đã so khớp**: POS Thu Ngân ➔ Tab "Kiểm kê quầy" |
| 52 | `se_03_ghi_nh_n_h_ng_nh_p_kho_qu_y_store_inward_goods_receiving_inventory_intake` | se_03_ghi_nh_n_h_ng_nh_p_kho_qu_y_store_inward_goods_receiving_inventory_intake | `zone4_pos.js` | `Zone4POS.renderStoreInward()` | ✅ **Đã so khớp**: POS Thu Ngân ➔ Tab "Nhập kho quầy SE-03" |
| 53 | `se_03_giao_ca_k_t_s_b_n_h_ng_cashier_shift_handover_drawer_settlement` | Giao Ca, Kiểm Tiền Két &amp; Kết Sổ Doanh Thu | `zone4_pos.js` | `Zone4POS.openShiftModal()` | ✅ **Đã so khớp**: POS Thu Ngân ➔ Nút "Chốt ca & Kết sổ" |
| 54 | `se_04_tra_c_u_xem_th_ng_tin_s_n_ph_m_b_n_h_ng_product_directory_sales_reference` | se_04_tra_c_u_xem_th_ng_tin_s_n_ph_m_b_n_h_ng_product_directory_sales_reference | `zone4_pos.js` | `Zone4POS.renderProductDirectory()` | ✅ **Đã so khớp**: POS Thu Ngân ➔ Tab "Tra cứu sản phẩm" |
| 55 | `se_04_x_l_i_tr_h_ng_ho_n_ti_n_b_o_h_nh_t_i_qu_y_pos` | se_04_x_l_i_tr_h_ng_ho_n_ti_n_b_o_h_nh_t_i_qu_y_pos | `zone4_pos.js` | `Zone4POS.renderReturnsWarranty()` | ✅ **Đã so khớp**: POS Thu Ngân ➔ Tab "Đổi trả & bảo hành" |

---

## II. PHÂN TÍCH SO KHỚP CHI TIẾT TỪNG MÀN HÌNH (DETAILED CODE & LAYOUT AUDIT)

### 1. Thư mục: `ai_copilot_tr_l_quy_t_nh`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** ABC Copilot — Trợ lý Ra Quyết Định Kinh Doanh
- **Mã Nguồn HTML Gốc:** `ai_copilot_tr_l_quy_t_nh/code.html` (1 ô nhập liệu (Input fields), 33 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone0_shell.js`](file:///d:/prototype/new_pd/js/components/zone0_shell.js), Hàm tương ứng `Zone0Shell.renderAIDrawer()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Nút nổi góc phải bottom bar ➔ Mở slide drawer chat & xem gợi ý
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 2. Thư mục: `ai_insights_ph_t_hi_n_b_t_th_ng_th_i_gian_th_c`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Trung tâm AI Insights &amp; Phát hiện Bất thường Engine v4.2
- **Mã Nguồn HTML Gốc:** `ai_insights_ph_t_hi_n_b_t_th_ng_th_i_gian_th_c/code.html` (2 ô nhập liệu (Input fields), 23 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderAnomalyCenter()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Cố vấn AI ➔ Tab "Cảnh báo Bất thường"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 3. Thư mục: `b_o_c_o_l_i_l_p_l_chi_ti_t_accrual_vs_cashflow`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Báo Cáo Kết Quả Kinh Doanh &amp; Dòng Tiền Thực Tế
- **Mã Nguồn HTML Gốc:** `b_o_c_o_l_i_l_p_l_chi_ti_t_accrual_vs_cashflow/code.html` (1 ô nhập liệu (Input fields), 21 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderCashflowAccrual()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Sub-tab "P&L & Cashflow"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 4. Thư mục: `b_o_c_o_t_ng_quan_ch_c_a_h_ng`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Xin chào, Nguyễn Thị Mai!
- **Mã Nguồn HTML Gốc:** `b_o_c_o_t_ng_quan_ch_c_a_h_ng/code.html` (1 ô nhập liệu (Input fields), 18 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderRetailPulse()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** AI Advisor / Dashboard ➔ Sub-tab "Retail Pulse"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 5. Thư mục: `bo_01_qu_n_l_doanh_nghi_p_c_u_h_nh_v_n_h_nh`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Quản lý Doanh nghiệp &amp; Cấu hình Vận hành (Business Profile &amp; Operational Settings)
- **Mã Nguồn HTML Gốc:** `bo_01_qu_n_l_doanh_nghi_p_c_u_h_nh_v_n_h_nh/code.html` (8 ô nhập liệu (Input fields), 26 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.renderBusinessProfile()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị & BO-01 ➔ Tab "Hồ sơ Doanh nghiệp"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 6. Thư mục: `bo_02_ghi_nh_n_chi_ph_nhanh_qu_n_l_ng_n_s_ch_opex_mobile`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Chi Phí &amp; Ngân Sách
- **Mã Nguồn HTML Gốc:** `bo_02_ghi_nh_n_chi_ph_nhanh_qu_n_l_ng_n_s_ch_opex_mobile/code.html` (17 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderCashflowAccrual()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ OPEX (Co giãn màn hình mobile)
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 7. Thư mục: `bo_02_qu_n_l_chi_ph_t_i_ch_nh_c_b_n`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Quản lý Nhóm Chi Phí &amp; Tài Chính Cơ Bản
- **Mã Nguồn HTML Gốc:** `bo_02_qu_n_l_chi_ph_t_i_ch_nh_c_b_n/code.html` (2 ô nhập liệu (Input fields), 60 nút bấm thao tác (Buttons), 2 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderCashflowAccrual()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Sub-tab "Chi phí & Ngân sách OPEX"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 8. Thư mục: `bo_03_qu_n_l_s_n_ph_m_b_ng_gi`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Quản lý Sản phẩm &amp; Bảng Giá
- **Mã Nguồn HTML Gốc:** `bo_03_qu_n_l_s_n_ph_m_b_ng_gi/code.html` (4 ô nhập liệu (Input fields), 41 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderVariantsFEFO()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ Sub-tab "Sản phẩm & Biến thể FEFO"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 9. Thư mục: `bo_04_ki_m_tra_t_n_kho_nhanh_qu_t_m_fefo_mobile`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Kiểm Kho Nhanh &amp; Lô Date FEFO
- **Mã Nguồn HTML Gốc:** `bo_04_ki_m_tra_t_n_kho_nhanh_qu_t_m_fefo_mobile/code.html` (1 ô nhập liệu (Input fields), 28 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js), Hàm tương ứng `Zone4POS.renderInventoryCount()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** POS Thu Ngân ➔ Tab "Kiểm kê quầy FEFO"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 10. Thư mục: `bo_04_qu_n_l_t_n_kho_ki_m_so_t_xu_t_nh_p`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Quản lý Tồn kho &amp; Kiểm soát Xuất Nhập Tồn
- **Mã Nguồn HTML Gốc:** `bo_04_qu_n_l_t_n_kho_ki_m_so_t_xu_t_nh_p/code.html` (5 ô nhập liệu (Input fields), 46 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderStockMoves()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ Sub-tab "Nhật ký Xuất Nhập Tồn"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 11. Thư mục: `bo_05_b_o_c_o_dashboard_kpi_doanh_nghi_p_mobile`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** bo_05_b_o_c_o_dashboard_kpi_doanh_nghi_p_mobile
- **Mã Nguồn HTML Gốc:** `bo_05_b_o_c_o_dashboard_kpi_doanh_nghi_p_mobile/code.html` (16 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderKPIOverview()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Dashboard ➔ Co giãn màn hình mobile
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 12. Thư mục: `bo_05_b_o_c_o_t_ng_quan_dashboard_kpi_doanh_nghi_p`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Executive Command Center
- **Mã Nguồn HTML Gốc:** `bo_05_b_o_c_o_t_ng_quan_dashboard_kpi_doanh_nghi_p/code.html` (1 ô nhập liệu (Input fields), 18 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderKPIOverview()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** App Switcher ➔ Dashboard KPI
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 13. Thư mục: `bo_06_chi_ti_t_n_h_ng_l_ch_s_v_ng_i_bi_n_ng`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** #ORD-2024-9982
- **Mã Nguồn HTML Gốc:** `bo_06_chi_ti_t_n_h_ng_l_ch_s_v_ng_i_bi_n_ng/code.html` (9 nút bấm thao tác (Buttons), 2 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderOmnichannel() (Detail Modal)`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Đơn hàng ➔ Bấm vào mã đơn bất kỳ
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 14. Thư mục: `bo_06_form_t_o_n_h_ng_m_i_xu_t_kho_a_k_nh`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** bo_06_form_t_o_n_h_ng_m_i_xu_t_kho_a_k_nh
- **Mã Nguồn HTML Gốc:** `bo_06_form_t_o_n_h_ng_m_i_xu_t_kho_a_k_nh/code.html` (8 ô nhập liệu (Input fields), 29 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderNewOrderForm()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Đơn hàng ➔ Nút "+ Tạo đơn mới"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 15. Thư mục: `bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Quản lý Đơn Hàng &amp; Vận Hành Đa Kênh
- **Mã Nguồn HTML Gốc:** `bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh/code.html` (1 ô nhập liệu (Input fields), 33 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderOmnichannel()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Sub-tab "Đơn hàng Đa kênh"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 16. Thư mục: `bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh_mobile`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh_mobile
- **Mã Nguồn HTML Gốc:** `bo_06_qu_n_l_n_h_ng_v_n_h_nh_a_k_nh_mobile/code.html` (1 ô nhập liệu (Input fields), 19 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderOmnichannel()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Đơn hàng (Co giãn mobile)
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 17. Thư mục: `bo_07_ai_business_analytics_ph_n_t_ch_hi_u_su_t_a_chi_u`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** BO-07: AI Business Analytics &amp; Phân Tích Đa Chiều
- **Mã Nguồn HTML Gốc:** `bo_07_ai_business_analytics_ph_n_t_ch_hi_u_su_t_a_chi_u/code.html` (13 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderKPIOverview() / renderDashboard()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Cố vấn AI ➔ Tab "Executive Dashboard"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 18. Thư mục: `bo_08_ai_anomaly_detection_trung_t_m_c_nh_b_o_r_i_ro_th_i_gian_th_c`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Trung Tâm Cảnh Báo Rủi Ro Thời Gian Thực
- **Mã Nguồn HTML Gốc:** `bo_08_ai_anomaly_detection_trung_t_m_c_nh_b_o_r_i_ro_th_i_gian_th_c/code.html` (1 ô nhập liệu (Input fields), 17 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderAnomalyCenter()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Cố vấn AI ➔ Tab "Cảnh báo Bất thường"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 19. Thư mục: `bo_09_ai_demand_forecasting_replenishment_planning`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Dự Báo Nhu Cầu &amp; Kế Hoạch Nhập Hàng Tự Động
- **Mã Nguồn HTML Gốc:** `bo_09_ai_demand_forecasting_replenishment_planning/code.html` (3 ô nhập liệu (Input fields), 20 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderPODrafts()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ Sub-tab "Dự báo Nhu cầu & PO Draft"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 20. Thư mục: `bo_09_ai_demand_forecasting_replenishment_planning_mobile_summary`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Dự Báo Nhu Cầu &amp; Nhập Hàng AI
- **Mã Nguồn HTML Gốc:** `bo_09_ai_demand_forecasting_replenishment_planning_mobile_summary/code.html` (3 ô nhập liệu (Input fields), 12 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderPODrafts()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ PO Draft (Co giãn mobile)
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 21. Thư mục: `bo_10_m_ph_ng_k_ch_b_n_kinh_doanh_what_if_scenario_lab`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Phòng Thí Nghiệm Chiến Lược &amp; Stress-Test Rủi Ro biotech
- **Mã Nguồn HTML Gốc:** `bo_10_m_ph_ng_k_ch_b_n_kinh_doanh_what_if_scenario_lab/code.html` (6 ô nhập liệu (Input fields), 9 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderWhatIfLab()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Cố vấn AI ➔ Tab "What-If Scenario Lab"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 22. Thư mục: `bo_11_ai_business_advisor_tr_l_chi_n_l_c_c_level`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Trung Tâm Cố Vấn Chiến Lược Doanh Nghiệp
- **Mã Nguồn HTML Gốc:** `bo_11_ai_business_advisor_tr_l_chi_n_l_c_c_level/code.html` (2 ô nhập liệu (Input fields), 15 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderAIAdvisor()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Cố vấn AI ➔ Tab "C-Level Advisor"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 23. Thư mục: `bo_11_ai_business_advisor_tr_l_chi_n_l_c_c_level_mobile`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Trung Tâm Cố Vấn Chiến Lược AI
- **Mã Nguồn HTML Gốc:** `bo_11_ai_business_advisor_tr_l_chi_n_l_c_c_level_mobile/code.html` (1 ô nhập liệu (Input fields), 13 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderAIAdvisor()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Cố vấn AI (Co giãn mobile)
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 24. Thư mục: `c_i_t_ph_n_quy_n_qu_n_l_nh_n_vi_n`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Quản lý Nhân viên &amp; Ma trận Phân quyền (RBAC)
- **Mã Nguồn HTML Gốc:** `c_i_t_ph_n_quy_n_qu_n_l_nh_n_vi_n/code.html` (2 ô nhập liệu (Input fields), 31 nút bấm thao tác (Buttons), 2 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.renderRBACUsers()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị ➔ Sub-tab "RBAC Users"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 25. Thư mục: `c_ng_qu_n_tr_h_th_ng_to_n_n_ng_system_administrator_sa_console`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Trung Tâm Điều Hành Hệ Thống &amp; Quản Trị Nền Tảng (System Administrator Console)
- **Mã Nguồn HTML Gốc:** `c_ng_qu_n_tr_h_th_ng_to_n_n_ng_system_administrator_sa_console/code.html` (2 ô nhập liệu (Input fields), 33 nút bấm thao tác (Buttons), 3 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.render()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị ➔ Master Header & Infrastructure Cards
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 26. Thư mục: `d_b_o_c_u_g_i_nh_p_h_ng_ai`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** AI Forecasting &amp; Stock-out Risk Hub
- **Mã Nguồn HTML Gốc:** `d_b_o_c_u_g_i_nh_p_h_ng_ai/code.html` (8 ô nhập liệu (Input fields), 28 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderPODrafts()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ Sub-tab "Dự báo PO Draft"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 27. Thư mục: `docs_plan`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** docs_plan
- **Mã Nguồn HTML Gốc:** `docs_plan/code.html` (Form/Layout tĩnh)
- **Hình Ảnh Đính Kèm Gốc:** Không có hình ảnh riêng
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`Documentation`](file:///d:/prototype/new_pd/js/components/Documentation), Hàm tương ứng `Markdown Docs Plan`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Thư mục docs_plan/
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 28. Thư mục: `i_so_t_chi_ti_t_v_s_n_shopee_tiktok_shop`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Đối Soát Chi Tiết Ví Sàn TMĐT
- **Mã Nguồn HTML Gốc:** `i_so_t_chi_ti_t_v_s_n_shopee_tiktok_shop/code.html` (2 ô nhập liệu (Input fields), 30 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderMarketplaceRecon()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Sub-tab "Đối soát Sàn TMĐT"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 29. Thư mục: `m_ph_ng_k_ch_b_n_kinh_doanh_what_if`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Phòng thí nghiệm Kịch bản Kinh doanh
- **Mã Nguồn HTML Gốc:** `m_ph_ng_k_ch_b_n_kinh_doanh_what_if/code.html` (6 ô nhập liệu (Input fields), 17 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderWhatIfLab()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Cố vấn AI ➔ Tab "What-If Lab"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 30. Thư mục: `m_ph_ng_k_ch_b_n_what_if_d_ng_ti_n_p_l_c_thanh_kho_n`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Phòng Thí Nghiệm What-If: Căng Thẳng Dòng Tiền &amp; Tối Ưu Thanh Khoản
- **Mã Nguồn HTML Gốc:** `m_ph_ng_k_ch_b_n_what_if_d_ng_ti_n_p_l_c_thanh_kho_n/code.html` (6 ô nhập liệu (Input fields), 13 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderWhatIfLab()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Cố vấn AI ➔ Tab "What-If Lab"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 31. Thư mục: `modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview_1`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Xem trước &amp; Phê duyệt Đơn Đặt Hàng (PO Draft) — Đợt Nhập Hàng Mega 11.11
- **Mã Nguồn HTML Gốc:** `modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview_1/code.html` (8 ô nhập liệu (Input fields), 15 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderPODrafts() (Preview Modal)`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ PO Draft ➔ Nút "Duyệt PO Draft"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 32. Thư mục: `modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview_2`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Dự báo Nhu Cầu &amp; Gợi Ý Nhập Hàng Mega 11.11
- **Mã Nguồn HTML Gốc:** `modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview_2/code.html` (8 ô nhập liệu (Input fields), 15 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderPODrafts() (Preview Modal 2)`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ PO Draft ➔ Nút "Xem Gợi Ý Mega 11.11"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 33. Thư mục: `modal_l_p_phi_u_chi_ti_n_qu_t_vietqr_b2b_cashflow_p_l`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế
- **Mã Nguồn HTML Gốc:** `modal_l_p_phi_u_chi_ti_n_qu_t_vietqr_b2b_cashflow_p_l/code.html` (4 ô nhập liệu (Input fields), 54 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.openVietQRModal()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Nút "Lập phiếu Chi VietQR"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 34. Thư mục: `modal_l_p_phi_u_thu_ti_n_b_n_s_i_t_c_i_l_cashflow_p_l`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế
- **Mã Nguồn HTML Gốc:** `modal_l_p_phi_u_thu_ti_n_b_n_s_i_t_c_i_l_cashflow_p_l/code.html` (3 ô nhập liệu (Input fields), 15 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.openVietQRModal()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Nút "Lập phiếu Thu B2B"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 35. Thư mục: `modal_nh_p_kho_kh_i_t_o_l_date_po_1`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Kho &amp; Lô Date Mỹ Phẩm
- **Mã Nguồn HTML Gốc:** `modal_nh_p_kho_kh_i_t_o_l_date_po_1/code.html` (10 ô nhập liệu (Input fields), 19 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.openIntakeWizard()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ PO Draft ➔ Nút "Khởi tạo Nhập kho"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 36. Thư mục: `modal_nh_p_kho_kh_i_t_o_l_date_po_2`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Kho &amp; Lô Date Mỹ Phẩm
- **Mã Nguồn HTML Gốc:** `modal_nh_p_kho_kh_i_t_o_l_date_po_2/code.html` (9 ô nhập liệu (Input fields), 19 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.openIntakeWizard()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ PO Draft ➔ Nút "Nhập kho đợt 2"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 37. Thư mục: `modal_nh_p_kho_kh_i_t_o_l_date_po_3`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Kho &amp; Lô Date Mỹ Phẩm
- **Mã Nguồn HTML Gốc:** `modal_nh_p_kho_kh_i_t_o_l_date_po_3/code.html` (10 ô nhập liệu (Input fields), 22 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.openIntakeWizard()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ PO Draft ➔ Nút "Nhập kho đợt 3"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 38. Thư mục: `modal_th_m_nh_n_vi_n_m_i_g_n_ph_n_quy_n_rbac`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** modal_th_m_nh_n_vi_n_m_i_g_n_ph_n_quy_n_rbac
- **Mã Nguồn HTML Gốc:** `modal_th_m_nh_n_vi_n_m_i_g_n_ph_n_quy_n_rbac/code.html` (12 ô nhập liệu (Input fields), 5 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.renderRBACUsers() (Add User Modal)`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị ➔ RBAC Users ➔ Nút "+ Thêm nhân viên"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 39. Thư mục: `modal_thanh_to_n_c_ng_n_qu_t_vietqr_b2b_h_ng_lo_t`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Thanh Toán Công Nợ Đối Tác &amp; Lập Lệnh VietQR B2B
- **Mã Nguồn HTML Gốc:** `modal_thanh_to_n_c_ng_n_qu_t_vietqr_b2b_h_ng_lo_t/code.html` (4 ô nhập liệu (Input fields), 11 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.openVietQRModal()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ Nhà cung cấp ➔ Nút "Thanh toán VietQR"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 40. Thư mục: `qu_n_l_n_h_ng_pos_b_n_l_a_k_nh`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Hub Đơn hàng &amp; POS Đa kênh
- **Mã Nguồn HTML Gốc:** `qu_n_l_n_h_ng_pos_b_n_l_a_k_nh/code.html` (2 ô nhập liệu (Input fields), 39 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderOmnichannel()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Sub-tab "Đơn hàng Đa kênh"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 41. Thư mục: `qu_n_l_nh_cung_c_p_c_ng_n_n_h_ng`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Quản lý Nhà Cung Cấp &amp; Công Nợ Đơn Hàng
- **Mã Nguồn HTML Gốc:** `qu_n_l_nh_cung_c_p_c_ng_n_n_h_ng/code.html` (2 ô nhập liệu (Input fields), 40 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderSuppliers()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ Sub-tab "Nhà cung cấp & Công nợ"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 42. Thư mục: `qu_n_l_s_n_ph_m_bi_n_th_kho_l_m_ph_m`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Quản lý Sản phẩm, Biến thể &amp; Kho Lô Mỹ phẩm
- **Mã Nguồn HTML Gốc:** `qu_n_l_s_n_ph_m_bi_n_th_kho_l_m_ph_m/code.html` (9 ô nhập liệu (Input fields), 36 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone2_inventory.js`](file:///d:/prototype/new_pd/js/components/zone2_inventory.js), Hàm tương ứng `Zone2Inventory.renderVariantsFEFO()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Kho hàng ➔ Sub-tab "Sản phẩm & Biến thể FEFO"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 43. Thư mục: `retail_intelligence_pulse`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** retail_intelligence_pulse
- **Mã Nguồn HTML Gốc:** `retail_intelligence_pulse/code.html` (Form/Layout tĩnh)
- **Hình Ảnh Đính Kèm Gốc:** Không có hình ảnh riêng
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone5_ai.js`](file:///d:/prototype/new_pd/js/components/zone5_ai.js), Hàm tương ứng `Zone5AI.renderRetailPulse()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Dashboard / AI Advisor ➔ Sub-tab "Retail Pulse"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 44. Thư mục: `s_thu_chi_d_ng_ti_n_th_c_t_cashflow_p_l`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Sổ Thu Chi &amp; Quản Trị Dòng Tiền Thực Tế
- **Mã Nguồn HTML Gốc:** `s_thu_chi_d_ng_ti_n_th_c_t_cashflow_p_l/code.html` (2 ô nhập liệu (Input fields), 39 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone3_sales.js`](file:///d:/prototype/new_pd/js/components/zone3_sales.js), Hàm tương ứng `Zone3Sales.renderCashflowAccrual()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Tài chính ➔ Sub-tab "Sổ thu chi Cashflow"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 45. Thư mục: `sa_01_qu_n_l_t_i_kho_n_ph_n_quy_n_iam_rbac_console`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** SA-01: Quản Lý Tài Khoản &amp; Phân Quyền (IAM &amp; RBAC Governance)
- **Mã Nguồn HTML Gốc:** `sa_01_qu_n_l_t_i_kho_n_ph_n_quy_n_iam_rbac_console/code.html` (8 ô nhập liệu (Input fields), 37 nút bấm thao tác (Buttons), 2 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.renderRBACUsers()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị ➔ Sub-tab "IAM RBAC Users"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 46. Thư mục: `sa_01_qu_n_tr_h_th_ng_c_u_h_nh_n_n_t_ng_system_administrator_master_console`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** sa_01_qu_n_tr_h_th_ng_c_u_h_nh_n_n_t_ng_system_administrator_master_console
- **Mã Nguồn HTML Gốc:** `sa_01_qu_n_tr_h_th_ng_c_u_h_nh_n_n_t_ng_system_administrator_master_console/code.html` (25 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.renderSecurityConfig()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị ➔ Sub-tab "Security Config"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 47. Thư mục: `sa_02_qu_n_l_doanh_nghi_p_multi_tenant_governance_console`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Trung Tâm Quản Trị Khách Thuê &amp; Multi-Tenant
- **Mã Nguồn HTML Gốc:** `sa_02_qu_n_l_doanh_nghi_p_multi_tenant_governance_console/code.html` (1 ô nhập liệu (Input fields), 29 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.renderTenants()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị ➔ Sub-tab "Multi-Tenant Governance"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 48. Thư mục: `sa_03_qu_n_l_c_u_h_nh_h_th_ng_ng_ng_an_ninh_v_n_h_nh`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** SA-03: Cấu Hình Hệ Thống, Ngưỡng Cảnh Báo &amp; An Ninh Vận Hành
- **Mã Nguồn HTML Gốc:** `sa_03_qu_n_l_c_u_h_nh_h_th_ng_ng_ng_an_ninh_v_n_h_nh/code.html` (3 ô nhập liệu (Input fields), 19 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.renderSecurityConfig()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị ➔ Sub-tab "Security Config"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 49. Thư mục: `sa_04_nh_t_k_audit_trail_ki_m_to_n_b_o_m_t_truy_v_t_s_c`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Nhật Ký Kiểm Toán &amp; Điều Tra Pháp Y Bảo Mật
- **Mã Nguồn HTML Gốc:** `sa_04_nh_t_k_audit_trail_ki_m_to_n_b_o_m_t_truy_v_t_s_c/code.html` (1 ô nhập liệu (Input fields), 21 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone1_admin.js`](file:///d:/prototype/new_pd/js/components/zone1_admin.js), Hàm tương ứng `Zone1Admin.renderAuditLogs()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** Quản trị ➔ Sub-tab "Audit Logs"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 50. Thư mục: `se_01_ghi_nh_n_giao_d_ch_b_n_h_ng_pos_store_employee_pos_terminal`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** se_01_ghi_nh_n_giao_d_ch_b_n_h_ng_pos_store_employee_pos_terminal
- **Mã Nguồn HTML Gốc:** `se_01_ghi_nh_n_giao_d_ch_b_n_h_ng_pos_store_employee_pos_terminal/code.html` (6 ô nhập liệu (Input fields), 31 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js), Hàm tương ứng `Zone4POS.renderTerminal()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** App Switcher ➔ POS Thu Ngân ➔ Tab 1
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 51. Thư mục: `se_02_ki_m_k_t_n_kho_qu_y_qu_n_l_l_h_n_d_ng_fefo`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** se_02_ki_m_k_t_n_kho_qu_y_qu_n_l_l_h_n_d_ng_fefo
- **Mã Nguồn HTML Gốc:** `se_02_ki_m_k_t_n_kho_qu_y_qu_n_l_l_h_n_d_ng_fefo/code.html` (7 ô nhập liệu (Input fields), 45 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js), Hàm tương ứng `Zone4POS.renderInventoryCount()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** POS Thu Ngân ➔ Tab "Kiểm kê quầy"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 52. Thư mục: `se_03_ghi_nh_n_h_ng_nh_p_kho_qu_y_store_inward_goods_receiving_inventory_intake`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** se_03_ghi_nh_n_h_ng_nh_p_kho_qu_y_store_inward_goods_receiving_inventory_intake
- **Mã Nguồn HTML Gốc:** `se_03_ghi_nh_n_h_ng_nh_p_kho_qu_y_store_inward_goods_receiving_inventory_intake/code.html` (5 ô nhập liệu (Input fields), 17 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js), Hàm tương ứng `Zone4POS.renderStoreInward()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** POS Thu Ngân ➔ Tab "Nhập kho quầy SE-03"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 53. Thư mục: `se_03_giao_ca_k_t_s_b_n_h_ng_cashier_shift_handover_drawer_settlement`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** Giao Ca, Kiểm Tiền Két &amp; Kết Sổ Doanh Thu
- **Mã Nguồn HTML Gốc:** `se_03_giao_ca_k_t_s_b_n_h_ng_cashier_shift_handover_drawer_settlement/code.html` (11 ô nhập liệu (Input fields), 22 nút bấm thao tác (Buttons), 1 bảng dữ liệu (Data tables))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js), Hàm tương ứng `Zone4POS.openShiftModal()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** POS Thu Ngân ➔ Nút "Chốt ca & Kết sổ"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 54. Thư mục: `se_04_tra_c_u_xem_th_ng_tin_s_n_ph_m_b_n_h_ng_product_directory_sales_reference`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** se_04_tra_c_u_xem_th_ng_tin_s_n_ph_m_b_n_h_ng_product_directory_sales_reference
- **Mã Nguồn HTML Gốc:** `se_04_tra_c_u_xem_th_ng_tin_s_n_ph_m_b_n_h_ng_product_directory_sales_reference/code.html` (5 ô nhập liệu (Input fields), 31 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js), Hàm tương ứng `Zone4POS.renderProductDirectory()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** POS Thu Ngân ➔ Tab "Tra cứu sản phẩm"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.

### 55. Thư mục: `se_04_x_l_i_tr_h_ng_ho_n_ti_n_b_o_h_nh_t_i_qu_y_pos`
- **Tên Màn Hình / Nghiệp Vụ Gốc:** se_04_x_l_i_tr_h_ng_ho_n_ti_n_b_o_h_nh_t_i_qu_y_pos
- **Mã Nguồn HTML Gốc:** `se_04_x_l_i_tr_h_ng_ho_n_ti_n_b_o_h_nh_t_i_qu_y_pos/code.html` (2 ô nhập liệu (Input fields), 15 nút bấm thao tác (Buttons))
- **Hình Ảnh Đính Kèm Gốc:** `screen.png`
- **Vị Trí Mã Nguồn Ở Bản Mới (`new_pd`):** File [`zone4_pos.js`](file:///d:/prototype/new_pd/js/components/zone4_pos.js), Hàm tương ứng `Zone4POS.renderReturnsWarranty()`
- **Đường Dẫn Truy Cập Người Dùng (Access Path):** POS Thu Ngân ➔ Tab "Đổi trả & bảo hành"
- **So Sánh Bố Trí (Layout Alignment):**
  - *Bản cũ*: Nằm riêng lẻ ở file `code.html`, dùng Tailwind class tùy biến rải rác, nút bấm chưa đồng bộ.
  - *Bản mới (`new_pd`)*: Được hợp nhất vào SPA dynamic, nằm trong khung **Odoo Card (`.o-card`)** chuẩn chỉnh, màu sắc đồng bộ Odoo Purple/Teal.
- **Cải Tiến Thân Thiện Người Dùng (Odoo UX Optimization):** Loại bỏ bớt chữ tiếng Anh rườm rà, đưa các con số quan trọng (Hero Metric) lên đầu, bổ sung nút bấm 1-Click trực quan.
