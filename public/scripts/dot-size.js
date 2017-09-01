'use strict';

var link = document.getElementById('getNumber');
link.onclick = getNumber;

function getNumber() {
  var min = 10;
  var max = 100;
  var randomNumber = Math.random() * (max + 1) + min;
  $('#result').html(randomNumber);
  return false;
}

$(document).ready(function(){
  $('.btn2').click(function(){
    $('ul').append('<button>new button</button>');
  });
});

//
// function getRandomArbitrary(min, max){
//   return Math.random() * (max - min) + min;}
//
// function Dot(height, width){
//   dotSize= increment();
//   randomize= getRandomArbitrary(10,100);
//   this.height= '' + randomize() + 'px';
//   this.width= '' + randomize() + 'px';
// }
// onclick(createDot())
//
// let createDot = function() {
//   let dotSize = (Math.ceil((1 / this.state.randomize) * 100));
//   let randomize = getRandomArbitrary(10, 100)});
//     console.log('dot', 1/this.state.randomize);
// }

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
//
// var button = document.getElementById('refresh');
//
// var refresh = function() {
//   var x = Math.floor(Math.random() * 300);
//   var y = Math.floor(Math.random() * 300);
//   var radius = Math.floor(Math.random() * 20);
//   var r = Math.floor(Math.random() * 255);
//   var g = Math.floor(Math.random() * 255);
//   var b = Math.floor(Math.random() * 255);
//   ctx.beginPath();
//   ctx.arc(x,y,radius,Math.PI * 2,0,false);
//   ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
//   ctx.fill();
//   ctx.closePath();
// };

// var newCircle = $('<button />');
// var min = 10;
// var max = 100;
// var d = Math.ceil(Math.random() * max);
// newCircle.addClass('circle');
//
// newCircle.css({
//   width: d,
//   height: d,
//   left: Math.random() * Math.max($('#container').width() - d, 0),
//   top: Math.random() * Math.max($('#container').height - d, 0),
//   backgroundColor: getRandomColor()
// });
// $('#container').append(newCircle);
//
// function getRandomColor() {
//   var colors = ['#00c0f1', '#add036', '#ec2426', '#ffc116'];
//   return colors[Math.floor(Math.random() * 4)];
// }
