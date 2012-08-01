/* set database. */
var DB = Lawnchair({name:'goodbyemoney'}, function(){});

/* jquery mobile config */
$.mobile.page.prototype.options.addBackBtn = true;
$.mobile.page.prototype.options.backBtnText = "voltar";

/* Virify if the phone load PhoneGap. */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("menubutton", onMenuButtonDown, false);
};

function onMenuButtonDown(){
    updateList();
    $.mobile.changePage("#page-list");
};

/* Handle events. */
$(function(){
    $('#say-goodbye').on('tap', function(){
        var amount = $('[name="amount"]').val(),
            desc = $('[name="description"]').val(),
            date = new Date();
        saveSpent(amount, desc, date);
        navigator.app.exitApp();
    });

    /* get the spent id from the list item and inject in the spent menu dialog.
    It is needed to get the id accessible to delete or edit the spent entry. */
    $('#page-list').on('tap', 'li', function(){
        var id = $(this).attr('spent-id');
        $('#spent-menu').attr('spent-id', id);
    });

    $('#delete-spent').on('tap', function(){
        var id = $(this).parents('#spent-menu').attr('spent-id');
        if (confirm('Are you sure?')) {
            DB.remove(id);
            updateList();
        };
    });
});

/* update the spending list. */
function updateList() {
    ul = $('#spending-list');
    DB.all(function(list) {
        /* order spending list by date and time. */
        list.sort(function(a,b){ return b.key - a.key; });
        ul.html('');
        list.forEach(function(spent) {
            ul.append('<li spent-id="'+spent.key+'"><a href="#spent-menu" data-rel="dialog">' +
                        '<h3>R$ ' + spent.value.amount + '</h3>' +
                        '<p><strong>' + spent.value.description + '</strong></p>' +
                        '<p>' + spent.value.date + '</p>' +
                      '</li>');
        });
    });
    /* only refresh the list if it already exists. The second param is to force
    the refresh to get the corners rounded. */
    if (ul.hasClass('ui-listview')) { ul.listview('refresh', true); };
};

/*
Save the spent on the database.

amount:         string, int or float
description:    string
date:           Date object
*/
function saveSpent (amount, description, date) {
    DB.save({
        key: date.getTime(),
        value: { amount: amount, description: description, date: date.toString() }
    });
}