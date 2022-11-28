-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2022 at 06:31 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_noise`
--
CREATE DATABASE IF NOT EXISTS `db_noise` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_noise`;

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE `artist` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`id`, `name`) VALUES
('ART-00001', 'Exhumation'),
('ART-00002', 'Doldrey'),
('ART-00005', 'Candy'),
('ART-00006', 'Conjureth'),
('ART-00007', 'Aborted'),
('ART-00008', 'Amenra'),
('ART-00009', 'Ancest'),
('ART-00010', 'Funeral Chant'),
('ART-00011', 'Jesu'),
('ART-00012', 'Knocked Lose'),
('ART-00013', 'Terror'),
('ART-00014', 'Poison Idea'),
('ART-00015', 'Poison Nova'),
('ART-00016', 'Zeal & Ardor'),
('ART-00017', 'Uniform'),
('ART-00018', 'Lord'),
('ART-00019', 'Spectral Wound');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` varchar(255) NOT NULL,
  `parent` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `parent`, `name`) VALUES
('CAT-00001', 'Apparel', 'T-Shirt'),
('CAT-00002', 'Apparel', 'Longsleeve'),
('CAT-00003', 'Apparel', 'Hoodie'),
('CAT-00004', 'Apparel', 'Pullover'),
('CAT-00005', 'Apparel', 'Zip Hoodie'),
('CAT-00006', 'Apparel', 'Crewneck'),
('CAT-00007', 'Music', '12\"-Vinyl'),
('CAT-00008', 'Accessories', 'Bag'),
('CAT-00009', 'Music', '10\"-Vinyl'),
('CAT-00010', 'Music', '7\"-Vinyl'),
('CAT-00011', 'Accessories', 'Hats'),
('CAT-00012', 'Accessories', 'Patches'),
('CAT-00013', 'Accessories', 'Flags'),
('CAT-00014', 'Accessories', 'Pin'),
('CAT-00015', 'Accessories', 'Buttons'),
('CAT-00016', 'Music', 'Cd'),
('CAT-00017', 'Music', 'Tape');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `address` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `phone` varchar(16) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(255) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `email`, `name`, `password`, `gender`, `address`, `province`, `city`, `birthdate`, `phone`, `created_at`, `remember_token`, `updated_at`) VALUES
('585d5946578e4c298408081f66052004', 'ainandiyah@gmail.com', 'anitaainandiyah12', '$2y$10$Tvg4Mht/srOwgl91Ob05Yu6Tx8kztnHt/M9QG.Zrtf8mK1nkhQ3Sq', 'Female', 'Jalan Raya PKP No. 24 Kelapa', 'Central Java', 'Boyolali', '2022-11-15', '081293753692', '2022-11-20 03:05:06', '', '2022-11-20 05:15:05'),
('5c3437dcff46440bab7d5b4e87ca4b53', 'user@gmail.com', 'anitaainandiyah', '$2y$10$C9V6QvK/tkkpPheOIT0myeTq16kqoU.YAmvsV9nNT5eJUgYYqQgI.', 'Female', 'Jalan Raya PKP No. 24 Kelapa', 'West Java', 'Bandung', '2022-11-03', '081293753692', '2022-11-20 05:42:56', 'udhK5ERiGcjztIXHcrbhTBepelWc28Hc74imzB3b8rzqqofLI7dN0cHKgPB8', '2022-11-20 11:11:19');

-- --------------------------------------------------------

--
-- Table structure for table `detail_order`
--

CREATE TABLE `detail_order` (
  `id` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `status_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` varchar(255) NOT NULL,
  `id_product` varchar(255) NOT NULL,
  `path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `id_product`, `path`) VALUES
('IMG-00001', 'ITM-00002', '[\"1669550879.SPECTRALWOUND-InfernalDecadence-LS-B_5000x.jpg\",\"1669550879.SPECTRALWOUND-InfernalDecadence-LS-F_5000x.jpg\"]');

-- --------------------------------------------------------

--
-- Table structure for table `order_produk`
--

CREATE TABLE `order_produk` (
  `id` int(4) NOT NULL,
  `id_customer` int(4) NOT NULL,
  `id_produk` int(4) NOT NULL,
  `qty` int(4) NOT NULL,
  `total_order` int(15) NOT NULL,
  `status_order` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `id_category` varchar(255) DEFAULT NULL,
  `id_artist` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `material` varchar(15) NOT NULL,
  `price` int(20) NOT NULL,
  `desc` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `id_category`, `id_artist`, `tag`, `name`, `material`, `price`, `desc`, `image`) VALUES
('ITM-00001', 'CAT-00001', 'ART-00008', 'New States Apparel', 'AMENRA \"DE DOORN 2\" T-SHIRT', 'Polyster', 560000, 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '1669535501.jpg'),
('ITM-00002', 'CAT-00002', 'ART-00019', 'New States Apparel', 'SPECTRAL WOUND \"INFERNAL DECADENCE\" LONGSLEEVE', 'Cotton', 360000, 'Please note that we do our best to protect vinyl records ideally for shipping, using our custom made mailers and additional cardboard squares. However, we can not guarantee that no damage on the way occurs.', '1669536988.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_properties`
--

CREATE TABLE `product_properties` (
  `id` varchar(255) NOT NULL,
  `id_product` varchar(255) NOT NULL,
  `size` varchar(10) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_properties`
--

INSERT INTO `product_properties` (`id`, `id_product`, `size`, `stock`) VALUES
('PRO-00001', 'ITM-00002', 'XS', 1),
('PRO-00002', 'ITM-00002', 'S', 1),
('PRO-00003', 'ITM-00002', 'M', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`id`, `name`) VALUES
('TAG-00001', 'Gildan'),
('TAG-00002', 'New States Apparel');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_order`
--
ALTER TABLE `detail_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_produk`
--
ALTER TABLE `order_produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_properties`
--
ALTER TABLE `product_properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_produk`
--
ALTER TABLE `order_produk`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
