/* ==========================================================================
   ZONE 2: BO MODULE - INVENTORY, PRODUCTS & PURCHASING (PARITY COMPLETE)
   ========================================================================== */

const Zone2Inventory = {
  render: function() {
    const activeSubTab = MockData.subTabs.inventory || 'variants_fefo';

    return `
      <div class="space-y-6">
        <!-- Sub-navigation Tabs for 100% 54-Screen Coverage -->
        <div class="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-semibold text-slate-600">
          <button onclick="Zone2Inventory.switchSubTab('variants_fefo')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'variants_fefo' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-sparkles w-3.5 h-3.5"></i> 1. Hạn Sử Dụng & Vị Trí Kệ Mỹ Phẩm (FEFO)
          </button>
          <button onclick="Zone2Inventory.switchSubTab('stock_moves')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'stock_moves' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-package-search w-3.5 h-3.5"></i> 2. Nhật Ký Xuất Nhập Tồn
          </button>
          <button onclick="Zone2Inventory.switchSubTab('po_drafts')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'po_drafts' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-file-text w-3.5 h-3.5"></i> 3. Gợi Ý Nhập Hàng Tự Động & Đặt Hàng PO
          </button>
          <button onclick="Zone2Inventory.switchSubTab('suppliers')" class="px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${activeSubTab === 'suppliers' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            <i class="lucide-factory w-3.5 h-3.5"></i> 4. Nhà Cung Cấp & Công Nợ Quá Hạn
          </button>
        </div>

        <!-- Stock KPI Overview Header -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="o-card p-4">
            <div class="text-[11px] font-semibold text-slate-500">Tổng Giá Trị Tồn Kho</div>
            <div class="text-lg font-bold text-slate-800">142,500,000 VNĐ</div>
            <div class="text-[10px] text-emerald-600 font-semibold mt-1">4 Mã hàng chính</div>
          </div>
          <div class="o-card p-4">
            <div class="text-[11px] font-semibold text-slate-500">Sản phẩm dưới Ngưỡng tồn</div>
            <div class="text-lg font-bold text-amber-600">1 Mã hàng</div>
            <div class="text-[10px] text-amber-700 font-semibold mt-1">Kem Chống Nắng (Còn 18 tuýp)</div>
          </div>
          <div class="o-card p-4">
            <div class="text-[11px] font-semibold text-slate-500">Lô Mỹ phẩm FEFO Cận Hạn</div>
            <div class="text-lg font-bold text-red-600">2 Lô hàng</div>
            <div class="text-[10px] text-red-600 font-semibold mt-1">Hạn dùng < 60 ngày</div>
          </div>
          <div class="o-card p-4">
            <div class="text-[11px] font-semibold text-slate-500">Đơn PO Draft Đang Chờ Duyệt</div>
            <div class="text-lg font-bold text-purple-700">2 Đơn mua</div>
            <div class="text-[10px] text-purple-600 font-semibold mt-1">Tổng tiền: 42,000,000 VNĐ</div>
          </div>
        </div>

        <!-- Dynamic Render based on Active Sub-tab -->
        ${activeSubTab === 'variants_fefo' ? this.renderVariantsFEFO() : ''}
        ${activeSubTab === 'stock_moves' ? this.renderStockMoves() : ''}
        ${activeSubTab === 'po_drafts' ? this.renderPODrafts() : ''}
        ${activeSubTab === 'suppliers' ? this.renderSuppliers() : ''}

        <!-- Wizard Modal Nhập kho Lô FEFO 3 bước -->
        <div id="intake-wizard-modal" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-xl text-slate-800 overflow-hidden" onclick="event.stopPropagation()">
            <div class="bg-[#714B67] text-white p-4 flex items-center justify-between">
              <h3 class="font-bold text-sm">Wizard Nhập kho Khởi tạo Lô Date PO (3 Bước)</h3>
              <button onclick="Zone2Inventory.closeIntakeWizard()" class="text-white/80 hover:text-white"><i class="lucide-x w-5 h-5"></i></button>
            </div>
            
            <div class="flex border-b border-slate-200 bg-slate-100">
              <div class="statusbar-step active flex-1 text-center">1. Chọn PO & NCC</div>
              <div class="statusbar-step flex-1 text-center">2. Nhập Lô & HSD FEFO</div>
              <div class="statusbar-step flex-1 text-center">3. Vị trí Kho & Duyệt</div>
            </div>

            <div class="p-5 space-y-4 text-xs">
              <div class="space-y-1">
                <label class="font-bold text-slate-700">Nhà cung cấp & Đơn mua PO:</label>
                <select class="w-full p-2 border border-slate-300 rounded text-xs">
                  <option>PO-2026-004 - Dược Mỹ phẩm Blossom Korea (Serum Vitamin C)</option>
                  <option>PO-2026-005 - Công ty Dệt may Silk Viet (Áo Sơ mi)</option>
                </select>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="space-y-1">
                  <label class="font-bold text-slate-700">Mã Lô Hàng (Lot No):</label>
                  <input type="text" value="LOT-202610-NEW" class="w-full p-2 border border-slate-300 rounded font-mono text-xs" />
                </div>
                <div class="space-y-1">
                  <label class="font-bold text-slate-700">Hạn Sử Dụng (EXP Date):</label>
                  <input type="date" value="2027-09-30" class="w-full p-2 border border-slate-300 rounded text-xs" />
                </div>
              </div>

              <div class="space-y-1">
                <label class="font-bold text-slate-700">Số lượng thực nhập:</label>
                <input type="number" value="100" class="w-full p-2 border border-slate-300 rounded font-bold text-xs" />
              </div>
            </div>

            <div class="p-4 bg-slate-50 border-t flex justify-end gap-2">
              <button onclick="Zone2Inventory.closeIntakeWizard()" class="px-4 py-2 text-xs font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300">Hủy bỏ</button>
              <button onclick="Zone2Inventory.confirmIntake()" class="px-4 py-2 text-xs font-semibold bg-emerald-700 text-white rounded hover:bg-emerald-800 shadow">XÁC NHẬN NHẬP KHO FEFO →</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Sub-tab 1: BO-03 Variants & FEFO Product Price Management
  renderVariantsFEFO: function() {
    return `
      <div class="space-y-6">
        <!-- Top Control Bar BO-03 -->
        <div class="o-card p-5 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wide">BO-03: Catalog & Price Engine</span>
              <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <i class="lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400"></i> Auto-Sync FIFO & FEFO Strict Rules
              </span>
            </div>
            <h1 class="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Quản Lý Sản Phẩm & Bảng Giá Mỹ Phẩm FEFO
            </h1>
            <p class="text-xs text-slate-300">Phân loại danh mục, giá vốn COGS, giá bán niêm yết và theo dõi biên lợi nhuận gộp từng SKU real-time.</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button onclick="alert('Đã xuất file Excel bảng giá toàn bộ SKU!')" class="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition">
              <i class="lucide-download w-4 h-4 text-sky-400"></i> Xuất Bảng Giá (.XLSX)
            </button>
            <button onclick="Zone2Inventory.openIntakeWizard()" class="px-4 py-2 bg-[#714B67] hover:bg-purple-900 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-md transition">
              <i class="lucide-plus-circle w-4 h-4 text-amber-300"></i> + Thêm Sản Phẩm / Lô FEFO
            </button>
          </div>
        </div>

        <!-- 4 KPI Hero Metrics -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- KPI 1 -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tổng SKU Đang Kinh Doanh</span>
              <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
                <i class="lucide-package w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">142 SKU</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-slate-600 font-medium">
                98 sản phẩm gốc • 44 biến thể Size/Màu
              </div>
            </div>
          </div>

          <!-- KPI 2 -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Biên Lợi Nhuận Gộp TB</span>
              <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <i class="lucide-trending-up w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-emerald-800 font-mono">47.45% Margin</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-emerald-600 font-bold">
                <i class="lucide-check-circle-2 w-3.5 h-3.5"></i> Vượt mục tiêu tối thiểu (45.0%)
              </div>
            </div>
          </div>

          <!-- KPI 3 -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tổng Giá Trị Niêm Yết</span>
              <div class="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <i class="lucide-dollar-sign w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">2.450.000.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-slate-600 font-medium">
                Giá vốn COGS: <strong class="text-slate-900">~1.287 Tỷ ₫</strong>
              </div>
            </div>
          </div>

          <!-- KPI 4 -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-amber-700 uppercase tracking-wide">Sắp Hết Tồn / Cận Date</span>
              <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <i class="lucide-alert-triangle w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-amber-800 font-mono">6 SKU Báo Động</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-amber-700 font-semibold">
                <i class="lucide-clock w-3.5 h-3.5"></i> 4 mã có nguy cơ đứt hàng
              </div>
            </div>
          </div>
        </div>

        <!-- Product Cards Grid with FEFO Batches & Variants -->
        <div class="o-card p-5 space-y-4">
          <div class="flex items-center justify-between border-b pb-3">
            <h3 class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i class="lucide-boxes w-4.5 h-4.5 text-[#714B67]"></i> Ma Trận Sản Phẩm Mỹ Phẩm FEFO & Thời Trang
            </h3>
            <span class="px-2.5 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-full">FEFO Strict Tracking</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${MockData.products.map(p => `
              <div class="border border-slate-200 rounded-xl p-4 bg-white hover:shadow-md transition flex gap-4">
                <img src="${p.image}" alt="${p.name}" class="w-24 h-24 object-cover rounded-lg border border-slate-200 shrink-0" />
                <div class="flex-1 space-y-2">
                  <div class="flex items-start justify-between">
                    <div>
                      <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${p.domain === 'cosmetics' ? 'bg-pink-100 text-pink-800 border border-pink-200' : 'bg-blue-100 text-blue-800 border border-blue-200'}">${p.category}</span>
                      <h3 class="font-bold text-xs text-slate-900 mt-1">${p.name}</h3>
                      <div class="text-[10px] font-mono text-slate-500">SKU: ${p.sku}</div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                    <div>
                      <span class="text-slate-500">Giá bán:</span> <span class="font-mono font-bold text-slate-900">${p.price.toLocaleString()} VNĐ</span>
                    </div>
                    <div>
                      <span class="text-slate-500">Tồn kho:</span> <span class="font-bold ${p.stock < p.minStock ? 'text-red-600' : 'text-emerald-700'}">${p.stock} SP</span>
                    </div>
                  </div>

                  ${p.domain === 'clothing' ? `
                    <div class="bg-slate-50 p-2.5 rounded-lg text-[10px] space-y-1 border border-slate-200">
                      <div class="font-bold text-slate-700 flex items-center gap-1">
                        <i class="lucide-layers w-3 h-3 text-slate-500"></i> Ma trận Biến thể Size/Màu:
                      </div>
                      <div class="flex flex-wrap gap-1">
                        ${p.variants?.map(v => `<span class="bg-white border border-slate-300 px-1.5 py-0.5 rounded font-mono text-slate-800">${v.color} - ${v.size}: <strong>${v.qty}</strong></span>`).join('')}
                      </div>
                    </div>
                  ` : `
                    <div class="bg-purple-50/60 p-2.5 rounded-lg text-[10px] space-y-1.5 border border-purple-100">
                      <div class="font-bold text-purple-950 flex items-center justify-between">
                        <span class="flex items-center gap-1"><i class="lucide-clock w-3 h-3 text-purple-700"></i> Lô Hạn Dùng FEFO:</span>
                        <span class="px-1.5 py-0.5 bg-purple-200 text-purple-900 rounded font-mono font-bold text-[9px]">FEFO STRICT</span>
                      </div>
                      ${p.batches?.map(b => `
                        <div class="flex items-center justify-between font-mono text-slate-700 bg-white p-1 rounded border border-purple-100">
                          <span>${b.batchNo} (HSD: ${b.expDate})</span>
                          <span class="font-bold ${b.status === 'EXPIRING_SOON' ? 'text-amber-700' : b.status === 'CRITICAL_LOW' ? 'text-red-600' : 'text-emerald-700'}">${b.qty} hộp</span>
                        </div>
                      `).join('')}
                    </div>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // Sub-tab 2: BO-04 Stock Moves & Inventory Control
  renderStockMoves: function() {
    return `
      <div class="space-y-6">
        <!-- Top Control Bar BO-04 -->
        <div class="o-card p-5 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wide">BO-04: Inventory & Stock Moves Hub</span>
              <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <i class="lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400"></i> Real-time Stock Sync & FEFO Active
              </span>
            </div>
            <h1 class="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Quản Lý Tồn Kho & Kiểm Soát Xuất Nhập Tồn
            </h1>
            <p class="text-xs text-slate-300">Giám sát tồn kho thực tế 3 kho, hạn dùng FEFO, nhật ký xuất nhập kho và cảnh báo nguy cơ đứt hàng AI.</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button onclick="Zone0Shell.openFinancialConfirm('Tạo Phiếu Xuất/Nhập Kho Mới', '<p class=\"text-xs text-slate-600\">Khởi tạo phiếu dịch chuyển kho (Kho xuất, Kho nhập, Danh sách SKU & Lô date FEFO).</p>', 'Mở Form Tạo Phiếu Kho', () => alert('Đã mở form tạo phiếu kho mới!'))" class="px-4 py-2 bg-[#714B67] hover:bg-purple-900 text-white text-xs font-bold rounded-lg transition shadow flex items-center gap-1.5">
              <i class="lucide-plus-circle w-4 h-4 text-amber-300"></i> + Tạo Phiếu Kho Mới
            </button>
          </div>
        </div>

        <!-- 4 KPI Stock Hero Metric Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Card 1: Total Valuation -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tổng Giá Trị Tồn Kho</span>
              <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <i class="lucide-dollar-sign w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">890.400.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-slate-600 font-medium">
                142 SKU • 3.840 sp tại 3 kho
              </div>
            </div>
          </div>

          <!-- Card 2: Safe SKUs -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">SKU An Toàn / Đạt Định Mức</span>
              <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
                <i class="lucide-check-circle-2 w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">128 / 142 SKU</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-emerald-600 font-bold">
                90.1% danh mục • Quay vòng 22 ngày
              </div>
            </div>
          </div>

          <!-- Card 3: Stock-out Alert -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-red-600 uppercase tracking-wide">Nguy Cơ Đứt Hàng</span>
              <div class="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                <i class="lucide-alert-triangle w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-red-700 font-mono">6 SKU Cấp Bách</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-red-600 font-bold">
                4 SKU &lt; Min Stock • 2 cạn 3 ngày
              </div>
            </div>
          </div>

          <!-- Card 4: FEFO Expiry Alert -->
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-amber-700 uppercase tracking-wide">Cận Hạn FEFO (&lt;90 Ngày)</span>
              <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <i class="lucide-hourglass w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-amber-800 font-mono">8 Lô Date FEFO</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-amber-700 font-semibold">
                Trị giá 64.200.000 ₫ • Cần xả hàng
              </div>
            </div>
          </div>
        </div>

        <!-- AI Inventory Intelligence & Burn-Rate Velocity Banner -->
        <div class="bg-gradient-to-r from-purple-950 via-slate-900 to-slate-900 text-white rounded-xl p-5 border border-purple-800/50 space-y-3">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold">
                <i class="lucide-brain w-4.5 h-4.5"></i>
              </div>
              <div>
                <h3 class="font-extrabold text-sm text-white">AI Inventory Intelligence & Dự Báo Tiêu Thụ Velocity-V4</h3>
                <p class="text-[11px] text-slate-300">Tự động phân tích tốc độ bán ra (Burn-rate 7 ngày) & tính toán tổn thất hụt hàng.</p>
              </div>
            </div>
            <span class="px-2.5 py-0.5 text-[10px] font-extrabold bg-purple-500/30 text-purple-200 border border-purple-400/40 rounded-full">Burn-Rate Model</span>
          </div>

          <div class="p-3.5 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div class="space-y-1">
              <div class="font-bold text-amber-300 flex items-center gap-1.5">
                <i class="lucide-alert-triangle w-4 h-4 text-amber-400"></i> CẢNH BÁO ĐỨT HÀNG: Serum Phục Hồi Bio-B5 Hydra Max (SKU-SKN-001)
              </div>
              <p class="text-slate-300">Tồn kho còn 18 hộp (Min stock 30). Tốc độ bán TikTok +85%/tuần. Runway dự báo cạn trong <strong>2.9 ngày</strong>.</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button onclick="Zone0Shell.openFinancialConfirm('Tạo Đơn PO Nhập Hàng Gấp', '<p class=\"text-xs text-slate-600\">Duyệt đơn PO nhập 150 hộp Serum Bio-B5 từ NCC Blossom Korea (Tổng giá trị: 45,000,000 VNĐ).</p>', 'Tạo PO 45Mđ', () => alert('Đã tạo PO nhập 150 hộp!'))" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded shadow">Tạo PO Nhập 150 Hộp</button>
              <button onclick="alert('Đã chuyển 15 hộp từ Kho Tổng về Kho Q.1!')" class="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded border border-white/20">Chuyển Kho 15 Hộp</button>
            </div>
          </div>
        </div>

        <!-- Stock Moves Table Matrix -->
        <div class="o-card p-5 space-y-4">
          <div class="flex items-center justify-between border-b pb-3">
            <h3 class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i class="lucide-arrow-left-right w-4.5 h-4.5 text-[#714B67]"></i> Nhật Ký Dịch Chuyển Kho & Kiểm Soát Xuất Nhập (Stock Moves)
            </h3>
            <span class="text-xs text-slate-500">Đối soát 100% mã giao dịch kho chuẩn Odoo Stock Moves</span>
          </div>

          <div class="overflow-x-auto border border-slate-200 rounded-lg">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th class="p-3">Mã Tham Chiếu</th>
                  <th class="p-3">Loại Thao Tác Kho</th>
                  <th class="p-3">Sản Phẩm & Mã Lô FEFO</th>
                  <th class="p-3">Kho Xuất ➔ Kho Nhập</th>
                  <th class="p-3 text-right">Số Lượng</th>
                  <th class="p-3 text-center">Trạng Thái Thao Tác</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 font-medium text-slate-800">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-3 font-mono font-bold text-purple-900">WH/IN/2026-0089</td>
                  <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">NHẬP KHO FEFO</span></td>
                  <td class="p-3 font-bold text-slate-900">Serum Dưỡng Trắng Vitamin C 30ml <span class="text-slate-500 font-mono font-normal">(Lô #LOT-202608-A)</span></td>
                  <td class="p-3 text-slate-600">NCC Korea ➔ Kho Quận 1</td>
                  <td class="p-3 text-right font-mono font-bold text-emerald-700">+100 hộp</td>
                  <td class="p-3 text-center"><span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Hoàn tất</span></td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-3 font-mono font-bold text-purple-900">WH/OUT/2026-0102</td>
                  <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-bold bg-sky-100 text-sky-800 rounded">XUẤT KHO BÁN HÀNG</span></td>
                  <td class="p-3 font-bold text-slate-900">Áo Sơ Mi Lụa Premium Silk Oversized <span class="text-slate-500 font-mono font-normal">(Size M - Trắng)</span></td>
                  <td class="p-3 text-slate-600">Kho Quận 1 ➔ Đơn Shopee ORD-9982</td>
                  <td class="p-3 text-right font-mono font-bold text-red-600">-3 cái</td>
                  <td class="p-3 text-center"><span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Hoàn tất</span></td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-3 font-mono font-bold text-purple-900">WH/INT/2026-0034</td>
                  <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-bold bg-purple-100 text-purple-800 rounded">ĐIỀU CHUYỂN NỘI BỘ</span></td>
                  <td class="p-3 font-bold text-slate-900">Serum Phục Hồi Bio-B5 Hydra Max <span class="text-slate-500 font-mono font-normal">(Lô #LOT-202605-B)</span></td>
                  <td class="p-3 text-slate-600">Kho Tổng Hóc Môn ➔ Kho Q.1</td>
                  <td class="p-3 text-right font-mono font-bold text-purple-900">15 hộp</td>
                  <td class="p-3 text-center"><span class="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded">Đang vận chuyển</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // Sub-tab 3: PO Draft Previews (modal_chi_ti_t_xem_tr_c_n_t_h_ng_po_draft_preview)
  renderPODrafts: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-file-text w-4 h-4 text-purple-600"></i> Danh sách Đơn mua hàng PO Draft Preview
          </h2>
          <span class="badge-rec">GỢI Ý TỰ ĐỘNG BỞI AI</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${MockData.poDrafts.map(po => `
            <div class="border border-slate-200 rounded-lg p-4 bg-slate-50 hover:bg-white hover:shadow-md transition space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-bold text-sm font-mono text-purple-900">${po.id}</span>
                <span class="px-2 py-0.5 text-[10px] font-bold bg-purple-100 text-purple-800 rounded">${po.status}</span>
              </div>
              <div class="text-xs text-slate-700"><strong>Nhà cung cấp:</strong> ${po.supplier}</div>
              <div class="text-xs text-slate-500"><strong>Ngày khởi tạo:</strong> ${po.date} (${po.itemsCount} mặt hàng)</div>
              <div class="flex justify-between items-center border-t pt-2 mt-2 text-xs">
                <span class="font-extrabold text-slate-900">${po.total.toLocaleString()} VNĐ</span>
                <button onclick="Zone0Shell.openFinancialConfirm('Phát Hành Đơn Mua PO ' + '${po.id}', '<p class=\\'text-xs text-slate-600\\'>Gửi đơn đặt hàng PO chính thức tới NCC ' + '${po.supplier}' + ' với tổng giá trị ' + '${po.total.toLocaleString()}' + ' VNĐ.</p>', 'Duyệt &amp; Phát Hành PO', () => alert('Đã phát hành đơn mua ' + '${po.id}' + ' thành công!'))" class="px-3 py-1 font-bold bg-purple-700 text-white rounded text-[11px] hover:bg-purple-800">Duyệt &amp; Phát Hành PO →</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // Sub-tab 4: Suppliers & Purchasing Debt (qu_n_l_nh_cung_c_p_c_ng_n_n_h_ng)
  renderSuppliers: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-factory w-4 h-4 text-blue-600"></i> Quản lý Nhà cung cấp & Công nợ Mua hàng
          </h2>
          <button class="px-3 py-1.5 text-xs font-semibold bg-blue-700 text-white rounded">
            + Thêm Nhà Cung Cấp Mới
          </button>
        </div>

        <table class="w-full text-left text-xs border-collapse border border-slate-200">
          <thead>
            <tr class="bg-slate-100 text-slate-700 font-semibold border-b">
              <th class="p-2.5 border">Mã NCC</th>
              <th class="p-2.5 border">Tên Nhà Cung Cấp</th>
              <th class="p-2.5 border">Số Điện Thoại</th>
              <th class="p-2.5 border text-right">Công Nợ Phải Trả</th>
              <th class="p-2.5 border">Trạng Thái Công Nợ</th>
            </tr>
          </thead>
          <tbody>
            ${MockData.suppliers.map(s => `
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 border font-mono font-bold text-slate-800">${s.code}</td>
                <td class="p-2.5 border font-bold text-slate-900">${s.name}</td>
                <td class="p-2.5 border text-slate-600">${s.phone}</td>
                <td class="p-2.5 border text-right font-bold ${s.debt > 0 ? 'text-red-600' : 'text-slate-500'}">${s.debt.toLocaleString()}đ</td>
                <td class="p-2.5 border">
                  <span class="px-2 py-0.5 text-[10px] font-bold rounded ${s.debt > 0 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">${s.status}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  switchSubTab: function(tabKey) {
    MockData.subTabs.inventory = tabKey;
    App.render();
  },

  openIntakeWizard: function() {
    document.getElementById('intake-wizard-modal')?.classList.remove('hidden');
  },
  closeIntakeWizard: function() {
    document.getElementById('intake-wizard-modal')?.classList.add('hidden');
  },
  confirmIntake: function() {
    alert('Đã nhập kho khởi tạo lô FEFO thành công!');
    this.closeIntakeWizard();
  }
};
