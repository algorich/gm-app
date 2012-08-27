Ext.define('GoodbyeMoney.view.spents.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.spentsform',
    title: 'Spent',
    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Number',
        'Ext.field.DatePicker', 'Ext.field.Select'],

    config: {
        fullscreen: true,
        title: 'spent',
        iconCls: 'organize',

        layout: {
            type: 'vbox',
            align: 'center'
        },

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Goodbye Money'
            },
            {
                xtype: 'fieldset',
                title: 'Set spent',
                items: [
                    {
                        xtype: 'numberfield',
                        label: 'Amount',
                        name: 'amount'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Category',
                        name: 'category',
                        placeHolder: 'select one...',
                        store: 'Categories',
                        valueField: 'id',
                        displayField: 'name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Date',
                        name: 'date',
                        value: new Date()
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Say Goodbye!',
                ui: 'confirm',
                action: 'saveSpent'
            }
        ]
    }
});