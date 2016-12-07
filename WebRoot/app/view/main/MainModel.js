/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('dm.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires : ['dm.util.Util'],
    alias: 'viewmodel.main',
    
    	constructor : function() {
		Ext.log('MainModel constructor');
		
		// 这个是暂时用的，extjs4 里面有好多的 app.modules 的引用，这里先赋值给它
//		app.modules = this;

		var me = this;
		
		// 这一句是关键，如果没有的话，this还没有初始化完成,下面的Ext.apply(me.data,....)这句就会出错
		this.callParent(arguments);
		me.SysEnv = {};
		
//		Ext.apply(me.data,{sayHello});
		// 同步调用取得系统参数
		Ext.log('get application info data');
//		console.log(erp.Util.SysEnv);
//		Ext.apply(me.data,erp.Util.SysEnv);
		Ext.Ajax.request({
			url : 'main/Modules.act?method=getModuleListByLoginId',
			async : false, // 同步
			method: 'POST',
			success : function(response) {
				var text = response.responseText;
				// 将字段串转换成本地变量
				var applicationInfo = Ext.decode(text, true);
				console.log(applicationInfo);
				// 把从后台传过来的参数加入到data中去
//				applicationInfo.tf_previewExts = applicationInfo.tf_previewExts
//						.split(',');
				me.SysEnv.SysteMenu2 = Ext.decode(text, true).data;
				me.SysEnv.SayHello = me.SayHello();
				console.log(me.SysEnv);
				Ext.apply(me.data, me.SysEnv);

				Ext.log({
					level : 'log',
					msg : applicationInfo
				});
			}
		});
		
	},
    data: {
    	menuType : {
					value : 'LeftMenu'
				}, // 菜单的位置，'button' , 'LeftMenu' , 'tree'
    	    // 系统菜单的定义，这个菜单可以是从后台通过ajax传过来的  
    systemMenu : [{  
                text : '采购寻源', // 菜单项的名称  
                icon : '', // 菜单顶的图标地址  
                glyph : 0,// 菜单项的图标字体的数值  
                expanded : true, // 在树形菜单中是否展开  
                description : '', // 菜单项的描述  
                items : [{  
                    text : '厂商档案', // 菜单条的名称  
                    module : 'Global', // 对应模块的名称  
                    icon : '', // 菜单条的图标地址  
                    glyph : 0xf0f7  
                        // 菜单条的图标字体  
                    }, {  
                    text : '准入评估',  
                    module : 'Project',  
                    icon : '',  
                    glyph : 0xf02e  
                }]  
      
              }, {  
                text : '采购价格管理',  
                expanded : true,  
                items : [{  
                            text : '厂商报价单管理',  
                            module : 'Agreement',  
                            glyph : 0xf02d  
                        }, {  
                            text : '材料采购价格管理',  
                            module : 'AgreementPlan',  
                            glyph : 0xf03a  
                        }, {  
                            text : '询价单管理',  
                            module : 'Payment',  
                            glyph : 0xf022  
                        }, {  
                            text : '供应商报价',  
                            module : 'Payout',  
                            glyph : 0xf0d6  
                        }, {  
                            text : '合同发票',  
                            module : 'Invoice',  
                            glyph : 0xf0a0  
                        }]  
            }, {  
                text : '采购订单管理',  
                glyph : 0xf0ce,  
                expanded : true,  
                items : [{  
                            text : '采购合同管理',  
                            module : 'Agreement',  
                            glyph : 0xf02d  
                        }, {  
                            text : '采购合同追债',  
                            module : 'AgreementPlan',  
                            glyph : 0xf03a  
                        }, {  
                            text : '采购价格调整单管理',  
                            module : 'Payment',  
                            glyph : 0xf022  
                        }, {  
                            text : '待处理材料汇总',  
                            module : 'Payout',  
                            glyph : 0xf0d6  
                        }, {  
                            text : '合同发票台帐',  
                            module : 'Invoice',  
                            glyph : 0xf0a0  
                        }]  
      
            },{  
                text : '材料管理',  
                glyph : 0xf0ce,  
                expanded : true,  
                items : [{  
                            text : '到货登记管理',  
                            module : 'Agreement',  
                            glyph : 0xf02d  
                        }, {  
                            text : '材料入库自检判定',  
                            module : 'AgreementPlan',  
                            glyph : 0xf03a  
                        }, {  
                            text : '材料入库单管理',  
                            module : 'Payment',  
                            glyph : 0xf022  
                        }]  
      
            },{  
                text : '基础数据',  
                glyph : 0xf0ce,  
                expanded : true,  
                items : [{  
                            text : '采购类别维护',  
                            module : 'Agreement',  
                            glyph : 0xf02d  
                        }, {  
                            text : '采购组维护',  
                            module : 'AgreementPlan',  
                            glyph : 0xf03a  
                        }, {  
                            text : '厂商类别维护',  
                            module : 'Payment',  
                            glyph : 0xf022  
                        }]  
      
            },{  
                text : '系统管理',  
                glyph : 0xf0ce,  
                expanded : true,  
                items : [{  
                            text : '系统菜单',  
                            module : 'Agreement',  
                            glyph : 0xf02d  
                        }, {  
                            text : '用户管理',  
                            module : 'AgreementPlan',  
                            glyph : 0xf03a  
                        }, {  
                            text : '修改密码',  
                            module : 'Payment',  
                            glyph : 0xf022  
                        }]  
      
            }  
      
    ],  
        name: 'app',
        // 系统信息   
        system_info:{
            name:'<font color = "#333333">供应商管理系统</font>',
            btn_account:{
    			title:'账户管理',
    			tooltip:''
    		},
    		btn_help:{
    			title:'帮助',
    			tooltip:''
    		},
    		btn_logout:{
    			title:'注销',
    			tooltip:''
    		}
        },
        system:{
        	name: '供应商管理系统',
        	version : '5.2014.06.60',  
            iconUrl : ''  
        },
         // 用户单位信息和用户信息  
         user : {  
            company : '浙江泰普森（控股）集团',  
            department : '软件开发部',  
            name : 'admin'  
        },
           // 服务单位和服务人员信息  
        service : {  
            company : '浙江泰普森（控股）集团',  
            name : 'admin',  
            phonenumber : '1320528----',  
            email : 'jfok1972@qq.com',  
            copyright : '浙ICP备09032301号-1'  
        }  
    },
    SayHello: function () {
			    var hour = new Date().getHours(),
			     hello = '';
			    if (hour < 6) {
			        hello = '凌晨好';
			    } else if (hour < 9) {
			        hello = '早上好';
			    } else if (hour < 12) {
			        hello = '上午好';
			    } else if (hour < 14) {
			        hello = '中午好';
			    } else if (hour < 17) {
			        hello = '下午好';
			    } else if (hour < 19) {
			        hello = '傍晚好';
			    } else if (hour < 22) {
			        hello = '晚上好';
			    } else {
			        hello = '夜里好';
			    }
			    return hello + ' ! ';
		},
    // 根据data.systemMenu生成菜单条和菜单按钮下面使用的菜单数据  
    getMenus : function() {  
        var items = [];  
        var menuData = this.get('systemMenu'); // 取得定义好的菜单数据  
        Ext.Array.each(menuData, function(group) { // 遍历菜单项的数组  
                    var submenu = [];  
                    // 对每一个菜单项，遍历菜单条的数组  
                    Ext.Array.each(group.items, function(menuitem) {  

                                submenu.push({  
                                            mainmenu : 'true',  
                                            moduleName : menuitem.module,  
                                            text : menuitem.text,  
                                            icon : menuitem.icon,  
                                            glyph : menuitem.glyph,  
                                            handler : 'onMainMenuClick' // MainController中的事件处理程序  
                                        })  
                            })  
                    var item = {  
                        text : group.text,  
                        menu : submenu,  
                        icon : group.icon,  
                        glyph : group.glyph  
                    };  
                    items.push(item);  
                })  
        return items;  
    },
    //formulas 函数定义了一个对象，该对象定义的值是由函数调用管理的。对该对象的属性名称指定为在ViewModel值
    formulas : {
    	
     isToolbarMenu : function(get) {
      return get('menuType.value') == 'toolbar';
     },
     
     isAccordionMenu : function(get){
      return get('menuType.value') == 'LeftMenu';
     }
    
    }

    //TODO - add data, formulas and/or methods to support your view
});