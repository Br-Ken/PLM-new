-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 30, 2022 lúc 03:34 PM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `productmove`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admins`
--

INSERT INTO `admins` (`id`, `firstName`, `lastName`, `email`, `password`, `address`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Ken', 'Ng', 'admin@gmail.com', '$2a$10$3OhAm/dJmExz80CxTUJsFuVD9QMLOsAlAg/bouesObCe6Z2HHhh82', 'vn', '0', '2022-12-30 10:28:27', '2022-12-30 10:28:27'),
(2, '1', '1', '1@gmail.cca', '123456', '1', '0', '2022-12-30 13:31:33', '2022-12-30 13:31:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`id`, `product_id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'BRAND1', 'HONDA', '2022-12-30 13:45:42', '2022-12-30 13:45:42');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `distribution`
--

CREATE TABLE `distribution` (
  `id` int(11) NOT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manufactory`
--

CREATE TABLE `manufactory` (
  `id` int(11) NOT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `productline_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `productline_id`, `name`, `image`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'CAR1', 'HONDA CIVIC TYPE R', 'https://giaxehoi.vn/uploads/Xe/Honda/Honda-Civic/Type-R/Gia-xe-Honda-Civic-Type-R-2023-Giaxehoi-vn-500x281.jpg', 'Civic Type R là thế hệ thứ 10 của dòng sedan hạng C của hãng Honda. Khác hẳn với các thiết kế thiêng về sang trọng, thanh lịch như những thế hệ trước, kể từ phiên bản thứ 9, mẫu xe này đã thoát ly hẳn “dòng máu” của những mẫu sedan truyền thống.', 'BAO DUONG', '2022-12-30 13:26:15', '2022-12-30 13:26:15'),
(2, 'CAR2', 'HONDA CITY', 'https://www.honda.com.vn/o-to/san-pham/honda-city/assets/images/s-color/white/F4.png', 'Với nhiều thay đổi, Honda City được đánh giá tiếp tục là một trong các lựa chọn sáng giá ở phân khúc sedan hạng B năm nay. Honda City 2022 sẽ là lựa chọn đáng tham khảo với những ai yêu thích sự an toàn, cứng cáp và bền bỉ của xe Nhật, đồng thời chú trọng', NULL, '2022-12-30 13:33:02', '2022-12-30 13:33:02'),
(3, 'CAR3', 'HONDA HR-V', 'https://faluauto.com/upload/product/honda-hrv-6704.jpg', 'Honda HR-V là dòng xe Crossover/Suv cở nhỏ (subcompact Crossover/Suv), 5 chỗ ngồi, dẫn động cầu trước. Honda HRV tại Việt Nam được nhập khẩu từ Thái Lan, cạnh tranh với Hyundai Creta, Kia Seltos...Xe được bán ra với 3 phiên bản G, L và RS.', NULL, '2022-12-30 13:35:08', '2022-12-30 13:35:08'),
(4, 'CAR4', 'HONDA CIVIC', 'https://hondahanoi.net/uploads/images/Honda_Civic_2021/bang-gia-xe-honda-civic-1.8G-2021.jpg', 'Civic thế hệ thứ 11 thay đổi thiết kế, trang bị nhiều công nghệ cùng tính năng an toàn, bán ra 3 phiên bản, giá giảm so với bản cũ.', NULL, '2022-12-30 13:36:29', '2022-12-30 13:36:29'),
(5, 'CAR5', 'HONDA CR-V', 'https://hondaotoankhanh.com.vn/wp-content/uploads/2022/08/image-honda-crv-3.jpg', 'xe này rất tốt', NULL, '2022-12-30 13:36:29', '2022-12-30 13:36:29'),
(6, 'CAR6', 'HONDA - ACCORD', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhUYGBgaGRgWGRwYGR4aHhkYGBkZGhgaGBocIS4lHCEsIxkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBERGjEhISM0PzQ/MTQxNDQ0NDg/MTQ6PzQxMTExMTQ/PzQxMTQ0NDExNDQxPzMxMT0xMTQxPzExMf/AABEIAK4BIgMBIgACEQEDEQH/', 'xe này ngon nhưng mà tốn xăng', NULL, '2022-12-30 13:40:45', '2022-12-30 13:40:45');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migaration-create-product.js'),
('migration-create-admin.js'),
('migration-create-brand.js'),
('migration-create-customer.js'),
('migration-create-distribution.js'),
('migration-create-manufactory.js'),
('migration-create-warranty.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `warranty`
--

CREATE TABLE `warranty` (
  `id` int(11) NOT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `distribution`
--
ALTER TABLE `distribution`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `manufactory`
--
ALTER TABLE `manufactory`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `warranty`
--
ALTER TABLE `warranty`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `distribution`
--
ALTER TABLE `distribution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `manufactory`
--
ALTER TABLE `manufactory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `warranty`
--
ALTER TABLE `warranty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
