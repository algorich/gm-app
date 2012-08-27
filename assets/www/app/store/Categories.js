Ext.define('GoodbyeMoney.store.Categories', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GoodbyeMoney.model.Category',
        autoload: true,
        autoSync: true
    }
});