/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('dm.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
//    uses : ['dm.view.module.Module'],  
    alias: 'controller.main',
    onConfirm: function (choice) {
        if (choice === 'yes') {
          this.getView().getViewModel().set('name','供应管理');
        }
    },
    //主界面菜单按钮点击事件
    onMainMenuClick : function(menuitem) {
       var record = Ext.create('dm.dm.menuSetting.model.MenuSettingLeftTree',menuitem.rec);
       this.loadModuleMC(record);
    },
    
    loadModuleMC : function(rec,cbFunc){
    	console.log(rec);
       /*获取主视图dm.view.main.Main*/
       var mainView=dm.Application.getMainView();
       /*获取菜单代码*/
       var modId = rec.get('mod_code');
       if(Ext.isEmpty(modId)){
		    modId = rec.get('id');
       }
       /*设置模块tabPanel的Id*/
       var tabId = this.getModuleTabId(modId);
       /*获取dm.view.main.region.Center*/
	   var maincenter=mainView.down('MainCenter');
	   
	   var tabObj = maincenter.getComponent(tabId);
	   if(tabObj){
			//已经打开过的，无需再次开启
			this.showContentTab(tabObj);
			return;
		}
	   var urlType,modCtrller,modView,modExtraCfg;
		urlType = rec.get('urltype');
		modCtrller = rec.get('ctrller');
		/*raw : Object创建本模型的原始数据，如果本模型是通过reader创建的*/
		if(rec.raw==null){
			modView = rec.get('jsview');
		}else{
			modView = rec.raw.jsview;
		}
		modExtraCfg = rec.get('show_type');
		console.log(modExtraCfg);
			if(urlType=='module'){
		   //需要动态加载的模块
		   //开始支持两种配置方式
			var modObj ={};
			//controller不为空通过ctrller,view,extraCfg三个字段加载
			if(!Ext.isEmpty(modCtrller)){
			   /*设置形如Object {controller: "dm.dm.menuSetting.controller.MenuSettingContrl"}*/
			   modObj["controller"] = modCtrller;
			   /*Object {controller: "dm.dm.menuSetting.controller.MenuSettingContrl", view: Object}*/
			   if(!Ext.isEmpty(modView)){
		    		if(modView.charAt(0)!='{')
		    			modView = '{'+modView+'}';
		    		modObj["view"]= Ext.decode(modView);
	    		}
	    		
	    		if(!Ext.isEmpty(modExtraCfg)){
	    			if(modExtraCfg.charAt(0)!='{'){
	    				modExtraCfg = '{'+modExtraCfg+'}';
	    			}
		    		modObj["extraCfg"]= Ext.decode(modExtraCfg);
	    		}
			}
			
			/*请求错误处理*/
			if(!(modObj.controller&&modObj.view)||!(modObj.view.xtype)){
	    		var tabObj = this.loadPageModule('请求定义有误:'+urlStr
	    				+'<br/>正确的格式为：模块控制器:ctrl_name,模块视图:{xtype:"xtype_name"||classType:"class_type"}，模块参数:{xxx:yyy}',
	    				rec,false,tabId);
	    		if(Ext.isFunction(cbFunc)){
					cbFunc.call(this,tabObj);
				}		
	    		return;
	    	}
	    	
			Ext.getBody().mask('正在加载,请稍候...');
			//异步加载模块相关组件
			Ext.syncRequire(dm.Application.getModuleClassName(modObj.controller));
			Ext.onReady(function(){
				var tabObj = this.loadCtrlModule(modObj,rec,tabId);
				if(Ext.isFunction(cbFunc)){
					cbFunc.call(this,tabObj);
				}
			    Ext.getBody().unmask();
	    	},this);	    	
		}else{
	    	Ext.Msg.alert('提示','模块菜单的[请求类型]有误,无法加载,请检查定义!');
	    }
    },
    loadCtrlModule: function(modObj,rec,tabId){
       var me = this;
       //动态加载controller及模块相关
       var module = null,
       ctrller =dm.Application.getController(modObj.controller);
       var modId = rec.get('mod_id');
       if(Ext.isEmpty(modId)){
            modId = rec.get('id');	
       }
       if(ctrller){
           modObj.extraCfg = modObj.extraCfg||{};
		   modObj.extraCfg.modName=rec.get('text');
		   modObj.runMode = modObj.extraCfg.runMode?modObj.extraCfg.runMode:'tab';
		   //先初始化controller
		   ctrller.init();
		   if(modObj.runMode == 'tab'){
		      //根据运行模式不同处理,加入tab页
			var cfg = {
					itemId:tabId,
					xtype:modObj.view.xtype,
					title:rec.get('text'),
					iconCls:rec.get('iconCls'),
					closable:true,
					modId : modId,
					modName : rec.get('text')
//					modFuncsDisabled:modFunsBack, 	//直接把功能权限控制赋给主控界面
//					extraCfg: modObj.extraCfg       //请求路径中的额外参数，用于自定义初始化view.
				};
				//直接把额外参数作用于cfg上
                Ext.applyIf(cfg, modObj.extraCfg);
                module=me.addContentTab(cfg);
		   }else if(modObj.runMode == 'win'){
		       //根据运行模式不同处理,打开窗口
		   	var cfg = {
                modId : modId,
                modName : rec.get('text')
//                modFuncsDisabled:modFunsBack, //直接把功能权限控制赋给主控界面
//                extraCfg: modObj.extraCfg       //请求路径中的额外参数，用于自定义初始化view.
            };
            Ext.applyIf(cfg, modObj.extraCfg);
			module=Ext.widget(modObj.view.xtype,cfg);
			module.show();
		   }		   
       }
       //根据类名加载 
       else if(!Ext.isEmpty(modObj.view.classType)){
          if(modObj.runMode == 'tab'){
          //根据运行模式不同处理,加入tab页
          module=me.getContentTab().add();	
          var panelObj = Ext.create(dm.Const.application.getModuleClassName(modObj.view.classType,'view'),{
            itemId:tabId,
            title:rec.get('text'),
            iconCls:rec.get('iconCls'),
            closable:true,
            modId : modId,
            modName : rec.get('text'),
//                                    modFuncsDisabled:modFunsBack, //直接把功能权限控制赋给主控界面
            extraCfg: modObj.extraCfg       //请求路径中的额外参数，用于自定义初始化view.
          });	
          Ext.applyIf(panelObj, modObj.extraCfg);
          module=me.addContentTab(panelObj);	         	
          }else if(modObj.runMode == 'win'){
          //根据运行模式不同处理,打开窗口
          var cfg = {
              modId : modId,
              modName : rec.get('text'),
              modFuncsDisabled:modFunsBack, //直接把功能权限控制赋给主控界面
              extraCfg: modObj.extraCfg       //请求路径中的额外参数，用于自定义初始化view.
         };	
         Ext.applyIf(cfg, modObj.extraCfg);
		 module=Ext.create(modObj.view.classType,cfg);
		 module.show();          	
          }
       }
					
    },
    
    /*获取模块tabPanel的Id*/
    getModuleTabId: function(id) {
		var tabId = id+"";
		/*判断tabId是否以module_tabid_开头*/
		if(!Ext.String.startsWith(tabId,'module_tabid_')){
		    tabId =  'module_tabid_' + tabId;
		}
		return tabId;
	},
	loadPageModule: function(urlStr,rec,isUrl,tabId){
	    //动态加载页面类型的模块
		Ext.getBody().mask('正在加载,请稍候...');
		var htmlStr ='';
		if(!Ext.isEmpty(isUrl)&&!isUrl){
			htmlStr='<strong>'+urlStr+'</strong>';
		}
		else{
			//如果是html链接,
			htmlStr='<iframe src= "'+urlStr+'" width="100%" height="100%" marginwidth="0" framespacing="0" marginheight="0" frameborder="0" ></iframe>';	
		}
		var	tabObj = this.addContentTab({
				itemId : tabId,
				title : rec.module_name,
				glyph:parseInt(rec.icon_cls),
				html:htmlStr,
				closable : true,
				reorderable : true
			});
		Ext.getBody().unmask();
		return tabObj;
	},
	showContentTab:function(tabObj){
		if(tabObj){
			this.getContentTab().setActiveTab(tabObj);
    		tabObj.show();
    		if(tabObj.tab){
    			tabObj.tab.show();
    		}
		}
	},
	addContentTab:function(panelObj){
		var me = this;
        var tabObj = me.getContentTab().getComponent(panelObj.itemId);
        if(!tabObj){
                tabObj=me.getContentTab().add(panelObj);
                //me.getContentTab().doLayout();
         }
         Ext.create('Ext.util.DelayedTask',function(){
                me.showContentTab(tabObj);
            }).delay(10);
       	return tabObj;
	},
	getContentTab:function(){
		return dm.Application.getMainView().down('MainCenter');
	},
    // 显示左边菜单区域,隐藏菜单条和顶部的按钮菜单。
    showLeftMenuRegion : function(){
     this.getView().getViewModel().set('menuType.value', 'LeftMenu');
    },
    // 显示左边菜单区域,隐藏菜单条和顶部的按钮菜单。
    showMainMenuToolbar : function(){
     this.getView().getViewModel().set('menuType.value', 'toolbar');
    },
    //刷新左侧菜单区域
    refreshMenuToolbar : function(){
    var mvp = this.getView().down('LeftMenu').down('mainmenuaccordion');
    mvp.removeAll();//从父容器中移除所有子组件.
    mvp.loadTotalModuleTree(mvp);
    },
	//tab切换监听事件
	'onBeforeTabChange' : function( grouptabPanel, newCard, oldCard, eOpts){
	    if(oldCard&&oldCard.isEdit&&!oldCard.isClose){
			return confirm("当前正在编辑界面，是否继续退出?");
		}
	},
	'onAfterTabChange':function(panel,newCard,oldCard){
		if(oldCard&&oldCard.isEdit){
			oldCard.destroy();
		}
	}	
});
