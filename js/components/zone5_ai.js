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
          <button onclick="Zone5AI.switchDashboardSubTab('kpi_overview')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'kpi_overview' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-layout-dashboard w-3.5 h-3.5"></i> 1. Executive KPI Dashboard (BO-05)
          </button>
          <button onclick="Zone5AI.switchDashboardSubTab('retail_pulse')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'retail_pulse' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-activity w-3.5 h-3.5"></i> 2. Retail Intelligence Pulse Monitor
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
            <div class="text-[11px] font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-1.5"><i class="lucide-wallet w-3.5 h-3.5 text-teal-300"></i> LỢI NHUẬN THỰC NHẬN BỎ TÚI (CASH NET PROFIT)</div>
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
            <span class="text-slate-300 flex items-center gap-1.5"><i class="lucide-trending-up w-3.5 h-3.5 text-purple-300"></i> Tổng Doanh Thu Bán Hàng:</span>
            <strong class="text-white font-mono font-bold">${MockData.kpis.revenue.toLocaleString()} VNĐ</strong>
          </div>
          <div class="bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center justify-between">
            <span class="text-slate-300 flex items-center gap-1.5"><i class="lucide-landmark w-3.5 h-3.5 text-teal-300"></i> Tiền Về Ngân Hàng Realtime:</span>
            <strong class="text-teal-300 font-mono font-bold">390,000,000 VNĐ</strong>
          </div>
          <div class="bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center justify-between">
            <span class="text-slate-300 flex items-center gap-1.5"><i class="lucide-package-check w-3.5 h-3.5 text-amber-300"></i> Đơn Đang Xử Lý Đa Kênh:</span>
            <strong class="text-amber-300 font-mono font-bold">18 đơn (Shopee: 8 | TikTok: 6 | POS: 4)</strong>
          </div>
        </div>
      </div>

      <!-- RED-FLAG ACTION ALERTS: KHỐI VIỆC CẦN XỬ LÝ GẤP TRONG NGÀY -->
      <div class="o-card p-5 border-amber-300 bg-amber-50/40 rounded-xl space-y-3">
        <div class="flex items-center justify-between border-b border-amber-200 pb-2.5">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              <i class="lucide-alert-triangle w-4 h-4"></i>
            </div>
            <div>
              <h2 class="text-sm font-bold text-slate-900 flex items-center gap-1.5">Khối Cảnh Báo Nóng - Việc Cần Chủ DN Chỉ Đạo Ngay</h2>
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
            <button onclick="Zone0Shell.openFinancialConfirm('Kích Hoạt Flash Sale Xả Hàng FEFO', '<p class=\\'text-xs text-slate-600\\'>Giảm 30% cho 32 hộp Serum Vitamin C20 (Còn 45 ngày HSD) để thu hồi vốn 14,400,000 VNĐ. Thao tác này sẽ cập nhật bảng giá khuyến mãi trên Shopee & POS.</p>', 'Kích Hoạt Flash Sale 30%', () => App.navigateTo(\\'inventory\\'))" class="w-full py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] rounded transition shadow flex items-center justify-center gap-1">
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
      <div class="space-y-6">
        <!-- Top Controls Bar & Welcome Greeting Banner -->
        <div class="o-card p-5 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wide">Trang Quản Trị Vận Hành Bán Lẻ</span>
              <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <i class="lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400"></i> Dữ liệu KiotViet POS Live (5m/lần)
              </span>
            </div>
            <h1 class="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Xin chào, Nguyễn Thị Mai! <span class="text-xs font-normal text-slate-400">(Chủ Chuỗi Maison de Bloom)</span>
            </h1>
            <p class="text-xs text-slate-300">Cập nhật tốc độ bán hàng, dòng tiền két quầy và hiệu suất vận hành 3 chi nhánh thời gian thực.</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <!-- Date Filter Dropdown -->
            <div class="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium text-slate-200 flex items-center gap-2 shadow-sm">
              <i class="lucide-calendar w-4 h-4 text-purple-400"></i>
              <span>30 ngày qua (01/10 - 24/10/2026)</span>
              <i class="lucide-chevron-down w-3.5 h-3.5 text-slate-400"></i>
            </div>
            <!-- Secondary Action: Export PDF/Excel -->
            <button onclick="Zone0Shell.openFinancialConfirm('Xuất Báo Cáo Doanh Thu Bán Lẻ', '<p class=\"text-xs text-slate-600\">Hệ thống sẽ tổng hợp dữ liệu giao dịch 3 chi nhánh và tạo file báo cáo kế toán (Excel & PDF).</p>', 'Xuất Báo Cáo (.XLSX)', () => alert('Đã xuất báo cáo thành công!'))" class="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition">
              <i class="lucide-download w-4 h-4 text-sky-400"></i>
              <span>Xuất báo cáo</span>
            </button>
            <!-- Primary Action: New POS Sale -->
            <button onclick="window.location.href='pos.html'" class="px-4 py-2 bg-[#714B67] hover:bg-purple-900 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-md transition">
              <i class="lucide-plus-circle w-4 h-4 text-amber-300"></i>
              <span>Tạo đơn bán mới (+)</span>
            </button>
          </div>
        </div>

        <!-- TL;DR Executive Summary Block -->
        <div class="bg-purple-50/80 border border-purple-200 rounded-xl p-4 flex items-start gap-3 text-xs">
          <div class="p-2 bg-purple-600 text-white rounded-lg shrink-0 mt-0.5">
            <i class="lucide-zap w-4 h-4"></i>
          </div>
          <div class="space-y-1">
            <div class="font-bold text-purple-950 text-xs uppercase tracking-wide">⚡ Tóm Tắt Nhanh Nhịp Đập Bán Hàng 30 Giây (Retail Pulse TL;DR)</div>
            <p class="text-slate-700 leading-relaxed">
              Tổng doanh thu 3 chi nhánh hôm nay đạt <strong class="text-purple-900 font-mono">86,300,000 VNĐ</strong> (tăng <strong class="text-emerald-700">+14.2%</strong> so với cùng kỳ). 
              <strong>Maison Quận 1</strong> dẫn đầu với 28 đơn hàng và két quầy 18.2M VNĐ. <strong>Maison Bình Thạnh</strong> đang có tốc độ bán chậm hơn dự kiến (10 đơn), đề xuất chạy chương trình khuyến mãi Voucher POS tại quầy.
            </p>
          </div>
        </div>

        <!-- Row 1: 4 Key Financial & Inventory Metric Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Metric 1: Revenue -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Doanh thu thuần</span>
              <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <i class="lucide-dollar-sign w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">284.500.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-emerald-600 font-bold">
                <i class="lucide-trending-up w-3.5 h-3.5"></i> +14.2% <span class="text-slate-500 font-normal">so với tháng trước</span>
              </div>
            </div>
          </div>

          <!-- Metric 2: Expenses -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Tổng chi phí OPEX</span>
              <div class="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                <i class="lucide-credit-card w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">162.100.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-red-600 font-bold">
                <i class="lucide-arrow-up-right w-3.5 h-3.5"></i> +22.8% <span class="text-slate-500 font-normal">Ads TikTok & Chi phí kho</span>
              </div>
            </div>
          </div>

          <!-- Metric 3: Gross Profit -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Lợi nhuận gộp</span>
              <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
                <i class="lucide-pie-chart w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-purple-950 font-mono">122.400.000 ₫</div>
              <div class="mt-1 flex items-center gap-1.5 text-xs">
                <span class="text-emerald-600 font-bold">+4.5%</span>
                <span class="px-1.5 py-0.5 rounded bg-slate-100 font-bold text-slate-700">Margin 43.0%</span>
              </div>
            </div>
          </div>

          <!-- Metric 4: Inventory Valuation -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Tồn kho 3 Chi Nhánh</span>
              <div class="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <i class="lucide-package w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">418.900.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-amber-700 font-semibold">
                <i class="lucide-clock w-3.5 h-3.5"></i> 842 mã hàng • 4 mã cận date
              </div>
            </div>
          </div>
        </div>

        <!-- Realtime Store Speed Metric Strip -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <div class="text-slate-600 font-semibold flex items-center gap-1.5">
                <i class="lucide-shopping-cart w-4 h-4 text-emerald-600"></i> Đơn mới 1 giờ qua:
              </div>
              <div class="text-lg font-extrabold text-emerald-800 mt-1">12 đơn hàng</div>
              <div class="text-[11px] text-emerald-700 font-bold mt-0.5">▲ Tăng 20% so với giờ trước</div>
            </div>
            <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <i class="lucide-activity w-5 h-5"></i>
            </div>
          </div>

          <div class="p-3.5 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <div class="text-slate-600 font-semibold flex items-center gap-1.5">
                <i class="lucide-clock w-4 h-4 text-sky-600"></i> Tốc độ bán hàng trung bình:
              </div>
              <div class="text-lg font-extrabold text-sky-900 mt-1">4.5 đơn / giờ</div>
              <div class="text-[11px] text-slate-600 mt-0.5">Dự báo hôm nay đạt ~54 đơn</div>
            </div>
            <div class="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
              <i class="lucide-gauge w-5 h-5"></i>
            </div>
          </div>

          <div class="p-3.5 bg-purple-50 border border-purple-200 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <div class="text-slate-600 font-semibold flex items-center gap-1.5">
                <i class="lucide-credit-card w-4 h-4 text-purple-600"></i> Giá trị 1 đơn (AOV):
              </div>
              <div class="text-lg font-extrabold text-purple-900 mt-1">680,000 VNĐ / đơn</div>
              <div class="text-[11px] text-purple-700 font-semibold mt-0.5">Top 1: Serum Vitamin C FEFO</div>
            </div>
            <div class="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
              <i class="lucide-receipt w-5 h-5"></i>
            </div>
          </div>
        </div>

        <!-- Store Branch Live Table -->
        <div class="o-card p-5 space-y-3">
          <div class="flex items-center justify-between border-b pb-3">
            <h3 class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i class="lucide-store w-4.5 h-4.5 text-[#714B67]"></i> Theo Dõi Chi Tiết 3 Chi Nhánh Cửa Hàng Live
            </h3>
            <span class="px-2.5 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-full">100% KiotViet Sync</span>
          </div>

          <div class="overflow-x-auto border border-slate-200 rounded-lg">
            <table class="w-full text-xs text-left">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-3">Chi Nhánh Cửa Hàng</th>
                  <th class="p-3 text-right">Doanh Thu Hôm Nay</th>
                  <th class="p-3 text-right">Két Quầy POS (Tiền mặt)</th>
                  <th class="p-3 text-center">Số Đơn</th>
                  <th class="p-3 text-center">Trạng Thái Vận Hành</th>
                  <th class="p-3 text-center">Thao Tác Kế Toán</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 font-medium text-slate-800">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-3 font-bold flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Maison Quận 1 (Flagship)
                  </td>
                  <td class="p-3 text-right font-mono font-bold text-purple-900">42,500,000 VNĐ</td>
                  <td class="p-3 text-right font-mono font-bold text-emerald-800">18,200,000 VNĐ</td>
                  <td class="p-3 text-center font-bold">28 đơn</td>
                  <td class="p-3 text-center">
                    <span class="px-2.5 py-1 text-[11px] font-bold bg-emerald-100 text-emerald-800 rounded-md inline-flex items-center gap-1">
                      <i class="lucide-check-circle-2 w-3 h-3"></i> Đang bán tốt
                    </span>
                  </td>
                  <td class="p-3 text-center">
                    <button onclick="Zone0Shell.openFinancialConfirm('Chốt Tiền Két Quầy Q.1', '<p class=\"text-xs text-slate-600\">Xác nhận đối soát 18,200,000 VNĐ tiền mặt két POS Quận 1 nộp về ngân hàng.</p>', 'Xác Nhận Nộp Tiền', () => alert('Đã chốt sổ két quầy Q.1!'))" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-semibold text-[11px]">Chốt Két</button>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-3 font-bold flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Maison Thủ Đức
                  </td>
                  <td class="p-3 text-right font-mono font-bold text-purple-900">28,000,000 VNĐ</td>
                  <td class="p-3 text-right font-mono font-bold text-emerald-800">11,500,000 VNĐ</td>
                  <td class="p-3 text-center font-bold">18 đơn</td>
                  <td class="p-3 text-center">
                    <span class="px-2.5 py-1 text-[11px] font-bold bg-emerald-100 text-emerald-800 rounded-md inline-flex items-center gap-1">
                      <i class="lucide-check-circle-2 w-3 h-3"></i> Đang bán tốt
                    </span>
                  </td>
                  <td class="p-3 text-center">
                    <button onclick="Zone0Shell.openFinancialConfirm('Chốt Tiền Két Quầy Thủ Đức', '<p class=\"text-xs text-slate-600\">Xác nhận đối soát 11,500,000 VNĐ tiền mặt két POS Thủ Đức nộp về ngân hàng.</p>', 'Xác Nhận Nộp Tiền', () => alert('Đã chốt sổ két quầy Thủ Đức!'))" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-semibold text-[11px]">Chốt Két</button>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-3 font-bold flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Maison Bình Thạnh
                  </td>
                  <td class="p-3 text-right font-mono font-bold text-purple-900">15,800,000 VNĐ</td>
                  <td class="p-3 text-right font-mono font-bold text-emerald-800">6,000,000 VNĐ</td>
                  <td class="p-3 text-center font-bold">10 đơn</td>
                  <td class="p-3 text-center">
                    <span class="px-2.5 py-1 text-[11px] font-bold bg-amber-100 text-amber-800 rounded-md inline-flex items-center gap-1">
                      <i class="lucide-alert-triangle w-3 h-3"></i> Tốc độ chậm
                    </span>
                  </td>
                  <td class="p-3 text-center">
                    <button onclick="Zone0Shell.openFinancialConfirm('Kích Hoạt Flash Sale Tăng Tốc Bình Thạnh', '<p class=\"text-xs text-slate-600\">Tạo Voucher POS giảm 10% cho khách mua trực tiếp tại quầy Bình Thạnh trong 3 giờ tới.</p>', 'Kích Hoạt Flash Sale', () => alert('Đã tạo Flash Sale Bình Thạnh!'))" class="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded font-bold text-[11px]">Tăng Tốc</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
          <button onclick="Zone5AI.switchAIAdvisorSubTab('advisor_lab')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'advisor_lab' ? 'bg-indigo-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-bot w-3.5 h-3.5"></i> 1. AI Business Advisor Workspace (BO-11)
          </button>
          <button onclick="Zone5AI.switchAIAdvisorSubTab('anomaly_center')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'anomaly_center' ? 'bg-indigo-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-alert-triangle w-3.5 h-3.5"></i> 2. AI Anomaly Alert Center (BO-08)
          </button>
          <button onclick="Zone5AI.switchAIAdvisorSubTab('demand_forecast')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'demand_forecast' ? 'bg-indigo-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-trending-up w-3.5 h-3.5"></i> 3. AI Demand Forecasting & PO Suggestion (BO-09)
          </button>
          <button onclick="Zone5AI.switchAIAdvisorSubTab('whatif_lab')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'whatif_lab' ? 'bg-indigo-800 text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-flask-conical w-3.5 h-3.5"></i> 4. What-If Scenario Lab & Liquidity Stress Test (BO-10)
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
    const activeSidebarTab = MockData.subTabs.sidebarTab || 'chat_history';

    return `
      <div class="o-card p-0 overflow-hidden border border-slate-200 rounded-xl shadow-md bg-white">
        <!-- Data Trust & Source Verification Indicator Banner (Point 5 End-User) -->
        <div class="px-4 py-2 bg-emerald-50/90 border-b border-emerald-200 text-xs text-emerald-950 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div class="flex items-center gap-2">
            <i class="lucide-shield-check w-4 h-4 text-emerald-600 shrink-0"></i>
            <span><strong>NGUỒN DỮ LIỆU ĐÃ XÁC THỰC:</strong> Kết nối trực tiếp 100% Realtime từ KiotViet POS & CSDL Lô Kho FEFO</span>
          </div>
          <div class="flex items-center gap-3 text-[11px]">
            <span class="bg-emerald-200/80 px-2 py-0.5 rounded font-bold text-emerald-900">Độ tin cậy AI Engine: 98.4%</span>
            <span class="text-slate-500">Đồng bộ vừa xong (2 phút trước)</span>
          </div>
        </div>

        <!-- Main Dual-Column AI Copilot Workspace Container -->
        <div class="flex flex-col lg:flex-row h-[calc(100vh-16rem)] min-h-[600px]">
          
          <!-- LEFT SIDEBAR: SESSION LIST, TASKS & SMART PROMPT LIBRARY -->
          <aside class="w-full lg:w-80 border-r border-slate-200 bg-slate-50 flex flex-col justify-between shrink-0">
            <div class="flex flex-col h-full overflow-hidden">
              <!-- Sidebar Header -->
              <div class="p-3.5 border-b border-slate-200 space-y-2 bg-white">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-[#714B67] text-white flex items-center justify-center font-bold shadow-xs text-xs">
                      <i class="lucide-bot w-4 h-4 text-teal-300"></i>
                    </div>
                    <h2 class="font-bold text-xs text-slate-800 tracking-tight">Trợ Lý Copilot ERP</h2>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">Live v4.2</span>
                </div>
                
                <button onclick="Zone0Shell.sendPrompt('Tạo cuộc trò chuyện mới')" class="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#714B67] hover:bg-[#5b3b53] text-white font-bold text-xs transition shadow-sm">
                  <i class="lucide-plus-circle w-3.5 h-3.5"></i>
                  <span>Cuộc trò chuyện mới</span>
                </button>

                <!-- Sidebar Functional Tabs: (Lịch sử Chat vs Task Cần Làm - Point 4 End-User) -->
                <div class="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-[10px] font-bold">
                  <button onclick="Zone5AI.switchSidebarTab('chat_history')" class="flex-1 py-1 px-1.5 rounded transition ${activeSidebarTab === 'chat_history' ? 'bg-[#714B67] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">💬 1. Lịch Sử Chat</button>
                  <button onclick="Zone5AI.switchSidebarTab('tasks')" class="flex-1 py-1 px-1.5 rounded transition ${activeSidebarTab === 'tasks' ? 'bg-[#714B67] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">📋 2. Task Cần Làm (3)</button>
                </div>
              </div>

              <!-- Sidebar Content Body -->
              <div class="flex-1 overflow-y-auto p-2 space-y-1.5">
                ${activeSidebarTab === 'chat_history' ? `
                  <!-- Session 1 (Active) -->
                  <div class="p-3 rounded-xl bg-purple-50/80 border border-purple-200 text-slate-800 cursor-pointer shadow-xs relative">
                    <div class="absolute left-0 top-3 bottom-3 w-1 bg-[#714B67] rounded-r-full"></div>
                    <div class="flex items-start justify-between gap-1 mb-1 pl-1">
                      <span class="font-bold text-xs text-purple-950 truncate flex items-center gap-1">
                        <i class="lucide-trending-down w-3.5 h-3.5 text-red-600"></i> Doanh thu tuần 42 giảm 12%
                      </span>
                      <span class="px-1.5 py-0.2 text-[9px] font-bold bg-purple-200 text-purple-900 rounded shrink-0">Đang xem</span>
                    </div>
                    <p class="text-[11px] text-slate-600 line-clamp-2 pl-1 font-normal">Phân tích đứt hàng Serum B5 và chiết khấu sàn Shopee Q1...</p>
                    <div class="flex items-center justify-between mt-2 pl-1 text-[10px] text-slate-400">
                      <span>Hôm nay, 09:42</span>
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-300">3 đề xuất AI</span>
                    </div>
                  </div>

                  <!-- Session 2 -->
                  <div onclick="Zone0Shell.sendPrompt('Đề xuất nhập Serum B5 cuối năm')" class="p-3 rounded-xl hover:bg-slate-100 text-slate-700 cursor-pointer transition-colors group border border-transparent hover:border-slate-200">
                    <div class="flex items-start justify-between gap-1 mb-1">
                      <span class="font-semibold text-xs text-slate-800 truncate flex items-center gap-1 group-hover:text-purple-900">
                        <i class="lucide-boxes w-3.5 h-3.5 text-slate-400 group-hover:text-purple-700"></i> Đề xuất nhập Serum B5 cuối năm
                      </span>
                    </div>
                    <p class="text-[11px] text-slate-500 line-clamp-1 font-normal">Mô phỏng nhu cầu tồn kho an toàn cho 45 ngày Tết...</p>
                    <div class="flex items-center justify-between mt-2 text-[10px]">
                      <span class="text-slate-400">2 ngày trước</span>
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Đã duyệt PO</span>
                    </div>
                  </div>

                  <!-- Session 3 -->
                  <div onclick="Zone0Shell.sendPrompt('Hiệu quả TikTok Ads Váy Maxi')" class="p-3 rounded-xl hover:bg-slate-100 text-slate-700 cursor-pointer transition-colors group border border-transparent hover:border-slate-200">
                    <div class="flex items-start justify-between gap-1 mb-1">
                      <span class="font-semibold text-xs text-slate-800 truncate flex items-center gap-1 group-hover:text-purple-900">
                        <i class="lucide-megaphone w-3.5 h-3.5 text-slate-400 group-hover:text-purple-700"></i> Hiệu quả TikTok Ads Váy Maxi
                      </span>
                    </div>
                    <p class="text-[11px] text-slate-500 line-clamp-1 font-normal">ROAS giảm từ 3.8 xuống 2.1 do tỷ lệ hoàn COD...</p>
                    <div class="flex items-center justify-between mt-2 text-[10px]">
                      <span class="text-slate-400">5 ngày trước</span>
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-200 text-slate-700">14 tin nhắn</span>
                    </div>
                  </div>

                  <!-- Session 4 -->
                  <div onclick="Zone0Shell.sendPrompt('12 sản phẩm tồn kho > 90 ngày')" class="p-3 rounded-xl hover:bg-slate-100 text-slate-700 cursor-pointer transition-colors group border border-transparent hover:border-slate-200">
                    <div class="flex items-start justify-between gap-1 mb-1">
                      <span class="font-semibold text-xs text-slate-800 truncate flex items-center gap-1 group-hover:text-purple-900">
                        <i class="lucide-alert-circle w-3.5 h-3.5 text-red-500"></i> 12 sản phẩm tồn kho > 90 ngày
                      </span>
                    </div>
                    <p class="text-[11px] text-slate-500 line-clamp-1 font-normal">Danh mục Son kem lì Merzy và phấn phủ kiểm dầu...</p>
                    <div class="flex items-center justify-between mt-2 text-[10px]">
                      <span class="text-slate-400">1 tuần trước</span>
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-300">Cần xả hàng</span>
                    </div>
                  </div>
                ` : `
                  <!-- Tasks View (Tab 2) -->
                  <div class="p-3 bg-red-50 border border-red-200 rounded-xl space-y-1 text-xs">
                    <div class="flex items-center justify-between font-bold text-red-800">
                      <span>⚡ 1. Duyệt đơn PO Serum B5</span>
                      <span class="px-1.5 py-0.5 bg-red-200 text-red-900 rounded text-[9px]">P1 - 24h</span>
                    </div>
                    <p class="text-[11px] text-slate-600 font-normal">Chi phí 12.5M - Cần duyệt PO để tránh hụt hàng tuần tới.</p>
                  </div>
                  <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1 text-xs">
                    <div class="flex items-center justify-between font-bold text-amber-800">
                      <span>⚠️ 2. Kích hoạt KM xả hàng FEFO</span>
                      <span class="px-1.5 py-0.5 bg-amber-200 text-amber-900 rounded text-[9px]">P2 - 3 ngày</span>
                    </div>
                    <p class="text-[11px] text-slate-600 font-normal">45 hộp cận hạn 53 ngày - Giảm giá 25% thu hồi vốn.</p>
                  </div>
                  <div class="p-3 bg-sky-50 border border-sky-200 rounded-xl space-y-1 text-xs">
                    <div class="flex items-center justify-between font-bold text-sky-800">
                      <span>🔍 3. Đối soát ví Shopee đợt 15-20/09</span>
                      <span class="px-1.5 py-0.5 bg-sky-200 text-sky-900 rounded text-[9px]">P3 - Thường</span>
                    </div>
                    <p class="text-[11px] text-slate-600 font-normal">Chênh lệch chiết khấu sàn 420.000 VNĐ cần xác nhận.</p>
                  </div>
                `}
              </div>

              <!-- Smart Prompts Library Footer -->
              <div class="p-3 bg-white border-t border-slate-200 space-y-1.5">
                <div class="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  <span class="flex items-center gap-1"><i class="lucide-sparkles w-3.5 h-3.5 text-amber-500"></i> Mẫu câu hỏi thông minh</span>
                  <span class="text-purple-700 cursor-pointer hover:underline">Tất cả (18)</span>
                </div>
                <div class="space-y-1 text-xs">
                  <button onclick="Zone0Shell.sendPrompt('Tại sao chi phí marketing tuần này vượt trần?')" class="w-full text-left p-1.5 rounded bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-slate-200 transition text-[11px] truncate flex items-center justify-between">
                    <span>Tại sao chi phí marketing vượt trần?</span>
                    <i class="lucide-arrow-right w-3 h-3 text-slate-400"></i>
                  </button>
                  <button onclick="Zone0Shell.sendPrompt('Sản phẩm nào có biên lợi nhuận cao nhất?')" class="w-full text-left p-1.5 rounded bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-slate-200 transition text-[11px] truncate flex items-center justify-between">
                    <span>Sản phẩm nào có biên lợi nhuận cao nhất?</span>
                    <i class="lucide-arrow-right w-3 h-3 text-slate-400"></i>
                  </button>
                  <button onclick="Zone0Shell.sendPrompt('Dự báo tồn kho an toàn cho 45 ngày Tết?')" class="w-full text-left p-1.5 rounded bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-900 border border-slate-200 transition text-[11px] truncate flex items-center justify-between">
                    <span>Dự báo tồn kho an toàn 45 ngày Tết?</span>
                    <i class="lucide-arrow-right w-3 h-3 text-slate-400"></i>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <!-- RIGHT CENTER AREA: MAIN DIALOGUE THREAD & DECISION CANVAS -->
          <section class="flex-1 flex flex-col h-full bg-slate-50/50 overflow-hidden relative">
            <!-- Canvas Header -->
            <div class="p-3.5 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-xs">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-[#714B67] text-white flex items-center justify-center font-bold shadow-sm">
                  <i class="lucide-brain w-5 h-5 text-teal-300"></i>
                </div>
                <div>
                  <h1 class="font-bold text-sm text-slate-900">ABC Copilot — Trợ lý Ra Quyết Định Kinh Doanh</h1>
                  <span class="text-[11px] text-slate-500">Maison de Bloom • Chi nhánh Q.1, TP.HCM</span>
                </div>
              </div>

              <!-- Top Action Buttons (Semantic Colors: Sky blue for information/PDF export) -->
              <div class="flex items-center gap-2 text-xs font-semibold">
                <button onclick="alert('Đã xuất báo cáo phân tích AI dạng PDF!')" class="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 transition flex items-center gap-1.5 border border-sky-200">
                  <i class="lucide-file-text w-3.5 h-3.5 text-sky-600"></i> Xuất Báo Cáo PDF
                </button>
                <button onclick="alert('Đã gửi thông báo cảnh báo tới kênh Zalo Quản lý!')" class="px-3 py-1.5 rounded-lg bg-[#714B67] hover:bg-[#5b3b53] text-white transition shadow-xs flex items-center gap-1.5 font-bold">
                  <i class="lucide-send w-3.5 h-3.5"></i> Gửi Zalo Quản Lý
                </button>
              </div>
            </div>

            <!-- Main Conversation Chat Messages (With Flex-1 & Overflow Padding fix - Point 3 & 6 UI) -->
            <div id="workspace-chat-body" class="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 text-xs max-h-[calc(100vh-20rem)] pb-10">
              
              <!-- USER MESSAGE 1 -->
              <div class="flex items-start justify-end gap-3">
                <div class="bg-[#714B67] text-white p-3.5 rounded-2xl rounded-tr-none max-w-2xl leading-relaxed shadow-sm font-normal">
                  Cho tôi xem phân tích chi tiết tại sao doanh thu tuần 42 giảm 12% ở chi nhánh Q.1 và nguyên nhân chính là gì?
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  BO
                </div>
              </div>

              <!-- AI RESPONSE 1 WITH TL;DR SUMMARY, STAT CARDS & CONFIRMATION MODAL TRIGGERS -->
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-800 border border-purple-200 flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  AI
                </div>
                <div class="bg-white p-4 md:p-5 rounded-2xl rounded-tl-none border border-slate-200 text-slate-800 max-w-3xl space-y-4 shadow-sm">
                  
                  <!-- 1. Executive TL;DR 30-Second Summary (Point 1 End-User) -->
                  <div class="p-3 bg-red-50 border-l-4 border-red-600 rounded-r-xl space-y-1">
                    <div class="font-bold text-xs text-red-900 flex items-center gap-1.5">
                      <i class="lucide-alert-triangle w-4 h-4 text-red-600"></i> ⚡ TÓM TẮT BÁO CÁO NHANH (TL;DR 30 GIÂY)
                    </div>
                    <p class="text-xs text-slate-700 font-normal">
                      Phát hiện 2 sự cố tài chính cần quyết định xử lý hôm nay: <strong>Đứt hàng Serum B5</strong> (thất thoát 12.4M) & <strong>Lô mỹ phẩm cận hạn 53 ngày</strong> (chôn 14.4M vốn).
                    </p>
                  </div>

                  <!-- 2. Visual Hierarchy Stat Cards (Point 2 UI Designer) -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div class="p-3 bg-red-50/70 border border-red-200 rounded-xl">
                      <div class="text-[10px] font-bold text-red-700 uppercase tracking-wide">Tác Động Doanh Thu</div>
                      <div class="text-lg font-extrabold text-red-700 font-mono mt-0.5">-18.5 Triệu VNĐ</div>
                      <div class="text-[10px] text-slate-500 mt-0.5">Giảm 12% so với tuần 41</div>
                    </div>

                    <div class="p-3 bg-purple-50/70 border border-purple-200 rounded-xl">
                      <div class="text-[10px] font-bold text-purple-800 uppercase tracking-wide">Doanh Thu Mất Do Đứt Hàng</div>
                      <div class="text-lg font-extrabold text-purple-900 font-mono mt-0.5">12.4 Triệu VNĐ</div>
                      <div class="text-[10px] text-slate-500 mt-0.5">Tồn kho còn 8 hộp ở Q1</div>
                    </div>

                    <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-xl">
                      <div class="text-[10px] font-bold text-amber-800 uppercase tracking-wide">Vốn Lô Cận Hạn FEFO</div>
                      <div class="text-lg font-extrabold text-amber-900 font-mono mt-0.5">14.4 Triệu VNĐ</div>
                      <div class="text-[10px] text-slate-500 mt-0.5">45 hộp còn 53 ngày hết hạn</div>
                    </div>
                  </div>

                  <!-- Text Explanation (Restrained bold - Point 5 UI) -->
                  <p class="leading-relaxed text-slate-700 font-normal">
                    Qua đối soát realtime từ KiotViet POS & sàn Shopee, doanh thu giảm 12% chủ yếu do kho Q1 đứt hàng sản phẩm chủ lực Serum B5 và tỷ lệ chiết khấu sàn Shopee tăng 3.2% đợt giữa tháng.
                  </p>

                  <!-- 3. Semantic Priority Action Card 1 (Red = P1 Urgent Financial Action) -->
                  <div class="p-3.5 bg-red-50/50 border border-red-200 rounded-xl space-y-2.5">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <span class="font-bold text-xs text-red-950 flex items-center gap-1.5">
                        <i class="lucide-box w-4 h-4 text-red-600"></i> ĐỀ XUẤT 1: Tạo Đơn PO Nhập Kho Bổ Sung FEFO Khẩn Cấp
                      </span>
                      <!-- Priority Badge (Point 3 End-User & Semantic Colors) -->
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-300 flex items-center gap-1">
                        <i class="lucide-flame w-3 h-3 text-red-600"></i> P1 — KHẨN CẤP (Xử lý trong 24h)
                      </span>
                    </div>
                    
                    <p class="text-[11px] text-slate-600 font-normal">
                      Đề xuất mua khẩn 50 hộp Serum B5 từ NCC Mỹ Phẩm Viễn Đông để phục vụ đợt cao điểm bán hàng cuối tháng.
                    </p>

                    <div class="flex items-center justify-between pt-1 border-t border-red-200/60 text-[11px] flex-wrap gap-2">
                      <span class="text-slate-600">Giá trị đơn PO: <strong class="text-slate-900 font-mono font-bold">12,500,000 VNĐ</strong> (Net 30)</span>
                      
                      <!-- Financial Confirmation Step Trigger (Point 2 End-User) -->
                      <button onclick="Zone0Shell.openFinancialConfirm('Xác Nhận Tạo Đơn Mua PO 12.5M VNĐ', '<div class=\'space-y-2 text-xs\'><div class=\'p-3 bg-purple-50 rounded-lg border border-purple-200 space-y-1\'><div><strong>Sản phẩm:</strong> Serum Dưỡng Trắng Vitamin C 30ml</div><div><strong>Số lượng nhập:</strong> 50 hộp</div><div><strong>Nhà cung cấp:</strong> Mỹ Phẩm Viễn Đông</div><div><strong>Tổng số tiền:</strong> <span class=\'text-purple-900 font-extrabold text-sm font-mono\'>12,500,000 VNĐ</span></div><div><strong>Hạn thanh toán:</strong> Công nợ Net 30 ngày (Không âm dòng tiền ngay)</div></div></div>', 'Cấp Phép Tạo Đơn PO 12.5M', function() { App.navigateTo('inventory'); })" class="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition shadow-xs flex items-center gap-1">
                        <i class="lucide-plus-circle w-3.5 h-3.5"></i> Tạo PO Nhập Kho Khẩn Cấp →
                      </button>
                    </div>
                  </div>

                  <!-- 4. Semantic Priority Action Card 2 (Amber = P2 Medium Priority Action) -->
                  <div class="p-3.5 bg-amber-50/50 border border-amber-200 rounded-xl space-y-2.5">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <span class="font-bold text-xs text-amber-950 flex items-center gap-1.5">
                        <i class="lucide-zap w-4 h-4 text-amber-600"></i> ĐỀ XUẤT 2: Kích Hoạt KM Xả Hàng Lô FEFO Cận Hạn LOT-202608-A
                      </span>
                      <!-- Priority Badge (Point 3 End-User & Semantic Colors) -->
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
                        <i class="lucide-clock w-3 h-3 text-amber-600"></i> P2 — ƯU TIÊN (Xử lý trong 3 ngày)
                      </span>
                    </div>

                    <p class="text-[11px] text-slate-600 font-normal">
                      45 hộp Vitamin C còn 53 ngày hết hạn tại Kho Q1. Đề xuất tạo Flash Sale giảm 25% thu hồi vốn.
                    </p>

                    <div class="flex items-center justify-between pt-1 border-t border-amber-200/60 text-[11px] flex-wrap gap-2">
                      <span class="text-slate-600">Dự kiến thu hồi vốn: <strong class="text-emerald-700 font-mono font-bold">14,400,000 VNĐ</strong></span>

                      <!-- Financial Confirmation Step Trigger (Point 2 End-User) -->
                      <button onclick="Zone0Shell.openFinancialConfirm('Xác Nhận Kích Hoạt CTKM Giảm Giá 25%', '<div class=\'space-y-2 text-xs\'><div class=\'p-3 bg-amber-50 rounded-lg border border-amber-200 space-y-1\'><div><strong>Lô áp dụng:</strong> LOT-202608-A (Hạn 15/11/2026 - Còn 53 ngày)</div><div><strong>Mức giảm giá:</strong> 25% trên giá niêm yết</div><div><strong>Số lượng xuất bán:</strong> 45 hộp</div><div><strong>Kênh áp dụng:</strong> POS Cửa hàng Q1 + Sàn Shopee</div><div><strong>Thu hồi vốn dự kiến:</strong> <span class=\'text-emerald-700 font-extrabold text-sm font-mono\'>14,400,000 VNĐ</span></div></div></div>', 'Kích Hoạt Flash Sale Ngay', function() { alert('Đã kích hoạt chương trình Flash Sale xả hàng lô FEFO giảm 25% thành công!'); })" class="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition shadow-xs flex items-center gap-1">
                        <i class="lucide-check-circle-2 w-3.5 h-3.5"></i> Kích Hoạt Flash Sale Ngay
                      </button>
                    </div>
                  </div>

                  <div class="pt-1 flex items-center justify-between border-t border-slate-100 text-[11px]">
                    <button onclick="Zone0Shell.showEvidenceModal()" class="text-sky-700 font-bold hover:underline flex items-center gap-1">
                      <i class="lucide-search-code w-3.5 h-3.5 text-sky-600"></i> [ Tra Cứu Chứng Cứ Dữ Liệu Gốc ]
                    </button>
                    <span class="text-slate-400">Thuật toán AI Optimization Engine v4.2</span>
                  </div>
                </div>
              </div>

              <!-- USER MESSAGE 2 -->
              <div class="flex items-start justify-end gap-3">
                <div class="bg-[#714B67] text-white p-3.5 rounded-2xl rounded-tr-none max-w-2xl leading-relaxed shadow-sm font-normal">
                  Nếu tôi duyệt nhập 50 hộp Serum B5 thì dòng tiền thực nhận bỏ túi tháng này có bị ảnh hưởng âm không?
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  BO
                </div>
              </div>

              <!-- AI RESPONSE 2 WITH STAT CARDS & VECTOR ICONS (Point 4 UI Designer) -->
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-800 border border-purple-200 flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  AI
                </div>
                <div class="bg-white p-4 md:p-5 rounded-2xl rounded-tl-none border border-slate-200 text-slate-800 max-w-3xl space-y-3.5 shadow-sm">
                  <p class="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                    <i class="lucide-line-chart w-4 h-4 text-emerald-600"></i> Kết Quả Mô Phỏng Dòng Tiền & Tính Thanh Khoản (What-If Liquidity Test):
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <div class="text-[10px] font-bold text-emerald-800 uppercase">Tăng Lợi Nhuận Ròng Dự Kiến</div>
                      <div class="text-lg font-extrabold text-emerald-700 font-mono mt-0.5">+9.0 Triệu VNĐ</div>
                      <div class="text-[10px] text-slate-500 mt-0.5">Doanh thu mang về +21.5M</div>
                    </div>
                    <div class="p-3 bg-sky-50 border border-sky-200 rounded-xl">
                      <div class="text-[10px] font-bold text-sky-800 uppercase">Tình Trạng Dòng Tiền 14 Ngày</div>
                      <div class="text-lg font-extrabold text-sky-800 font-mono mt-0.5">DƯ DÒNG TIỀN (KHÔNG ÂM)</div>
                      <div class="text-[10px] text-slate-500 mt-0.5">Áp dụng công nợ Net 30 ngày</div>
                    </div>
                  </div>

                  <p class="leading-relaxed text-slate-700 font-normal">
                    Khi nhập 50 hộp Serum B5 (chi phí 12.5M VNĐ), nhờ điều khoản công nợ nhà cung cấp 30 ngày (Net 30), dòng tiền thực nhận trong 14 ngày tới <strong>không bị âm</strong>.
                  </p>

                  <div class="flex items-center gap-2 pt-1">
                    <button onclick="Zone5AI.switchAIAdvisorSubTab('whatif_lab')" class="px-3.5 py-1.5 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg transition text-xs flex items-center gap-1 shadow-xs">
                      <i class="lucide-flask-conical w-3.5 h-3.5"></i> Xem Chi Tiết Lab Mô Phỏng What-If →
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <!-- Bottom Prompt Input & Quick Action Chips (Semantic Colors & Vector Icons) -->
            <div class="p-3.5 bg-white border-t border-slate-200 space-y-2 shrink-0">
              <!-- Quick Action Chips (Point 4 UI Icon Uniformity) -->
              <div class="flex items-center gap-1.5 overflow-x-auto text-[11px] font-semibold text-slate-600 pb-1">
                <span class="text-slate-400 font-bold uppercase text-[10px] shrink-0">Gợi ý nhanh:</span>
                <button onclick="Zone0Shell.sendPrompt('Xả hàng tồn > 90 ngày')" class="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-purple-50 hover:text-purple-900 border border-slate-200 transition shrink-0 flex items-center gap-1">
                  <i class="lucide-flame w-3 h-3 text-red-500"></i> Xả hàng tồn > 90 ngày
                </button>
                <button onclick="Zone0Shell.sendPrompt('Phân tích biên lợi nhuận Shopee')" class="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-purple-50 hover:text-purple-900 border border-slate-200 transition shrink-0 flex items-center gap-1">
                  <i class="lucide-bar-chart-3 w-3 h-3 text-sky-600"></i> Phân tích biên Shopee
                </button>
                <button onclick="Zone0Shell.sendPrompt('Tối ưu chi phí TikTok Ads')" class="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-purple-50 hover:text-purple-900 border border-slate-200 transition shrink-0 flex items-center gap-1">
                  <i class="lucide-target w-3 h-3 text-emerald-600"></i> Tối ưu chi phí TikTok Ads
                </button>
              </div>

              <!-- Input Area -->
              <div class="relative flex items-center">
                <input type="text" id="workspace-chat-input" placeholder="Nhập yêu cầu hỏi AI Copilot (ví dụ: Phân tích hiệu quả kinh doanh tuần này)..." class="w-full pl-4 pr-24 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition" onkeypress="if(event.key==='Enter') Zone0Shell.sendPrompt(this.value)" />
                <button onclick="Zone0Shell.sendPrompt(document.getElementById('workspace-chat-input').value)" class="absolute right-2 px-3 py-1.5 bg-[#714B67] hover:bg-[#593b51] text-white font-bold rounded-lg text-xs transition flex items-center gap-1 shadow-xs">
                  <span>Gửi</span>
                  <i class="lucide-send w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    `;
  },

  renderAnomalyCenter: function() {
    const filterTab = MockData.subTabs.anomalyFilter || 'all';

    return `
      <div class="space-y-6">
        <!-- TOP HERO & RADAR CONTROL BAR (Screen 02 Parity) -->
        <div class="o-card p-5 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white rounded-xl shadow-lg border border-purple-900/50 relative overflow-hidden">
          <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4 relative z-10">
            <div class="space-y-1.5 max-w-3xl">
              <div class="flex flex-wrap items-center gap-2 text-xs">
                <span class="text-teal-300 font-bold flex items-center gap-1">
                  <i class="lucide-brain w-4 h-4 text-teal-300"></i> Trí Tuệ AI Engine v4.2
                </span>
                <span class="text-white/40">•</span>
                <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-[10px] flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Radar Đang Quét (Live Stream 15 phút/lần)
                </span>
              </div>

              <h1 class="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                Trung Tâm AI Insights & Phát Hiện Bất Thường Realtime (BO-08)
              </h1>

              <p class="text-xs text-slate-300 font-normal">
                Thuật toán kép Isolation Forest & Adaptive Z-Score (+/- 3σ) tự động rà soát sai lệch tiền ví TMĐT, đứt hàng FEFO và lãng phí quảng cáo.
              </p>
            </div>

            <!-- Radar Control Action Buttons -->
            <div class="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <button onclick="alert('Đã kích hoạt lượt quét cưỡng bức toàn bộ CSDL!')" class="px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition shadow flex items-center gap-1.5 font-bold">
                <i class="lucide-zap w-4 h-4"></i> Quét Cưỡng Bức Ngay
              </button>
              <button onclick="alert('Đã xuất báo cáo tổng hợp sự cố dạng PDF!')" class="px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition shadow flex items-center gap-1.5 font-bold">
                <i class="lucide-file-text w-4 h-4"></i> Xuất Báo Cáo Sự Cố
              </button>
            </div>
          </div>
        </div>

        <!-- 4 SEVERITY METRICS STAT CARDS (Semantic Colors & Visual Hierarchy - Point 1 & 2 UI) -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <!-- Card 1: Critical (Đỏ P1) -->
          <div class="p-4 rounded-xl bg-white border border-red-200 shadow-sm relative overflow-hidden space-y-2">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-red-600"></div>
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-bold text-[10px] border border-red-300 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-red-600"></span> P1 - KHẨN CẤP
              </span>
              <i class="lucide-alert-triangle w-5 h-5 text-red-600"></i>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-red-700 font-mono">3 Sự Cố</div>
              <div class="text-xs font-bold text-slate-700 mt-0.5">Thất thoát dự kiến: ~42,800,000 VNĐ</div>
            </div>
            <p class="text-[11px] text-slate-500 font-normal line-clamp-2">Lệch tiền ví Shopee Mall, ROAS TikTok Ads giảm & đứt hàng FEFO Q1.</p>
          </div>

          <!-- Card 2: Warning (Cam P2) -->
          <div class="p-4 rounded-xl bg-white border border-amber-200 shadow-sm relative overflow-hidden space-y-2">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-amber-500"></div>
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] border border-amber-300 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span> P2 - CẢNH BÁO
              </span>
              <i class="lucide-clock w-5 h-5 text-amber-600"></i>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-amber-700 font-mono">5 Điểm Lưu Ý</div>
              <div class="text-xs font-bold text-slate-700 mt-0.5">Nguy cơ ảnh hưởng: ~18,500,000 VNĐ</div>
            </div>
            <p class="text-[11px] text-slate-500 font-normal line-clamp-2">Tỷ lệ hoàn bưu phẩm Miền Trung tăng +18% do vận chuyển trễ.</p>
          </div>

          <!-- Card 3: Auto-Resolved (Xanh lá) -->
          <div class="p-4 rounded-xl bg-white border border-emerald-200 shadow-sm relative overflow-hidden space-y-2">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600"></div>
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] border border-emerald-300 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> ĐÃ KHẮC PHỤC
              </span>
              <i class="lucide-check-circle-2 w-5 h-5 text-emerald-600"></i>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-emerald-700 font-mono">12 Đã Xử Lý</div>
              <div class="text-xs font-bold text-slate-700 mt-0.5">Bảo toàn vốn: +31,200,000 VNĐ</div>
            </div>
            <p class="text-[11px] text-slate-500 font-normal line-clamp-2">AI Copilot tự ngắt 2 Adset lãng phí & tự gửi khiếu nại cước sàn.</p>
          </div>

          <!-- Card 4: Health Score (Tím Odoo) -->
          <div class="p-4 rounded-xl bg-white border border-purple-200 shadow-sm relative overflow-hidden space-y-2">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-[#714B67]"></div>
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 font-bold text-[10px] border border-purple-300">
                SỨC KHỎE CHUỖI
              </span>
              <i class="lucide-activity w-5 h-5 text-[#714B67]"></i>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-[#714B67] font-mono">88 / 100</div>
              <div class="text-xs font-bold text-slate-700 mt-0.5">Chỉ số ổn định hệ thống</div>
            </div>
            <p class="text-[11px] text-slate-500 font-normal line-clamp-2">3 cửa hàng đang hoạt động bình thường trên POS KiotViet.</p>
          </div>
        </div>

        <!-- ANOMALY FEED LIST WITH FINANCIAL CONFIRMATION MODAL & EVIDENCE -->
        <div class="o-card p-5 space-y-4">
          <div class="flex items-center justify-between border-b pb-3 flex-wrap gap-2">
            <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
              <i class="lucide-list-checks w-4 h-4 text-[#714B67]"></i> Danh Sách Sự Cố Bất Thường Cần Chủ DN Ra Quyết Định
            </h2>
            <div class="flex items-center gap-1 text-xs font-semibold">
              <button class="px-3 py-1 bg-[#714B67] text-white rounded-lg shadow-xs">Tất cả (8)</button>
              <button class="px-3 py-1 bg-red-100 text-red-800 rounded-lg hover:bg-red-200">🔴 Khẩn cấp (3)</button>
              <button class="px-3 py-1 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200">🟡 Cảnh báo (5)</button>
            </div>
          </div>

          <div class="space-y-3.5">
            <!-- Anomaly Item 1 -->
            <div class="p-4 bg-red-50/40 border border-red-200 rounded-xl space-y-3 shadow-xs">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 bg-red-600 text-white font-bold text-[10px] rounded uppercase">P1 - KHẨN CẤP</span>
                  <h3 class="font-bold text-xs text-red-950">1. Shopee chưa đối soát 14.500.000 VNĐ đợt 15/09 - 20/09</h3>
                </div>
                <span class="text-[11px] font-mono font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">Thất thoát rủi ro: -420.000 VNĐ</span>
              </div>
              <p class="text-xs text-slate-700 font-normal leading-relaxed">
                Hệ thống phát hiện sai lệch chiết khấu sàn 3.2% đối với các đơn hàng mỹ phẩm chạy KM trên Shopee Mall. Tiền chưa về ví doanh nghiệp.
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-red-200/60 text-xs flex-wrap gap-2">
                <button onclick="Zone0Shell.showEvidenceModal()" class="text-sky-700 font-bold hover:underline flex items-center gap-1">
                  <i class="lucide-search-code w-3.5 h-3.5 text-sky-600"></i> [ Xem Bảng Chứng Cứ Đơn Hàng Shopee ]
                </button>
                <button onclick="Zone0Shell.openFinancialConfirm('Xác Nhận Gửi Yêu Cầu Khiếu Nại Shopee', '<div class=\'p-3 bg-purple-50 rounded-lg border border-purple-200 text-xs space-y-1\'><div><strong>Mã đợt đối soát:</strong> #SP-2026-09B</div><div><strong>Số tiền chưa về:</strong> 14,500,000 VNĐ</div><div><strong>Lệch phí sàn:</strong> -420,000 VNĐ</div></div>', 'Gửi Khiếu Nại Sàn Shopee', function() { alert('Đã gửi ticket khiếu nại đối soát tới bộ phận hỗ trợ Shopee Mall thành công!'); })" class="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition shadow-xs flex items-center gap-1">
                  <i class="lucide-send w-3.5 h-3.5"></i> Gửi Khiếu Nại Sàn Ngay →
                </button>
              </div>
            </div>

            <!-- Anomaly Item 2 -->
            <div class="p-4 bg-amber-50/40 border border-amber-200 rounded-xl space-y-3 shadow-xs">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 bg-amber-600 text-white font-bold text-[10px] rounded uppercase">P2 - UUTIÊN 3 NGÀY</span>
                  <h3 class="font-bold text-xs text-amber-950">2. Lô Mỹ phẩm Serum Vitamin C20 (32 hộp) Kho Q1 cận date 45 ngày</h3>
                </div>
                <span class="text-[11px] font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Tồn chôn vốn: 14.400.000 VNĐ</span>
              </div>
              <p class="text-xs text-slate-700 font-normal leading-relaxed">
                Tốc độ bán hiện tại 0.8 hộp/ngày sẽ không tiêu thụ hết trước hạn sử dụng 15/11/2026. Nguy cơ phải hủy hàng lỗ 100%.
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-amber-200/60 text-xs flex-wrap gap-2">
                <button onclick="Zone0Shell.showEvidenceModal()" class="text-sky-700 font-bold hover:underline flex items-center gap-1">
                  <i class="lucide-search-code w-3.5 h-3.5 text-sky-600"></i> [ Tra Cứu Thẻ Lô FEFO Kho Q1 ]
                </button>
                <button onclick="Zone0Shell.openFinancialConfirm('Xác Nhận Tạo CTKM Flash Sale Giảm 30%', '<div class=\'p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs space-y-1\'><div><strong>Sản phẩm:</strong> Serum Vitamin C20 30ml</div><div><strong>Số lượng:</strong> 32 hộp</div><div><strong>Mức giảm giá:</strong> 30%</div><div><strong>Dự kiến thu hồi vốn:</strong> 10,080,000 VNĐ</div></div>', 'Kích Hoạt Flash Sale Xả Hàng', function() { alert('Đã kích hoạt Flash Sale giảm 30% thành công!'); })" class="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition shadow-xs flex items-center gap-1">
                  <i class="lucide-tag w-3.5 h-3.5"></i> Tạo CTKM Xả Hàng Giảm 30% →
                </button>
              </div>
            </div>

            <!-- Anomaly Item 3 -->
            <div class="p-4 bg-sky-50/40 border border-sky-200 rounded-xl space-y-3 shadow-xs">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 bg-sky-600 text-white font-bold text-[10px] rounded uppercase">VẬN CHUYỂN</span>
                  <h3 class="font-bold text-xs text-sky-950">3. Chi nhánh Thủ Đức có 6 đơn hàng giao chậm trễ > 48h</h3>
                </div>
                <span class="text-[11px] font-mono font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">Giá trị đơn treo: 5.800.000 VNĐ</span>
              </div>
              <p class="text-xs text-slate-700 font-normal leading-relaxed">
                Tỷ lệ hoàn đơn tại chi nhánh Thủ Đức tăng 4.2% do đơn vị giao vận NinjaVan chậm lấy hàng đợt mưa lớn.
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-sky-200/60 text-xs flex-wrap gap-2">
                <button onclick="App.navigateTo('sales')" class="text-sky-700 font-bold hover:underline flex items-center gap-1">
                  <i class="lucide-truck w-3.5 h-3.5 text-sky-600"></i> [ Kiểm Tra Vận Đơn Khách Hàng ]
                </button>
                <button onclick="alert('Đã gửi yêu cầu hỏa tốc chuyển đổi đơn vị giao vận cho 6 đơn treo!')" class="px-3.5 py-1.5 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg transition shadow-xs flex items-center gap-1">
                  <i class="lucide-refresh-cw w-3.5 h-3.5"></i> Đổi Đơn Vị Giao Vận Hỏa Tốc →
                </button>
              </div>
            </div>
          </div>
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
  },

  switchSidebarTab: function(tabKey) {
    MockData.subTabs.sidebarTab = tabKey;
    App.render();
  }
};
