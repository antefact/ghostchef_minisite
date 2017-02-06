var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $(window).height()
    }, 500);
    return false;
});

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';



$(window).on('load', function() {
    $('.owl-carousel').owlCarousel({
        center: true,
        items: 1.1,
        loop: true,
        nav: true,
        lazyLoad: true,
        navText: [
            "<i class='fa fa-chevron-left fa-2x' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right fa-2x' aria-hidden='true'></i>"
        ],
    });
    AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      });


$(document).ready(function() {

    // Video

    var videoElem = document.getElementById("main-video");

    $("#main-video").get(0).addEventListener('play', toggleBigButton, false);
    $("#main-video").get(0).addEventListener('pause', toggleBigButton, false);

    function toggleBigButton() {
        if (videoElem.paused == true) {
            $("#play-button").removeClass('playing');
        } else {
            $("#play-button").addClass('playing');
        }
    }

    $("#play-button").click(function() {
        if (videoElem.paused == true) {
          //if the video is played from small device send it to fullscreen
            if ($(window).width() > 739) {
            } else {
                if (videoElem.requestFullscreen) {
                  videoElem.requestFullscreen();
                } else if (videoElem.mozRequestFullScreen) {
                  videoElem.mozRequestFullScreen(); // Firefox
                } else if (videoElem.webkitRequestFullscreen) {
                  videoElem.webkitRequestFullscreen(); // Chrome and Safari
                }
            }
            playMovie()
        } else {
            videoElem.pause();
        }
    });

    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.

    function playMovie() {
        var playPromise = videoElem.play();
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
