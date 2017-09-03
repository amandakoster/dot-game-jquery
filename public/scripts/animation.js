'use strict';

$('button').click(function(){
  function animate() {
    $('.square').animate({ left: '500px'}, 2000, 'swing', function(){
      $(' .square').animate({
        left: '0px'
      }, 2000, 'swing', animate);
    });
  };
  animate();
});

$('.stop').click(function(){
  $('.square').stop(true);
});

// function myMove() {
//   var elem = document.getElementById('dot-animation');
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }
