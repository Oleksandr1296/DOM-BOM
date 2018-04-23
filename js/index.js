
$(window).scroll( function () {
  var sr=$(this).scrollTop();
  $("#parallax1").css({
    "transform":"translate(0%,-" + sr /10 +"%"
  });
  $("#parallax2").css({
    "transform":"translate(0%,-" + sr /40 +"%"
  });
  $(".header").css({
    "transform":"translate(0%,-" + sr *2 +"%"
  });
});
