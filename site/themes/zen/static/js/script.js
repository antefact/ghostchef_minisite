var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $(window).height()
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
        autoScrolling: false,
        scrollBar: true

    });
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1.1,
        loop: true,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left fa-2x' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right fa-2x' aria-hidden='true'></i>"
        ],

    });


    // Video

    $("#video").get(0).addEventListener('play', toggleBigButton, false);
    $("#video").get(0).addEventListener('pause', toggleBigButton, false);


    function toggleBigButton() {
        if ($("#video").get(0).paused == true) {
            $("#play-button").removeClass('playing');
        } else {
            $("#play-button").addClass('playing');
        }
    }

    $("#play-button").click(function() {
        if ($("#video").get(0).paused == true) {
            $("#video").get(0).play();
        } else {
            $("#video").get(0).pause();
        }
    });

});
