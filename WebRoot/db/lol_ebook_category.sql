/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2016-12-30 16:40:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lol_ebook_category`
-- ----------------------------
DROP TABLE IF EXISTS `lol_ebook_category`;
CREATE TABLE `lol_ebook_category` (
  `lbbh` varchar(20) NOT NULL COMMENT '类别编号',
  `lbmc` varchar(40) DEFAULT NULL COMMENT '类别名称',
  `bzsm` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`lbbh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lol_ebook_category
-- ----------------------------
INSERT INTO `lol_ebook_category` VALUES ('11', '数据库', '数据库文档');
INSERT INTO `lol_ebook_category` VALUES ('1101', 'SQL Server', null);
INSERT INTO `lol_ebook_category` VALUES ('1102', 'MySql', null);
INSERT INTO `lol_ebook_category` VALUES ('1103', 'Oracle', null);
INSERT INTO `lol_ebook_category` VALUES ('12', 'JAVA', 'java文档');
INSERT INTO `lol_ebook_category` VALUES ('1201', 'Spring', null);
INSERT INTO `lol_ebook_category` VALUES ('1202', 'Mybatis', null);
INSERT INTO `lol_ebook_category` VALUES ('13', 'HTML', null);
INSERT INTO `lol_ebook_category` VALUES ('14', 'JavaScript', null);
INSERT INTO `lol_ebook_category` VALUES ('15', 'CSS', null);
INSERT INTO `lol_ebook_category` VALUES ('16', '工具操作手册', null);
