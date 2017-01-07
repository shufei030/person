/**计时器，用于提示框弹出两秒后自动关闭效果*/
var time_c=0;
//登录超时时已提醒弹出登录框标记
var remindLogin_flag=false;
//用于提示框弹出两秒后自动关闭的弹出框对象
var xcconfirm;
var companyId;
var userInfo=getUserInfo1();
/**jquery ajax通用调用
 * url：请求路径
 * params：参数对象{xx：xx}
 * isasync：是否异步；true，异步；false:同步
 * fn:请求成功后的回调函数
 * */
function asyncAjaxMethod(url,params,isAsync,fn){
	var opts={lines: 10, // 花瓣数目
            length: 8, // 花瓣长度
            width: 5, // 花瓣宽度
            radius: 10, // 花瓣距中心半径
            corners: 1, // 花瓣圆滑度 (0-1)
            rotate: 0, // 花瓣旋转角度
            direction: 1, // 花瓣旋转方向 1: 顺时针, -1: 逆时针
            color: '#ccc', // 花瓣颜色
            speed: 1, // 花瓣旋转速度
            trail: 60, // 花瓣旋转时的拖影(百分比)
            shadow: false, // 花瓣是否显示阴影
            hwaccel: false //spinner 是否启用硬件加速及高速旋转  
			, position: 'relative'
			};
	var spinner = new Spinner(opts);
	$.ajax({
		type:"POST",
		async:isAsync,
		url:getWebRoot()+url,
		dataType:'json',
		data:params,
		beforeSend:function(){
			spinner.spin(document.getElementById("spin_wrap"));
		},
		success:function(result){
		   		//关闭loding效果
		   		spinner.spin();
		   		$("body #spin_wrap").remove();
				if(result.success==false){
					//人为抛出异常，但是要求设置success=false
					if(result.ajaxErrorCode==999){
						if(hasRemainLoginPop()){//有弹出过登录框
							remindLogin_flag=true;
						}
						if(!remindLogin_flag){
							window.wxc.xcConfirm("登录超时，请重新登录", window.wxc.xcConfirm.typeEnum.confirm,
							{
								onClose:function(){//超时，则弹出登录框
									window.plugLogin();
								}
							});
						}
			    	}else if(result.ajaxErrorCode==970){
			    		go_redirect("error/noSecurity.htm");
			    	}else if(result.ajaxErrorCode==980){
			    		go_redirect("error/beKick.html");
			    	}else if( result.ajaxErrorCode==300)
			    	{
			    		var option ={title:"提示",btn:parseInt("0001",2)};
		            	window.wxc.xcConfirm(result.message, window.wxc.xcConfirm.typeEnum.custom,option);
			    	}
			    	else
			    	{
			    		//300:请求参数异常
			    		window.wxc.xcConfirm("操作失败,请稍后再试", window.wxc.xcConfirm.typeEnum.error);
			    	}
			    		
				}else{//默认success==true
					if(result.ajaxErrorCode==200){
			    		if(fn!=null && typeof(fn)=="function"){
			    			fn(result);
			    		}
			    	}else{
			    		window.wxc.xcConfirm('抱歉,返回标志错误,请稍后再试或与管理员联系', window.wxc.xcConfirm.typeEnum.error);
			    	}
				}
		   },
		   //异常未捕获时，跳转到这里
		   error: function (XMLHttpRequest, textStatus, errorThrown) {
	            //关闭loding效果
		   		spinner.spin();
		   		$("body #spin_wrap").remove();
		   		if(XMLHttpRequest.status==404){
		   			go_redirect("error/404.html");
		   		}else if(XMLHttpRequest.status==500){
		   			go_redirect("error/500.html");
		   		}else{
		   			window.wxc.xcConfirm('抱歉,程序异常未捕获,请稍后再试或与管理员联系', window.wxc.xcConfirm.typeEnum.error);
		   		}
		   }
	})
}
/**
 * 判断是否有登录超时弹出过登录框
 * hasRemainLoginPop
 * @returns {Boolean} Boolean
 * @author shufei
 * 2016-1-6 下午11:40:22
 */
function hasRemainLoginPop()
{
	var flag=false;
	var txtdiv=$(".txtBox");
	if(txtdiv.length && txtdiv.children()[1].innerHTML=="登录超时，请重新登录"){
		flag=true;
	}
	return flag;
}
//重定向
function go_redirect(url)
{
	window.location.href=getwebroot()+url;
}
/**
 * 增加对象到window.name中
 * 1.重复添加同一属性，此属性之前的值被覆盖
 * 2.属性不同，增加到数据之后
 * addParamsToWindowName
 * @param params 要在window.name中增加的对象
 * @author shufei
 * 2017-1-4 下午7:59:19
 */
function addParamsToWindowName(params){
	var winName = window.name;
	var winNowObject;
	var hasNoCparam;//原属性中有必要的属性 不存在：true； 全部存在：false；
	if(winName == "" || winName == null|| winName == "null"){
		window.name = JSON.stringify(params);//stringify()用于从一个对象解析出字符串
	}else{
		var cparams = {};
		var winOrginObject = JSON.parse(winName);//parse用于从一个字符串中解析出json对象
		for(var i = 0; i < commonParams.length; i++){
			cparams[commonParams[i]] = winOrginObject[commonParams[i]];
		}
		winNowObject = $.extend(cparams,params);
		window.name = JSON.stringify(winNowObject);
	}
}
//=====================全局函数========================
//获取项目路径
function getwebroot(){
	var location = (window.location+'').split('/');
	var basePath = location[0]+'//'+location[2]+'/';
	return basePath;
}