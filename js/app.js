/* ==========================================================================
   STITCH AI BUSINESS COPILOT PLATFORM - MAIN APP CONTROLLER (Tiếng Việt)
   ========================================================================== */

const App = {
  init: function() {
    if (window.PAGE_APP) {
      MockData.activeApp = window.PAGE_APP;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view');
    if (viewParam) {
      MockData.activeApp = viewParam;
    }
    this.render();
  },

  // Main Render Loop
  render: function() {
    const root = document.getElementById('app-root');
    if (!root) return;

    let contentHTML = '';
    let pageTitle = 'Dashboard Tổng Quan KPI';
    let breadcrumbs = ['Quản lý Doanh nghiệp'];
    let actions = [];

    // Route Mapping based on MockData.activeApp
    switch (MockData.activeApp) {
      case 'apps':
        pageTitle = 'Trang Chủ Phân Hệ Doanh Nghiệp (Odoo Launcher)';
        breadcrumbs = ['Phân hệ Odoo'];
        actions = [];
        contentHTML = Zone0Shell.renderAppLauncher();
        break;

      case 'dashboard':
        pageTitle = 'Dashboard KPI Doanh Nghiệp (Tổng Quan)';
        breadcrumbs = ['Quản lý', 'Dashboard KPI'];
        actions = [
          { label: 'Xuất Báo Cáo PDF', icon: 'lucide-download', primary: false, onclick: "alert('Đã xuất file báo cáo KPI!')" }
        ];
        contentHTML = Zone5AI.renderDashboard();
        break;

      case 'inventory':
        pageTitle = 'Quản lý Tồn kho & Lô Hạn Dùng FEFO';
        breadcrumbs = ['Kho hàng', 'Tồn kho FEFO'];
        actions = [
          { label: 'Nhập kho FEFO mới', icon: 'lucide-plus-circle', primary: true, onclick: "Zone2Inventory.openIntakeWizard()" }
        ];
        contentHTML = Zone2Inventory.render();
        break;

      case 'sales':
        pageTitle = 'Quản lý Đơn hàng Đa kênh & Chi phí OPEX';
        breadcrumbs = ['Kinh doanh', 'Đơn hàng Đa kênh'];
        actions = [
          { label: 'Tạo Mã VietQR B2B', icon: 'lucide-qr-code', primary: true, onclick: "Zone3Sales.openVietQRModal()" }
        ];
        contentHTML = Zone3Sales.render();
        break;

      case 'pos': {
        const posSub = MockData.subTabs.pos || 'terminal';
        pageTitle = posSub === 'terminal' ? 'POS Thu Ngân Cửa hàng (Touchscreen Terminal)' : posSub === 'returns_warranty' ? 'Đổi Trả & Bảo Hành Tại Quầy' : posSub === 'inventory_count' ? 'Kiểm Kê Tồn Kho Quầy FEFO' : 'Tra Cứu Sản Phẩm Bán Hàng';
        breadcrumbs = ['Thu ngân', 'POS Terminal', posSub === 'terminal' ? 'Bán Hàng' : posSub === 'returns_warranty' ? 'Đổi/Trả' : posSub === 'inventory_count' ? 'Kiểm Kê' : 'Tra Cứu SP'];
        actions = [
          { label: 'Chốt ca & Kết sổ', icon: 'lucide-lock', primary: false, onclick: "Zone4POS.openShiftModal()" },
          { label: 'Màn hình Bán hàng', icon: 'lucide-monitor', primary: true, onclick: "Zone4POS.switchSubTab('terminal')" }
        ];
        contentHTML = Zone4POS.render();
        break;
      }

      case 'ai_advisor':
        pageTitle = 'AI Business Advisor & Simulation Lab';
        breadcrumbs = ['AI Copilot', 'Advisor Workspace'];
        actions = [
          { label: 'Khôi phục Baseline', icon: 'lucide-rotate-ccw', primary: false, onclick: "alert('Đã khôi phục kịch bản baseline!')" }
        ];
        contentHTML = Zone5AI.renderAIAdvisor();
        break;

      case 'sa_admin':
        if (MockData.activeRole !== 'SA') {
          contentHTML = `
            <div class="o-card p-12 text-center space-y-3 max-w-md mx-auto my-12">
              <div class="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto"><i class="lucide-shield-alert w-6 h-6"></i></div>
              <h2 class="text-base font-bold text-slate-800">403 Access Denied (Không đủ quyền)</h2>
              <p class="text-xs text-slate-500">Chức năng SA Console chỉ dành cho tài khoản Quản trị Hệ thống (System Admin). Vui lòng bấm chọn Role SA ở thanh trên cùng.</p>
              <button onclick="App.switchRole('SA')" class="px-4 py-2 text-xs font-bold bg-[#714B67] text-white rounded">Chuyển sang Role SA →</button>
            </div>
          `;
        } else {
          pageTitle = 'Cổng Quản trị Master Hệ thống (SA Console)';
          breadcrumbs = ['Quản trị', 'SA Admin'];
          actions = [
            { label: 'Đăng ký Tenant mới', icon: 'lucide-plus', primary: true, onclick: "alert('Mở form đăng ký Tenant!')" }
          ];
          contentHTML = Zone1Admin.render();
        }
        break;

      default:
        contentHTML = Zone0Shell.renderAppLauncher();
    }

    // Assemble Full Single Page Layout
    root.innerHTML = `
      ${Zone0Shell.renderTopBar()}
      ${MockData.activeApp === 'apps' ? '' : Zone0Shell.renderControlPanel(pageTitle, breadcrumbs, actions)}
      
      <main class="${MockData.activeApp === 'apps' ? 'pt-16' : 'pt-28'} pb-10 px-4 max-w-7xl mx-auto relative">
        ${contentHTML}
      </main>

      ${Zone0Shell.renderAIDrawer()}
    `;
  },

  // Navigation Controller (Multi-Page & SPA hybrid)
  navigateTo: function(appId) {
    if (appId === 'apps') {
      MockData.activeApp = 'apps';
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const pageMap = {
      'apps': 'index.html?view=apps',
      'dashboard': 'index.html?view=dashboard',
      'pos': 'pos.html',
      'inventory': 'inventory.html',
      'sales': 'sales.html',
      'sa_admin': 'admin.html',
      'ai_advisor': 'index.html?view=ai_advisor'
    };
    
    const targetPage = pageMap[appId] || 'index.html';
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // If target page is different from current page, navigate to HTML file
    if (currentPage !== targetPage.split('?')[0]) {
      window.location.href = targetPage;
      return;
    }
    
    MockData.activeApp = appId;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  switchRole: function(role) {
    MockData.activeRole = role;
    if (role === 'SE') {
      MockData.activeApp = 'pos'; // Automatically navigate to POS screen for Store Employee
    } else if (role === 'SA' && MockData.activeApp === 'pos') {
      MockData.activeApp = 'sa_admin';
    } else if (role === 'BO' && MockData.activeApp === 'sa_admin') {
      MockData.activeApp = 'dashboard';
    }
    this.render();
  },

  switchView: function(viewType) {
    MockData.activeView = viewType;
    this.render();
  }
};

// Initialize App on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
