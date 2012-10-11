Ext.define('GM.view.Sync', {
    extend: 'Ext.Container',
    xtype: 'sync',

    config: {
        title: 'sync',
        iconCls: 'sync',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Sync'
            },
            {
                xtype: 'panel',
                styleHtmlContent: true,
                html: 'You can sync your data to the online webservice.'
            },
            {
                xtype: 'button',
                text: 'Sync now',
                action: 'sync'
            }
        ]
    }
})