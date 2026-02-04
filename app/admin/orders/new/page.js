const quickItems = [
  {
    name: "Combo gà rán + trà đào",
    price: "89.000đ",
    note: "Ưu tiên giao nóng"
  },
  {
    name: "Bún bò Huế đặc biệt",
    price: "65.000đ",
    note: "Thêm hành, ít cay"
  }
];

const deliverySlots = [
  "Giao ngay (20-30 phút)",
  "Khung 11:30 - 12:00",
  "Khung 12:00 - 12:30"
];

export default function NewOrderPage() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">GrabFood Admin</div>
        <nav>
          <a className="active" href="/admin/orders">
            Đơn hàng
          </a>
          <a href="/admin/menu">Thực đơn</a>
          <a href="#">Khách hàng</a>
          <a href="#">Cấu hình</a>
        </nav>
      </aside>
      <section className="page-content">
        <div className="top-bar">
          <div>
            <h1>Tạo đơn hàng mới</h1>
            <p style={{ color: "var(--muted)" }}>
              Ghi nhận yêu cầu từ khách, chọn món và xác nhận thanh toán tại quầy
              hoặc giao nhanh.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <a className="button secondary" href="/admin/orders">
              Quay lại danh sách
            </a>
            <button className="button">Lưu &amp; gửi bếp</button>
          </div>
        </div>
        <div className="form-grid">
          <section className="card">
            <div className="section-title">
              <h3>Thông tin khách hàng</h3>
              <span className="badge">Bắt buộc</span>
            </div>
            <div className="field-row">
              <label className="form-field">
                Họ và tên
                <input type="text" placeholder="Nguyễn Thuỳ Linh" />
              </label>
              <label className="form-field">
                Số điện thoại
                <input type="tel" placeholder="0909 000 111" />
              </label>
            </div>
            <label className="form-field">
              Ghi chú cho đơn
              <input type="text" placeholder="Khách lấy tại quầy, không cần muỗng." />
            </label>
          </section>
          <section className="card">
            <div className="section-title">
              <h3>Chi tiết giao hàng</h3>
              <span className="badge">Giao nhanh</span>
            </div>
            <label className="form-field">
              Địa chỉ giao
              <input type="text" placeholder="12 Lê Lợi, Quận 1, TP.HCM" />
            </label>
            <div className="field-row">
              <label className="form-field">
                Thời gian giao
                <select>
                  {deliverySlots.map((slot) => (
                    <option key={slot}>{slot}</option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                Phí giao hàng
                <input type="text" placeholder="25.000đ" />
              </label>
            </div>
            <label className="form-field">
              Người nhận thay
              <input type="text" placeholder="Anh Tùng (lễ tân)" />
            </label>
          </section>
        </div>
        <div className="form-grid">
          <section className="card">
            <div className="section-title">
              <h3>Danh sách món</h3>
              <button className="button secondary">+ Thêm món nhanh</button>
            </div>
            <div className="item-list">
              {quickItems.map((item) => (
                <div key={item.name} className="item-row">
                  <div>
                    <strong>{item.name}</strong>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      {item.note}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <strong>{item.price}</strong>
                    <div className="qty-control">
                      <button className="button secondary" type="button">
                        -
                      </button>
                      <span>1</span>
                      <button className="button secondary" type="button">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <aside className="card summary-panel">
            <div className="section-title">
              <h3>Tóm tắt thanh toán</h3>
              <span className="badge">COD</span>
            </div>
            <div className="summary-row">
              <span>Tạm tính</span>
              <strong>154.000đ</strong>
            </div>
            <div className="summary-row">
              <span>Phí giao hàng</span>
              <strong>25.000đ</strong>
            </div>
            <div className="summary-row">
              <span>Giảm giá</span>
              <strong>-10.000đ</strong>
            </div>
            <div className="summary-total">
              <span>Tổng cộng</span>
              <strong>169.000đ</strong>
            </div>
            <button className="button" style={{ width: "100%" }}>
              Xác nhận đơn
            </button>
            <button className="button secondary" style={{ width: "100%" }}>
              Lưu nháp
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}
