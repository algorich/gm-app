var DB = Lawnchair({name:'goodbyemoney'}, function(){});

/* Virify if the phone load PhoneGap */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
};

/* Handle events. */
/* TODO: refactoring based on:
    http://floatlearning.com/2011/03/developing-better-phonegap-apps/
    http://developers.google.com/mobile/articles/fast_buttons */
$(function(){
  $('#keyboard').on('touchend', '.digit', function(){
      digit = $(this).text();
      $('#value').text(function(index, text){
        return text + digit;
      });
  });

  $('#keyboard').on('touchend', '.del', function(){
      $('#value').text(function(index, text){
        return text.slice(0, -1);
      });
  });
});