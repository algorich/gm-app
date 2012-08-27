//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'GoodbyeMoney',

    views: ['Main', 'spents.Form', 'spents.Index', 'categories.Form'],
    controllers: ['Main', 'Spents', 'Categories'],
    models: ['Spent', 'Category'],
    stores: ['Spents', 'Categories'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        /* set the default date format */
        Ext.util.Format.defaultDateFormat = 'd/m/Y';
        this.getController('Main').show();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
