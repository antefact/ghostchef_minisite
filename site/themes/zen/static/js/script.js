var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top-$( window ).height()
          }, 500);
    return false;
});

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


window.onload = function() {

}




$(document).ready(function() {
    $('#fullpage').fullpage({
      fitToSection: false,
      fitToSectionDelay: 1000,
      autoScrolling:false,
      scrollBar:true

    });

    // Video



    $("#play-button").click( function() {
      if (  $("#video").get(0).paused == true) {
        $("#video").get(0).play();

      } else {
        // Pause the video
        $("#video").get(0).pause();
      }
    });

});
