'use strict';

var link = document.getElementById('getNumber');
link.onclick = getNumber;
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

function getNumber() {
  var min = 10;
  var max = 100;
  var randomNumber = Math.random() * (max + 1) + min;
  $('#result').html(randomNumber);
  return false;
}

$(document).ready(function(){
  $('#btn2').click(function(){
    $('ol').append('<button>new button</button>');
  });
});
