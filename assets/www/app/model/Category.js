Ext.define('GM.model.Category', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.LocalStorage', 'Ext.data.identifier.Uuid'],

    requires: ['Ext.MessageBox'],

    config: {
        identifier: 'uuid',

        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ],

        hasMany: { model: 'GM.model.Spent', name: 'spents' },

        validations: [
            { type: 'presence', field: 'name' }
        ],

        proxy: {
            type: 'localstorage',
            id: 'goodbyemoney-category'
        }
    }
});