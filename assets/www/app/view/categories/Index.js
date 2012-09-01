Ext.define('GoodbyeMoney.view.categories.Index', {
    extend: 'Ext.Container',
    xtype: 'categoriesindex',

    requires: ['Ext.TitleBar'],

    config: {
        title: 'categories',
        iconCls: 'tags',
        layout: 'vbox', /* ajust the layout to show all items content */

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Category'
            },
            { xtype: 'categoriesform', flex: 1 },
            { xtype: 'categorieslist', flex: 1 }
        ]
    }
});