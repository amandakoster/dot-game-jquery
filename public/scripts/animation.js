'use strict';

(function(){var e = jQuery,f = 'jQuery.pause',d = 1,b = e.fn.animate,a = {};function c(){return new Date().getTime();}e.fn.animate = function(k,h,j,i){var g = e.speed(h,j,i);g.complete = g.old;return this.each(function(){if(!this[f]){this[f] = d++;}var l = e.extend({},g);b.apply(e(this),[k,e.extend({},l)]);a[this[f]] = {run:true,prop:k,opt:l,start:c(),done:0};});};e.fn.pause = function(){return this.each(function(){if(!this[f]){this[f] = d++;}var g = a[this[f]];if(g && g.run){g.done += c() - g.start;if(g.done > g.opt.duration){delete a[this[f]];}else{e(this).stop();g.run = false;}}});};e.fn.resume = function(){return this.each(function(){if(!this[f]){this[f] = d++;}var g = a[this[f]];if(g && !g.run){g.opt.duration -= g.done;g.done = 0;g.run = true;g.start = c();b.apply(e(this),[g.prop,e.extend({},g.opt)]);}});};})();

$(document).ready(function(){
  $('#box').hover(function() {
    $('#box').pause();
  }, function() {
    $('#box').resume();
  });
});

$(function() {
  function setupBox(i) {
    var $box = $('#box' + i);
    function phase1() {
      $box.animate({ left: 450 }, 2000, 'swing', phase2);
    }
    function phase2() {
      $box.animate({ left: 0 }, 2000, 'swing', phase1);
    }
    $box.hover(function() {
      $box.pause();
    }, function() {
      $box.resume();
    });
    phase1();
  }
  setupBox(1);
  setupBox(2);
  setupBox(3);
});

 //
 //
 // $(document).ready(function(){
 //   $('#jq-button').click(function(){
 //     $('#jq-animate').animate({
 //       down: '+=1400',
 //     }, 5000, 'linear', function() {
 //                 loop();
 //             });
 //         }
 //
 //         loop();
 //      });

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

// $(document).ready(function(){
//   $('#button').click(function() {
//     $('#animate').dotMove();
//     $('.transform').toggleClass('transform-active');
//   });
// });
