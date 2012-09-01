Ext.define('GoodbyeMoney.store.Spents', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GoodbyeMoney.model.Spent',
        autoSync: true
    }
});