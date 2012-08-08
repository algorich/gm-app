Ext.define('GoodbyeMoney.controller.Spents', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'spents': 'productsIndex',
            'products/:id/edit': 'editProduct'
        }
    },

    productsIndex: function() {
        console.log('products index =)');
    },

    editProduct: function(id) {
        console.log('edit spent ' + id);
    }
});