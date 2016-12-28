Ext.define('dm.util.Util',{

	requires : ['dm.consta.Const'],
	SysEnv:{},
	init : function (callbackFn){
	var me = this;
	
	erp.UInfo.init(function(){
			//3.系统菜单初始化
			me.SysEnv.systemMenu2=Ext.Ajax.request({
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
//				Ext.apply(me.data, applicationInfo);

				Ext.log({
					level : 'log',
					msg : applicationInfo
				});
			}
		});
			
//			erp.Const.callServiceMethodSync('main/Modules.act?method=getModuleListByLoginId',{u_id:1});
			
			me.SysEnv.sayHello=me.SayHello();
			//4. 系统参数初始化
//			erp.DataUtil.DataLoad();
		});
		if(!Ext.isEmpty(callbackFn)
			&&Ext.isFunction(callbackFn)){
	             Ext.callback(callbackFn,me);
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
		
		getFormatText:function(type,v){
			switch(type){
				case dm.Const.SEX_TYPE :
					if(v=='1'){
						return '男';
					}else if(v=='0'){
						return '女';
					}else{
						return '人妖';
					}
				break;
				case dm.Const.YESNO_TYPE :
					if(v=='1'){
						return '有效';
					}else{
						return '无效';
					}
				break;
			}
		}
},function(){
    dm.Util = dm.util.Util= new this();
});