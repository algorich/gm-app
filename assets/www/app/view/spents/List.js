Ext.define('GoodbyeMoney.view.spents.List', {
    extend: 'Ext.List',
    xtype: 'spentslist',

    config: {
        title: 'spents',
        iconCls: 'list',

        store: 'Spents',
        itemTpl: '<div>$ {amount} &raquo; <small>{date:date("Y-m-d")}</small></div>',
        // itemTpl: '{date:date("Y-m-d")} - ${amount}',
        onItemDisclosure: true,

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Spents'
            }
        ]
    }
});