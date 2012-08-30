Ext.define('GoodbyeMoney.view.categories.List', {
    extend: 'Ext.dataview.List',
    xtype: 'categorieslist',

    config: {
        store: 'Categories',
        itemTpl: '{name}',
        onItemDisclosure: true,
    }
});