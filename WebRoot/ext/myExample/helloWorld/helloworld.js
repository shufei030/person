Ext.tip.QuickTipManager.init();

Ext.create('Ext.data.Store', {
    storeId:'employeeStore',
    fields:['firstname', 'lastname', 'seniority', 'dep', 'hired'],
    data:[
        {firstname:"Michael", lastname:"Scott"},
        {firstname:"Dwight", lastname:"Schrute"},
        {firstname:"Jim", lastname:"Halpert"},
        {firstname:"Kevin", lastname:"Malone"},
        {firstname:"Angela", lastname:"Martin"}
    ]
});

Ext.create('Ext.grid.Panel', {
    title: 'Action Column Demo',
    store: Ext.data.StoreManager.lookup('employeeStore'),
    columns: [
        {text: 'First Name',  dataIndex:'firstname'},
        {text: 'Last Name',  dataIndex:'lastname'},
        {
            xtype:'actioncolumn',
            width:50,
            items: [{
                icon: 'extjs-build/examples/shared/icons/fam/cog_edit.png',  // Use a URL in the icon config
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Edit " + rec.get('firstname'));
                }
            },{
                icon: 'extjs-build/examples/restful/images/delete.png',
                tooltip: 'Delete',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Terminate " + rec.get('firstname'));
                }
            }]
        }
    ],
    width: 250,
    renderTo: Ext.getBody()
});