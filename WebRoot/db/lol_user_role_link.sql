/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2016-12-30 16:40:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lol_user_role_link`
-- ----------------------------
DROP TABLE IF EXISTS `lol_user_role_link`;
CREATE TABLE `lol_user_role_link` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(5) DEFAULT NULL,
  `roler_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lol_user_role_link
-- ----------------------------
