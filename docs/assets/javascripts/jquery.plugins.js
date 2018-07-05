$(function () {
objectFitImages( 'img.ofi' );
});

var menuHeight = $("#langulages__wrapper").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 800) {
      $("#langulages__wrapper").css("bottom", "-" + "600px");
    }
  } else {
    $("#langulages__wrapper").css("bottom", 40 + "px");
  }
  startPos = currentPos;
});
