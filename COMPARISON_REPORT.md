# BÁO CÁO SO SÁNH CHI TIẾT: Bản Gốc vs Bản Mới
## Dự án: Stitch AI Business Copilot Platform → `new_pd` Prototype

> **Ngày kiểm tra:** 23/09/2026  
> **Bản gốc:** `D:\prototype\stitch_ai_business_copilot_platform` (54 màn hình HTML riêng biệt)  
> **Bản mới:** `D:\prototype\new_pd` (SPA - Single Page Application, 6 file JS zones)

---

## ✅ TÍNH NĂNG ĐÃ CÓ ĐẦY ĐỦ

| Zone | Màn hình Bản Gốc | Trạng Thái Bản Mới |
|------|------------------|-------------------|
| **Zone 0 - Shell** | Topbar Odoo Navigation, AI Copilot Drawer, Tenant Switcher | ✅ Có đầy đủ |
| **Zone 1 - SA Admin** | SA-01 IAM/RBAC Users, SA-02 Multi-Tenant, SA-03 Security Config, SA-04 Audit Log | ✅ Có đầy đủ (4 sub-tabs) |
| **Zone 2 - Inventory** | BO-03 Biến thể Size/Color, BO-04 Tồn kho FEFO, PO Draft Preview, Nhà Cung Cấp | ✅ Có đầy đủ (4 sub-tabs) |
| **Zone 3 - Sales** | BO-06 Đơn hàng đa kênh, Form tạo đơn, Đối soát Shopee/TikTok, Accrual P&L vs Cashflow | ✅ Có đầy đủ (4 sub-tabs) |
| **Zone 5 - AI/Dashboard** | BO-05 KPI Dashboard, Retail Pulse, BO-08 Anomaly Detection, BO-09 Demand Forecast, BO-10 What-If Lab, BO-11 AI Advisor | ✅ Có đầy đủ (6 màn hình) |

---

## 🔧 LỖI ĐÃ SỬA

### 1. BUG NGHIÊM TRỌNG: POS Modal Không Hoạt Động

**Nguyên nhân gốc rễ:**
Modal HTML render trong template string → App.render() ghi đè DOM →
document.getElementById('shift-closing-modal') không tìm thấy hoặc bị reset về 'hidden'

**Cách sửa:**
- Modal state lưu trong `Zone4POS.shiftModalOpen` (JS property) thay vì class CSS DOM
- Khi `openShiftModal()` → set `this.shiftModalOpen = true` → `App.render()` → modal hiển thị
- Modal không còn phụ thuộc vào DOM persistence

### 2. BUG: POS Sub-tabs Chỉ Có 1 Màn Hình

**Cách sửa:** Thêm 3 sub-tabs mới cho POS:
- **SE-04**: Đổi Trả & Bảo Hành Tại Quầy
- **SE-02**: Kiểm Kê Tồn Kho Quầy & FEFO
- **SE-04b**: Tra Cứu Sản Phẩm & Directory

---

## ⚠️ TÍNH NĂNG CÒN THIẾU SO VỚI BẢN GỐC

### Zone 4 POS - Đã sửa (v2):

| Màn hình Bản Gốc | Code Folder | Trạng Thái Mới |
|-----------------|-------------|---------------|
| SE-01: POS Terminal Thu Ngân | se_01_ghi_nh_n_giao_d_ch_b_n_h_ng_pos... | ✅ Có (sub-tab 1) |
| SE-02: Kiểm kê Tồn kho Quầy FEFO | se_02_ki_m_k_t_n_kho_qu_y... | ✅ Đã thêm (sub-tab 3) |
| SE-03: Nhập kho quầy (Store Inward) | se_03_ghi_nh_n_h_ng_nh_p_kho_qu_y... | ⚠️ Chưa có (có thể dùng Wizard Zone 2) |
| SE-03b: Giao ca & Kết sổ | se_03_giao_ca_k_t_s_b_n_h_ng... | ✅ Có (nút Chốt ca & modal đầy đủ) |
| SE-04: Tra cứu Sản phẩm | se_04_tra_c_u_xem_th_ng_tin_s_n_ph_m... | ✅ Đã thêm (sub-tab 4) |
| SE-04b: Đổi Trả & Bảo Hành | se_04_x_l_i_tr_h_ng_ho_n_ti_n_b_o_h_nh... | ✅ Đã thêm (sub-tab 2) |

