import "./globals.css";

export const metadata = {
  title: "Grab Admin - Demo",
  description: "Quản lý đơn hàng và món ăn giống Grab"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
