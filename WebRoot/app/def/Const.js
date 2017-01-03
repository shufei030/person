Ext.define('dm.def.Const',{
    MAIN_PAGE: 'index.html',
	LOGIN_PAGE: 'login.html',
	FIELDTITLE:'fieldtitle',
	FILENAME:'filename',
	NOFILTER:".html,.jsp,.htm,getNeedVCode.action,getVerifyCode.action",
	companyId:9999,//平台供应商id
	SUPER_ROLE: "admins", // 超级角色
	SUPER_USER: "admin", // 超级用户
	AJAX_ERR_CODE: 'ajaxErrorCode',
	AJAX_SERVICE_MESSAGE: 'message',
	AJAX_SERVICE_TOTAL: 'total',
	AJAX_SERVICE_FILENAME: 'filename',
	AJAX_DATA_ROOT: 'data',
	APP_SYS:'APP_SYS_NAME',
	HTTP_STATUS_200_OK: 200,
	AJAX_ERR_CODE_200_OK: 200,
	AJAX_ERR_CODE_300_ERROR: 300,
	AJAX_ERR_CODE_999_SessionTimeOut: 999,
	// 数据库类型等
	DB_TYPE: 'DB_TYPE',
	DB_TYPE_MYSQL: 'MYSQL', // MySQL
	DB_TYPE_ORACLE: 'ORACLE', // Oracle
	DB_TYPE_MSSQLSERVER: 'MSSQLSERVER',// SQLServer
	FIELD_DATATYPE: 'FIELD_DATATYPE', // 字段的数据类型
	USE_EXCEL:'useExcel',		//导出Excel标记
	USE_UPLOAD:'useUpload',		//导入新增标记
	// 性别类型
	SEX_TYPE: 'SEX_TYPE',
	SEX_TYPE_MALE: 'M',
	SEX_TYPE_FAMALE: 'F',
	SEX_TYPE_BOTH: 'B',
	// 公司状态
	COMPANY_STS:'COMPANY_STS',
	COMPANY_STS_ENABLE:'true',
	COMPANY_STS_DISABLED:'false',
	//组织订制
	ORGUNIT_STS:'ORGUNIT_STS',
	//组织机构类型
	OU_TYPE:'OU_TYPE',
	OU_TYPE_DEPT:'DEPT',	//部门
	OU_TYPE_ORG:'ORG',		//单位
	
	OU_STS:'OU_STS',
	OU_STS_NEW:'NEW',		//编制中
	OU_STS_AVALID:'AVALID',	//生效
	OU_STS_HIST:'HISTORY',	//封存
	
	OPT_TYPE_ADD:'opt_add',
	OPT_TYPE_EXPORT:'opt_export',
	OPT_TYPE_PRINT:'opt_print',
	
	OFFICE_LOC:'OFFICE_LOC',	//办公地点
	OFFICE_LOC_HZ:'HZ',		//杭州
	OFFICE_LOC_DQ:'DQ',		//德清
	
	POSITION_TYPE:'POSITION_TYPE', //岗位类别
	POSITION_LVL:'POSITION_LVL',	//岗位等级
	DUTY_TYPE:'DUTY_TYPE', //职务类别
	
	URL_TYPE: 'URL_TYPE',
	URL_TYPE_PAGE: 'page',
	URL_TYPE_MODULE: 'module',
	
	mainController: null, // 主界面的controller
	// 模块运行方式
	MODULE_RUN_MODE_TAB: 'tab',
	MODULE_RUN_MODE_WINDOW: 'win',
	MODULE_TABID_PREFIX: 'module_tabid_',
	MODULE_TYPE: 'MODULE_TYPE',
	MODULE_FUNCS: 'MODULE_FUNCS',
	MODULE_TYPE_SYS: 'SYS',
	MODULE_TYPE_APP: 'APP',
	MODULE_TYPE_SEP: 'SEP',
	MODULE_TYPE_OTHER: 'OTHER',
	MODULE_TYPE_FORM: 'FORM',
	
	FUNC_ITEMID_BTN_ADD: 'BTN_ADD',
	FUNC_ITEMID_BTN_EDT: 'BTN_EDT',
	FUNC_ITEMID_BTN_DEL: 'BTN_DEL',
	FUNC_ITEMID_BTN_RESET:'BTN_RESET',
	FUNC_ITEMID_BTN_STOP:'BTN_STOP',
	FUNC_ITEMID_BTN_AVALID:'BTN_AVALID',
	FUNC_ITEMID_BTN_DISABLED:'BTN_DISABLED',
	FUNC_ITEMID_BTN_REFRESH: 'BTN_REFRESH',
	FUNC_ITEMID_BTN_ACC: 'BTN_ACCEPT',				//审核
	FUNC_ITEMID_BTN_DISACC: 'BTN_DISACCEPT',
	FUNC_ITEMID_BTN_PRINT: 'BTN_PRINT',				//打印
	TYPE_ATTRIB_CBX: 'CBX',
	TYPE_ATTRIB_SYS: 'SYS',
	TYPE_ATTRIB_APP: 'APP',
	YESNO_TYPE: 'YESNO_TYPE',
	YESNO_TYPE_YES: 'true',
	YESNO_TYPE_NO: 'false',
	
	RELATIONSHIP:'RELATIONSHIP',	//社会关系
	MARY_STATUS:'MARY_STATUS',
	POLITICAL_STATUC:'POLITICAL_STATUC',
	ACCOUNT_TYPE:'ACCOUNT_TYPE',
	ENGLISH_type:'ENGLISH_type',
	EDU_STATUS:'EDU_STATUS',
	EMPLOYEE_STATUS:'EMPLOYEE_STATUS',
	CONTRACT_CATEGORY:'CONTRACT_CATEGORY',
	CONTRACT_STATUS:'CONTRACT_STATUS',
	EMPLOYEE_STS:'EMPLOYEE_STS',	//员工状态
	SS_STS:'SS_STS',	//社保状态
	CRF_STS:'CRF_STS',	//公积金状态
	DOC_STS:'DOC_STS',	//档案状态
	NATION:'NATION',	//档案状态
	PERFORMENCE_TYPE:'PERFORMENCE_TYPE',	//考核类型
	PERFORMENCE_TYPE_Y:'YEAR',	//年度
	PERFORMENCE_TYPE_M:'MONTH',	//年度
	REWARDS_TYPE:'REWARDS_TYPE',	//奖惩类型
	
	//业务类型
	BIZ_TYPE:'BIZ_TYPE',				//业务类型
	BIZ_TYPE_SINGLE:'BIZ_TYPE_SINGLE',	//单SQL报表
	BIZ_TYPE_MUTLI:'BIZ_TYPE_MUTLI',	//多SQL报表
	BIZ_TYPE_STATS:'BIZ_TYPE_STATS',	//数据统计
	BIZ_TYPE_IDX:'BIZ_TYPE_IDX',		//指标引擎
	BIZ_TYPE_FRM:'BIZ_TYPE_FRM',		//单表报表引擎
	BIZ_TYPE_TRANS:'BIZ_TYPE_TRANS',		//穿透式报表
	callServiceMethodSync: function(methodUrl, postData, opts) {
		var me = this;
		var retObj;
		var reqOptions = {
			url: methodUrl,
			async: false,
			params: postData,
			method: 'POST',
			callback: function(options, success, resp) {
				retObj = Ext.decode(resp.responseText).data;
			}
		};
		opts = opts || {};
		Ext.apply(reqOptions, opts);
		Ext.Ajax.request(reqOptions);
		return retObj;
	},MD5: function(inputText) {
		var hexcase = 0;
		var b64pad = '';
		var chrsz = 8;
		function hex_md5(s) {
			return binl2hex(core_md5(str2binl(s), s.length * chrsz));
		}
		function b64_md5(s) {
			return binl2b64(core_md5(str2binl(s), s.length * chrsz));
		}
		function hex_hmac_md5(key, data) {
			return binl2hex(core_hmac_md5(key, data));
		}
		function b64_hmac_md5(key, data) {
			return binl2b64(core_hmac_md5(key, data));
		}
		function calcMD5(s) {
			return binl2hex(core_md5(str2binl(s), s.length * chrsz));
		}

		function md5_vm_test() {
			return hex_md5('abc') == '900150983cd24fb0d6963f7d28e17f72';
		}

		function core_md5(x, len) {

			x[len >> 5] |= 0x80 << ((len) % 32);
			x[(((len + 64) >>> 9) << 4) + 14] = len;
			var a = 1732584193;
			var b = -271733879;
			var c = -1732584194;
			var d = 271733878;
			for( var i = 0; i < x.length; i += 16){
				var olda = a;
				var oldb = b;
				var oldc = c;
				var oldd = d;

				a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
				d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
				c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
				b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
				a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
				d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
				c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
				b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
				a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
				d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
				c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
				b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
				a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
				d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
				c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
				b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
				a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
				d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
				c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
				b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
				a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
				d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
				c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
				b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
				a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
				d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
				c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
				b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
				a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
				d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
				c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
				b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
				a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
				d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
				c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
				b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
				a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
				d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
				c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
				b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
				a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
				d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
				c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
				b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
				a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
				d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
				c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
				b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
				a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
				d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
				c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
				b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
				a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
				d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
				c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
				b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
				a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
				d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
				c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
				b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
				a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
				d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
				c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
				b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

				a = safe_add(a, olda);
				b = safe_add(b, oldb);
				c = safe_add(c, oldc);
				d = safe_add(d, oldd);
			}
			return Array(a, b, c, d);

		}

		function md5_cmn(q, a, b, x, s, t) {
			return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
		}
		function md5_ff(a, b, c, d, x, s, t) {
			return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
		}
		function md5_gg(a, b, c, d, x, s, t) {
			return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
		}
		function md5_hh(a, b, c, d, x, s, t) {
			return md5_cmn(b ^ c ^ d, a, b, x, s, t);
		}
		function md5_ii(a, b, c, d, x, s, t) {
			return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
		}

		function core_hmac_md5(key, data) {
			var bkey = str2binl(key);
			if(bkey.length > 16)
				bkey = core_md5(bkey, key.length * chrsz);

			var ipad = Array(16), opad = Array(16);
			for( var i = 0; i < 16; i++){
				ipad[i] = bkey[i] ^ 0x36363636;
				opad[i] = bkey[i] ^ 0x5C5C5C5C;
			}

			var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
			return core_md5(opad.concat(hash), 512 + 128);
		}

		function safe_add(x, y) {
			var lsw = (x & 0xFFFF) + (y & 0xFFFF);
			var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
			return (msw << 16) | (lsw & 0xFFFF);
		}

		function bit_rol(num, cnt) {
			return (num << cnt) | (num >>> (32 - cnt));
		}

		function str2binl(str) {
			var bin = Array();
			var mask = (1 << chrsz) - 1;
			for( var i = 0; i < str.length * chrsz; i += chrsz)
				bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
			return bin;
		}

		function binl2hex(binarray) {
			var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
			var str = '';
			for( var i = 0; i < binarray.length * 4; i++){
				str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
			}
			return str;
		}

		function binl2b64(binarray) {
			var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
			var str = '';
			for( var i = 0; i < binarray.length * 4; i += 3){
				var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
						| ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
				for( var j = 0; j < 4; j++){
					if(i * 8 + j * 6 > binarray.length * 32)
						str += b64pad;
					else
						str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
				}
			}
			return str;
		}
		return hex_md5(inputText);
	}
},function(){
    dm.Const = dm.def.Const = new this();
});