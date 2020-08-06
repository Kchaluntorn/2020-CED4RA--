-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 06 ส.ค. 2020 เมื่อ 11:00 AM
-- เวอร์ชันของเซิร์ฟเวอร์: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usertable`
--
CREATE DATABASE IF NOT EXISTS `usertable` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `usertable`;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(150) NOT NULL,
  `github` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- dump ตาราง `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `status`, `name`, `surname`, `github`) VALUES
(10, 's6002041620021@email.kmutnb.ac.th', 's6002041620021@email.kmutnb.ac.th', 'cwBuL6DrHqR5iqltuc8JA1R3OK0=f11d090e958c57fb41c4aa33562c714f', 0, 'Chaluntorn', 'Ketkeaw', 'kchaluntorn'),
(11, 's6002041620055@email.kmutnb.ac.th', 's6002041620055@email.kmutnb.ac.th', 'XMIp55vvuTC+9PcQ/DQj0ZZmLxA=20f84ebf385fb4abb6deeea522f66ea1', 0, 'Patipong', 'Toisuwan', 'Aumcontrol'),
(12, 's6002041620012@email.kmutnb.ac.th', 's6002041620012@email.kmutnb.ac.th', 'FhgW0DuMT5b9ugrps8OAOI4MRiY=f11d090e958c57fb41c4aa33562c714f', 0, 'kittithach', 'playkeaw', 'jamessai4'),
(13, 's6002041610076@email.kmutnb.ac.th', 's6002041610076@email.kmutnb.ac.th', 'SWmB11OyVOos6L7jX68EQpV6Lyc=d39243be7db38aa3d1fd9213c9a3fdfe', 0, 'rungnapa', 'ketchang', 'kinyoubi12'),
(14, 's6002041630026@email.kmutnb.ac.th', 's6002041630026@email.kmutnb.ac.th', '/BGi14lPINb8ZAB+W+AaNG6zDP4=f11d090e958c57fb41c4aa33562c714f', 0, 'Noppakrit', 'Kasiansin', 'noppakrit55555'),
(15, 's6002041620047@email.com', 's6002041620047@email.com', 'EnNzTYty+VdtNYhoOYaaFZUgU4w=ded1a323142cebdd2cdd1e90219abea0', 0, 'Thanawit', 'sriprapha', 'Tlethanawit321');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
