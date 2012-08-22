Ext.define('GoodbyeMoney.store.Spents', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {
        model: 'GoodbyeMoney.model.Spent',
        proxy: {
            type: 'localstorage',
            id: 'goodbye-money-spent'
        },
        autoload: true,
        autoSync: true
    }
});