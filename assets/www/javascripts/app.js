var DB = Lawnchair({name:'goodbyemoney'}, function(){});

/* Virify if the phone load PhoneGap */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
};

/* Handle events. */
$(function(){
  $('#keyboard').on('click', '.digit', function(){
      digit = $(this).text();
      $('#value').text(function(index, text){
        return text + digit;
      });
  });

  $('#keyboard .del').click(function(){
      $('#value').text(function(index, text){
        return text.slice(0, -1);
      });
  });
});