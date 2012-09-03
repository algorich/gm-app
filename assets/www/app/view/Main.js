Ext.define('GoodbyeMoney.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    title: 'Goodbye Money',

    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
            { xtype: 'newspent' },
            { xtype: 'spentsmain' },
            { xtype: 'categoriesindex' }
        ]
    }
});