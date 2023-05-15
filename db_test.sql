-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2023 at 04:05 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `deleted_at`, `created_at`, `updated_at`) VALUES
('04a01c18-c8d4-467e-a095-873dc2241a21', 'Arya Widnyana', 'arya@gmail.com', '$2y$10$36BNa2pUUHNceyX7B1tg.e67kcH8LOJ9H.agexR/6j5PzN/yNcSky', NULL, '2023-05-15 10:15:34', '2023-05-15 10:15:34'),
('294f3275-2e19-4ab9-922c-26c13b531479', 'Hello', 'hello@gmail.com', '$2y$10$Z1rmwU72lT0MJp/bT2fnC.x7tE0Ha0JVCKZBGwo1KXF.MJDW9v9Ga', NULL, '2023-05-15 13:04:07', '2023-05-15 13:04:07'),
('36076146-bfbb-4179-b7ca-c01d45cbd8d5', 'Jodi', 'jodi@gmail.com', '$2y$10$XrRZUBmG0boc7PsL7tkjZeOuRXvDhM7zAlK6SLXCLHRD5cWDIgSq6', NULL, '2023-05-12 03:12:41', '2023-05-14 14:08:41'),
('8505769c-dc0a-4191-9156-0caa3f554d63', 'Surya', 'surya@gmail.com', '$2y$10$5d0zQCBAiULamYz98VftxOg0HaTsL/spG5eeN5ZVg5yi8ONYSvE7q', NULL, '2023-05-14 14:27:33', '2023-05-15 09:59:29'),
('a1615a79-ab6b-47c7-97a1-2ee6d1551c23', 'Paijo', 'paijo@gmail.com', '$2y$10$P10AOjiYumdKx/k5sqDZEOkK8ivxB8ZfqLtjj9gH90NTxS9OmuiZy', NULL, '2023-05-14 14:26:09', '2023-05-14 14:26:09'),
('abe182e3-95da-46d0-9a6a-d5a6f2039e86', 'Zainal', 'zainal@gmail.com', '$2y$10$ebDsdpUiZydrKLg9jnWrRO0.O/XppsS9xnAChLTALk/vj.3kna36i', NULL, '2023-05-13 11:37:21', '2023-05-13 11:37:21'),
('d66b32fc-62fd-43c6-8e62-fb4f779096d3', 'dede arya2', 'dedearya@gmail.com', '$2y$10$tBBLgxQrmKsPs5H4D86H3.HsVDg2AJeeij6z/zfyHlKxH/RcGFa0e', NULL, '2023-05-12 00:40:46', '2023-05-15 09:47:57'),
('dea6c41f-586a-4d29-bfa5-45f0ce10eeb8', 'Bulan', 'bulan@gmail.com', '$2y$10$T.88CnZI4MDyfmWqAuL6Tuo.LT0I2CEyhjsnUxOV7mRAz6eyYrJdW', NULL, '2023-05-15 10:16:08', '2023-05-15 10:16:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
