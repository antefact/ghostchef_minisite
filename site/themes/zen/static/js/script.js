var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $(window).height()
    }, 500);
    return false;
});

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';



$(window).on('load',function(){
      $('.owl-carousel').owlCarousel({
        center: true,
        items: 1.1,
        loop: true,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left fa-2x' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right fa-2x' aria-hidden='true'></i>"
        ],
    });
  });


$(document).ready(function() {

    // Video

    $("#main-video").get(0).addEventListener('play', toggleBigButton, false);
    $("#main-video").get(0).addEventListener('pause', toggleBigButton, false);

    function toggleBigButton() {
        if ($("#main-video").get(0).paused == true) {
            $("#play-button").removeClass('playing');
        } else {
            $("#play-button").addClass('playing');
        }
    }

    $("#play-button").click(function() {
        if ($("#main-video").get(0).paused == true) {
            playMovie()
        } else {
            $("#main-video").get(0).pause();
        }
    });

    // In browsers that don’t yet support this functionality,
// playPromise won’t be defined.

  function playMovie(){
    var playPromise=$("#main-video").get(0).play();

  if (playPromise !== undefined) {
    playPromise.then(function() {
      // Automatic playback started!
    }).catch(function(error) {
      // Automatic playback failed.
      // Show a UI element to let the user manually start playback.
      console.log(error);
    });
  }
}

});
