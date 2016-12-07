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
	}
},function(){
    dm.Const = dm.def.Const = new this();
});