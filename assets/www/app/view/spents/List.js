Ext.define('GoodbyeMoney.view.spents.List', {
    extend: 'Ext.List',
    xtype: 'spentslist',

    config: {
        title: 'spents',
        iconCls: 'list',

        store: 'Spents',
        itemTpl: '<div>$ {amount} &raquo; <small>{date:date("Y-m-d")}</small></div>',
        onItemDisclosure: true,
        grouped: true,

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Spents'
            }
        ]
    }
});