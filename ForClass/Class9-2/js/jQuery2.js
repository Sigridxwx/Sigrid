$(document).ready( function(){


$("#_hide").click(function(){
  $(".gridContent div:first-child p").hide();
});

$("#_show").click(function(){
  $(".gridContent div:first-child p").show();
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <b>World</b>!");
});

$("#_css").click(function(){
  $(".box").css("background-color", "lightblue");
});


$("footer").mouseover(function(){
    $("footer p").html("Yeah! You're over me");
});

$("footer").mouseleave(function() {
  $("footer p").html("Comeback...=(");
});



// --------------------- Debug #4 ----------------------------

// Here goes your jQuery :

$("#showme").click(function(){
   $(".smallGridBug div:first-child p").show();
});
$("#hideme").click(function(){
   $(".smallGridBug div:first-child p").hide();
});
$("#toggleme").click(function(){
   $(".smallGridBug div:nth-child(2) p").toggle();
});
$("#htmlme").click(function(){
   $(".smallGridBug div:nth-child(3) p").html("<em>Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum</em>!");
});
$("#cssme").click(function(){
   $(".smallGridBug div:nth-child(4) p").css({"background-color": "green",
   "color": "yellow", "font-family": "sans-serif"});
});


});
