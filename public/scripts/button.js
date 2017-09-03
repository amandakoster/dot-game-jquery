'use strict';

// $(function() {
//   $( '#stop' ).click(function() {
//     $( '#dot-animation' ).addClass( 'pause' );
//   });
//   $( '#start' ).click(function() {
//     $( '#dot-animation' ).removeClass( 'off' );
//   });
// });

//toggle button - needs to control animation
$('.start_button').on('click', function (e) {
  e.preventDefault();
  $(this).text(function (_, text) {
    return text === 'Pause' ? 'Start' : 'Pause';
  }).toggleClass('stop_button');
});

//functioning start/stop button needs to be 1 button

// $('#example-two').on('click', function() {
//   var el = $(this);
//   if (el.text() == el.data('text-swap')) {
//     el.text(el.data('text-original'));
//   } else {
//     el.data('text-original', el.text());
//     el.text(el.data('text-swap'));
//   }
// });
