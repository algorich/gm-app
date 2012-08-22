Ext.define('GoodbyeMoney.model.Spent', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'amount', type: 'float' },
            { name: 'description', type: 'string' },
            { name: 'date', type: 'datetime' },
            { name: 'category', type: 'string' }
        ],

        validations: [
            { type: 'presence', field: 'amount' },
            { type: 'format', field: 'amount', matcher: /^(\d+)?(\.\d+)?$/ }
        ]
    }
});