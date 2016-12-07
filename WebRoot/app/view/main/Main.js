/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('dm.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'dm.view.main.MainController',
        'dm.view.main.MainModel',
        'dm.view.main.menu.MainMenuToolbar',
        'dm.view.main.region.LeftMenu',
        'dm.view.main.menu.MainMenuTree',
        'dm.view.main.region.Center',
        'Ext.ux.TabCloseMenu'
    ],
    uses: ['dm.view.main.region.Top','dm.view.main.region.Bottom'],
    xtype: 'app-main',
    //MVVM架构的控制器的名称，会在当前路径中根据‘Main’ + Controller 来确定文件名
    controller: 'main',
    //MVVM架构的viewModel的类型，会在当前路径中根据‘Main’ + Model 来确定文件名  
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'  //系统的主页面的布局  
    },

    items: [{
    	xtype : 'maintop',
    	region: 'north'   	
	    },{
		xtype:'mainmenutoolbar',
		region:'north',
		hidden : true,
		bind:{
			hidden:'{!isToolbarMenu}'
		}
    	},{
	    xtype : 'mainbottom',
	    region: 'south'	
	    },{
        xtype:'LeftMenu',
        region: 'west',
        width: 180,
        split:true,
        hidden : true,
        bind:{
        	hidden:'{!isAccordionMenu}'
         }
        }
    ,{
        region: 'center',
        xtype: 'MainCenter'
    }],
    
     initComponent : function() {  
     	//此处设置后才能用glyph图标
	    Ext.setGlyphFontFamily('FontAwesome'); 
	    this.callParent();  
	}
});
