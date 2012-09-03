Ext.define('GoodbyeMoney.view.spents.Main', {
    extend: 'Ext.Panel',
    xtype: 'spentsmain',

    config: {
        layout: 'card',
        title: 'spents',
        iconCls: 'list',
        items: [
            { xtype: 'spentslist' },
            { xtype: 'editspent' }
        ]
    }
});