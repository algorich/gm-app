Ext.define('GoodbyeMoney.view.SpentForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.spentsform',
    title: 'Spent',
    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.form.Number',
        'Ext.field.DatePicker', 'Ext.field.Select'],

    config: {
        fullscreen: true,
        scrollable: false,

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
                        options: [
                            { text: '', value: '' },
                            { text:  'example', value: '1' }
                        ]
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
                id: 'say_goodbye_button'
            }
        ]
    }
});