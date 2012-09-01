Ext.define('GoodbyeMoney.store.Categories', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GoodbyeMoney.model.Category',
        autoSync: true,

        sorters: ['name'],

        listeners: {
            /* hack to set an empty category on select field */
            load: function(store) {
                store.add({name: ''});
            }
        }
    }
});