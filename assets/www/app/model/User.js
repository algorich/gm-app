Ext.define('GM.model.User', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'token', type: 'string' }
        ],

        proxy: {
          type: 'localstorage',
          id: 'goodbyemoney-user'
        }
    }
});