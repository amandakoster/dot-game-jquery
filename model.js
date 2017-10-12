'use strict';

// globals
var $dot = $('.dot');

$(function(){
  $('.how-to').click(function() {
    $(this).remove();
  });
});

function getRandomArbitrary(min, max){
  return Math.random() * (max - min) + min;
}

// model
var gameModel = {
  velocity : 10,
  pause : false,
  dotSize : 0,
  score : 0,
};

// print inverse dot width as score
function printScore(el, width) {
  $('.score').text('Score: ' + width);
};

$('.dot').click(function() {
  var score = Math.ceil(1 / $('.dot').width() * 100);
  gameModel.score = gameModel.score + score;
  printScore('.score', gameModel.score);
  console.log(score);
});

// determine window width for hz offset
var offset = $dot.offset();
$('.dot').click(function() {
  var left = getRandomArbitrary(0, ($(window).width()));
  $(this).offset({ top: 0, left: left });
  var randomNumber = parseInt(getRandomArbitrary(10, 100));
  $(this).width(randomNumber);
  $(this).height(randomNumber);
});

// click to pause
$(function() {
  $('#pause').click(function() {
    $(this).toggleClass('red');
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
console.log(windowBottom, 'window bottom');
var lastFrameTime = null;

//start animation loop
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

  //forEach calcuate 4 random offsets

  // spawn dots + offset
  if (gameModel.pause === false) {
    //randomizes offset
    if (offset.top > windowBottom) {
      var left = getRandomArbitrary(0, ($(window).width()));
      // var top = getRandomArbitrary(0, ($(window).height()));
      $dot.offset({top: 0, left: left});
      var randomNumber = parseInt(getRandomArbitrary(10, 100));
      $dot.width(randomNumber);
      $dot.height(randomNumber);
    } else {
      $dot.offset(offset);
    }
    // anotherDot();
  }

  window.requestAnimationFrame(animationLoop);
}
//end animation loop

window.requestAnimationFrame(animationLoop);
