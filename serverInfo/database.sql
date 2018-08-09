/*
SQLyog Ultimate v11.11 (32 bit)
MySQL - 5.5.5-10.1.21-MariaDB : Database - digital-mining-corp-au
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`digital-mining-corp-au` /*!40100 DEFAULT CHARACTER SET latin1 */;

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_lname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_dob` date NOT NULL,
  `user_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_postcode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_unique` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_pincode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_forget` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `userinfo` */

insert  into `userinfo`(`user_id`,`user_fname`,`user_lname`,`user_email`,`user_dob`,`user_address`,`user_city`,`user_state`,`user_country`,`user_postcode`,`user_unique`,`user_password`,`user_pincode`,`user_forget`) values (1,'VeeR','Hunter','veerhunter127@gmail.com','2018-08-08','9 AIRLINE ROAD CARGO AGENTS BUILDING D SINGAPORE 819827','Sydney','New South Wales','Australia','123456','unique1','bdc87b9c894da5168059e00ebffb9077','1234','935070');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
