Ext.define('GoodbyeMoney.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainpanel',
    title: 'Goodbye Money',

    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
            { xtype: 'spentsform' },
            { xtype: 'categoriesform' }
        ]
    }
});