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

    sync: function() {
        var user = Ext.getStore('Users').first();
        var store = Ext.getStore('Categories');
        var categories = [];

        store.load();
        store.each(function(record) {
            categories.push({
                id: record.data.id,
                name: record.data.name
            });
        });

        function onSuccess (result) {
            console.log(result);
        }

        function onFailure (result) {
            console.log(result);
        }

        if (navigator.network.connection.type != Connection.NONE) {
            Ext.Ajax.request({
                url: WEBSERVER_URL + '/categories/sync',
                // jsonData: categories,
                // headers: {'Content-Type': 'application/json'},
                params: {
                    token: user.data.token,
                    api_token: API_TOKEN,
                    categories: JSON.stringify(categories)
                },
                withCredentials: true,      /* necessary to cross domain requests */
                useDefaultXhrHeader: false, /* necessary to cross domain requests */
                success: onSuccess,
                failure: onFailure
            });
        }
    }
});