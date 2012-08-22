Ext.define('GoodbyeMoney.view.SpentsList', {
    extend: 'Ext.List',
    fullscreen: true,

    config: {
        store: 'GoodbyeMoney.store.Spents',
        itemTpl: '{amount}'
    }
});