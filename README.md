# BIDV Enterprise Content Management System

Hệ thống quản lý tài liệu doanh nghiệp cho BIDV - Proof of Concept.

## Tổng Quan

Hệ thống quản lý tài liệu doanh nghiệp (ECM) cho BIDV giúp số hóa và tối ưu hóa quy trình lưu trữ, xử lý và quản lý các tài liệu tại ngân hàng. Dự án này là bản Proof of Concept thể hiện các chức năng cơ bản của hệ thống.

## Tính Năng

- 🔐 Xác thực người dùng
- 📊 Bảng điều khiển quản lý hồ sơ
- 📝 Tạo và chỉnh sửa thông tin hồ sơ
- 📁 Quản lý tài liệu
- 🧾 Theo dõi lịch sử giao dịch
- 🌐 Giao diện đáp ứng đa thiết bị

## Công Nghệ Sử Dụng

- **React**: Thư viện UI
- **TypeScript**: Đảm bảo an toàn kiểu dữ liệu
- **Material UI**: Thư viện component
- **React Router**: Điều hướng
- **Zustand**: Quản lý trạng thái
- **Axios**: API client

## Cấu Trúc Dự Án

```
/src
  ├── /assets/           # Tài nguyên tĩnh (hình ảnh, fonts)
  ├── /components/       # Các component tái sử dụng
  │   ├── /ui/           # Component UI cơ bản
  │   ├── /form/         # Component form
  │   ├── /data/         # Component hiển thị dữ liệu
  │   ├── /feedback/     # Component phản hồi
  │   └── /layout/       # Component bố cục
  ├── /features/         # Các tính năng cụ thể
  │   ├── /auth/         # Xác thực
  │   └── /ecm/          # Quản lý nội dung doanh nghiệp
  ├── /hooks/            # Custom React hooks
  ├── /layouts/          # Layout trang
  ├── /pages/            # Các trang
  ├── /services/         # API requests, tích hợp dịch vụ
  ├── /store/            # Quản lý trạng thái
  ├── /styles/           # Styles toàn cục
  ├── /types/            # TypeScript types
  ├── /utils/            # Tiện ích, helpers
  ├── App.tsx            # Component App
  ├── index.tsx          # Entry point
  └── router.tsx         # Cấu hình router
```

## Bắt Đầu

### Yêu Cầu

- Node.js (v14+)
- npm hoặc yarn

### Cài Đặt

1. Clone repository

   ```
   git clone <repository-url>
   cd enterprise-app
   ```

2. Cài đặt dependencies

   ```
   npm install
   ```

3. Khởi động server phát triển

   ```
   npm run dev
   ```

4. Mở http://localhost:5173 trên trình duyệt

## Triển Khai

Quá trình xây dựng cho môi trường sản xuất:

```
npm run build
```

## Hướng Dẫn Sử Dụng

### Đăng Nhập

- Sử dụng bất kỳ tên đăng nhập/mật khẩu nào cho mục đích demo

### Quản Lý Hồ Sơ

- Xem tất cả hồ sơ trên bảng điều khiển
- Tạo hồ sơ mới bằng nút "Thêm Hồ Sơ Mới"
- Chỉnh sửa hồ sơ hiện có bằng cách nhấp vào hồ sơ trong danh sách
- Tải tài liệu lên hồ sơ bằng bảng tài liệu

## Giấy Phép

Bản quyền thuộc về BIDV
