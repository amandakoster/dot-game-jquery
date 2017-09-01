'use strict';

$(document).ready(function(){
  $( '#stop' ).click(function() {
    $('#stop').slideDown();
    $( '#animated' ).addClass( 'off' );
  });
  $( '#start' ).click(function() {
    $( '#animated' ).removeClass( 'off' );
  });
});

// let createDot = function(){
//   let dotSize = Math.ceil((Math.random() * (max - min) + min;})
//
// }
