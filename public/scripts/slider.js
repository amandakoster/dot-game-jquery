'use strict';

//slider prints value to the dom - needs to control animation speed
var slider = document.getElementById('slider-range');
var output = document.getElementById('slider-value');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};
<<<<<<< HEAD
=======

$(document).ready(function(){
  $('button').click(function(){
    $('div').animate({left: '250px'});
  });
});
>>>>>>> 4d6bd4f6d4adef3ac3d4e862a239b67fc96bb718
