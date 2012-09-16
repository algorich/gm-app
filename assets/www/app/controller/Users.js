Ext.define('GM.controller.Users', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            signInForm: {
                xtype: 'signinform',
                selector: 'signinform',
                autoCreate: true
            },
            signInButton: {
                xtype: 'signinform',
                selector: 'button[action="signIn"]'
            },
            goToSignInButton: {
                selector: 'button[action="goToSignIn"]'
            },
            signUpForm: {
                xtype: 'signupform',
                selector: 'signupform',
                autoCreate: true
            },
            signUpButton: {
                xtype: 'signupform',
                selector: 'button[action="signUp"]'
            },
            goToSignUpButton: {
                selector: 'button[action="goToSignUp"]'
            },
            mainPanel: {
                xtype: 'mainpanel',
                selector: 'mainpanel',
                autoCreate: true
            }
        },
        control: {
            signInButton: {
                tap: 'signIn'
            },
            goToSignInButton: {
                tap: 'goToSignIn'
            },
            signUpButton: {
                tap: 'signUp'
            },
            goToSignUpButton: {
                tap: 'goToSignUp'
            }
        }
    },

    start: function() {
        var store = Ext.getStore('Users');
        var user = store.first();

        if (user) {
            if (user.data.token != null)
                Ext.Viewport.setActiveItem(this.getMainPanel());
            else
                Ext.Viewport.setActiveItem(this.getSignInForm());
        } else {
            Ext.Viewport.setActiveItem(this.getSignUpForm());
        }
    },

    // TODO: This should go to model
    setToken: function(token) {
        var store = Ext.getStore('Users');
        var user = store.first();

        if (user) {
            user.set('token', token);
        } else {
            store.add({ id: 1, token: token }); /* create a new user */
        }
    },

    signIn: function () {
        var form = this.getSignInForm();
        var that = this;
        var mask = Ext.LoadMask.create({
            centered: true,
            indicator: true,
            message: "Loading..."
        });
        Ext.Viewport.add(mask);

        if (navigator.network.connection.type != Connection.NONE) {
            mask.show();
            form.submit({success: onSuccess, failure: onFailure });
        } else {
            Ext.Msg.alert(
                'Without connection',
                'Verify your internet connection.'
            );
        }

        function onSuccess (form, result) {
            that.setUserAndToken(result.token);
            mask.hide();
            Ext.Viewport.setActiveItem(that.getMainPanel());
        }

        function onFailure (form, result) {
            // 400: bad request; 401: unauthorized
            // In this case, the 401 should be handled here (and not on the
            // model proxy) because the user is not logged yet.
            if (result.status === 400 || result.status === 401) {
                var response = JSON.parse(result.responseText);
                mask.hide();
                Ext.Msg.alert('Ops!', response.message);
            };
        }
    },

    signUp: function () {
        var form = this.getSignUpForm();
        var that = this;
        var mask = Ext.LoadMask.create({
            centered: true,
            indicator: true,
            message: "Loading...",
        });
        Ext.Viewport.add(mask);

        if (navigator.network.connection.type != Connection.NONE) {
            mask.show();
            form.submit({success: onSuccess, failure: onFailure });
        } else {
            Ext.Msg.alert(
                'Without connection',
                'Verify your internet connection.'
            );
        }

        function onSuccess (form, result) {
            that.setUserAndToken(result.token);
            mask.hide();
            Ext.Viewport.setActiveItem(that.getMainPanel());
        }

        function onFailure (form, result) {
            // 400: bad request
            if (result.status === 400) {
                var response = JSON.parse(result.responseText);
                var text = ''
                for (item in response) {
                    if (response.hasOwnProperty(item))
                        text += item + ' ' + response[item][0] + '<br/>'
                }
                mask.hide();
                Ext.Msg.alert('Ops!', text);
            };
        }
    },

    goToSignIn: function () {
        Ext.Viewport.setActiveItem(this.getSignInForm());
    },

    goToSignUp: function () {
        Ext.Viewport.setActiveItem(this.getSignUpForm());
    },

    // TODO: This should go to model
    setUserAndToken: function(token) {
        var store = Ext.getStore('Users');
        var user = store.first();

        if (user) {
            user.set('token', token);
        } else {
            user = GM.model.User.create({ id: 1, token: token });
            user.save();
            store.sync();
            store.load();
        }
    },
});