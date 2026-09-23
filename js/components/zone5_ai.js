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
      <!-- 4 Hero KPI Cards (Quy tắc Clean Dashboard: Tối đa 4 Thẻ) -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="o-card p-4 hover:border-purple-300 transition">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500">Tổng Doanh Thu</span>
            <span class="badge-fact">DỮ LIỆU THỰC TẾ</span>
          </div>
          <div class="text-xl font-extrabold text-slate-900 mt-2">${MockData.kpis.revenue.toLocaleString()} VNĐ</div>
          <div class="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <i class="lucide-trending-up w-3.5 h-3.5"></i> ${MockData.kpis.revenueChange} so với tháng trước
          </div>
        </div>

        <div class="o-card p-4 hover:border-purple-300 transition">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500">Lợi Nhuận Gộp (Margin)</span>
            <span class="badge-calc">TÍNH TOÁN</span>
          </div>
          <div class="text-xl font-extrabold text-purple-900 mt-2">${MockData.kpis.grossProfit.toLocaleString()} VNĐ</div>
          <div class="text-xs text-purple-600 font-semibold mt-1">Biên lợi nhuận: ${MockData.kpis.profitMargin}</div>
        </div>

        <div class="o-card p-4 hover:border-purple-300 transition">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500">Đơn Hàng Đang Xử Lý</span>
            <span class="badge-fact">DỮ LIỆU THỰC TẾ</span>
          </div>
          <div class="text-xl font-extrabold text-blue-900 mt-2">${MockData.kpis.pendingOrders} đơn hàng</div>
          <div class="text-xs text-slate-500 mt-1">Shopee: 8 | TikTok: 6 | POS: 4</div>
        </div>

        <div class="o-card p-4 border-amber-300 bg-amber-50/30 hover:border-amber-400 transition">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-amber-900">Cảnh Báo Rủi Ro AI</span>
            <span class="badge-warning">BẤT THƯỜNG</span>
          </div>
          <div class="text-xl font-extrabold text-amber-800 mt-2">${MockData.kpis.criticalAlerts} cảnh báo</div>
          <button onclick="App.navigateTo('ai_advisor')" class="text-[11px] text-amber-900 font-bold hover:underline mt-1 block">
            Xem chi tiết Anomaly Center →
          </button>
        </div>
      </div>

      <!-- Clean Charts Section (Chỉ giữ 2 Biểu đồ chính) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div class="md:col-span-2 o-card p-5">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="font-bold text-sm text-slate-800">Xu hướng Doanh thu & Lợi nhuận (Theo tháng)</h3>
              <span class="text-xs text-slate-500">So sánh dữ liệu thực tế với cùng kỳ</span>
            </div>
            <button onclick="Zone0Shell.toggleAIDrawer()" class="px-2.5 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 border border-indigo-200 rounded hover:bg-indigo-200 flex items-center gap-1">
              <i class="lucide-bot w-3.5 h-3.5"></i> Hỏi AI về Biểu đồ này
            </button>
          </div>
          
          <div class="h-56 bg-slate-50 rounded-lg border border-slate-200 p-4 flex flex-col justify-between">
            <div class="flex justify-between text-[10px] text-slate-400 font-mono border-b pb-2">
              <span>Trục Y: Triệu VNĐ</span>
              <span class="flex items-center gap-3">
                <span class="flex items-center gap-1"><span class="w-3 h-0.5 bg-purple-600"></span> Doanh thu</span>
                <span class="flex items-center gap-1"><span class="w-3 h-0.5 bg-emerald-500"></span> Lợi nhuận</span>
              </span>
            </div>
            <div class="flex items-end justify-between h-36 px-4 pt-4 border-b border-slate-200">
              <div class="flex flex-col items-center gap-1"><div class="w-8 bg-purple-500 rounded-t h-20"></div><span class="text-[10px] font-mono">T1</span></div>
              <div class="flex flex-col items-center gap-1"><div class="w-8 bg-purple-500 rounded-t h-24"></div><span class="text-[10px] font-mono">T2</span></div>
              <div class="flex flex-col items-center gap-1"><div class="w-8 bg-purple-500 rounded-t h-28"></div><span class="text-[10px] font-mono">T3</span></div>
              <div class="flex flex-col items-center gap-1"><div class="w-8 bg-purple-600 rounded-t h-36"></div><span class="text-[10px] font-mono">T4</span></div>
            </div>
          </div>
        </div>

        <div class="o-card p-5">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-sm text-slate-800">Tỷ lệ Kênh bán</h3>
            <span class="badge-fact">DỮ LIỆU THỰC TẾ</span>
          </div>
          <div class="space-y-3 pt-2">
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-orange-700">Sàn Shopee</span>
                <span>45% (218 Triệu)</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2">
                <div class="bg-orange-500 h-2 rounded-full" style="width: 45%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-pink-700">TikTok Shop</span>
                <span>30% (145 Triệu)</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2">
                <div class="bg-pink-500 h-2 rounded-full" style="width: 30%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-blue-700">POS Cửa hàng</span>
                <span>15% (72 Triệu)</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 15%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-purple-700">Bán sỉ B2B</span>
                <span>10% (50 Triệu)</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2">
                <div class="bg-purple-600 h-2 rounded-full" style="width: 10%"></div>
              </div>
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
