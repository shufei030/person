Ext.define('dm.view.main.region.Top',{
	extend: 'Ext.container.Container',
	requires: ['dm.ux.ButtonTransparent'],
	alias: 'widget.maintop',
	initComponent :  function(){
	  Ext.apply(this,{
	   layout:{
	    type: 'hbox',
	    align: 'left'
	   },
	   items:[{
	   	    xtype:'image',
			hidden:true,
			width:252,
			height:25,
			src:'resources/images/logo1.jpg'
	   },{
	   	    xtype:'container',
			padding:'5 0 0 10',
			cls:'s_head s_s',
			style:'background:#e8e8e8;',
			bind:{
				html:'{system_info.name}'			
			}
	   },{
	        xtype:'toolbar',
			flex:1,
			height:25,
			style:'background:#e8e8e8;',
			padding:'0 0 0 0',
			defaults:{border:false},
	        items:['->',{
	         xtype:'buttontransparent',
	           text: this.up('app-main').getViewModel().get('SayHello')
	        },'-',{
	         xtype:'buttontransparent',itemId:'btn_help',glyph : 0xf059,
			 bind:{text:'{system_info.btn_help.title}',
			  	tooltip:'{system_info.btn_help.tooltip}'
			  }
	        },'-',{
	         xtype:'buttontransparent',itemId:'btn_logout',glyph : 0xf011,handler:'onTopbarClicked',
			 bind:{
					text:'{system_info.btn_logout.title}',
		  			tooltip:'{system_info.btn_logout.tooltip}'
		  		}
	        },'-',{
	        xtype:'buttontransparent',
			handler : 'doSearch',
			text : 'like',
			tooltip : '类似',
			disableMouseOver : true
	        },{
			xtype:'buttontransparent',
			handler : 'doSearch',
			text : '=',
			tooltip : '等于',
			disableMouseOver : true
			},
			{
			xtype:'buttontransparent',
			handler : 'doSearch',
			text : '＞',
			tooltip : '大于',
			disableMouseOver : true
			},
			{
			xtype:'buttontransparent',
			handler : 'doSearch',
			text : '≥',
			tooltip : '大于或等于',
			disableMouseOver : true
			},
			{
			xtype:'buttontransparent',
			handler : 'doSearch',
			text : '＜',
			tooltip : '小于',
			disableMouseOver : true
			},
			{
			xtype:'buttontransparent',
			handler : 'doSearch',
			text : '≤',
			tooltip : '小于或等于',
			disableMouseOver : true
			},
			{
			xtype:'buttontransparent',
			handler : 'doSearch',
			text : '≠',
			tooltip : '不等于',
			disableMouseOver : true
			},
			{
			xtype:'buttontransparent',
			handler : 'doSearch',
			text : '',
			glyph:0xf112,
			tooltip : '回退一步',
			disableMouseOver : true
			},
			{
			xtype:'buttontransparent',
			handler : 'doSearch',
			text : '',
			glyph:0xf122,
			tooltip : '全部回退',
			disableMouseOver : true
			},
			{
			glyph : 0xf102,
			xtype:'buttontransparent',
			handler : 'hiddenTopBottom',
			tooltip : '隐藏顶部和底部区域',
			disableMouseOver : true
		}]
	   
	   }]
	  });
	  this.callParent();  
	}
//	items: [{
//			xtype:'image',
//			hidden:true,
//			width:252,
//			height:25,
//			src:'resources/images/logo1.jpg'
//	      },/*{
//	        xtype:'image',
//	        bind:{
//	          hidden:'{!system.iconUrl}',
//	          src:'{sysem.iconUrl}'
//	        }
//	       },*/{
//	        xtype:'label',
//	        bind:{
//	          text:'{system.name}'
//	        },
//	        style:'font-size:20px;color:blue'
//	       },{
//	        xtype:'label',
//	        bind:{
//	          text:'{system.version}'
//	        },
//	        style:'font-size:20px;color:red'
//	       },'->','->',{
//	         text:'菜单',
//	         glyph : 0xf0c9, 
//	         menu:[{
//	         	text:'工程管理',
//		        menu:[{
//		          	text:'工程项目'
//	                },{
//	          	    text:'工程标段'
//	                }
//	               ]
//	         }]
//	       },'','',{
//	       text:'主页',
//	       glyph : 0xf015  
//	       },{
//	       text:'帮助',
//	       glyph : 0xf059  
//	       },{
//	       text:'关于',
//	       glyph : 0xf06a  
//	       },{
//	       text:'注销',
//	       glyph : 0xf011  
//	       },{  
//           text : '搜索',  
//            iconCls : 'icon-search' 
//           }, {
//	       text:'设置',
//	       iconCls : 'icon-reorder'  
//	       },'',''
//	       
//	       
//	
//	]
	
	
})