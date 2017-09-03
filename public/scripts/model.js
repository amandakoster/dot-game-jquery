'use strict';

var gameModel = {
  velocity : 10,
  pause : false,
};

$(function() {
  $('#pause').click(function() {
    gameModel.pause = !gameModel.pause;
    $(this).text(gameModel.pause ? 'Start' : 'Pause');
    console.log(('clicked', gameModel.pause));
  });
});

var slider = document.getElementById('slider-range');
var output = document.getElementById('slider-value');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  gameModel.velocity = this.value;
};

var $dot = $('#dot');
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
