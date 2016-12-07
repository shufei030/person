Ext.define('dm.dm.menuSetting.store.MenuSettingLeftTree',{
	extend: 'Ext.data.TreeStore', 
	requires:['dm.dm.menuSetting.model.MenuSettingLeftTree'],
	model: 'dm.dm.menuSetting.model.MenuSettingLeftTree',
    proxy: {
        type: 'ajax',
        actionMethods:{'read':'post'},
        url : 'menuSetting/menuSetting.act?method=getMenuSettingTreeList',
        reader: {
			type: 'json',
			rootProperty: 'data',
			messageProperty: 'message'
		}
    },
    sorters: [
		{   
			  property: 'parentId',   
			  direction: 'ASC'  
		 },
        {
			property: 'order_seq',
			direction: 'ASC'
		},{
			property: 'text',
			direction: 'ASC'
		}
	],
	root: {
	  	id:0,
	  	text:'菜单清单',
	  	leaf:false,
	  	expanded:true
	}
});