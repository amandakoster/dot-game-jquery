'use strict';

var $dot = $('#dot');

function getRandomArbitrary(min, max){
  return Math.random() * (max - min) + min;
  console.log(result);
}

var gameModel = {
  velocity : 10,
  pause : false,
  dotSize : 0,
};

//print score or width
function showWidth( ele, w ) {
  $('.score').text('Score: ' + w);
}
$('#dot').click(function() {
  showWidth('.score', Math.ceil(1 / $('#dot').width() * 1000));
});

//onclick log a random number
var randomNumber = Math.random() * (100 - 10) + 10;
console.log(randomNumber);

//get window width for left offset
var offset = $dot.offset();
$('#dot').click(function() {
  var left = getRandomArbitrary(0, ($(window).width()));
  $(this).offset({ top: 0, left: left });
  var randomNumber = parseInt(getRandomArbitrary(10, 100));
  $(this).width(randomNumber);
  $(this).height(randomNumber);
  console.log(randomNumber);
});

//click to pause
$(function() {
  $('#pause').click(function() {
    gameModel.pause = !gameModel.pause;
    $(this).text(gameModel.pause ? 'Start' : 'Pause');
  });
});

//slider to control velocity
var slider = document.getElementById('slider-range');
var output = document.getElementById('slider-value');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  gameModel.velocity = this.value;
};

// determine window bottom for animation
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

  // spawn dots
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
