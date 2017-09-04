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
  score : 0,
};

// print inverse dot width as score
function printScore(ele, w) {
  $('.score').text('Score: ' + w);
};
$('#dot').click(function() {
  var score = Math.ceil(1 / $('#dot').width() * 1000);
  gameModel.score = gameModel.score + score;
  printScore('.score', gameModel.score);
  console.log(score);
});

  // output.innerHTML = this.value;

// determine window width for hz offset
var offset = $dot.offset();
$('#dot').click(function() {
  var left = getRandomArbitrary(0, ($(window).width()));
  $(this).offset({ top: 0, left: left });
  var randomNumber = parseInt(getRandomArbitrary(10, 100));
  $(this).width(randomNumber);
  $(this).height(randomNumber);
});

// click to pause
$(function() {
  $('#pause').click(function() {
    gameModel.pause = !gameModel.pause;
    $(this).text(gameModel.pause ? 'Start' : 'Pause');
  });
});

// slider to control velocity
var slider = document.getElementById('slider-range');
var output = document.getElementById('slider-value');
slider.oninput = function() {
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
