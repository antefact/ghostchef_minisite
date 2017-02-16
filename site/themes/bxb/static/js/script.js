var $root = $('html, body');

$('a.anchor').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
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

    var $lg = $('#lightgallery');

    $lg.lightGallery({
      selector: '.gallery-item',
      mode: 'lg-fade',
      cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)'
    });


    $('#hero').on('inview', function(event, isInView) {
      if (isInView) {
        $('#mainNav').addClass("transparent");
      } else {
        $('#mainNav').removeClass("transparent");
      }
    });


    var videoElem = document.getElementById("main-video");


    function toggleBigButton() {
        if (videoElem.paused == true) {
            $("#play-button").removeClass('playing');
        } else {
            $("#play-button").addClass('playing');
        }
    }

    $("#main-video").click(function() {
        playMovieFullScreenIfDevice();
    })

    $(".closeVideo").click(function() {
        $("#videoPlayer").toggleClass("visible");
        $("#hero").css("z-index", "1");
        videoElem.pause();
    })

    $("#watchMovie").click(function() {
        $("#videoPlayer").toggleClass("visible");
        playMovieFullScreenIfDevice();

    });

    $("#play-button").click(function() {
        playMovieFullScreenIfDevice();
    });


        $("#bxbQRCode").click(function(event) {
            event.preventDefault();
            $(".sn-wechat .qrcode").toggleClass("qrcode_open");
        });


    function playMovieFullScreenIfDevice() {
        if (videoElem.paused == true) {
            if ($(window).width() > 739) {
              $("#hero").css("z-index", "100");

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
            $("#hero").css("z-index", "1");
            videoElem.pause();
        }
    }

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
