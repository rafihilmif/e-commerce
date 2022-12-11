-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2022 at 09:44 AM
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

DROP TABLE IF EXISTS `artist`;
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
('ART-00019', 'Spectral Wound'),
('ART-00020', 'Gatecreeper'),
('ART-00021', 'Bathory'),
('ART-00022', 'Blood Incantation'),
('ART-00023', 'DeafHeaven'),
('ART-00024', 'Power Trip'),
('ART-00025', 'Bad Brains'),
('ART-00026', 'Conan'),
('ART-00027', 'Converge'),
('ART-00028', 'Windhand'),
('ART-00029', 'Venom'),
('ART-00030', 'Age of Apocalypse'),
('ART-00031', 'End');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
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

DROP TABLE IF EXISTS `category`;
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

DROP TABLE IF EXISTS `customer`;
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
  `remember_token` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `email`, `name`, `password`, `gender`, `address`, `province`, `city`, `birthdate`, `phone`, `created_at`, `remember_token`, `updated_at`) VALUES
('05d3a072-8337-3d06-b3d1-8953bfcf2dc1', 'lheaney@hamill.com', 'Mr. Dino Brakus DVM', '$2y$10$Y49n4uvP.Jv5qRJxhMAqpOE0skVVwNnpPVWIFAbuqoU/t6hrXO6gi', 'Male', '9827 Veum Lake Suite 299\nMicheleborough, ME 26296-0859', 'Delaware', 'Heaneychester', '2013-11-21', '612-439-313-842', '2022-11-25 02:43:29', NULL, '2022-11-30 09:50:20'),
('0ac9d4cc-d429-3e17-b2fc-5d6c90e0a666', 'groob@hotmail.com', 'Magdalena Becker', '$2y$10$0/i68IIX98i5/Vq4/ZqNLOr.48IRlMAEYsMBCI9IYsbr92HOVSHya', 'Female', '788 Camron Mount Apt. 927\nCorneliusport, AK 22746', 'Missouri', 'North Stephania', '1992-12-05', '623-246-094-767', '2022-11-27 16:29:43', NULL, '2022-11-29 12:53:49'),
('11ebd09d5d5e4b84bf9fddb2a6471c83', 'user@gmail.com', 'Darmaji Susanto', '$2y$10$ijccD9Xnfjo6r7TPWItAsOpuxvf6ApGOXulEnfMtbe94CIS5nPcU.', 'Female', 'Jalan Raya PKP No. 24 Kelapa', 'Central Java', 'Surabaya', '2022-11-30', '081293753692', '2022-12-10 02:18:30', NULL, '2022-12-10 02:18:30'),
('1685b56e-91d8-36a0-91ce-ceff1bd54db4', 'remmerich@brown.com', 'Benedict Rice', '$2y$10$sVDTvVfLiihWe2RdZvoGjOGLA3IWLxeHy8k1dZgEu6phqaI6ToVj.', 'Female', '9305 Blick Groves Apt. 985\nTracyville, WV 67254', 'South Dakota', 'North Juliet', '2000-05-04', '841-489-496-368', '2022-11-29 06:24:28', NULL, '2022-11-23 21:17:55'),
('23cc938a-ee00-3641-8c08-ab1768c9f29f', 'janae.leuschke@gmail.com', 'Bill Koelpin', '$2y$10$FQqWdA.brGTxpZZ9uYafpObTGVnrYlpmqXzqve5r1dY0tWl7pUhKS', 'Male', '853 Dietrich Vista Apt. 586\nNorth Antwan, NM 54000-3546', 'Wyoming', 'Janisland', '1994-06-28', '330-838-792-938', '2022-11-14 18:50:57', NULL, '2022-11-11 01:44:34'),
('35003e23-5274-33ec-b4de-0a70ad83d205', 'carroll83@satterfield.com', 'Araceli Abshire', '$2y$10$pfI857Ghpi9yT/9eC4.JdeLso41nd72ZDBxXm.3CiF/mZQ/FDEuVy', 'Male', '86045 Koss Knolls\nFritschport, TN 68604', 'Oregon', 'Jasminville', '2017-11-06', '821-511-971-038', '2022-11-10 01:47:45', NULL, '2022-11-20 06:04:47'),
('3ef07786-6e76-3327-9cef-e5e702233ec0', 'katlynn66@hotmail.com', 'Name Witting', '$2y$10$/P5lOpvq6/XyKCO3c6AvgO1E6qW6Yxm3ePyQbQ5v.l4o460HUoaUW', 'Female', '5615 Regan Roads\nBreitenbergtown, NH 87920', 'Alabama', 'Cartwrightfort', '2021-03-19', '851-321-256-203', '2022-11-21 14:41:56', NULL, '2022-11-30 11:29:29'),
('40d0adf4-b0e3-3f29-b061-ba0cb3c90eb0', 'sincere.will@gmail.com', 'Keith Goodwin', '$2y$10$42Iodq/Ge.7p0YmFdo/0i.7ovrGbXaco1SS96.1zYvAhhS66Z7b6m', 'Male', '385 Russell Islands Suite 661\nTillmanton, NE 31320-8174', 'New Mexico', 'East Bernice', '2017-08-24', '803-955-088-029', '2022-12-01 10:49:48', NULL, '2022-11-16 15:34:28'),
('44d7bee3-8bbb-3450-a1cf-6b8ec3995b55', 'zelma.dooley@gmail.com', 'Brody Hodkiewicz DVM', '$2y$10$C0KrzYQ0.1defkRTHwEGG.3u9/.Hj4EoLvkStKhVxNfXcWjpUjA0G', 'Female', '42003 Esteban Manor\nEllisshire, IN 47055', 'Missouri', 'Lesleyport', '2004-12-23', '110-024-679-859', '2022-11-28 13:42:53', NULL, '2022-12-04 01:14:29'),
('48c18cf8-c878-3325-bdc5-be15456cee58', 'gerda.davis@marvin.com', 'Peggie D\'Amore', '$2y$10$Kz7rHDhrBXANMumCYEbo8uKhLLxq82AekaYwQ/fSBNwzr4xF6mdZ6', 'Male', '248 Murray Orchard Apt. 738\nVolkmanbury, PA 54111-1569', 'New Jersey', 'New Abbey', '1993-09-20', '339-939-956-999', '2022-11-27 09:35:05', NULL, '2022-11-23 04:12:29'),
('505d6b97-54af-3d33-bee4-e55e81b4d996', 'johnson.jalyn@mraz.com', 'Mrs. Mayra Emard Jr.', '$2y$10$eFDvtytZFzodSpfEZyC3SucD4Z2faFTnYygu4uVDDo2n24KHc.g.W', 'Male', '9543 Howe Shore\nGleasonside, AL 98133', 'Kansas', 'Lefflerborough', '2011-10-17', '175-876-894-259', '2022-11-18 16:21:51', NULL, '2022-11-20 13:45:24'),
('534c9f0c-a363-34ef-a2cb-1eae7c3c0933', 'jacquelyn.carroll@kuphal.org', 'Archibald Wisozk Jr.', '$2y$10$DcMMsV9K/pl34oexEai9I.KeFHbaMi8Y1AegyKY.i9sPNdCPLhT9S', 'Female', '405 Gusikowski Radial\nNorth Bethel, TX 04602', 'Indiana', 'Nyahfort', '2004-08-23', '355-383-162-879', '2022-11-27 02:34:37', NULL, '2022-11-09 01:03:52'),
('57f5095d-53fa-336e-b823-48da88a6ef2e', 'julie.waters@hotmail.com', 'Claudia Bruen', '$2y$10$82Yxk5aLOJur/.SKovoJUu1nYduP1f/EXIBsEQ6ARs07vHcc6xMOK', 'Male', '5825 Rosendo Ferry Suite 594\nHicklechester, AK 26057', 'Idaho', 'Hettingerberg', '2012-09-29', '344-496-217-862', '2022-11-27 18:51:31', NULL, '2022-12-03 08:05:08'),
('78a6a4a5-25d0-39c0-ad68-2cc634f270aa', 'okunde@lynch.com', 'Miss Era Beer', '$2y$10$tKiVeh4HBF8f/AidEcRO7eJGglnw02KtP1sMs4iuVp4H1ynnezu6m', 'Male', '82546 Montana Manors\nSchaeferport, AK 86195', 'Florida', 'South Joshuahborough', '2001-02-26', '270-102-858-594', '2022-11-14 20:12:02', NULL, '2022-11-16 03:14:34'),
('78b55563-b811-3553-a5b7-9254d33aad18', 'mwalter@gmail.com', 'Alivia Homenick', '$2y$10$zzX/sMUDmJ0Uola48m5yOuMat6fewx06GqQlmDDMrlJ6XbRV5RuxO', 'Female', '6887 Heathcote Fords\nEast Enosville, OR 03780', 'Montana', 'Odessamouth', '2018-08-04', '924-716-398-878', '2022-11-10 22:41:44', NULL, '2022-11-09 11:13:06'),
('81ed2d17-7ead-382a-9ebd-1068bdb1cc78', 'marian25@yahoo.com', 'Miss Raquel Frami IV', '$2y$10$5xQOXvK0nVQaL9vG0aqTLurPTvoVYaRoaj8s6VCsjVv6ckyB6Rz.G', 'Female', '61697 Jerde Turnpike\nPasqualebury, MT 28659', 'Ohio', 'Jacobsstad', '2013-06-09', '906-482-217-696', '2022-11-25 14:33:13', NULL, '2022-12-02 09:22:42'),
('96a5dd7e-baaa-38ef-8f94-6fffe25b6e0a', 'fritz.koelpin@strosin.com', 'Collin Lebsack', '$2y$10$vCipiwBCkR2e4g38/FPrDeIfD6xADbxATy/TtAHdt7MJ5mhM2MBju', 'Male', '11921 Hettinger Estates\nNew Adolphburgh, MD 64202', 'Illinois', 'North Alessandromouth', '2013-10-28', '800-279-766-053', '2022-11-13 12:14:13', NULL, '2022-11-14 07:47:52'),
('99ad6793-81e0-35ae-bb4a-42fd6e86fa24', 'rosalyn83@hotmail.com', 'Mr. Prince Wolf', '$2y$10$6s2eUPT20sOAlSywJynkQ.cXixOjQF4.Ja8MaeX.jrknIV1n09.py', 'Male', '5159 Davis Underpass\nSipesville, MO 82943', 'Ohio', 'New Shakira', '2002-11-11', '305-614-993-416', '2022-11-25 14:57:41', NULL, '2022-11-14 17:29:38'),
('99c95d45-b718-3ed0-94d2-c46570838747', 'fredy15@yahoo.com', 'Jakayla Torp', '$2y$10$L8l1R5O5PX55ed7182dvCuUCsRyv/YnM3pzGXDZC4cYA5vLNl0eNG', 'Male', '33607 Reichel Ville Apt. 972\nWest Dejon, IN 03131', 'Illinois', 'Port Zacharyfort', '2020-04-24', '613-524-079-193', '2022-11-17 15:14:21', NULL, '2022-11-26 01:12:53'),
('9e6a32f0-02d7-3993-9a57-79e5ac94738c', 'mpagac@schmeler.com', 'Dan Gaylord II', '$2y$10$7NzgPWWGUm.gmVL/cBhgIuE6Z4BGv/XT9vPaoqUOk9vO0waV8OWmG', 'Male', '3557 O\'Connell Mills Suite 653\nNorth Colleen, ND 34570-9010', 'Alaska', 'North Tamiachester', '2016-01-20', '633-101-483-622', '2022-12-04 06:05:41', NULL, '2022-11-20 14:21:01'),
('9ef0c4f3-0496-3dca-9453-dae5cfbb869c', 'arch.lynch@yahoo.com', 'Miss Petra Gutkowski IV', '$2y$10$m9A64k.afF7pwRaDpZFjveh7nc49ks57q.jSpoDg79JeflamrkACG', 'Male', '24717 Josephine Squares\nBobbiemouth, WA 65299', 'Georgia', 'New Sofia', '1993-05-16', '065-280-898-852', '2022-11-28 03:21:09', NULL, '2022-11-07 15:59:45'),
('a01c5cc2-857a-3f3a-ba61-e918bfc5a2bd', 'rutherford.shanelle@jakubowski.net', 'Miss Mariah Daniel', '$2y$10$XiSxkMSjrsaTexgfqOfb3.TKwEBMuKNSSpKlwm3Wf75bm01z/VL8K', 'Male', '4708 Balistreri Parks Apt. 437\nSouth Sonnymouth, IL 39188-7787', 'Nevada', 'Olinhaven', '2020-04-14', '573-975-233-127', '2022-11-21 18:19:21', NULL, '2022-11-19 01:26:20'),
('b1ca98c1-d2d3-3088-aa36-ab6311d2ceed', 'rogahn.delilah@klocko.com', 'Bertha Padberg', '$2y$10$FmbEbf6Vbscmu.hYqL/xZ.WdGvqMLNbEA5ksigj.bPvHaWl5tujGK', 'Male', '8092 Adriel Roads Apt. 585\nAmaliaport, VA 25322', 'Nebraska', 'Michelfurt', '2000-02-16', '031-169-290-587', '2022-11-27 23:09:23', NULL, '2022-11-07 22:34:54'),
('c4d9d09f-4c69-3f4e-a56a-5b3a8ed4353a', 'dbergstrom@daniel.com', 'Turner Zulauf Jr.', '$2y$10$52xXSThhf78tVM2muLX.sO3Nj906Hm9w97QqvRD1sWhjPgKn4tLQ2', 'Female', '123 Carrie Path\nWest Karaview, NJ 76334-5375', 'Georgia', 'Andersonborough', '2018-01-05', '284-146-835-887', '2022-11-23 08:39:18', NULL, '2022-11-19 10:55:14'),
('f283d20c-7803-301b-8a99-51570027834f', 'kole.christiansen@yost.org', 'Jay Lang', '$2y$10$JVcF6sk4sNtXyhmcZOsAruVJRSW6WubrUhU4CwQdxUsIRrKkWTZSq', 'Male', '9441 Kuhic Green\nSouth Americo, PA 10162', 'Kansas', 'Port Nathaniel', '2004-12-12', '607-704-649-868', '2022-12-03 21:34:14', NULL, '2022-11-22 14:19:47'),
('f9a1de8c-b394-3580-98bb-3a324f3b2a1e', 'ora78@bauch.net', 'Ali Senger', '$2y$10$HueRlCeR7u21g/2xdwOom.UcoQWDMDbzWDKuQOD0qLquke5VGr5lm', 'Female', '65235 Breitenberg Village Suite 898\nDeonteshire, KY 73137', 'Wyoming', 'East Phoebetown', '2005-07-03', '392-849-958-177', '2022-11-16 12:18:32', NULL, '2022-11-04 20:40:01');

