Ext.define('dm.dm.users.model.UserInfo', {
	extend: 'Ext.data.Model',
	idProperty: '',
	fields: [
		{ name: 'user_id', type: 'int' },
		{ name: 'login_id' },
		{ name: 'pwd' },
		{ name: 'name' },
		{ name: 'sex' },
		{ name: 'birthday', type: 'date', dateFormat: 'Y-m-d H:i:s' },
		{ name: 'tel' },
		{ name: 'email' },
		{ name: 'adress' },
		{ name: 'nickname' },
		{ name: 'create_date', type: 'date', dateFormat: 'Y-m-d H:i:s' },
		{ name: 'modify_date', type: 'date', dateFormat: 'Y-m-d H:i:s' },
		{ name: 'is_valid' },
		{ name: 'preferred_role', type: 'int' }
		
	]
});
