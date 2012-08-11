Ext.configure('GoodbyeMone.model.Spent', {
    extent: 'Ext.app.Model',
      config: {
        fields: {
            { name: 'id', type: 'int' },
            { name: 'amount', type: 'float' },
            { name: 'description', type: 'string' }
        }

        validations: {
            { type: 'presence', field: 'amount' },
            { type: 'format', field: 'amount', matcher: /^(\d+)?(\.\d+)?$/ }
        }
    }
})