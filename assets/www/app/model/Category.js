Ext.define('GoodbyeMoney.model.Category', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.LocalStorage'],

    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ],

        hasMany: { model: 'GoodbyeMoney.model.Spent', name: 'spents' },

        validations: [
            { type: 'presence', field: 'name' }
        ],

        proxy: {
            type: 'localstorage',
            id: 'goodbyemoney-category'
        }
    }
});