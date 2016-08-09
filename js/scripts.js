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

});
