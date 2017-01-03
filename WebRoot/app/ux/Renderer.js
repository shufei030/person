
/**
 * 这里存放了Grid的列renderer的各种自定义的方法
 */

Ext.onReady(function() {

	// 可以制作一个控件，来修改这二个属性，达到可以修改金额单位的目的
	Ext.monetaryText = '万'; // 加在数字后面的金额单位
	Ext.monetaryUnit = 10000;
	Ext.monetary = null;
	// 金额单位放置的位置 behindnumber or columntitle
	Ext.monetaryPosition = 'behindnumber';
	//调低tab高度
	if(Ext.tab.Panel){
		Ext.override(Ext.tab.Panel,{
			defaults: {
			     tabConfig:{
					textAlign:'left',
					height : 20,
					margin : '0 0 0 0',
					padding: '0 5'
				}
			 }
		});
	}
	// Ext.monetary = '亿';
	// Ext.monetaryUnit = 10000*10000;

	if (Ext.util && Ext.util.Format) {

		Ext.apply(Ext.util.Format, {

			// 金额字段
			monetaryRenderer : function(val, metaData, model, row, col, store,
					gridview) {
				if (val) {
					if (Ext.monetaryUnit && Ext.monetaryUnit != 1)
						val = val / Ext.monetaryUnit;
					// 正数用蓝色显示，负数用红色显示,必须css和返回的值分开来设置，否则不能autoSize()
					//metaData.style = 'color:' + (val > 0 ? 'blue' : 'red') + ';'
					return Ext.util.Format.number(val, '0,000.00') + Ext.monetaryText;
				} else
					return ''; // 如果为0,则不显示
			},

			// 日期
			dateRendererOne : function(val, metaData, model, row, col, store, gridview) {
				if(metaData!=null){
					//metaData.style = 'color:#a40;';
				}
				return Ext.util.Format.date(val, 'Y-m-d');
			},

			// 浮点变量
			floatRenderer : function(val, metaData, model, row, col, store, gridview) {

				//metaData.style = 'color:' + (val > 0 ? 'blue' : 'red') + ';'
				return val == 0 ? '' : Ext.util.Format.number(val, '0,000.######');
			},
			floatRendererOne : function(val, metaData, model, row, col, store, gridview) {
				//metaData.style = 'color:' + (val > 0 ? 'blue' : 'red') + ';'
				return val == 0 ? '' : Ext.util.Format.number(val, '0,000.00');
			},
			// 整型变量
			intRenderer : function(val, metaData, model, row, col, store, gridview) {
				//metaData.style = 'color:' + (val > 0 ? 'blue' : 'red') + ';';
				// ';float:right;'; 这个去掉了，不然行业编辑的时候位置不对
				return val == 0 ? '' : val;
			},

			// 百分比
			percentRenderer : function(v, metaData, model) {
				v = v * 100;
				var v1 = v > 100 ? 100 : v;
				v1 = v1 < 0 ? 0 : v1;
				var v2 = parseInt(v1 * 2.55).toString(16);
				if (v2.length == 1)
					v2 = '0' + v2;
				return Ext.String
						.format(
								'<div>'
										+ '<div style="float:left;border:1px solid #008000;height:15px;width:100%;">'
										+ '<div style="float:left;text-align:center;width:100%;color:blue;">{0}%</div>'
										+ '<div style="background: #FAB2{2};width:{1}%;height:13px;"></div>'
										+ '</div></div>', v, v1, v2);
			},

			// 对模块的namefields字段加粗显示
			nameFieldRenderer : function(val, metaData, model, row, col, store,
					gridview) {
				metaData.style = 'font-weight:bold;';
				return val;
			}
			
		})
	};
	Ext.toastInfo = function(text, config) {
				var param = {
					title : '提示信息',
					html : text,

					border : true,
					// style : {
					// borderColor : '#9b95c9'
					// },
					saveDelay : 10,
					align : 'tr', // "br"/"bl"/"tr"/"tl"/"t"/"l"/"b"/"r"
					closable : true,
					minWidth : 200,
					useXAxis : false,

					slideInDuration : 800,
					slideBackDuration : 1500,
					iconCls : 'ux-notification-icon-smile',
					autoCloseDelay : 4000,
					slideInAnimation : 'elasticIn',
					slideBackAnimation : 'elasticIn'
				};
				//Ext.apply(param, config);
				//Ext.toast(param);
				Ext.Msg.alert('提示',text);
			};

	Ext.toastWarn = function(text, config) {
				var param = {
					title : '警告信息',
					html : text,
					border : true,
					// style : {
					// borderColor : '#9b95c9'
					// },
					// header : {
					// style : 'background-color : yellow;'
					// },
					saveDelay : 10,
					align : 'tr', // "br"/"bl"/"tr"/"tl"/"t"/"l"/"b"/"r"
					closable : true,
					minWidth : 200,
					useXAxis : false,

					slideInDuration : 800,
					slideBackDuration : 1500,
					iconCls : 'ux-notification-icon-warn',
					autoCloseDelay : 4000,
					slideInAnimation : 'elasticIn',
					slideBackAnimation : 'elasticIn'

				};
				//Ext.apply(param, config);
				//Ext.toast(param);
				Ext.Msg.alert('提示',text);
			};

	Ext.toastErrorInfo = function(text, config) {
				var param = {
					title : '错误信息',
					html : text,
					header : {
						border : 1,
						style : {
							borderColor : 'red'
						}
					},
					border : true,
					style : {
						borderColor : 'red'
					},
					saveDelay : 10,
					align : 'tr', // "br"/"bl"/"tr"/"tl"/"t"/"l"/"b"/"r"
					closable : true,
					minWidth : 200,
					useXAxis : false,

					slideInDuration : 800,
					slideBackDuration : 1500,
					iconCls : 'ux-notification-icon-error',
					autoCloseDelay : 5000,
					slideInAnimation : 'elasticIn',
					slideBackAnimation : 'elasticIn'

				};
				//Ext.apply(param, config);
				//Ext.toast(param);
				Ext.Msg.alert('提示',text);
			};
	
	var cm = Ext.ClassManager, 
	exists = Ext.Function.bind(cm.get, cm);
	// 可以自己做汉化处理等
	Ext.override(Ext.panel.Panel,{
			collapseMode:"mini",
			collapseToolText:"隐藏",
			expandToolText:"展开"
	});
	Ext.override(Ext.tree.Panel,{
			collapseMode:"mini",
			collapseToolText:"隐藏",
			expandToolText:"展开"
	});
	if(exists('Ext.util.Format')){
		Ext.util.Format.dateFormat = 'Y年m月d日';
	}
	// 关于日期的修改涉及几个步骤
	// 1. 所有显示的dataFormat都修改为 Y年 即4位长度的年,操作步骤为替换ext-lan-zh_CN.js
	// 2. java服务端默认使用 的日期格式为'yyyy-mm-dd hh:mm:ss',这个由服务端统一处理
	// 3. js客户端数据的默认日期格式与服务端相同 defaultDateFormat:'Y-m-d
	// H:i:s',这个需要修改Ext.data.Field.dateFormat
	// 4. js客户端提交数据的默认日期格式与服务端相同 defaultDateFormat:'Y-m-d H:i:s',这个需要重写
	// Ext.JSON.encodeDate

	// 修改默认日期格式为defaultDateFormat:'Y-m-d H:i:s'
	var defaultDateFormat = 'Y-m-d H:i:s';
	if(Ext.data.Field){
		Ext.apply(Ext.data.Field.prototype, {
			dateFormat: defaultDateFormat
		});
	}
	// The default return format is "yyyy-mm-ddThh:mm:ss".
	// To override this:
	// 重写encodeDate,使得JSON的日期格式符合要求
	Ext.JSON.encodeDate = function(d) {
		return Ext.Date.format(d, '"Y-m-d H:i:s"');
	};
	if(Ext.grid.RowEditor){
		Ext.apply(Ext.grid.RowEditor.prototype, {
			saveBtnText: '保存',
			cancelBtnText: '取消',
			errorsText: '提示信息',
			dirtyText: '已修改,你需要提交或取消变更'
		});
	}
	/*Ext.define(null, {
		override: 'Ext.grid.CellEditor',
		hideEdit: function(remainVisible) {
		        if (remainVisible !== true) {
		            this.editing = false;
		            this.hide();
		        }
		    },
		completeEdit: function(remainVisible) {
			var me = this, field = me.field, value;
			if(!me.editing){
				return;
			}

			// Assert combo values first
			if(field.assertValue){
				field.assertValue();
			}
			*//**
			 * 当field的winOpen属性为true时，将visible属性置为true，这样就不会将
			 *//*
			if(field.winOpen){
				remainVisible = true;
			}
			if(!field.editor){
				field.editor = me;
			}
			value = me.getValue();
			
			 * if (!field.isValid()) { if (me.revertInvalid !== false){
			 * //为了保持所有field的事件不被停止 value = me.getValue();
			 * field.suspendEvents(); field.resumeEvents();
			 * me.hideEdit(remainVisible); field.focus(false, 10); } return; }
			 
			if(!field.isValid()){
				if(me.revertInvalid !== false){
					me.cancelEdit(remainVisible);
				}
				return;
			}

			if(String(value) === String(me.startValue) && me.ignoreNoChange){
//				me.hideEdit(remainVisible);
				return;
			}

			if(me.fireEvent('beforecomplete', me, value, me.startValue) !== false){
				// Grab the value again, may have changed in beforecomplete
				value = me.getValue();
				if(me.updateEl && me.boundEl){
					me.boundEl.update(value);
				}

				if(field.xtype == "testhelp"){
					field.collapse();
				}
				me.hideEdit(remainVisible);
				me.fireEvent('complete', me, value, me.startValue);
			}
			if (!me.editingPlugin.validateEdit(me.context) && !me.context.cancel) {
	            me.editing = true;
	            return false;
	        }
	 
	        me.callParent([remainVisible]);
		},
		onFieldBlur: function(field, e) {
			var me = this;
			me.field.editor = me;
			// !!!!!!!!只有blindBtn被点中时弹出窗口,而不是收回下拉!!!!!!!!!
			if(e){
				var btnDom = e.getTarget();
				
				 * if((btnDom.type=='button' &&
				 * btnDom.itemTagId=="blindBtn")||btnDom.parentElement.type=='button'&&btnDom.parentElement.itemTagId=="blindBtn"){
				 * return; }
				 
				if(btnDom.parentElement.itemTagId == "blindBtn"){
					return;
				}
			}

			// !!!!!!!!只有blindBtn被点中时弹出窗口,而不是收回下拉!!!!!!!!!
			if(me.field.winOpen){
				return;
			}
			var target;

			// selectSameEditor flag allows the same editor to be started
			// without onFieldBlur firing on itself
			if(me.allowBlur === true && me.editing && me.selectSameEditor !== true){
				me.completeEdit();
			}

			// If the target of the event was focusable, prevent reacquisition
			// of focus by editor owner
			if(e && Ext.fly(target = e.getTarget()).focusable()){
				target.focus();
			}
		}
	});*/
	// 对于params和extraparams里面的日期无法作特殊处理，所以需要重写该方法
	// 修改默认日期格式为defaultDateFormat:'Y-m-d H:i:s'
	if(Ext.Object)
		Ext.apply(Ext.Object, {
			toQueryObjects: function(name, value, recursive) {
				var self = Ext.Object.toQueryObjects, objects = [], i, ln;

				if(Ext.isArray(value)){
					for(i = 0, ln = value.length; i < ln; i++){
						if(recursive){
							objects = objects.concat(self(name + '[' + i + ']', value[i], true));
						}else{
							// 这样就能把查询参数里的日期作处理
							if(Ext.isDate(value))
								value = Ext.Date.format(value, defaultDateFormat);
							objects.push({
								name: name,
								value: value[i]
							});
						}
					}
				}else if(Ext.isObject(value)){
					for(i in value){
						if(value.hasOwnProperty(i)){
							if(recursive){
								objects = objects.concat(self(name + '[' + i + ']', value[i], true));
							}else{
								// 这样就能把查询参数里的日期作处理
								if(Ext.isDate(value))
									value = Ext.Date.format(value, defaultDateFormat);
								objects.push({
									name: name,
									value: value[i]
								});
							}
						}
					}
				}else{
					// 这样就能把查询参数里的日期作处理
					if(Ext.isDate(value))
						value = Ext.Date.format(value, defaultDateFormat);
					objects.push({
						name: name,
						value: value
					});
				}
				return objects;
			}
		});

	// 设置自定义密码输入校验
	Ext.apply(Ext.form.field.VTypes, {
		// 两次密码输入校验
		// 需要设置前次密码输入字段id initialPassField:'passId'
		password: function(val, field) {
			if(field.initialPassField){
				var pwd = field.up('form').down('#' + field.initialPassField);
				return (val == pwd.getValue());
			}
			return true;
		},
		passwordText: '两次密码输入不相符!',
		samepassword:function(val,field){
			if(field.oldPassField){
				var pwd = field.up('form').down('#' + field.oldPassField);
				return (val != pwd.getValue());
			}
			return true;
		},
		samepasswordText: '当前输入密码不能同原始密码一致!',
		comboEqZero:function(val,field){
			return val!=0||val=='';
		},
		comboEqZeroText:'请选择对应栏位!'
	});
	
	// 修改CheckColumn的默认事件传递
	// 在beforecheckchange,checkchange事件中增加record参数
	// 因为要在这两个事件中取得当前行的数据太困难了
	if(Ext.grid.column.CheckColumn){
		Ext.override(Ext.grid.column.CheckColumn, {
			processEvent: function(type, view, cell, recordIndex, cellIndex, e, record, row) {
				var me = this, key = type === 'keydown' && e.getKey(), mousedown = type == 'mousedown';
				
				if(!me.disabled && (mousedown || (key == e.ENTER || key == e.SPACE))){
					var dataIndex = me.dataIndex, checked = !record.get(dataIndex);
					
					// Allow apps to hook beforecheckchange
					
		            //！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
					//如果不把record传进去，在事件里面重新取得这个record是比较麻烦的一件事
					//if (me.fireEvent('beforecheckchange', me, recordIndex, checked) !== false) {
		            //    record.set(dataIndex, checked);
		            //    me.fireEvent('checkchange', me, recordIndex, checked);
					if(me.fireEvent('beforecheckchange', me, recordIndex, checked, record) !== false){
						record.set(dataIndex, checked);
						me.fireEvent('checkchange', me, recordIndex, checked, record);
                    //！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
						
						// Mousedown on the now nonexistent cell causes the view
						// to blur, so stop it continuing.
						if(mousedown){
							e.stopEvent();
						}

						// Selection will not proceed after this because of the
						// DOM update caused by the record modification
						// Invoke the SelectionModel unless configured not to do
						// so
						if(!me.stopSelection){
							view.selModel.selectByPosition({
								row: recordIndex,
								column: cellIndex
							});
						}

						// Prevent the view from propagating the event to the
						// selection model - we have done that job.
						return false;
					}else{
						// Prevent the view from propagating the event to the
						// selection model if configured to do so.
						return !me.stopSelection;
					}
				}else{
					return me.callParent(arguments);
				}
			}
		});
	}
	/*
	 * if(Ext.grid.plugin.Editing){
	 * Ext.apply(Ext.grid.plugin.Editing.prototype,{
	 * //这里的rowIdx已经存在了，居然还要getEditingContext再取一遍 startEditByClick:
	 * function(view, cell, colIdx, record, row, rowIdx, e) { //借助record传递一下
	 * record.rowIdx =rowIdx; this.startEdit(record,
	 * view.getHeaderAtIndex(colIdx)); }, getEditingContext: function(record,
	 * columnHeader) { var me = this, grid = me.grid, store = grid.store,
	 * rowIdx, colIdx, view = grid.getView(), value; // If they'd passed numeric
	 * row, column indices, look them up. if (Ext.isNumber(record)) { //暂时改一下
	 * //rowIdx = record; rowIdx = record.rowIdx?record.rowIdx:record;
	 * 
	 * record = store.getAt(rowIdx); } else { //暂时改一下 //rowIdx =
	 * store.indexOf(record); rowIdx =
	 * record.rowIdx?record.rowIdx:store.indexOf(record); } if
	 * (Ext.isNumber(columnHeader)) { colIdx = columnHeader; columnHeader =
	 * grid.headerCt.getHeaderAtIndex(colIdx); } else { colIdx =
	 * columnHeader.getIndex(); }
	 * 
	 * value = record.get(columnHeader.dataIndex); return { grid: grid, record:
	 * record, field: columnHeader.dataIndex, value: value, row:
	 * view.getNode(rowIdx), column: columnHeader, rowIdx: rowIdx, colIdx:
	 * colIdx }; } }); }
	 */
	/*
	 * if(Ext.grid.plugin.CellEditing){
	 * Ext.apply(Ext.grid.plugin.CellEditing.prototype,{ //这个方法有点bug,只能修正一下
	 * startEdit: function(record, columnHeader) { var me = this, value =
	 * record.get(columnHeader.dataIndex), context =
	 * me.getEditingContext(record, columnHeader), ed;
	 * 
	 * record = context.record; columnHeader = context.column; // Complete the
	 * edit now, before getting the editor's target // cell DOM element.
	 * Completing the edit causes a view refresh. me.completeEdit();
	 * 
	 * context.originalValue = context.value = value; if (me.beforeEdit(context)
	 * === false || me.fireEvent('beforeedit', context) === false ||
	 * context.cancel) { return false; } // See if the field is editable for the
	 * requested record if (columnHeader && !columnHeader.getEditor(record)) {
	 * return false; }
	 * 
	 * ed = me.getEditor(record, columnHeader); if (ed) { me.context = context;
	 * me.setActiveEditor(ed); me.setActiveRecord(record);
	 * me.setActiveColumn(columnHeader); // Defer, so we have some time between
	 * view scroll to sync up the editor //me.editTask.delay(15, ed.startEdit,
	 * ed, [me.getCell(record, columnHeader), value]);
	 * //这个值给得不对，应该用最新的value,2012.05.15 mmc me.editTask.delay(15, ed.startEdit,
	 * ed, [me.getCell(record, columnHeader), context.value]); } else { //
	 * BrowserBug: WebKit & IE refuse to focus the element, rather // it will
	 * focus it and then immediately focus the body. This // temporary hack
	 * works for Webkit and IE6. IE7 and 8 are still // broken
	 * me.grid.getView().getEl(columnHeader).focus((Ext.isWebKit || Ext.isIE) ?
	 * 10 : false); } }
	 * 
	 * }); }
	 */

	// 对浏览器行为的一些处理
	// 1.禁用退格键
	// 禁止退格键 作用于Firefox、Opera
	document.onkeypress = banBackSpace;
	// 禁止退格键 作用于IE、Chrome
	document.onkeydown = banBackSpace;

	// 2.禁用鼠标右键
	if(document.layers){
		document.captureEvents(Event.MOUSEDOWN);
	}
	document.onmousedown = mouseclick;
	document.oncontextmenu = new Function("return false;")

	// 3.处理页面关闭
//	window.onbeforeunload = beforePageUnload;
//	window.onunload = pageUnload;




var gy_titile_about = '关于';

// ===========================================增加几个字符串的常用函数
// 判断字符串是否以指定的字符串开始
String.prototype.startWith = function(str) {
	var reg = new RegExp("^" + str);
	return reg.test(this);
};
// 判断字符串是否以指定的字符串结束
String.prototype.endWith = function(str) {
	var reg = new RegExp(str + "$");
	return reg.test(this);
};
// 去左右空白字符
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};
// 去掉字符左端的的空白字符
String.prototype.trimLeft = function() {
	return this.replace(/(^[\\s]*)/g, "");
};
// 去掉字符右端的空白字符
String.prototype.trimRight = function() {
	return this.replace(/([\\s]*$)/g, "");
};
// 返回字符的长度，一个中文算2个
String.prototype.chnLength = function() {
	return this.replace(/[^\x00-\xff]/g, "**").length;
};
String.prototype.replaceAll = function(s1,s2) { 
    return this.replace(new RegExp(s1,"gm"),s2); 
}
// ===========================================增加几个字符串的常用函数

// 处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外
// 参考http://www.2016k.com/skillonpage/javascript/07-62.html
function banBackSpace(e) {
	var ev = e || window.event;// 获取event对象
	var obj = ev.target || ev.srcElement;// 获取事件源
	var t = obj.type || obj.getAttribute('type');// 获取事件源类型
	// 获取作为判断条件的事件类型
	var vReadOnly = obj.readOnly;
	var vDisabled = obj.disabled;

	// alert(ev.keyCode);

	// 处理undefined值情况
	vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
	vDisabled = (vDisabled == undefined) ? true : vDisabled;
	// 当敲Backspace键时，事件源类型为密码或单行、多行文本的，
	// 并且readOnly属性为true或disabled属性为true的，则退格键失效
	var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (vReadOnly == true || vDisabled == true);
	// 当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
	var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea";
	// 判断
	if(flag2 || flag1)
		return false;
};

// 处理鼠标右键,但允许在输入框内的复制粘贴等
function mouseclick(e) {
	e = e || event;
	if(e.button == 2){
		var tag = e.srcElement || e.target;
		if(tag.type == "text" || tag.type == "textarea" || tag.type == "password"){
			document.oncontextmenu = new Function("return true;")
		}else{
			document.oncontextmenu = new Function("return false;")
		}
	}
};
// 页面关闭前，处理页面关闭，当有应用打开时提醒关闭
function beforePageUnload(event) {
	if(tp.Const.mainController){
		var tab_num = tp.Const.mainController.getContentTab().items.getCount();
		if(tab_num > 1){
			var retObj = '您还有' + (tab_num - 1) + '个应用未关闭,可能丢失未保存的数据。';
			return retObj;
		}
	}
};
function pageUnload(e){
    if(tp.Util.leaveMode){
        Ext.Ajax.request({
            url: 'main/Users/doLogout.do',
            async: false,
            params: {
                login_id: tp.Util.currentUser.loginId
            },
            method: 'POST'
        });
    }
};
});
