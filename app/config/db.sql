-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               10.4.24-MariaDB - mariadb.org binary distribution
-- Server Betriebssystem:        Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Exportiere Struktur von Tabelle enxvisuals.cached
CREATE TABLE IF NOT EXISTS `cached` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `totalImages` int(11) NOT NULL DEFAULT 0,
  `totalPosts` int(11) NOT NULL DEFAULT 0,
  `totalRequests` int(11) NOT NULL DEFAULT 0,
  `totalUsers` int(11) NOT NULL DEFAULT 0,
  `totalViews` int(11) NOT NULL DEFAULT 0,
  `totalPageClicks` int(11) NOT NULL DEFAULT 0,
  `date` varchar(50) NOT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.cached: ~0 rows (ungefähr)
DELETE FROM `cached`;

-- Exportiere Struktur von Tabelle enxvisuals.images
CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `source` varchar(500) NOT NULL DEFAULT 'default.png',
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.images: ~0 rows (ungefähr)
DELETE FROM `images`;

-- Exportiere Struktur von Tabelle enxvisuals.pages
CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `index` int(11) NOT NULL DEFAULT 0,
  `showAlways` enum('true','false') NOT NULL DEFAULT 'false',
  `hideInHeader` enum('true','false') NOT NULL DEFAULT 'false',
  `mustBeLoggedIn` enum('true','false','both') NOT NULL DEFAULT 'both',
  `isRawPage` enum('true','false') NOT NULL DEFAULT 'false',
  `isActive` enum('true','false') NOT NULL DEFAULT 'true',
  `showPreloader` enum('true','false') NOT NULL DEFAULT 'false',
  `color` varchar(10) NOT NULL DEFAULT '#9899ac',
  `icon` varchar(100) NOT NULL DEFAULT 'circle',
  `name` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `headline` varchar(100) NOT NULL,
  `subline` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `index` (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='0 => ''Menu'',\r\n1 => ''Company'',\r\n2 => ''Trucklm'',\r\n3 => ''Personal''';

-- Exportiere Daten aus Tabelle enxvisuals.pages: ~2 rows (ungefähr)
DELETE FROM `pages`;
INSERT INTO `pages` (`id`, `index`, `showAlways`, `hideInHeader`, `mustBeLoggedIn`, `isRawPage`, `isActive`, `showPreloader`, `color`, `icon`, `name`, `title`, `headline`, `subline`) VALUES
	(1, 1, 'true', 'false', 'both', 'false', 'true', 'false', '#9899ac', 'circle', 'index', 'Home', 'What\'s up?', ''),
	(2, 99, 'false', 'true', 'both', 'false', 'true', 'false', '#9899ac', 'circle', 'error', 'Error', 'Something went wrong', '');

-- Exportiere Struktur von Tabelle enxvisuals.permissions
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `category` varchar(1000) NOT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.permissions: ~0 rows (ungefähr)
DELETE FROM `permissions`;

-- Exportiere Struktur von Tabelle enxvisuals.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `body` varchar(2000) NOT NULL,
  `imageID` int(11) NOT NULL,
  `creatorID` int(11) NOT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `hasDetailSite` enum('true','false') NOT NULL DEFAULT 'false',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.posts: ~0 rows (ungefähr)
DELETE FROM `posts`;

-- Exportiere Struktur von Tabelle enxvisuals.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `body` varchar(2000) NOT NULL,
  `link` varchar(300) NOT NULL,
  `imageID` int(11) NOT NULL,
  `creatorID` int(11) NOT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `hasDetailSite` enum('true','false') NOT NULL DEFAULT 'false',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.projects: ~0 rows (ungefähr)
DELETE FROM `projects`;

-- Exportiere Struktur von Tabelle enxvisuals.quotes
CREATE TABLE IF NOT EXISTS `quotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote` varchar(1000) NOT NULL,
  `author` varchar(100) NOT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.quotes: ~0 rows (ungefähr)
DELETE FROM `quotes`;

-- Exportiere Struktur von Tabelle enxvisuals.remember_tokens
CREATE TABLE IF NOT EXISTS `remember_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `site` varchar(255) NOT NULL,
  `browser` varchar(255) NOT NULL,
  `token` varchar(30) NOT NULL DEFAULT '',
  `valid` enum('true','false') NOT NULL DEFAULT 'true',
  `deleted` enum('true','false') NOT NULL DEFAULT 'false',
  `uses` int(11) NOT NULL DEFAULT 0,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.remember_tokens: ~0 rows (ungefähr)
DELETE FROM `remember_tokens`;

-- Exportiere Struktur von Tabelle enxvisuals.requests
CREATE TABLE IF NOT EXISTS `requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `status` enum('new','seen','accepted','denied','done') NOT NULL DEFAULT 'new',
  `email` varchar(100) NOT NULL,
  `instagram` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `body` varchar(2000) NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.requests: ~0 rows (ungefähr)
DELETE FROM `requests`;

-- Exportiere Struktur von Tabelle enxvisuals.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL DEFAULT '#fff',
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.roles: ~0 rows (ungefähr)
DELETE FROM `roles`;

-- Exportiere Struktur von Tabelle enxvisuals.role_permissions
CREATE TABLE IF NOT EXISTS `role_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleID` int(11) NOT NULL,
  `permissionID` int(11) NOT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.role_permissions: ~0 rows (ungefähr)
DELETE FROM `role_permissions`;

-- Exportiere Struktur von Tabelle enxvisuals.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `avatarID` int(11) NOT NULL,
  `userIP` varchar(200) NOT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.users: ~0 rows (ungefähr)
DELETE FROM `users`;

-- Exportiere Struktur von Tabelle enxvisuals.user_bans
CREATE TABLE IF NOT EXISTS `user_bans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `creatorID` int(11) NOT NULL,
  `userIP` varchar(200) DEFAULT NULL,
  `length` varchar(50) NOT NULL,
  `reason` varchar(1000) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.user_bans: ~0 rows (ungefähr)
DELETE FROM `user_bans`;

-- Exportiere Struktur von Tabelle enxvisuals.user_roles
CREATE TABLE IF NOT EXISTS `user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `roleID` int(11) NOT NULL DEFAULT 1,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.user_roles: ~0 rows (ungefähr)
DELETE FROM `user_roles`;

-- Exportiere Struktur von Tabelle enxvisuals.user_settings
CREATE TABLE IF NOT EXISTS `user_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `auto_scroll_top` enum('true','false') NOT NULL DEFAULT 'true',
  `show_seasonals` enum('true','false') NOT NULL DEFAULT 'true',
  `show_effects` enum('true','false') NOT NULL DEFAULT 'true',
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `userID` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle enxvisuals.user_settings: ~0 rows (ungefähr)
DELETE FROM `user_settings`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
