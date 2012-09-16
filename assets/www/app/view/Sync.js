Ext.define('GM.view.Sync', {
    extend: 'Ext.Container',
    xtype: 'sync',

    config: {
        title: 'sync',
        iconCls: 'sync',
        layout: 'card',

        items: [
            {
                xtype: 'panel',
                styleHtmlContent: true,
                html: 'You can sync your data to the online webservice.'
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Sync'
            },
            {
                xtype: 'panel',
                styleHtmlContent: true,
                html: 'Already have an account?'
            },
            {
                xtype: 'button',
                text: 'Sign in',
                ui: 'action',
                action: 'goToSignIn'
            },
            {
                xtype: 'panel',
                styleHtmlContent: true,
                html: "Don't have an account?"
            },
            {
                xtype: 'button',
                text: 'Sign up',
                ui: 'action',
                action: 'goToSignUp'
            }

        ]
    }
})