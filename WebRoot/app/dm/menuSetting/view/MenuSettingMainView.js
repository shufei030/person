Ext.define('dm.dm.menuSetting.view.MenuSettingMainView',{
	extend:'Ext.panel.Panel',
	alias:'widget.menuSet_Manager',
	requires:['dm.dm.menuSetting.store.MenuSettingCenterStore',
	'dm.dm.menuSetting.store.MenuSettingLeftTree'],
	title:'菜单管理设置',
	layout: 'border',
	initComponent:function(){
		Ext.apply(this,{
			items: [{
		    	//左边菜单菜单树
				title: '功能菜单树',
				region:'west',
		        width: 200,
		        tools:[
			           {type:'refresh',tooltip:'刷新'}
			    ],
//			    iconCls : 'layout_content',
			    xtype:'treepanel',
				border:true,
				useArrows:true,//是否显示小箭头  
			    store :Ext.create('dm.dm.menuSetting.store.MenuSettingLeftTree'),
			    rootVisible : true
		       
		    },{
		    	//右边菜单菜单信息列表
		    	title: '菜单列表',
		    	region: 'center',
		    	tbar:[     
	  		            {text: '新增',	iconCls:'icon-cloud-upload',		itemId:'BTN_ADD'},
	  		            {text: '修改',	iconCls:'icon-edit',	itemId:'BTN_EDT'/*,	disabled:true*/},
	  		            {text: '删除',	iconCls:'icon-share-alt',		itemId:'BTN_DEL'/*,	disabled:true*/}
	        	  ],
//				iconCls : 'application_view',
				xtype:'gridpanel',
				store: Ext.create('dm.dm.menuSetting.store.MenuSettingCenterStore'),
		        columnLines:true,
		        columns:[
					{text:'',xtype:'rownumberer',width:40,sortable:false,align:'center'},
					{text: '节点',dataIndex: 'id',width:50},
					{text: '父节点',dataIndex: 'parentId',width:100},
					{text: '菜单名称',dataIndex: 'text',width:100},
					/*{text: '名称样式',dataIndex: 'textCls',flex:1},*/
					{text: '菜单代码',dataIndex: 'mod_code',width:80},
					{text: '菜单类别',dataIndex: 'mod_type',width:80/*,renderer:function(v){
						return erp.Util.getFormatText(erp.Const.MODULE_TYPE,v);
					}*/},
					{text: '展开',dataIndex: 'expanded',width:60/*,renderer:function(v){
						return erp.Util.getFormatText(erp.Const.YESNO_TYPE,v);
					}*/},
					{text: '叶节点',dataIndex: 'leaf',width:80/*,renderer:function(v){
						return erp.Util.getFormatText(erp.Const.YESNO_TYPE,v);
					}*/},
					{text: '有效',dataIndex: 'isvalid',width:60/*,renderer:function(v){
						return erp.Util.getFormatText(erp.Const.YESNO_TYPE,v);
					}*/},
					{text: '请求类型',dataIndex: 'urltype',width:80/*,renderer:function(v){
						return erp.Util.getFormatText(erp.Const.URL_TYPE,v);
					}*/},
					/*{text: '请求路径',hidden:true,dataIndex: 'url',flex:2},*/
					/*{text: '请求目标',dataIndex: 'urltarget',width:40},
					{text: '节点图标',hidden:true,dataIndex: 'icon',flex:2},
					{text: '图标样式',hidden:true,dataIndex: 'iconCls',flex:2},*/
					/*{text: 'QuickTip',dataIndex: 'qtip',flex: 1},
					{text: 'QuickTitle',dataIndex: 'qtitle',flex: 1},*/
					{text: '排序',dataIndex: 'order_seq',width:60},
					{text: '备     注',hidden:true,dataIndex: 'remark',width:100},
					{text: '创建日期',dataIndex: 'create_date',width:100,renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s')},
					{text: '修改日期',dataIndex: 'modify_date',width:100,renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
		        ]
		    }]
		});
		this.callParent(arguments); 
	}
});