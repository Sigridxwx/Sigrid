$(document).ready(function(){


      //Selecting content
      $(".greeting")
      //Modifying content
      .text("Greetings");


      // Reacting on click
      $(".hi").click(function(){
          //Modifying content
          $(".greeting").text("Hi");
          $(".greeting").css("font-family", "serif");

      });

      //Program Rules (like a recipe)
      $(".hello").click(function(){
          //Modifying content
          $(".greeting").text("Hello");
          $(".greeting").css("font-family", "sans-serif");

      });




      //Program Rules (like a recipe)
      $(".button").click(function(){
          //Modifying content
        $(".grid div:first-child ").css("background-color", "lightblue");
        $(".grid div:nth-child(2) ").css("background-color", "lightblue");
        $(".grid div:nth-child(3) ").css("background-color", "lightblue");

      });

      //Program Rules (like a recipe)
      $(".button2").click(function(){
          //Modifying content
        $(".grid div:first-child ").css("background-color", "pink");
        $(".grid div:nth-child(2) ").css("background-color", "pink");
        $(".grid div:nth-child(3) ").css("background-color", "pink");

      });



});
