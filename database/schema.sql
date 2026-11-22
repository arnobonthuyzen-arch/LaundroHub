-- Laundro-Hub MySQL / MariaDB Setup
-- Database: arno_mobula_Laundro
-- Compatible with MariaDB v12.3.3 (Plesk) & MySQL 8+

CREATE DATABASE IF NOT EXISTS `arno_mobula_Laundro`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `arno_mobula_Laundro`;

CREATE TABLE IF NOT EXISTS `contact_inquiries` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `account_type` VARCHAR(120) NOT NULL,
  `service` VARCHAR(150) NOT NULL,
  `estimated_volume` VARCHAR(150) NOT NULL,
  `message` TEXT DEFAULT NULL,
  `status` ENUM('new', 'contacted', 'quoted', 'archived') NOT NULL DEFAULT 'new',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_contact_inquiries_status` (`status`),
  INDEX `idx_contact_inquiries_created_at` (`created_at`),
  INDEX `idx_contact_inquiries_phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
