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
function printScore(ele, width) {
  $('.score').text('Score: ' + width);
};
$('.dot').click(function() {
  var score = Math.ceil(1 / $('.dot').width() * 100);
  gameModel.score = gameModel.score + score;
  printScore('.score', gameModel.score);
  console.log(score);
});

// create raondom dots
function createDot(x, y) {
  var elem = document.createElement('div');
  elem.setAttribute('class', 'dot');
  elem.setAttribute('style', 'left:' + x + 'px;top:' + y + 'px;');
  document.getElementsByTagName('body')[0].appendChild(elem);
  return elem;
}
function anotherDot() {
  createDot(Math.floor(Math.random() * 200), Math.floor(Math.random() * 200));
}
for(var i = 0;i < 10;i++) {
  anotherDot();
}

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

  // spawn dots + offset
  if (gameModel.pause === false) {
    if (offset.top > windowBottom) {
      var left = getRandomArbitrary(0, ($(window).width()));
      $dot.offset({top: 0, left: left});
      var randomNumber = parseInt(getRandomArbitrary(10, 100));
      $dot.width(randomNumber);
      $dot.height(randomNumber);
    } else {
      $dot.offset(offset);
    }
  }

  window.requestAnimationFrame(animationLoop);
}

window.requestAnimationFrame(animationLoop);
