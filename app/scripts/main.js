"use strict"
$('#toggle-aside').click(function(){
  $('aside').toggle();
  $('main').toggleClass('col-xs-7');
});
