$(document).ready(function(){


// This type of expressions will run without the need of calling them.
// In other words, this will hide set2 and set3 when the pages load
$("#set1").show();
$("#set2").show();
$("#set3").show();

// When someone Clicks button1 show the first one and hide the other 2 divs with the id set2 and set3
$("#button1").click(function(){
  $("#set1").show();
  $("#set2").hide();
  $("#set3").hide();
});
// When someone Clicks button2 show the second one and hide the other 2 divs with the id set1 and set3
$("#button2").click(function(){
  $("#set1").hide();
  $("#set2").show();
  $("#set3").hide();
});
// When someone Clicks button3 show the third one and hide the other 2 divs with the id set1 and set2
$("#button3").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").show();
});



});  //This is the end of the document ready function
