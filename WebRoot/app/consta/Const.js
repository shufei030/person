Ext.define('dm.consta.Const',{
	/*常量部分*/
	MAIN_PAGE: 'index.html',
	LOGIN_PAGE: 'login.html',
	MODULE_TABID_PREFIX: 'module_tabid_',//模块类型ID前缀
	
	/*方法部分*/
    callServiceMethod:function(methodUrl, postData, opts){
	var me = this;
	var newObj;
	var InObj={
	   url : methodUrl,
	   params : postData,
	   async : false,
	   method : 'POST',
	   timeout : 3000,
	   callback : function(options, success, resp){
	    newObj = Ext.decode(resp.responseText).data;
	   }
	};
	opts = opts || {};
	Ext.apply(InObj,opts);
	Ext.Ajax.request(InObj);
	return newObj;
	}
},function(){
  dm.Const = dm.consta.Const = new this(); //以后别的页面引用的话，直接用app.Const.XX(常量名或函数名)
})