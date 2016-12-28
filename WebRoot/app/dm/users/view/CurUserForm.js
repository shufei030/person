Ext.define('dm.dm.users.view.CurUserForm',{
    extend:'Ext.form.Panel',
    alias:'widget.curUser_form',
    frame:false,
    title:'用户信息维护',
    plugins : {
		ptype : 'FormKey'
	},
	
	bodyPadding: 10,
    initComponent:function(){
    	var me=this;
    	Ext.apply(me,{
				  items:[
    	     	  {
							           xtype:'container',
							           layout: {
		             				    type: 'hbox',
		             				    align: 'stretch'
		             			   },
								   items:[ 
								   {
								    xtype:'container',
								   	flex: 2,
		             				layout: {
		                 				type: 'hbox',
		                 				align: 'stretch'
		                 			},
		             				defaults: {
		             		            anchor: '95%',
		             		            padding:3,
										margins : '10 5 0 0',
		             		            labelWidth : 70,
		             		            xtype: 'textfield'
		             		        },
								   	  items : [{
														name : 'user_id',
														fieldLabel : '用户ID',
														itemId : 'user_id',
														allowBlank : false,
														flex : 1
													}, {
														name : 'nickname',
														fieldLabel : '昵称',
														flex : 1,
														itemId : 'nickname'
													}]  
								   	    }
								   	    ]
							  			 },
								     {
									     xtype:'container',
									   	flex: 2,
			             				layout: {
			                 				type: 'hbox',
			                 				align: 'stretch'
			                 			},
			             				defaults: {
			             		            anchor: '95',
			             		            labelWidth : 70,
			             		            padding:3,
											margins : '10 5 0 0',
			             		            flex:1,
			             		            xtype: 'textfield'
			             		        },
			             		        items:[{
								        	 name : 'name',
								        	 itemId:'name',
								        	 fieldLabel: '姓名',
								        	 allowBlank:false
								         },
							         {
							        	 name : 'sex',
							        	 fieldLabel: '性别',
							        	 itemId: 'sex',
							        	 xtype:'combobox',
							        	 store:[['1','男'],['0','女']],
							        	 queryMode: 'local',
							        	 forceSelection:true
							         }
							         ]},
								      {
							           xtype:'container',
							           layout:'hbox',
							           flex:2,
							           defaults: {
		             		            anchor: '95%',
		             		            labelWidth: 70,
		             		            padding:3,
										margins : '10 5 0 0',
		             		            flex:1,
		             		            xtype: 'textfield'
		             		           },
							           items:[
							           {
							        	 name : 'birthday',
							        	 fieldLabel: '出生日期',
							        	 itemId: 'birthday',
							        	 xtype:'datefield'
							         },
							         {
							        	 name : 'email',
							        	 fieldLabel: '电子邮箱',
							        	 itemId: 'email',
							        	 vtype:'email'
							         }
			             		        ]
								     },
							         {
							           xtype:'container',
							           layout:'hbox',
							           flex:2,
							           defaults: {
		             		            anchor: '95%',
		             		            labelWidth: 70,
		             		            padding:3,
										margins : '10 5 0 0',
		             		            flex:1,
		             		            xtype: 'textfield'
		             		           }
							         },
							          {
							           xtype:'container',
							           layout:'hbox',
							           flex:2,
							           defaults: {
		             		            anchor: '95%',
		             		            labelWidth: 70,
		             		            padding:3,
										margins : '10 5 0 0',
		             		            flex:1,
		             		            xtype: 'textfield'
		             		           },
							           items:[{
								        	 xtype:'datefield',
								        	 name : 'create_date',
								        	 disabled:true,
								        	 fieldLabel: '创建日期',
								        	 format:'Y-m-d H:i:s'
								         },
								         {
								        	 xtype:'datefield', 
								        	 name : 'modify_date',
								        	 disabled:true,
								        	 fieldLabel: '修改日期',
								        	 format:'Y-m-d H:i:s'
								         }]
								      }
    	      ]
    	});
    	me.callParent(arguments);
    }
});