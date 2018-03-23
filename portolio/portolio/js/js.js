$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $("#main-nav").css({
          "opacity": "1", 
          "color": "black",
      });
        
    } else {
      $("#main-nav").css("opacity","0");
    }
  });
});