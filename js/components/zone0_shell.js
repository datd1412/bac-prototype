/* ==========================================================================
   ZONE 0: CORE APP SHELL & FOUNDATION COMPONENTS (Tiếng Việt)
   ========================================================================== */

const Zone0Shell = {
  // Render Topbar
  renderTopBar: function() {
    return `
      <header class="h-12 bg-[#714B67] text-white flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-40 shadow-md">
        <!-- Left: App Switcher Grid & Logo -->
        <div class="flex items-center gap-3">
          <button onclick="App.navigateTo('apps')" class="p-1.5 hover:bg-white/10 rounded transition text-white/90 hover:text-white" title="Trang chủ Phân hệ Odoo Enterprise">
            <i class="lucide-layout-grid w-5 h-5"></i>
          </button>
          <div class="flex items-center gap-2 cursor-pointer" onclick="App.navigateTo('apps')">
            <span class="font-bold text-base tracking-wide text-white">Stitch AI</span>
            <span class="text-xs bg-white/20 px-2 py-0.5 rounded font-mono text-white/90">Trợ Lý Copilot ERP</span>
          </div>
        </div>

        <!-- Center: Tenant / Store Selector -->
        <div class="hidden md:flex items-center gap-2 bg-black/20 hover:bg-black/30 text-white/90 text-xs px-3 py-1.5 rounded-md cursor-pointer transition" onclick="Zone0Shell.showTenantModal()">
          <i class="lucide-store w-3.5 h-3.5 text-teal-300"></i>
          <span class="font-medium">${MockData.tenants.find(t => t.id === MockData.activeTenant)?.name || 'Maison de Bloom'}</span>
          <i class="lucide-chevron-down w-3 h-3 text-white/60"></i>
        </div>

        <!-- Right: Global Actions & User Profile -->
        <div class="flex items-center gap-3">
          <!-- Quick Role Switcher (Dành cho bản Prototype Demo) -->
          <div class="flex items-center gap-1 bg-white/10 p-1 rounded-md text-xs">
            <span class="text-white/70 text-[10px] uppercase font-bold px-1">Vai trò:</span>
            <button onclick="App.switchRole('SA')" class="px-2 py-0.5 rounded text-[11px] font-semibold ${MockData.activeRole === 'SA' ? 'bg-white text-[#714B67] shadow' : 'text-white/80 hover:text-white'}" title="Quản trị Hệ thống">SA Admin</button>
            <button onclick="App.switchRole('BO')" class="px-2 py-0.5 rounded text-[11px] font-semibold ${MockData.activeRole === 'BO' ? 'bg-white text-[#714B67] shadow' : 'text-white/80 hover:text-white'}" title="Chủ Doanh nghiệp">Chủ DN</button>
            <button onclick="App.switchRole('SE')" class="px-2 py-0.5 rounded text-[11px] font-semibold ${MockData.activeRole === 'SE' ? 'bg-white text-[#714B67] shadow' : 'text-white/80 hover:text-white'}" title="Thu ngân / Cửa hàng">Thu Ngân</button>
          </div>

          <!-- Notification Bell -->
          <button onclick="Zone0Shell.toggleNotifications()" class="relative p-1.5 hover:bg-white/10 rounded text-white/90 hover:text-white transition" title="Thông báo hệ thống">
            <i class="lucide-bell w-4 h-4"></i>
            <span class="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping"></span>
            <span class="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full"></span>
          </button>

          <!-- User Menu -->
          <div class="flex items-center gap-2 border-l border-white/20 pl-3">
            <div class="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-xs shadow">
              HK
            </div>
            <span class="hidden lg:inline text-xs font-medium text-white/90">Phạm Kim Hương</span>
          </div>
        </div>
      </header>

      <!-- App Switcher Dropdown Menu -->
      <div id="app-menu-modal" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-start pt-14 pl-4" onclick="Zone0Shell.toggleAppMenu()">
        <div class="bg-white rounded-lg shadow-2xl border border-slate-200 p-4 w-80 text-slate-800" onclick="event.stopPropagation()">
          <div class="text-xs font-bold uppercase text-slate-400 mb-3 px-1">Danh mục Phân hệ Hệ thống</div>
          <div class="grid grid-cols-3 gap-2">
            <button onclick="App.navigateTo('dashboard'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-layout-dashboard w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700 text-center">Tổng Quan & Lợi Nhuận</span>
            </button>
            <button onclick="App.navigateTo('inventory'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-boxes w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700 text-center">Kho & Hạn Dùng</span>
            </button>
            <button onclick="App.navigateTo('sales'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-shopping-bag w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700 text-center">Đơn Hàng & Thu Chi</span>
            </button>
            <button onclick="App.navigateTo('pos'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-monitor w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700 text-center">POS Thu Ngân</span>
            </button>
            <button onclick="App.navigateTo('ai_advisor'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-brain-circuit w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700 text-center">Cố Vấn AI</span>
            </button>
            ${MockData.activeRole === 'SA' || MockData.activeRole === 'BO' ? `
            <button onclick="App.navigateTo('sa_admin'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-building-2 w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700 text-center">Cấu Hình DN (BO-01)</span>
            </button>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Tenant Switcher Modal -->
      <div id="tenant-modal" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md text-slate-800 overflow-hidden" onclick="event.stopPropagation()">
          <div class="bg-[#714B67] text-white p-4 flex items-center justify-between">
            <h3 class="font-bold text-sm flex items-center gap-2"><i class="lucide-store w-4 h-4"></i> Chọn Doanh Nghiệp (Multi-Tenant)</h3>
            <button onclick="Zone0Shell.hideTenantModal()" class="text-white/80 hover:text-white"><i class="lucide-x w-5 h-5"></i></button>
          </div>
          <div class="p-4 space-y-2 text-xs">
            ${MockData.tenants.map(t => `
              <div onclick="Zone0Shell.selectTenant('${t.id}')" class="p-3 border rounded-lg cursor-pointer transition flex items-center justify-between ${MockData.activeTenant === t.id ? 'border-purple-600 bg-purple-50' : 'border-slate-200 hover:bg-slate-50'}">
                <div>
                  <div class="font-bold text-slate-800">${t.name}</div>
                  <div class="text-[10px] text-slate-500">Gói: ${t.plan} | ${t.stores} chi nhánh</div>
                </div>
                ${MockData.activeTenant === t.id ? '<span class="text-purple-700 font-bold text-xs">✓ Đang chọn</span>' : ''}
              </div>
            `).join('')}
          </div>
          <div class="p-3 bg-slate-50 border-t flex justify-end">
            <button onclick="Zone0Shell.hideTenantModal()" class="px-4 py-1.5 text-xs font-semibold bg-slate-800 text-white rounded">Đóng</button>
          </div>
        </div>
      </div>
    `;
  },

  // Render Control Panel
  renderControlPanel: function(title, breadcrumbs = [], actions = []) {
    return `
      <div class="bg-white border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 fixed top-12 left-0 right-0 z-30 shadow-sm">
        <!-- Breadcrumb & Title -->
        <div class="flex items-center gap-3">
          <div>
            <nav class="flex text-xs text-slate-500 gap-1.5 mb-0.5">
              <span>Hệ thống</span>
              ${breadcrumbs.map(b => `<span class="text-slate-400">/</span><span class="hover:text-slate-700 cursor-pointer">${b}</span>`).join('')}
            </nav>
            <h1 class="text-base font-bold text-slate-800 flex items-center gap-2">
              ${title}
            </h1>
          </div>
          
          <!-- Primary Actions -->
          <div class="flex items-center gap-2 ml-4">
            ${actions.map(act => `
              <button onclick="${act.onclick}" class="px-3 py-1.5 text-xs font-semibold rounded-md ${act.primary ? 'bg-[#714B67] hover:bg-[#5a3b52] text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'} transition flex items-center gap-1.5">
                ${act.icon ? `<i class="${act.icon} w-3.5 h-3.5"></i>` : ''}
                ${act.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Search, Filter & View Switchers -->
        <div class="flex items-center gap-2">
          <!-- Odoo Multi-filter Search Box -->
          <div class="relative flex items-center">
            <i class="lucide-search w-3.5 h-3.5 absolute left-2.5 text-slate-400"></i>
            <input type="text" placeholder="Tìm kiếm hoặc lọc dữ liệu..." class="w-48 lg:w-64 pl-8 pr-20 py-1 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#714B67] focus:border-[#714B67]" />
            <div class="absolute right-1 flex items-center gap-1 text-[10px] text-slate-400">
              <button class="hover:text-slate-700 px-1 py-0.5 hover:bg-slate-100 rounded">Bộ lọc</button>
              <button class="hover:text-slate-700 px-1 py-0.5 hover:bg-slate-100 rounded">Gom nhóm</button>
            </div>
          </div>

          <!-- View Switchers -->
          <div class="flex items-center bg-slate-100 p-0.5 rounded-md border border-slate-200 text-slate-600">
            <button onclick="App.switchView('list')" class="p-1 rounded ${MockData.activeView === 'list' ? 'bg-white shadow text-[#714B67]' : 'hover:text-slate-900'}" title="Xem dạng Bảng Danh sách (List View)">
              <i class="lucide-list w-4 h-4"></i>
            </button>
            <button onclick="App.switchView('kanban')" class="p-1 rounded ${MockData.activeView === 'kanban' ? 'bg-white shadow text-[#714B67]' : 'hover:text-slate-900'}" title="Xem dạng Thẻ bài (Kanban View)">
              <i class="lucide-kanban w-4 h-4"></i>
            </button>
            <button onclick="App.switchView('pivot')" class="p-1 rounded ${MockData.activeView === 'pivot' ? 'bg-white shadow text-[#714B67]' : 'hover:text-slate-900'}" title="Xem dạng Bảng xoay (Pivot View)">
              <i class="lucide-table w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // Render AI Copilot Slide-out Drawer & Modals
  renderAIDrawer: function() {
    return `
      <!-- AI Copilot Floating Button with Safe Margin Padding -->
      <button onclick="Zone0Shell.toggleAIDrawer()" class="fixed bottom-6 right-6 z-50 bg-[#714B67] hover:bg-[#5b3b53] text-white font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 transition transform hover:scale-105 border border-white/30">
        <i class="lucide-bot w-4 h-4 text-teal-300"></i>
        <span class="text-xs tracking-wide">Trợ Lý AI Copilot</span>
      </button>

      <!-- Slide-out Drawer -->
      <aside id="ai-drawer" class="fixed top-12 right-0 bottom-0 w-96 bg-white border-l border-slate-200 shadow-2xl z-40 transform translate-x-full drawer-transition flex flex-col">
        <!-- Header -->
        <div class="p-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-[#714B67] text-white flex items-center justify-center shadow-sm">
              <i class="lucide-bot w-4 h-4 text-teal-300"></i>
            </div>
            <div>
              <h3 class="text-xs font-bold text-slate-800">Stitch AI Copilot</h3>
              <span class="text-[10px] text-emerald-600 font-semibold flex items-center gap-1"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Sẵn sàng hỗ trợ</span>
            </div>
          </div>
          <button onclick="Zone0Shell.toggleAIDrawer()" class="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-slate-200 transition">
            <i class="lucide-x w-4 h-4"></i>
          </button>
        </div>

        <!-- Chat Body -->
        <div id="ai-chat-body" class="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          <!-- AI Welcome Bubble -->
          <div class="flex items-start gap-2.5">
            <div class="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 font-bold text-[10px]">AI</div>
            <div class="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-700 leading-relaxed border border-slate-200 max-w-[85%]">
              Xin chào! Tôi là Trợ lý AI Copilot. Tôi có thể hỗ trợ bạn phân tích doanh thu, kiểm tra lô mỹ phẩm FEFO cận hạn dùng, hoặc chạy mô phỏng kịch bản kinh doanh What-If.
            </div>
          </div>

          <!-- AI Tool Call Execution Log -->
          <div class="bg-indigo-50/70 border border-indigo-100 p-2.5 rounded-lg text-[11px] text-indigo-900 space-y-1 font-mono">
            <div class="flex items-center justify-between font-semibold text-indigo-700">
              <span>⚙️ Tool AI Thực Thi: GetFEFOAlerts</span>
              <span class="text-[9px] bg-indigo-200/60 text-indigo-800 px-1.5 py-0.2 rounded">THÀNH CÔNG</span>
            </div>
            <p class="text-slate-600 font-sans text-[10px]">Đã rà soát 2 lô mỹ phẩm cận hạn dùng dưới 60 ngày tại Kho Q1.</p>
            <button onclick="Zone0Shell.showEvidenceModal()" class="mt-1 text-[10px] text-indigo-700 hover:underline font-sans font-bold flex items-center gap-1">
              <i class="lucide-search-code w-3 h-3"></i> [ Xem Bảng Chứng Cứ Dữ Liệu ]
            </button>
          </div>

          <!-- Suggested Quick Prompts -->
          <div class="pt-2">
            <div class="text-[10px] font-bold uppercase text-slate-400 mb-2">Gợi ý câu hỏi nhanh:</div>
            <div class="space-y-1.5">
              <button onclick="Zone0Shell.sendPrompt('Tại sao lợi nhuận tuần này giảm?')" class="w-full text-left p-2 bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-slate-200 hover:border-purple-200 rounded-lg transition text-[11px]">
                💡 Tại sao lợi nhuận tuần này giảm?
              </button>
              <button onclick="Zone0Shell.sendPrompt('Gợi ý đơn mua PO bổ sung tồn kho?')" class="w-full text-left p-2 bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-slate-200 hover:border-purple-200 rounded-lg transition text-[11px]">
                📦 Gợi ý đơn mua PO bổ sung tồn kho?
              </button>
              <button onclick="Zone0Shell.sendPrompt('Kiểm tra lô mỹ phẩm sắp hết hạn FEFO?')" class="w-full text-left p-2 bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-slate-200 hover:border-purple-200 rounded-lg transition text-[11px]">
                ⚠️ Kiểm tra lô mỹ phẩm sắp hết hạn FEFO?
              </button>
              <button onclick="Zone0Shell.sendPrompt('Tại sao chi phí marketing tuần này vượt trần?')" class="w-full text-left p-2 bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-slate-200 hover:border-purple-200 rounded-lg transition text-[11px]">
                📊 Tại sao chi phí marketing tuần này vượt trần?
              </button>
            </div>
          </div>
        </div>

        <!-- Input Bar -->
        <div class="p-3 border-t border-slate-200 bg-white">
          <div class="relative">
            <input type="text" id="ai-chat-input" placeholder="Nhập câu hỏi cho AI Copilot..." class="w-full pl-3 pr-9 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600" onkeypress="if(event.key==='Enter') Zone0Shell.submitChat()" />
            <button onclick="Zone0Shell.submitChat()" class="absolute right-2 top-2 text-purple-600 hover:text-purple-800">
              <i class="lucide-send w-4 h-4"></i>
            </button>
          </div>
        </div>
      </aside>

      <!-- Evidence Modal -->
      <div id="evidence-modal" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl text-slate-800 overflow-hidden" onclick="event.stopPropagation()">
          <div class="bg-slate-900 text-white p-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i class="lucide-file-code-2 w-5 h-5 text-indigo-400"></i>
              <h3 class="font-bold text-sm">Bảng Chứng Cứ Dữ Liệu AI (Evidence Data Inspection)</h3>
            </div>
            <button onclick="Zone0Shell.hideEvidenceModal()" class="text-slate-400 hover:text-white"><i class="lucide-x w-5 h-5"></i></button>
          </div>
          <div class="p-4 space-y-4 max-h-[70vh] overflow-y-auto text-xs">
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-900">
              <span class="font-bold badge-fact">DỮ LIỆU GỐC (FACT)</span> Trích xuất trực tiếp từ CSDL Kho hàng lô FEFO vào lúc 16:30 23/09/2026.
            </div>
            <table class="w-full text-left border-collapse border border-slate-200">
              <thead>
                <tr class="bg-slate-100 text-slate-700 font-semibold border-b">
                  <th class="p-2 border">Mã Lô</th>
                  <th class="p-2 border">Sản phẩm</th>
                  <th class="p-2 border">Hạn sử dụng</th>
                  <th class="p-2 border">Số lượng Tồn</th>
                  <th class="p-2 border">Trạng thái FEFO</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 border font-mono">LOT-202608-A</td>
                  <td class="p-2 border font-medium">Serum Dưỡng Trắng Vitamin C 30ml</td>
                  <td class="p-2 border text-red-600 font-semibold">15/11/2026 (Còn 53 ngày)</td>
                  <td class="p-2 border text-right font-semibold">45 hộp</td>
                  <td class="p-2 border"><span class="badge-warning">CẬN HẠN DÙNG</span></td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 border font-mono">LOT-202511-C</td>
                  <td class="p-2 border font-medium">Kem Chống Nắng Broad Spectrum 50g</td>
                  <td class="p-2 border text-red-600 font-semibold">05/10/2026 (Còn 12 ngày)</td>
                  <td class="p-2 border text-right font-semibold">18 tuýp</td>
                  <td class="p-2 border"><span class="badge-danger">SẮP HẾT HÀNG</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-slate-50 border-t flex justify-end">
            <button onclick="Zone0Shell.hideEvidenceModal()" class="px-4 py-1.5 text-xs font-semibold bg-slate-800 text-white rounded hover:bg-slate-900">Đóng cửa sổ</button>
          </div>
        </div>
      </div>

      <!-- Financial Action Safety Confirmation Modal -->
      <div id="financial-confirm-modal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-2xl border border-slate-300 w-full max-w-lg text-slate-800 overflow-hidden" onclick="event.stopPropagation()">
          <div class="bg-red-700 text-white p-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i class="lucide-shield-alert w-5 h-5 text-amber-300"></i>
              <h3 id="confirm-modal-title" class="font-bold text-sm">Xác Nhận Tác Vụ Tài Chính & Ngân Sách</h3>
            </div>
            <button onclick="Zone0Shell.closeConfirmModal()" class="text-white/80 hover:text-white"><i class="lucide-x w-5 h-5"></i></button>
          </div>
          <div class="p-5 space-y-4 text-xs">
            <div id="confirm-modal-body" class="space-y-3">
              <!-- Dynamic Details HTML inserted by Zone0Shell.openFinancialConfirm -->
            </div>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 flex items-start gap-2">
              <i class="lucide-alert-circle w-4 h-4 text-amber-700 shrink-0 mt-0.5"></i>
              <span>Lưu ý: Tác vụ này sẽ trực tiếp sinh chứng từ/đơn hàng và ảnh hưởng dòng tiền thực tế. Vui lòng kiểm tra kỹ trước khi xác nhận.</span>
            </div>
          </div>
          <div class="p-3.5 bg-slate-100 border-t flex items-center justify-end gap-2">
            <button onclick="Zone0Shell.closeConfirmModal()" class="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-lg transition">Hủy Bỏ</button>
            <button id="confirm-modal-action-btn" class="px-4 py-2 text-xs font-bold bg-red-700 hover:bg-red-800 text-white rounded-lg transition shadow flex items-center gap-1.5">
              <i class="lucide-check-circle-2 w-4 h-4"></i>
              <span id="confirm-modal-action-text">Cấp Phép Thực Thi Ngay</span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // Interactive Handlers
  toggleAppMenu: function() {
    document.getElementById('app-menu-modal')?.classList.toggle('hidden');
  },
  toggleAIDrawer: function() {
    document.getElementById('ai-drawer')?.classList.toggle('translate-x-full');
  },
  showTenantModal: function() {
    document.getElementById('tenant-modal')?.classList.remove('hidden');
  },
  hideTenantModal: function() {
    document.getElementById('tenant-modal')?.classList.add('hidden');
  },
  selectTenant: function(id) {
    MockData.activeTenant = id;
    this.hideTenantModal();
    App.render();
  },
  toggleNotifications: function() {
    alert('🔔 Thông báo mới nhất:\n1. [Cảnh báo FEFO] Lô LOT-202608-A còn 45 hộp hết hạn sau 53 ngày.\n2. [Đơn mới Shopee] Đơn #ORD-2026-0891 đã được xác nhận.');
  },
  showEvidenceModal: function() {
    document.getElementById('evidence-modal')?.classList.remove('hidden');
  },
  hideEvidenceModal: function() {
    document.getElementById('evidence-modal')?.classList.add('hidden');
  },
  openFinancialConfirm: function(title, bodyHTML, actionLabel, onConfirmCallback) {
    const modal = document.getElementById('financial-confirm-modal');
    if (!modal) return;
    document.getElementById('confirm-modal-title').innerText = title;
    document.getElementById('confirm-modal-body').innerHTML = bodyHTML;
    document.getElementById('confirm-modal-action-text').innerText = actionLabel || 'Cấp Phép Thực Thi Ngay';
    const actionBtn = document.getElementById('confirm-modal-action-btn');
    actionBtn.onclick = function() {
      Zone0Shell.closeConfirmModal();
      if (typeof onConfirmCallback === 'function') {
        onConfirmCallback();
      }
    };
    modal.classList.remove('hidden');
  },
  closeConfirmModal: function() {
    document.getElementById('financial-confirm-modal')?.classList.add('hidden');
  },
  sendPrompt: function(text) {
    const drawerInput = document.getElementById('ai-chat-input');
    const wsInput = document.getElementById('workspace-chat-input');
    if (drawerInput) drawerInput.value = text;
    if (wsInput) wsInput.value = text;
    this.submitChat();
  },
  submitChat: function() {
    const drawerInput = document.getElementById('ai-chat-input');
    const wsInput = document.getElementById('workspace-chat-input');
    const userText = (wsInput?.value || drawerInput?.value || '').trim();
    if (!userText) return;

    if (drawerInput) drawerInput.value = '';
    if (wsInput) wsInput.value = '';

    const targets = [
      document.getElementById('ai-chat-body'),
      document.getElementById('workspace-chat-body')
    ].filter(Boolean);

    targets.forEach(body => {
      const userMsg = document.createElement('div');
      userMsg.className = 'flex items-start justify-end gap-2.5';
      userMsg.innerHTML = `
        <div class="bg-[#714B67] text-white p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[85%] shadow-sm">
          ${userText}
        </div>
        <div class="w-7 h-7 rounded bg-slate-800 text-white flex items-center justify-center shrink-0 font-bold text-[10px]">Bạn</div>
      `;
      body.appendChild(userMsg);
    });

    setTimeout(() => {
      targets.forEach(body => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'flex items-start gap-2.5';
        aiMsg.innerHTML = `
          <div class="w-7 h-7 rounded bg-purple-100 text-purple-800 border border-purple-200 flex items-center justify-center shrink-0 font-bold text-[10px]">AI</div>
          <div class="bg-white p-3.5 rounded-2xl rounded-tl-none text-slate-800 leading-relaxed border border-slate-200 max-w-[85%] space-y-2 shadow-sm">
            <div class="font-semibold">
              Đã trích xuất dữ liệu phân tích realtime: Đối với yêu cầu <strong>"${userText}"</strong>, AI khuyến nghị xử lý khẩn cấp 2 tác vụ dưới đây:
            </div>

            <!-- Decision Action Card 1 -->
            <div class="bg-purple-50/70 p-2.5 rounded-lg border border-purple-200 space-y-1.5">
              <div class="font-bold text-slate-800 text-[11px] flex items-center gap-1">
                <i class="lucide-box w-3.5 h-3.5 text-purple-700"></i> Đề Xuất PO Nhập Kho Bổ Sung FEFO
              </div>
              <p class="text-[10px] text-slate-500">Serum B5 đang chạm mốc tồn kho an toàn (dưới 15 hộp tại Q1).</p>
              <div class="flex gap-1.5 pt-1">
                <button onclick="App.navigateTo('inventory')" class="px-2.5 py-1 bg-[#714B67] hover:bg-[#583a51] text-white rounded font-bold text-[10px] flex items-center gap-1">
                  <i class="lucide-plus-circle w-3 h-3"></i> Tạo PO Nhập Kho Khẩn Cấp →
                </button>
              </div>
            </div>

            <!-- Decision Action Card 2 -->
            <div class="bg-amber-50/70 p-2.5 rounded-lg border border-amber-200 space-y-1.5">
              <div class="font-bold text-slate-800 text-[11px] flex items-center gap-1">
                <i class="lucide-zap w-3.5 h-3.5 text-amber-700"></i> Kích Hoạt KM Xả Hàng Cận Hạn Lô LOT-202608-A
              </div>
              <p class="text-[10px] text-slate-500">45 hộp Vitamin C còn 53 ngày hết hạn. Đề xuất giảm giá 25% trên POS & Shopee.</p>
              <div class="flex gap-1.5 pt-1">
                <button onclick="alert('Đã kích hoạt chương trình Flash Sale xả hàng FEFO thành công!')" class="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded font-bold text-[10px] flex items-center gap-1">
                  <i class="lucide-check w-3 h-3"></i> Kích Hoạt Flash Sale Ngay
                </button>
              </div>
            </div>

            <button onclick="Zone0Shell.showEvidenceModal()" class="mt-1 text-[10px] text-purple-700 font-bold hover:underline flex items-center gap-1">
              <i class="lucide-search-code w-3 h-3"></i> [ 🔍 Inspect Evidence Data - Xem Bảng Chứng Cứ ]
            </button>
          </div>
        `;
        body.appendChild(aiMsg);
        body.scrollTop = body.scrollHeight;
      });
    }, 500);
  },

  // Render Odoo Enterprise Home App Grid Launcher (Image 1 Style)
  renderAppLauncher: function() {
    const apps = [
      { id: 'dashboard', name: 'Dashboard KPI & Tài Chính', desc: 'Báo cáo doanh thu, lợi nhuận realtime', icon: 'lucide-layout-dashboard', color: 'bg-purple-600 text-white', badge: 'Realtime' },
      { id: 'inventory', name: 'Quản Lý Tồn Kho FEFO', desc: 'Kiểm date mỹ phẩm, vị trí kệ, đề xuất PO', icon: 'lucide-boxes', color: 'bg-emerald-600 text-white', badge: '2 Cận Hạn' },
      { id: 'sales', name: 'Bán Hàng & Thu Chi P&L', desc: 'Đơn đa kênh Shopee/TikTok, VietQR B2B', icon: 'lucide-shopping-bag', color: 'bg-amber-600 text-white', badge: 'Shopee/TikTok' },
      { id: 'pos', name: 'POS Thu Ngân Quầy', desc: 'Tính tiền, in hóa đơn, chốt ca, kiểm kê', icon: 'lucide-monitor', color: 'bg-blue-600 text-white', badge: 'Quầy Live' },
      { id: 'ai_advisor', name: 'Stitch AI Copilot Workspace', desc: 'Hỏi đáp dữ liệu, phân tích kinh doanh', icon: 'lucide-brain-circuit', color: 'bg-indigo-600 text-white', badge: 'AI v4.2' },
      { id: 'anomaly', name: 'Cảnh Báo Bất Thường', desc: 'Phát hiện rủi ro dòng tiền & gian lận', icon: 'lucide-shield-alert', color: 'bg-rose-600 text-white', badge: '3 Cảnh Báo', subtab: 'anomaly_center', parentApp: 'ai_advisor' },
      { id: 'whatif', name: 'What-If Simulation Lab', desc: 'Mô phỏng kịch bản giá & điểm hòa vốn', icon: 'lucide-flask-conical', color: 'bg-cyan-600 text-white', badge: 'Scenario', subtab: 'whatif_lab', parentApp: 'ai_advisor' },
      { id: 'sa_admin', name: 'Quản Trị Multi-Tenant', desc: 'Phân hạng gói cước & cấu hình DN', icon: 'lucide-building-2', color: 'bg-slate-700 text-white', badge: 'SA Console', subtab: 'tenants' },
      { id: 'rbac', name: 'Phân Quyền User RBAC', desc: 'Quản lý tài khoản & phân quyền vai trò', icon: 'lucide-users', color: 'bg-teal-700 text-white', badge: 'IAM Policy', subtab: 'rbac_users', parentApp: 'sa_admin' },
      { id: 'audit', name: 'Nhật Ký Truy Cập Audit', desc: 'Lịch sử thao tác & tuân thủ bảo mật', icon: 'lucide-file-text', color: 'bg-orange-600 text-white', badge: 'Compliance', subtab: 'audit_logs', parentApp: 'sa_admin' }
    ];

    return `
      <div class="min-h-[calc(100vh-10rem)] p-4 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-slate-50 to-purple-50/20 rounded-2xl border border-slate-200/80 shadow-inner">
        <!-- Title Header -->
        <div class="text-center max-w-xl mb-10 space-y-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#714B67] text-xs font-bold border border-purple-200 shadow-xs">
            <i class="lucide-sparkles w-3.5 h-3.5"></i> Odoo Enterprise App Grid Launcher
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Danh Mục Phân Hệ Quản Trị Stitch AI</h1>
          <p class="text-xs sm:text-sm text-slate-500">Chọn một phân hệ chức năng bên dưới để vào giao diện làm việc Odoo tinh gọn</p>
        </div>

        <!-- Apps Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-5xl w-full">
          ${apps.map(app => `
            <div onclick="${app.parentApp ? `MockData.subTabs.${app.parentApp} = '${app.subtab}'; App.navigateTo('${app.parentApp}');` : `App.navigateTo('${app.id}');`}" 
                 class="group relative bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200 cursor-pointer flex flex-col items-center text-center">
              
              ${app.badge ? `<span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#714B67] group-hover:text-white transition">${app.badge}</span>` : ''}

              <!-- App Icon Card -->
              <div class="w-14 h-14 rounded-2xl ${app.color} flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition duration-200">
                <i class="${app.icon} w-7 h-7"></i>
              </div>

              <!-- App Title & Description -->
              <h3 class="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-[#714B67] transition line-clamp-1">${app.name}</h3>
              <p class="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-snug">${app.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- Bottom Quick System Info Footer -->
        <div class="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-4">
          <span>Giao diện Odoo Enterprise Standard</span>
          <span>•</span>
          <span class="text-teal-700 font-medium">Tenant: Maison de Bloom</span>
          <span>•</span>
          <span>Role: <strong class="text-slate-700">${MockData.activeRole === 'SA' ? 'System Admin' : MockData.activeRole === 'BO' ? 'Business Owner' : 'Store Employee'}</strong></span>
        </div>
      </div>
    `;
  }
};
