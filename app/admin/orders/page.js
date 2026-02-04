const orders = [
  {
    id: "GF-2031",
    customer: "Nguyễn Anh",
    total: "156.000đ",
    status: "pending",
    items: "Combo gà + trà đào, Bún bò"
  },
  {
    id: "GF-2032",
    customer: "Trần Thảo",
    total: "82.000đ",
    status: "preparing",
    items: "Cơm gà xối mỡ, Trà đào"
  },
  {
    id: "GF-2033",
    customer: "Lê Minh",
    total: "45.000đ",
    status: "completed",
    items: "Khoai tây lắc, Pepsi"
  }
];

const statusLabel = {
  pending: "Chờ nhận",
  preparing: "Đang chế biến",
  completed: "Hoàn tất"
};

export default function OrdersPage() {
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
            <h1>Quản lý đơn hàng</h1>
            <p style={{ color: "var(--muted)" }}>
              Theo dõi trạng thái đơn và thời gian xử lý theo ca làm.
            </p>
          </div>
          <a className="button" href="/admin/orders/new">
            Tạo đơn nhanh
          </a>
        </div>
        <div className="grid cols-3" style={{ marginBottom: "24px" }}>
          {[
            {
              title: "Đơn mới",
              value: 12,
              note: "4 đơn chờ xác nhận"
            },
            {
              title: "Đang chuẩn bị",
              value: 8,
              note: "Thời gian TB 12 phút"
            },
            {
              title: "Hoàn tất hôm nay",
              value: 48,
              note: "Doanh thu 8.5tr"
            }
          ].map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p style={{ fontSize: "28px", margin: "8px 0" }}>{item.value}</p>
              <p style={{ color: "var(--muted)" }}>{item.note}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="section-title">
            <h3>Danh sách đơn</h3>
            <button className="button secondary">Lọc ca làm</button>
          </div>
          {orders.map((order) => (
            <div key={order.id} className="order-row">
              <div>
                <strong>{order.id}</strong>
                <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                  {order.customer} · {order.items}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <strong>{order.total}</strong>
                <div className={`status ${order.status}`}>
                  {statusLabel[order.status]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
