Ext.define('GoodbyeMoney.controller.Spents', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'spents': 'index',
            'spents/:id/edit': 'edit'
        },

        refs: {
            saveButton: {
                xtype: 'formpanel',
                selector: 'button[action="saveSpent"]'
            },
            form: {
                xtype: 'spentsform',
                selector: 'spentsform',
                autoCreate: true
            }
        },

        control: {
            saveButton: {
                tap: 'save'
            }
        }
    },

    new: function() {
        var categories_store = Ext.getStore('Categories');
        categories_store.load();
        Ext.Viewport.add(this.getForm());
    },

    save: function() {
        var spent = Ext.create('GoodbyeMoney.model.Spent', this.getForm().getValues());
            errors = spent.validate();

        if (errors.isValid()){
            /* should have a non invasive way to do this */
            spent._data.amount = spent._data.amount.toFixed(2);
            spent.save();
            navigator.app.exitApp();
        } else {
            Ext.Msg.alert(
                'Field with error',
                'Fix the following errors:'
            )
            console.log(errors.items);
        }
    },

    index: function() {
        console.log('products index =)');
    },

    edit: function(id) {
        console.log('edit spent ' + id);
    }
});