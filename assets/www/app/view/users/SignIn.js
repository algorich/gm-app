Ext.define('GM.view.users.SignIn', {
    extend: 'Ext.form.Panel',
    xtype: 'signinform',
    requires: ['Ext.form.FieldSet', 'Ext.field.Password', 'Ext.field.Email',
        'Ext.TitleBar'],

    config: {
        fullscreen: true,
        title: 'Sign in',

        url: WEBSERVER_URL + '/users/sign_in',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Goodbye Money'
            },
            {
                xtype: 'fieldset',
                title: 'Sign in',

                items: [
                    {
                        xtype: 'emailfield',
                        name: 'user[email]',
                        label: 'Email'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'user[password]',
                        label: 'Password'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'api_token',
                        value: API_TOKEN
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Sign in',
                ui: 'confirm',
                action: 'signIn'
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
});