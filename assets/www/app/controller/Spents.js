Ext.define('GM.controller.Spents', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.MessageBox'],

    config: {
        refs: {
            newForm: {
                xtype: 'newspent',
                selector: 'newspent',
                autoCreate: true
            },
            editForm: {
                xtype: 'editspent',
                selector: 'editspent',
                autoCreate: true
            },
            list: {
                xtype: 'spentslist',
                selector: 'spentslist'
            },
            mainPanel: {
                xtype: 'mainpanel',
                selector: 'mainpanel'
            },
            createButton: {
                xtype: 'newspent',
                selector: 'button[action="createSpent"]'
            },
            createOtherSpent: {
                xtype: 'newspent',
                selector: 'button[action="createOtherSpent"]'
            },
            updateButton: {
                xtype: 'editspent',
                selector: 'button[action="updateSpent"]'
            },
            cancelUpdateSpent: {
                xtype: 'editspent',
                selector: 'button[action="cancelUpdateSpent"]'
            },
            deleteSpent: {
                xtype: 'editspent',
                selector: 'button[action="deleteSpent"]'
            }
        },

        control: {
            createButton: {
                tap: 'create'
            },
            createOtherSpent: {
                tap: 'create'
            },
            updateButton: {
                tap: 'update'
            },
            cancelUpdateSpent: {
                tap: 'list'
            },
            deleteSpent: {
                tap: 'destroy'
            },
            list: {
                itemtap: 'edit'
            }
        }
    },

    create: function (button) {
        var form = this.getNewForm();
        var spent = Ext.create('GM.model.Spent', form.getValues());
        var errors = spent.validate();

        if (errors.isValid()) {
            spent.save();
            if (button.config.action === 'createSpent')
                navigator.app.exitApp();
            else
                form.reset();
        } else {
            /* TODO: show errors */
            Ext.Msg.alert(
                'Field with error',
                'Fix the following errors:'
            );
        }
    },

    update: function() {
        var form = this.getEditForm();
        var store = Ext.getStore('Spents');
        var record = store.findRecord('id', form.getRecord().getId());
        record.set(form.getValues());
        form.reset();
        this.list();
    },

    edit: function (list, index, element, record) {
        /* TODO: validate */
        var form = this.getEditForm();
        form.setRecord(record);
        Ext.Viewport.setActiveItem(form);
    },

    list: function() {
        var mainpanel = this.getMainPanel();
        Ext.Viewport.setActiveItem(mainpanel);
        mainpanel.setActiveItem(1);
    },

    destroy: function() {
        var that = this;
        Ext.Msg.confirm(
            'Delete spent',
            'Are you sure?',
            function(buttonId) {
                if (buttonId === 'yes') {
                    var form = that.getEditForm();
                    var store = Ext.getStore('Spents');
                    var record = store.findRecord('id', form.getRecord().getId());
                    store.remove(record);
                    form.reset();
                    that.list();
                };
            }
        );
    }
});