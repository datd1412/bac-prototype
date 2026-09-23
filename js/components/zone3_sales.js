/* ==========================================================================
   ZONE 3: BO MODULE - SALES, ORDERS & EXPENSE FINANCIALS (PARITY COMPLETE)
   ========================================================================== */

const Zone3Sales = {
  render: function() {
    const activeSubTab = MockData.subTabs.sales || 'omnichannel';

    return `
      <div class="space-y-6">
        <!-- Sub-navigation Tabs for 100% 54-Screen Coverage -->
        <div class="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-semibold text-slate-600">
          <button onclick="Zone3Sales.switchSubTab('omnichannel')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'omnichannel' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            🛒 1. Đơn Hàng Đa Kênh (Shopee, TikTok, POS)
          </button>
          <button onclick="Zone3Sales.switchSubTab('new_order_form')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'new_order_form' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            📝 2. Tạo Đơn Hàng Mới (+)
          </button>
          <button onclick="Zone3Sales.switchSubTab('marketplace_recon')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'marketplace_recon' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            🏦 3. Đối Soát Tiền Về Ngân Hàng (Shopee & TikTok)
          </button>
          <button onclick="Zone3Sales.switchSubTab('cashflow_accrual')" class="px-3 py-1.5 rounded-lg transition ${activeSubTab === 'cashflow_accrual' ? 'bg-[#714B67] text-white shadow-sm' : 'hover:bg-slate-100'}">
            💰 4. Báo Cáo Thu Chi & Lợi Nhuận Thực Nhận
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

            <div class="p-3 bg-slate-50 border-t flex justify-end gap-2">
              <button onclick="Zone3Sales.closeVietQRModal()" class="px-4 py-1.5 text-xs font-semibold bg-slate-800 text-white rounded hover:bg-slate-900">Xác nhận Đã thu tiền</button>
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
                <tr class="hover:bg-slate-50 cursor-pointer" onclick="alert('Xem chi tiết đơn hàng: ${o.id}')">
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
            <button onclick="alert('Đã xác nhận xuất kho!')" class="px-3 py-1.5 text-xs font-semibold bg-emerald-700 text-white rounded">Xác Nhận Xuất Kho</button>
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

  // Sub-tab 4: Cashflow vs Accrual P&L (b_o_c_o_l_i_l_p_l_chi_ti_t_accrual_vs_cashflow & s_thu_chi_d_ng_ti_n_th_c_t_cashflow_p_l)
  renderCashflowAccrual: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <div>
            <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
              <i class="lucide-scale w-4 h-4 text-emerald-600"></i> Báo cáo So sánh Lợi nhuận Dồn tích (Accrual P&L) vs Dòng tiền Thực tế (Cashflow)
            </h2>
            <span class="text-xs text-slate-500">Phân biệt giữa Doanh thu ghi nhận đơn và Tiền mặt thực thu/thực chi trong két</span>
          </div>
          <span class="badge-calc">SO SÁNH THU CHI</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse border border-slate-200">
            <thead>
              <tr class="bg-slate-100 text-slate-700 font-semibold border-b">
                <th class="p-2.5 border">Ngày ghi nhận</th>
                <th class="p-2.5 border">Loại Thu/Chi</th>
                <th class="p-2.5 border">Khoản mục Hạng mục</th>
                <th class="p-2.5 border text-right">Doanh Thu Dồn Tích (Accrual)</th>
                <th class="p-2.5 border text-right">Tiền Thực Thu/Chi (Cashflow)</th>
                <th class="p-2.5 border">Ghi chú Nghiệp vụ</th>
              </tr>
            </thead>
            <tbody>
              ${MockData.financialLedger.map(f => `
                <tr class="hover:bg-slate-50">
                  <td class="p-2.5 border font-mono text-slate-500">${f.date}</td>
                  <td class="p-2.5 border font-bold ${f.type === 'THU' ? 'text-emerald-600' : 'text-red-600'}">${f.type}</td>
                  <td class="p-2.5 border font-medium text-slate-800">${f.category}</td>
                  <td class="p-2.5 border text-right font-mono font-bold text-slate-900">${f.accrualAmount.toLocaleString()}đ</td>
                  <td class="p-2.5 border text-right font-mono font-bold ${f.cashAmount > 0 ? 'text-emerald-700' : 'text-slate-400'}">${f.cashAmount.toLocaleString()}đ</td>
                  <td class="p-2.5 border text-slate-500">${f.note}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  switchSubTab: function(tabKey) {
    MockData.subTabs.sales = tabKey;
    App.render();
  },

  openVietQRModal: function() {
    document.getElementById('vietqr-modal')?.classList.remove('hidden');
  },
  closeVietQRModal: function() {
    document.getElementById('vietqr-modal')?.classList.add('hidden');
  }
};
