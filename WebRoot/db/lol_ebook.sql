/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2016-12-30 16:40:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lol_ebook`
-- ----------------------------
DROP TABLE IF EXISTS `lol_ebook`;
CREATE TABLE `lol_ebook` (
  `ebookId` int(4) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '文件编号',
  `lock` int(1) NOT NULL DEFAULT '0' COMMENT '锁定标记',
  `ebookName` varchar(256) DEFAULT '' COMMENT '文件名称',
  `ebookPath` varchar(256) DEFAULT NULL COMMENT '文件路径',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `bzsm` text COMMENT '备注',
  `lbbh` int(20) DEFAULT NULL,
  PRIMARY KEY (`ebookId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lol_ebook
-- ----------------------------

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

-- ----------------------------
-- Table structure for `lol_sys_model`
-- ----------------------------
DROP TABLE IF EXISTS `lol_sys_model`;
CREATE TABLE `lol_sys_model` (
  `id` bigint(3) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '节点',
  `parentid` bigint(20) DEFAULT NULL COMMENT '父节点',
  `mod_type` varchar(20) DEFAULT NULL COMMENT '菜单名称',
  `mod_code` varchar(30) DEFAULT NULL COMMENT '菜单代码',
  `text` varchar(30) DEFAULT NULL COMMENT '菜单名称',
  `textCls` varchar(30) DEFAULT NULL COMMENT '菜单名称样式',
  `expanded` varchar(10) DEFAULT NULL COMMENT '展开',
  `leaf` varchar(10) DEFAULT NULL COMMENT '叶节点',
  `isvalid` varchar(10) DEFAULT NULL COMMENT '有效',
  `urltype` varchar(20) DEFAULT NULL COMMENT '请求类型',
  `iconCls` varchar(120) DEFAULT NULL COMMENT '按钮样式',
  `order_seq` int(11) DEFAULT NULL COMMENT '排序',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `modify_date` datetime DEFAULT NULL COMMENT '修改日期',
  `ctrller` varchar(130) DEFAULT NULL COMMENT '控制器',
  `jsview` varchar(130) DEFAULT NULL COMMENT 'js页面',
  `show_type` varchar(130) DEFAULT NULL COMMENT '显示类型：win或panel',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lol_sys_model
-- ----------------------------
INSERT INTO `lol_sys_model` VALUES ('001', '0', 'APP', '000001', '系统管理', null, 'false', 'false', 'true', 'module', 'icon-cog', '7', '2016-11-04 19:36:13', '2016-11-04 20:36:31', '', '', '');
INSERT INTO `lol_sys_model` VALUES ('002', '0', 'APP', '100000', '采购询源', null, 'false', 'false', 'true', 'module', 'icon-coffee', '1', null, null, null, null, '');
INSERT INTO `lol_sys_model` VALUES ('003', '0', 'APP', '200000', '采购价格管理', null, 'false', 'false', 'true', 'module', 'icon-briefcase', '2', null, null, null, null, '');
INSERT INTO `lol_sys_model` VALUES ('004', '0', 'APP', '300000', '计划理单', null, 'false', 'false', 'true', 'module', 'icon-tasks', '3', null, null, null, null, '');
INSERT INTO `lol_sys_model` VALUES ('005', '0', 'APP', '400000', '采购订单管理', null, 'false', 'false', 'true', 'module', 'icon-leaf', '4', null, null, null, null, '');
INSERT INTO `lol_sys_model` VALUES ('006', '0', 'APP', '500000', '基础数据', null, 'false', 'false', 'true', 'module', 'icon-sitemap', '5', null, null, null, null, '');
INSERT INTO `lol_sys_model` VALUES ('007', '0', 'APP', '600000', '功能建模', null, 'false', 'false', 'true', 'module', 'icon-desktop', '6', null, null, null, null, '');
INSERT INTO `lol_sys_model` VALUES ('008', '1', 'SYS', '000002', '系统菜单', null, 'false', 'true', 'true', 'module', 'icon-cogs', '1', null, null, 'dm.dm.menuSetting.controller.MenuSettingContrl', 'xtype:\'menuSet_Manager\'', 'panel');

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
