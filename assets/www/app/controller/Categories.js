Ext.define('GoodbyeMoney.controller.Categories', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
          'categories/new': 'new'
        },

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
            newCategoryButton: {
                tap: 'new'
            },
            saveButton: {
                tap: 'save'
            }
        }
    },

    new: function() {
        Ext.Viewport.setActiveItem(this.getForm());
    },

    save: function() {
        var category = Ext.create('GoodbyeMoney.model.Category', this.getForm().getValues());
            errors = category.validate();

        if (errors.isValid()){
            category.save();
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