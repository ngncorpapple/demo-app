const categories = [
  "Bán chạy",
  "Combo",
  "Cơm",
  "Bún",
  "Đồ uống",
  "Món thêm"
];

const menuItems = [
  {
    name: "Combo gà rán + trà đào",
    price: "89.000đ",
    tag: "Combo giờ trưa",
    options: ["Đùi/Ti đùi", "Cay vừa", "Thêm sốt phô mai"]
  },
  {
    name: "Bún bò Huế đặc biệt",
    price: "65.000đ",
    tag: "Bán chạy",
    options: ["Bò tái", "Gân", "Thêm chả"]
  },
  {
    name: "Cơm gà xối mỡ",
    price: "52.000đ",
    tag: "Đề xuất",
    options: ["Thêm trứng", "Xá xíu", "Nước sốt riêng"]
  },
  {
    name: "Trà đào cam sả",
    price: "32.000đ",
    tag: "Đồ uống",
    options: ["Ít đường", "Nhiều đá", "Thêm đào"]
  },
  {
    name: "Combo gia đình 4 người",
    price: "199.000đ",
    tag: "Combo",
    options: ["2 món chính", "4 topping", "2 nước"]
  },
  {
    name: "Khoai tây lắc phô mai",
    price: "25.000đ",
    tag: "Món thêm",
    options: ["Ít bột", "Thêm phô mai", "Cay nhẹ"]
  }
];

const cartItems = [
  {
    name: "Combo gà rán + trà đào",
    qty: 2,
    note: "Ít cay, thêm sốt phô mai"
  },
  {
    name: "Bún bò Huế đặc biệt",
    qty: 1,
    note: "Thêm gân"
  }
];

export default function MenuPage() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">GrabFood Admin</div>
        <nav>
          <a href="/admin/orders">Đơn hàng</a>
          <a className="active" href="/admin/menu">
            Thực đơn
          </a>
          <a href="#">Khuyến mãi</a>
          <a href="#">Báo cáo</a>
        </nav>
      </aside>
      <section className="page-content">
        <div className="top-bar">
          <div>
            <h1>Thiết lập thực đơn</h1>
            <p style={{ color: "var(--muted)" }}>
              Kéo thả món, cấu hình combo và lựa chọn tuỳ chỉnh như Grab.
            </p>
          </div>
          <div className="badge">Đang mở bán</div>
        </div>
        <div className="menu-layout">
          <div className="card category-list">
            <div className="section-title">
              <h3>Danh mục</h3>
              <span className="badge">8 món</span>
            </div>
            {categories.map((cat) => (
              <div key={cat} className="category-pill">
                {cat}
              </div>
            ))}
            <button className="button secondary">+ Thêm danh mục</button>
          </div>
          <div>
            <div className="section-title">
              <h3>Danh sách món</h3>
              <div style={{ display: "flex", gap: "12px" }}>
                <button className="button secondary">Tạo combo</button>
                <button className="button">Thêm món mới</button>
              </div>
            </div>
            <div className="menu-items">
              {menuItems.map((item) => (
                <div key={item.name} className="menu-card">
                  <span className="tag">{item.tag}</span>
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                  <div>
                    <p style={{ marginBottom: "8px", color: "var(--muted)" }}>
                      Tùy chọn nhanh
                    </p>
                    <div className="option-group">
                      {item.options.map((option) => (
                        <span key={option} className="option-pill">
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="button secondary">Chỉnh sửa</button>
                </div>
              ))}
            </div>
          </div>
          <aside className="card cart-panel">
            <div className="section-title">
              <h3>Đơn mẫu (preview)</h3>
              <span className="badge">2 món</span>
            </div>
            {cartItems.map((item) => (
              <div key={item.name}>
                <strong>
                  {item.qty}x {item.name}
                </strong>
                <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                  {item.note}
                </p>
              </div>
            ))}
            <button className="button">Xuất cấu hình</button>
          </aside>
        </div>
      </section>
    </main>
  );
}
