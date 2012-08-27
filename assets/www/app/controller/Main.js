Ext.define('GoodbyeMoney.controller.Main', {
    extend: 'Ext.app.Controller',

    show: function() {
        Ext.getStore('Categories').load();
        Ext.Viewport.add({ xtype: 'mainpanel' });
    }
});