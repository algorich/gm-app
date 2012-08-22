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
                selector: '#say_goodbye_button'
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

    save: function() {
        var spent = Ext.create('GoodbyeMoney.model.Spent', this.getForm().getValues());
            errors = spent.validate();

        if (errors.isValid()){
            var store = Ext.getStore('Spents');
            /* should have a non invasive way to do this */
            spent._data.amount = spent._data.amount.toFixed(2);
            store.add(spent);
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