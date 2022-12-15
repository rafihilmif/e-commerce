-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2022 at 05:12 PM
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
('ART-00031', 'End'),
('ART-00032', 'Arabrot'),
('ART-00033', 'Cold Cave'),
('ART-00034', 'Red Apollo'),
('ART-00035', 'Sugartown'),
('ART-00036', 'Thou'),
('ART-00037', 'KEKHT ARÄKH'),
('ART-00038', 'Death'),
('ART-00039', 'Born Free'),
('ART-00040', 'Drain'),
('ART-00041', 'Slayer'),
('ART-00042', 'Integrity'),
('ART-00043', 'Full Of Hell'),
('ART-00044', 'Nails'),
('ART-00045', 'SUNN O)))'),
('ART-00046', 'WOLVES IN THE THRONE ROOM'),
('ART-00047', 'Primitive Man'),
('ART-00048', 'OF FEATHER AND BONE'),
('ART-00049', 'Abbath'),
('ART-00050', 'Baroness'),
('ART-00051', 'Baptists');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` varchar(255) NOT NULL,
  `id_customer` varchar(255) NOT NULL,
  `id_product` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `id_customer`, `id_product`, `name`, `qty`, `image`) VALUES
('CA2022-12-11 16:30:440002', '11', 'ITM-00007', 'POWER TRIP \"FIRING SQUAD\" T-SHIRT', 4, '1670082951.jpg'),
('CA2022-12-11 16:31:240002', '11', 'ITM-00005', 'AMENRA \"BRANCA\" LONGSLEEVE', 6, '1670082134.jpg'),
('CA2022-12-13 07:01:590003', '6', 'ITM-00004', 'AMENRA \"REIGN LE DOORN\" T-SHIRT', 1, '1670653051.jpg'),
('CA2022-12-13 07:02:180004', '6', 'ITM-00006', 'POWER TRIP \"RUINATION\" T-SHIRT', 1, '1670082847.jpg'),
('CA2022-12-13 07:02:220005', '6', 'ITM-00008', 'CONVERGE \"JANE DOE GREEN\" T-SHIRT', 1, '1670083077.jpg');

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
('6d60d5f57d6b4812a77b32e57230b047', 'user1@gmail.com', 'Darman Susanto', '$2y$10$RaScgbVYQEtSup1Xzc4fOuTcbIJ3JNIefdTH/MydmfQ2ZJTeuyrp2', 'Male', 'Jalan Raya PKP No. 24 Kelapa', 'WestSumatra', 'Bukit Tinggi', '2022-12-08', '081293753692', '2022-12-12 23:59:14', NULL, '2022-12-12 23:59:14'),
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
('IMG-00007', 'ITM-00013', '[\"1670086680.VENOM-CalmBeforeTheStorm-TS-B_5000x.jpg\",\"1670086680.VENOM-CalmBeforeTheStorm-TS-F_5000x.jpg\"]'),
('IMG-00008', 'ITM-00044', '[\"1671115438.SPECTRALWOUND-ADiabolicThirst-TS-B_5000x.jpg\",\"1671115438.SPECTRALWOUND-ADiabolicThirst-TS-F_5000x.jpg\"]'),
('IMG-00009', 'ITM-00046', '[\"1671115488.SPECTRALWOUND-InfernalDecadence-TS-B_5000x.jpg\",\"1671115488.SPECTRALWOUND-InfernalDecadence-TS-F_5000x.jpg\"]'),
('IMG-00010', 'ITM-00045', '[\"1671115511.SPECTRALWOUND-Skull-TS-B_5000x.jpg\",\"1671115511.SPECTRALWOUND-Skull-TS-F_5000x.jpg\"]'),
('IMG-00012', 'ITM-00042', '[\"1671115597.BATHORY-UnderTheSign-TS-F_5000x.jpg\",\"1671115597.BATHORY-Goat-TS-B_5000x.jpg\"]'),
('IMG-00013', 'ITM-00052', '[\"1671116638.FULL-OF-HELL-Cover-LS-B_5000x.jpg\",\"1671116638.FULL-OF-HELL-Cover-LS-F_5000x.jpg\"]'),
('IMG-00014', 'ITM-00054', '[\"1671117049.KEKHT-ARAKH-Pale-Swordsman-LS-B_5000x.jpg\",\"1671117049.KEKHT-ARAKH-Pale-Swordsman-LS-F_5000x.jpg\"]'),
('IMG-00015', 'ITM-00057', '[\"1671117413.NAILS-YWNBOOU-LS-B_5000x.jpg\",\"1671117413.NAILS-YWNBOOU-LS-F_5000x.jpg\"]'),
('IMG-00016', 'ITM-00060', '[\"1671117783.AGEOFAPOCALYPSE-Hands-HS-B_5000x.jpg\",\"1671117783.AGEOFAPOCALYPSE-Hands-HS-F_5000x.jpg\"]'),
('IMG-00017', 'ITM-00063', '[\"1671118145.INTEGRITY-Logo-HS-B_5000x.jpg\",\"1671118145.INTEGRITY-Logo-HS-F_5000x.jpg\"]'),
('IMG-00018', 'ITM-00064', '[\"1671118398.ABORTED-Grindesign-ZIP-B_5000x.jpg\",\"1671118398.ABORTED-Grindesign-ZIP-F_5000x.jpg\"]'),
('IMG-00019', 'ITM-00065', '[\"1671118618.SUNN-LifeMetal-ZIP-B_5000x.jpg\",\"1671118618.SUNN-LifeMetal-ZIP-F_5000x.jpg\"]'),
('IMG-00020', 'ITM-00066', '[\"1671118733.SUNN-Total-Backline-ZIP-B_5000x.jpg\",\"1671118733.SUNN-Total-Backline-ZIP-F_5000x.jpg\"]'),
('IMG-00021', 'ITM-00067', '[\"1671119042.WITTR-PrimordialArcana-ZIP-B_5000x.jpg\",\"1671119042.WITTR-PrimordialArcana-ZIP-F_5000x.jpg\"]'),
('IMG-00022', 'ITM-00069', '[\"1671119344.PM-Reaper-CN-B_5000x.jpg\",\"1671119344.PM-Reaper-CN-F_5000x.jpg\"]');

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
('ITM-00005', 'CAT-00002', 'ART-00008', 'Gildan', 'AMENRA \"REIGN BLOOD VEIN\" LONGSLEEVE', 'Cotton', 750000, '\"BRANCA\" LONGSLEEVE', '1670937635.jpg', '2022-12-13 13:20:35', '2022-12-13 06:20:35'),
('ITM-00006', 'CAT-00001', 'ART-00024', 'Gildan', 'POWER TRIP \"RUINATION\" T-SHIRT', 'Cotton', 450000, '\"RUINATION\" T-SHIRT', '1670082847.jpg', '2022-12-03 08:54:07', '2022-12-03 08:54:07'),
('ITM-00007', 'CAT-00001', 'ART-00024', 'Gildan', 'POWER TRIP \"FIRING SQUAD\" T-SHIRT', 'Cotton', 450000, '\"FIRING SQUAD\"T-SHIRT', '1670082951.jpg', '2022-12-03 08:55:51', '2022-12-03 08:55:51'),
('ITM-00008', 'CAT-00001', 'ART-00027', 'Gildan', 'CONVERGE \"JANE DOE GREEN\" T-SHIRT', 'Cotton', 475000, '\"JANE DOE GREEN\" T-SHIRT', '1670083077.jpg', '2022-12-03 08:57:57', '2022-12-03 08:57:57'),
('ITM-00009', 'CAT-00001', 'ART-00027', 'Gildan', 'CONVERGE \"JANE DOE GREY\" T-SHIRT', 'Cotton', 475000, '\"JANE DOE\" T-SHIRT', '1670084528.jpg', '2022-12-03 16:26:18', '2022-12-03 09:22:08'),
('ITM-00010', 'CAT-00001', 'ART-00027', 'Gildan', 'CONVERGE \"JANE DOE RED\" T-SHIRT', 'Cotton', 475000, '\"JANE DOE RED\" T-SHIRT', '1670084758.jpg', '2022-12-03 09:25:58', '2022-12-03 09:25:58'),
('ITM-00011', 'CAT-00002', 'ART-00023', 'Gildan', 'DEAFHEAVEN \"WAVEFORM BLACK\" LONGSLEEVE', 'Cotton', 675000, '\"WAVEFORM BLACK\" LONGSLEEVE', '1670085022.jpg', '2022-12-03 16:31:37', '2022-12-03 09:30:22'),
('ITM-00012', 'CAT-00002', 'ART-00023', 'Gildan', 'DEAFHEAVEN \"WAVEFORM - WHITE\" LONGSLEEVE', 'Cotton', 675000, '\"WAVEFORM WHITE\" LONGSLEEVE', '1670085106.jpg', '2022-12-03 09:31:46', '2022-12-03 09:31:46'),
('ITM-00014', 'CAT-00007', 'ART-00008', '-', 'AMENRA \"ALIVE\" 12\" VINYL OFFICIAL', '-', 550000, 'In 2009, Amenra released the beautiful and fragile EP Afterlife, meant as a musical testament for future generations. The acoustic tracks that made up this EP showed a very different aspect of the band, but also proved that in any incarnation Amenra connects on a deeply emotional level with its audience. The acoustic album kept on lingering in the background, and it was only a matter of time for the band to revisit the acoustic approach of the EP. In 2014 Amenra again showed their most vulnerable side on different stages. This album collects live recordings of old and new acoustic renditions of Amenra tracks, but it also harbors the collaboration with Belgian poet Sofie Verdoodt and two bone chilling covers.', '1671108583.jpg', '2022-12-15 12:51:34', '2022-12-15 05:49:43'),
('ITM-00015', 'CAT-00007', 'ART-00008', '-', 'AMENRA \"LIVE I\" 12\" VINYL OFFICIAL', '-', 550000, 'Originally released in a series of split vinyl releases, this double LP collects live versions of tracks from the band\'s rich and engrossing back-catalogue have been selected from various locations all over Europe. \r\n\r\nShows at Texas Necropolis - Athens (GR 07.03.09), Stadsschouwburg - Kortrijk (BE 23.10.09) and W2 - Den Bosch (NL 07.11.10), serve as memorable performances that are catalogued and preserved.\r\n\r\nWith this CD you can experience the profound and deeply moving undertaking an AMENRA show entails, in the (dis)comfort of your own space.\r\n\r\nThe music has been mixed and partially mastered by Hein Devos and Billy Anderson to make sure the best aural quality will accompany you on your sonic journey.', '1671108831.jpg', '2022-12-15 12:54:34', '2022-12-15 05:53:51'),
('ITM-00016', 'CAT-00007', 'ART-00007', '-', 'ABORTED \"MANIACULT\" 12\" VINYL OFFICIAL', '-', 450000, 'Join theManiaCult! The latest album from grinding technical death metal svenGORElis Aborted tells the tale of leader Wayland Thurston’s attempt to summon Lovecraftian demons and bring on the end of the world. It’s a bleak mission summed up in a bleak album, which blazes beneath a blackened sky. With a sound as sinister and snaking as the heads that worm their way out from Thurston’s back, it’s no wonder Aborted have influenced deathgrind, tech death, deathcore and just death metal as a whole!', '1671109035.jpg', '2022-12-15 05:57:15', '2022-12-15 05:57:15'),
('ITM-00017', 'CAT-00007', 'ART-00030', '-', 'AGE OF APOCALYPSE \"WISDOM\" 12\" VINYL OFFICIAL', '-', 545000, 'Grim Wisdom comes packaged in a foil stamped LP jacket, accompanied by a digital download code, printed inner sleeve and deluxe color vinyl.\r\nAge of Apocalypse materialize at a shadowy crossroads between metal, grunge and hardcore. The Hudson Valley, NY quintet—Dylan Kaplowitz [vocals], Jack Xiques [guitar], Terry Orlando [guitar], Joe Shannon [bass], and Will Kamerman [drums]—steep anthems of darkness, depression, and loss into a disarmingly infectious and downright inimitable hybrid of their own. After receiving acclaim from Stereogum, CVLT NATION, No Echo, and more, the group present a fascinating and fiery vision on their sophomore full-length and debut for Closed Casket Activities, Grim Wisdom.', '1671109138.jpg', '2022-12-15 05:58:58', '2022-12-15 05:58:58'),
('ITM-00018', 'CAT-00007', 'ART-00030', '-', 'AGE OF APOCALYPSE \"THE WAY\" 12\" VINYL OFFICIAL', '-', 545000, 'This expanded vinyl edition of Age Of Apocalypse\'s debut EP, The Way includes the band\'s 2018 3-song demo on the b-side. Available on limited color vinyl, housed in spot gloss jackets. Recorded by Chris Bittner at Applehead Studios. Mastered by Brad Boatright at Audiosiege. Lacquers cut by Nick Townsend at Townsend Mastering. Art direction and design by Mathew Bradley.', '1671109255.jpg', '2022-12-15 13:03:01', '2022-12-15 06:00:55'),
('ITM-00019', 'CAT-00007', 'ART-00025', '-', 'BAD BRAINS \"BAD BRAINS\" 12\" VINYL OFFICIAL', '-', 650000, 'This is the self-titled, debut studio album recorded by American hardcore punk/reggae band Bad Brains. Recorded in 1981 and released on (then) cassette-only label ROIR on February 5, 1982, many fans refer to it as \"The Yellow Tape\" because of its yellow packaging. This reissue marks the second release in the remaster campaign, re-launching the Bad Brains Records label imprint.', '1671109406.jpg', '2022-12-15 13:04:53', '2022-12-15 06:03:26'),
('ITM-00020', 'CAT-00007', 'ART-00025', '-', 'BAD BRAINS \"QUICKNESS\" 12\" VINYL OFFICIAL', '-', 650000, '\"Quickness\" is the fourth full-length studio album by Bad Brains, originally released by Caroline Records in 1989. This reissue marks the fifth release in the remaster campaign re-launching the Bad Brains Records label imprint. The audio was mastered by Dave Gardner at Infrasonic Mastering and pressed at Furnace Record Pressing. Now available on cassette.', '1671109518.jpg', '2022-12-15 06:05:18', '2022-12-15 06:05:18'),
('ITM-00021', 'CAT-00007', 'ART-00025', '-', 'BAD BRAINS \"ROCK FOR LIGHT\" 12\" VINYL OFFICIAL', '-', 650000, '\"Rock For Light\" is the second full-length album by Bad Brains, originally released in 1983. It was produced by Ric Ocasek of The Cars. ORG Music is proud to present the original mix of the album for the first time in decades as the band originally intended. Now available on vinyl.', '1671109583.jpg', '2022-12-15 06:06:23', '2022-12-15 06:06:23'),
('ITM-00022', 'CAT-00007', 'ART-00022', '-', 'BLOOD INCANTATION \"EXT\" 12\" VINYL OFFICIAL', '-', 750000, 'Blood Incantation is an American death metal band from Denver, Colorado, formed in 2011. The band consists of guitarist and vocalist Paul Riedl, drummer Isaac Faulk, guitarist Morris Kolontyrsky and bassist Jeff Barrett. Their debut album, Starspawn, was released in 2016 through Dark Descent Records and received critical acclaim from music publications such as Decibel and Stereogum.', '1671109979.jpg', '2022-12-15 13:13:30', '2022-12-15 06:12:59'),
('ITM-00023', 'CAT-00009', 'ART-00005', '-', 'CANDY \"GOOD TO FEEL\" 10\" VINYL OFFICIAL', '-', 450000, 'Candy has once again teamed up with Triple B Records for their most fantastical and sinister release yet. Keeping in line with the artistic dualities of pleasure and pain, fact and fiction, peace and violence, their debut LP Good to Feel delivers 9 songs of their most ambitious and focused material to date. Aligning with the esteemed engineer and producer Arthur Rizk, Candy has finally achieved the type of artistry that transcends the confines of its own medium. Where they once dabbled in the marriage of noise and image, Good to Feel succeeds in its pull from deep cinematic wells.', '1671110166.jpg', '2022-12-15 13:16:38', '2022-12-15 06:16:06'),
('ITM-00024', 'CAT-00007', 'ART-00005', '-', 'CANDY \"HEAVEN IS HERE\" 12\" VINYL OFFICIAL', '-', 525000, 'CANDY make their Relapse Records debut with their highly anticipated new album, Heaven is Here. The critically acclaimed band is poised to break past the conventions of metal, hardcore, and punk with one of 2022\'s most extreme and unique records.', '1671110251.jpg', '2022-12-15 06:17:31', '2022-12-15 06:17:31'),
('ITM-00025', 'CAT-00007', 'ART-00027', '-', 'CONVERGE \"BLOOD MOON: I\" 12\" VINYL OFFICIAL', '-', 675000, 'That’s Converge vocalist Jacob Bannon talking about the seed of inspiration that eventually bloomed into Bloodmoon: I, the new collaborative album created by the legendary hardcore band alongside dark songstress Chelsea Wolfe, her bandmate/writing partner Ben Chisholm and Cave In vocalist/guitarist Steve Brodsky.', '1671110393.jpg', '2022-12-15 06:19:53', '2022-12-15 06:19:53'),
('ITM-00026', 'CAT-00007', 'ART-00027', '-', 'CONVERGE \"THE POACHER \" 12\" VINYL OFFICIAL', '-', 675000, 'Converge \"The Poacher Diaries\" has now been remixed by Kurt Ballou and remastered by Alan Douches at West West Side Music. Illustrator Randy Ortiz created artwork inspired by the original release art by Derek Hess. All presented here as a standalone 12\"EP/Digital release.', '1671110500.jpg', '2022-12-15 06:21:40', '2022-12-15 06:21:40'),
('ITM-00027', 'CAT-00007', 'ART-00027', '-', 'CONVERGE \"UNLOVED AND WEEDED OUT\" LP', '-', 675000, '\"Unloved and Weeded Out\", is a collection of 14 rare, out of print, and sought after early tracks from the band. All of the songs were remixed and remastered by Kurt Ballou at God City Studios. Clocking in at just over 40 minutes, this rare material is essential to the ever growing Converge catalog.', '1671110564.jpg', '2022-12-15 06:22:44', '2022-12-15 06:22:44'),
('ITM-00028', 'CAT-00009', 'ART-00032', '-', 'ARABROT \"BE DESTROYED\" 10\" VINYL OFFICIAL', '-', 400000, 'Originally recorded during the \'Who Do You Love\' sessions back in 2017 - the title track even intended as main single but for various reason ended up as an outtake (!) - these songs are among my personal favourites from this period. They are all inspired by Antonin Artaud\'s insane masterwork - his \'biography\' of child emperor Heliogabalus. Hallucinatory, sadistic, overly sexual and above all just completely nutters.', '1671110752.jpg', '2022-12-15 13:40:16', '2022-12-15 06:25:52'),
('ITM-00029', 'CAT-00009', 'ART-00033', '-', 'COLD CAVE \"YOU, ME, INFINITY\" 10\"', '-', 550000, 'You & Me & Infinity is back in print on 10” picture disc vinyl. Cold Cave continues to perfect their own brand of dark synth pop that manages to sound retro and futuristic at the same time. Four romantic existential anthems for the disenchanted daydreamers, including the glimmering pop tune Glory.', '1671110798.jpg', '2022-12-15 06:26:38', '2022-12-15 06:26:38'),
('ITM-00030', 'CAT-00009', 'ART-00034', '-', 'RED APOLLO \"META\" 10\" VINYL OFFICIAL', '-', 425000, 'Released via MOMENT OF COLLAPSE RECORDS in June 2017.', '1671110869.jpg', '2022-12-15 06:27:49', '2022-12-15 06:27:49'),
('ITM-00031', 'CAT-00009', 'ART-00035', '-', 'SUGARTOWN \"THIS IS A SPLIT\" 10\" VINYL OFFICIAL', '-', 440000, 'Released via MOMENT OF COLLAPSE RECORDS.', '1671110931.jpg', '2022-12-15 06:28:51', '2022-12-15 06:28:51'),
('ITM-00032', 'CAT-00009', 'ART-00036', '-', 'THOU \"RHEA SYLVIA DEMOS\" 10\" VINYL OFFICIAL', '-', 340000, 'Acoustic, \"demo\" versions of most of the \"Rhea Sylvia\" tracks, originally collected on the \"Ceremonies Of Consolidation\" CD. Available on vinyl in a single version with a thick booklet. Guitar and vocals by Matthew Thudium.', '1671111015.jpg', '2022-12-15 06:30:15', '2022-12-15 06:30:15'),
('ITM-00033', 'CAT-00017', 'ART-00037', '-', 'KEKHT ARÄKH \"NIGHT & LOVE\" TAPE', '-', 380000, 'Këkht Aräkh is the Ukrainian project founded in 2018 by Dmitry Marchenko. The debut album Night & Love was initially released on the Finnish label Livor Mortis in 2019 and it\'s now seeing a worldwide reissue via Brooklyn label Sacred Bones.', '1671111344.jpg', '2022-12-15 06:35:44', '2022-12-15 06:35:44'),
('ITM-00034', 'CAT-00017', 'ART-00037', '-', 'KEKHT ARÄKH \"PALE SWORDSMAN\" TAPE', '-', 380000, 'Këkht Aräkh is the Ukrainian project founded in 2018 by Dmitry Marchenko. Originally released on the Finnish label Livor Mortis in 2021, Pale Swordsman goes to even greater extents in building a bold and atmospheric sonic palette, and it\'s now seeing a worldwide reissue via Brooklyn label Sacred Bones. For the sound design of the album, Dmitry was inspired by The Stooges\' Raw Power to deliver a more soft sounding album, decisively less \"metal\".', '1671111437.jpg', '2022-12-15 06:37:17', '2022-12-15 06:37:17'),
('ITM-00035', 'CAT-00017', 'ART-00038', '-', 'DEATH \"INDIVIDUAL THOUGHT PATTERNS\" TAPE', '-', 450000, 'DEATH, the heavy metal institution founded, realized, and helmed by legendary guitarist Chuck Schuldiner, released the Individual Thought Patterns album (the follow-up to their watershed Human release) in 1993. Expectations were high following Human, but Schuldiner proved once again that he could rise to any occasion. Individual Thought Patterns further honed the forward-thinking and progressive direction birthed with Human, and included “The Philosopher”; arguably the best song to ever come from the world of extreme metal and to this date the most widely-recognized.', '1671111580.jpg', '2022-12-15 13:40:27', '2022-12-15 06:39:40'),
('ITM-00036', 'CAT-00017', 'ART-00039', '-', 'BORN FREE \"UPON MY HEAD\" TAPE', '-', 350000, 'Two new songs from Melbourne\'s finest, Born Free. After spending the majority of 2017 in hibernation, Born Free have returned with a new line up, and two new songs as a taste of what the band has been working on. Recorded by Lewis Noke-Edwards at Goatsound. Mixed and mastered by Sam Johnson at Holes And Corners Recording Studio.', '1671111847.jpg', '2022-12-15 06:44:07', '2022-12-15 06:44:07'),
('ITM-00037', 'CAT-00017', 'ART-00040', '-', 'DRAIN \"CALIFORNIA CURSED\" TAPE', '-', 440000, 'The city of Santa Cruz, CA, is known for its boardwalk, hippie university, and The Lost Boys movie, drawing tourists and students from all over the globe, driving up the cost of living and pushing out long-lived independent businesses. As the new blood of Santa Cruz hardcore punk, Drain has a fiery, metal-tinged, thrashing hardcore sound. For fans of Power Trip, Take Offense, Turnstile, Cro-Mags, Judge, and Terror.', '1671111937.jpg', '2022-12-15 06:45:37', '2022-12-15 06:45:37'),
('ITM-00038', 'CAT-00017', 'ART-00041', '-', 'SLAYER \"LIVE UNDEAD FUNERAL\" TAPE', '-', 500000, 'Slayer was an American thrash metal band from Huntington Park, California. The band was formed in 1981 by guitarists Kerry King and Jeff Hanneman, drummer Dave Lombardo and bassist/vocalist Tom Araya. Slayer\'s fast and aggressive musical style made them one of the \"big four\" bands of thrash metal, alongside Metallica, Megadeth, and Anthrax. Slayer\'s final lineup comprised Araya, King, drummer Paul Bostaph (who replaced Lombardo in 1992 and again in 2013) and guitarist Gary Holt (who replaced Hanneman in 2011). Drummer Jon Dette was also a member of the band.', '1671112133.jpg', '2022-12-15 13:49:18', '2022-12-15 06:48:53'),
('ITM-00039', 'CAT-00001', 'ART-00025', 'GILDAN', 'BAD BRAINS \"BAD BRAINS BLACK\" T-SHIRT', 'Cotton', 450000, 'BAD BRAINS \"BAD BRAINS BLACK\" T-SHIRT', '1671113845.jpg', '2022-12-15 07:17:25', '2022-12-15 07:17:25'),
('ITM-00040', 'CAT-00001', 'ART-00025', 'GILDAN', 'BAD BRAINS \"BAD BRAINS YELLOW\" T-SHIRT', 'Cotton', 450000, 'BAD BRAINS \"BAD BRAINS YELLOW\" T-SHIRT', '1671114057.jpg', '2022-12-15 07:20:57', '2022-12-15 07:20:57'),
('ITM-00041', 'CAT-00001', 'ART-00021', 'GILDAN', 'BATHORY \"GOAT LADECULT\" T-SHIRT', 'Cotton', 550000, 'BATHORY \"GOAT LADECULT\" T-SHIRT', '1671114411.jpg', '2022-12-15 07:26:51', '2022-12-15 07:26:51'),
('ITM-00042', 'CAT-00001', 'ART-00021', 'GILDAN', 'BATHORY \"UNDER THE SIGN\" T-SHIRT', 'Cotton', 550000, 'BATHORY \"UNDER THE SIGN\" T-SHIRT', '1671114540.jpg', '2022-12-15 07:29:00', '2022-12-15 07:29:00'),
('ITM-00043', 'CAT-00001', 'ART-00008', 'GILDAN', 'AMENRA \"DE DOORN UNSCARED\" T-SHIRT\n\n', 'Cotton', 550000, 'AMENRA \"DE DOORN UNSCARED\" T-SHIRT', '1671114635.jpg', '2022-12-15 14:31:13', '2022-12-15 07:30:35'),
('ITM-00044', 'CAT-00001', 'ART-00019', 'GILDAN', 'SPECTRAL WOUND \"A DIABOLIC THIRST\" T-SHIRT', 'Cotton', 650000, 'SPECTRAL WOUND \"A DIABOLIC THIRST\" T-SHIRT', '1671114888.jpg', '2022-12-15 07:34:48', '2022-12-15 07:34:48'),
('ITM-00045', 'CAT-00001', 'ART-00019', 'GILDAN', 'SPECTRAL WOUND \"SKULL\" T-SHIRT', 'Cotton', 650000, 'SPECTRAL WOUND \"SKULL\" T-SHIRT', '1671115176.jpg', '2022-12-15 07:39:36', '2022-12-15 07:39:36'),
('ITM-00046', 'CAT-00001', 'ART-00019', 'GILDAN', 'SPECTRAL WOUND \"INFERNAL DECADENCE\" T-SHIRT', 'Cotton', 650000, 'SPECTRAL WOUND \"INFERNAL DECADENCE\" T-SHIRT', '1671115251.jpg', '2022-12-15 07:40:51', '2022-12-15 07:40:51'),
('ITM-00047', 'CAT-00002', 'ART-00026', 'GILDAN', 'CONAN \"8 BIT SYNTH FANTASY\" LONGSLEEVE', 'Cotton', 700000, 'CONAN \"8 BIT SYNTH FANTASY\" LONGSLEEVE', '1671116111.jpg', '2022-12-15 07:55:11', '2022-12-15 07:55:11'),
('ITM-00048', 'CAT-00002', 'ART-00038', 'GILDAN', 'DEATH \"SCREAM BLOODY GORE\" LONGSLEEVE', 'Cotton', 750000, 'DEATH \"SCREAM BLOODY GORE\" LONGSLEEVE', '1671116159.jpg', '2022-12-15 07:55:59', '2022-12-15 07:55:59'),
('ITM-00049', 'CAT-00002', 'ART-00042', 'GILDAN', 'INTEGRITY \"SKULL PARDON RITES\" LONGSLEEVE', 'Cotton', 800000, 'INTEGRITY \"SKULL PARDON RITES\" LONGSLEEVE', '1671116380.jpg', '2022-12-15 15:00:11', '2022-12-15 07:59:40'),
('ITM-00050', 'CAT-00002', 'ART-00042', 'GILDAN', 'INTEGRITY / NOTHING \"MASHUP\" LONGSLEEVE', 'Polyster', 800000, 'INTEGRITY / NOTHING \"MASHUP\" LONGSLEEVE', '1671116492.jpg', '2022-12-15 08:01:32', '2022-12-15 08:01:32'),
('ITM-00051', 'CAT-00002', 'ART-00043', 'GILDAN', 'FULL OF HELL \"CRAWLING BACK\" LONGSLEEVE', 'Cotton', 780000, 'FULL OF HELL \"CRAWLING BACK\" LONGSLEEVE', '1671116550.jpg', '2022-12-15 08:02:30', '2022-12-15 08:02:30'),
('ITM-00052', 'CAT-00002', 'ART-00043', 'GILDAN', 'FULL OF HELL \"GARDEN OF BURNING\" LONGSLEEVE', 'Cotton', 790000, 'FULL OF HELL \"GARDEN OF BURNING\" LONGSLEEVE', '1671116620.jpg', '2022-12-15 08:03:40', '2022-12-15 08:03:40'),
('ITM-00053', 'CAT-00002', 'ART-00043', 'GILDAN', 'FULL OF HELL \"RADIANT\" LONGSLEEVE', 'Cotton', 750000, 'FULL OF HELL \"RADIANT\" LONGSLEEVE', '1671116796.jpg', '2022-12-15 15:25:37', '2022-12-15 08:06:36'),
('ITM-00054', 'CAT-00002', 'ART-00037', 'GILDAN', 'KEKHT ARÄKH \"PALE SWORDSMAN\" LONGSLEEVE', 'Cotton', 900000, 'KEKHT ARÄKH \"PALE SWORDSMAN\" LONGSLEEVE', '1671117008.jpg', '2022-12-15 08:10:08', '2022-12-15 08:10:08'),
('ITM-00055', 'CAT-00001', 'ART-00037', 'GILDAN', 'KEKHT ARÄKH \"NIGHT & LOVE BLACK\" T-SHIRT', 'Cotton', 500000, 'KEKHT ARÄKH \"NIGHT & LOVE BLACK\" T-SHIRT', '1671117128.jpg', '2022-12-15 08:12:08', '2022-12-15 08:12:08'),
('ITM-00056', 'CAT-00002', 'ART-00044', 'GILDAN', 'NAILS \"BORN TO FOLLOW\" LONGSLEEVE', 'Cotton', 760000, 'NAILS \"BORN TO FOLLOW\" LONGSLEEVE', '1671117216.jpg', '2022-12-15 08:13:36', '2022-12-15 08:13:36'),
('ITM-00057', 'CAT-00002', 'ART-00044', 'GILDAN', 'NAILS \"YOU WILL NEVER BE ONE OF US\" LONGSLEEVE', 'Cotton', 760000, 'NAILS \"YOU WILL NEVER BE ONE OF US\" LONGSLEEVE', '1671117355.jpg', '2022-12-15 08:15:55', '2022-12-15 08:15:55'),
('ITM-00058', 'CAT-00002', 'ART-00024', 'GILDAN', 'POWER TRIP \"MANIFEST DECIMATION\" LONGSLEEVE', 'Cotton', 750000, 'POWER TRIP \"MANIFEST DECIMATION\" LONGSLEEVE', '1671117493.jpg', '2022-12-15 08:18:13', '2022-12-15 08:18:13'),
('ITM-00059', 'CAT-00003', 'ART-00008', 'GILDAN', 'AMENRA \"CHURCH OF RASAMUS\" HOODIE', 'Cotton', 1500000, 'AMENRA \"CHURCH OF RASAMUS\" HOODIE', '1671117634.jpg', '2022-12-15 15:20:49', '2022-12-15 08:20:34'),
('ITM-00060', 'CAT-00003', 'ART-00030', 'GILDAN', 'AGE OF APOCALYPSE \"GOD HANDS\" HOODIE', 'Cotton', 1200000, 'AGE OF APOCALYPSE \"GOD HANDS\" HOODIE', '1671117752.jpg', '2022-12-15 08:22:32', '2022-12-15 08:22:32'),
('ITM-00061', 'CAT-00003', 'ART-00025', 'NEW STATES APPAREL', 'BAD BRAINS \"BAD BRAINS STATE\" HOODIE', 'Fleece', 1600000, 'BAD BRAINS \"BAD BRAINS STATE\" HOODIE', '1671117885.jpg', '2022-12-15 15:25:25', '2022-12-15 08:24:45'),
('ITM-00062', 'CAT-00003', 'ART-00038', 'GILDAN', 'DEATH \"CLASSIC SATANIC LOGO\" HOODIE', 'Fleece', 1300000, 'DEATH \"CLASSIC LOGO\" HOODIE', '1671118027.jpg', '2022-12-15 15:27:29', '2022-12-15 08:27:07'),
('ITM-00063', 'CAT-00003', 'ART-00042', 'GILDAN', 'INTEGRITY \"BETTER YOU DIE TOMORROW\" HOODIE', 'Fleece', 1400000, 'INTEGRITY \"BETTER YOU DIE TOMORROW\" HOODIE', '1671118124.jpg', '2022-12-15 08:28:44', '2022-12-15 08:28:44'),
('ITM-00064', 'CAT-00005', 'ART-00007', 'GILDAN', 'ABORTED \"GRINDESIGN SLAM IT\" ZIP HOODIE', 'Fleece', 1350000, 'ABORTED \"GRINDESIGN SLAM IT\" ZIP HOODIE', '1671118360.jpg', '2022-12-15 08:32:40', '2022-12-15 08:32:40'),
('ITM-00065', 'CAT-00005', 'ART-00045', 'NEW STATES APPAREL', 'SUNN O))) \"LIFE METAL FOREVER\" ZIP HOODIE', 'Fleece', 1750000, 'SUNN O))) \"LIFE METAL FOREVER\" ZIP HOODIE', '1671118597.jpg', '2022-12-15 08:36:37', '2022-12-15 08:36:37'),
('ITM-00066', 'CAT-00005', 'ART-00045', 'GILDAN', 'SUNN O))) \"TOTAL BACKLINE ASHES\" ZIP HOODIE', 'Cotton', 1750000, 'SUNN O))) \"TOTAL BACKLINE ASHES\" ZIP HOODIE', '1671118708.jpg', '2022-12-15 08:38:28', '2022-12-15 08:38:28'),
('ITM-00067', 'CAT-00005', 'ART-00046', 'GILDAN', 'WOLVES IN THE THRONE ROOM \"ARCANA\" ZIP HOODIE', 'Fleece', 1650000, 'WOLVES IN THE THRONE ROOM \"ARCANA\" ZIP HOODIE', '1671119031.jpg', '2022-12-15 08:43:51', '2022-12-15 08:43:51'),
('ITM-00068', 'CAT-00006', 'ART-00023', 'NEW STATES APPAREL', 'DEAFHEAVEN \"EMBLEM MASTER\" CREWNECK', 'Fleece', 950000, 'DEAFHEAVEN \"EMBLEM MASTER\" CREWNECK', '1671119154.jpg', '2022-12-15 08:45:54', '2022-12-15 08:45:54'),
('ITM-00069', 'CAT-00006', 'ART-00047', 'GILDAN', 'PRIMITIVE MAN \"GRIM REAPER\" CREWNECK', 'Fleece', 850000, 'PRIMITIVE MAN \"GRIM REAPER\" CREWNECK', '1671119282.jpg', '2022-12-15 08:48:02', '2022-12-15 08:48:02'),
('ITM-00070', 'CAT-00006', 'ART-00048', 'NEW STATES APPAREL', 'OF FEATHER AND BONE \"DEMON\" CREWNECK', 'Fleece', 850000, 'OF FEATHER AND BONE \"DEMON\" CREWNECK', '1671119536.jpg', '2022-12-15 08:52:16', '2022-12-15 08:52:16'),
('ITM-00071', 'CAT-00016', 'ART-00049', '-', 'ABBATH \"DREAD TUSK REAVER\" CD', '-', 250000, 'ABBATH \"DREAD TUSK REAVER\" CD', '1671119723.jpg', '2022-12-15 08:55:23', '2022-12-15 08:55:23'),
('ITM-00072', 'CAT-00016', 'ART-00007', '-', 'ABORTED \"GLOBAL FLATLINE\" CD', '-', 250000, 'ABORTED \"GLOBAL FLATLINE\" CD', '1671119896.jpg', '2022-12-15 08:58:16', '2022-12-15 08:58:16'),
('ITM-00073', 'CAT-00016', 'ART-00007', '-', 'ABORTED \"MANIACULT GORE\" CD', '-', 250000, 'ABORTED \"MANIACULT\" CD', '1671119977.jpg', '2022-12-15 08:59:37', '2022-12-15 08:59:37'),
('ITM-00074', 'CAT-00016', 'ART-00050', '-', 'BARONESS \"BLUE WAVES RECORD\" CD', '-', 270000, 'BARONESS \"BLUE WAVES RECORD\" CD', '1671120115.jpg', '2022-12-15 09:01:55', '2022-12-15 09:01:55'),
('ITM-00075', 'CAT-00016', 'ART-00051', '-', 'BAPTISTS \"STUCK BLOODMINES\" CD', '-', 260000, 'BAPTISTS \"STUCK BLOODMINES\" CD', '1671120206.jpg', '2022-12-15 09:03:26', '2022-12-15 09:03:26'),
('ITM-00076', 'CAT-00008', 'ART-00008', '-', 'AMENRA \"CHURCH OF RA\" TOTE BAG', '-', 125000, 'AMENRA \"CHURCH OF RA\" TOTE BAG', '1671120314.jpg', '2022-12-15 09:05:14', '2022-12-15 09:05:14'),
('ITM-00077', 'CAT-00008', 'ART-00027', '-', 'CONVERGE \"JANE DOE\" TOTE BAG', '-', 125000, 'CONVERGE \"JANE DOE\" TOTE BAG', '1671120383.jpg', '2022-12-15 09:06:23', '2022-12-15 09:06:23'),
('ITM-00078', 'CAT-00008', 'ART-00042', '-', 'INTEGRITY \"SKULL\" TOTE BAG', '-', 125000, 'INTEGRITY \"SKULL\" TOTE BAG', '1671120430.jpg', '2022-12-15 09:07:11', '2022-12-15 09:07:11'),
('ITM-00079', 'CAT-00008', 'ART-00045', '-', 'SUNN O))) \"BACKLINE\" TOTE BAG', '-', 125000, 'SUNN O))) \"BACKLINE\" TOTE BAG', '1671120476.jpg', '2022-12-15 09:07:56', '2022-12-15 09:07:56'),
('ITM-00080', 'CAT-00011', 'ART-00043', 'GILDAN', 'FULL OF HELL \"LOGO EMBLEM PATCH\" CAP', 'Polyster', 350000, 'FULL OF HELL \"LOGO EMBLEM PATCH\" CAP', '1671120582.jpg', '2022-12-15 09:09:42', '2022-12-15 09:09:42');

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
-- AUTO_INCREMENT for table `order_produk`
--
ALTER TABLE `order_produk`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
