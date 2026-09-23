/* ==========================================================================
   ZONE 1: SA MODULE - SYSTEM ADMINISTRATOR & GOVERNANCE (PARITY COMPLETE)
   ========================================================================== */

const Zone1Admin = {
  render: function() {
    const activeSubTab = MockData.subTabs.sa_admin || 'tenants';

    return `
      <div class="space-y-6">
        <!-- Sub-navigation Tabs for 100% 54-Screen Coverage -->
        <div class="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-semibold text-slate-600">
          <button onclick="Zone1Admin.switchSubTab('tenants')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'tenants' ? 'bg-red-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            🏢 1. Multi-Tenant Governance (SA-02)
          </button>
          <button onclick="Zone1Admin.switchSubTab('rbac_users')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'rbac_users' ? 'bg-red-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            👥 2. Tài khoản & Phân quyền IAM RBAC (SA-01)
          </button>
          <button onclick="Zone1Admin.switchSubTab('security_config')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'security_config' ? 'bg-red-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            ⚙️ 3. Cấu hình Nền tảng & Security Policy (SA-03)
          </button>
          <button onclick="Zone1Admin.switchSubTab('audit_logs')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'audit_logs' ? 'bg-red-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            🛡️ 4. Nhật ký Audit Trail & Truy vết (SA-04)
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
              <i class="lucide-building-2 w-5 h-5"></i>
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
        ${activeSubTab === 'tenants' ? this.renderTenants() : ''}
        ${activeSubTab === 'rbac_users' ? this.renderRBACUsers() : ''}
        ${activeSubTab === 'security_config' ? this.renderSecurityConfig() : ''}
        ${activeSubTab === 'audit_logs' ? this.renderAuditLogs() : ''}
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
