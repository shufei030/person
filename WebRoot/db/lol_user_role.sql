/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2016-12-30 16:40:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lol_user_role`
-- ----------------------------
DROP TABLE IF EXISTS `lol_user_role`;
CREATE TABLE `lol_user_role` (
  `role_id` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(30) DEFAULT NULL COMMENT '角色名称',
  `role_describe` text COMMENT '角色描述',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建者',
  `has_power` varchar(30) DEFAULT NULL COMMENT '是否有修改角色权限',
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `PK_role_id` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lol_user_role
-- ----------------------------
