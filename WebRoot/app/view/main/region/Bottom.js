/** 
 * 系统主页的底部区域，主要放置用户单位信息，服务单位和服务人员信息 
 */  
Ext.define('dm.view.main.region.Bottom', {  

	extend:'Ext.panel.Panel',  
	
	alias : 'widget.mainbottom',  
	height:50,
	border:false,
	html: '<div class="s_foot"><p></p></div>'+
   		'</div>'+
    	'<div class="clear"></div>'	
})