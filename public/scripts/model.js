'use strict';

var $dot = $('#dot');

var gameModel = {
  velocity : 10,
  pause : false,
};

// var randomize = function randomize() {
//   function getRandomArbitrary(min, max){
//     console.log(randomize);
// };

// $dot.randomize()

// $('#dot').increment();

var offset = $dot.offset();
$('#dot').click(function() {
  console.log('click');
  $(this).offset({ top: 10, left: 50 });
});

$(function() {
  $('#pause').click(function() {
    gameModel.pause = !gameModel.pause;
    $(this).text(gameModel.pause ? 'Start' : 'Pause');
  });
});

var slider = document.getElementById('slider-range');
var output = document.getElementById('slider-value');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  gameModel.velocity = this.value;
};

var windowBottom = $(window).height();
console.log(windowBottom);
var lastFrameTime = null;
function animationLoop(timestamp) {
  if (lastFrameTime == null) {
    lastFrameTime = timestamp;
    window.requestAnimationFrame(animationLoop);
    return;
  }

  var frameTime = timestamp - lastFrameTime;
  lastFrameTime = timestamp;

  var offset = $dot.offset();
  offset.top += (gameModel.velocity / 100) * frameTime;

  // spawn
  if (gameModel.pause === false) {

    if (offset.top > windowBottom) {
      offset.top = 0;
      offset.left += 50;
    }
    $dot.offset(offset);
  }

  window.requestAnimationFrame(animationLoop);
}

window.requestAnimationFrame(animationLoop);
