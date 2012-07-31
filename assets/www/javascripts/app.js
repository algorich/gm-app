/* set database */
var DB = Lawnchair({name:'goodbyemoney'}, function(){});

/* jquery mobile config */
$.mobile.page.prototype.options.addBackBtn = true;
$.mobile.page.prototype.options.backBtnText = "voltar";

/* Virify if the phone load PhoneGap */
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
        DB.save({
            key: date.getTime(),
            value: { amount: amount, description: desc, date: date.toString() }
        });
        navigator.app.exitApp();
    });
});

/* update the spending list. */
function updateList() {
    ul = $('#spending-list');
    DB.all(function(list) {
        /* order spending list by date and time */
        list.sort(function(a,b){ return b.key - a.key; });
        ul.html('');
        list.forEach(function(spent) {
            ul.append('<li>' +
                        '<h3>R$ ' + spent.value.amount + '</h3>' +
                        '<p><strong>' + spent.value.description + '</strong></p>' +
                        '<p>' + spent.value.date + '</p>' +
                      '</li>');
        });
    });
};