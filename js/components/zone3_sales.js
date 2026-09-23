/* ==========================================================================
   ZONE 3: BO MODULE - SALES, ORDERS & EXPENSE FINANCIALS (PARITY COMPLETE)
   ========================================================================== */

const Zone3Sales = {
  render: function() {
    const activeSubTab = MockData.subTabs.sales || 'omnichannel';

    return `
      <div class="space-y-6">
        <!-- Sub-navigation Tabs for 100% 54-Screen Coverage (Odoo Enterprise Menu Link Style) -->
        <div class="flex items-center gap-5 border-b border-slate-200 pb-0 overflow-x-auto text-xs text-slate-600 mb-4">
          <button onclick="Zone3Sales.switchSubTab('omnichannel')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'omnichannel' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-shopping-bag w-3.5 h-3.5"></i> 1. Đơn Hàng Đa Kênh (Shopee, TikTok, POS)
          </button>
          <button onclick="Zone3Sales.switchSubTab('new_order_form')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'new_order_form' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-plus-circle w-3.5 h-3.5"></i> 2. Tạo Đơn Hàng Mới (+)
          </button>
          <button onclick="Zone3Sales.switchSubTab('marketplace_recon')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'marketplace_recon' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-landmark w-3.5 h-3.5"></i> 3. Đối Soát Tiền Về Ngân Hàng (Shopee & TikTok)
          </button>
          <button onclick="Zone3Sales.switchSubTab('cashflow_accrual')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'cashflow_accrual' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-dollar-sign w-3.5 h-3.5"></i> 4. Báo Cáo Thu Chi & Lợi Nhuận Thực Nhận (P&L)
          </button>
          <button onclick="Zone3Sales.switchSubTab('opex_mobile')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'opex_mobile' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-smartphone w-3.5 h-3.5"></i> 5. Ghi Nhận Chi Phí Nhanh & Ngân Sách OPEX (BO-02)
          </button>
        </div>

        <!-- Sales & Financial Summary Header -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="o-card p-4">
            <div class="text-[11px] font-semibold text-slate-500">Doanh thu Đơn hàng Đa kênh</div>
            <div class="text-lg font-bold text-slate-800">485,200,000 VNĐ</div>
            <div class="text-[10px] text-emerald-600 font-semibold mt-1">▲ 14.2% so với tháng trước</div>
          </div>
          <div class="o-card p-4">
            <div class="text-[11px] font-semibold text-slate-500">Tổng Chi phí OPEX Vận hành</div>
            <div class="text-lg font-bold text-slate-800">51,700,000 VNĐ</div>
            <div class="text-[10px] text-slate-500 mt-1">Mặt bằng, Ads, Điện nước</div>
          </div>
          <div class="o-card p-4">
            <div class="text-[11px] font-semibold text-slate-500">Công nợ B2B Đại lý Cần thu</div>
            <div class="text-lg font-bold text-purple-700">18,500,000 VNĐ</div>
            <div class="text-[10px] text-purple-600 font-semibold mt-1">Tích hợp Quét VietQR B2B</div>
          </div>
          <div class="o-card p-4">
            <div class="text-[11px] font-semibold text-slate-500">Lợi nhuận Thuần Ước tính</div>
            <div class="text-lg font-bold text-emerald-700">218,340,000 VNĐ</div>
            <div class="text-[10px] text-emerald-600 font-semibold mt-1">Biên lợi nhuận: 45.0%</div>
          </div>
        </div>

        <!-- Dynamic Render based on Active Sub-tab -->
        ${activeSubTab === 'omnichannel' ? this.renderOmnichannel() : ''}
        ${activeSubTab === 'new_order_form' ? this.renderNewOrderForm() : ''}
        ${activeSubTab === 'marketplace_recon' ? this.renderMarketplaceRecon() : ''}
        ${activeSubTab === 'cashflow_accrual' ? this.renderCashflowAccrual() : ''}
        ${activeSubTab === 'opex_mobile' ? this.renderOPEXMobile() : ''}

        <!-- Section: VietQR B2B Payment Modal -->
        <div id="vietqr-modal" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md text-slate-800 overflow-hidden" onclick="event.stopPropagation()">
            <div class="bg-[#714B67] text-white p-4 flex items-center justify-between">
              <h3 class="font-bold text-sm flex items-center gap-2">
                <i class="lucide-qr-code w-4 h-4"></i> Mã Quét VietQR B2B Thanh toán
              </h3>
              <button onclick="Zone3Sales.closeVietQRModal()" class="text-white/80 hover:text-white"><i class="lucide-x w-5 h-5"></i></button>
            </div>
            
            <div class="p-6 space-y-4 text-center">
              <div class="text-xs text-slate-500">Quét mã QR bằng App Ngân hàng để thanh toán tự động:</div>
              
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl inline-block shadow-sm">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=VietQR-B2B-SO-ORD-2026-0894" alt="VietQR B2B" class="w-48 h-48 mx-auto border p-2 bg-white rounded-lg" />
                <div class="mt-3 text-xs font-bold text-slate-800">MB Bank - Maison de Bloom</div>
                <div class="text-xs font-mono text-slate-500">STK: 9999-8888-2026</div>
                <div class="text-sm font-extrabold text-purple-900 mt-1">18,500,000 VNĐ</div>
              </div>

              <div class="text-[11px] text-slate-500 font-mono bg-purple-50 border border-purple-100 p-2 rounded">
                Nội dung chuyển khoản: <span class="font-bold text-purple-900">TT SO ORD 2026 0894</span>
              </div>
            </div>

        <!-- Section: Order Detail Modal (bo_06_chi_ti_t_n_h_ng_l_ch_s_v_ng_i_bi_n_ng) -->
        <div id="order-detail-modal" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl text-slate-800 overflow-hidden" onclick="event.stopPropagation()">
            <div class="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-purple-700 flex items-center justify-center font-bold text-white shadow-sm">
                  <i class="lucide-shopping-bag w-4 h-4"></i>
                </div>
                <div>
                  <h3 id="modal-order-id" class="font-extrabold text-sm font-mono text-purple-300">Chi Tiết Đơn Hàng #ORD-2024-9982</h3>
                  <p class="text-[11px] text-slate-300">Nhật ký xử lý &amp; Phân bổ tồn kho FEFO đa kênh</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center text-[10px] font-semibold bg-slate-800 border border-slate-700 rounded-lg px-2 py-1">
                  <span class="px-2 py-0.5 rounded bg-emerald-500 text-white font-bold">Hoàn tất</span>
                </div>
                <button onclick="Zone3Sales.closeOrderDetailModal()" class="text-slate-400 hover:text-white p-1"><i class="lucide-x w-5 h-5"></i></button>
              </div>
            </div>
            
            <div class="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
              <!-- Customer & Order Meta Grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div>
                  <span class="text-slate-500 font-semibold block text-[10px] uppercase">Khách hàng / Đối tác:</span>
                  <strong id="modal-order-customer" class="text-slate-900 font-bold">Nguyễn Văn Hùng</strong>
                  <span class="text-slate-500 block">SĐT: 0908.123.456</span>
                </div>
                <div>
                  <span class="text-slate-500 font-semibold block text-[10px] uppercase">Kênh Bán & Vận Chuyển:</span>
                  <strong id="modal-order-channel" class="text-orange-700 font-bold">Shopee Mall (Shopee Express)</strong>
                  <span class="text-slate-500 block font-mono">Mã VĐ: SPX-88291024</span>
                </div>
                <div>
                  <span class="text-slate-500 font-semibold block text-[10px] uppercase">Thanh toán & Thời gian:</span>
                  <strong id="modal-order-payment" class="text-slate-900 font-bold">Ví ShopeePay (Đã TT)</strong>
                  <span id="modal-order-date" class="text-slate-500 block">24/10/2024 14:15</span>
                </div>
              </div>

              <!-- Product Line Items -->
              <div>
                <div class="text-xs font-bold text-slate-800 mb-2 flex items-center justify-between">
                  <span class="flex items-center gap-1.5"><i class="lucide-package w-3.5 h-3.5 text-purple-700"></i> Danh Sách Sản Phẩm & Trừ Kho FEFO</span>
                  <span class="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Giữ hàng 100% tại Kho Q.1</span>
                </div>
                <table class="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                  <thead class="bg-slate-100 text-slate-700 font-semibold border-b">
                    <tr>
                      <th class="p-2">Sản phẩm</th>
                      <th class="p-2">Mã SKU / Lô FEFO</th>
                      <th class="p-2 text-right">Đơn giá</th>
                      <th class="p-2 text-right">Số lượng</th>
                      <th class="p-2 text-right">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    <tr>
                      <td class="p-2 font-medium">Serum Phục Hồi Bio-B5 Hydra Max 50ml</td>
                      <td class="p-2 font-mono text-purple-800 font-semibold">SKU-SER-001 (Lô #B5-2024)</td>
                      <td class="p-2 text-right font-mono">450,000đ</td>
                      <td class="p-2 text-right font-bold">2</td>
                      <td class="p-2 text-right font-bold text-slate-900">900,000đ</td>
                    </tr>
                    <tr>
                      <td class="p-2 font-medium">Kem Dưỡng Ẩm Chuyên Sâu Cera-Repair</td>
                      <td class="p-2 font-mono text-purple-800 font-semibold">SKU-CRE-004 (Lô #CR-2024)</td>
                      <td class="p-2 text-right font-mono">380,000đ</td>
                      <td class="p-2 text-right font-bold">1</td>
                      <td class="p-2 text-right font-bold text-slate-900">380,000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Timeline Audit Trail -->
              <div class="border-t pt-3 space-y-2">
                <div class="text-xs font-bold text-slate-800 flex items-center gap-1.5"><i class="lucide-history w-3.5 h-3.5 text-sky-700"></i> Lịch Sử Biến Động & Vận Hành Trạng Thái</div>
                <div class="space-y-1.5 text-[11px]">
                  <div class="flex items-start gap-2 text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
                    <span class="font-mono font-semibold text-slate-400">14:15:02</span>
                    <span>Đơn hàng được khởi tạo tự động từ kênh <strong class="text-slate-800">Shopee API Sync</strong>.</span>
                  </div>
                  <div class="flex items-start gap-2 text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
                    <span class="font-mono font-semibold text-slate-400">14:16:30</span>
                    <span>Hệ thống AI Copilot tự động trừ kho FEFO <strong class="text-purple-800 font-mono">Lô #B5-2024 (HSD 12/2026)</strong> tại Kho Q.1.</span>
                  </div>
                  <div class="flex items-start gap-2 text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
                    <span class="font-mono font-semibold text-slate-400">14:35:10</span>
                    <span>Đã in phiếu giao nhận &amp; bàn giao đơn hàng cho bưu tá <strong class="text-slate-800">Shopee Express (Bưu tá: Trần Văn Minh)</strong>.</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-3 bg-slate-50 border-t flex justify-between items-center text-xs">
              <button onclick="Zone0Shell.openFinancialConfirm('In Phiếu Đơn Hàng', '<p class=\\'text-xs text-slate-600\\'>In phiếu giao nhận đính kèm hóa đơn VAT cho đơn hàng #' + (document.getElementById('modal-order-id')?.innerText || '') + '.</p>', 'In Phiếu Kèm Hóa Đơn', () => Zone3Sales.closeOrderDetailModal())" class="px-3 py-1.5 font-semibold bg-slate-100 text-slate-700 border border-slate-300 rounded hover:bg-slate-200 flex items-center gap-1">
                <i class="lucide-printer w-3.5 h-3.5"></i> In Phiếu Đơn Hàng
              </button>
              <button onclick="Zone3Sales.closeOrderDetailModal()" class="px-4 py-1.5 font-bold bg-[#714B67] text-white rounded hover:bg-purple-900">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Sub-tab 1: Omnichannel Orders
  renderOmnichannel: function() {
    return `
      <div class="o-card p-5">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
              <i class="lucide-shopping-bag w-4 h-4 text-purple-600"></i> Quản lý Đơn hàng Đa kênh (Shopee, TikTok Shop, POS, B2B)
            </h2>
            <span class="text-xs text-slate-500">Theo dõi danh sách đơn hàng thực tế thời gian thực</span>
          </div>
          <button onclick="Zone3Sales.openVietQRModal()" class="px-3 py-1.5 text-xs font-semibold bg-purple-700 text-white rounded hover:bg-purple-800 transition flex items-center gap-1.5 shadow">
            <i class="lucide-qr-code w-3.5 h-3.5"></i> Tạo mã Thu/Chi VietQR B2B
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                <th class="p-2.5">Mã Đơn hàng</th>
                <th class="p-2.5">Khách hàng / Đối tác</th>
                <th class="p-2.5">Kênh Bán hàng</th>
                <th class="p-2.5">Thời gian</th>
                <th class="p-2.5">Hình thức TT</th>
                <th class="p-2.5 text-right">Tổng tiền</th>
                <th class="p-2.5">Trạng thái</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              ${MockData.orders.map(o => `
                <tr class="hover:bg-slate-50 cursor-pointer" onclick="Zone3Sales.openOrderDetailModal('${o.id}')">
                  <td class="p-2.5 font-bold font-mono text-purple-800">${o.id}</td>
                  <td class="p-2.5 font-medium text-slate-800">${o.customer}</td>
                  <td class="p-2.5">
                    <span class="px-2 py-0.5 text-[10px] font-bold rounded ${o.channelBadge === 'orange' ? 'bg-orange-100 text-orange-800 border border-orange-200' : o.channelBadge === 'pink' ? 'bg-pink-100 text-pink-800 border border-pink-200' : o.channelBadge === 'blue' ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-purple-100 text-purple-800 border border-purple-200'}">
                      ${o.channel}
                    </span>
                  </td>
                  <td class="p-2.5 text-slate-500">${o.date}</td>
                  <td class="p-2.5 text-slate-700 font-medium">${o.payment}</td>
                  <td class="p-2.5 text-right font-bold text-slate-900">${o.total.toLocaleString()} VNĐ</td>
                  <td class="p-2.5">
                    <span class="px-2 py-0.5 text-[10px] font-bold rounded ${o.status === 'Đã hoàn tất' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                      ${o.status}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // Sub-tab 2: New Order Form Sheet (bo_06_form_t_o_n_h_ng_m_i_xu_t_kho_a_k_nh)
  renderNewOrderForm: function() {
    return `
      <div class="o-form-sheet p-6 max-w-4xl mx-auto space-y-5">
        <!-- Odoo Statusbar Header -->
        <div class="flex items-center justify-between border-b pb-3">
          <div class="flex items-center gap-2">
            <button onclick="alert('Đã lưu đơn hàng bản thảo!')" class="px-3 py-1.5 text-xs font-bold bg-[#714B67] text-white rounded">Lưu Đơn Hàng</button>
            <button onclick="Zone0Shell.openFinancialConfirm('Xác Nhận Xuất Kho Đơn Bán B2B', '<p class=\\'text-xs text-slate-600\\'>Đơn hàng SO-ORD-2026-0894 trị giá 18,500,000đ sẽ xuất 30 hộp Serum + 10 Áo Sơ mi từ Kho Q.1. Thao tác này ghi nhận doanh thu & COGS dồn tích.</p>', 'Xác Nhận Xuất Kho', () => Zone3Sales.switchSubTab(\\'omnichannel\\'))" class="px-3 py-1.5 text-xs font-semibold bg-emerald-700 text-white rounded hover:bg-emerald-800">Xác Nhận Xuất Kho</button>
            <button onclick="Zone3Sales.switchSubTab('omnichannel')" class="px-3 py-1.5 text-xs font-semibold bg-slate-200 text-slate-700 rounded">Hủy bỏ</button>
          </div>
          <div class="flex items-center">
            <div class="statusbar-step active">Bản thảo</div>
            <div class="statusbar-step">Xác nhận</div>
            <div class="statusbar-step">Xuất kho</div>
            <div class="statusbar-step">Hoàn tất</div>
          </div>
        </div>

        <h2 class="text-base font-bold text-slate-800">Tạo Đơn Bán Hàng Mới & Phiếu Xuất Kho Đa Kênh</h2>

        <div class="grid grid-cols-2 gap-4 text-xs">
          <div class="space-y-1">
            <label class="font-bold text-slate-700">Tên Khách hàng / Đại lý:</label>
            <input type="text" value="Đại lý Phân phối Spa Blossom" class="w-full p-2 border border-slate-300 rounded" />
          </div>
          <div class="space-y-1">
            <label class="font-bold text-slate-700">Kênh Phân Phối:</label>
            <select class="w-full p-2 border border-slate-300 rounded">
              <option>Bán sỉ B2B Đại lý</option>
              <option>Sàn Shopee VN</option>
              <option>TikTok Shop</option>
              <option>POS Cửa hàng Q1</option>
            </select>
          </div>
        </div>

        <div class="border-t pt-3">
          <div class="font-bold text-xs text-slate-800 mb-2">Chi tiết sản phẩm đặt hàng:</div>
          <table class="w-full text-left text-xs border border-slate-200">
            <thead class="bg-slate-100 border-b">
              <tr>
                <th class="p-2">Sản phẩm</th>
                <th class="p-2">Mã SKU / Lô FEFO</th>
                <th class="p-2 text-right">Đơn giá</th>
                <th class="p-2 text-right">Số lượng</th>
                <th class="p-2 text-right">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-2 font-medium">Serum Dưỡng Trắng Vitamin C 30ml</td>
                <td class="p-2 font-mono text-slate-500">LOT-202608-A</td>
                <td class="p-2 text-right font-mono">450,000đ</td>
                <td class="p-2 text-right font-bold">30</td>
                <td class="p-2 text-right font-bold text-purple-900">13,500,000đ</td>
              </tr>
              <tr>
                <td class="p-2 font-medium">Áo Sơ Mi Lụa Premium Silk</td>
                <td class="p-2 font-mono text-slate-500">SKU-CLO-102 (Size M)</td>
                <td class="p-2 text-right font-mono">500,000đ</td>
                <td class="p-2 text-right font-bold">10</td>
                <td class="p-2 text-right font-bold text-purple-900">5,000,000đ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-end pt-2 text-xs">
          <div class="text-right space-y-1">
            <div>Tổng tiền hàng: <strong class="text-slate-800">18,500,000 VNĐ</strong></div>
            <div>Chiết khấu B2B (0%): <strong class="text-slate-800">0 VNĐ</strong></div>
            <div class="text-sm font-extrabold text-purple-900">TỔNG THANH TOÁN: 18,500,000 VNĐ</div>
          </div>
        </div>
      </div>
    `;
  },

  // Sub-tab 3: Marketplace Reconciliation (i_so_t_chi_ti_t_v_s_n_shopee_tiktok_shop)
  renderMarketplaceRecon: function() {
    return `
      <div class="o-card p-5">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
              <i class="lucide-calculator w-4 h-4 text-orange-600"></i> Bảng Đối soát Chi tiết Doanh thu Sàn TMĐT (Shopee & TikTok Shop)
            </h2>
            <span class="text-xs text-slate-500">Trừ phí sàn (Phí cố định, Phí dịch vụ, Phí vận chuyển) ➔ Tiền thực nhận về Tài khoản</span>
          </div>
          <span class="badge-fact">DỮ LIỆU ĐỐI SOÁT SÀN</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse border border-slate-200">
            <thead>
              <tr class="bg-slate-100 text-slate-700 font-semibold border-b">
                <th class="p-2.5 border">Sàn TMĐT</th>
                <th class="p-2.5 border">Mã Đơn Sàn</th>
                <th class="p-2.5 border text-right">Tổng Doanh Thu</th>
                <th class="p-2.5 border text-right">Phí Sàn (5%)</th>
                <th class="p-2.5 border text-right">Phí Vận Chuyển</th>
                <th class="p-2.5 border text-right">Tiền Thực Nhận</th>
                <th class="p-2.5 border">Trạng thái đối soát</th>
              </tr>
            </thead>
            <tbody>
              ${MockData.marketplaceReconciliation.map(m => `
                <tr class="hover:bg-slate-50">
                  <td class="p-2.5 border font-bold ${m.platform.includes('Shopee') ? 'text-orange-600' : 'text-pink-600'}">${m.platform}</td>
                  <td class="p-2.5 border font-mono">${m.orderCode}</td>
                  <td class="p-2.5 border text-right font-mono">${m.grossSales.toLocaleString()}đ</td>
                  <td class="p-2.5 border text-right font-mono text-red-600">-${m.platformFee.toLocaleString()}đ</td>
                  <td class="p-2.5 border text-right font-mono text-red-600">-${m.shippingFee.toLocaleString()}đ</td>
                  <td class="p-2.5 border text-right font-bold text-emerald-700">${m.netReceived.toLocaleString()}đ</td>
                  <td class="p-2.5 border">
                    <span class="px-2 py-0.5 text-[10px] font-bold rounded ${m.status === 'Đã đối soát' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${m.status}</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // Sub-tab 4: Cashflow vs Accrual P&L (b_o_c_o_l_i_l_p_l_chi_ti_t_accrual_vs_cashflow - Screen 03 Parity)
  renderCashflowAccrual: function() {
    const viewMode = MockData.subTabs.pnlMode || 'compare';

    return `
      <div class="space-y-6">
        <!-- TOP HEADER & ACTION BAR -->
        <div class="o-card p-5 space-y-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2 text-xs">
                <span class="text-slate-500">Tài chính & Kế toán</span>
                <i class="lucide-chevron-right w-3.5 h-3.5 text-slate-400"></i>
                <span class="font-bold text-[#714B67]">Báo Cáo Lãi Lỗ P&L (Accrual vs Cashflow BO-05)</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800 border border-teal-300">Đối chiếu chuẩn GAAP / VAS</span>
              </div>
              <h1 class="text-xl font-extrabold text-slate-900 tracking-tight">
                Báo Cáo Kết Quả Kinh Doanh & Dòng Tiền Thực Tế
              </h1>
              <p class="text-xs text-slate-600 font-normal">
                Đối chiếu trực tiếp giữa Kế toán dồn tích (Accrual P&L ghi nhận hóa đơn) và Dòng tiền thuần thực nhập két (Cashflow P&L).
              </p>
            </div>

            <!-- Top Action Buttons (Semantic Colors) -->
            <div class="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <button onclick="alert('Đã xuất báo cáo P&L dồn tích & dòng tiền dạng PDF!')" class="px-3.5 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 transition border border-sky-200 flex items-center gap-1.5">
                <i class="lucide-file-text w-4 h-4 text-sky-600"></i> Xuất Báo Cáo PDF
              </button>
              <button onclick="Zone0Shell.openFinancialConfirm('Xác Nhận Gửi Dữ Liệu Kế Toán Thuế', '<div class=\'p-3 bg-purple-50 rounded-lg border border-purple-200 text-xs space-y-1\'><div><strong>Kỳ báo cáo:</strong> Tháng 10/2026</div><div><strong>Doanh thu hóa đơn:</strong> 348,250,000 VNĐ</div><div><strong>Dòng tiền thực thu:</strong> 284,500,000 VNĐ</div></div>', 'Gửi Kế Toán Thuế', function() { alert('Đã gửi hồ sơ báo cáo cho bộ phận Kế toán thuế thành công!'); })" class="px-3.5 py-2 rounded-lg bg-[#714B67] hover:bg-[#5b3b53] text-white transition shadow-xs flex items-center gap-1.5 font-bold">
                <i class="lucide-send w-4 h-4"></i> Gửi Kế Toán Thuế
              </button>
            </div>
          </div>

          <!-- Period Filter & View Mode Toggle Strip -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div class="flex flex-wrap items-center gap-2">
              <div class="flex items-center bg-slate-100 p-1 rounded-lg font-semibold">
                <button class="px-3 py-1 rounded bg-white text-[#714B67] font-bold shadow-xs">Tháng này</button>
                <button class="px-3 py-1 rounded text-slate-600 hover:text-slate-900">Quý 3</button>
                <button class="px-3 py-1 rounded text-slate-600 hover:text-slate-900">Năm 2026</button>
              </div>
              <div class="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold flex items-center gap-1.5">
                <i class="lucide-calendar w-4 h-4 text-[#714B67]"></i> 01/10/2026 — 31/10/2026
              </div>
            </div>

            <!-- Mode Toggle -->
            <div class="flex items-center bg-slate-100 p-1 rounded-lg font-bold text-xs">
              <button onclick="Zone3Sales.switchPnLMode('accrual')" class="px-3 py-1 rounded transition ${viewMode === 'accrual' ? 'bg-[#714B67] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">Dồn tích (Accrual)</button>
              <button onclick="Zone3Sales.switchPnLMode('cashflow')" class="px-3 py-1 rounded transition ${viewMode === 'cashflow' ? 'bg-[#714B67] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">Dòng tiền (Cashflow)</button>
              <button onclick="Zone3Sales.switchPnLMode('compare')" class="px-3 py-1 rounded transition ${viewMode === 'compare' ? 'bg-[#714B67] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">↔ Đối Chiếu Song Song</button>
            </div>
          </div>
        </div>

        <!-- 1. Executive TL;DR 30-Second Summary (Point 1 End-User) -->
        <div class="p-3.5 bg-purple-50 border-l-4 border-[#714B67] rounded-r-xl space-y-1 shadow-xs">
          <div class="font-bold text-xs text-purple-950 flex items-center gap-1.5">
            <i class="lucide-alert-circle w-4 h-4 text-[#714B67]"></i> ⚡ TÓM TẮT DÒNG TIỀN & P&L THÁNG 10 (TL;DR 30 GIÂY)
          </div>
          <p class="text-xs text-slate-700 font-normal">
            Doanh thu ghi nhận hóa đơn đạt <strong>348,250,000 VNĐ</strong> nhưng tiền thực thu về két mới đạt <strong>284,500,000 VNĐ</strong>. Đang có <strong>63,750,000 VNĐ</strong> tiền chênh lệch treo ở ví Shopee/TikTok và công nợ B2B chưa thu hồi.
          </p>
        </div>

        <!-- 4 TOP FINANCIAL KPI CARDS (Accrual vs Cashflow - Point 1 & 2 UI Designer) -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <!-- Metric 1: Doanh thu thuần -->
          <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
            <div class="flex items-center justify-between border-b pb-2">
              <span class="text-xs font-bold text-slate-700">1. Doanh Thu Thuần (Net Sales)</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">+18.4%</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex items-baseline justify-between text-xs">
                <span class="text-slate-500">Accrual (Hóa đơn):</span>
                <span class="font-extrabold text-slate-900 font-mono text-sm">348,250,000đ</span>
              </div>
              <div class="flex items-baseline justify-between text-xs">
                <span class="text-slate-500">Cashflow (Thực thu):</span>
                <span class="font-bold text-teal-700 font-mono">284,500,000đ</span>
              </div>
            </div>
            <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 text-[11px] flex items-center justify-between">
              <span class="text-slate-500">Ví sàn treo: <strong class="text-red-600 font-mono">+63.75Mđ</strong></span>
              <span class="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">Tốt 81.7%</span>
            </div>
          </div>

          <!-- Metric 2: Giá vốn COGS -->
          <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
            <div class="flex items-center justify-between border-b pb-2">
              <span class="text-xs font-bold text-slate-700">2. Giá Vốn Hàng Bán (COGS)</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">52.4% DT</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex items-baseline justify-between text-xs">
                <span class="text-slate-500">Accrual (Xuất kho):</span>
                <span class="font-extrabold text-slate-900 font-mono text-sm">182,400,000đ</span>
              </div>
              <div class="flex items-baseline justify-between text-xs">
                <span class="text-slate-500">Cashflow (Chi mua):</span>
                <span class="font-bold text-red-600 font-mono">198,850,000đ</span>
              </div>
            </div>
            <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 text-[11px] flex items-center justify-between">
              <span class="text-slate-500">Nhập hàng Mega 11.11:</span>
              <span class="font-bold text-red-700 font-mono">Vượt chi 16.45M</span>
            </div>
          </div>

          <!-- Metric 3: Lợi nhuận gộp -->
          <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
            <div class="flex items-center justify-between border-b pb-2">
              <span class="text-xs font-bold text-slate-700">3. Lợi Nhuận Gộp (Gross Margin)</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">47.6% DT</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex items-baseline justify-between text-xs">
                <span class="text-slate-500">Accrual Gross Profit:</span>
                <span class="font-extrabold text-purple-900 font-mono text-sm">165,850,000đ</span>
              </div>
              <div class="flex items-baseline justify-between text-xs">
                <span class="text-slate-500">Cashflow Margin:</span>
                <span class="font-bold text-slate-800 font-mono">85,650,000đ</span>
              </div>
            </div>
            <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 text-[11px] flex items-center justify-between">
              <span class="text-slate-500">Tỷ suất gộp:</span>
              <span class="font-extrabold text-emerald-700">47.6% (Chuẩn VAS)</span>
            </div>
          </div>

          <!-- Metric 4: Lợi nhuận ròng bỏ túi -->
          <div class="bg-white rounded-xl p-4 border border-purple-200 shadow-sm space-y-3 relative overflow-hidden">
            <div class="flex items-center justify-between border-b pb-2">
              <span class="text-xs font-bold text-purple-950">4. Lợi Nhuận Bỏ Túi (Net Cash)</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">BỎ TÚI</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex items-baseline justify-between text-xs">
                <span class="text-slate-500">Cash Net Profit:</span>
                <span class="font-extrabold text-emerald-700 font-mono text-base">54,200,000đ</span>
              </div>
              <div class="flex items-baseline justify-between text-xs">
                <span class="text-slate-500">Accrual Net Profit:</span>
                <span class="font-bold text-slate-800 font-mono">72,400,000đ</span>
              </div>
            </div>
            <div class="p-2 bg-purple-50 rounded-lg border border-purple-200 text-[11px] flex items-center justify-between">
              <span class="text-slate-600">Sức khỏe dòng tiền:</span>
              <span class="font-extrabold text-purple-900">AN TOÀN</span>
            </div>
          </div>
        </div>

        <!-- ACCRUAL VS CASHFLOW PARALLEL RECONCILIATION TABLE -->
        <div class="o-card p-5 space-y-4 bg-white border border-slate-200 rounded-xl shadow-sm">
          <div class="flex items-center justify-between border-b pb-3 flex-wrap gap-2">
            <div>
              <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
                <i class="lucide-scale w-4 h-4 text-[#714B67]"></i> Bảng Chi Tiết Đối Chiếu Thu Chi Accrual vs Cashflow
              </h2>
              <span class="text-xs text-slate-500 font-normal">So sánh trực tiếp từng khoản mục doanh thu, giá vốn và chi phí vận hành OPEX</span>
            </div>
            <span class="px-2.5 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded-lg border border-slate-200">Kỳ Tháng 10/2026</span>
          </div>

          <div class="overflow-x-auto border border-slate-200 rounded-lg">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th class="p-3 border-r">Hạng Mục Thu Chi</th>
                  <th class="p-3 border-r">Phân Loại</th>
                  <th class="p-3 border-r text-right">Doanh Thu / Chi Phí Dồn Tích (Accrual)</th>
                  <th class="p-3 border-r text-right">Tiền Thực Thu / Thực Chi (Cashflow)</th>
                  <th class="p-3 border-r text-right">Chênh Lệch Dòng Tiền</th>
                  <th class="p-3">Ghi Chú Nghiệp Vụ Kế Toán</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr class="hover:bg-slate-50">
                  <td class="p-3 border-r font-bold text-slate-800">1. Doanh thu POS Cửa Hàng Q1</td>
                  <td class="p-3 border-r"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">THỰC THU</span></td>
                  <td class="p-3 border-r text-right font-mono font-bold text-slate-900">72,500,000đ</td>
                  <td class="p-3 border-r text-right font-mono font-bold text-emerald-700">72,500,000đ</td>
                  <td class="p-3 border-r text-right font-mono text-slate-400">0đ</td>
                  <td class="p-3 text-slate-500 font-normal">Khách thanh toán VietQR & Tiền mặt quầy POS</td>
                </tr>

                <tr class="hover:bg-slate-50">
                  <td class="p-3 border-r font-bold text-slate-800">2. Doanh thu Sàn Shopee & TikTok</td>
                  <td class="p-3 border-r"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">VÍ SÀN TREO</span></td>
                  <td class="p-3 border-r text-right font-mono font-bold text-slate-900">218,300,000đ</td>
                  <td class="p-3 border-r text-right font-mono font-bold text-emerald-700">162,000,000đ</td>
                  <td class="p-3 border-r text-right font-mono font-bold text-red-600">-56,300,000đ</td>
                  <td class="p-3 text-slate-500 font-normal">Tiền đơn Shopee đợt 15-20/09 chưa đối soát về ngân hàng</td>
                </tr>

                <tr class="hover:bg-slate-50">
                  <td class="p-3 border-r font-bold text-slate-800">3. Giá vốn xuất kho (COGS)</td>
                  <td class="p-3 border-r"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-300">GIÁ VỐN</span></td>
                  <td class="p-3 border-r text-right font-mono font-bold text-red-700">-182,400,000đ</td>
                  <td class="p-3 border-r text-right font-mono font-bold text-red-700">-198,850,000đ</td>
                  <td class="p-3 border-r text-right font-mono text-slate-600">-16,450,000đ</td>
                  <td class="p-3 text-slate-500 font-normal">Chi mua gom tồn kho đợt Mega Sale 11.11</td>
                </tr>

                <tr class="hover:bg-slate-50">
                  <td class="p-3 border-r font-bold text-slate-800">4. Chi phí OPEX (Mặt bằng + Lương)</td>
                  <td class="p-3 border-r"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800">VẬN HÀNH</span></td>
                  <td class="p-3 border-r text-right font-mono font-bold text-red-700">-72,100,000đ</td>
                  <td class="p-3 border-r text-right font-mono font-bold text-red-700">-61,450,000đ</td>
                  <td class="p-3 border-r text-right font-mono font-bold text-emerald-700">+10,650,000đ</td>
                  <td class="p-3 text-slate-500 font-normal">Còn lương thưởng hiệu quả nhân viên chưa chi trả cuối tháng</td>
                </tr>

                <tr class="bg-purple-50/70 font-bold border-t-2 border-[#714B67]">
                  <td class="p-3 border-r text-purple-950">TỔNG LỢI NHUẬN RÒNG CUỐI KỲ</td>
                  <td class="p-3 border-r"><span class="px-2 py-0.5 bg-[#714B67] text-white rounded text-[10px]">TỔNG KẾT</span></td>
                  <td class="p-3 border-r text-right font-mono text-sm text-purple-950">72,400,000đ</td>
                  <td class="p-3 border-r text-right font-mono text-sm text-emerald-800">54,200,000đ</td>
                  <td class="p-3 border-r text-right font-mono text-slate-700">-18,200,000đ</td>
                  <td class="p-3 text-purple-900 font-semibold">Bảo tồn tiền mặt bỏ túi +54.2M an toàn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // Sub-tab 5: BO-02 Ghi Nhận Chi Phí Nhanh & Ngân Sách OPEX
  renderOPEXMobile: function() {
    return `
      <div class="space-y-6">
        <!-- Subheader & Quick Ledger Control Bar -->
        <div class="o-card p-5 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wide">BO-02: Smart Bookkeeper Hub</span>
              <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <i class="lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400"></i> Realtime Sync KiotViet OPEX
              </span>
            </div>
            <h1 class="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Ghi Nhận Chi Phí Nhanh & Quản Lý Ngân Sách OPEX
            </h1>
            <p class="text-xs text-slate-300">Quét hóa đơn OCR tự động bóc tách MST, nói để ghi sổ và giám sát hạn mức chi tiêu 7 nhóm ngân sách.</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button onclick="Zone0Shell.openFinancialConfirm('Lập Phí Chi Mới', '<p class=\"text-xs text-slate-600\">Nhập thông tin khoản chi OPEX thủ công (Người nhận, Số tiền, Hóa đơn chứng từ gốc).</p>', 'Mở Form Lập Phí Chi', () => alert('Đã mở form lập phiếu chi mới!'))" class="px-4 py-2 bg-[#714B67] hover:bg-purple-900 text-white font-bold text-xs rounded-lg transition shadow flex items-center gap-1.5">
              <i class="lucide-plus-circle w-4 h-4 text-amber-300"></i> Lập Phiếu Chi Mới (+)
            </button>
            <button onclick="alert('Đã xuất sổ chi phí dạng Excel!')" class="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition">
              <i class="lucide-download w-4 h-4 text-sky-400"></i> Xuất Sổ (.XLSX)
            </button>
          </div>
        </div>

        <!-- Prominent OCR & Voice Quick-Expense Banner -->
        <div class="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 p-5 text-white shadow-xl border border-purple-800/50">
          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="space-y-1 max-w-xl">
              <div class="flex items-center gap-2">
                <i class="lucide-scan-line w-5 h-5 text-amber-400"></i>
                <span class="text-xs font-bold text-amber-300 uppercase tracking-wider">Smart Bookkeeper AI Engine v4.2</span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/40">Auto OCR & Voice</span>
              </div>
              <h2 class="text-base font-extrabold text-white">Chụp Hóa Đơn OCR & Quét e-VAT Điện Tử Tự Động</h2>
              <p class="text-xs text-slate-300 leading-relaxed">
                Tự động bóc tách số tiền, Mã số thuế (MST), tên Nhà cung cấp từ bill thanh toán hoặc đọc câu lệnh nói: <em class="text-amber-200">"Chi 120k tiền cafe tiếp đại lý An Nhiên"</em>.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <button onclick="alert('📸 Đã mở Camera quét hóa đơn OCR!')" class="px-4 py-2.5 bg-white text-purple-950 font-extrabold text-xs rounded-lg shadow hover:bg-slate-100 transition flex items-center gap-2">
                <i class="lucide-camera w-4 h-4 text-purple-700"></i> Quét Hóa Đơn / e-VAT
              </button>
              <button onclick="alert('🎙️ Đã kích hoạt AI Voice to Expense: Vui lòng nói khoản chi...')" class="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs rounded-lg transition backdrop-blur-md flex items-center gap-2">
                <i class="lucide-mic w-4 h-4 text-amber-300"></i> Nói Để Nhập Chi
              </button>
            </div>
          </div>
        </div>

        <!-- 4 Core OPEX Glance Metrics Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tổng OPEX Tháng 10</span>
              <div class="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                <i class="lucide-calculator w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">412.500.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-amber-700 font-bold">
                <i class="lucide-gauge w-3.5 h-3.5"></i> 96.4% <span class="text-slate-500 font-normal">/ 428M định mức</span>
              </div>
            </div>
          </div>

          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Giá Vốn COGS</span>
              <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
                <i class="lucide-package w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-slate-900 font-mono">968.730.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-slate-600 font-semibold">
                52.5% Doanh Thu (1.845B)
              </div>
            </div>
          </div>

          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Lợi Nhuận Ước Tính (EBT)</span>
              <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <i class="lucide-dollar-sign w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-emerald-800 font-mono">463.970.000 ₫</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-emerald-600 font-bold">
                <i class="lucide-trending-up w-3.5 h-3.5"></i> Biên 25.15% <span class="text-slate-500 font-normal">• Vượt mục tiêu</span>
              </div>
            </div>
          </div>

          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-red-600 uppercase tracking-wide">Khoản Chi Chờ Duyệt</span>
              <div class="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                <i class="lucide-alert-triangle w-4.5 h-4.5"></i>
              </div>
            </div>
            <div class="mt-2">
              <div class="text-xl font-extrabold text-red-700 font-mono">28.500.000 ₫</div>
              <button onclick="Zone0Shell.openFinancialConfirm('Duyệt Khoản Chi 28.5M', '<p class=\"text-xs text-slate-600\">Chi phí quảng cáo TikTok Ads 18.5M + Tiền thuê mặt bằng kho Q.1 10.0M.</p>', 'Duyệt Chi Ngay', () => alert('Đã duyệt khoản chi!'))" class="mt-1 text-[11px] text-purple-700 font-bold hover:underline flex items-center gap-1">
                <i class="lucide-check-circle-2 w-3 h-3"></i> 2 khoản đang chờ duyệt ➔
              </button>
            </div>
          </div>
        </div>

        <!-- Budget Progress Category Matrix -->
        <div class="o-card p-5 space-y-4">
          <div class="flex items-center justify-between border-b pb-3">
            <h3 class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i class="lucide-pie-chart w-4.5 h-4.5 text-[#714B67]"></i> Phân Bổ Ngân Sách 7 Nhóm Chi Phí OPEX
            </h3>
            <span class="text-xs font-bold text-slate-600">Định Mức T10: 428,000,000 VNĐ</span>
          </div>

          <div class="space-y-3">
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div class="flex justify-between items-center text-xs font-bold text-slate-800">
                <span class="flex items-center gap-2"><i class="lucide-building-2 w-4 h-4 text-purple-700"></i> 1. Tiền thuê Showroom Q.1 & Kho hàng</span>
                <span class="font-mono text-purple-900">45,000,000 / 45,000,000 ₫ (100%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div class="bg-purple-700 h-2 rounded-full" style="width: 100%"></div>
              </div>
            </div>

            <div class="p-3.5 bg-red-50 border border-red-200 rounded-xl space-y-2">
              <div class="flex justify-between items-center text-xs font-bold text-red-950">
                <span class="flex items-center gap-2"><i class="lucide-megaphone w-4 h-4 text-red-600"></i> 2. Marketing TikTok Ads & Shopee Ads</span>
                <span class="font-mono text-red-700">62,400,000 / 60,000,000 ₫ (104.0% - VƯỢT NGÂN SÁCH)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div class="bg-red-600 h-2 rounded-full" style="width: 100%"></div>
              </div>
            </div>

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div class="flex justify-between items-center text-xs font-bold text-slate-800">
                <span class="flex items-center gap-2"><i class="lucide-users w-4 h-4 text-sky-700"></i> 3. Lương Nhân Sự & Hoa Hồng POS</span>
                <span class="font-mono text-sky-900">185,000,000 / 190,000,000 ₫ (97.3%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div class="bg-sky-600 h-2 rounded-full" style="width: 97.3%"></div>
              </div>
            </div>

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div class="flex justify-between items-center text-xs font-bold text-slate-800">
                <span class="flex items-center gap-2"><i class="lucide-zap w-4 h-4 text-emerald-600"></i> 4. Điện nước, Internet & Cloud Server</span>
                <span class="font-mono text-emerald-800">18,200,000 / 22,000,000 ₫ (82.7%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div class="bg-emerald-600 h-2 rounded-full" style="width: 82.7%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  switchSubTab: function(tabKey) {
    MockData.subTabs.sales = tabKey;
    App.render();
  },

  switchPnLMode: function(modeKey) {
    MockData.subTabs.pnlMode = modeKey;
    App.render();
  },

  openVietQRModal: function() {
    document.getElementById('vietqr-modal')?.classList.remove('hidden');
  },
  closeVietQRModal: function() {
    document.getElementById('vietqr-modal')?.classList.add('hidden');
  },
  openOrderDetailModal: function(orderId) {
    const order = MockData.orders.find(o => o.id === orderId) || { id: orderId, customer: 'Nguyễn Văn Hùng', channel: 'Shopee Mall', date: '24/10/2024 14:15', payment: 'Ví ShopeePay', status: 'Đã hoàn tất', total: 1280000 };
    const modal = document.getElementById('order-detail-modal');
    if (!modal) return;
    const elId = document.getElementById('modal-order-id');
    const elCustomer = document.getElementById('modal-order-customer');
    const elChannel = document.getElementById('modal-order-channel');
    const elPayment = document.getElementById('modal-order-payment');
    const elDate = document.getElementById('modal-order-date');
    if (elId) elId.innerText = `Chi Tiết Đơn Hàng ${order.id}`;
    if (elCustomer) elCustomer.innerText = order.customer;
    if (elChannel) elChannel.innerText = order.channel + ' (Giao hàng hỏa tốc)';
    if (elPayment) elPayment.innerText = order.payment;
    if (elDate) elDate.innerText = order.date;
    modal.classList.remove('hidden');
  },
  closeOrderDetailModal: function() {
    document.getElementById('order-detail-modal')?.classList.add('hidden');
  }
};
