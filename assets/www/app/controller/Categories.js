Ext.define('GM.controller.Categories', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.MessageBox'],

    config: {
        refs: {
            form: {
                xtype: 'categoriesform',
                selector: 'categoriesform',
                autoCreate: true
            },
            saveButton: {
                xtype: 'formpanel',
                selector: 'button[action="saveCategory"]'
            }
        },

        control: {
            saveButton: {
                tap: 'save'
            }
        }
    },

    save: function() {
        var form = this.getForm();
        var category = Ext.create('GM.model.Category', form.getValues());
        var errors = category.validate();

        if (errors.isValid()){
            category.save();
            form.reset()
            Ext.getStore('Categories').load();
        } else {
            /* TODO: do this better, showing the errors on respective field */
            var errors_string = '';
            errors.each(function(item) {
                errors_string += item.getField() + ' ' + item.getMessage();
            })
            Ext.Msg.alert(
                'Field with error',
                'Fix the following errors:' + errors_string
            )
        }
    },
});