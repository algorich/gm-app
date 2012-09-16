Ext.define('GM.view.users.SignUp', {
    extend: 'Ext.form.Panel',
    xtype: 'signupform',
    requires: ['Ext.form.FieldSet', 'Ext.field.Password', 'Ext.field.Email',
        'Ext.field.Hidden', 'Ext.TitleBar'],

    config: {
        fullscreen: true,
        title: 'Sign up',

        url: WEBSERVER_URL + '/users',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Goodbye Money'
            },
            {
                xtype: 'fieldset',
                title: 'Sign up',

                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'api_token',
                        value: API_TOKEN
                    },
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
                        xtype: 'passwordfield',
                        name: 'user[password_confirmation]',
                        label: 'Confirm'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Sign up',
                ui: 'confirm',
                action: 'signUp'
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
            }
        ]
    }
});