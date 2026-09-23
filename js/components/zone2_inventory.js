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
          <button onclick="Zone2Inventory.switchSubTab('variants_fefo')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'variants_fefo' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            🧴 1. Hạn Sử Dụng & Vị Trí Kệ Mỹ Phẩm (FEFO)
          </button>
          <button onclick="Zone2Inventory.switchSubTab('stock_moves')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'stock_moves' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            📦 2. Nhật Ký Xuất Nhập Tồn
          </button>
          <button onclick="Zone2Inventory.switchSubTab('po_drafts')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'po_drafts' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            📑 3. Gợi Ý Nhập Hàng Tự Động & Đặt Hàng PO
          </button>
          <button onclick="Zone2Inventory.switchSubTab('suppliers')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'suppliers' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            🏭 4. Nhà Cung Cấp & Công Nợ Quá Hạn
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

  // Sub-tab 1: Variants & FEFO
  renderVariantsFEFO: function() {
    return `
      <div class="o-card p-5">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
              <i class="lucide-package w-4 h-4 text-emerald-600"></i> Danh mục Sản phẩm Biến thể & Lô FEFO
            </h2>
            <span class="text-xs text-slate-500">Tự động phân biệt Thời trang (Size/Màu) & Mỹ phẩm (Lô Hạn dùng FEFO)</span>
          </div>
          <button onclick="Zone2Inventory.openIntakeWizard()" class="px-3 py-1.5 text-xs font-semibold bg-emerald-700 text-white rounded hover:bg-emerald-800 transition flex items-center gap-1 shadow">
            <i class="lucide-plus-circle w-3.5 h-3.5"></i> Nhập kho Lô FEFO Mới (Wizard 3 bước)
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${MockData.products.map(p => `
            <div class="border border-slate-200 rounded-lg p-4 bg-white hover:shadow-md transition flex gap-4">
              <img src="${p.image}" alt="${p.name}" class="w-20 h-20 object-cover rounded-lg border border-slate-200 shrink-0" />
              <div class="flex-1 space-y-1.5">
                <div class="flex items-start justify-between">
                  <div>
                    <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded ${p.domain === 'cosmetics' ? 'bg-pink-100 text-pink-800' : 'bg-blue-100 text-blue-800'}">${p.category}</span>
                    <h3 class="font-bold text-xs text-slate-800 mt-1">${p.name}</h3>
                    <div class="text-[10px] font-mono text-slate-400">SKU: ${p.sku}</div>
                  </div>
                </div>

                <div class="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                  <div>
                    <span class="text-slate-500">Giá bán:</span> <span class="font-bold text-slate-800">${p.price.toLocaleString()} VNĐ</span>
                  </div>
                  <div>
                    <span class="text-slate-500">Tồn kho:</span> <span class="font-bold ${p.stock < p.minStock ? 'text-red-600' : 'text-emerald-700'}">${p.stock} sản phẩm</span>
                  </div>
                </div>

                ${p.domain === 'clothing' ? `
                  <div class="bg-slate-50 p-2 rounded text-[10px] space-y-1">
                    <div class="font-bold text-slate-600">Ma trận Biến thể Size/Màu:</div>
                    <div class="flex flex-wrap gap-1.5">
                      ${p.variants?.map(v => `<span class="bg-white border border-slate-300 px-1.5 py-0.5 rounded font-mono">${v.color} - ${v.size}: <strong>${v.qty}</strong></span>`).join('')}
                    </div>
                  </div>
                ` : `
                  <div class="bg-pink-50/60 p-2 rounded text-[10px] space-y-1 border border-pink-100">
                    <div class="font-bold text-pink-900 flex items-center justify-between">
                      <span>Lô Hạn dùng FEFO:</span>
                      <span class="badge-warning">FEFO STRICT</span>
                    </div>
                    ${p.batches?.map(b => `
                      <div class="flex items-center justify-between font-mono text-slate-700">
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
    `;
  },

  // Sub-tab 2: Stock Moves (bo_04_qu_n_l_t_n_kho_ki_m_so_t_xu_t_nh_p)
  renderStockMoves: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-arrow-left-right w-4 h-4 text-emerald-600"></i> Nhật ký Dịch chuyển Kho & Kiểm soát Xuất Nhập (Stock Moves)
          </h2>
          <button class="px-3 py-1.5 text-xs font-semibold bg-emerald-700 text-white rounded">
            + Tạo Phiếu Xuất/Nhập Kho
          </button>
        </div>

        <table class="w-full text-left text-xs border-collapse border border-slate-200">
          <thead>
            <tr class="bg-slate-100 text-slate-700 font-semibold border-b">
              <th class="p-2.5 border">Mã Tham Chiếu</th>
              <th class="p-2.5 border">Loại Thao Tác</th>
              <th class="p-2.5 border">Sản Phẩm</th>
              <th class="p-2.5 border">Kho Xuất / Kho Nhập</th>
              <th class="p-2.5 border text-right">Số Lượng</th>
              <th class="p-2.5 border">Trạng Thái</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border font-mono font-bold text-purple-800">WH/IN/2026-0089</td>
              <td class="p-2.5 border font-bold text-emerald-600">NHẬP KHO FEFO</td>
              <td class="p-2.5 border font-medium">Serum Dưỡng Trắng Vitamin C 30ml</td>
              <td class="p-2.5 border text-slate-600">NCC Korea ➔ Kho Q1</td>
              <td class="p-2.5 border text-right font-bold">+100 hộp</td>
              <td class="p-2.5 border"><span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Hoàn tất</span></td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border font-mono font-bold text-purple-800">WH/OUT/2026-0102</td>
              <td class="p-2.5 border font-bold text-blue-600">XUẤT KHO BÁN HÀNG</td>
              <td class="p-2.5 border font-medium">Áo Sơ Mi Lụa Premium Silk</td>
              <td class="p-2.5 border text-slate-600">Kho Q1 ➔ Sàn Shopee</td>
              <td class="p-2.5 border text-right font-bold text-red-600">-3 cái</td>
              <td class="p-2.5 border"><span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Hoàn tất</span></td>
            </tr>
          </tbody>
        </table>
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
                <button onclick="alert('Đã mở bản thảo đơn mua ${po.id}')" class="px-3 py-1 font-bold bg-purple-700 text-white rounded text-[11px]">Xem Bản Thảo →</button>
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
