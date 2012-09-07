Ext.define('GM.view.categories.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.categoriesform',
    xtype: 'categoriesform',
    requires: ['Ext.form.FieldSet', 'Ext.field.Text'],

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'New',
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