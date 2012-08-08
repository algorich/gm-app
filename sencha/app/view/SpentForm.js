Ext.define('GoodbyeMoney.view.SpentForm', {
    extend: 'Ext.form.Panel',
    title: 'Spent',
    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.form.Number'],

    config: {
        fullscreen: true,
        scrollable: false,

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
                        xtype: 'textfield',
                        label: 'Description',
                        name: 'description'
                    }
                ]
            }
        ]
    }
});