-- --------------------------------------------------------

--
-- Table structure for table `detail_order`
--

DROP TABLE IF EXISTS `detail_order`;
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

DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` varchar(255) NOT NULL,
  `id_product` varchar(255) NOT NULL,
  `path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `id_product`, `path`) VALUES
('IMG-00001', 'ITM-00001', '[\"1670081201.SPECTRALWOUND-InfernalDecadence-LS-B_5000x.jpg\",\"1670081201.SPECTRALWOUND-InfernalDecadence-LS-F_5000x.jpg\"]'),
('IMG-00002', 'ITM-00002', '[\"1670081400.SPECTRALWOUND-InfernalDecadence-TS-B_5000x.jpg\",\"1670081400.SPECTRALWOUND-InfernalDecadence-TS-F_5000x.jpg\"]'),
('IMG-00003', 'ITM-00003', '[\"1670081590.SPECTRALWOUND-Skull-TS-B_5000x.jpg\",\"1670081590.SPECTRALWOUND-Skull-TS-F_5000x.jpg\"]'),
('IMG-00004', 'ITM-00005', '[\"1670082176.AMENRA-Branca-LS-B_5000x.jpg\",\"1670082176.AMENRA-Branca-LS-F_5000x.jpg\"]'),
('IMG-00005', 'ITM-00011', '[\"1670085128.DEAFHEAVEN-WaveformBlack-LS-B_5000x.jpg\",\"1670085128.DEAFHEAVEN-WaveformBlack-LS-F_5000x.jpg\"]'),
('IMG-00006', 'ITM-00012', '[\"1670085471.DEAFHEAVEN-Waveform-LS-B_5000x.jpg\",\"1670085471.DEAFHEAVEN-Waveform-LS-F_5000x.jpg\"]'),
('IMG-00007', 'ITM-00013', '[\"1670086680.VENOM-CalmBeforeTheStorm-TS-B_5000x.jpg\",\"1670086680.VENOM-CalmBeforeTheStorm-TS-F_5000x.jpg\"]');

