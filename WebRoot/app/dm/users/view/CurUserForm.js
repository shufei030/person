Ext.define('dm.dm.users.view.CurUserForm', {
			extend : 'Ext.form.Panel',
			alias : 'widget.userinfo_form',
			frame : false,
//			title : '用户信息维护',
			/*plugins : {
				ptype : 'FormKey'
			},*/
			bodyPadding : 10,
			initComponent : function() {
				var me = this;
				Ext.apply(me, {
							items : [{
										xtype : 'container',
										layout : {
											type : 'hbox',
											align : 'stretch'
										},
										items : [{
													xtype : 'container',
													flex : 2,
													layout : {
														type : 'hbox',
														align : 'stretch'
													},
													defaults : {
														anchor : '95%',
														padding : 3,
														margins : '10 5 0 0',
														labelWidth : 70,
														xtype : 'textfield'
													},
													items : [{
																name : 'login_id',
																fieldLabel : '登录ID',
																itemId : 'login_id',
																allowBlank : false,
																flex : 1,
																blankText : '用户ID不能为空',
																vtype : 'UserName',
																//vtype : String 一个校验类型名，在Ext.form.field.VTypes中定义(默认为null)
																vurl : 'users/usersInfo.act?method=isExistsUser',
																//vtypeText 一个自定义的出错消息，用来替代为当前表单项所设置的vtype所提供的默认消息(默认为'')。 Note:只有设置了 vtype 时才应用此项，否则忽略。
																vtypeText : '用户已存在!',
																disabled : !this.isAddNew
															}, {
																name : 'nickname',
																fieldLabel : '昵称',
																flex : 1,
																itemId : 'nickname',
																blankText : '请输入昵称 '
															}]
												}]
									}, {
				xtype : 'container',
				flex : 2,
				layout : {
					type : 'hbox',
					align : 'stretch'
				},
				defaults : {
					anchor : '95%',
					labelWidth : 90,
					padding:3,
					margins : '10 5 0 0',
					xtype : 'textfield'
				},
				items : [{
							name : 'pwd',
							itemId : 'pwd',
							inputType : 'password',
							fieldLabel : '密码',
							flex : 1,
							disabled : !this.isAddNew,
							hidden : !this.isAddNew
						}, {
							name : 'pwd2',
							itemId : 'pwd2',
							inputType : 'password',
							fieldLabel : '确认密码',
							flex : 1,
							vtype : 'password',
							initialPassField : 'pwd',
							disabled : !this.isAddNew,
							hidden : !this.isAddNew
						}]
					},{
										xtype : 'container',
										flex : 2,
										layout : {
											type : 'hbox',
											align : 'stretch'
										},
										defaults : {
											anchor : '95',
											labelWidth : 70,
											padding : 3,
											margins : '10 5 0 0',
											flex : 1,
											xtype : 'textfield'
										},
										items : [{
													name : 'name',
													itemId : 'name',
													fieldLabel : '姓名',
													allowBlank : false
												}, {
													name : 'sex',
													fieldLabel : '性别',
													itemId : 'sex',
													xtype : 'combobox',
													store : [['1', '男'],
															['0', '女']],
													queryMode : 'local',
													forceSelection : true
												}]
									}, {
										xtype : 'container',
										layout : 'hbox',
										flex : 2,
										defaults : {
											anchor : '95%',
											labelWidth : 70,
											padding : 3,
											margins : '10 5 0 0',
											flex : 1,
											xtype : 'textfield'
										},
										items : [{
													name : 'birthday',
													fieldLabel : '出生日期',
													itemId : 'birthday',
													xtype : 'datefield'
												}, {
													name : 'email',
													fieldLabel : '电子邮箱',
													itemId : 'email',
													vtype : 'email'
												}]
									}, {
										xtype : 'container',
										layout : 'hbox',
										flex : 2,
										defaults : {
											anchor : '95%',
											labelWidth : 70,
											padding : 3,
											margins : '10 5 0 0',
											flex : 1,
											xtype : 'textfield'
										}
									}, {
										xtype : 'container',
										layout : 'hbox',
										flex : 2,
										defaults : {
											anchor : '95%',
											labelWidth : 70,
											padding : 3,
											margins : '10 5 0 0',
											flex : 1,
											xtype : 'textfield'
										},
										items : [{
													xtype : 'datefield',
													name : 'create_date',
													disabled : true,
													fieldLabel : '创建日期',
													format : 'Y-m-d H:i:s'
												}, {
													xtype : 'datefield',
													name : 'modify_date',
													disabled : true,
													fieldLabel : '修改日期',
													format : 'Y-m-d H:i:s'
												}]
									}]
						});
				me.callParent(arguments);
			}
		});