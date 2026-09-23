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
          <button onclick="Zone0Shell.toggleAppMenu()" class="p-1.5 hover:bg-white/10 rounded transition text-white/90 hover:text-white" title="Danh mục ứng dụng Odoo">
            <i class="lucide-layout-grid w-5 h-5"></i>
          </button>
          <div class="flex items-center gap-2 cursor-pointer" onclick="App.navigateTo('dashboard')">
            <span class="font-bold text-base tracking-wide text-white">Stitch AI</span>
            <span class="text-xs bg-white/20 px-2 py-0.5 rounded font-mono text-white/90">Trợ Lý Copilot ERP</span>
          </div>
        </div>

        <!-- Center: Tenant / Store Selector & Quick BO-01 link -->
        <div class="hidden md:flex items-center gap-2">
          <div class="flex items-center gap-2 bg-black/20 hover:bg-black/30 text-white/90 text-xs px-3 py-1.5 rounded-md cursor-pointer transition" onclick="Zone0Shell.showTenantModal()">
            <i class="lucide-store w-3.5 h-3.5 text-teal-300"></i>
            <span class="font-medium">${MockData.tenants.find(t => t.id === MockData.activeTenant)?.name || 'Maison de Bloom'}</span>
            <i class="lucide-chevron-down w-3 h-3 text-white/60"></i>
          </div>
          <button onclick="App.navigateTo('sa_admin')" class="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs px-2.5 py-1.5 rounded-md transition shadow" title="Mở Hồ sơ Doanh nghiệp BO-01">
            <i class="lucide-building-2 w-3.5 h-3.5"></i> Hồ sơ DN (BO-01)
          </button>
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
              <span class="text-xs font-semibold text-slate-700">Dashboard KPI</span>
            </button>
            <button onclick="App.navigateTo('inventory'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-boxes w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700">Kho & FEFO</span>
            </button>
            <button onclick="App.navigateTo('sales'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-shopping-bag w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700">Đơn Đa Kênh</span>
            </button>
            <button onclick="App.navigateTo('pos'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-monitor w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700">POS Thu Ngân</span>
            </button>
            <button onclick="App.navigateTo('ai_advisor'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-brain-circuit w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700">AI Advisor</span>
            </button>
            ${MockData.activeRole === 'SA' || MockData.activeRole === 'BO' ? `
            <button onclick="App.navigateTo('sa_admin'); Zone0Shell.toggleAppMenu();" class="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition group">
              <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:scale-105 transition"><i class="lucide-building-2 w-5 h-5"></i></div>
              <span class="text-xs font-semibold text-slate-700">Quản trị & BO-01</span>
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

  // Render AI Copilot Slide-out Drawer
  renderAIDrawer: function() {
    return `
      <!-- AI Copilot Floating Button -->
      <button onclick="Zone0Shell.toggleAIDrawer()" class="fixed bottom-5 right-5 z-40 bg-[#714B67] hover:bg-[#5a3b52] text-white font-semibold px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 transition transform hover:scale-105 border border-white/20">
        <i class="lucide-bot w-4 h-4"></i>
        <span class="text-xs">Trợ Lý AI Copilot</span>
      </button>

      <!-- Slide-out Drawer -->
      <aside id="ai-drawer" class="fixed top-12 right-0 bottom-0 w-96 bg-white border-l border-slate-200 shadow-2xl z-40 transform translate-x-full drawer-transition flex flex-col">
        <!-- Header -->
        <div class="p-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-sm">
              <i class="lucide-bot w-4 h-4"></i>
            </div>
            <div>
              <h3 class="text-xs font-bold text-slate-800">Stitch AI Advisor</h3>
              <span class="text-[10px] text-emerald-600 font-semibold flex items-center gap-1"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Sẵn sàng hỗ trợ</span>
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
  sendPrompt: function(text) {
    const input = document.getElementById('ai-chat-input');
    if (input) {
      input.value = text;
      this.submitChat();
    }
  },
  submitChat: function() {
    const input = document.getElementById('ai-chat-input');
    const chatBody = document.getElementById('ai-chat-body');
    if (!input || !input.value.trim() || !chatBody) return;

    const userText = input.value.trim();
    input.value = '';

    // Append User message
    const userMsg = document.createElement('div');
    userMsg.className = 'flex items-start justify-end gap-2.5';
    userMsg.innerHTML = `
      <div class="bg-purple-600 text-white p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[85%] shadow-sm">
        ${userText}
      </div>
      <div class="w-6 h-6 rounded bg-slate-800 text-white flex items-center justify-center shrink-0 font-bold text-[10px]">Bạn</div>
    `;
    chatBody.appendChild(userMsg);

    // Append AI Typing & Response
    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.className = 'flex items-start gap-2.5';
      aiMsg.innerHTML = `
        <div class="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 font-bold text-[10px]">AI</div>
        <div class="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-700 leading-relaxed border border-slate-200 max-w-[85%]">
          Đã trích xuất dữ liệu phân tích: Đối với câu hỏi <strong>"${userText}"</strong>, tôi nhận thấy doanh thu tăng 14.2% chủ yếu từ Sàn Shopee (chiếm 45%). Bạn có muốn chạy mô phỏng What-If kịch bản bán hàng tiếp theo?
          <button onclick="Zone0Shell.showEvidenceModal()" class="mt-2 text-[10px] text-purple-700 font-bold hover:underline block">
            [ 🔍 Inspect Evidence Data ]
          </button>
        </div>
      `;
      chatBody.appendChild(aiMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }
};
