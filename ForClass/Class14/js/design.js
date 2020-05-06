$(document).ready(function(){



  var div1 = $(".grid div:first-child img").offset();
  var div2 = $(".grid div:nth-child(3) img").offset();
  var div3 = $(".grid div:nth-child(5) img").offset();
  var div4 = $(".grid div:nth-child(7) img").offset();


  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if(wScroll > div1.top - 300) {
        //do stuff
        $(".grid div:first-child img").addClass('anim');
    }
    if(wScroll > div2.top - 300) {
        //do stuff
        $(".grid div:nth-child(3) img").addClass('anim');
    }
    if(wScroll > div3.top - 300) {
        //do stuff
        $(".grid div:nth-child(5) img").addClass('anim');
    }
    if(wScroll > div4.top - 300) {
        //do stuff
        $(".grid div:nth-child(7) img").addClass('anim');
    }
});

});
