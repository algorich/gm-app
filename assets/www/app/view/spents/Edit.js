Ext.define('GoodbyeMoney.view.spents.Edit', {
    extend: 'Ext.form.Panel',
    xtype: 'editspent',
    title: 'Spent',
    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Number',
        'Ext.field.DatePicker', 'Ext.field.Select', 'Ext.field.Hidden'],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Edit spent',
                items: [
                    {
                        xtype: 'button',
                        text: 'back',
                        ui: 'back',
                        action: 'cancelUpdateSpent'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Set spent',
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'id'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Amount',
                        name: 'amount'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Category',
                        name: 'category_id',
                        valueField: 'value',
                        displayField: 'name',
                        /* store: 'Categories',*/
                        listeners: {
                            /* Hack to set an empty category on select field.
                               Sencha touch should provide a default way to do
                               this with store option. It should be on painted
                               event to update when a category is added; and on
                               initialize to set on first form load. */
                            initialize: function() { this.updateOpts(); }
                            painted: function() { this.updateOpts(); },
                        },
                        updateOpts: function() {
                            var opts = [{ name: '', value: null }];
                            Ext.getStore('Categories').each(function(record) {
                                opts.push({ name: record.data.name, value: record.data.id });
                            });
                            this.setOptions(opts);
                        }
                    },
                    {
                        xtype: 'textfield',
                        label: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Date',
                        name: 'date'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Update',
                ui: 'confirm',
                action: 'updateSpent',
                margin: '0 0 10 0'
            },
            {
                xtype: 'button',
                text: 'Delete',
                ui: 'decline',
                action: 'deleteSpent',
                margin: '0 0 10 0'
            },
            {
                xtype: 'button',
                text: 'Cancel',
                action: 'cancelUpdateSpent'
            }
        ]
    }
});