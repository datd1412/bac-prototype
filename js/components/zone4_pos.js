/* ==========================================================================
   ZONE 4: SE MODULE - STORE EMPLOYEE & POS TERMINAL (DYNAMIC INTERACTIVE)
   ========================================================================== */

const Zone4POS = {
  cart: [
    { id: 'prod_01', name: 'Serum Dưỡng Trắng Vitamin C 30ml', price: 450000, qty: 1, sku: 'SKU-COS-001', note: 'Lô LOT-202608-A' },
    { id: 'prod_02', name: 'Áo Sơ Mi Lụa Premium Silk Oversized', price: 680000, qty: 1, sku: 'SKU-CLO-102', note: 'Size M - Trắng' }
  ],
  selectedCategory: 'ALL',
  searchQuery: '',
  shiftModalOpen: false,
  returnModalOpen: false,
  warrantyModalOpen: false,

  render: function() {
    const activeSubTab = MockData.subTabs.pos || 'terminal';
    return `
      <div class="space-y-4">
        <!-- Sub-navigation Tabs (Odoo Enterprise Menu Link Style) -->
        <div class="flex items-center gap-5 border-b border-slate-200 pb-0 overflow-x-auto text-xs text-slate-600 mb-2">
          <button onclick="Zone4POS.switchSubTab('terminal')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'terminal' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-monitor w-3.5 h-3.5"></i> 1. Màn Hình Tính Tiền POS (Bán Hàng & In Hóa Đơn)
          </button>
          <button onclick="Zone4POS.switchSubTab('returns_warranty')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'returns_warranty' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-rotate-ccw w-3.5 h-3.5"></i> 2. Đổi Trả & Bảo Hành Cho Khách
          </button>
          <button onclick="Zone4POS.switchSubTab('inventory_count')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'inventory_count' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-clipboard-check w-3.5 h-3.5"></i> 3. Kiểm Kê & Kiểm Date Mỹ Phẩm FEFO
          </button>
          <button onclick="Zone4POS.switchSubTab('product_directory')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'product_directory' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-search w-3.5 h-3.5"></i> 4. Tra Cứu Giá & Tồn Kho Sản Phẩm
          </button>
          <button onclick="Zone4POS.switchSubTab('store_inward')" class="pb-2.5 px-1 border-b-2 transition flex items-center gap-1.5 ${activeSubTab === 'store_inward' ? 'border-[#714B67] text-[#714B67] font-bold' : 'border-transparent hover:text-slate-900 font-medium'}">
            <i class="lucide-arrow-down-to-line w-3.5 h-3.5"></i> 5. Nhập Hàng Từ Kho Tổng Về Quầy (SE-03)
          </button>
        </div>

        ${activeSubTab === 'terminal' ? this.renderTerminal() : ''}
        ${activeSubTab === 'returns_warranty' ? this.renderReturnsWarranty() : ''}
        ${activeSubTab === 'inventory_count' ? this.renderInventoryCount() : ''}
        ${activeSubTab === 'product_directory' ? this.renderProductDirectory() : ''}
        ${activeSubTab === 'store_inward' ? this.renderStoreInward() : ''}
      </div>

      <!-- === MODALS (outside main content, persist across renders) === -->
      <!-- Shift Closing Modal -->
      <div id="shift-closing-modal" class="${this.shiftModalOpen ? '' : 'hidden'} fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onclick="Zone4POS.closeShiftModal()">
        <div class="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md text-slate-800 overflow-hidden" onclick="event.stopPropagation()">
          <div class="bg-slate-900 text-white p-4 flex items-center justify-between">
            <h3 class="font-bold text-sm">Chốt Ca Thu Ngân & Bàn Giao Két Tiền</h3>
            <button onclick="Zone4POS.closeShiftModal()" class="text-slate-400 hover:text-white"><i class="lucide-x w-5 h-5"></i></button>
          </div>
          <div class="p-5 space-y-3 text-xs">
            <div class="flex justify-between border-b pb-2">
              <span class="text-slate-500">Tiền mặt đầu ca:</span>
              <span class="font-bold text-slate-800">2,000,000 VNĐ</span>
            </div>
            <div class="flex justify-between border-b pb-2">
              <span class="text-slate-500">Doanh thu tiền mặt ca này:</span>
              <span class="font-bold text-emerald-600">+${this.cart.reduce((s,i) => s+i.price*i.qty,0).toLocaleString()} VNĐ</span>
            </div>
            <div class="flex justify-between border-b pb-2">
              <span class="text-slate-500">Tổng giao dịch POS trong ca:</span>
              <span class="font-bold text-slate-800">8 giao dịch</span>
            </div>
            <div class="space-y-1 pt-2">
              <label class="font-bold text-slate-700">Tiền mặt thực tế trong két khi đếm:</label>
              <input type="number" value="${2000000 + this.cart.reduce((s,i) => s+i.price*i.qty,0)}" class="w-full p-2 border border-slate-300 rounded font-bold text-xs" />
            </div>
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Ghi chú bàn giao:</label>
              <textarea class="w-full p-2 border border-slate-300 rounded text-xs" rows="2" placeholder="Không có vấn đề phát sinh..."></textarea>
            </div>
          </div>
          <div class="p-3 bg-slate-50 border-t flex justify-end gap-2">
            <button onclick="Zone4POS.closeShiftModal()" class="px-4 py-1.5 text-xs font-semibold bg-slate-200 text-slate-700 rounded">Hủy bỏ</button>
            <button onclick="Zone4POS.confirmShiftClose()" class="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded">XÁC NHẬN BÀN GIAO CA</button>
          </div>
        </div>
      </div>
    `;
  },

  renderTerminal: function() {
    const totalAmount = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const filteredProducts = MockData.products.filter(p => {
      const matchCat = this.selectedCategory === 'ALL' || p.category.includes(this.selectedCategory);
      const matchSearch = !this.searchQuery || p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || p.sku.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    return `
      <div class="h-[calc(100vh-11rem)] flex flex-col md:flex-row gap-4 overflow-hidden">
        <!-- Left Column: Cart & Touch Numpad (40% Width) -->
        <div class="w-full md:w-5/12 o-card flex flex-col justify-between p-4 bg-white shadow-sm">
          <div>
            <!-- Header Cashier Info -->
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow">SE</div>
                <div>
                  <div class="text-xs font-bold text-slate-800">Thu ngân: Quách Chí Hùng</div>
                  <div class="text-[10px] text-slate-500">Ca sáng - Chi nhánh Q1</div>
                </div>
              </div>
              <button onclick="Zone4POS.openShiftModal()" id="btn-chot-ca" class="px-2.5 py-1 text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300 rounded hover:bg-amber-200 transition">
                Chốt ca & Kết sổ
              </button>
            </div>

            <!-- Cart Items Header -->
            <div class="text-xs font-bold text-slate-700 mb-2 flex justify-between items-center">
              <span>Giỏ hàng POS Thu ngân</span>
              <div class="flex items-center gap-2">
                <span class="text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded text-[11px]">${totalItems} món</span>
                ${this.cart.length > 0 ? `<button onclick="Zone4POS.clearCart()" class="text-[10px] text-red-600 font-bold hover:underline">Clear all</button>` : ''}
              </div>
            </div>

            <!-- Cart Items Scroll Area -->
            <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
              ${this.cart.length === 0 ? `
                <div class="p-8 text-center text-slate-400 text-xs border border-dashed rounded-lg">
                  <i class="lucide-shopping-cart w-8 h-8 mx-auto mb-2 opacity-50"></i>
                  Giỏ hàng đang trống.<br/>Click vào sản phẩm bên phải để bán hàng.
                </div>
              ` : this.cart.map((item, idx) => `
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs hover:border-blue-300 transition">
                  <div class="flex-1 pr-2">
                    <div class="font-bold text-slate-800 leading-tight">${item.name}</div>
                    <div class="text-[10px] text-slate-400 font-mono mt-0.5">${item.sku} | ${item.note || ''}</div>
                  </div>
                  
                  <!-- Quantity controls -->
                  <div class="flex items-center gap-2">
                    <div class="flex items-center border border-slate-300 rounded bg-white overflow-hidden text-xs">
                      <button onclick="Zone4POS.updateQty(${idx}, -1)" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold">-</button>
                      <span class="px-2 py-0.5 font-bold text-slate-800 min-w-[20px] text-center">${item.qty}</span>
                      <button onclick="Zone4POS.updateQty(${idx}, 1)" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold">+</button>
                    </div>

                    <div class="text-right min-w-[75px]">
                      <div class="font-bold text-blue-900">${(item.price * item.qty).toLocaleString()}đ</div>
                    </div>

                    <button onclick="Zone4POS.removeItem(${idx})" class="text-slate-400 hover:text-red-600 p-1">
                      <i class="lucide-trash-2 w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom: Touch Numpad & Payment Bar -->
          <div class="pt-3 border-t border-slate-200 space-y-2.5">
            <div class="bg-blue-50 border border-blue-200 p-3 rounded-lg flex items-center justify-between">
              <span class="text-xs font-bold text-blue-950">TỔNG THANH TOÁN:</span>
              <span class="text-xl font-extrabold text-blue-900">${totalAmount.toLocaleString()} VNĐ</span>
            </div>

            <!-- Touch Numpad Grid -->
            <div class="grid grid-cols-4 gap-1.5 font-bold text-xs">
              <button onclick="Zone4POS.numpadPress('1')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">1</button>
              <button onclick="Zone4POS.numpadPress('2')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">2</button>
              <button onclick="Zone4POS.numpadPress('3')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">3</button>
              <button onclick="Zone4POS.numpadPress('QTY')" class="p-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded transition">SL</button>
              <button onclick="Zone4POS.numpadPress('4')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">4</button>
              <button onclick="Zone4POS.numpadPress('5')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">5</button>
              <button onclick="Zone4POS.numpadPress('6')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">6</button>
              <button onclick="Zone4POS.numpadPress('DISC')" class="p-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded transition">% CK</button>
              <button onclick="Zone4POS.numpadPress('7')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">7</button>
              <button onclick="Zone4POS.numpadPress('8')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">8</button>
              <button onclick="Zone4POS.numpadPress('9')" class="p-2.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 transition">9</button>
              <button onclick="Zone4POS.clearCart()" class="p-2.5 bg-red-100 hover:bg-red-200 text-red-800 rounded transition">Xóa hết</button>
            </div>

            <!-- Payment Method Buttons -->
            <div class="grid grid-cols-3 gap-1.5 text-xs font-bold">
              <button onclick="Zone4POS.payMethod('cash')" ${this.cart.length === 0 ? 'disabled' : ''} class="py-2 ${this.cart.length === 0 ? 'bg-slate-200 cursor-not-allowed text-slate-400' : 'bg-emerald-600 hover:bg-emerald-700 text-white'} rounded transition flex items-center justify-center gap-1">
                <i class="lucide-banknote w-3.5 h-3.5"></i> Tiền mặt
              </button>
              <button onclick="Zone4POS.payMethod('card')" ${this.cart.length === 0 ? 'disabled' : ''} class="py-2 ${this.cart.length === 0 ? 'bg-slate-200 cursor-not-allowed text-slate-400' : 'bg-blue-600 hover:bg-blue-700 text-white'} rounded transition flex items-center justify-center gap-1">
                <i class="lucide-credit-card w-3.5 h-3.5"></i> Thẻ
              </button>
              <button onclick="Zone4POS.payMethod('qr')" ${this.cart.length === 0 ? 'disabled' : ''} class="py-2 ${this.cart.length === 0 ? 'bg-slate-200 cursor-not-allowed text-slate-400' : 'bg-purple-600 hover:bg-purple-700 text-white'} rounded transition flex items-center justify-center gap-1">
                <i class="lucide-qr-code w-3.5 h-3.5"></i> QR Pay
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column: Touchscreen Product Grid Cards (60% Width) -->
        <div class="w-full md:w-7/12 o-card p-4 bg-white flex flex-col shadow-sm">
          <div>
            <!-- Categories & Search Bar Header -->
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200">
              <!-- Category Filter Buttons -->
              <div class="flex items-center gap-1.5 overflow-x-auto text-xs">
                <button onclick="Zone4POS.filterCat('ALL')" class="px-3 py-1 font-bold rounded-full transition ${this.selectedCategory === 'ALL' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">Tất cả</button>
                <button onclick="Zone4POS.filterCat('Mỹ phẩm')" class="px-3 py-1 font-semibold rounded-full transition ${this.selectedCategory === 'Mỹ phẩm' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">Mỹ phẩm Dưỡng da</button>
                <button onclick="Zone4POS.filterCat('Thời trang')" class="px-3 py-1 font-semibold rounded-full transition ${this.selectedCategory === 'Thời trang' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">Thời trang Nữ</button>
              </div>

              <!-- Quick Search -->
              <div class="relative w-full sm:w-48">
                <i class="lucide-search w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400"></i>
                <input type="text" id="pos-search-input" placeholder="Tìm sản phẩm..." value="${this.searchQuery}" oninput="Zone4POS.onSearch(this.value)" class="w-full pl-8 pr-3 py-1 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
            </div>

            <!-- Product Touch Cards Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 max-h-[calc(100vh-18rem)] overflow-y-auto pr-1">
              ${filteredProducts.length === 0 ? `
                <div class="col-span-full p-8 text-center text-slate-400 text-xs">
                  Không tìm thấy sản phẩm nào phù hợp.
                </div>
              ` : filteredProducts.map(p => `
                <div onclick="Zone4POS.addToCart('${p.id}')" class="border border-slate-200 rounded-xl p-3 bg-white hover:border-blue-500 hover:shadow-md cursor-pointer transition flex flex-col justify-between group active:scale-95">
                  <div>
                    <img src="${p.image}" alt="${p.name}" class="w-full h-24 object-cover rounded-lg mb-2 group-hover:scale-105 transition" onerror="this.src='https://via.placeholder.com/200x200/f1f5f9/64748b?text=SP'" />
                    <div class="font-bold text-xs text-slate-800 line-clamp-2 leading-snug">${p.name}</div>
                    <div class="text-[10px] text-slate-400 font-mono mt-0.5">${p.sku}</div>
                  </div>
                  <div class="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-xs font-bold text-blue-900">${p.price.toLocaleString()}đ</span>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${p.stock < p.minStock ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}">${p.stock} tồn</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // SE-04: Đổi Trả & Bảo Hành Tại Quầy POS
  renderReturnsWarranty: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <div>
            <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
              <i class="lucide-rotate-ccw w-4 h-4 text-orange-600"></i> Xử lý Đổi Trả Hàng & Bảo Hành Tại Quầy POS (SE-04)
            </h2>
            <span class="text-xs text-slate-500">Tra cứu đơn hàng gốc, ghi nhận lý do đổi trả, tạo phiếu hoàn tiền hoặc phiếu bảo hành</span>
          </div>
          <button onclick="alert('Đã tạo phiếu đổi trả mới!')" class="px-3 py-1.5 text-xs font-semibold bg-orange-600 text-white rounded hover:bg-orange-700 transition flex items-center gap-1.5 shadow">
            <i class="lucide-plus-circle w-3.5 h-3.5"></i> Tạo Phiếu Đổi/Trả Mới
          </button>
        </div>

        <!-- Search by Invoice/Order -->
        <div class="flex gap-3">
          <div class="relative flex-1">
            <i class="lucide-search w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400"></i>
            <input type="text" placeholder="Tìm theo mã đơn hàng, SĐT khách hàng..." class="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500" value="ORD-2026-0893" />
          </div>
          <button onclick="alert('Tìm thấy đơn hàng ORD-2026-0893!')" class="px-4 py-2 text-xs font-bold bg-slate-800 text-white rounded hover:bg-slate-900">Tra Cứu</button>
        </div>

        <!-- Found Order -->
        <div class="p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <div class="flex items-center justify-between mb-3">
            <div>
              <div class="text-xs font-bold text-orange-900">Đơn hàng: ORD-2026-0893</div>
              <div class="text-[10px] text-orange-700">Khách lẻ Tại Quầy | POS Cửa hàng | 23/09/2026 16:05</div>
            </div>
            <span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Đã hoàn tất</span>
          </div>
          <div class="text-xs space-y-1.5">
            <div class="flex justify-between items-center py-1.5 border-b border-orange-200">
              <span class="font-medium text-slate-800">Serum Dưỡng Trắng Vitamin C 30ml</span>
              <div class="flex items-center gap-4">
                <span class="text-slate-500">x1 = 450,000đ</span>
                <button onclick="alert('Đã chọn sản phẩm để đổi/trả!')" class="px-2.5 py-1 text-[10px] font-bold bg-orange-600 text-white rounded">Đổi/Trả →</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Return Reason & Warranty Form -->
        <div class="grid grid-cols-2 gap-4 text-xs">
          <div class="space-y-3">
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Loại xử lý:</label>
              <select class="w-full p-2 border border-slate-300 rounded text-xs">
                <option>Đổi sản phẩm cùng loại</option>
                <option>Hoàn tiền (Refund)</option>
                <option>Bảo hành sản phẩm</option>
                <option>Đổi sang sản phẩm khác</option>
              </select>
            </div>
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Lý do đổi/trả:</label>
              <select class="w-full p-2 border border-slate-300 rounded text-xs">
                <option>Sản phẩm bị lỗi/hỏng</option>
                <option>Không đúng mô tả</option>
                <option>Khách đổi ý</option>
                <option>Dị ứng da (Mỹ phẩm)</option>
                <option>Sai size/màu</option>
              </select>
            </div>
          </div>
          <div class="space-y-3">
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Tình trạng sản phẩm trả về:</label>
              <select class="w-full p-2 border border-slate-300 rounded text-xs">
                <option>Còn nguyên vẹn, chưa sử dụng</option>
                <option>Đã qua sử dụng, còn tốt</option>
                <option>Bị hỏng, không thể bán lại</option>
              </select>
            </div>
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Ghi chú xử lý:</label>
              <textarea class="w-full p-2 border border-slate-300 rounded text-xs" rows="2" placeholder="Ghi chú chi tiết..."></textarea>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-2 pt-2 border-t">
          <button onclick="alert('Đã hủy quy trình đổi trả!')" class="px-4 py-2 text-xs font-semibold bg-slate-200 text-slate-700 rounded">Hủy bỏ</button>
          <button onclick="alert('Đã tạo phiếu đổi trả và ghi nhận vào hệ thống kho!')" class="px-4 py-2 text-xs font-bold bg-orange-600 text-white rounded hover:bg-orange-700 shadow">XÁC NHẬN ĐỔI/TRẢ → GHI KHO</button>
        </div>
      </div>
    `;
  },

  // SE-02: Kiểm Kê Tồn Kho Quầy & FEFO
  renderInventoryCount: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <div>
            <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
              <i class="lucide-clipboard-list w-4 h-4 text-emerald-600"></i> Kiểm Kê Tồn Kho Quầy & Quản lý Lô Hạn Dùng FEFO (SE-02)
            </h2>
            <span class="text-xs text-slate-500">Đếm thực tế tồn quầy, đối chiếu với hệ thống, quét mã HSD lô FEFO</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="alert('Đã bắt đầu phiên kiểm kê mới!')" class="px-3 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded hover:bg-emerald-700 transition flex items-center gap-1.5 shadow">
              <i class="lucide-play w-3.5 h-3.5"></i> Bắt Đầu Kiểm Kê
            </button>
            <button onclick="alert('Đã khoá phiên & ghi nhận điều chỉnh tồn kho!')" class="px-3 py-1.5 text-xs font-semibold bg-slate-700 text-white rounded hover:bg-slate-800">
              Khoá Phiên
            </button>
          </div>
        </div>

        <!-- Inventory Count Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse border border-slate-200">
            <thead>
              <tr class="bg-slate-100 text-slate-700 font-semibold border-b">
                <th class="p-2.5 border">Sản Phẩm</th>
                <th class="p-2.5 border">SKU / Mã Lô FEFO</th>
                <th class="p-2.5 border">HSD Lô Hàng</th>
                <th class="p-2.5 border text-right">Hệ Thống (Tồn lý thuyết)</th>
                <th class="p-2.5 border text-right">Đếm Thực Tế</th>
                <th class="p-2.5 border text-right">Chênh Lệch</th>
                <th class="p-2.5 border">Trạng Thái FEFO</th>
              </tr>
            </thead>
            <tbody>
              ${MockData.products.filter(p => p.domain === 'cosmetics').flatMap(p => 
                (p.batches || []).map(b => `
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 border font-medium text-slate-800">${p.name}</td>
                    <td class="p-2.5 border font-mono text-slate-600">${b.batchNo}</td>
                    <td class="p-2.5 border font-mono ${b.expDate < '2026-12-01' ? 'text-red-600 font-bold' : 'text-slate-600'}">${b.expDate}</td>
                    <td class="p-2.5 border text-right font-mono font-bold">${b.qty}</td>
                    <td class="p-2.5 border text-right">
                      <input type="number" value="${b.qty}" class="w-16 p-1 border border-slate-300 rounded text-right font-bold text-xs" />
                    </td>
                    <td class="p-2.5 border text-right font-bold text-emerald-600">0</td>
                    <td class="p-2.5 border"><span class="px-2 py-0.5 text-[10px] font-bold rounded ${b.status === 'CẬN HẠN DÙNG' ? 'bg-amber-100 text-amber-800' : b.status === 'SẮP HẾT HÀNG' ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}">${b.status}</span></td>
                  </tr>
                `)
              ).join('')}
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 border font-medium text-slate-800">Áo Sơ Mi Lụa Premium Silk Oversized</td>
                <td class="p-2.5 border font-mono text-slate-600">SKU-CLO-102 / Size M</td>
                <td class="p-2.5 border text-slate-400 italic">N/A (Thời trang)</td>
                <td class="p-2.5 border text-right font-mono font-bold">35</td>
                <td class="p-2.5 border text-right">
                  <input type="number" value="34" class="w-16 p-1 border border-red-300 rounded text-right font-bold text-xs bg-red-50" />
                </td>
                <td class="p-2.5 border text-right font-bold text-red-600">-1</td>
                <td class="p-2.5 border"><span class="px-2 py-0.5 text-[10px] font-bold rounded bg-red-100 text-red-800">CHÊNH LỆCH KHO</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-end pt-2">
          <button onclick="alert('Đã ghi nhận điều chỉnh tồn kho vào hệ thống!')" class="px-4 py-2 text-xs font-bold bg-emerald-700 text-white rounded hover:bg-emerald-800 shadow">
            GHI NHẬN ĐIỀU CHỈNH TỒN KHO →
          </button>
        </div>
      </div>
    `;
  },

  // SE-04: Tra Cứu Sản Phẩm & Thông Tin Bán Hàng
  renderProductDirectory: function() {
    return `
      <div class="o-card p-5 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h2 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="lucide-book-open w-4 h-4 text-indigo-600"></i> Tra Cứu Thông Tin Sản Phẩm & Tham Khảo Bán Hàng (SE-04)
          </h2>
          <div class="relative w-64">
            <i class="lucide-search w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400"></i>
            <input type="text" placeholder="Tìm theo tên, SKU, barcode..." class="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${MockData.products.map(p => `
            <div class="border border-slate-200 rounded-xl p-4 bg-white hover:shadow-lg transition flex gap-4">
              <img src="${p.image}" alt="${p.name}" class="w-20 h-20 object-cover rounded-lg border border-slate-200 shrink-0" onerror="this.src='https://via.placeholder.com/80x80/f1f5f9/64748b?text=SP'" />
              <div class="flex-1 space-y-2">
                <div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded ${p.domain === 'cosmetics' ? 'bg-pink-100 text-pink-800' : 'bg-blue-100 text-blue-800'}">${p.category}</span>
                  <h3 class="font-bold text-xs text-slate-800 mt-1">${p.name}</h3>
                  <div class="text-[10px] font-mono text-slate-400">SKU: ${p.sku}</div>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="bg-slate-50 p-2 rounded">
                    <div class="text-slate-500">Giá bán lẻ:</div>
                    <div class="font-bold text-blue-900">${p.price.toLocaleString()}đ</div>
                  </div>
                  <div class="bg-slate-50 p-2 rounded">
                    <div class="text-slate-500">Tồn kho:</div>
                    <div class="font-bold ${p.stock < p.minStock ? 'text-red-600' : 'text-emerald-700'}">${p.stock} ${p.domain === 'cosmetics' ? 'hộp' : 'cái'}</div>
                  </div>
                </div>

                ${p.domain === 'cosmetics' && p.batches ? `
                  <div class="bg-pink-50 border border-pink-100 rounded p-2 text-[10px]">
                    <div class="font-bold text-pink-900 mb-1">Lô hàng FEFO:</div>
                    ${p.batches.map(b => `<div class="flex justify-between font-mono"><span>${b.batchNo}</span><span class="${b.status === 'CẬN HẠN DÙNG' ? 'text-amber-700 font-bold' : 'text-slate-600'}">HSD: ${b.expDate}</span></div>`).join('')}
                  </div>
                ` : ''}

                ${p.domain === 'clothing' && p.variants ? `
                  <div class="bg-blue-50 border border-blue-100 rounded p-2 text-[10px]">
                    <div class="font-bold text-blue-900 mb-1">Biến thể có sẵn:</div>
                    <div class="flex flex-wrap gap-1">
                      ${p.variants.map(v => `<span class="bg-white border border-blue-200 px-1.5 py-0.5 rounded font-mono">${v.size}/${v.color}: ${v.qty}</span>`).join('')}
                    </div>
                  </div>
                ` : ''}

                <button onclick="Zone4POS.addToCart('${p.id}'); Zone4POS.switchSubTab('terminal');" class="w-full py-1.5 text-xs font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  + Thêm vào Giỏ POS
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // POS Dynamic Actions
  addToCart: function(id) {
    const prod = MockData.products.find(p => p.id === id);
    if (!prod) return;

    const existingIndex = this.cart.findIndex(i => i.id === id);
    if (existingIndex >= 0) {
      this.cart[existingIndex].qty += 1;
    } else {
      this.cart.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        qty: 1,
        sku: prod.sku,
        note: prod.domain === 'clothing' ? 'Size M' : 'Lô FEFO'
      });
    }
    App.render();
  },

  updateQty: function(idx, delta) {
    if (this.cart[idx]) {
      this.cart[idx].qty += delta;
      if (this.cart[idx].qty <= 0) {
        this.cart.splice(idx, 1);
      }
    }
    App.render();
  },

  removeItem: function(idx) {
    this.cart.splice(idx, 1);
    App.render();
  },

  clearCart: function() {
    this.cart = [];
    App.render();
  },

  filterCat: function(cat) {
    this.selectedCategory = cat;
    App.render();
  },

  onSearch: function(query) {
    this.searchQuery = query;
    App.render();
  },

  numpadPress: function(val) {
    if (val === 'QTY' || val === 'DISC') {
      alert(`Đã chọn chế độ ${val === 'QTY' ? 'Số lượng' : 'Chiết khấu'}`);
    } else if (this.cart.length > 0) {
      const lastIndex = this.cart.length - 1;
      const numVal = parseInt(val, 10);
      if (!isNaN(numVal) && numVal > 0) {
        this.cart[lastIndex].qty = numVal;
        App.render();
      }
    }
  },

  payMethod: function(method) {
    if (this.cart.length === 0) return;
    const totalAmount = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const methodName = method === 'cash' ? 'Tiền mặt' : method === 'card' ? 'Thẻ ngân hàng' : 'QR Pay';
    alert(`🎉 THANH TOÁN THÀNH CÔNG!\n\n- Phương thức: ${methodName}\n- Số tiền thu: ${totalAmount.toLocaleString()} VNĐ\n- Đã tự động trừ tồn kho & in hóa đơn bán hàng Thu ngân.`);
    this.cart = [];
    App.render();
  },

  pay: function() {
    this.payMethod('cash');
  },

  openShiftModal: function() {
    this.shiftModalOpen = true;
    App.render();
  },

  closeShiftModal: function() {
    this.shiftModalOpen = false;
    App.render();
  },

  confirmShiftClose: function() {
    alert('✅ Đã kết sổ ca thành công!\n\n- Đã in biên bản bàn giao két tiền\n- Đã ghi nhận doanh thu ca vào hệ thống\n- Ca tiếp theo bắt đầu khi nhân viên mới đăng nhập.');
    this.shiftModalOpen = false;
    App.render();
  },

  switchSubTab: function(tabKey) {
    MockData.subTabs.pos = tabKey;
    App.render();
  },

  // SE-03: Ghi Nhận Hàng Nhập Kho Tại Quầy (Store Inward Goods Receiving)
  renderStoreInward: function() {
    const skuItems = [
      { img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=80&q=80', name: 'Serum Bio-B5 Hydra Max 100ml', sku: 'SKU-COS-001', unit: 'Chai', location: 'Kệ A1-02', lot: 'LOT-202609-B5', hsd: '10/2027', poQty: 50, recQty: 50, prevStock: 35, status: 'ok', note: 'Mới sản xuất, HSD dài' },
      { img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=80&q=80', name: 'Kem Phục Hồi Ceramide Aura Care 50ml', sku: 'SKU-COS-008', unit: 'Hũ', location: 'Kệ B2-01', lot: 'LOT-202609-CR', hsd: '10/2027', poQty: 30, recQty: 30, prevStock: 18, status: 'ok', note: 'Hộp carton không móp méo' },
      { img: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=80&q=80', name: 'Son Kem Nhung Lì Velvet #03 Đỏ Gạch', sku: 'SKU-CLO-102', unit: 'Cây', location: 'Kệ Mặt Tiền T1', lot: 'LOT-202609-VT', hsd: '11/2027', poQty: 40, recQty: 40, prevStock: 42, status: 'ok', note: 'Màu bán chạy #1 ca sáng' },
      { img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=80&q=80', name: 'Nước Tẩy Trang Damask Rose 400ml', sku: 'SKU-COS-012', unit: 'Chai', location: 'Kệ C1-04', lot: 'LOT-202609-MC', hsd: '09/2027', poQty: 30, recQty: 30, prevStock: 24, status: 'ok', note: 'Nắp chai niêm màng co đầy đủ' }
    ];

    return `
      <div class="space-y-5">
        <!-- Top: Session Header Card -->
        <div class="o-card p-4 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-4">
            <!-- GRN Code -->
            <div class="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg">
              <i class="lucide-file-text w-5 h-5 text-[#714B67]"></i>
              <div>
                <div class="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Mã Chứng Từ GRN</div>
                <div class="text-sm font-extrabold text-slate-900 font-mono">#GRN-20260923-003</div>
              </div>
            </div>

            <div class="w-px h-10 bg-slate-200 hidden md:block"></div>

            <!-- Source: Transfer from Kho Tổng -->
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <i class="lucide-truck w-4 h-4"></i>
              </div>
              <div>
                <div class="text-[10px] text-slate-500">Nguồn điều chuyển</div>
                <div class="text-xs font-bold text-slate-900">Kho Tổng Tân Bình <span class="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-semibold ml-1">Phiếu #TO-89</span></div>
              </div>
            </div>

            <div class="w-px h-10 bg-slate-200 hidden lg:block"></div>

            <!-- Staff -->
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                <i class="lucide-shield-check w-4 h-4"></i>
              </div>
              <div>
                <div class="text-[10px] text-slate-500">Kiểm đếm & Phê duyệt</div>
                <div class="text-xs font-semibold text-slate-900">Quách Chí Hùng (#SE-02) <span class="text-slate-500">• SM: <span class="text-[#714B67] font-bold">Phạm Kim Hương</span></span></div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2 w-full xl:w-auto justify-end">
            <button onclick="alert('Đang mở camera quét mã QR/Barcode...')" class="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition">
              <i class="lucide-scan w-3.5 h-3.5 text-[#714B67]"></i> Quét PO/TO
            </button>
            <button onclick="alert('Đang in biên bản tiếp nhận...')" class="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition">
              <i class="lucide-printer w-3.5 h-3.5"></i> In Biên Bản [F7]
            </button>
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-300">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              PHIÊN NHẬP ĐANG MỞ • 10:25:14
            </div>
          </div>
        </div>

        <!-- 4 KPI Summary Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tổng Danh Mục SKU</div>
                <div class="text-2xl font-extrabold text-slate-900 mt-1">04 <span class="text-sm text-slate-400 font-normal">mặt hàng</span></div>
              </div>
              <div class="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <i class="lucide-layers w-5 h-5"></i>
              </div>
            </div>
            <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-emerald-600 font-bold flex items-center gap-1"><i class="lucide-check-circle w-3.5 h-3.5"></i> 4/4 SKU khớp tem</span>
              <span class="text-slate-400">100%</span>
            </div>
          </div>

          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tổng SL Thực Nhận</div>
                <div class="text-2xl font-extrabold text-[#714B67] mt-1">150<span class="text-sm text-slate-400 font-normal"> / 150</span></div>
              </div>
              <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <i class="lucide-package-check w-5 h-5"></i>
              </div>
            </div>
            <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-emerald-600 font-bold">Chuẩn 100% phiếu gốc</span>
              <span class="text-slate-400">Lệch: 0 sp</span>
            </div>
          </div>

          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Giá Trị Điều Chuyển</div>
                <div class="text-lg font-extrabold text-slate-900 mt-1">52.650.000 ₫</div>
              </div>
              <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <i class="lucide-banknote w-5 h-5"></i>
              </div>
            </div>
            <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-slate-500">Giá vốn nội bộ</span>
              <span class="text-[#714B67] font-bold">0% Chênh lệch</span>
            </div>
          </div>

          <div class="o-card p-4 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Kiểm Soát FEFO & Date</div>
                <div class="text-xl font-extrabold text-emerald-700 mt-1 flex items-center gap-2">100% <span class="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">ĐẠT CHUẨN</span></div>
              </div>
              <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <i class="lucide-calendar-check w-5 h-5"></i>
              </div>
            </div>
            <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-slate-500">HSD TB: &gt; 34 tháng</span>
              <span class="text-emerald-600 font-bold">Seal nguyên tem</span>
            </div>
          </div>
        </div>

        <!-- Main Two-Column Layout: Left Scanning (60%) + Right AI/Logistics (40%) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

          <!-- LEFT: Barcode Scanner + SKU List -->
          <div class="lg:col-span-7 flex flex-col gap-4">
            <!-- Barcode Scanner Bar -->
            <div class="o-card p-4 flex flex-col gap-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span class="text-xs font-bold text-slate-800">Honeywell Xenon 1900G</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">ĐỌC LIÊN TỤC [BEEP]</span>
                </div>
                <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
                  <button class="px-2.5 py-1 bg-[#714B67] text-white rounded font-semibold">Quét từng món (+1)</button>
                  <button class="px-2.5 py-1 text-slate-600 hover:bg-slate-200 rounded font-semibold transition">Nhập số kiện / lốc</button>
                  <button onclick="alert('Mở form tạo lô date mới!')" class="px-2.5 py-1 text-slate-600 hover:bg-slate-200 rounded font-semibold transition">+ Tạo Lô Date mới</button>
                </div>
              </div>
              <!-- Scanner Input -->
              <div class="relative">
                <i class="lucide-scan-barcode w-5 h-5 absolute left-3 top-3 text-[#714B67]"></i>
                <input type="text" value="8938503892110 • SKU-COS-001" class="w-full pl-11 pr-24 py-3 bg-slate-50 border border-slate-300 text-slate-900 text-sm font-mono rounded-lg focus:outline-none focus:ring-2 focus:ring-[#714B67] placeholder:text-slate-400" placeholder="Quét mã vạch, mã kiện Carton hoặc nhập SKU để kiểm đếm [F1]..." />
                <div class="absolute inset-y-0 right-2 flex items-center">
                  <span class="text-[10px] bg-slate-200 text-slate-600 px-2 py-1 rounded font-bold">ENTER</span>
                </div>
              </div>
            </div>

            <!-- SKU Intake Header -->
            <div class="flex items-center justify-between px-1">
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold text-slate-800">Danh Sách Mặt Hàng Tiếp Nhận</span>
                <span class="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">4/4 SKU Khớp</span>
              </div>
              <span class="text-[10px] text-slate-400">Quy chuẩn xếp dỡ: FEFO Priority</span>
            </div>

            <!-- SKU Item Cards -->
            <div class="flex flex-col gap-3">
              ${skuItems.map(item => `
                <div class="o-card p-4 flex flex-col gap-2.5 hover:shadow-md transition-shadow">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <!-- Product Info -->
                    <div class="flex items-center gap-3">
                      <img src="${item.img}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0" onerror="this.src='https://via.placeholder.com/56x56/f1f5f9/64748b?text=SP'" />
                      <div>
                        <div class="flex items-center gap-2">
                          <span class="text-xs font-bold text-slate-900">${item.name}</span>
                          <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-0.5"><i class="lucide-check w-3 h-3"></i> Khớp chuẩn</span>
                        </div>
                        <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                          <span class="font-bold text-[#714B67]">SKU: ${item.sku}</span>
                          <span>•</span>
                          <span>ĐVT: ${item.unit}</span>
                          <span>•</span>
                          <span class="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">Vị trí: ${item.location}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Qty Control -->
                    <div class="flex flex-col items-end self-end sm:self-auto shrink-0">
                      <span class="text-[10px] text-slate-500">CT: ${item.poQty} | Thực nhập:</span>
                      <div class="flex items-center bg-slate-100 rounded-lg p-1 gap-1 mt-0.5">
                        <button onclick="this.nextElementSibling.value = Math.max(0, parseInt(this.nextElementSibling.value||0)-1)" class="w-7 h-7 rounded bg-white flex items-center justify-center text-slate-700 hover:bg-slate-200 font-bold text-base shadow-sm">-</button>
                        <input type="number" value="${item.recQty}" class="w-12 text-center bg-transparent text-sm font-bold text-[#714B67] focus:outline-none" />
                        <button onclick="this.previousElementSibling.value = parseInt(this.previousElementSibling.value||0)+1" class="w-7 h-7 rounded bg-white flex items-center justify-center text-slate-700 hover:bg-slate-200 font-bold text-base shadow-sm">+</button>
                      </div>
                    </div>
                  </div>

                  <!-- Sub-bar: LOT / HSD / Stock Delta -->
                  <div class="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-[10px]">
                    <div class="flex flex-wrap items-center gap-3">
                      <div class="flex items-center gap-1">
                        <span class="text-slate-400">LOT:</span>
                        <span class="font-bold text-slate-700">${item.lot}</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <span class="text-slate-400">HSD:</span>
                        <span class="font-bold text-emerald-600">${item.hsd} (Mới sản xuất)</span>
                      </div>
                      <div class="flex items-center gap-1 text-slate-600">
                        <i class="lucide-check-circle w-3.5 h-3.5 text-emerald-500"></i>
                        <span>${item.note}</span>
                      </div>
                    </div>
                    <!-- Stock delta indicator -->
                    <div class="flex items-center gap-1.5 font-bold">
                      <span class="text-slate-400">Tồn: ${item.prevStock}</span>
                      <i class="lucide-arrow-right w-3.5 h-3.5 text-slate-400"></i>
                      <span class="text-slate-900">${item.prevStock + item.recQty} ${item.unit.toLowerCase()}</span>
                      <span class="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">(+${item.recQty})</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- RIGHT: AI Inspector + Logistics + Sign-off -->
          <div class="lg:col-span-5 flex flex-col gap-4">

            <!-- Card 1: AI FEFO Copilot -->
            <div class="o-card p-4 relative overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-1 bg-[#017E84]"></div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
                    <i class="lucide-shield-check w-4 h-4"></i>
                  </div>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Cosmetic Intake Copilot</div>
                    <div class="text-[10px] text-slate-500">Thẩm định quang học & Quy tắc FEFO</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full border border-teal-200">FEFO Engine Active</span>
              </div>

              <!-- Visual Inspection Preview -->
              <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 flex gap-3 items-center">
                <div class="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 relative bg-slate-200">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=100&q=80" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/96x80/e2e8f0/64748b?text=Camera'" />
                  <div class="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                    <i class="lucide-scan w-6 h-6 text-white drop-shadow"></i>
                  </div>
                </div>
                <div class="flex flex-col gap-1 text-[10px]">
                  <div class="flex items-center gap-1 text-emerald-600 font-bold">
                    <i class="lucide-check-circle w-3.5 h-3.5"></i>
                    <span>Khớp Barcode kiện carton 100%</span>
                  </div>
                  <div class="text-slate-600 leading-snug">Mã QR kiện nhận diện chính xác: Phiếu điều chuyển Tân Bình #TO-20260923-089.</div>
                  <div class="text-slate-400">Nhận dạng lúc 10:26:02 • Độ tin cậy: 99.8%</div>
                </div>
              </div>

              <!-- AI FEFO Advisory -->
              <div class="mt-3 p-3 bg-teal-50/60 border border-teal-200 rounded-lg flex flex-col gap-1.5">
                <div class="flex items-center gap-1.5 text-teal-900 font-bold text-[10px]">
                  <i class="lucide-info w-3.5 h-3.5"></i>
                  <span>Khuyến nghị xếp kho quầy (FEFO Rule):</span>
                </div>
                <p class="text-[10px] text-slate-700 leading-snug">
                  Cả 4 SKU nhập đợt này đều là date mới sản xuất (09/2026). Nhân viên vui lòng
                  <span class="font-bold text-teal-900">xếp vào mặt sau kệ</span> để ưu tiên xuất bán hết các lô cũ (HSD 05/2026) đang trưng bày phía trước.
                </p>
              </div>
            </div>

            <!-- Card 2: Logistics & Accompanying Documents -->
            <div class="o-card p-4 flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <i class="lucide-truck w-4 h-4 text-blue-600"></i>
                  <span class="text-xs font-bold text-slate-900">Vận Chuyển & Chứng Từ Kèm</span>
                </div>
                <span class="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">5/5 Thùng Nguyên Đai</span>
              </div>

              <div class="flex flex-col gap-2 text-[10px]">
                <div class="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                  <span class="text-slate-500">Tài xế giao vận:</span>
                  <span class="font-bold text-slate-800">Nguyễn Văn Hùng (Xe 51D-892.41)</span>
                </div>
                <div class="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                  <span class="text-slate-500">Biên bản bàn giao:</span>
                  <span class="font-bold text-[#714B67]">#BB-TN-882 (Kèm chữ ký số)</span>
                </div>
                <div class="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                  <span class="text-slate-500">Tình trạng bao bì:</span>
                  <span class="text-emerald-600 font-bold flex items-center gap-1">
                    <i class="lucide-check-circle w-3.5 h-3.5"></i> Không ẩm ướt / rách vỡ
                  </span>
                </div>
                <div class="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                  <span class="text-slate-500">Hóa đơn vận chuyển:</span>
                  <button onclick="alert('Xem hóa đơn vận chuyển nội bộ...')" class="font-bold text-blue-700 hover:underline">Xem đính kèm →</button>
                </div>
              </div>

              <div class="p-2.5 bg-slate-50 rounded-lg border-l-2 border-blue-400 text-[10px] text-slate-600 italic">
                "Hàng giao đúng giờ ca sáng, đầy đủ CO/CQ xuất xưởng và hóa đơn vận chuyển nội bộ. Nhân viên quầy đã đồng kiểm kiện."
              </div>
            </div>

            <!-- Card 3: 3-Party Sign-off Protocol -->
            <div class="o-card p-4 flex flex-col gap-3">
              <div class="flex items-center gap-2 border-b pb-3">
                <i class="lucide-users w-4 h-4 text-[#714B67]"></i>
                <span class="text-xs font-bold text-slate-900">Xác Nhận 3 Bên Ký Duyệt</span>
              </div>

              <div class="flex flex-col gap-2 text-xs">
                <!-- Signer 1: SE -->
                <div class="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">SE</div>
                    <div>
                      <div class="font-bold text-slate-800">Quách Chí Hùng (#SE-02)</div>
                      <div class="text-[10px] text-slate-500">Thu ngân – Người tiếp nhận hàng</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                    <i class="lucide-check w-3 h-3"></i> Đã ký
                  </span>
                </div>

                <!-- Signer 2: SM -->
                <div class="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-full bg-[#714B67] text-white text-[10px] font-bold flex items-center justify-center">SM</div>
                    <div>
                      <div class="font-bold text-slate-800">Phạm Kim Hương</div>
                      <div class="text-[10px] text-slate-500">Store Manager – Giám sát tiếp nhận</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 flex items-center gap-1">
                    <i class="lucide-clock w-3 h-3"></i> Chờ ký
                  </span>
                </div>

                <!-- Signer 3: Driver -->
                <div class="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-full bg-slate-600 text-white text-[10px] font-bold flex items-center justify-center">TX</div>
                    <div>
                      <div class="font-bold text-slate-800">Nguyễn Văn Hùng</div>
                      <div class="text-[10px] text-slate-500">Tài xế – Người bàn giao hàng</div>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                    <i class="lucide-check w-3 h-3"></i> Đã ký số
                  </span>
                </div>
              </div>

              <!-- Final Confirm Button -->
              <button onclick="alert('✅ Đã ghi nhận nhập kho quầy thành công!\\n\\n• GRN: #GRN-20260923-003\\n• Đã tạo phiếu nhập kho WH/IN/2026-0090\\n• 150 sản phẩm đã được cộng vào tồn kho quầy\\n• Lô FEFO được sắp xếp theo thứ tự xuất tự động\\n• Đã gửi email xác nhận đến BO & SM')" class="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg shadow flex items-center justify-center gap-2 transition">
                <i class="lucide-package-check w-4 h-4"></i>
                XÁC NHẬN GHI KHO & ĐÓNG PHIÊN NHẬP
              </button>
            </div>

          </div>
        </div>
      </div>
    `;
  }
};
