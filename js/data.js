/* ==========================================================================
   Stitch AI Business Copilot Platform - Complete 54-Screen Parity Mock Data
   ========================================================================== */

const MockData = {
  // Current Active Context
  activeRole: 'BO', // SA | BO | SE
  activeTenant: 'tenant_01',
  activeApp: 'apps', // apps | dashboard | inventory | sales | pos | ai_advisor | sa_admin
  activeView: 'list', // list | kanban | form | pivot

  // Active Sub-tabs for full 54-screen navigation
  subTabs: {
    dashboard: 'kpi_overview', // kpi_overview | retail_pulse
    inventory: 'variants_fefo', // variants_fefo | stock_moves | po_drafts | suppliers
    sales: 'omnichannel', // omnichannel | new_order_form | marketplace_recon | cashflow_accrual
    pos: 'terminal', // terminal | returns_warranty | product_directory
    ai_advisor: 'advisor_lab', // advisor_lab | anomaly_center | demand_forecast | whatif_lab
    sa_admin: 'tenants' // tenants | rbac_users | tech_master | security_config | audit_logs
  },

  // Tenants List (Multi-tenant SA-02)
  tenants: [
    { id: 'tenant_01', name: 'Maison de Bloom (Thời trang & Mỹ phẩm)', plan: 'Doanh nghiệp (Enterprise)', stores: 3, status: 'Đang hoạt động', owner: 'Phạm Thị Kim Hương', storage: '1.2 GB / 10 GB' },
    { id: 'tenant_02', name: 'Blossom Cosmetics Lab', plan: 'Tiêu chuẩn (Standard)', stores: 1, status: 'Đang hoạt động', owner: 'Trần Mỹ Linh', storage: '450 MB / 5 GB' },
    { id: 'tenant_03', name: 'Urban Chic Apparel', plan: 'Dùng thử (Trial)', stores: 2, status: 'Sắp hết hạn', owner: 'Lê Hoàng Nam', storage: '120 MB / 1 GB' }
  ],

  // Users & Roles (IAM / RBAC SA-01)
  users: [
    { id: 'usr_01', name: 'Phạm Thị Kim Hương', email: 'huong.pham@maisondebloom.vn', role: 'BO', roleName: 'Chủ Doanh Nghiệp (Business Owner)', tenant: 'Maison de Bloom', status: 'Hoạt động', lastLogin: '10 phút trước' },
    { id: 'usr_02', name: 'Mầu Quốc Tuấn', email: 'tuan.mau@maisondebloom.vn', role: 'SA', roleName: 'Quản trị Hệ thống (System Admin)', tenant: 'System Core', status: 'Hoạt động', lastLogin: '2 giờ trước' },
    { id: 'usr_03', name: 'Quách Nguyễn Chí Hùng', email: 'hung.quach@maisondebloom.vn', role: 'SE', roleName: 'Thu ngân / Nhân viên Cửa hàng', tenant: 'Store Chi nhánh Q1', status: 'Hoạt động', lastLogin: '5 phút trước' },
    { id: 'usr_04', name: 'Nguyễn Gia Hữu Phước', email: 'phuoc.nguyen@maisondebloom.vn', role: 'BO', roleName: 'Quản lý Tài chính', tenant: 'Maison de Bloom', status: 'Hoạt động', lastLogin: '1 ngày trước' },
    { id: 'usr_05', name: 'Đỗ Đạt', email: 'dat.do@maisondebloom.vn', role: 'SE', roleName: 'Nhân viên Kho', tenant: 'Store Chi nhánh Q3', status: 'Tạm khóa', lastLogin: '3 ngày trước' }
  ],

  // Suppliers & Purchasing Debt (qu_n_l_nh_cung_c_p_c_ng_n_n_h_ng)
  suppliers: [
    { id: 'sup_01', name: 'Dược Mỹ Phẩm Blossom Korea Co., Ltd', code: 'SUP-KR-001', phone: '0908 123 456', debt: 24500000, status: 'Trong hạn nợ' },
    { id: 'sup_02', name: 'Công Ty Dệt May Silk Viet Nam', code: 'SUP-VN-102', phone: '0912 345 678', debt: 12000000, status: 'Trong hạn nợ' },
    { id: 'sup_03', name: 'Nhà Phân Phối Chai Lọ Bao Bì Mỹ Phẩm Hưng Phát', code: 'SUP-VN-305', phone: '0988 999 888', debt: 0, status: 'Đã thanh toán' }
  ],

  // PO Draft Previews (modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview)
  poDrafts: [
    { id: 'PO-2026-004', supplier: 'Dược Mỹ Phẩm Blossom Korea Co., Ltd', date: '2026-09-20', total: 27000000, status: 'Draft Preview', itemsCount: 2 },
    { id: 'PO-2026-005', supplier: 'Công Ty Dệt May Silk Viet Nam', date: '2026-09-22', total: 15000000, status: 'Draft Preview', itemsCount: 1 }
  ],

  // Products (BO-03, BO-04 Clothing Size/Color & Cosmetics FEFO)
  products: [
    {
      id: 'prod_01',
      name: 'Serum Dưỡng Trắng Vitamin C Double Glow 30ml',
      category: 'Mỹ phẩm Dưỡng da',
      sku: 'SKU-COS-001',
      price: 450000,
      cost: 210000,
      stock: 142,
      minStock: 30,
      domain: 'cosmetics',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=200&q=80',
      batches: [
        { batchNo: 'LOT-202608-A', mfgDate: '2026-01-10', expDate: '2026-11-15', qty: 45, status: 'CẬN HẠN DÙNG' },
        { batchNo: 'LOT-202609-B', mfgDate: '2026-03-01', expDate: '2027-03-01', qty: 97, status: 'AN TOÀN' }
      ]
    },
    {
      id: 'prod_02',
      name: 'Áo Sơ Mi Lụa Premium Silk Oversized',
      category: 'Thời trang Nữ',
      sku: 'SKU-CLO-102',
      price: 680000,
      cost: 320000,
      stock: 88,
      minStock: 20,
      domain: 'clothing',
      image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=200&q=80',
      variants: [
        { size: 'S', color: 'Trắng Lụa', qty: 20 },
        { size: 'M', color: 'Trắng Lụa', qty: 35 },
        { size: 'L', color: 'Hồng Rose', qty: 18 },
        { size: 'XL', color: 'Đen Onyx', qty: 15 }
      ]
    },
    {
      id: 'prod_03',
      name: 'Kem Chống Nắng Broad Spectrum SPF50+ 50g',
      category: 'Mỹ phẩm Dưỡng da',
      sku: 'SKU-COS-008',
      price: 320000,
      cost: 140000,
      stock: 18,
      minStock: 40,
      domain: 'cosmetics',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=200&q=80',
      batches: [
        { batchNo: 'LOT-202511-C', mfgDate: '2025-11-01', expDate: '2026-10-05', qty: 18, status: 'SẮP HẾT HÀNG' }
      ]
    },
    {
      id: 'prod_04',
      name: 'Đầm Dạng Xòe Vintage Floral Summer Dress',
      category: 'Thời trang Nữ',
      sku: 'SKU-CLO-205',
      price: 890000,
      cost: 410000,
      stock: 45,
      minStock: 15,
      domain: 'clothing',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=200&q=80',
      variants: [
        { size: 'S', color: 'Hoa Vàng', qty: 15 },
        { size: 'M', color: 'Hoa Vàng', qty: 20 },
        { size: 'L', color: 'Hoa Xanh', qty: 10 }
      ]
    }
  ],

  // Omnichannel Orders (BO-06)
  orders: [
    { id: 'ORD-2026-0891', customer: 'Nguyễn Thảo My', channel: 'Sàn Shopee', channelBadge: 'orange', total: 1130000, items: 3, date: '2026-09-23 15:30', status: 'Đã hoàn tất', payment: 'VietQR B2B' },
    { id: 'ORD-2026-0892', customer: 'Trần Minh Quân', channel: 'TikTok Shop', channelBadge: 'pink', total: 680000, items: 1, date: '2026-09-23 14:15', status: 'Đang giao hàng', payment: 'Thanh toán COD' },
    { id: 'ORD-2026-0893', customer: 'Khách lẻ Tại Quầy', channel: 'POS Cửa hàng', channelBadge: 'blue', total: 450000, items: 1, date: '2026-09-23 16:05', status: 'Đã hoàn tất', payment: 'Tiền mặt' },
    { id: 'ORD-2026-0894', customer: 'Đại lý Phân phối Spa Blossom', channel: 'Bán sỉ B2B', channelBadge: 'purple', total: 18500000, items: 40, date: '2026-09-22 10:00', status: 'Chờ thanh toán', payment: 'Quét VietQR B2B' }
  ],

  // Shopee & TikTok Marketplace Settlement (i_so_t_chi_ti_t_v_s_n_shopee_tiktok_shop)
  marketplaceReconciliation: [
    { platform: 'Shopee VN', orderCode: 'SP-2026-9901', grossSales: 1500000, platformFee: 75000, shippingFee: 30000, netReceived: 1395000, status: 'Đã đối soát' },
    { platform: 'TikTok Shop', orderCode: 'TT-2026-4412', grossSales: 680000, platformFee: 30600, shippingFee: 15000, netReceived: 634400, status: 'Đã đối soát' },
    { platform: 'Shopee VN', orderCode: 'SP-2026-9905', grossSales: 890000, platformFee: 44500, shippingFee: 25000, netReceived: 820500, status: 'Chờ tiền về' }
  ],

  // Accrual P&L vs Cashflow Ledger (b_o_c_o_l_i_l_p_l_chi_ti_t_accrual_vs_cashflow & s_thu_chi_d_ng_ti_n_th_c_t_cashflow_p_l)
  financialLedger: [
    { date: '2026-09-23', type: 'THU', category: 'Doanh thu POS Cửa hàng', accrualAmount: 450000, cashAmount: 450000, note: 'Thu tiền mặt ca sáng' },
    { date: '2026-09-22', type: 'THU', category: 'Doanh thu Sỉ B2B Spa Blossom', accrualAmount: 18500000, cashAmount: 0, note: 'Đơn ghi nhận Accrual, chờ QR VietQR' },
    { date: '2026-09-15', type: 'CHI', category: 'Thanh toán Tiền Điện Cửa hàng', accrualAmount: 4200000, cashAmount: 4200000, note: 'Trừ tiền tài khoản ngân hàng' }
  ],

  // OPEX Expenses (BO-02)
  expenses: [
    { id: 'EXP-001', category: 'Mặt bằng Cửa hàng Q1', amount: 35000000, date: '2026-09-01', payer: 'Phạm Thị Kim Hương', status: 'Đã duyệt' },
    { id: 'EXP-002', category: 'Chi phí Quảng cáo TikTok Ads', amount: 12500000, date: '2026-09-12', payer: 'Quách Nguyễn Chí Hùng', status: 'Đã duyệt' },
    { id: 'EXP-003', category: 'Điện nước & Internet Cửa hàng', amount: 4200000, date: '2026-09-15', payer: 'Nguyễn Gia Hữu Phước', status: 'Đã duyệt' }
  ],

  // Executive KPI Summary (BO-05)
  kpis: {
    revenue: 485200000,
    revenueChange: '+14.2%',
    grossProfit: 218340000,
    profitMargin: '45.0%',
    pendingOrders: 18,
    criticalAlerts: 3
  },

  // AI Anomaly Alerts (BO-08)
  anomalies: [
    { id: 'ano_1', level: 'HIGH', title: 'Chi phí QC TikTok Ads tăng 32% nhưng lượng đơn hàng giảm 8%', evidence: 'Dữ liệu tuần 3 tháng 9: Ngân sách Ads = 12.5 triệu VNĐ, Đơn TikTok = 45 đơn (Tuần trước 58 đơn).', suggestion: 'Kiểm tra lại tệp đối tượng QC hoặc tạm dừng chiến dịch kém hiệu quả.' },
    { id: 'ano_2', level: 'WARNING', title: 'Lô mỹ phẩm LOT-202608-A còn 45 hộp hết hạn sau 53 ngày', evidence: 'Tồn kho kho Q1: 45 hộp, tốc độ bán trung bình: 0.4 hộp/ngày.', suggestion: 'Tạo chương trình Combo khuyến mãi giảm giá 25% để giải phóng kho.' }
  ],

  // Security Audit Trail Logs (SA-04)
  auditLogs: [
    { id: 'log_01', timestamp: '2026-09-23 16:20:12', actor: 'Phạm Thị Kim Hương (BO)', action: 'UPDATE_PRODUCT_PRICE', target: 'SKU-COS-001', ip: '113.161.45.12', risk: 'THẤP' },
    { id: 'log_02', timestamp: '2026-09-23 15:45:00', actor: 'Quách Nguyễn Chí Hùng (SE)', action: 'POS_SHIFT_CLOSE', target: 'SHIFT-2026-09-23-A', ip: '113.161.45.88', risk: 'THẤP' },
    { id: 'log_03', timestamp: '2026-09-22 18:10:05', actor: 'Mầu Quốc Tuấn (SA)', action: 'UPDATE_SECURITY_CONFIG', target: '2FA_ENFORCE_POLICY', ip: '14.226.12.90', risk: 'TRUNG BÌNH' }
  ],

  // Dynamic Security Config (SA-03)
  securityConfig: {
    enforce2FA: true,
    sessionTimeoutMins: 30,
    logAIPrompts: true,
    ipWhitelist: '113.161.45.*, 14.226.12.*',
    featureFlags: {
      whatIfLab: true,
      fefoStrict: true,
      vietQRB2B: true
    }
  },

  // AI What-If Baseline Simulation (BO-10)
  simulation: {
    baselineRevenue: 485200000,
    baselineProfit: 218340000,
    priceChangePct: 5,
    costChangePct: 0,
    marketingBudgetAdd: 5000000
  }
};
