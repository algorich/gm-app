Ext.define('GoodbyeMoney.view.categories.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.categoriesform',
    xtype: 'categoriesform',
    title: 'Category',
    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Text'],

    config: {
        title: 'category',
        iconCls: 'star',

        layout: {
            type: 'vbox',
            align: 'center'
        },

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Category'
            },
            {
                xtype: 'fieldset',
                title: 'Category',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Save',
                ui: 'confirm',
                action: 'saveCategory'
            }
        ]
    }
});