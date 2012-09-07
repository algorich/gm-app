Ext.define('GM.store.Categories', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GM.model.Category',
        autoSync: true,

        sorters: ['name']
    }
});