### Các Modal Tách Biệt Trong Bản Gốc:

| Modal Bản Gốc | Code Folder | Trạng Thái |
|--------------|-------------|------------|
| Modal PO Draft Preview 1, 2 | modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft... | ✅ Có (nút "Xem Bản Thảo" trong Zone 2) |
| Modal Nhập kho 3 bước (Wizard) | modal_nh_p_kho_kh_i_t_o_l_date_po_1/2/3 | ✅ Có (Wizard 3 bước trong Zone 2) |
| Modal VietQR B2B Thu tiền | modal_l_p_phi_u_thu_ti_n... | ✅ Có (Zone 3 VietQR modal) |
| Modal VietQR B2B Chi tiền | modal_l_p_phi_u_chi_ti_n... | ✅ Có |
| Modal VietQR B2B Hàng loạt | modal_thanh_to_n_c_ng_n_qu_t_vietqr... | ⚠️ Chưa có modal riêng |
| Modal Thêm nhân viên RBAC | modal_th_m_nh_n_vi_n_m_i... | ✅ Có (nút trong Zone 1) |

### Màn Hình Mobile Responsive (Bản Gốc):

| Mobile Screen | Code Folder | Trạng Thái |
|--------------|-------------|------------|
| BO-02 Mobile OPEX | bo_02_ghi_nh_n_chi_ph_nhanh_mobile | ⚠️ Có Desktop, chưa mobile-first |
| BO-04 Mobile FEFO | bo_04_ki_m_tra_t_n_kho_nhanh_fefo_mobile | ⚠️ Responsive chưa mobile-first |
| BO-05 Mobile Dashboard | bo_05_b_o_c_o_dashboard_kpi_mobile | ⚠️ Responsive chưa mobile-first |
| BO-06 Mobile Orders | bo_06_qu_n_l_n_h_ng_mobile | ⚠️ Responsive chưa mobile-first |
| BO-09 Mobile AI Forecast | bo_09_ai_demand_forecasting_mobile | ⚠️ Chưa có view mobile riêng |
| BO-11 Mobile AI Advisor | bo_11_ai_business_advisor_mobile | ⚠️ Chưa có |

---

## 📊 THỐNG KÊ ĐỐI CHIẾU

| Hạng Mục | Bản Gốc | Bản Mới | Ghi Chú |
|----------|---------|---------|---------|
| Tổng số màn hình | 54 HTML files | 6 Zone, 22+ sub-views | SPA: nhiều screen trong 1 URL |
| Giao diện POS | 1 file HTML static | Dynamic SPA + 4 sub-tabs | ✅ Bản mới tốt hơn |
| Wizard nhập kho | 3 file HTML riêng | 1 Modal 3-bước | ✅ UX tốt hơn |
| AI Copilot Chat | 1 file HTML | Slide-out Drawer tương tác | ✅ Bản mới tốt hơn |
| VietQR B2B | 2 modal riêng | 1 modal dùng chung | ⚠️ Có thể tách thêm |
| Mobile screens | 6 màn hình riêng | Responsive CSS (partial) | ⚠️ Cần cải thiện |
| Auth/Login screen | ❌ Không có | ❌ Không có | 📋 TODO |
| 404/403 Error screen | 1 màn hình | Inline render | ✅ Có |

---

## 🚀 HÀNH ĐỘNG TỐI ƯU HÓA ĐỀ XUẤT

### Ưu tiên Cao (Đã sửa):
1. ✅ **[ĐÃ SỬA]** Bug POS Modal không mở được
2. ✅ **[ĐÃ SỬA]** Thêm sub-tabs SE-02, SE-04 cho POS
3. ✅ **[ĐÃ SỬA]** Thêm 3 phương thức thanh toán POS (Tiền mặt / Thẻ / QR Pay)

### Ưu tiên Trung bình (Việc cần làm):
4. Thêm màn hình SE-03 Nhập kho quầy (Store Inward Goods Receiving)
5. Tách modal VietQR thành 2 loại: Thu tiền & Chi tiền riêng
6. Thêm màn hình Auth/Login/Đăng nhập

### Ưu tiên Thấp (Enhancement):
7. Tối ưu Mobile-first layout cho các màn hình BO-mobile
8. Thêm OPEX Expense Form (hiện tại chỉ có danh sách)
9. Thêm BO-01 Cấu hình Doanh nghiệp (Business Settings)
