$(document).ready(function() {
  $("h3").click(function() {
    $("#tealeafhide").toggle();
    $("#tealeafshow").toggle();
  });

  $("img").click(function() {
    $(".leafpic").toggle();
    $(".teapic").toggle();
    // $(".brewpic").toggle();
  });

  $("p#smoky").click(function(){
    $("ul").append("<li>You should try black tea.</li>");
  });

  $("p#fruity").click(function(){
    $("ul").append("<li>You should try hibiscus tea.</li>");
  });


  $("p#grassy").click(function(){
    $("ul").append("<li>You should try green tea.</li>");
  });
});



//worksheet
// $("p#fruity").children("li").first().click(function() {
//   $("ul").append("<li>You should try hibiscus tea.</li>");
// });
