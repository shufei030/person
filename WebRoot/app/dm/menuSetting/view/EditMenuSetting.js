Ext.define('dm.dm.menuSetting.view.EditMenuSetting', {
    extend: 'Ext.window.Window',
    alias: 'widget.edt_MenuSetting',
    title: '菜单信息维护',
    width: 550,
    //height: 580,
    iconCls: 'menu',
    resizable: false,
    modal: true,
    buttons: [{
        text: '保存',
        iconCls: 'page_save',
        itemId: 'edit_btn_save'
    }, {
        text: '退出',
        iconCls: 'page_error',
        itemId: 'edit_btn_close',
        handler:function(){
        	console.log(this);
        		this.up('window').close();
        }
    }],
    listeners: {
        beforerender: function() {
            var form = this.down('form').getForm();
            form.findField('mod_code').setDisabled(!this.isAddNew);
        },
        show: function() {
            //为了兼容IE浏览器,此处只能延后10ms以后执行才有效
            var me = this;
            Ext.create('Ext.util.DelayedTask', function() {
                var form = me.down('form').getForm();
                form.findField('text').focus(false);
            }).delay(20);
        }
    },
    doInit: function(module) {
        //		 var fromGrid = this.down('#edit_func'); 
        //		 var toStore=fromGrid.getStore();
        		 this.down('form').loadRecord(module);
        //		 toStore.load({params:{mod_id:module.get('id')}});
        //		 var serviceForm=this.down('#edit_ser');
        //		 var seStore=serviceForm.getStore();
        //		 seStore.load({params:{mod_id:module.get('id')}});
    },
    initComponent: function() {
        Ext.apply(this, {
            items: [{
                xtype: 'panel',
                activeTab: 0,
                items: [{
                        //					    	 title:'常规',
                        itemId: 'tab_minfo',
                        xtype: 'form',
                        bodyPadding: 10,
                        frame: false,
                        layout: 'column',
                        //					    	 plugins:{
                        //						          ptype: 'FormKey'
                        //					    	 },
                        defaults: {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            anchor: '95%',
                            labelWidth: 80,
                            labelStyle: 'font-weight:bold',
                            msgTarget: 'qtip',
                            autoFitErrors: true,
                            padding: 5,
                            columnWidth: 0.5
                        },
                        items: [{
                                fieldLabel: '节点',
                                name: 'id',
                                disabled: true
                            }, {
                                fieldLabel: '父节点',
                                name: 'parentId',
                                disabled: true
                            }, {
                                fieldLabel: '展开状态',
                                name: 'expanded',
                                xtype: 'combobox',
                                allowBlank: false,
                                blankText: '展开状态不允许为空!',
                                store: [
                                    ['true', '是'],
                                    ['false', '否']
                                ],
                                queryMode: 'local',
                                //								    displayField: 'name',
                                //								    valueField: 'value',
                                forceSelection: true
                            }, {
                                fieldLabel: '是否叶节点',
                                name: 'leaf',
                                xtype: 'combobox',
                                allowBlank: false,
                                blankText: '叶节点不允许为空!',
                                store: [
                                    ['true', '是'],
                                    ['false', '否']
                                ],
                                queryMode: 'local',
                                //									    displayField: 'name',
                                //									    valueField: 'value',
                                forceSelection: true,
                                listeners: {
                                    change: function(fld, nv, ov) {
                                        //只有请求类型是菜单(URL_TYPE_MODULE)时,才显示菜单相关的三个字段
                                        //否则仅有url
                                        var form = fld.up('form').getForm();
                                        var isLeaf = nv == 'true';
                                        var bText = isLeaf ? '菜单代码不允许为空!' : '';
                                        form.findField('mod_code').allowBlank = !isLeaf;
                                        form.findField('mod_code').setVisible(isLeaf);
                                    }
                                }

                            }, {
                                fieldLabel: '菜单名称',
                                name: 'text',
                                allowBlank: false,
                                blankText: '菜单名称不允许为空!'
                            }, {
                                fieldLabel: '菜单代码',
                                name: 'mod_code',
                                itemId: 'mod_code',
                                allowBlank: false,
                                blankText: '菜单代码不允许为空!',
                                minLength: 5,
                                minLengthText: '除系统登记的菜单外,代码不能少于5位'
                                    //TODO
                                    //										plugins : {
                                    //											ptype : 'RemoteValidator',
                                    //											rvOptions : {
                                    //												url : 'main/ModuleCodeCheck.do?method=isExistsModuleeCode',
                                    //												passIsValid : false, // 已存在反而是校验不通过
                                    //												vTexts : ["该代码定义已存在!", "该代码定义不存在!"]
                                    //											}
                                    //										}
                            }, {
                                fieldLabel: '菜单类别',
                                name: 'mod_type',
                                allowBlank: false,
                                blankText: '菜单类别不允许为空!',
                                xtype: 'combo',
                                store: [
                                    ['SYS', '系统'],
                                    ['APP', '模块']
                                ],
                                queryMode: 'local',
                                //									    displayField: 'name',
                                //									    valueField: 'value',
                                forceSelection: true
                            }, {
                                fieldLabel: '是否有效',
                                name: 'isvalid',
                                xtype: 'combobox',
                                allowBlank: false,
                                blankText: '是否有效不允许为空!',
                                store: [
                                    ['true', '是'],
                                    ['false', '否']
                                ],
                                queryMode: 'local',
                                //									    displayField: 'name',
                                //									    valueField: 'value',
                                forceSelection: true
                            }, {
                                fieldLabel: '菜单控制器',
                                name: 'ctrller',
                                maxLength: 128
                            }, {
                                fieldLabel: '菜单视图',
                                name: 'jsview',
                                maxLength: 128
                            }, {
                                fieldLabel: '菜单参数',
                                name: 'show_type',
                                maxLength: 128
                            }, {
                                fieldLabel: '图标样式',
                                name: 'iconCls'
                            },
                            //									{
                            //								    	fieldLabel : '模块名称',
                            //										name : 'module'
                            //									},
                            /*{
								    	fieldLabel : 'QuickTip',
										name : 'qtip'
									},
								    {
								    	fieldLabel : 'QuckTitle',
										name : 'qtitle'
									},*/
                            {
                                xtype: 'numberfield',
                                fieldLabel: '排序号',
                                name: 'order_seq'
                            }, {
                                xtype: 'datefield',
                                format: 'Y-m-d H:i:s',
                                fieldLabel: '创建日期',
                                name: 'create_date',
                                readOnly: true
                            }, {
                                xtype: 'datefield',
                                format: 'Y-m-d H:i:s',
                                fieldLabel: '修改日期',
                                name: 'modify_date',
                                readOnly: true
                            }
                        ]
                    }
                    //					     ,
                    //					     {
                    //					    	 title:'功能',
                    //					    	 itemId:'tab_mfunc',
                    //					    	 disabled:this.isAddNew,
                    //					    	 items:[
                    //					    	        {
                    //					    	        	xtype:'gridpanel',
                    //					    	        	itemId:'edit_func',
                    //					    	        	height:350,
                    //					    	        		layout : 'fit',
                    //					    	        		store : Ext.create('erp.setup.store.Functions'),
                    //					    	    			plugins : Ext.create('Ext.grid.plugin.CellEditing', {
                    //					    	    				clicksToEdit : 1
                    //					    	    			}),
                    //					    	    			columnLine:true,
                    //					    	    			columns : [ {
                    //					    	    				text : '',
                    //					    	    				xtype : 'rownumberer',
                    //					    	    				width : 40,
                    //					    	    				sortable : false,
                    //					    	    				align : 'center'
                    //					    	    			}, {
                    //					    	    				header : '功能名称',
                    //					    	    				dataIndex : 'name',
                    //					    	    				flex : 1,
                    //					    	    				editor : {
                    //					    	    					allowBlank : false
                    //					    	    				}
                    //					    	    			}, {
                    //					    	    				header : '功能id',
                    //					    	    				dataIndex : 'code',
                    //					    	    				flex : 1,
                    //					    	    				editor : {
                    //					    	    					allowBlank : false
                    //					    	    					
                    //					    	    					}
                    //					    	    			}, {
                    //					    	    				header : '功能类型(1disable;空hidden)',
                    //					    	    				dataIndex : 'type',
                    //					    	    				flex : 1,
                    //					    	    				value:2,
                    //					    	    				editor : {
                    //					    	    					
                    //					    	    					}
                    //					    	    			},{
                    //					    	    				header : '排序号',
                    //					    	    				dataIndex : 'order_seq',
                    //					    	    				
                    //					    	    				editor:{
                    //					    	    					
                    //					    	    					allowBlank : false
                    //					    	    				}	
                    //					    	    			} ],
                    //
                    //					    	    			title : '功能',
                    //					    	    			frame : false,
                    //					    	    			tbar:[
                    //					    	    			      {text:'增加',action:'ACT_ADD',itemId:'funadd',iconCls:"add"},
                    //					    	    			      {text:'删除',action:'ACT_DEL',itemId:'fundel',iconCls:"delete"}
                    //					    	    			      ]
                    //					    	        }
                    //					    	        
                    //					    	        ]

                    //					     },{
                    //					    	 title:'服务',
                    //					    		 itemId:'tab_mserc',
                    //					    		 items:[{
                    //					    			 xtype:'gridpanel',
                    //					    			 itemId:'edit_ser',
                    //					    			 height:350,
                    //					    			 layout : 'fit',
                    //					    			 store : Ext.create('erp.setup.store.HttpServices'),
                    //					    			 plugins : Ext.create('Ext.grid.plugin.CellEditing', {
                    //				    	    				clicksToEdit : 1
                    //				    	    			}),
                    //				    	    			columnLine:true,columns : [ {
                    //				    	    				text : '',
                    //				    	    				xtype : 'rownumberer',
                    //				    	    				width : 40,
                    //				    	    				sortable : false,
                    //				    	    				align : 'center'
                    //				    	    			}, {
                    //				    	    				header : '服务名称',
                    //				    	    				dataIndex : 's_name',
                    //				    	    				flex : 1,
                    //				    	    				editor : {
                    //				    	    					allowBlank : false
                    //				    	    				}
                    //				    	    			}, {
                    //				    	    				header : '调用路径',
                    //				    	    				dataIndex : 's_path',
                    //				    	    				flex : 1,
                    //				    	    				editor : {
                    //				    	    					allowBlank : false
                    //				    	    					}
                    //				    	    			},
                    //				    	    			{
                    //				    	    				header : '调用方法',
                    //				    	    				dataIndex : 'm_name',
                    //				    	    				flex : 1,
                    //				    	    				editor : {
                    //				    	    					allowBlank : false
                    //				    	    					}
                    //				    	    			},
                    //				    	    			{
                    //				    	    				header : '排序号',
                    //				    	    				dataIndex : 'order_seq',
                    //				    	    				editor:{
                    //				    	    					allowBlank : false
                    //				    	    				}	
                    //				    	    			} ],
                    //				    	    			title : '服务',
                    //				    	    			frame:false,
                    //				    	    			tbar:[
                    //				    	    			      {text:'增加',action:'ACT_ADD',itemId:'seradd',iconCls:"add"},
                    //				    	    			      {text:'删除',action:'ACT_DEL',itemId:'serdel',iconCls:"delete"}
                    //				    	    			      ]
                    //					    		 }]
                    //					    	 
                    //					    	 
                    //					     }
                ]
            }]
        });
        this.callParent(arguments);
    }
});