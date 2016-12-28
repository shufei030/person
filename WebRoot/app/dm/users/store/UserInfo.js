Ext.define('dm.dm.users.store.UserInfo', {
	extend: 'Ext.data.Store',
	reqiures: ['dm.dm.users.model.UserInfo'],
	model: 'dm.dm.users.model.UserInfo',
	pageSize: 25,
	proxy: {
		type: 'ajax',
		actionMethods: {create: 'POST', read: 'POST',  destroy: 'POST'},
		api: {
			create: 'users/usersInfo.act?method=addUserInfo',
			update: 'users/usersInfo.act?method=updateUserInfo',
			read: 'users/usersInfo.act?method=getUserInfoList',
			destroy: 'users/usersInfo.act?method=deleteUserInfo'
		},
		reader: {
			type: 'json',
			rootProperty: 'data',
			totalProperty: 'total',
			messageProperty: 'message'
		},
		writer: {
			type: 'json',
			rootProperty: 'data',
			writeAllFields:true,
			encode: true,
			allowSingle: false
		}
	},
	
	sorter: [{
		property: 'user_id',
		direction: 'ASC'
	}]
});
