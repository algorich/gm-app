Ext.define('GM.model.Spent', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.LocalStorage', 'Ext.data.identifier.Uuid',
        'GM.model.Category' ],

    config: {
        identifier: 'uuid',

        fields: [
            { name: 'id', type: 'int' },
            { name: 'amount', type: 'float' },
            { name: 'description', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'category_id', type: 'string' },
        ],

        belongsTo: { model: 'GM.model.Category', name: 'category' },

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