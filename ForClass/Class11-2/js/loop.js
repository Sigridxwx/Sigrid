$(document).ready(function(){

  var max = 200;
  var min = 50;

// var string = "hello"
// var bool = "true"

  for (var i = 0; i < 50; i++) {
    //create and append a square into the animation
    var leftPosition = Math.floor(Math.random() * 100);
    var size = Math.floor(Math.random() * max - min + 1) + min;
    var delay = Math.floor(Math.random() * 15);
    var square = $("<li></li>");
    square.css({'left': leftPosition + '%', 'top': '100%', 'width': size + 'px', 'height' : size + 'px', 'animation-delay': delay + 's'});
    $('.squares').append(square);
  }


  $('.squares li').click(function() {
    $(this).css('background', 'lightblue');
  });


});
