-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2025 at 09:58 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prductdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbladmin`
--

CREATE TABLE `tbladmin` (
  `id` int(11) NOT NULL,
  `admin_name` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbladmin`
--

INSERT INTO `tbladmin` (`id`, `admin_name`, `phone`, `email`, `password`, `image`, `created_at`) VALUES
(1, 'ณัฐนันท์ ', '0992741524', 'te130246@gmail.com', '1111', '/uploads/1740986147812-470189156_18364596595186048_5292426319795723791_n.jpg', '2025-03-03 07:15:47'),
(2, 'ณัฐนันท์ ', '0992741524', '11te130246@gmail.com', '1111', '/uploads/1740986174285-470189156_18364596595186048_5292426319795723791_n.jpg', '2025-03-03 07:16:14'),
(3, '0928487885', '0928487885', '001te130246@gmail.com', '111111', '/uploads/1741553629400-470189156_18364596595186048_5292426319795723791_n.jpg', '2025-03-09 20:53:49'),
(4, 'youtube : NNATTANAN', '0928487885', '0001te130246@gmail.com', '111111', '/uploads/1741553691567-470189156_18364596595186048_5292426319795723791_n.jpg', '2025-03-09 20:54:51');

-- --------------------------------------------------------

--
-- Table structure for table `tblproduct`
--

CREATE TABLE `tblproduct` (
  `id` int(11) NOT NULL,
  `product_code` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `original_price` decimal(10,2) DEFAULT NULL,
  `discounted_price` decimal(10,2) DEFAULT NULL,
  `discount` decimal(5,2) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblproduct`
--

INSERT INTO `tblproduct` (`id`, `product_code`, `title`, `image`, `rating`, `original_price`, `discounted_price`, `discount`, `description`, `category`, `quantity`, `created_at`) VALUES
(2, 'P-12231', 'ผักสลัดออแกนิก00', '/uploads/1740985968648-1200px-Vegetable-Carrot-Bundle-wStalks.jpg', 5, 12122.00, 1221.00, 12.00, 'ryry', 'ผักออแกนิค', 50, '2025-03-03 07:12:48'),
(3, 'P-122314', 'ผักสลัดออแกนิก00', '/uploads/1740985979774-original-1707549429745.jpg', 5, 12122.00, 1221.00, 12.00, 'sadad', 'ผักออแกนิค', 50, '2025-03-03 07:12:59'),
(4, 'P-12231ad', 'ผักสลัดออแกนิก00', '/uploads/1740985995734-46243_8854761951352_1.png', 5, 12122.00, 1221.00, 12.00, 'adasd', 'ผักออแกนิค', 50, '2025-03-03 07:13:15'),
(5, 'P-122d31', 'ผักสลัดออแกนิก00', '/uploads/1740986005501-à¸£à¸¹à¸-à¸ªà¸¥à¸±à¸-à¸à¸£à¸µà¸à¸à¸­à¸ª.jpg', 5, 12122.00, 1221.00, 12.00, 'ds', 'ผักออแกนิค', 50, '2025-03-03 07:13:25'),
(6, 'P-1223122', 'ผักสลัดออแกนิก00', '/uploads/1740986020109-80877-thumbnail.jpg', 5, 12122.00, 1221.00, 12.00, 'adas', 'ผักออแกนิค', 50, '2025-03-03 07:13:40'),
(7, 'P-122312222', 'ผักสลัดออแกนิก00', '/uploads/1740986034799-à¸£à¸¹à¸-à¸ªà¸¥à¸±à¸-à¸à¸£à¸µà¸à¸à¸­à¸ª.jpg', 5, 12122.00, 1221.00, 12.00, 'adasd', 'ผักออแกนิค', 50, '2025-03-03 07:13:54'),
(8, 'P-122311111', 'ผักสลัดออแกนิก00', '/uploads/1740986049502-image-1549402064825.jpg', 5, 12122.00, 1221.00, 12.00, 'dadasd', 'ผักออแกนิค', 50, '2025-03-03 07:14:09'),
(9, 'P-12231422442', 'ผักสลัดออแกนิก00', '/uploads/1740986071991-ProductThumb_47294_73040145_resize.jpg', 5, 12122.00, 1221.00, 12.00, 'fdg', 'ผักออแกนิค', 50, '2025-03-03 07:14:31'),
(10, 'P-1223142442', 'ผักสลัดออแกนิก00', '/uploads/1740986083031-original-1707549429745.jpg', 5, 12122.00, 1221.00, 12.00, 'asdasd', 'ผักออแกนิค', 50, '2025-03-03 07:14:43'),
(11, 'P-122316666', 'ผักสลัดออแกนิก00', '/uploads/1740986093543-1200px-Vegetable-Carrot-Bundle-wStalks.jpg', 5, 12122.00, 1221.00, 12.00, 'asdasa', 'ผักออแกนิค', 50, '2025-03-03 07:14:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbladmin`
--
ALTER TABLE `tbladmin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `tblproduct`
--
ALTER TABLE `tblproduct`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_code` (`product_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbladmin`
--
ALTER TABLE `tbladmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblproduct`
--
ALTER TABLE `tblproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
