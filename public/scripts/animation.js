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
//   let dotSize = Math.ceil((Math.random() * (max - min) + min})
//
// }
function myMove() {
  var elem = document.getElementById('animate');
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

$(document).ready(function(){
  $('#button').click(function() {
    $('#animate').dotMove();
    $('.transform').toggleClass('transform-active');
  });
});

(function( $ ) {
  $(function() {
    $( '#stop' ).click(function() {
      $( '#animated' ).addClass( 'off' );
    });
    $( '#start' ).click(function() {
      $( '#animated' ).removeClass( 'off' );
    });
  });

})( jQuery );
