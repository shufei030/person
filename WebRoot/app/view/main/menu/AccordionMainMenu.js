/**
 * 手风琴布局，折叠式(accordion)菜单，样式可以自己用css进行美化*/
Ext.define('dm.view.main.menu.AccordionMainMenu',{
    extend : 'Ext.panel.Panel',
    alias : 'widget.mainmenuaccordion',
    layout : {
     type : 'accordion', //此布局将多个Panel以一种可以展开/收缩的样式排列且任何时候只有一个Panel可以处于展开状态. 每个Panel都会内置对展开/收缩支持
     animate : true //'true' 表示对所含面板进行展开/收缩时, 面板的打开/关闭使用动画效果
    },
    items :[],
    initComponent : function() {
     var me = this;
//   var menus = this.up('app-main').getViewModel().get('systemMenu');//up :沿着 ownerCt 查找匹配简单选择器的祖先容器.
     var menus2 = this.up('app-main').getViewModel().get('SysteMenu2');
     console.log('menus2');
     console.log(menus2);
     for (var i in menus2) {
          var menugroup = menus2[i]; 
          var accpanel = {  
            menuAccordion : true,  
            xtype : 'panel',  
            title : menugroup.text,  
            bodyStyle : {  
                padding : '10px'  
            },  
            layout : 'fit',  
            dockedItems : [{  
                        dock : 'left',  
                        xtype : 'toolbar',  
                        items : []  
                    }],  
//         glyph : menugroup.glyph,
           iconCls : menugroup.iconCls
        };
        
        getSubMenu=function(menus2){
    	for( var j in menus2)
    	{
    		var submenu=menus2[j];
    		if(submenu){
        		var obj={  
                        xtype : 'buttontransparent',  
                        moduleId:submenu.id,
                        text :me.addSpace(submenu.text, 12),  
                        tooltip:submenu.qtip,
                        iconCls : submenu.iconCls, 
//                        glyph : submenu.glyph,  
                        handler : 'onMainMenuClick',
                        rec:submenu
                 };
                 if(submenu.subItem)   
                 	getSubMenu(submenu.subItem);
                 else	
               		accpanel.dockedItems[0].items.push(obj);
    		}
    	}
    },
    getSubMenu(menugroup.subItem);
      this.items.push(accpanel);
     }
    this.callParent(arguments);
    },
    addSpace : function(text, len) {
				var result = text;
				for (var i = text.length; i < len; i++) {
					result += '　';
				}
				return result;
			},
   //导入菜单树		
   loadTotalModuleTree : function(cmp){
   var menus = this.up('app-main').getViewModel().get('systemMenu');
   for (var i in menus) {
    var menugroup = menus[i];
    var accpanel = {
		title : menugroup.text,
		layout : "fit",
		xtype : "panel",
		items : [{
			xtype : "treepanel",
			border : false,
			collapsed : false,
			listeners : {
				itemclick : 'onMainMenuClick'
			},
			store : Ext.create('Ext.data.TreeStore', {
			     root : {
						text : '系统菜单',
						leaf : false,
						expanded : true
					}			
			}),
			rootVisible : false
		}]
	};
   }
   }
});