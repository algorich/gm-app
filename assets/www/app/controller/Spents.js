Ext.define('GoodbyeMoney.controller.Spents', {
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
            updateButton: {
                xtype: 'editspent',
                selector: 'button[action="updateSpent"]'
            },
            cancelUpdateSpent: {
                xtype: 'editspent',
                selector: 'button[action="cancelUpdateSpent"]'
            }
        },

        control: {
            createButton: {
                tap: 'create'
            },
            updateButton: {
                tap: 'update'
            },
            cancelUpdateSpent: {
                tap: 'list'
            },
            list: {
                itemtap: 'edit'
            }
        }
    },

    create: function () {
        var form = this.getNewForm();
        var spent = Ext.create('GoodbyeMoney.model.Spent', form.getValues());
        var errors = spent.validate();

        if (errors.isValid()) {
            spent.save();
            navigator.app.exitApp();
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
    }
});