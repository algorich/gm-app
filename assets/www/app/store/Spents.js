Ext.define('GoodbyeMoney.store.Spents', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GoodbyeMoney.model.Spent',
        autoSync: true,

        sorters: [
            {
                property : 'date',
                direction: 'DESC'
            }
        ],

        grouper: {
            direction: 'DESC',
            groupFn: function(record) {
                var mounthNames = ['January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August', 'September', 'October',
                    'November', 'December'];
                var date = record.get('date');

                return date.getFullYear() + ', ' + mounthNames[date.getMonth()];
            }
        }
    }
});