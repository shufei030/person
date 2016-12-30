/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2016-12-30 16:40:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lol_user_info`
-- ----------------------------
DROP TABLE IF EXISTS `lol_user_info`;
CREATE TABLE `lol_user_info` (
  `user_id` bigint(5) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `login_id` varchar(30) NOT NULL COMMENT '登录ID',
  `pwd` varchar(128) NOT NULL COMMENT '密码',
  `name` varchar(60) DEFAULT NULL COMMENT '姓名',
  `sex` varchar(10) DEFAULT NULL COMMENT '性别',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `tel` varchar(30) DEFAULT NULL COMMENT '联系电话',
  `email` varchar(30) DEFAULT NULL COMMENT '邮箱地址',
  `adress` varchar(100) DEFAULT NULL COMMENT '联系地址',
  `nickname` varchar(30) DEFAULT NULL COMMENT '昵称',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `modify_date` datetime DEFAULT NULL COMMENT '修改日期',
  `last_login` datetime DEFAULT NULL COMMENT '最近登录',
  `is_valid` varchar(5) DEFAULT NULL COMMENT '有效状态',
  `preferred_role` int(5) DEFAULT NULL COMMENT '擅长位置',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `pk_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lol_user_info
-- ----------------------------
