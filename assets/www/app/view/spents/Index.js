Ext.define('GoodbyeMoney.view.spents.Index', {
    extend: 'Ext.List',
    fullscreen: true,

    config: {
        store: 'GoodbyeMoney.store.Spents',
        itemTpl: '{amount}'
    }
});