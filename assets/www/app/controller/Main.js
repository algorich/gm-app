Ext.define('GM.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            spentsListTab: {
                /* this is the 2th tab button */
                selector: '#ext-tab-2'
            },
            syncButton: {
                selector: 'button[action="sync"]'
            }
        },

        control: {
            spentsListTab: {
                tap: function() { Ext.getStore('Spents').load(); }
            },
            syncButton: {
                tap: 'sync'
            }
        }
    },

    show: function() {
        Ext.getStore('Categories').load();
        Ext.Viewport.add({ xtype: 'mainpanel' });
    },

    sync: function() {
        GM.app.getController('Categories').sync();
        GM.app.getController('Spents').sync();
    }
});