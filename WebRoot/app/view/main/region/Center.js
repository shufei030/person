Ext.define('dm.view.main.region.Center',{
	extend:'Ext.tab.Panel',
	alias:'widget.MainCenter',
	closeAction : 'hide',
	autoDestroy : false,
	tabPosition : 'top',
	plugins : [{
		ptype : 'tabclosemenu',
		closeAllTabsText : '关闭所有',
		closeOthersTabsText : '关闭其他',
		closeTabText : '关闭',
		extraItemsTail : ['-', {
					text : '可关闭',
					itemId : 'canclose',
					checked : true,
					hideOnClick : false,
					handler : function(item) {
						item.ownerCt.tabPanel.tab.setClosable(item.checked);
					}
				}],
		listeners : {
			beforemenu : function(menu, tabPanel) {
				// 此插件有bug,需要加入这个参数
				menu.tabPanel = tabPanel;
				if (tabPanel.tab.reorderable) {
					menu.down('#canclose').setChecked(tabPanel.tab.closable);
					menu.down('#canclose').enable();
				} else {
					menu.down('#canclose').setChecked(false);
					menu.down('#canclose').disable();
				}
			}
		}
	}, Ext.create('Ext.ux.TabReorderer')],
	listeners:{'beforetabchange':'onBeforeTabChange',
		'tabchange':'onAfterTabChange'
	},
	initComponent:function(){

		this.items = [{title: '首页',
	            			glyph : 0xf015}]
		this.callParent()
	}
});