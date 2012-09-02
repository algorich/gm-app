Ext.define('GoodbyeMoney.view.spents.List', {
    extend: 'Ext.List',
    xtype: 'spentslist',

    config: {
        title: 'spents',
        iconCls: 'list',

        store: 'Spents',
        itemTpl: new Ext.XTemplate(
            '<div>',
            '<b>$ {[values.amount.toFixed(2)]}</b> <small>({date:date("Y-m-d")})</small>',
            '<tpl if="category_id">',
                '<br/><small>{[this.categoryName(values.category_id)]}</small>',
            '</tpl>',
            '<tpl if="description">',
                '{[this.preSeparator(values.category_id)]}',
                '<small>{description}</small>',
            '</tpl>',
            '</div>',
            {
                categoryName: function(category_id) {
                    return Ext.getStore('Categories').getById(category_id).data.name
                },
                preSeparator: function(preItem) {
                    return preItem ? '<small> &raquo; </small>' : '<br/>';
                }
            }
        ),

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