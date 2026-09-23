/* ==========================================================================
   ZONE 1: SA MODULE - SYSTEM ADMINISTRATOR & GOVERNANCE (PARITY COMPLETE)
   ========================================================================== */

const Zone1Admin = {
  render: function() {
    const activeSubTab = MockData.subTabs.sa_admin || 'tenants';

    return `
      <div class="space-y-6">
        <!-- Sub-navigation Tabs for 100% 54-Screen Coverage (Odoo Enterprise Menu Link Style) -->
        <div class="flex items-center gap-5 border-b border-slate-200 pb-0 overflow-x-auto text-xs text-slate-600 mb-4">
          <button onclick="Zone1Admin.switchSubTab('business_profile')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'business_profile' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-building-2 w-3.5 h-3.5"></i> 1. Hồ sơ Doanh nghiệp & Vận hành (BO-01)
          </button>
          <button onclick="Zone1Admin.switchSubTab('tenants')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'tenants' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-globe w-3.5 h-3.5"></i> 2. Multi-Tenant Governance (SA-02)
          </button>
          <button onclick="Zone1Admin.switchSubTab('rbac_users')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'rbac_users' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-users w-3.5 h-3.5"></i> 3. Tài khoản & Phân quyền IAM RBAC (SA-01)
          </button>
          <button onclick="Zone1Admin.switchSubTab('security_config')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'security_config' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-settings w-3.5 h-3.5"></i> 4. Cấu hình Nền tảng & Security Policy (SA-03)
          </button>
          <button onclick="Zone1Admin.switchSubTab('audit_logs')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'audit_logs' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-shield-check w-3.5 h-3.5"></i> 5. Nhật ký Audit Trail & Truy vết (SA-04)
          </button>
        </div>

        <!-- Technical Infrastructure Health Status Header -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="o-card p-4 flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <i class="lucide-server w-5 h-5"></i>
            </div>
            <div>
              <div class="text-[11px] font-semibold text-slate-500">Trạng Thái Hệ Thống</div>
              <div class="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span> 100% Hoạt Động Tốt
              </div>
            </div>
          </div>

          <div class="o-card p-4 flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <div class="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold"><i class="lucide-building-2 w-5 h-5"></i></div>
            </div>
            <div>
              <div class="text-[11px] font-semibold text-slate-500">Doanh Nghiệp Multi-Tenant</div>
              <div class="text-sm font-bold text-slate-800">3 Doanh nghiệp</div>
            </div>
          </div>

          <div class="o-card p-4 flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <i class="lucide-users w-5 h-5"></i>
            </div>
            <div>
              <div class="text-[11px] font-semibold text-slate-500">Tổng Tài Khoản RBAC</div>
              <div class="text-sm font-bold text-slate-800">5 Tài khoản</div>
            </div>
          </div>

          <div class="o-card p-4 flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <i class="lucide-shield-alert w-5 h-5"></i>
            </div>
            <div>
              <div class="text-[11px] font-semibold text-slate-500">Nhật Ký Audit Logs</div>
              <div class="text-sm font-bold text-slate-800">128 Nhật ký</div>
            </div>
          </div>
        </div>

        <!-- Dynamic Render based on Active Sub-tab -->
        ${activeSubTab === 'business_profile' || !activeSubTab ? this.renderBusinessProfile() : ''}
        ${activeSubTab === 'tenants' ? this.renderTenants() : ''}
        ${activeSubTab === 'rbac_users' ? this.renderRBACUsers() : ''}
        ${activeSubTab === 'security_config' ? this.renderSecurityConfig() : ''}
        ${activeSubTab === 'audit_logs' ? this.renderAuditLogs() : ''}
      </div>
    `;
  },

  // Sub-tab 0: BO-01 Business Profile & Operational Config
  renderBusinessProfile: function() {
    return `
      <div class="space-y-6">
        <!-- Top Banner BO-01 Enterprise Tenant Hub -->
        <div class="o-card p-5 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wide">BO-01: Enterprise Tenant Hub</span>
              <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <i class="lucide-shield-check w-3.5 h-3.5 text-emerald-400"></i> Đang hoạt động ổn định (Single Tenant Isolation)
              </span>
            </div>
            <h1 class="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Quản lý Doanh nghiệp & Cấu hình Vận hành
            </h1>
            <p class="text-xs text-slate-300">Thiết lập hồ sơ pháp lý, mã số thuế, tiền tệ hạch toán, quy tắc xuất kho FEFO và hạn mức chi tiêu doanh nghiệp.</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button onclick="Zone0Shell.openFinancialConfirm('Lưu Cấu Hình Doanh Nghiệp', '<p class=\"text-xs text-slate-600\">Xác nhận áp dụng toàn bộ cài đặt pháp lý, quy tắc FEFO và hạn mức chi tiêu B2B trên toàn hệ thống 3 chi nhánh.</p>', 'Xác Nhận Lưu Cấu Hình', () => alert('Đã lưu cấu hình doanh nghiệp BO-01 thành công!'))" class="px-4 py-2 bg-[#714B67] hover:bg-purple-900 text-white font-bold text-xs rounded-lg transition shadow flex items-center gap-1.5">
              <i class="lucide-save w-4 h-4 text-amber-300"></i> Lưu Thay Đổi Toàn Bộ
            </button>
          </div>
        </div>

        <!-- Operational Pulse KPIs (4 Key Metrics) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- KPI 1 -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tổng Doanh thu Lũy kế</span>
              <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <i class="lucide-dollar-sign w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">1.845.200.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-emerald-600 font-bold">
                <i class="lucide-trending-up w-3.5 h-3.5"></i> +18.4% <span class="text-slate-500 font-normal">so với chu kỳ trước</span>
              </div>
            </div>
          </div>

          <!-- KPI 2 -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Đơn hàng Đã Xử lý</span>
              <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
                <i class="lucide-shopping-bag w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">4.280 đơn</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-emerald-600 font-bold">
                <i class="lucide-check-circle-2 w-3.5 h-3.5"></i> 98.2% <span class="text-slate-500 font-normal">tỷ lệ hoàn thành chuẩn hạn</span>
              </div>
            </div>
          </div>

          <!-- KPI 3 -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Chi phí OPEX Ghi nhận</span>
              <div class="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                <i class="lucide-calculator w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">412.500.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-slate-600 font-medium">
                <span class="px-1.5 py-0.5 rounded bg-slate-100 font-bold text-slate-800">22.3% OPEX</span> trên tổng doanh thu
              </div>
            </div>
          </div>

          <!-- KPI 4 -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Giá trị Tồn kho Thực tế</span>
              <div class="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <i class="lucide-warehouse w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">890.400.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-slate-600 font-medium">
                <strong class="text-purple-900">142 SKU</strong> • 32 lô date đang lưu hành
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <!-- Left: Legal Profile & Operations (7 cols) -->
          <div class="lg:col-span-7 space-y-5">
            <!-- Card 1: Legal Profile -->
            <div class="o-card p-5 space-y-4">
              <div class="flex items-center justify-between border-b pb-3">
                <h3 class="text-xs font-bold uppercase tracking-wide text-slate-800 flex items-center gap-2">
                  <i class="lucide-building-2 w-4 h-4 text-purple-700"></i> Hồ sơ Pháp lý Doanh nghiệp
                </h3>
                <span class="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <i class="lucide-shield-check w-3 h-3"></i> Verified Legal Tenant #TENANT-001
                </span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Tên Doanh Nghiệp (Pháp lý)</label>
                  <input type="text" value="CÔNG TY TNHH THỜI TRANG & MỸ PHẨM MAISON DE BLOOM" class="w-full p-2 border border-slate-300 rounded font-semibold text-slate-800 bg-slate-50" />
                </div>
                <div>
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Mã Số Thuế (Tax ID)</label>
                  <input type="text" value="0317892341" class="w-full p-2 border border-slate-300 rounded font-mono font-bold text-slate-900 bg-slate-50" />
                </div>
                <div>
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Người Đại Diện Pháp Luật</label>
                  <input type="text" value="Nguyễn Thị Mai (Chủ tịch HĐQT kiêm CEO)" class="w-full p-2 border border-slate-300 rounded font-semibold text-slate-800 bg-slate-50" />
                </div>
                <div>
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Ngành Hàng Kinh Doanh</label>
                  <input type="text" value="Bán lẻ Mỹ phẩm, Skincare & Thời trang Cao cấp" class="w-full p-2 border border-slate-300 rounded font-semibold text-slate-800 bg-slate-50" />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Địa Chỉ Trụ Sở Chính</label>
                  <input type="text" value="Tầng 12, Tòa nhà Landmark 81, 720A Điện Biên Phủ, Phường 22, Bình Thạnh, TP. Hồ Chí Minh" class="w-full p-2 border border-slate-300 rounded font-semibold text-slate-800 bg-slate-50" />
                </div>
              </div>
            </div>

            <!-- Card 2: Accounting & Operational Settings -->
            <div class="o-card p-5 space-y-4">
              <div class="flex items-center justify-between border-b pb-3">
                <h3 class="text-xs font-bold uppercase tracking-wide text-slate-800 flex items-center gap-2">
                  <i class="lucide-calculator w-4 h-4 text-teal-700"></i> Tham số Kế toán & Vận hành Kho FEFO
                </h3>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Đơn vị Tiền tệ Hạch toán</label>
                  <select class="w-full p-2 border border-slate-300 rounded font-semibold text-slate-800 bg-white">
                    <option selected>VNĐ (Việt Nam Đồng)</option>
                    <option>USD (Đô la Mỹ)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Phương Pháp Tính Giá Vốn Tồn Kho</label>
                  <select class="w-full p-2 border border-slate-300 rounded font-semibold text-slate-800 bg-white">
                    <option selected>FEFO (First Expired, First Out - Ưu tiên lô hết hạn trước)</option>
                    <option>FIFO (First In, First Out)</option>
                    <option>Bình quân tức thời (Moving Average)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Cảnh báo Lô Hạn Sử Dụng (Mỹ phẩm)</label>
                  <input type="text" value="Báo động đỏ khi HSD dưới 60 ngày" class="w-full p-2 border border-slate-300 rounded font-semibold text-amber-800 bg-amber-50" />
                </div>
                <div>
                  <label class="block text-slate-500 text-[11px] font-semibold mb-1">Đồng bộ Tồn kho Đa kênh</label>
                  <input type="text" value="Tự động Realtime (Shopee, TikTok, POS)" class="w-full p-2 border border-slate-300 rounded font-semibold text-emerald-800 bg-emerald-50" />
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Branch & Executive Pulse (5 cols) -->
          <div class="lg:col-span-5 space-y-5">
            <!-- Card 3: Active Store Branches -->
            <div class="o-card p-5 space-y-3">
              <div class="flex items-center justify-between border-b pb-3">
                <h3 class="text-xs font-bold uppercase tracking-wide text-slate-800 flex items-center gap-2">
                  <i class="lucide-store w-4 h-4 text-purple-700"></i> Danh sách Chi nhánh Cửa hàng (3 Stores)
                </h3>
                <button onclick="Zone0Shell.openFinancialConfirm('Thêm Chi Nhánh Cửa Hàng Mới', '<p class=\"text-xs text-slate-600\">Khởi tạo chi nhánh bán lẻ mới và cấp quyền két quầy POS cho cửa hàng.</p>', 'Khởi Tạo Chi Nhánh', () => alert('Đã mở modal tạo chi nhánh!'))" class="text-[11px] text-purple-700 font-bold hover:underline flex items-center gap-1">
                  <i class="lucide-plus-circle w-3.5 h-3.5"></i> Thêm cửa hàng
                </button>
              </div>
              <div class="space-y-2 text-xs">
                <div class="p-3 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-between">
                  <div>
                    <div class="font-bold text-slate-800">Chi nhánh 1: Maison Quận 1 (Flagship)</div>
                    <div class="text-[11px] text-slate-500">128 Nguyễn Huệ, Phường Bến Nghé, Quận 1</div>
                  </div>
                  <span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Hoạt động</span>
                </div>
                <div class="p-3 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-between">
                  <div>
                    <div class="font-bold text-slate-800">Chi nhánh 2: Maison Thủ Đức</div>
                    <div class="text-[11px] text-slate-500">215 Võ Văn Ngân, Bình Thọ, Thủ Đức</div>
                  </div>
                  <span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Hoạt động</span>
                </div>
                <div class="p-3 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-between">
                  <div>
                    <div class="font-bold text-slate-800">Chi nhánh 3: Maison Bình Thạnh</div>
                    <div class="text-[11px] text-slate-500">48 Phan Đăng Lưu, Phường 6, Bình Thạnh</div>
                  </div>
                  <span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Hoạt động</span>
                </div>
              </div>
            </div>

            <!-- Card 4: Operating Budget & Risk Limits -->
            <div class="o-card p-5 space-y-3">
              <div class="flex items-center justify-between border-b pb-3">
                <h3 class="text-xs font-bold uppercase tracking-wide text-slate-800 flex items-center gap-2">
                  <i class="lucide-shield-check w-4 h-4 text-emerald-700"></i> Hạn mức Rủi ro & Duyệt Chi B2B
                </h3>
              </div>
              <div class="space-y-2 text-xs">
                <div class="flex justify-between items-center p-2.5 bg-slate-50 rounded border">
                  <span class="text-slate-600 font-medium">Duyệt tự động Lệnh Chi VietQR B2B:</span>
                  <span class="font-mono font-bold text-slate-900">&lt; 50,000,000 VNĐ</span>
                </div>
                <div class="flex justify-between items-center p-2.5 bg-slate-50 rounded border">
                  <span class="text-slate-600 font-medium">Hạn mức Ngân sách OPEX Hàng tháng:</span>
                  <span class="font-mono font-bold text-slate-900">450,000,000 VNĐ</span>
                </div>
                <div class="flex justify-between items-center p-2.5 bg-slate-50 rounded border">
                  <span class="text-slate-600 font-medium">Cảnh báo Anomaly Dòng tiền Thực tế:</span>
                  <span class="font-mono font-bold text-amber-700">Lệch &gt; 5% Cashflow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Sub-tab 1: Multi-Tenant Governance (sa_02_qu_n_l_doanh_nghi_p_multi_tenant...)
  renderTenants: function() {
    return `
      <div class="o-card p-5">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-building w-4 h-4 text-purple-600"></i> Quản lý Doanh nghiệp Multi-Tenant Governance (SA-02)
          </h2>
          <button onclick="alert('Đăng ký Tenant mới!')" class="px-3 py-1 text-xs font-semibold bg-purple-700 text-white rounded hover:bg-purple-800 transition">
            + Đăng ký Tenant mới
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${MockData.tenants.map(t => `
            <div class="border border-slate-200 rounded-lg p-4 bg-slate-50/50 hover:bg-white hover:shadow-md transition">
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-xs text-slate-800">${t.name}</span>
                <span class="px-2 py-0.5 text-[10px] font-bold rounded ${t.plan.includes('Enterprise') ? 'bg-purple-100 text-purple-800 border border-purple-200' : 'bg-slate-200 text-slate-700'}">${t.plan}</span>
              </div>
              <div class="text-xs text-slate-500 space-y-1 mb-3">
                <div>Chủ Doanh nghiệp: <span class="font-semibold text-slate-800">${t.owner}</span></div>
                <div>Số cửa hàng: <span class="font-semibold text-slate-800">${t.stores} chi nhánh</span></div>
                <div>Dung lượng Kho: <span class="font-mono text-slate-700">${t.storage}</span></div>
                <div>Trạng thái: <span class="font-semibold text-emerald-600">${t.status}</span></div>
              </div>
              <div class="flex items-center justify-between text-[11px] border-t border-slate-200 pt-2 text-slate-400">
                <span>Mã ID: ${t.id}</span>
                <button class="text-purple-700 font-semibold hover:underline">Quản trị Tenant →</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // Sub-tab 2: IAM RBAC Users (sa_01_qu_n_l_t_i_kho_n_ph_n_quy_n_iam_rbac_console)
  renderRBACUsers: function() {
    return `
      <div class="o-card p-5">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-user-check w-4 h-4 text-blue-600"></i> Danh sách Tài khoản & Phân quyền (IAM RBAC SA-01)
          </h2>
          <button onclick="alert('Thêm tài khoản mới!')" class="px-3 py-1 text-xs font-semibold bg-blue-700 text-white rounded">
            + Thêm Tài Khoản Mới
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                <th class="p-2.5">Họ và Tên</th>
                <th class="p-2.5">Email</th>
                <th class="p-2.5">Vai trò (Role)</th>
                <th class="p-2.5">Doanh nghiệp</th>
                <th class="p-2.5">Trạng thái</th>
                <th class="p-2.5">Đăng nhập cuối</th>
                <th class="p-2.5 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              ${MockData.users.map(u => `
                <tr class="hover:bg-slate-50">
                  <td class="p-2.5 font-bold text-slate-800 flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-slate-700 text-white text-[10px] font-bold flex items-center justify-center">
                      ${u.name.charAt(0)}
                    </div>
                    ${u.name}
                  </td>
                  <td class="p-2.5 font-mono text-slate-600">${u.email}</td>
                  <td class="p-2.5">
                    <span class="px-2 py-0.5 text-[10px] font-bold rounded ${u.role === 'SA' ? 'bg-red-100 text-red-800 border border-red-200' : u.role === 'BO' ? 'bg-teal-100 text-teal-800 border border-teal-200' : 'bg-blue-100 text-blue-800 border border-blue-200'}">
                      ${u.roleName}
                    </span>
                  </td>
                  <td class="p-2.5 text-slate-600">${u.tenant}</td>
                  <td class="p-2.5 font-semibold ${u.status === 'Hoạt động' ? 'text-emerald-600' : 'text-red-500'}">${u.status}</td>
                  <td class="p-2.5 text-slate-500">${u.lastLogin}</td>
                  <td class="p-2.5 text-right font-semibold text-purple-700">
                    <button class="hover:underline">Phân quyền</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // Sub-tab 3: Dynamic Security Config (sa_03_qu_n_l_c_u_h_nh_h_th_ng_ng_ng_an_ninh...)
  renderSecurityConfig: function() {
    return `
      <div class="o-form-sheet p-6 max-w-3xl mx-auto space-y-5 text-xs">
        <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2 border-b pb-3">
          <i class="lucide-shield-check w-4 h-4 text-red-600"></i> Cấu hình An ninh Động & Security Policy (SA-03)
        </h2>

        <div class="space-y-4">
          <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
            <div>
              <div class="font-bold text-slate-800">Bắt buộc Xác thực 2 Yếu tố (2FA Policy)</div>
              <div class="text-[10px] text-slate-500">Yêu cầu tất cả tài khoản Chủ doanh nghiệp nhập OTP khi đăng nhập.</div>
            </div>
            <input type="checkbox" checked class="w-4 h-4 accent-purple-700" />
          </div>

          <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
            <div>
              <div class="font-bold text-slate-800">Ghi log Chi tiết Prompt AI (Log AI Tool Executions)</div>
              <div class="text-[10px] text-slate-500">Lưu lại toàn bộ lịch sử gọi Tool AI để kiểm toán bảo mật.</div>
            </div>
            <input type="checkbox" checked class="w-4 h-4 accent-purple-700" />
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Danh sách IP Cho phép (IP Whitelist):</label>
            <input type="text" value="${MockData.securityConfig.ipWhitelist}" class="w-full p-2 border border-slate-300 rounded font-mono" />
          </div>
        </div>

        <div class="pt-3 border-t flex justify-end">
          <button onclick="alert('Đã lưu cấu hình Security Policy!')" class="px-4 py-2 bg-red-800 text-white font-bold rounded">Lưu Cấu Hình An Ninh</button>
        </div>
      </div>
    `;
  },

  // Sub-tab 4: Security Audit Trail Logs (sa_04_nh_t_k_audit_trail...)
  renderAuditLogs: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-file-badge w-4 h-4 text-amber-600"></i> Nhật ký Audit Trail & Kiểm toán Bảo mật (SA-04)
          </h2>
          <span class="badge-fact">LOG TRUY VẾT HỆ THỐNG</span>
        </div>

        <table class="w-full text-left text-xs border-collapse border border-slate-200">
          <thead>
            <tr class="bg-slate-100 text-slate-700 font-semibold border-b">
              <th class="p-2.5 border">Mã Log</th>
              <th class="p-2.5 border">Thời Gian</th>
              <th class="p-2.5 border">Tác Nhân (Actor)</th>
              <th class="p-2.5 border">Hành Động (Action)</th>
              <th class="p-2.5 border">Đối Tượng Tác Động</th>
              <th class="p-2.5 border">Địa Chỉ IP</th>
              <th class="p-2.5 border">Rủi Ro</th>
            </tr>
          </thead>
          <tbody>
            ${MockData.auditLogs.map(l => `
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 border font-mono font-bold text-slate-700">${l.id}</td>
                <td class="p-2.5 border font-mono text-slate-500">${l.timestamp}</td>
                <td class="p-2.5 border font-bold text-slate-900">${l.actor}</td>
                <td class="p-2.5 border font-mono text-purple-800">${l.action}</td>
                <td class="p-2.5 border text-slate-700">${l.target}</td>
                <td class="p-2.5 border font-mono text-slate-500">${l.ip}</td>
                <td class="p-2.5 border"><span class="px-2 py-0.5 text-[10px] font-bold rounded ${l.risk === 'THẤP' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${l.risk}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  switchSubTab: function(tabKey) {
    MockData.subTabs.sa_admin = tabKey;
    App.render();
  }
};
