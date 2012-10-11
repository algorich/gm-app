Ext.define('GM.store.Spents', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GM.model.Spent',
        autoSync: true,

        sorters: [
            {
                property : 'date',
                direction: 'DESC'
            }
        ],

        //
        // TODO: Find a better way to add the total spent on the group header.
        // Run the store.each loop for every record on the store sucks.
        //
        grouper: {
            sortProperty: 'date',
            direction: 'DESC',
            groupFn: function(record) {
                var mounthNames = ['January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August', 'September', 'October',
                    'November', 'December'];
                var total = 0;
                var store = record.stores[0];
                var date = record.get('date');
                var title = date.getFullYear() + ', ' + mounthNames[date.getMonth()];
                var template = new Ext.Template(
                    '{title} <span class="total-amount">total: $ {total}</span>'
                );

                store.each(function(item) {
                    if (item.get('date').getMonth() === date.getMonth())
                        total += item.get('amount');
                });

                return template.apply({title: title, total: total.toFixed(2)});
            }
        }
    }
});