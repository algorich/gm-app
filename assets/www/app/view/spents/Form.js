Ext.define('GoodbyeMoney.view.spents.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.spentsform',
    xtype: 'spentsform',
    title: 'Spent',
    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Number',
        'Ext.field.DatePicker', 'Ext.field.Select'],

    config: {
        title: 'spent',
        iconCls: 'compose',

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
                        name: 'category_id',
                        placeHolder: 'select one...',
                        value: '',
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