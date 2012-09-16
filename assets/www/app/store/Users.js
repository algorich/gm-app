Ext.define('GM.store.Users', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GM.model.User',
        autoSync: true,
        autoLoad: true
    }
});