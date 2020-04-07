$(document).ready(function(){



$("#set1").hide();
$("#set2").hide();
$("#set3").hide();
$("#set4").hide();
$("#set5").hide();
$("#set6").hide();


// When someone Clicks button1 show the first one and hide the other 5 divs with the id set2 and set3
$("#button1").click(function(){
  $("#set1").toggle();
  $("#set2").hide();
  $("#set3").hide();
  $("#set4").hide();
  $("#set5").hide();
  $("#set6").hide();

});
// When someone Clicks button2 show the second one and hide the other 5 divs with the id set1 and set3
$("#button2").click(function(){
  $("#set1").hide();
  $("#set2").toggle();
  $("#set3").hide();
  $("#set4").hide();
  $("#set5").hide();
  $("#set6").hide();
});
// When someone Clicks button3 show the third one and hide the other 5 divs with the id set1 and set2
$("#button3").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").toggle();
  $("#set4").hide();
  $("#set5").hide();
  $("#set6").hide();
});
// When someone Clicks button4 show the third one and hide the other 5 divs with the id set1 and set2
$("#button4").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").hide();
  $("#set4").toggle();
  $("#set5").hide();
  $("#set6").hide();
});
// When someone Clicks button5 show the third one and hide the other 5 divs with the id set1 and set2
$("#button5").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").hide();
  $("#set4").hide();
  $("#set5").toggle();
  $("#set6").hide();
});
// When someone Clicks button6 show the third one and hide the other 5 divs with the id set1 and set2
$("#button6").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").hide();
  $("#set4").hide();
  $("#set5").hide();
  $("#set6").toggle();
});

$("#set1").mouseover(function(){
$(".gridContent1").show();
});

$("#set1").mouseleave(function(){
$(".gridContent1").hide();
});

$("#set2").mouseover(function(){
$(".gridContent2").show();
});

$("#set2").mouseleave(function(){
$(".gridContent2").hide();
});

$("#set3").mouseover(function(){
$(".gridContent3").css("color","white");
});

$("#set3").mouseleave(function(){
$(".gridContent3").css("color","pink");
});

$("#set4").mouseover(function(){
$(".gridContent4").show();
});

$("#set4").mouseleave(function(){
$(".gridContent4").hide();
});



$("#set6").mouseover(function(){
$(".gridContent6").html("The bridge extends 1.6 kilometers (1 mile) from Turtle Hill in Hanyang, on the northern bank of the Yangtze, to Snake Hill in Wuchang, on the southern bank of the Yangtze. Plans for the bridge's construction were first made in 1910. A total of four exploratory surveys were made between 1913 and 1948 to identify a suitable site, but economic limitations and the combination of World War II and the Chinese Civil War prevented the bridge's building until the 1950s. Actual construction began in September 1955 and was completed in October 1957.The upper level of the bridge is a two-way, four-lane automobile highway. The lower level is a double-track railway on the Beijing-Guangzhou railway line.");
});

$("#set6").mouseleave(function(){
$(".gridContent6").hide();
});



});  //This is the end of the document ready function
