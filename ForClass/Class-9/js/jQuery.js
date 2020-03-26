// This is how you start your js file

$(document).ready(function(){  //Beginning of your document

  // This will hide your html elements when your page loads
  $("main .b").hide();
  $("main .c").hide();
  $("main .d").hide();
  $("main .e").hide();
  $("main .f").hide();

// Find this id // when click run this function
  $("#Light").click(function(){
  // Find the id body
        $("#Body").addClass("light", true);
        $("#Body").removeClass("dark", false);
});

// Find this id // when click run this function
  $("#Dark").click(function(){
  // Find the id body
        $("#Body").toggleClass("dark", true);
        $("#Body").toggleClass("light", false);
});


  $("#FadeO").click(function(){
        // Find all class fade and fadeOut in 1 second
      $(".fade").fadeOut(1000);
  });

  $("#FadeI").click(function(){
    // Find all class fade and fadeIn in 1 second
      $(".fade").fadeIn(1000);
  });

///           MENU          ////

$("aside ul li:first-child").click(function(){
  $("main .a").show();
  $("main .b").hide();
  $("main .c").hide();
  $("main .d").hide();
  $("main .e").hide();
  $("main .f").hide();
});

$("aside ul li:nth-child(2)").click(function(){
  $("main .a").hide();
  $("main .b").show();
  $("main .c").hide();
  $("main .d").hide();
  $("main .e").hide();
  $("main .f").hide();
});

$("aside ul li:nth-child(3)").click(function(){
  $("main .a").hide();
  $("main .b").hide();
  $("main .c").show();
  $("main .d").hide();
  $("main .e").hide();
  $("main .f").hide();
});
$("aside ul li:nth-child(4)").click(function(){
  $("main .a").hide();
  $("main .b").hide();
  $("main .c").hide();
  $("main .d").show();
  $("main .e").hide();
  $("main .f").hide();
});
$("aside ul li:nth-child(5)").click(function(){
  $("main .a").hide();
  $("main .b").hide();
  $("main .c").hide();
  $("main .d").hide();
  $("main .e").show();
  $("main .f").hide();
});
$("aside ul li:nth-child(6)").click(function(){
  $("main .a").hide();
  $("main .b").hide();
  $("main .c").hide();
  $("main .d").hide();
  $("main .e").hide();
  $("main .f").show();
});




});  //end of your document
