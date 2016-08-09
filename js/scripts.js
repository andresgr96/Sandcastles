$(document).ready(function() {
  $(".clickable").click(function() {
    $("#castle1-showing").toggle();
    $("#castle1-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable-2").click(function() {
    $(".castle2-showing").fadeToggle();
    $(".castle2-hidden").fadeToggle();
  });
});

$(document).ready(function() {
  $(".clickable-3").click(function() {
    $(".castle3-showing").slideToggle();
    $(".castle3-hidden").slideToggle();
  });
});
