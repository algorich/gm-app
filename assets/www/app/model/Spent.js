Ext.define('GoodbyeMoney.model.Spent', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.LocalStorage', 'Ext.data.identifier.Uuid',
        'GoodbyeMoney.model.Category' ],

    config: {
        identifier: 'uuid',

        fields: [
            { name: 'id', type: 'int' },
            { name: 'amount', type: 'float' },
            { name: 'description', type: 'string' },
            { name: 'date', type: 'datetime' },
            { name: 'category_id', type: 'string' },
        ],

        belongsTo: { model: 'GoodbyeMoney.model.Category', name: 'category' },

        validations: [
            { type: 'presence', field: 'amount' },
            { type: 'format', field: 'amount', matcher: /^(\d+)?(\.\d+)?$/ }
        ],

        proxy: {
            type: 'localstorage',
            id: 'goodbyemoney-spent'
        },
    }
});