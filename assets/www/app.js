Ext.application({
    name: 'GM',

    views: [
        'Main',
        'spents.Main',
        'spents.New',
        'spents.Edit',
        'spents.List',
        'categories.Index',
        'categories.Form',
        'categories.List'
    ],
    controllers: [
        'Main',
        'Spents',
        'Categories'
    ],
    models: [
        'Spent',
        'Category'
    ],
    stores: [
        'Spents',
        'Categories'
    ],

    launch: function() {
        /* set the default date format */
        Ext.util.Format.defaultDateFormat = 'Y-m-d';

        this.getController('Main').show();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
