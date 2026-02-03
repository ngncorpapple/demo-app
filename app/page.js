export default function LoginPage() {
  return (
    <main className="login-wrapper">
      <section>
        <h1>Đăng nhập hệ thống GrabFood Admin</h1>
        <p>
          Quản lý đơn hàng, món ăn, combo và cấu hình tuỳ chọn cho từng chi nhánh
          trong một giao diện tối giản.
        </p>
        <div className="grid cols-3" style={{ marginTop: "24px" }}>
          {[
            {
              title: "Theo dõi đơn realtime",
              desc: "Nhận cảnh báo đơn mới, trạng thái bếp và thời gian giao."
            },
            {
              title: "Thiết lập combo",
              desc: "Gợi ý upsell theo khung giờ và nhóm món phù hợp."
            },
            {
              title: "Quản lý tuỳ chọn",
              desc: "Topping, size, mức độ cay và ghi chú riêng."
            }
          ].map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="login-card">
        <h2>Đăng nhập</h2>
        <p style={{ color: "var(--muted)" }}>
          Dành cho quản trị viên nhà hàng và vận hành GrabFood.
        </p>
        <label>
          Email
          <input type="email" placeholder="admin@grabfood.vn" />
        </label>
        <label>
          Mật khẩu
          <input type="password" placeholder="••••••••" />
        </label>
        <button className="button" type="button">
          Đăng nhập
        </button>
        <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
          <button className="button secondary" type="button">
            Đăng nhập bằng OTP
          </button>
          <button className="button secondary" type="button">
            Quên mật khẩu
          </button>
        </div>
      </section>
    </main>
  );
}
