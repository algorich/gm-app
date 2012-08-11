Ext.define('GoodbyeMoney.controller.Spents', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'spents': 'index',
            'spents/:id/edit': 'edit'
        },

        refs: {
            sayGoodbyeButton: {
                xtype: 'formpanel',
                selector: 'button'
            }
        },

        control: {
            sayGoodbyeButton: {
                tap: 'sayGoodbye'
            }
        }
    },

    sayGoodbye: function() {
        console.log('TODO: save the spent');
    },

    index: function() {
        console.log('products index =)');
    },

    edit: function(id) {
        console.log('edit spent ' + id);
    }
});