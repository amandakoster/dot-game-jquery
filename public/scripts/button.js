'use strict';

//toggle button - needs to control animation
$('.start_button').on('click', function (e) {
  e.preventDefault();
  $(this).text(function (_, text) {
    return text === 'Pause' ? 'Start' : 'Pause';
  }).toggleClass('stop_button');
});

//funtionign start/stop button needs to be 1 button
$(function() {
  $( '#stop' ).click(function() {
    $( '#dot-animation' ).addClass( 'off' );
  });
  $( '#start' ).click(function() {
    $( '#dot-animation' ).removeClass( 'off' );
  });
});

$('#example-two').on('click', function() {
  var el = $(this);
  if (el.text() == el.data('text-swap')) {
    el.text(el.data('text-original'));
  } else {
    el.data('text-original', el.text());
    el.text(el.data('text-swap'));
  }
});

// $('#stop').click( function(e){
//   e.preventDefault();
//   if ( $(this).hasClass('isDown') ) {
//     $('#nav').stop().animate({marginTop:'-100px'}, 200);
//   } else {
//     $('#nav').stop().animate({marginTop:'0px'}, 200);
//   }
//   $(this).toggleClass('isDown');
//   return false;
// });