-- --------------------------------------------------------

--
-- Table structure for table `order_produk`
--

DROP TABLE IF EXISTS `order_produk`;
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

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `id_category` varchar(255) DEFAULT NULL,
  `id_artist` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `material` varchar(15) NOT NULL,
  `price` int(20) NOT NULL,
  `desc` text NOT NULL,
  `image` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `id_category`, `id_artist`, `tag`, `name`, `material`, `price`, `desc`, `image`, `created_at`, `updated_at`) VALUES
('ITM-00004', 'CAT-00001', 'ART-00008', 'GILDAN', 'AMENRA \"REIGN LE DOORN\" T-SHIRT', 'Cotton', 575000, '\"REIGN VE DOORN\" T-SHIRT', '1670653051.jpg', '2022-12-10 06:17:31', '2022-12-09 23:17:31'),
('ITM-00005', 'CAT-00002', 'ART-00008', 'Gildan', 'AMENRA \"BRANCA\" LONGSLEEVE', 'Cotton', 750000, '\"BRANCA\" LONGSLEEVE', '1670082134.jpg', '2022-12-03 08:42:14', '2022-12-03 08:42:14'),
('ITM-00006', 'CAT-00001', 'ART-00024', 'Gildan', 'POWER TRIP \"RUINATION\" T-SHIRT', 'Cotton', 450000, '\"RUINATION\" T-SHIRT', '1670082847.jpg', '2022-12-03 08:54:07', '2022-12-03 08:54:07'),
('ITM-00007', 'CAT-00001', 'ART-00024', 'Gildan', 'POWER TRIP \"FIRING SQUAD\" T-SHIRT', 'Cotton', 450000, '\"FIRING SQUAD\"T-SHIRT', '1670082951.jpg', '2022-12-03 08:55:51', '2022-12-03 08:55:51'),
('ITM-00008', 'CAT-00001', 'ART-00027', 'Gildan', 'CONVERGE \"JANE DOE GREEN\" T-SHIRT', 'Cotton', 475000, '\"JANE DOE GREEN\" T-SHIRT', '1670083077.jpg', '2022-12-03 08:57:57', '2022-12-03 08:57:57'),
('ITM-00009', 'CAT-00001', 'ART-00027', 'Gildan', 'CONVERGE \"JANE DOE GREY\" T-SHIRT', 'Cotton', 475000, '\"JANE DOE\" T-SHIRT', '1670084528.jpg', '2022-12-03 16:26:18', '2022-12-03 09:22:08'),
('ITM-00010', 'CAT-00001', 'ART-00027', 'Gildan', 'CONVERGE \"JANE DOE RED\" T-SHIRT', 'Cotton', 475000, '\"JANE DOE RED\" T-SHIRT', '1670084758.jpg', '2022-12-03 09:25:58', '2022-12-03 09:25:58'),
('ITM-00011', 'CAT-00002', 'ART-00023', 'Gildan', 'DEAFHEAVEN \"WAVEFORM BLACK\" LONGSLEEVE', 'Cotton', 675000, '\"WAVEFORM BLACK\" LONGSLEEVE', '1670085022.jpg', '2022-12-03 16:31:37', '2022-12-03 09:30:22'),
('ITM-00012', 'CAT-00002', 'ART-00023', 'Gildan', 'DEAFHEAVEN \"WAVEFORM - WHITE\" LONGSLEEVE', 'Cotton', 675000, '\"WAVEFORM WHITE\" LONGSLEEVE', '1670085106.jpg', '2022-12-03 09:31:46', '2022-12-03 09:31:46'),
('ITM-00013', 'CAT-00001', 'ART-00029', 'GILDAN', 'VENOM \"CALM BEFORE THE STORM\" T-SHIRT', 'Cotton', 475000, '\"CALM BEFORE THE STORM\" T-SHIRT', '1670086667.jpg', '2022-12-03 09:57:47', '2022-12-03 09:57:47');

