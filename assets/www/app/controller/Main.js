Ext.define('GoodbyeMoney.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            spentsListButton: {
                /* this is the 2th tab button */
                selector: '#ext-tab-2'
            }
        },

        control: {
            spentsListButton: {
                tap: function() { Ext.getStore('Spents').load(); }
            }
        }
    },

    show: function() {
        Ext.getStore('Categories').load();
        Ext.Viewport.add({ xtype: 'mainpanel' });
    }
});