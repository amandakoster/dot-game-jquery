console.log($);

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

  var velocity = 100 / 1000;
  var offset = $dot.offset();
  offset.top += velocity * frameTime;

  // spawn
  if (offset.top > windowBottom) {
    offset.top = 0;
    offset.left += 50;
  }

  $dot.offset(offset);

  window.requestAnimationFrame(animationLoop);
}

window.requestAnimationFrame(animationLoop);
