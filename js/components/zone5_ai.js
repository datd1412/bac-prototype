/* ==========================================================================
   ZONE 5: AI CAPABILITIES, ANALYTICS & DECISION SUPPORT (PARITY COMPLETE)
   ========================================================================== */

const Zone5AI = {
  renderDashboard: function() {
    const activeSubTab = MockData.subTabs.dashboard || 'kpi_overview';

    return `
      <div class="space-y-6">
        <!-- Sub-navigation Tabs for 100% 54-Screen Coverage -->
        <div class="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-semibold text-slate-600">
          <button onclick="Zone5AI.switchDashboardSubTab('kpi_overview')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'kpi_overview' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            📊 1. Executive KPI Dashboard (BO-05)
          </button>
          <button onclick="Zone5AI.switchDashboardSubTab('retail_pulse')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'retail_pulse' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            ⚡ 2. Retail Intelligence Pulse Monitor
          </button>
        </div>

        ${activeSubTab === 'kpi_overview' ? this.renderKPIOverview() : ''}
        ${activeSubTab === 'retail_pulse' ? this.renderRetailPulse() : ''}
      </div>
    `;
  },

  renderKPIOverview: function() {
    return `
      <!-- Hero Header: SME Owner Hero Metric & Quick Alert Banner -->
      <div class="o-card p-5 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white rounded-xl shadow-lg border border-purple-900/50">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Maison de Bloom • Chuỗi Bán Lẻ Skincare</span>
              <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1"><i class="lucide-radio w-3.5 h-3.5 animate-pulse"></i> Dữ liệu Realtime hôm nay</span>
            </div>
            <h1 class="text-xl font-extrabold text-white tracking-tight">Trung Tâm Điều Hành & Lợi Nhuận Thực Nhận</h1>
            <p class="text-xs text-slate-300">Tổng hợp tình hình thu chi, dòng tiền về ví và cảnh báo việc cần xử lý gấp cho Chủ doanh nghiệp.</p>
          </div>

          <!-- HERO METRIC CARD (Con số quan trọng nhất) -->
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 min-w-[280px]">
            <div class="text-[11px] font-semibold text-slate-300 uppercase tracking-wide">💰 LỢI NHUẬN THỰC NHẬN BỎ TÚI (CASH NET PROFIT)</div>
            <div class="text-2xl font-extrabold text-teal-300 mt-1">${MockData.kpis.grossProfit.toLocaleString()} VNĐ</div>
            <div class="text-xs text-slate-200 mt-1 flex items-center justify-between">
              <span>Biên lợi nhuận: <strong class="text-white font-mono">${MockData.kpis.profitMargin}</strong></span>
              <span class="text-emerald-400 font-bold flex items-center gap-0.5"><i class="lucide-trending-up w-3.5 h-3.5"></i> +14.2%</span>
            </div>
          </div>
        </div>

        <!-- 3 Quick Stat Summary Pills -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 text-xs">
          <div class="bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center justify-between">
            <span class="text-slate-300">📈 Tổng Doanh Thu Bán Hàng:</span>
            <strong class="text-white font-mono font-bold">${MockData.kpis.revenue.toLocaleString()} VNĐ</strong>
          </div>
          <div class="bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center justify-between">
            <span class="text-slate-300">🏦 Tiền Về Ngân Hàng Realtime:</span>
            <strong class="text-teal-300 font-mono font-bold">390,000,000 VNĐ</strong>
          </div>
          <div class="bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center justify-between">
            <span class="text-slate-300">📦 Đơn Đang Xử Lý Đa Kênh:</span>
            <strong class="text-amber-300 font-mono font-bold">18 đơn (Shopee: 8 | TikTok: 6 | POS: 4)</strong>
          </div>
        </div>
      </div>

      <!-- RED-FLAG ACTION ALERTS: 🔴 KHỐI VIỆC CẦN XỬ LÝ GẤP TRONG NGÀY -->
      <div class="o-card p-5 border-amber-300 bg-amber-50/40 rounded-xl space-y-3">
        <div class="flex items-center justify-between border-b border-amber-200 pb-2.5">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              <i class="lucide-alert-triangle w-4 h-4"></i>
            </div>
            <div>
              <h2 class="text-sm font-bold text-slate-900">🔴 Khối Cảnh Báo Nóng - Việc Cần Chủ DN Chỉ Đạo Ngay</h2>
              <p class="text-[11px] text-slate-600">3 sự cố rủi ro dòng tiền và hạn sử dụng lô hàng cần đưa ra quyết định xử lý</p>
            </div>
          </div>
          <span class="px-2.5 py-1 text-[11px] font-bold bg-amber-200 text-amber-900 rounded-full border border-amber-300">3 Cảnh báo ưu tiên cao</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <!-- Alert 1: Mỹ phẩm sắp hết hạn -->
          <div class="bg-white p-3.5 rounded-lg border border-amber-200 shadow-sm flex flex-col justify-between gap-2">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-rose-700 text-[11px] flex items-center gap-1"><i class="lucide-clock w-3.5 h-3.5"></i> CẢNH BẢO LÔ HẠN SỬ DỤNG</span>
                <span class="text-[10px] font-bold bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded">Còn 45 ngày</span>
              </div>
              <p class="text-slate-700 font-semibold">Lô mỹ phẩm Serum Vitamin C20 (32 hộp) ở Kho Q1 sắp hết hạn dùng.</p>
              <div class="text-[11px] text-slate-500 mt-1">Giá trị tồn chôn vốn: <strong>14,400,000 VNĐ</strong></div>
            </div>
            <button onclick="App.navigateTo('inventory')" class="w-full py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] rounded transition shadow flex items-center justify-center gap-1">
              <i class="lucide-tag w-3 h-3"></i> Tạo CTKM Xả Hàng Giảm 30% →
            </button>
          </div>

          <!-- Alert 2: Chênh lệch tiền về ví Shopee -->
          <div class="bg-white p-3.5 rounded-lg border border-amber-200 shadow-sm flex flex-col justify-between gap-2">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-amber-800 text-[11px] flex items-center gap-1"><i class="lucide-wallet w-3.5 h-3.5"></i> CHÊNH LỆCH ĐỐI SOÁT TMĐT</span>
                <span class="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Chưa về ví</span>
              </div>
              <p class="text-slate-700 font-semibold">Shopee chưa đối soát 14,500,000 VNĐ đợt doanh thu 15/09 đến 20/09.</p>
              <div class="text-[11px] text-slate-500 mt-1">Lệch chiết khấu sàn: <strong>-420,000 VNĐ</strong></div>
            </div>
            <button onclick="App.navigateTo('sales')" class="w-full py-1.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-[11px] rounded transition shadow flex items-center justify-center gap-1">
              <i class="lucide-search w-3 h-3"></i> Xem Chi Tiết Lệch Tiền Sàn →
            </button>
          </div>

          <!-- Alert 3: Tỷ lệ hoàn đơn Thủ Đức -->
          <div class="bg-white p-3.5 rounded-lg border border-amber-200 shadow-sm flex flex-col justify-between gap-2">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-blue-800 text-[11px] flex items-center gap-1"><i class="lucide-truck w-3.5 h-3.5"></i> VẬN CHUYỂN HOÀN HÀNG</span>
                <span class="text-[10px] font-bold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">6 đơn bị treo</span>
              </div>
              <p class="text-slate-700 font-semibold">Chi nhánh Thủ Đức có tỷ lệ hoàn đơn tăng 4.2% do bên giao vận đợt này trễ.</p>
              <div class="text-[11px] text-slate-500 mt-1">Giá trị đơn treo: <strong>5,800,000 VNĐ</strong></div>
            </div>
            <button onclick="App.navigateTo('sales')" class="w-full py-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-[11px] rounded transition shadow flex items-center justify-center gap-1">
              <i class="lucide-file-text w-3 h-3"></i> Kiểm Tra Vận Đơn Khách Hàng →
            </button>
          </div>
        </div>
      </div>

      <!-- Clean Visual Charts Section: Biểu đồ Thu Chi & Kênh Bán -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2 o-card p-5 space-y-3">
          <div class="flex items-center justify-between border-b pb-3">
            <div>
              <h3 class="font-bold text-sm text-slate-800 flex items-center gap-2">
                <i class="lucide-line-chart w-4 h-4 text-purple-700"></i> Xu Hướng Doanh Thu & Lợi Nhuận Thực Tế (4 Tháng Gần Nhất)
              </h3>
              <span class="text-xs text-slate-500">So sánh tiền thu dồn tích vs chi phí vận hành cửa hàng</span>
            </div>
            <button onclick="Zone0Shell.toggleAIDrawer()" class="px-2.5 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 border border-indigo-200 rounded hover:bg-indigo-200 flex items-center gap-1">
              <i class="lucide-bot w-3.5 h-3.5"></i> Đề xuất AI phân tích
            </button>
          </div>
          
          <div class="h-56 bg-slate-50 rounded-lg border border-slate-200 p-4 flex flex-col justify-between">
            <div class="flex justify-between text-[10px] text-slate-500 font-mono border-b pb-2">
              <span>Đơn vị: Triệu VNĐ</span>
              <span class="flex items-center gap-3 font-sans font-semibold">
                <span class="flex items-center gap-1"><span class="w-3 h-2 bg-purple-600 rounded-sm"></span> Doanh thu</span>
                <span class="flex items-center gap-1"><span class="w-3 h-2 bg-emerald-500 rounded-sm"></span> Lợi nhuận ròng</span>
              </span>
            </div>
            <div class="flex items-end justify-between h-36 px-6 pt-4 border-b border-slate-200">
              <div class="flex flex-col items-center gap-1">
                <div class="flex gap-1 items-end">
                  <div class="w-6 bg-purple-500 rounded-t h-20" title="Tháng 6: Doanh thu 320 Tr"></div>
                  <div class="w-6 bg-emerald-500 rounded-t h-10" title="Tháng 6: Lợi nhuận 140 Tr"></div>
                </div>
                <span class="text-xs font-semibold text-slate-600">Tháng 6</span>
              </div>

              <div class="flex flex-col items-center gap-1">
                <div class="flex gap-1 items-end">
                  <div class="w-6 bg-purple-500 rounded-t h-24" title="Tháng 7: Doanh thu 380 Tr"></div>
                  <div class="w-6 bg-emerald-500 rounded-t h-12" title="Tháng 7: Lợi nhuận 165 Tr"></div>
                </div>
                <span class="text-xs font-semibold text-slate-600">Tháng 7</span>
              </div>

              <div class="flex flex-col items-center gap-1">
                <div class="flex gap-1 items-end">
                  <div class="w-6 bg-purple-500 rounded-t h-28" title="Tháng 8: Doanh thu 420 Tr"></div>
                  <div class="w-6 bg-emerald-500 rounded-t h-14" title="Tháng 8: Lợi nhuận 190 Tr"></div>
                </div>
                <span class="text-xs font-semibold text-slate-600">Tháng 8</span>
              </div>

              <div class="flex flex-col items-center gap-1">
                <div class="flex gap-1 items-end">
                  <div class="w-6 bg-purple-600 rounded-t h-36" title="Tháng 9: Doanh thu 485 Tr"></div>
                  <div class="w-6 bg-emerald-600 rounded-t h-16" title="Tháng 9: Lợi nhuận 218 Tr"></div>
                </div>
                <span class="text-xs font-bold text-purple-900">Tháng 9 (Hôm nay)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tỷ lệ Kênh Bán -->
        <div class="o-card p-5 space-y-4">
          <div class="flex items-center justify-between border-b pb-3">
            <h3 class="font-bold text-sm text-slate-800 flex items-center gap-1.5"><i class="lucide-pie-chart w-4 h-4 text-teal-700"></i> Tỷ Lệ Kênh Bán Hàng</h3>
            <span class="badge-fact">DỮ LIỆU THỰC TẾ</span>
          </div>
          <div class="space-y-3.5 pt-1">
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-orange-700 font-bold">Sàn Shopee</span>
                <span class="font-mono font-bold">45% (218 Triệu)</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2.5">
                <div class="bg-orange-500 h-2.5 rounded-full" style="width: 45%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-pink-700 font-bold">TikTok Shop</span>
                <span class="font-mono font-bold">30% (145 Triệu)</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2.5">
                <div class="bg-pink-500 h-2.5 rounded-full" style="width: 30%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-blue-700 font-bold">POS Cửa Hàng</span>
                <span class="font-mono font-bold">15% (72 Triệu)</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2.5">
                <div class="bg-blue-500 h-2.5 rounded-full" style="width: 15%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-purple-700 font-bold">Bán Sỉ B2B</span>
                <span class="font-mono font-bold">10% (50 Triệu)</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2.5">
                <div class="bg-purple-600 h-2.5 rounded-full" style="width: 10%"></div>
              </div>
            </div>
          </div>
      </div>
    `;
  },

  renderRetailPulse: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-activity w-4 h-4 text-emerald-600"></i> Retail Intelligence Pulse Monitor
          </h2>
          <span class="badge-rec">NHỊP ĐẬP BÁN LẺ REAL-TIME</span>
        </div>
        <div class="grid grid-cols-3 gap-4 text-xs">
          <div class="p-3 bg-slate-50 border rounded-lg">
            <div class="text-slate-500 font-semibold">Đơn mới trong giờ qua:</div>
            <div class="text-base font-bold text-emerald-600 mt-1">12 đơn (▲ 20%)</div>
          </div>
          <div class="p-3 bg-slate-50 border rounded-lg">
            <div class="text-slate-500 font-semibold">Tốc độ bán trung bình:</div>
            <div class="text-base font-bold text-slate-800 mt-1">4.5 đơn/giờ</div>
          </div>
          <div class="p-3 bg-slate-50 border rounded-lg">
            <div class="text-slate-500 font-semibold">Giá trị trung bình đơn (AOV):</div>
            <div class="text-base font-bold text-purple-900 mt-1">680,000 VNĐ</div>
          </div>
        </div>
      </div>
    `;
  },

  renderAIAdvisor: function() {
    const activeSubTab = MockData.subTabs.ai_advisor || 'advisor_lab';

    return `
      <div class="space-y-6">
        <!-- Sub-navigation Tabs for 100% 54-Screen Coverage -->
        <div class="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-semibold text-slate-600">
          <button onclick="Zone5AI.switchAIAdvisorSubTab('advisor_lab')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'advisor_lab' ? 'bg-indigo-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            🤖 1. AI Business Advisor Workspace (BO-11)
          </button>
          <button onclick="Zone5AI.switchAIAdvisorSubTab('anomaly_center')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'anomaly_center' ? 'bg-indigo-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            ⚠️ 2. AI Anomaly Alert Center (BO-08)
          </button>
          <button onclick="Zone5AI.switchAIAdvisorSubTab('demand_forecast')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'demand_forecast' ? 'bg-indigo-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            📈 3. AI Demand Forecasting & PO Suggestion (BO-09)
          </button>
          <button onclick="Zone5AI.switchAIAdvisorSubTab('whatif_lab')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'whatif_lab' ? 'bg-indigo-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            🧪 4. What-If Scenario Lab & Liquidity Stress Test (BO-10)
          </button>
        </div>

        ${activeSubTab === 'advisor_lab' ? this.renderAdvisorWorkspace() : ''}
        ${activeSubTab === 'anomaly_center' ? this.renderAnomalyCenter() : ''}
        ${activeSubTab === 'demand_forecast' ? this.renderDemandForecast() : ''}
        ${activeSubTab === 'whatif_lab' ? this.renderWhatIfLab() : ''}
      </div>
    `;
  },

  renderAdvisorWorkspace: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-bot w-4 h-4 text-indigo-600"></i> AI C-Level Strategic Business Advisor Workspace (BO-11)
          </h2>
          <span class="badge-rec">TRỢ LÝ CHIẾN LƯỢC C-LEVEL</span>
        </div>
        <p class="text-xs text-slate-600">Trợ lý AI hỗ trợ tự động tra cứu dữ liệu, tính toán biên lợi nhuận, gợi ý kế hoạch kinh doanh có bằng chứng chứng cứ.</p>
        <button onclick="Zone0Shell.toggleAIDrawer()" class="px-4 py-2 bg-indigo-700 text-white font-bold text-xs rounded hover:bg-indigo-800 shadow flex items-center gap-1.5">
          <i class="lucide-message-square-plus w-4 h-4"></i> Mở Khung Chat AI Copilot →
        </button>
      </div>
    `;
  },

  renderAnomalyCenter: function() {
    return `
      <div class="o-card p-5 border-amber-200 bg-amber-50/20 space-y-4">
        <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3">
          <i class="lucide-alert-triangle w-4 h-4 text-amber-600"></i> Trung tâm Cảnh báo Bất thường AI (Anomaly Detection Center BO-08)
        </h2>
        <div class="space-y-3">
          ${MockData.anomalies.map(a => `
            <div class="p-3.5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-xs text-slate-800">${a.title}</span>
                <span class="${a.level === 'HIGH' ? 'badge-danger' : 'badge-warning'}">${a.level === 'HIGH' ? 'RỦI RO CAO' : 'CẢNH BÁO'}</span>
              </div>
              <div class="text-xs text-slate-600">${a.evidence}</div>
              <div class="text-xs font-bold text-emerald-700 flex items-center justify-between pt-1 border-t border-slate-100">
                <span>Khuyên nghị: ${a.suggestion}</span>
                <button onclick="Zone0Shell.showEvidenceModal()" class="text-purple-700 hover:underline">Xem Chứng Cứ Dữ Liệu →</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderDemandForecast: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-trending-up w-4 h-4 text-purple-600"></i> Dự Báo Nhu Cầu Tiêu Thụ & Gợi Ý Nhập Hàng AI (BO-09)
          </h2>
          <span class="badge-forecast">DỰ BÁO 30-90 NGÀY</span>
        </div>

        <table class="w-full text-left text-xs border-collapse border border-slate-200">
          <thead>
            <tr class="bg-slate-100 text-slate-700 font-semibold border-b">
              <th class="p-2.5 border">Sản Phẩm</th>
              <th class="p-2.5 border text-right">Tồn Hiện Tại</th>
              <th class="p-2.5 border text-right">Dự Báo Tiêu Thụ 30 Ngày</th>
              <th class="p-2.5 border text-right">Gợi Ý Số Lượng PO Mua</th>
              <th class="p-2.5 border">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border font-bold text-slate-800">Serum Dưỡng Trắng Vitamin C 30ml</td>
              <td class="p-2.5 border text-right font-mono">142 hộp</td>
              <td class="p-2.5 border text-right font-mono font-bold text-purple-900">180 hộp</td>
              <td class="p-2.5 border text-right font-mono font-bold text-emerald-700">+50 hộp</td>
              <td class="p-2.5 border">
                <button onclick="alert('Đã tự động tạo PO Draft mua 50 hộp Serum!')" class="px-2 py-1 bg-emerald-700 text-white font-bold rounded text-[11px]">Tạo PO Mua →</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  },

  renderWhatIfLab: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <div>
            <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
              <i class="lucide-flask-conical w-4 h-4 text-purple-600"></i> Phòng Lab Mô phỏng Kịch bản Kinh doanh What-If & Áp lực Thanh khoản (BO-10)
            </h2>
            <span class="text-xs text-slate-500">Giả định biến động Giá bán, Chi phí & Dự báo tác động Lợi nhuận</span>
          </div>
          <span class="badge-rec">MÔ PHỎNG WHAT-IF</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4 text-xs">
            <div class="font-bold text-slate-700">Điều chỉnh Tham số Giả lập:</div>

            <div class="space-y-1">
              <div class="flex justify-between">
                <span>Thay đổi Giá bán lẻ (%):</span>
                <span id="slider-price-val" class="font-bold text-purple-900">+5%</span>
              </div>
              <input type="range" min="-20" max="20" value="5" class="w-full accent-purple-700" oninput="document.getElementById('slider-price-val').innerText = (this.value > 0 ? '+' : '') + this.value + '%'" />
            </div>

            <div class="space-y-1">
              <div class="flex justify-between">
                <span>Thay đổi Chi phí Marketing (Triệu VNĐ):</span>
                <span id="slider-mkt-val" class="font-bold text-purple-900">+5 Triệu</span>
              </div>
              <input type="range" min="-10" max="30" value="5" class="w-full accent-purple-700" oninput="document.getElementById('slider-mkt-val').innerText = (this.value > 0 ? '+' : '') + this.value + ' Triệu'" />
            </div>

            <button onclick="alert('Đã chạy mô phỏng kịch bản thành công!')" class="w-full py-2 bg-[#714B67] hover:bg-[#5a3b52] text-white font-bold rounded shadow transition">
              ⚡ CHẠY MÔ PHỎNG WHAT-IF
            </button>
          </div>

          <div class="space-y-3">
            <div class="font-bold text-xs text-slate-700">So sánh Kết quả Baseline vs Giả lập:</div>
            
            <div class="grid grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-slate-100 rounded-lg border border-slate-200">
                <div class="text-[10px] text-slate-500 font-bold uppercase">Baseline Hiện Tại</div>
                <div class="text-sm font-bold text-slate-800 mt-1">485,200,000 VNĐ</div>
                <div class="text-[10px] text-slate-500">Lợi nhuận: 218,340,000 VNĐ</div>
              </div>

              <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div class="text-[10px] text-purple-700 font-bold uppercase">Kịch bản Giả Lập</div>
                <div class="text-sm font-bold text-purple-900 mt-1">509,460,000 VNĐ</div>
                <div class="text-[10px] text-emerald-600 font-bold">Lợi nhuận: +14,200,000 VNĐ ▲</div>
              </div>
            </div>

            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs">
              <span class="font-bold">Khuyên nghị AI:</span> Tăng giá 5% kết hợp ngân sách Ads 5 triệu sẽ giúp tối ưu điểm hòa vốn và tăng 6.5% tổng lợi nhuận ròng.
            </div>
          </div>
        </div>
      </div>
    `;
  },

  switchDashboardSubTab: function(tabKey) {
    MockData.subTabs.dashboard = tabKey;
    App.render();
  },

  switchAIAdvisorSubTab: function(tabKey) {
    MockData.subTabs.ai_advisor = tabKey;
    App.render();
  }
};