-- --------------------------------------------------------

--
-- Table structure for table `product_properties`
--

DROP TABLE IF EXISTS `product_properties`;
CREATE TABLE `product_properties` (
  `id` varchar(255) NOT NULL,
  `id_product` varchar(255) NOT NULL,
  `size` varchar(10) DEFAULT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_properties`
--

INSERT INTO `product_properties` (`id`, `id_product`, `size`, `stock`) VALUES
('PRO-00001', 'ITM-00001', 'XS', 1),
('PRO-00002', 'ITM-00001', 'S', 1),
('PRO-00003', 'ITM-00001', 'M', 1),
('PRO-00004', 'ITM-00001', 'L', 1),
('PRO-00005', 'ITM-00001', 'XL', 1),
('PRO-00006', 'ITM-00002', 'S', 1),
('PRO-00007', 'ITM-00002', 'M', 1),
('PRO-00008', 'ITM-00003', 'XL', 1),
('PRO-00009', 'ITM-00003', 'XXL', 1),
('PRO-00010', 'ITM-00005', 'S', 1),
('PRO-00011', 'ITM-00001', 'XS', 1),
('PRO-00012', 'ITM-00005', 'M', 1),
('PRO-00013', 'ITM-00004', 'XS', 1),
('PRO-00014', 'ITM-00004', 'XXL', 1),
('PRO-00015', 'ITM-00006', 'S', 1),
('PRO-00016', 'ITM-00006', 'M', 1),
('PRO-00017', 'ITM-00006', 'L', 1),
('PRO-00018', 'ITM-00007', 'S', 1),
('PRO-00019', 'ITM-00007', 'M', 1),
('PRO-00020', 'ITM-00008', 'L', 1),
('PRO-00021', 'ITM-00008', 'S', 1),
('PRO-00022', 'ITM-00008', 'M', 1),
('PRO-00023', 'ITM-00009', 'XS', 1),
('PRO-00024', 'ITM-00009', 'S', 1),
('PRO-00025', 'ITM-00009', 'L', 1),
('PRO-00026', 'ITM-00010', 'XS', 1),
('PRO-00027', 'ITM-00010', 'L', 1),
('PRO-00028', 'ITM-00010', 'XXL', 1),
('PRO-00029', 'ITM-00011', 'M', 1),
('PRO-00030', 'ITM-00011', 'XS', 1),
('PRO-00031', 'ITM-00011', 'L', 1),
('PRO-00032', 'ITM-00012', 'XS', 1),
('PRO-00033', 'ITM-00012', 'M', 1),
('PRO-00034', 'ITM-00012', 'XL', 1),
('PRO-00035', 'ITM-00013', 'XS', 1),
('PRO-00036', 'ITM-00013', 'S', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
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
